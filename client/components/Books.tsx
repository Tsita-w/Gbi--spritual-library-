"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { 
  Search, 
  BookOpen, 
  Grid3x3,
  ChevronDown,
  Download,
  Eye,
  BookmarkPlus,
  LayoutList
} from 'lucide-react';

const BOOKS_DATA = [
  { 
    id: 1, 
    title: "The Path to Peace", 
    author: "Dr. Samuel K. Brown", 
    status: "AVAILABLE", 
    category: "Prayer", 
    tag: "PRAYER", 
    cover: "from-primary/10 to-primary/5",
    image: "/books/path-to-peace.jpg",
    format: "pdf"
  },
  { 
    id: 2, 
    title: "Ancient Wisdom", 
    author: "Elena G. White", 
    status: "AVAILABLE", 
    category: "Faith", 
    tag: "FAITH", 
    cover: "from-primary/10 to-primary/5",
    image: "/books/ancient-wisdom.jpg",
    format: "pdf"
  },
  { 
    id: 3, 
    title: "The Pure Heart", 
    author: "Pastor John Mark", 
    status: "RESERVED", 
    category: "Holiness", 
    tag: "HOLINESS", 
    cover: "from-primary/10 to-primary/5",
    image: "/books/pure-heart.jpg",
    format: "physical"
  },
];

const CATEGORIES = ["All", "Prayer", "Faith", "Holiness", "History"];

export default function BrowseBooks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const filteredBooks = BOOKS_DATA.filter(book => {
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#FAFBFF]"> {/* Softy background */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-primary">
              Browse <span className="text-primary">Library</span>
            </h1>
            <p className="text-slate-500 max-w-md">
              Discover spiritual growth through our curated collection of digital and physical books.
            </p>
          </div>
          
          {/* Modern View Toggle */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-600"}`}
            >
              <Grid3x3 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-white shadow-sm text-primary" : "text-slate-400 hover:text-slate-600"}`}
            >
              <LayoutList className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Search & Categories */}
        <div className="flex flex-col gap-6 mb-10">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Search by title, author, or topic..."
              className="pl-12 py-7 text-lg rounded-2xl border-slate-200 bg-white shadow-sm focus-visible:ring-primary/20 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant="ghost"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 transition-all ${
                  activeCategory === cat 
                  ? "bg-primary text-white hover:bg-primary/90 shadow-md shadow-primary/20" 
                  : "bg-white text-slate-600 border border-slate-200 hover:border-primary/30"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Books Display */}
        <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-4"}>
          {filteredBooks.map((book) => (
            <Card key={book.id} className={`group border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-3xl overflow-hidden bg-white ${viewMode === 'list' ? 'flex flex-row h-40' : ''}`}>
              
              {/* Image Section */}
              <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'h-64' : 'w-48 h-full'} bg-gradient-to-br ${book.cover}`}>
                {!imageErrors[book.id] ? (
                  <Image
                    src={book.image} alt={book.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={() => setImageErrors(p => ({ ...p, [book.id]: true }))}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center"><BookOpen className="h-10 w-10 text-primary/20" /></div>
                )}
                <Badge className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-slate-900 border-none font-medium shadow-sm">
                  {book.format === 'pdf' ? '📱 Digital' : '📚 Physical'}
                </Badge>
              </div>

              {/* Content Section */}
              <CardContent className={`p-6 flex flex-col justify-between ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-primary transition-colors">{book.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm mb-4 italic">by {book.author}</p>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-slate-300">•</span>
                    <span className={`text-xs font-semibold ${book.status === 'AVAILABLE' ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {book.status}
                    </span>
                  </div>
                </div>

                {/* Modern View Details Button with Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="w-full rounded-xl bg-slate-50 text-slate-900 border border-slate-200 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 group/btn py-6 shadow-none">
                      <span className="font-semibold">View Details</span>
                      <ChevronDown className="ml-2 h-4 w-4 opacity-50 group-hover/btn:rotate-180 transition-transform" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[calc(100%-48px)] sm:w-64 rounded-2xl p-2 shadow-2xl border-slate-100 animate-in fade-in slide-in-from-top-2">
                    {book.format === 'pdf' ? (
                      <>
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-primary/5 focus:bg-primary/5 focus:text-primary transition-colors">
                          <div className="p-2 bg-primary/10 rounded-lg"><Eye className="h-4 w-4 text-primary" /></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">Read Online</span>
                            <span className="text-[10px] text-slate-400">Instant access in browser</span>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-primary/5 focus:bg-primary/5 focus:text-primary transition-colors">
                          <div className="p-2 bg-primary/10 rounded-lg"><Download className="h-4 w-4 text-primary" /></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">Download PDF</span>
                            <span className="text-[10px] text-slate-400">Keep for offline reading</span>
                          </div>
                        </DropdownMenuItem>
                      </>
                    ) : (
                      <DropdownMenuItem className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-primary/5 focus:bg-primary/5 focus:text-primary transition-colors">
                        <div className="p-2 bg-primary/10 rounded-lg"><BookmarkPlus className="h-4 w-4 text-primary" /></div>
                        <div className="flex flex-col">
                          <span className="font-medium text-sm">Request Borrow</span>
                          <span className="text-[10px] text-slate-400">Reserve physical copy</span>
                        </div>
                      </DropdownMenuItem>
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}