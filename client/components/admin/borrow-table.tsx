"use client";

import React from 'react';
import { Badge } from "@/components/ui/badge";

const BORROWS = [
  { id: "TX-001", student: "John Doe", book: "The Path to Peace", date: "Feb 24, 2026", status: "PENDING" },
  { id: "TX-002", student: "Sarah Smith", book: "Ancient Wisdom", date: "Feb 20, 2026", status: "RETURNED" },
];

export default function BorrowTable() {
  return (
    <div className="p-8 bg-[#F4F7F9]">
      <h1 className="text-3xl font-black text-[#1E3A8A] uppercase italic mb-8">
        Borrow <span className="text-[#FBBF24]">Records</span>
      </h1>

      <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-100">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr className="text-[10px] font-black text-[#1E3A8A] uppercase tracking-widest">
              <th className="p-6">Student Details</th>
              <th className="p-6">Resource</th>
              <th className="p-6">Due Date</th>
              <th className="p-6 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {BORROWS.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-6 font-bold text-[#1E3A8A]">{item.student}</td>
                <td className="p-6 text-slate-500 font-medium italic">{item.book}</td>
                <td className="p-6 text-slate-400 text-sm">{item.date}</td>
                <td className="p-6 text-right">
                  <Badge className={`rounded-lg px-3 py-1 font-black text-[9px] ${
                    item.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {item.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}