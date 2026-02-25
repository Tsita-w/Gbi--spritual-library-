"use client";

import React from 'react';
import { Book, Users, Clock, Banknote } from 'lucide-react';

interface DashboardUIProps {
  stats: {
    totalBooks: number;
    borrowedBooks: number;
    lateReturns: number;
    totalBirr: number;
  }
}

export function DashboardUI({ stats }: DashboardUIProps) {
  const cards = [
    { label: "Total Books", value: stats.totalBooks, icon: Book, color: "border-blue-500", text: "text-blue-500" },
    { label: "Borrowed", value: stats.borrowedBooks, icon: Users, color: "border-yellow-500", text: "text-yellow-500" },
    { label: "Late Returns", value: stats.lateReturns, icon: Clock, color: "border-red-500", text: "text-red-500" },
    { label: "Total Birr Collected", value: `${stats.totalBirr} ETB`, icon: Banknote, color: "border-green-500", text: "text-green-500" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-secondary italic">SYSTEM <span className="text-primary tracking-tighter">OVERVIEW</span></h1>
        <p className="text-slate-500 font-medium">Real-time metrics for Gibi Spiritual Library.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <div key={i} className={`bg-white p-6 rounded-[35px] border-l-8 shadow-xl shadow-slate-200/50 ${card.color} transition-transform hover:scale-105`}>
            <div className="flex justify-between items-start mb-4">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{card.label}</p>
              <card.icon size={20} className={card.text} />
            </div>
            <p className="text-3xl font-black text-secondary tracking-tighter">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}