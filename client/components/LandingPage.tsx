"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Home as HomeIcon, Library, LogIn, UserPlus, Users, ArrowRight, Bot, Image as ImageIcon, Menu, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Modern interaction class for consistent hover effects
  const modernInteraction = "transition-all duration-300 hover:scale-105 active:scale-95"

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary/5 to-secondary/5">
      {/* Modernized Navigation - Clean & Icon-free */}
      <nav className="flex items-center justify-between px-6 py-4 sm:px-12 bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-secondary/20">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-black tracking-tighter text-primary transition-transform duration-300 group-hover:scale-105">
            ORTHODOX.
          </span>
        </Link>

        {/* Desktop Navigation - All items look like buttons on hover */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Home Button */}
          <Button
            variant="ghost"
            onClick={() => router.push("/")}
            className={`px-6 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary ${modernInteraction}`}
          >
            Home
          </Button>

          {/* Books Button */}
          <Button
            variant="ghost"
            onClick={() => router.push("/books")}
            className={`px-6 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary ${modernInteraction}`}
          >
            Books
          </Button>

          {/* Login Button */}
          <Button
            variant="ghost"
            onClick={() => router.push("/login")}
            className={`px-6 py-2 rounded-full text-sm font-medium text-primary hover:bg-primary/5 hover:text-primary ${modernInteraction}`}
          >
            Login
          </Button>

          {/* Sign Up Button - The Primary Action */}
          <Button
            onClick={() => router.push("/signup")}
            className={`bg-primary text-primary-foreground rounded-full px-8 font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 ${modernInteraction}`}
          >
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary hover:bg-primary/5 rounded-full transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-secondary/20 p-6 flex flex-col space-y-4 md:hidden shadow-2xl animate-in fade-in slide-in-from-top-4">
            <Link 
              href="/" 
              className="p-4 rounded-xl text-lg font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/books" 
              className="p-4 rounded-xl text-lg font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Books
            </Link>
            <Link 
              href="/login" 
              className="p-4 rounded-xl text-lg font-bold text-primary bg-primary/5 hover:bg-primary/10 transition-colors" 
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Button 
              className="w-full py-6 text-lg bg-primary font-bold rounded-xl hover:scale-[1.02] transition-all duration-300" 
              onClick={() => {
                router.push("/signup")
                setMobileMenuOpen(false)
              }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex items-center px-6 py-12 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Discover Ancient
              <span className="block text-secondary">Orthodox Wisdom</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-md">
              Explore our digital library of sacred texts, theological works, and spiritual classics that nurture the soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary text-tertiary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                onClick={() => router.push("/signup")}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary/10"
                onClick={() => router.push("/about")}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            <div className="relative w-full h-full">
              <Image 
                src="/images/landing.png" 
                alt="Ancient Orthodox Wisdom"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Our <span className="text-secondary">Features</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <BigFeatureCard 
              link="/library" 
              icon={<BookOpen size={28} />} 
              title="Digital Library" 
              desc="Curated manuscripts & modern theology texts." 
            />
            <BigFeatureCard 
              link="/chat" 
              icon={<Bot size={28} />} 
              title="AI Theological Guide" 
              desc="Instant wisdom-backed answers." 
            />
            <BigFeatureCard 
              link="/discussion" 
              icon={<Users size={28} />} 
              title="Discussion Groups" 
              desc="Thematic rooms for theological study." 
            />
          </div>
        </div>
      </section>

      {/* Books Collection */}
      <section className="py-20 px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Explore the Collection
              </h2>
            </div>
            <Link 
              href="/library" 
              className="hidden md:flex items-center gap-2 text-sm font-medium text-secondary hover:text-secondary/80 border-b-2 border-secondary pb-1 transition-all group"
            >
              View All Books <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            <BookCard 
              image="/images/book1.png" 
              title="Himemat" 
              author="Traditional" 
              category="Sacred" 
            />
            <BookCard 
              image="/images/book2.png" 
              title="History Vol. 1" 
              author="Scholar" 
              category="Tarik" 
            />
            <BookCard 
              image="/images/book3.png" 
              title="History Vol. 2" 
              author="Scholar" 
              category="Tarik" 
            />
            <BookCard 
              image="/images/book4.png" 
              title="St. Paul" 
              author="Theological" 
              category="Scripture" 
            />
            <BookCard 
              image="/images/book5.png" 
              title="Taodokes" 
              author="Ancient" 
              category="Wisdom" 
            />
          </div>
        </div>
      </section>

      {/* Footer with Glassy Background Icons */}
      <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold flex items-center group">
                <BookOpen className="mr-3 h-6 w-6 text-secondary group-hover:rotate-12 transition-transform duration-300" />
                <span>Orthodox Library</span>
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Preserving and sharing the wisdom of the Orthodox Christian tradition through accessible digital means.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-lg relative inline-block">
                Quick Links
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-primary-foreground/70 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">Library</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">Resources</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">Contact</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4 text-lg relative inline-block">
                Support
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
              </h4>
              <ul className="space-y-3 text-primary-foreground/70 text-sm">
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">Donate</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">Volunteer</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">FAQ</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors duration-300 hover:translate-x-1 inline-block">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="font-semibold mb-4 text-lg relative inline-block">
                Connect
                <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-secondary rounded-full"></span>
              </h4>
              
              {/* Contact Info */}
              <div className="space-y-3 text-primary-foreground/70 text-sm mb-6">
                <div className="flex items-center group">
                  <svg className="w-4 h-4 mr-3 text-secondary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@orthodoxlibrary.org</span>
                </div>
                <div className="flex items-center group">
                  <svg className="w-4 h-4 mr-3 text-secondary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </div>
              </div>

              {/* Social Media Icons with Glassy Background */}
              <div className="space-y-3">
                <p className="text-primary-foreground/70 text-sm mb-3">Follow us on social media</p>
                <div className="flex space-x-4">
                  {/* Telegram Icon */}
                  <a 
                    href="#" 
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-[#0088cc] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    aria-label="Telegram"
                  >
                    <svg 
                      className="w-5 h-5 text-tertiary group-hover:text-white transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.36-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>

                  {/* Instagram Icon */}
                  <a 
                    href="#" 
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-[#E4405F] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    aria-label="Instagram"
                  >
                    <svg 
                      className="w-5 h-5 text-tertiary group-hover:text-white transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.89 0 2.13.01 2.88.04 1.75.07 2.68.89 2.75 2.75.03.75.04.99.04 2.88s-.01 2.13-.04 2.88c-.07 1.75-.89 2.68-2.75 2.75-.75.03-.99.04-2.88.04s-2.13-.01-2.88-.04c-1.75-.07-2.68-.89-2.75-2.75-.03-.75-.04-.99-.04-2.88s.01-2.13.04-2.88c.07-1.75.89-2.68 2.75-2.75.75-.03.99-.04 2.88-.04zm0 2c-1.9 0-2.15.01-2.89.04-1.54.06-2.26.79-2.32 2.32-.03.74-.04.99-.04 2.89s.01 2.15.04 2.89c.06 1.53.78 2.26 2.32 2.32.74.03.99.04 2.89.04s2.15-.01 2.89-.04c1.54-.06 2.26-.79 2.32-2.32.03-.74.04-.99.04-2.89s-.01-2.15-.04-2.89c-.06-1.53-.78-2.26-2.32-2.32-.74-.03-.99-.04-2.89-.04zM12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.5-4.75c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75z"/>
                    </svg>
                  </a>

                  {/* Facebook Icon */}
                  <a 
                    href="#" 
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-[#1877F2] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    aria-label="Facebook"
                  >
                    <svg 
                      className="w-5 h-5 text-tertiary group-hover:text-white transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                    </svg>
                  </a>

                  {/* Twitter/X Icon */}
                  <a 
                    href="#" 
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-[#1DA1F2] hover:scale-110 active:scale-95 transition-all duration-300 group"
                    aria-label="Twitter"
                  >
                    <svg 
                      className="w-5 h-5 text-tertiary group-hover:text-white transition-colors duration-300" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/50 text-sm">
              <p>&copy; {new Date().getFullYear()} Orthodox Library. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-secondary transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-secondary transition-colors duration-300">Terms of Service</a>
                <a href="#" className="hover:text-secondary transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Big Feature Card Component
function BigFeatureCard({ 
  link, 
  icon, 
  title, 
  desc
}: { 
  link: string; 
  icon: React.ReactNode; 
  title: string; 
  desc: string;
}) {
  return (
    <Link href={link}>
      <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-2 border-transparent hover:border-secondary/20">
        <CardHeader>
          <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300 text-secondary">
            {icon}
          </div>
          <CardTitle className="text-primary">{title}</CardTitle>
          <CardDescription>{desc}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}

// Book Card Component with Image
function BookCard({ 
  image, 
  title, 
  author, 
  category
}: { 
  image: string; 
  title: string; 
  author: string; 
  category: string;
}) {
  return (
    <Link href={`/book/${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary/20">
        <div className="relative h-48 w-full bg-muted">
          {/* Image with Next.js Image component */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 50vw, 20vw"
          />
          {/* Category Badge on Image */}
          <div className="absolute top-2 right-2">
            <span className="text-xs px-2 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full shadow-sm font-medium">
              {category}
            </span>
          </div>
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg group-hover:text-secondary transition-colors">
            {title}
          </CardTitle>
          <CardDescription>
            <span className="text-muted-foreground">by {author}</span>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}