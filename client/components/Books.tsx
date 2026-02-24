"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { 
  Search, 
  BookOpen, 
  Grid3x3
} from 'lucide-react';

// Mock Data with image paths (place these images in your public folder)
const BOOKS_DATA = [
  { 
    id: 1, 
    title: "The Path to Peace", 
    author: "Dr. Samuel K. Brown", 
    price: "50 Birr", 
    status: "AVAILABLE", 
    category: "Prayer", 
    tag: "PRAYER", 
    cover: "from-primary/20 to-secondary/20",
    image: "/books/path-to-peace.jpg" // Add your image path here
  },
  { 
    id: 2, 
    title: "Ancient Wisdom", 
    author: "Elena G. White", 
    price: "50 Birr", 
    status: "AVAILABLE", 
    category: "Faith", 
    tag: "FAITH", 
    cover: "from-secondary/20 to-primary/20",
    image: "/books/ancient-wisdom.jpg"
  },
  { 
    id: 3, 
    title: "The Pure Heart", 
    author: "Pastor John Mark", 
    price: "50 Birr", 
    status: "RESERVED", 
    category: "Holiness", 
    tag: "HOLINESS", 
    cover: "from-primary/30 to-tertiary/10",
    image: "/books/pure-heart.jpg"
  },
  { 
    id: 4, 
    title: "Church History", 
    author: "Abba Melketsedek", 
    price: "70 Birr", 
    status: "AVAILABLE", 
    category: "History", 
    tag: "HISTORY", 
    cover: "from-secondary/20 to-tertiary/20",
    image: "/books/church-history.jpg"
  },
  { 
    id: 5, 
    title: "The Ladder of Divine Ascent", 
    author: "St. John Climacus", 
    price: "65 Birr", 
    status: "AVAILABLE", 
    category: "Prayer", 
    tag: "PRAYER", 
    cover: "from-primary/25 to-secondary/15",
    image: "/books/ladder-divine-ascent.jpg"
  },
  { 
    id: 6, 
    title: "On the Incarnation", 
    author: "St. Athanasius", 
    price: "55 Birr", 
    status: "RESERVED", 
    category: "Faith", 
    tag: "FAITH", 
    cover: "from-secondary/25 to-primary/15",
    image: "/books/on-incarnation.jpg"
  },
];

const CATEGORIES = ["All", "Prayer", "Faith", "Holiness", "History"];

export default function BrowseBooks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Filtering Logic
  const filteredBooks = BOOKS_DATA.filter(book => {
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle image error
  const handleImageError = (bookId: number) => {
    setImageErrors(prev => ({ ...prev, [bookId]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-spiritual-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header with Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Browse <span className="text-secondary">Books</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Explore our collection of sacred texts and spiritual wisdom.
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="flex items-center gap-2 bg-white rounded-lg p-1 shadow-sm border">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="gap-2"
            >
              <Grid3x3 className="h-4 w-4" />
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <BookOpen className="h-4 w-4" />
              List
            </Button>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search by title, author, or topic..."
                className="pl-10 py-6 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={activeCategory === cat ? "secondary" : "outline"}
                  onClick={() => setActiveCategory(cat)}
                  className="whitespace-nowrap"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Books Grid/List View */}
        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-4"
        }>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              viewMode === "grid" ? (
                // Grid View Card with Image
                <Card key={book.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-2 hover:border-secondary/20">
                  <div className={`relative h-48 bg-gradient-to-br ${book.cover}`}>
                    {!imageErrors[book.id] ? (
                      <Image
                        src={book.image}
                        alt={book.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={() => handleImageError(book.id)}
                      />
                    ) : (
                      // Fallback if image fails to load
                      <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                        <BookOpen className="h-12 w-12 text-primary/40" />
                      </div>
                    )}
                    
                    {/* Badges */}
                    <Badge 
                      className={`absolute top-4 right-4 ${
                        book.status === 'AVAILABLE' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-500 text-white'
                      }`}
                    >
                      {book.status}
                    </Badge>
                    <Badge 
                      variant="secondary"
                      className="absolute top-4 left-4 bg-white/90 text-primary"
                    >
                      {book.tag}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">by {book.author}</p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-secondary">{book.price}</span>
                    </div>
                    
                    <Button className="w-full bg-primary text-tertiary hover:bg-secondary hover:text-primary transition-all duration-300">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                // List View Card with Image
                <Card key={book.id} className="group hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      {/* Image for list view */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gradient-to-br ${book.cover}">
                        {!imageErrors[book.id] ? (
                          <Image
                            src={book.image}
                            alt={book.title}
                            fill
                            className="object-cover"
                            onError={() => handleImageError(book.id)}
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                            <BookOpen className="h-8 w-8 text-primary/40" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="text-xl font-bold text-primary">{book.title}</h3>
                            <p className="text-gray-600">by {book.author}</p>
                          </div>
                          <Badge 
                            className={
                              book.status === 'AVAILABLE' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-gray-500 text-white'
                            }
                          >
                            {book.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 mt-4">
                          <Badge variant="outline" className="border-secondary text-secondary">
                            {book.tag}
                          </Badge>
                          <span className="text-2xl font-bold text-secondary">{book.price}</span>
                          <Button className="ml-auto bg-primary text-tertiary hover:bg-secondary hover:text-primary">
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="bg-white rounded-2xl shadow-lg p-12">
                <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No sacred texts found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("All");
                  }}
                  className="text-secondary mt-4"
                >
                  Clear filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredBooks.length > 0 && (
          <div className="mt-8 text-center text-gray-500">
            Showing {filteredBooks.length} of {BOOKS_DATA.length} books
          </div>
        )}
      </div>
    </div>
  );
}