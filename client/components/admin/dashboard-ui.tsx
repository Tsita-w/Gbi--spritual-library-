"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Book, Users, Repeat, AlertCircle } from "lucide-react";

const stats = [
  { label: "TOTAL RESOURCES", value: "1,284", icon: Book, color: "text-blue-600" },
  { label: "ACTIVE STUDENTS", value: "450", icon: Users, color: "text-yellow-500" },
  { label: "BOOKS BORROWED", value: "85", icon: Repeat, color: "text-green-600" },
  { label: "OVERDUE ITEMS", value: "12", icon: AlertCircle, color: "text-red-600" },
];

export default function AdminDashboard() {
  return (
    <div className="p-8 bg-[#F4F7F9] min-h-screen">
      <h1 className="text-3xl font-black text-[#1E3A8A] uppercase italic mb-8">
        System <span className="text-[#FBBF24]">Overview</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-none shadow-sm rounded-3xl overflow-hidden bg-white">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h2 className="text-2xl font-black text-[#1E3A8A] mt-1">{stat.value}</h2>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color} opacity-20`} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}