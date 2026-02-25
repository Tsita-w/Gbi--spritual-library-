"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";

const BOOKS = [
  { id: 1, title: "The Path to Peace", author: "DR. SAMUEL K.", type: "PHYSICAL", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },
  { id: 2, title: "Ancient Wisdom", author: "ELENA G. WHITE", type: "PDF", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400" },
  // ... add more as needed
];

export default function BookManager() {
  return (
    <div className="p-8 bg-[#F4F7F9]">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-black text-[#1E3A8A] uppercase italic">
          Manage <span className="text-[#FBBF24]">Books</span>
        </h1>
        <Button className="bg-[#FBBF24] text-[#1E3A8A] font-black rounded-xl px-6 py-6 hover:bg-[#1E3A8A] hover:text-white transition-all">
          <Plus className="mr-2 h-5 w-5" /> ADD RESOURCE
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {BOOKS.map((book) => (
          <Card key={book.id} className="border-none shadow-md rounded-[2rem] bg-white overflow-hidden group">
            <div className="aspect-square relative overflow-hidden bg-slate-100">
              <img src={book.img} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
              <Badge className="absolute top-4 left-4 bg-white/90 text-[#1E3A8A] border-none font-black text-[9px]">{book.type}</Badge>
            </div>
            <CardHeader className="p-5">
              <h3 className="font-black text-[#1E3A8A] uppercase truncate">{book.title}</h3>
              <p className="text-[9px] font-bold text-slate-400 italic uppercase">BY {book.author}</p>
            </CardHeader>
            <CardFooter className="px-5 pb-5 flex gap-2">
              <Button variant="outline" className="flex-1 rounded-xl border-slate-100 hover:bg-blue-50 text-blue-600"><Edit size={16}/></Button>
              <Button variant="outline" className="flex-1 rounded-xl border-slate-100 hover:bg-red-50 text-red-600"><Trash2 size={16}/></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}