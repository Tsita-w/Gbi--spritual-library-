"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  BookMarked, 
  Clock, 
  Calendar, 
  Edit3, 
  Star, 
  ChevronRight,
  Heart,
  Share2,
  MoreHorizontal,
  PenLine,
  Bookmark,
  CheckCircle,
  XCircle
} from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

// Mock Data for User Profile
const USER_DATA = {
  name: "Alexander Demetrius",
  email: "alexander.d@orthodoxlibrary.org",
  joinDate: "January 2024",
  location: "Thessaloniki, Greece",
  bio: "Orthodox Christian, theology student, and avid reader of Church Fathers. Currently exploring Patristic writings.",
  totalBooksRead: 24,
  currentlyReading: 3,
  favoriteCategory: "Patristics",
  memberSince: "2024"
};

// Mock Data for Books with Notes
const BOOKS_WITH_NOTES = [
  { 
    id: 1,
    title: "The Philokalia", 
    author: "St. Nikodimos of the Holy Mountain",
    cover: "/books/philokalia.jpg",
    coverColor: "from-primary/30 to-secondary/20",
    icon: "📖",
    status: "COMPLETED",
    borrowDate: "2024-01-15",
    returnDate: "2024-02-15",
    rating: 5,
    notes: [
      { id: 1, content: "Chapter 3 on the Jesus Prayer is transformative. The concept of 'nous' (mind/heart) is explained beautifully.", page: 45, date: "2024-01-20" },
      { id: 2, content: "St. Hesychius on watchfulness - need to practice this daily. 'Watchfulness is a spiritual method.'", page: 78, date: "2024-01-25" },
      { id: 3, content: "The three stages of spiritual life: praktiki, physiki, theologia. Important framework.", page: 102, date: "2024-01-30" }
    ]
  },
  { 
    id: 2,
    title: "The Ladder of Divine Ascent", 
    author: "St. John Climacus",
    cover: "/books/ladder.jpg",
    coverColor: "from-secondary/30 to-primary/20",
    icon: "🪜",
    status: "READING",
    borrowDate: "2024-02-01",
    returnDate: "2024-03-01",
    rating: 4,
    notes: [
      { id: 1, content: "Step 4 on obedience - radical concept. 'Obedience is the tomb of the will.'", page: 23, date: "2024-02-05" },
      { id: 2, content: "Step 7 on mourning - tears of joy and repentance. Need to reflect more on this.", page: 56, date: "2024-02-10" }
    ]
  },
  { 
    id: 3,
    title: "On the Incarnation", 
    author: "St. Athanasius",
    cover: "/books/incarnation.jpg",
    coverColor: "from-primary/20 to-tertiary/30",
    icon: "✨",
    status: "COMPLETED",
    borrowDate: "2024-01-05",
    returnDate: "2024-02-05",
    rating: 5,
    notes: [
      { id: 1, content: "God became man so that man might become god. Theosis explained.", page: 34, date: "2024-01-10" },
      { id: 2, content: "The Cross as victory, not defeat. Brilliant reversal of human logic.", page: 67, date: "2024-01-15" },
      { id: 3, content: "Chapter on resurrection - 'For He was made man that we might be made god.'", page: 89, date: "2024-01-18" },
      { id: 4, content: "Against Arians section is particularly powerful.", page: 112, date: "2024-01-22" }
    ]
  },
  { 
    id: 4,
    title: "Way of a Pilgrim", 
    author: "Anonymous",
    cover: "/books/pilgrim.jpg",
    coverColor: "from-secondary/20 to-primary/20",
    icon: "🚶",
    status: "BORROWED",
    borrowDate: "2024-02-10",
    returnDate: "2024-03-10",
    rating: 0,
    notes: []
  },
  { 
    id: 5,
    title: "The Mystical Theology", 
    author: "St. Dionysius",
    cover: "/books/mystical.jpg",
    coverColor: "from-primary/25 to-secondary/15",
    icon: "🌌",
    status: "COMPLETED",
    borrowDate: "2023-12-01",
    returnDate: "2024-01-01",
    rating: 4,
    notes: [
      { id: 1, content: "Apophatic theology - we can only say what God is not.", page: 12, date: "2023-12-05" }
    ]
  }
];

