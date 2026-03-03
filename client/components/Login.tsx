"use client";

import React, { useState } from "react";
import { Mail, Lock, ArrowRight, LogIn, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      
      router.push("/"); // Redirect to home after success
    } catch (err) {
      setError("Unable to connect to server.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 flex flex-col justify-center items-center p-6">
      
      {/* Back to Home Button */}
      <Button 
        variant="ghost" 
        onClick={() => router.push("/")}
        className="absolute top-8 left-8 text-primary/60 hover:text-primary transition-all"
      >
        <ChevronLeft size={18} className="mr-2" />
        Back to Home
      </Button>

      <div className="w-full max-w-[440px]">
        {/* Soft UI Card */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-white p-8 md:p-12 transition-all">
          
          {/* Header */}
          <div className="text-center mb-10">
            
            <h1 className="text-3xl font-bold text-primary tracking-tight">
              Welcome <span className="text-secondary">Back</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Enter your details to access your library
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="bg-red-50 text-red-600 text-xs font-semibold p-4 rounded-2xl border border-red-100 animate-in fade-in zoom-in-95">
                {error}
              </div>
            )}

            {/* Email Input */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-primary/5 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-primary placeholder:text-primary/30 focus:bg-white focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 outline-none transition-all"
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/40 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-primary/5 border border-transparent rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-primary placeholder:text-primary/30 focus:bg-white focus:border-secondary/30 focus:ring-4 focus:ring-secondary/5 outline-none transition-all"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <Link href="#" className="text-xs font-semibold text-primary/50 hover:text-secondary transition-colors">
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-7 rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight size={18} />
            </Button>
          </form>

          {/* Footer Link */}
          <div className="mt-8 text-center text-sm font-medium text-primary/60">
            Don't have an account?{" "}
            <Link href="/register" className="text-secondary hover:text-secondary/80 border-b-2 border-secondary/20 pb-0.5 transition-all">
              Create Account
            </Link>
          </div>
        </div>

        {/* Decorative background blur */}
        <div className="fixed -z-10 top-1/4 -left-20 w-72 h-72 bg-secondary/10 rounded-full blur-[120px]"></div>
        <div className="fixed -z-10 bottom-1/4 -right-20 w-72 h-72 bg-primary/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}