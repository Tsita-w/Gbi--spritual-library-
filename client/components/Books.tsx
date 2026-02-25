"use client";

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, BookOpen, Layers, Monitor } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// --- EXPANDED DATA (7 BOOKS) ---
const ALL_BOOKS = [
  { id: 1, title: "The Path to Peace", category: "Theology", author: "DR. SAMUEL K.", coverImage: "https://media.istockphoto.com/id/2237077294/photo/dormition-of-the-virgin-mary-mural-ethiopia.webp?a=1&b=1&s=612x612&w=0&k=20&c=Rb0YrlUdX2SlPUnGAW9VP6cfM-k442OnPmpGlm4_5xc=" },
  { id: 2, title: "Ancient Wisdom", category: "History", author: "ELENA G. WHITE", coverImage: "https://images.unsplash.com/photo-1648369685479-bfce7c9bd989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXRoaW9waWFuJTIwb3J0b2RveCUyMGhpc3RvcnklMjBib29rcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, title: "Walking in Faith", category: "Faith", author: "SMITH WIGGLESWORTH", coverImage: "https://images.unsplash.com/photo-1685347091285-120a22644879?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV0aGlvcGlhbiUyMG9ydG9kb3glMjBmYWl0aCUyMGJvb2tzJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 4, title: "The Holy Spirit", category: "Theology", author: "JOHN BEVERE", coverImage: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "Prayer Secrets", category: "Prayer", author: "CHARLES SPURGEON", coverImage: "https://images.unsplash.com/photo-1613937855439-20cecc75d91a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXRoaW9waWFuJTIwb3J0b2RveCUyMG1lem11cmUlMjBkYXdpdCUyMGJvb2tzJTIwaW1hZ2VzfGVufDB8fDB8fHww" },
  { id: 6, title: "Leadership in Ministry", category: "Leadership", author: "JOHN MAXWELL", coverImage: "https://images.unsplash.com/photo-1720420419579-d6c75a1492c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV0aGlvcGlhbiUyMG9ydG9kb3glMjBtZXptdXJlJTIwZGF3aXQlMjBib29rcyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 7, title: "Grace Abounding", category: "Faith", author: "JOHN BUNYAN", coverImage: "https://media.istockphoto.com/id/172487609/photo/illustrated-christian-text-in-ethiopia-at-kebran-gabriel-monastery.webp?a=1&b=1&s=612x612&w=0&k=20&c=dhR4ll0oUEHOnSrJ4mdRHKsWtwzNsL-kMbaAFHehyno=" },
];

const CATEGORIES = ["All Categories", "Theology", "History", "Faith", "Prayer", "Leadership"];

export default function Books() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFormats, setSelectedFormats] = useState<{ [key: number]: string }>({});

  const toggleFormat = (bookId: number, format: string) => {
    setSelectedFormats(prev => ({ ...prev, [bookId]: format }));
  };

  const filteredBooks = ALL_BOOKS.filter((book) => {
    const matchesCategory = selectedCategory === "All Categories" || book.category === selectedCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F4F7F9] min-h-screen p-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header - Gibi Standard */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-in fade-in slide-in-from-left duration-500">
            <h1 className="text-4xl font-black text-[#1E3A8A] uppercase italic leading-none">
              Explore <span className="text-[#FBBF24]">Catalog</span>
            </h1>
            <p className="text-[#94A3B8] font-bold text-[10px] tracking-[0.2em] uppercase mt-2">
               Library Node
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 h-4 w-4" />
              <Input
                placeholder="Search resources..."
                className="pl-12 py-6 border-none bg-white rounded-xl shadow-sm focus-visible:ring-[#FBBF24] font-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-52 py-6 rounded-xl border-none bg-white shadow-sm text-[#1E3A8A] font-black flex justify-between">
                  <div className="flex items-center gap-2 uppercase text-[10px]">
                    <Layers className="h-4 w-4 text-[#FBBF24]" />
                    {selectedCategory}
                  </div>
                  <ChevronDown className="h-4 w-4 opacity-40" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52 rounded-xl font-bold text-[#1E3A8A] uppercase text-[10px] bg-white border-slate-100 shadow-xl">
                {CATEGORIES.map((cat) => (
                  <DropdownMenuItem key={cat} onClick={() => setSelectedCategory(cat)} className="hover:bg-slate-50 cursor-pointer">
                    {cat}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks.map((book) => {
            const currentFormat = selectedFormats[book.id] || "Hard Copy";

            return (
              <Card key={book.id} className="border-none shadow-sm bg-white rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col">

                {/* SQUARE COVER */}
                <div className="aspect-square w-full bg-[#1E3A8A] relative overflow-hidden flex items-center justify-center">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <Badge className="absolute top-5 left-5 bg-white/95 text-[#1E3A8A] border-none text-[9px] font-black uppercase backdrop-blur-md shadow-lg">
                    {book.category}
                  </Badge>
                </div>

                <CardHeader className="p-7 pb-2">
                  <h3 className="text-lg font-black text-[#1E3A8A] uppercase leading-tight line-clamp-2 min-h-[2.8rem] tracking-tighter">
                    {book.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[9px] font-black italic uppercase mt-2 tracking-[0.15em]">
                    BY {book.author}
                  </p>
                </CardHeader>

                <CardFooter className="p-7 pt-2 mt-auto flex flex-col gap-4">
                  {/* FORMAT SELECTION */}
                  <div className="w-full">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between bg-[#F8FAFC] border border-slate-100 rounded-2xl text-[10px] font-black text-[#1E3A8A] hover:bg-slate-100 h-12">
                          <span className="flex items-center gap-2 uppercase">
                            {currentFormat === "Soft Copy" ? <Monitor size={14} className="text-[#FBBF24]" /> : <BookOpen size={14} className="text-[#FBBF24]" />}
                            {currentFormat}
                          </span>
                          <ChevronDown size={14} className="opacity-30" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-48 rounded-xl font-bold text-[#1E3A8A] uppercase text-[10px] shadow-2xl border-none">
                        <DropdownMenuItem onClick={() => toggleFormat(book.id, "Hard Copy")} className="py-3">Hard Copy (Physical)</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => toggleFormat(book.id, "Soft Copy")} className="py-3">Soft Copy (PDF)</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <Button className="w-full bg-[#FBBF24] hover:bg-[#1E3A8A] hover:text-white text-[#1E3A8A] font-black text-[11px] py-7 rounded-2xl shadow-md transition-all active:scale-95 uppercase tracking-widest">
                    Confirm Borrow
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}