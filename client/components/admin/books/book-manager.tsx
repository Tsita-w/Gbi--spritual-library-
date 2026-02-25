"use client";

import React, { useState } from 'react';
import { Plus, Edit, Trash, Upload } from 'lucide-react';

// Using the @/ alias ensures the paths are correct regardless of folder depth
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";

const INITIAL_BOOKS = [
  { id: 1, title: "The Path to Peace", author: "Dr. Samuel K.", type: "Physical", stock: 12, category: "Prayer" },
  { id: 2, title: "Ancient Wisdom", author: "Elena G. White", type: "PDF", stock: "∞", category: "History" },
];

export function BookManager() {
  const [books] = useState(INITIAL_BOOKS);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center px-2">
        <div>
          <h1 className="text-3xl font-black text-[#1e3a8a] italic uppercase tracking-tighter">
            Manage <span className="text-[#facc15]">Books</span>
          </h1>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] opacity-70">Inventory Node</p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-[#facc15] text-[#1e3a8a] font-black px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg hover:scale-105 transition-transform active:scale-95">
              <Plus size={20} /> ADD RESOURCE
            </button>
          </DialogTrigger>
          <DialogContent className="bg-white rounded-[35px] border-none p-8 shadow-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-black text-[#1e3a8a] uppercase italic">Register Book</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-4">
               <input placeholder="Title" className="w-full bg-slate-50 border border-slate-100 rounded-xl p-4 outline-none focus:border-[#facc15] transition-all" />
               <div className="border-2 border-dashed border-slate-200 rounded-2xl p-10 text-center hover:border-[#facc15] transition-colors cursor-pointer group">
                 <Upload className="mx-auto text-slate-300 mb-2 group-hover:text-[#facc15]" size={32} />
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Upload PDF Manuscript</p>
               </div>
               <button className="w-full bg-[#1e3a8a] text-white font-black py-4 rounded-xl shadow-xl hover:bg-[#1e1b4b] transition-all uppercase tracking-widest">Save Resource</button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-white rounded-[40px] shadow-2xl shadow-slate-200/50 border border-slate-50 overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="border-none">
              <TableHead className="px-8 font-black text-slate-400 uppercase text-[10px] py-5">Resource Details</TableHead>
              <TableHead className="font-black text-slate-400 uppercase text-[10px] py-5">Type</TableHead>
              <TableHead className="text-right px-8 font-black text-slate-400 uppercase text-[10px] py-5">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id} className="border-slate-50 hover:bg-slate-50/30 transition-colors">
                <TableCell className="px-8 py-6 font-black text-[#1e3a8a] text-lg leading-tight">
                    {book.title}
                    <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tighter italic">Authored by {book.author}</p>
                </TableCell>
                <TableCell>
                    <span className="bg-[#facc15]/10 text-[#1e3a8a] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#facc15]/20">
                        {book.type}
                    </span>
                </TableCell>
                <TableCell className="text-right px-8">
                  <div className="flex justify-end gap-3">
                    <button className="w-9 h-9 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all"><Edit size={16} /></button>
                    <button className="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all"><Trash size={16} /></button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}