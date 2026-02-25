"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, Repeat, Users, LogOut } from 'lucide-react';

const navItems = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Manage Books', href: '/admin/books', icon: BookOpen },
  { name: 'Borrow Records', href: '/admin/borrows', icon: Repeat },
  { name: 'Students', href: '/admin/students', icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 bg-[#FBBF24] h-screen p-8 flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.05)] z-20">
      {/* Brand Section */}
      <div className="flex items-center gap-3 mb-12">
        <div className="bg-[#1E3A8A] w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-[#FBBF24] font-black text-2xl italic">S</span>
        </div>
        <div>
          <h2 className="text-[#1E3A8A] font-black text-xl italic leading-none">GIBI <span className="block text-xs not-italic tracking-[0.2em] opacity-70">SANCTUM NODE</span></h2>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-3">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-xs transition-all duration-300 ${
                isActive
                ? 'bg-[#1E3A8A] text-[#FBBF24] shadow-xl translate-x-2'
                : 'text-[#1E3A8A]/60 hover:bg-[#1E3A8A]/5 hover:text-[#1E3A8A]'
              }`}
            >
              <item.icon size={20} />
              {item.name.toUpperCase()}
            </Link>
          );
        })}
      </nav>

      {/* Footer / Terminate Session */}
      <button className="flex items-center gap-3 px-6 py-4 rounded-2xl font-black text-xs text-[#1E3A8A]/40 hover:text-red-600 transition-all mt-auto group">
        <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
        TERMINATE SESSION
      </button>
    </div>
  );
}