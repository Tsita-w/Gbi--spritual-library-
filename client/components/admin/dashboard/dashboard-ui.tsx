"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Clock, Banknote } from "lucide-react";

// 1. Define exactly what 'stats' looks like
interface DashboardProps {
  stats: {
    totalBooks: number;
    borrowedBooks: number;
    lateReturns: number;
    totalBirr: number;
  };
}

// 2. Use a NAMED EXPORT (remove 'default' if it was there)
export function DashboardUI({ stats }: DashboardProps) {
  const cards = [
    { label: "Total Resources", value: stats.totalBooks, icon: Book, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Active Borrows", value: stats.borrowedBooks, icon: Users, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "Late Returns", value: stats.lateReturns, icon: Clock, color: "text-red-600", bg: "bg-red-50" },
    { label: "Revenue (ETB)", value: `${stats.totalBirr} .00`, icon: Banknote, color: "text-green-600", bg: "bg-green-50" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
      {cards.map((card, i) => (
        <Card key={i} className="border-none shadow-sm rounded-[2rem] bg-white overflow-hidden">
          <CardContent className="p-8 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{card.label}</p>
              <h3 className="text-2xl font-black text-[#1E3A8A]">{card.value}</h3>
            </div>
            <div className={`${card.bg} p-4 rounded-2xl`}>
              <card.icon className={card.color} size={24} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}