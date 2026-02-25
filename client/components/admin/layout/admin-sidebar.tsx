"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  BookOpen,
  History,
  Users,
  LogOut,
  Settings
} from 'lucide-react';
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Manage Books', href: '/admin/books', icon: BookOpen },
  { name: 'Borrow Records', href: '/admin/borrows', icon: History },
  { name: 'Students', href: '/admin/students', icon: Users },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-secondary h-screen flex flex-col text-white shadow-2xl border-r border-white/5">
      {/* Branding */}
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.3)]">
            <span className="text-secondary text-2xl font-black italic">S</span>
          </div>
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase italic">Gibi <span className="text-primary tracking-normal">Admin</span></h1>
            <p className="text-[8px] text-blue-300 font-black tracking-[0.3em] uppercase opacity-50">Sanctum Node</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 mt-4">
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-5 py-4 rounded-2xl font-bold transition-all duration-300 group",
                isActive
                  ? "bg-primary text-secondary shadow-lg shadow-yellow-500/20"
                  : "text-blue-200/60 hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon size={20} className={cn(isActive ? "text-secondary" : "group-hover:text-primary")} />
              <span className="text-sm tracking-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-6 border-t border-white/5">
        <button className="flex items-center gap-4 px-5 py-4 w-full text-red-400 font-bold hover:bg-red-500/10 rounded-2xl transition-all">
          <LogOut size={20} />
          <span className="text-sm">Terminate Session</span>
        </button>
      </div>
    </div>
  );
}