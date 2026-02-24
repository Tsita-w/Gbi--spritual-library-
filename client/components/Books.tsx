"use client";

import React, { useState } from 'react';

// Mock Data representing your spiritual collection
const BOOKS_DATA = [
  { id: 1, title: "The Path to Peace", author: "Dr. Samuel K. Brown", price: "50 Birr", status: "AVAILABLE", category: "Prayer", tag: "PRAYER", cover: "bg-stone-200" },
  { id: 2, title: "Ancient Wisdom", author: "Elena G. White", price: "50 Birr", status: "AVAILABLE", category: "Faith", tag: "FAITH", cover: "bg-emerald-100" },
  { id: 3, title: "The Pure Heart", author: "Pastor John Mark", price: "50 Birr", status: "RESERVED", category: "Holiness", tag: "HOLINESS", cover: "bg-rose-100" },
  { id: 4, title: "Church History", author: "Abba Melketsedek", price: "70 Birr", status: "AVAILABLE", category: "History", tag: "HISTORY", cover: "bg-amber-100" },
];

const CATEGORIES = ["All", "Prayer", "Faith", "Leadership", "History"];

export default function BrowseBooks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filtering Logic
  const filteredBooks = BOOKS_DATA.filter(book => {
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050510] text-white pb-32">

      {/* --- HEADER --- */}
      <header className="flex justify-between items-center px-6 py-4 bg-[#0a0a1a]/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center text-black shadow-[0_0_15px_rgba(255,215,0,0.3)]">
            <span className="text-xl font-bold">S</span>
          </div>
          <span className="font-bold text-lg tracking-tight">S-Library</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-400 hover:text-white">🔍</button>
          <div className="w-10 h-10 rounded-full border-2 border-[#FFD700]/50 p-0.5">
            <div className="w-full h-full bg-gray-600 rounded-full overflow-hidden">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="user" />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-6 mt-8">
        <h1 className="text-4xl font-black tracking-tight">Browse Books</h1>
        <p className="text-gray-400 mt-2 font-light">Explore our collection of sacred texts and spiritual wisdom.</p>

        {/* --- SEARCH INPUT --- */}
        <div className="relative mt-8 group">
          <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FFD700] transition-colors">🔍</span>
          <input
            type="text"
            placeholder="Search by title, author, or topic..."
            className="w-full bg-[#10101f] border border-gray-800 rounded-2xl py-5 pl-14 pr-6 outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/20 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* --- CATEGORY FILTERS --- */}
        <div className="flex gap-3 overflow-x-auto mt-8 pb-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                activeCategory === cat
                ? "bg-[#FFD700] text-black border-[#FFD700] shadow-[0_5px_15px_rgba(255,215,0,0.2)]"
                : "bg-[#10101f] text-gray-400 border-gray-800 hover:border-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- BOOKS LIST --- */}
        <div className="mt-10 space-y-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className="bg-[#10101f] rounded-[40px] border border-white/5 p-5 shadow-2xl overflow-hidden group">
                {/* Image Placeholder with Category Tag */}
                <div className={`relative w-full aspect-[4/3] rounded-[30px] ${book.cover} mb-6 overflow-hidden flex items-center justify-center`}>
                   <div className="absolute top-4 left-4">
                      <span className="bg-[#FFD700] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                        {book.tag}
                      </span>
                   </div>
                   <div className="text-gray-400/20 font-serif italic text-3xl font-bold select-none uppercase tracking-widest">
                     Book Cover
                   </div>
                </div>

                {/* Content */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold tracking-tight">{book.title}</h3>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded border ${
                    book.status === 'AVAILABLE' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-gray-500 border-gray-800 bg-gray-800'
                  }`}>
                    {book.status}
                  </span>
                </div>
                <p className="text-gray-500 font-medium mb-2 underline decoration-[#FFD700]/20 underline-offset-4 text-sm">by {book.author}</p>
                <p className="text-2xl font-black text-[#FFD700] mb-6">{book.price}</p>

                {/* Main Action */}
                <button className="w-full bg-[#FFD700] hover:bg-[#ffc400] text-black font-extrabold py-4 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-all active:scale-95">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-[#10101f] rounded-[40px] border border-dashed border-gray-800">
              <p className="text-gray-500 italic">No sacred texts found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* --- FIXED BOTTOM NAVIGATION --- */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#0a0a1a]/95 backdrop-blur-2xl border-t border-white/5 px-10 py-5 flex justify-between items-center z-50">
        <NavItem icon="🏠" label="Home" active={false} />
        <NavItem icon="📖" label="Library" active={true} />
        <NavItem icon="💳" label="Wallet" active={false} />
        <NavItem icon="👤" label="Profile" active={false} />
      </nav>
    </div>
  );
}

// Sub-component for clean Nav
function NavItem({ icon, label, active }: { icon: string, label: string, active: boolean }) {
  return (
    <div className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${active ? 'text-[#FFD700]' : 'text-gray-500 hover:text-white'}`}>
      <span className="text-2xl">{icon}</span>
      <span className={`text-[10px] font-black uppercase tracking-[0.15em] ${active ? 'border-b-2 border-[#FFD700]' : ''}`}>
        {label}
      </span>
    </div>
  );
}