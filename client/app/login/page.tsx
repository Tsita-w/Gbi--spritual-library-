"use client";
import React from 'react';
import { Shield, Mail, Lock, LogIn, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function SanctumLogin() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 text-white relative overflow-hidden bg-[#0a1128]">
      {/* Vibrant Gradient Background matches the Hackathon sample */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1e3a8a] via-[#1e1b4b] to-[#0a1128]" />
      
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 blur-[130px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-500/20 blur-[130px] rounded-full" />

      <div className="w-full max-w-md bg-black/30 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl z-10 relative">
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-[#facc15] rounded-3xl flex items-center justify-center shadow-[0_0_40px_rgba(250,204,21,0.4)] mb-6">
            <Shield size={40} className="text-black" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase italic text-center">
            Login <span className="text-[#facc15] font-normal not-italic">Spiritual</span> Library
          </h1>
          <p className="text-blue-200/60 text-[10px] font-bold tracking-[0.3em] mt-4 uppercase">Access Ancient Wisdom</p>
        </div>

        <form className="space-y-6">
          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-blue-200/70 ml-4">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300/40 group-focus-within:text-[#facc15] transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="hs1@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-[#facc15] focus:bg-white/10 outline-none transition-all placeholder:text-blue-200/20"
              />
            </div>
          </div>

          {/* Password - "Forgot Password" removed */}
          <div className="space-y-2">
            <label className="text-[11px] font-black uppercase tracking-widest text-blue-200/70 ml-4">Password</label>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-300/40 group-focus-within:text-[#facc15] transition-colors" size={18} />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm focus:border-[#facc15] focus:bg-white/10 outline-none transition-all placeholder:text-blue-200/20"
              />
            </div>
          </div>

          {/* Bright Yellow Button Style */}
          <button className="w-full bg-[#facc15] text-black py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-[#fde047] hover:shadow-[0_0_30px_rgba(250,204,21,0.3)] transition-all mt-8 active:scale-95 shadow-xl shadow-black/20">
            Initiate Login <LogIn size={20} />
          </button>
        </form>

        <div className="mt-10 text-center border-t border-white/5 pt-8">
          <Link href="/register" className="text-blue-200/40 text-[10px] font-bold uppercase tracking-widest hover:text-[#facc15] transition-colors flex items-center justify-center gap-2 group">
            Not registered yet? 
            <span className="text-[#facc15] underline underline-offset-4 group-hover:no-underline">Join Initiate</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Futuristic Status Bar */}
      <div className="fixed bottom-8 flex gap-8 text-[9px] font-black text-blue-200/20 uppercase tracking-[0.4em]">
        <div className="flex items-center gap-2">
          <div className="w-1 h-1 bg-green-500 rounded-full animate-ping" />
          System: Online
        </div>
        <span>Vault Node: 0x7E2</span>
      </div>
    </main>
  );
}