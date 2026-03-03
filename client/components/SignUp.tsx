"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, Mail, User, Lock, Phone, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (fullName.trim().length < 2) {
      setError("Please enter your full name.");
      return false;
    }
    if (phone.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return false;
    }
    return true;
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, phone, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed");
        return;
      }

      router.push("/login?registered=true");
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex flex-col justify-center items-center p-6 relative overflow-hidden">
      
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => router.push("/")}
        className="absolute top-8 left-8 text-primary/60 hover:text-primary transition-all z-20"
      >
        <ChevronLeft size={18} className="mr-2" />
        Back to Home
      </Button>

      <div className="w-full max-w-[480px] relative z-10">
        {/* Modern Soft Card */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-white p-8 md:p-12 transition-all">
          
          {/* Header Section */}
          <div className="text-center mb-10">
            
            <h1 className="text-3xl font-bold text-primary tracking-tight">
              Create <span className="text-secondary">Account</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Join our community of wisdom seekers
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {error && (
              <div className="bg-red-50 text-red-600 text-xs font-semibold p-4 rounded-2xl border border-red-100 animate-in fade-in slide-in-from-top-1">
                {error}
              </div>
            )}

            <div className="space-y-3">
              {/* Full Name */}
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors" size={18} />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="h-14 pl-12 rounded-2xl border-transparent bg-primary/5 focus:bg-white focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 transition-all font-medium"
                />
              </div>

              {/* Email */}
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors" size={18} />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-14 pl-12 rounded-2xl border-transparent bg-primary/5 focus:bg-white focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 transition-all font-medium"
                />
              </div>

              {/* Phone */}
              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors" size={18} />
                <Input
                  type="tel"
                  placeholder="Phone (10 digits)"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="h-14 pl-12 rounded-2xl border-transparent bg-primary/5 focus:bg-white focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 transition-all font-medium"
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/30 group-focus-within:text-secondary transition-colors" size={18} />
                <Input
                  type="password"
                  placeholder="Password (Min 6 chars)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-14 pl-12 rounded-2xl border-transparent bg-primary/5 focus:bg-white focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 transition-all font-medium"
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-primary text-tertiary rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 mt-4"
            >
              Get Started <ArrowRight size={18} />
            </Button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center text-sm font-medium text-primary/60">
            Already have an account?{" "}
            <Link href="/login" className="text-secondary hover:text-secondary/80 border-b-2 border-secondary/20 pb-0.5 transition-all">
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative background blurs */}
      <div className="fixed -z-10 top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="fixed -z-10 bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
    </div>
  );
}