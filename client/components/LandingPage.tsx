import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Sparkles, Home as HomeIcon, Library, LogIn, UserPlus, Search, Star, Users } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-spiritual-cream to-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold text-primary">OrthodoxLibrary</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" icon={<HomeIcon className="h-4 w-4" />} text="Home" />
          <NavLink href="/books" icon={<Library className="h-4 w-4" />} text="Books" />
          <NavLink href="/login" icon={<LogIn className="h-4 w-4" />} text="Login" />
          <NavLink href="/signup" icon={<UserPlus className="h-4 w-4" />} text="Sign Up" />
        </div>

        <Button className="md:hidden bg-primary text-tertiary">Menu</Button>
      </nav>

      {/* Hero Section with Image on Right */}
      <section className="flex-1 flex items-center px-6 py-12 sm:px-8 lg:px-12 max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary border border-secondary/30">
              <Sparkles className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">Sacred Wisdom Awaits</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Discover Ancient
              <span className="block text-secondary">Orthodox Wisdom</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-md">
              Explore our digital library of sacred texts, theological works, and spiritual classics that nurture the soul.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary text-tertiary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
                <BookOpen className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-gray-500">Sacred Texts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-500">Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm text-gray-500">Readers</div>
              </div>
            </div>
          </div>

          {/* Right Side Image Placeholder */}
          <div className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
            {/* Replace this with your actual image */}
            <div className="absolute inset-0 flex items-center justify-center bg-primary/5">
              <div className="text-center p-8">
                <BookOpen className="h-24 w-24 text-primary/30 mx-auto mb-4" />
                <p className="text-primary/50 font-medium">✨ Ancient figure with glowing book ✨</p>
                <p className="text-sm text-gray-400 mt-2">(Replace with your image)</p>
              </div>
            </div>

            <Image
              src="/image.png"
              alt="Ancient figure with glowing book"
              fill
              className="object-cover"
              priority
            />

          </div>
        </div>


      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-spiritual-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Why Choose Our Orthodox Library?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-secondary" />}
              title="Extensive Collection"
              description="Thousands of Orthodox texts, from ancient manuscripts to modern commentaries"
            />
            <FeatureCard
              icon={<Search className="h-8 w-8 text-secondary" />}
              title="Smart Search"
              description="Advanced search by author, topic, or liturgical season"
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-secondary" />}
              title="Curated Content"
              description="Hand-picked selections by Orthodox theologians and scholars"
            />
            <FeatureCard
              icon={<Users className="h-8 w-8 text-secondary" />}
              title="Community Notes"
              description="Share insights and discuss texts with fellow readers"
            />
          </div>
        </div>
      </section>

      {/* Featured Books Section with Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            Featured Orthodox Classics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-full h-48 bg-primary/10 rounded-t-lg mb-4 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/40" />
                  </div>
                  <CardTitle className="text-primary">The Philokalia</CardTitle>
                  <CardDescription>by St. Nikodimos of the Holy Mountain</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A classic collection of texts on prayer and the spiritual life...
                  </p>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Read Sample
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-tertiary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 text-tertiary/90">
            Receive weekly readings and new additions to our library
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-tertiary/10 border-tertiary/30 text-tertiary placeholder:text-tertiary/60"
            />
            <Button className="bg-secondary text-primary hover:bg-secondary/90 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/95 text-tertiary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-secondary" />
              Orthodox Library
            </h3>
            <p className="text-tertiary/80 text-sm">
              Preserving and sharing the wisdom of the Orthodox Christian tradition through accessible digital means.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-tertiary/80 text-sm">
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/collection" className="hover:text-secondary transition-colors">Collection</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link href="/support" className="hover:text-secondary transition-colors">Support Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-tertiary/80 text-sm">
              <li><Link href="/faq" className="hover:text-secondary transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Use</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-tertiary/80 text-sm">
              <li>Email: info@orthodoxlibrary.org</li>
              <li>Phone: (555) 123-4567</li>
              <li>Follow us on social media</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-tertiary/20 text-center text-tertiary/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Orthodox Library. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Navigation Link Component
function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <Link href={href} className="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors">
      {icon}
      <span>{text}</span>
    </Link>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <Card className="text-center hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}