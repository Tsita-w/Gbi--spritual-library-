"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const BORROW_DATA = [
  { id: "B1", student: "Abel Tekle", book: "The Book of Enoch", due: "Feb 20, 2026", status: "Overdue", fine: "15.00" },
  { id: "B2", student: "Sara Mulu", book: "Faith & Works", due: "Feb 28, 2026", status: "Active", fine: "0.00" },
  { id: "B3", student: "Dawit Girma", book: "Church History", due: "Feb 15, 2026", status: "Overdue", fine: "25.00" },
];

export function BorrowTable() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-black text-secondary uppercase italic">
          Borrow <span className="text-primary tracking-tighter">Records</span>
        </h1>
        <p className="text-slate-500 font-medium text-sm">Monitor circulation and manage late return penalties.</p>
      </div>

      <div className="bg-white rounded-[35px] shadow-xl border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-none">
              <TableHead className="px-8 font-black text-slate-400 uppercase text-[10px] tracking-widest">Student</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Resource</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Due Date</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest text-center">Status</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Fine (ETB)</TableHead>
              <TableHead className="text-right px-8 font-black text-slate-400 uppercase text-[10px] tracking-widest">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {BORROW_DATA.map((item) => (
              <TableRow key={item.id} className="hover:bg-slate-50/50 transition-colors border-slate-100">
                <TableCell className="px-8 py-6 font-black text-secondary">{item.student}</TableCell>
                <TableCell className="text-slate-500 font-bold">{item.book}</TableCell>
                <TableCell className="text-slate-400 text-sm">{item.due}</TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline" className={item.status === "Overdue"
                    ? "bg-red-50 text-red-600 border-red-200"
                    : "bg-green-50 text-green-600 border-green-200"}>
                    {item.status.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell className={`font-black ${Number(item.fine) > 0 ? "text-red-500" : "text-slate-400"}`}>
                   {item.fine}
                </TableCell>
                <TableCell className="text-right px-8">
                  <button className="bg-secondary text-white text-[10px] font-black px-4 py-2 rounded-xl hover:bg-primary hover:text-secondary transition-all uppercase tracking-widest shadow-md">
                    Return
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}