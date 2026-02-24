"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for registration
    toast.success("Sequence Initiated! Welcome to Gibi Library.");
    console.log("Registered User Data:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050510] text-white px-4 relative overflow-hidden">

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-900/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg">

        {/* Top Branding Icon */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,214,0,0.3)] mb-6">
            <span className="text-3xl text-black">📖</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-center italic">Initiate Sequence</h1>
          <p className="text-gray-400 mt-2 font-light">Begins your journey into the digital wisdom</p>
        </div>

        {/* The Dark Glass Card */}
        <div className="bg-[#0f0f1a]/80 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-[40px] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                required
                onChange={handleChange}
                className="w-full bg-[#07070f] border border-gray-800 rounded-2xl py-4 px-5 outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 transition-all text-gray-200 placeholder:text-gray-700"
                placeholder="Enter your name"
              />
            </div>

            {/* Email / Vessel ID */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300 ml-1">Vessel ID (Email)</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#FFD700] transition-colors">@</span>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full bg-[#07070f] border border-gray-800 rounded-2xl py-4 pl-12 pr-5 outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 transition-all text-gray-200 placeholder:text-gray-700"
                  placeholder="priest@sanctum.io"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300 ml-1">Communication Link (Phone)</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                className="w-full bg-[#07070f] border border-gray-800 rounded-2xl py-4 px-5 outline-none focus:border-[#FFD700]/50 focus:ring-1 focus:ring-[#FFD700]/50 transition-all text-gray-200 placeholder:text-gray-700"
                placeholder="+251 ..."
              />
            </div>

            {/* Secret Mantra (Password) */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300 ml-1">Secret Mantra (Password)</label>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                className="w-full bg-[#07070f] border border-gray-800 rounded-2xl py-4 px-5 outline-none focus:border-[#FFD700]/50 transition-all placeholder:text-gray-700"
                placeholder="••••••••"
              />
            </div>

            {/* Yellow Action Button */}
            <button
              type="submit"
              className="w-full bg-[#FFD700] hover:bg-[#FFC000] text-black font-black py-5 rounded-2xl shadow-[0_10px_20px_rgba(255,214,0,0.15)] flex items-center justify-center gap-3 transition-all active:scale-[0.98] mt-6 text-lg uppercase tracking-wider"
            >
              <span>➔</span> INITIATE LOGIN
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-gray-500 text-sm">
            Already have an account? <Link href="/login" className="text-white hover:text-[#FFD700] font-semibold">Log In</Link>
          </p>
          <div className="flex gap-8 text-[#FFD700]/80 text-xs font-bold tracking-[0.2em]">
            <Link href="/login" className="hover:text-[#FFD700]">HRFE/LOGIN</Link>
            <Link href="/login" className="hover:text-[#FFD700]">LOG IN</Link>
          </div>
        </div>
      </div>
    </div>
  );
}