// Mock Data for Currently Borrowed
const BORROWED_BOOKS = BOOKS_WITH_NOTES.filter(book => book.status === "BORROWED" || book.status === "READING");

export default function ProfilePage() {
  const [selectedBook, setSelectedBook] = useState<typeof BOOKS_WITH_NOTES[0] | null>(null);
  const [activeTab, setActiveTab] = useState("books");

  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Profile Header */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border">
          {/* Cover Photo */}
          <div className="h-48 bg-gradient-to-r from-primary to-secondary relative">
            <div className="absolute inset-0 bg-black/20" />
          </div>
          
          {/* Profile Info */}
          <div className="px-8 pb-8 relative">
            {/* Avatar */}
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-16 mb-6">
              <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander" />
                <AvatarFallback className="bg-primary text-4xl text-tertiary">AD</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold text-primary">{USER_DATA.name}</h1>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <span>{USER_DATA.email}</span>
                    <span className="text-gray-300">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      Joined {USER_DATA.joinDate}
                    </span>
                  </p>
                </div>
                
                <Button className="bg-primary text-tertiary hover:bg-secondary hover:text-primary transition-all duration-300">
                  <PenLine className="mr-2 h-4 w-4" />
                  Edit Profile
                </Button>
              </div>
            </div>
            
            {/* Bio */}
            <p className="text-gray-600 mb-6 max-w-2xl">{USER_DATA.bio}</p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard icon={<BookOpen className="h-5 w-5" />} label="Books Read" value={USER_DATA.totalBooksRead} />
              <StatCard icon={<Clock className="h-5 w-5" />} label="Currently Reading" value={USER_DATA.currentlyReading} />
              <StatCard icon={<Star className="h-5 w-5" />} label="Favorite" value={USER_DATA.favoriteCategory} />
              <StatCard icon={<Calendar className="h-5 w-5" />} label="Member Since" value={USER_DATA.memberSince} />
            </div>
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="books" className="space-y-6" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="books">My Books</TabsTrigger>
            <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
            <TabsTrigger value="notes">My Notes</TabsTrigger>
          </TabsList>

          {/* My Books Tab */}
          <TabsContent value="books" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Books List - Left Column */}
              <div className="lg:col-span-1 space-y-4">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <BookMarked className="h-5 w-5 text-secondary" />
                  Your Library
                </h2>
                
                <ScrollArea className="h-[600px] pr-4">
                  <div className="space-y-3">
                    {BOOKS_WITH_NOTES.map((book) => (
                      <button
                        key={book.id}
                        onClick={() => setSelectedBook(book)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          selectedBook?.id === book.id
                            ? 'bg-secondary/20 border-2 border-secondary'
                            : 'bg-white hover:shadow-md border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${book.coverColor} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-2xl">{book.icon}</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-primary truncate">{book.title}</p>
                            <p className="text-xs text-gray-500 truncate">{book.author}</p>
                          </div>
                          <Badge variant={book.status === "COMPLETED" ? "secondary" : "outline"}>
                            {book.status}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              {/* Book Details - Right Column */}
              <div className="lg:col-span-2">
                {selectedBook ? (
                  <Card className="border-2 hover:border-secondary/20 transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${selectedBook.coverColor} flex items-center justify-center`}>
                            <span className="text-4xl">{selectedBook.icon}</span>
                          </div>
                          <div>
                            <CardTitle className="text-2xl text-primary">{selectedBook.title}</CardTitle>
                            <CardDescription>{selectedBook.author}</CardDescription>
                          </div>
                        </div>
                        <Badge className={
                          selectedBook.status === "COMPLETED" 
                            ? "bg-green-500" 
                            : selectedBook.status === "READING"
                            ? "bg-secondary text-primary"
                            : "bg-blue-500"
                        }>
                          {selectedBook.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      {/* Book Meta */}
                      <div className="grid grid-cols-2 gap-4 p-4 bg-spiritual-cream rounded-xl">
                        <div>
                          <p className="text-sm text-gray-500">Borrowed</p>
                          <p className="font-medium text-primary">{selectedBook.borrowDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Return by</p>
                          <p className="font-medium text-primary">{selectedBook.returnDate}</p>
                        </div>
                        {selectedBook.rating > 0 && (
                          <div className="col-span-2">
                            <p className="text-sm text-gray-500">Your Rating</p>
                            <div className="flex gap-1 mt-1">
                              {[1,2,3,4,5].map(star => (
                                <Star key={star} className={`h-5 w-5 ${star <= selectedBook.rating ? 'fill-secondary text-secondary' : 'text-gray-300'}`} />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Notes Section */}
                      <div>
                        <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                          <PenLine className="h-5 w-5 text-secondary" />
                          Your Notes ({selectedBook.notes.length})
                        </h3>
                        
                        {selectedBook.notes.length > 0 ? (
                          <div className="space-y-4">
                            {selectedBook.notes.map((note) => (
                              <div key={note.id} className="bg-white p-4 rounded-xl border hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-2">
                                  <Badge variant="outline" className="border-secondary text-secondary">
                                    Page {note.page}
                                  </Badge>
                                  <span className="text-xs text-gray-400">{note.date}</span>
                                </div>
                                <p className="text-gray-700">{note.content}</p>
                                <div className="flex gap-2 mt-3">
                                  <Button variant="ghost" size="sm" className="h-8 text-gray-500 hover:text-primary">
                                    <Edit3 className="h-4 w-4 mr-1" />
                                    Edit
                                  </Button>
                                  <Button variant="ghost" size="sm" className="h-8 text-gray-500 hover:text-red-500">
                                    <XCircle className="h-4 w-4 mr-1" />
                                    Delete
                                  </Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="text-center py-12 bg-spiritual-cream rounded-xl border-2 border-dashed">
                            <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                            <p className="text-gray-500">No notes yet for this book</p>
                            <Button variant="link" className="text-secondary mt-2">
                              Add your first note
                            </Button>
                          </div>
                        )}

                        {/* Add Note Button */}
                        <Button className="w-full mt-4 bg-primary text-tertiary hover:bg-secondary hover:text-primary transition-all">
                          <PenLine className="mr-2 h-4 w-4" />
                          Add New Note
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="h-[600px] flex items-center justify-center bg-white rounded-xl border-2 border-dashed">
                    <div className="text-center">
                      <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500 text-lg">Select a book to view details and notes</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Borrowed Books Tab */}
          <TabsContent value="borrowed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BORROWED_BOOKS.map((book) => (
                <Card key={book.id} className="group hover:shadow-xl transition-all cursor-pointer" onClick={() => setSelectedBook(book)}>
                  <CardHeader>
                    <div className={`relative h-40 rounded-lg bg-gradient-to-br ${book.coverColor} flex items-center justify-center mb-4`}>
                      <span className="text-5xl opacity-50 group-hover:scale-110 transition-transform">
                        {book.icon}
                      </span>
                      <Badge className="absolute top-2 right-2 bg-primary text-tertiary">
                        Due: {book.returnDate}
                      </Badge>
                    </div>
                    <CardTitle className="text-primary">{book.title}</CardTitle>
                    <CardDescription>{book.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-secondary" />
                        <span className="text-sm text-gray-600">{book.borrowDate}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-secondary">
                        View <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* All Notes Tab */}
          <TabsContent value="notes">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary mb-6">All Your Notes</h2>
              {BOOKS_WITH_NOTES.filter(b => b.notes.length > 0).map((book) => (
                <div key={book.id} className="bg-white rounded-xl border p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${book.coverColor} flex items-center justify-center`}>
                      <span className="text-2xl">{book.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">{book.title}</h3>
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                    <Badge className="ml-auto">{book.notes.length} notes</Badge>
                  </div>
                  
                  <div className="space-y-3 pl-16">
                    {book.notes.map((note) => (
                      <div key={note.id} className="border-l-4 border-secondary pl-4 py-2">
                        <p className="text-gray-700">{note.content}</p>
                        <div className="flex gap-4 mt-2 text-xs text-gray-400">
                          <span>Page {note.page}</span>
                          <span>{note.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Stat Card Component
function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string | number }) {
  return (
    <div className="bg-spiritual-cream rounded-xl p-4">
      <div className="flex items-center gap-2 text-secondary mb-2">
        {icon}
      </div>
      <p className="text-2xl font-bold text-primary">{value}</p>
      <p className="text-xs text-gray-500">{label}</p>
    </div>
  );
}