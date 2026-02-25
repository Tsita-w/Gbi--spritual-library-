"use client";

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserX, ShieldCheck, Wallet, History } from 'lucide-react';

const STUDENTS = [
  { id: "S101", name: "Abel Tekle", email: "abel@gibi.io", wallet: "150.00", status: "Active" },
  { id: "S102", name: "Sara Mulu", email: "sara@gibi.io", wallet: "45.00", status: "Blocked" },
];

export function StudentList() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-secondary uppercase italic">
        Student <span className="text-primary tracking-tighter">Audit</span>
      </h1>

      <div className="bg-white rounded-[35px] shadow-xl border border-slate-100 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-none">
              <TableHead className="px-8 font-black text-slate-400 uppercase text-[10px] tracking-widest">Identify</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest">Wallet</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-widest text-center">Status</TableHead>
              <TableHead className="text-right px-8 font-black text-slate-400 uppercase text-[10px] tracking-widest">Control</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {STUDENTS.map((student) => (
              <TableRow key={student.id} className="border-slate-100">
                <TableCell className="px-8 py-6">
                  <p className="font-black text-secondary leading-tight">{student.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">{student.email}</p>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-blue-600 font-black">
                    <Wallet size={16} />
                    {student.wallet} ETB
                  </div>
                </TableCell>
                <TableCell className="text-center">
                   <span className={`text-[10px] font-black px-3 py-1 rounded-full ${student.status === 'Active' ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'}`}>
                    {student.status}
                   </span>
                </TableCell>
                <TableCell className="text-right px-8 space-x-2">
                   <button className="inline-flex items-center gap-2 bg-slate-100 text-secondary px-4 py-2 rounded-xl text-[10px] font-black uppercase hover:bg-primary transition-all">
                     <History size={14} /> Records
                   </button>
                   <button className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${student.status === 'Active' ? 'bg-red-50 text-red-500 hover:bg-red-500 hover:text-white' : 'bg-green-50 text-green-500 hover:bg-green-500 hover:text-white'}`}>
                     <UserX size={14} /> {student.status === "Active" ? "Block" : "Unblock"}
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