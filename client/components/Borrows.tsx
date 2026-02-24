"use client";

import React, { useState } from 'react';

const BORROWED_BOOKS = [
  {
    id: 1,
    title: "The Path to Peace",
    author: "Tich Nhat Hanh",
    borrowedDate: "12 Oct",
    dueDate: "26 Oct",
    progress: 60,
    status: "active",
    image: "/book-path.jpg"
  },
  {
    id: 2,
    title: "Inner Engineering",
    author: "Sadhguru",
    borrowedDate: "15 Oct",
    dueDate: "30 Oct",
    progress: 30,
    status: "active",
    image: "/book-inner.jpg"
  },
  {
    id: 3,
    title: "Silence in the Soul",
    author: "Thomas Merton",
    borrowedDate: "01 Oct",
    dueDate: "15 Oct",
    isOverdue: true,
    fine: "$2.00",
    status: "overdue",
    image: "/book-silence.jpg"
  }
];

export default function MyBorrows() {
  const [activeTab, setActiveTab] = useState("Active Borrows");

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans">
      {/* --- BLUE GRADIENT HEADER --- */}
      <header className="bg-gradient-to-b from-[#1e3a8a] to-[#2563eb] pt-12 pb-24 px-6 rounded-b-[40px] text-white">
        <div className="flex justify-between items-center mb-8">
          <button className="text-2xl">☰</button>
          <h1 className="text-xl font-bold">Spiritual Library</h1>
          <div className="flex gap-4 items-center">
            <span>🔍</span>
            <span className="relative">🔔<span className="absolute top-0 right-0 w-2 h-2 bg-yellow-400 rounded-full"></span></span>
            <div className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white/50"></div>
          </div>
        </div>

        <h2 className="text-3xl font-black mb-2">My Borrowed Books</h2>
        <p className="text-blue-100/80 font-medium">Track your current and past borrowed books</p>

        <div className="mt-8 relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          <input
            type="text"
            placeholder="Search titles or authors"
            className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl py-4 pl-12 pr-4 outline-none placeholder:text-blue-100"
          />
        </div>
      </header>

      <div className="px-6 -mt-16">
        {/* --- STATS GRID --- */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <StatBubble label="TOTAL BORROWED" value="24" color="border-blue-500" />
          <StatBubble label="ACTIVE NOW" value="3" color="border-green-500" />
          <StatBubble label="OVERDUE COUNT" value="1" color="border-red-500" textColor="text-red-500" />
          <StatBubble label="TOTAL FINES" value="$5.00" color="border-yellow-500" />
        </div>

        {/* --- TABS --- */}
        <div className="flex justify-between border-b border-gray-200 mb-8 overflow-x-auto">
          {["Active Borrows", "Returned Books", "Overdue"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-2 text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === tab ? "text-[#1e3a8a] border-b-4 border-[#1e3a8a]" : "text-gray-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* --- BOOK CARDS --- */}
        <div className="space-y-6">
          {BORROWED_BOOKS.map((book) => (
            <div key={book.id} className={`bg-white rounded-[35px] p-5 shadow-xl shadow-gray-200/50 border ${book.isOverdue ? 'border-red-100 bg-red-50/10' : 'border-transparent'}`}>
              <div className="flex gap-5 mb-6">
                <div className="w-24 h-32 bg-gray-200 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                   {/* Book Image */}
                   <div className="w-full h-full bg-emerald-800/20 flex items-center justify-center text-xs text-emerald-900 font-bold p-2 text-center">
                    {book.title}
                   </div>
                </div>
                <div className="flex-1 relative">
                  {book.isOverdue && (
                    <span className="absolute top-0 right-0 bg-red-100 text-red-500 text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wider">OVERDUE</span>
                  )}
                  <h3 className="text-xl font-black text-gray-900 leading-tight">{book.title}</h3>
                  <p className="text-gray-400 text-sm font-medium">by {book.author}</p>

                  <div className="mt-4 flex justify-between text-[11px] font-bold">
                    <span className="text-gray-400">Borrowed: {book.borrowedDate}</span>
                    <span className={book.isOverdue ? "text-red-500" : "text-yellow-600"}>
                        Due: {book.dueDate} {book.isOverdue && "(3d late)"}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-100 rounded-full mt-2 overflow-hidden">
                    <div
                        className={`h-full rounded-full ${book.isOverdue ? 'bg-red-500' : 'bg-yellow-500'}`}
                        style={{ width: `${book.isOverdue ? 100 : book.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-[#1e3a8a] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-900/20">
                  {book.isOverdue ? `Pay Fine (${book.fine})` : "Renew"}
                </button>
                <button className="flex-1 bg-[#fbbf24] text-[#1e3a8a] font-bold py-4 rounded-2xl shadow-lg shadow-yellow-500/20">
                  Return Book
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- BOTTOM NAVIGATION --- */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 px-8 py-4 flex justify-between items-center z-50">
          <NavItem icon="🏠" label="Home" active={false} />
          <NavItem icon="📘" label="My Books" active={true} />
          <NavItem icon="🧭" label="Discover" active={false} />
          <NavItem icon="📅" label="Reserved" active={false} />
          <NavItem icon="👤" label="Profile" active={false} />
      </nav>
    </div>
  );
}

function StatBubble({ label, value, color, textColor = "text-gray-900" }: any) {
  return (
    <div className={`bg-white p-5 rounded-[30px] border-l-4 shadow-md ${color}`}>
      <p className="text-[9px] font-black text-gray-400 tracking-widest uppercase mb-1">{label}</p>
      <p className={`text-2xl font-black ${textColor}`}>{value}</p>
    </div>
  );
}

function NavItem({ icon, label, active }: any) {
    return (
      <div className={`flex flex-col items-center gap-1 cursor-pointer ${active ? 'text-[#1e3a8a]' : 'text-gray-400'}`}>
        <span className="text-xl">{icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-tighter">{label}</span>
      </div>
    );
}