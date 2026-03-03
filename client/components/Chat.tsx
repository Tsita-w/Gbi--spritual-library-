"use client";

import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Send,
  Plus,
  Menu,
  X,
  MessageSquare,
  Trash2,
  Settings,
  User,
  LogOut,
  BookOpen,
  Sparkles
} from 'lucide-react';

// Types
interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
}

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const idCounterRef = useRef(3);
  const [chats, setChats] = useState<Chat[]>([
    {
      id: '1',
      title: 'Theology Discussion',
      messages: [
        {
          id: '1-1',
          content: 'Can you explain the concept of Theosis?',
          role: 'user',
          timestamp: new Date()
        },
        {
          id: '1-2',
          content: 'Theosis is the transformative process of becoming more like God through divine grace. It\'s central to Orthodox theology, emphasizing union with God while maintaining distinction of essence.',
          role: 'assistant',
          timestamp: new Date()
        }
      ],
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Prayer Questions',
      messages: [
        {
          id: '2-1',
          content: 'What is the Jesus Prayer?',
          role: 'user',
          timestamp: new Date()
        }
      ],
      createdAt: new Date()
    }
  ]);
  
  const [activeChat, setActiveChat] = useState<string>('1');
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getNextId = () => {
    idCounterRef.current += 1;
    return idCounterRef.current.toString();
  };

  const currentChat = chats.find(chat => chat.id === activeChat);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !activeChat) return;
    
    setError(null); // Clear any previous errors

    // Optimistically add user message to UI
    const userMsg: Message = { 
      id: Date.now().toString(), 
      content: inputMessage, 
      role: 'user', 
      timestamp: new Date() 
    };
    
    setChats(prev => prev.map(c => 
      c.id === activeChat 
        ? { ...c, messages: [...c.messages, userMsg] } 
        : c
    ));
    
    setInputMessage('');
    setIsTyping(true);

    try {
      const res = await fetch('http://localhost:5000/api/chat/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          chatId: activeChat, 
          message: inputMessage 
        })
      });
      
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      
      const data = await res.json();
      
      // Update chat with real AI response from backend
      setChats(prev => prev.map(c => 
        c.id === activeChat ? { ...c, messages: data.chat.messages } : c
      ));
      
    } catch (error) {
      console.error("Failed to reach Orthodox AI Assistant:", error);
      setError("Failed to connect to the Orthodox AI Assistant. Please try again.");
      
      // Optionally remove the optimistically added user message on error
      setChats(prev => prev.map(c => 
        c.id === activeChat 
          ? { ...c, messages: c.messages.filter(msg => msg.id !== userMsg.id) } 
          : c
      ));
      
    } finally {
      setIsTyping(false);
    }
  };

  const createNewChat = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/chat/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          title: 'New Conversation' 
        })
      });
      
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      
      const data = await res.json();
      
      const newChat: Chat = {
        id: data.chatId || getNextId(),
        title: 'New Conversation',
        messages: [],
        createdAt: new Date()
      };
      
      setChats(prev => [newChat, ...prev]);
      setActiveChat(newChat.id);
      setError(null);
      
    } catch (error) {
      console.error("Failed to create new chat:", error);
      setError("Failed to create new chat. Please try again.");
    }
  };

  const deleteChat = async (chatId: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/chat/${chatId}`, {
        method: 'DELETE',
      });
      
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      
      setChats(prev => prev.filter(chat => chat.id !== chatId));
      
      if (activeChat === chatId && chats.length > 1) {
        const remainingChats = chats.filter(chat => chat.id !== chatId);
        setActiveChat(remainingChats[0].id);
      }
      
      setError(null);
      
    } catch (error) {
      console.error("Failed to delete chat:", error);
      setError("Failed to delete chat. Please try again.");
    }
  };

  const formatTimestamp = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-spiritual-cream to-white">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-80' : 'w-0'} transition-all duration-300 ease-in-out bg-white border-r shadow-lg relative flex flex-col`}>
        {sidebarOpen && (
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="p-4 border-b">
              <Button 
                onClick={createNewChat}
                className="w-full bg-primary text-tertiary hover:bg-secondary hover:text-primary transition-all duration-300"
              >
                <Plus className="mr-2 h-4 w-4" />
                New Chat
              </Button>
            </div>

            {/* Chat History */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-2">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    className={`group relative rounded-lg transition-all duration-200 ${
                      activeChat === chat.id 
                        ? 'bg-secondary/10 border-secondary/30' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <button
                      onClick={() => setActiveChat(chat.id)}
                      className="w-full text-left p-3 pr-12"
                    >
                      <div className="flex items-start gap-3">
                        <MessageSquare className={`h-5 w-5 mt-0.5 ${
                          activeChat === chat.id ? 'text-secondary' : 'text-gray-400'
                        }`} />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-primary truncate">{chat.title}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {chat.messages.length} messages
                          </p>
                        </div>
                      </div>
                    </button>
                    
                    {/* Delete button */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => deleteChat(chat.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Sidebar Footer */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-3 mb-4">
                <Avatar>
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=orthodox" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-primary">Orthodox Seeker</p>
                  <p className="text-xs text-gray-500">Premium Member</p>
                </div>
              </div>
              
              <div className="flex justify-around">
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-primary">
                  <Settings className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500">
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <header className="h-16 border-b bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-primary"
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {currentChat && (
              <div>
                <h2 className="font-semibold text-primary">{currentChat.title}</h2>
                <p className="text-xs text-gray-500">
                  {currentChat.messages.length} messages
                </p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span>Orthodox AI Assistant</span>
            </div>
          </div>
        </header>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {currentChat?.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {/* Avatar */}
                  <Avatar className="h-8 w-8">
                    {message.role === 'assistant' ? (
                      <>
                        <AvatarImage src="https://api.dicebear.com/7.x/bottts/svg?seed=orthodox-ai" />
                        <AvatarFallback className="bg-primary text-tertiary">AI</AvatarFallback>
                      </>
                    ) : (
                      <>
                        <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                        <AvatarFallback>U</AvatarFallback>
                      </>
                    )}
                  </Avatar>

                  {/* Message Bubble */}
                  <div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-tertiary'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1 px-2">
                      {formatTimestamp(new Date(message.timestamp))}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-primary text-tertiary">AI</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t bg-white p-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3 items-end">
              <div className="flex-1 relative">
                <textarea
                  placeholder="Ask about Orthodox theology, Scripture, or spiritual life..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      void handleSendMessage();
                    }
                  }}
                  className="w-full pr-12 py-4 text-base rounded-2xl border-2 focus:border-secondary transition-all resize-none min-h-14"
                  rows={1}
                  disabled={isTyping}
                />
                <Button
                  size="icon"
                  className="absolute right-2 bottom-2 bg-primary text-tertiary hover:bg-secondary hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Suggestions */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-secondary/30 text-secondary hover:bg-secondary/10 whitespace-nowrap"
                onClick={() => setInputMessage("What is Theosis?")}
                disabled={isTyping}
              >
                What is Theosis?
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-secondary/30 text-secondary hover:bg-secondary/10 whitespace-nowrap"
                onClick={() => setInputMessage("Explain the Jesus Prayer")}
                disabled={isTyping}
              >
                Explain Jesus Prayer
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-secondary/30 text-secondary hover:bg-secondary/10 whitespace-nowrap"
                onClick={() => setInputMessage("Who are the Church Fathers?")}
                disabled={isTyping}
              >
                Church Fathers
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="rounded-full border-secondary/30 text-secondary hover:bg-secondary/10 whitespace-nowrap"
                onClick={() => setInputMessage("What is the meaning of liturgy?")}
                disabled={isTyping}
              >
                Liturgy meaning
              </Button>
            </div>

            <p className="text-xs text-gray-400 text-center mt-4">
              Orthodox AI Assistant may provide theological information. Always consult spiritual fathers for guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}