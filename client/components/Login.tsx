"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for authentication goes here
    toast.info("Attempting to sign in...");
    console.log("Login credentials:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e3a8a] relative overflow-hidden">

      {/* Decorative Hackathon-style Shapes (from image 1) */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-yellow-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative z-10 w-full max-w-md px-6">

        {/* Logo/Icon Area */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-[#fbbf24] rounded-2xl rotate-12 flex items-center justify-center shadow-2xl mb-6">
             <span className="text-4xl -rotate-12">📚</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight uppercase">
            Gibi <span className="text-[#fbbf24]">Login</span>
          </h1>
          <p className="text-blue-200 mt-2 font-medium">Access the Spiritual Repository</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-[#1e3a8a] ml-1 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 outline-none focus:border-[#fbbf24] focus:bg-white transition-all text-gray-900 placeholder:text-gray-400"
                placeholder="yourname@gibi.com"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-sm font-bold text-[#1e3a8a] uppercase tracking-wider">Password</label>
                <Link href="#" className="text-xs font-bold text-blue-600 hover:text-[#fbbf24]">Forgot?</Link>
              </div>
              <input
                type="password"
                name="password"
                required
                onChange={handleChange}
                className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 outline-none focus:border-[#fbbf24] focus:bg-white transition-all text-gray-900 shadow-inner"
                placeholder="••••••••"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#fbbf24] hover:bg-[#f59e0b] text-[#1e3a8a] font-black py-5 rounded-2xl shadow-lg hover:shadow-yellow-500/20 transform transition-all active:scale-95 flex items-center justify-center gap-3 text-lg"
            >
              SIGN IN ➔
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>
            <span className="px-4 text-gray-400 text-xs font-bold uppercase tracking-widest">New here?</span>
            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Link to Register */}
          <Link href="/register">
            <button className="w-full border-2 border-[#1e3a8a] text-[#1e3a8a] font-bold py-4 rounded-2xl hover:bg-[#1e3a8a] hover:text-white transition-all">
              CREATE AN ACCOUNT
            </button>
          </Link>
        </div>

        {/* Simple Footer Text */}
        <p className="text-center text-blue-200 mt-8 text-sm font-medium">
          © 2026 Gibi Gubae Spiritual Management System
        </p>
      </div>
    </div>
  );
}