import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-spiritual-cream text-gray-900 font-sans">

      {/* --- NAVIGATION --- */}
      <nav className="flex justify-between items-center px-10 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-bold text-agt-blue">Gibi Gubae <span className="text-agt-yellow">Library</span></div>
        <div className="space-x-8 font-medium">
          <a href="#" className="hover:text-agt-yellow transition">Home</a>
          <a href="#" className="hover:text-agt-yellow transition">Books</a>
          <a href="#" className="hover:text-agt-yellow transition">Research</a>
          <button className="bg-church-red text-white px-6 py-2 rounded-full hover:bg-red-800 transition">
            Join Gibi
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION (Poster Colors) --- */}
      <header className="relative bg-agt-blue py-24 px-10 overflow-hidden">
        {/* Decorative background circle like the poster */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1 text-white">
            <span className="text-agt-yellow font-semibold tracking-widest uppercase text-sm">Innovation • Faith • Technology</span>
            <h1 className="text-6xl font-extrabold mt-4 leading-tight">
              Explore the <br />
              <span className="text-agt-yellow italic">Wisdom of Ages</span>
            </h1>
            <p className="mt-6 text-blue-100 text-lg max-w-lg">
              Discover ancient Ge'ez scriptures, illuminated manuscripts, and modern spiritual teachings.
              Our talent for our Church, preserving heritage digitally.
            </p>
            <div className="mt-10 flex gap-4">
              <button className="bg-agt-yellow text-agt-blue font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-agt-blue transition">
                Explore Library
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            {/* The Book Image Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-agt-yellow rounded-2xl blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl">
                <img
                  src="/api/placeholder/400/500"
                  alt="Ancient Manuscript"
                  className="rounded-lg border-4 border-agt-yellow/20"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- QUOTE SECTION --- */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="text-agt-blue text-4xl mb-6">"</div>
          <h2 className="text-2xl md:text-3xl font-serif text-agt-blue leading-relaxed italic">
            "በመጀመሪያ ቃል ነበረ፤ ቃልም በእግዚአብሔር ዘንድ ነበረ፤ ቃልም እግዚአብሔር ነበረ።"
          </h2>
          <p className="mt-4 text-gray-500">— ዮሐንስ 1:1</p>
        </div>
      </section>

      {/* --- CATEGORIES (Second Image Structure) --- */}
      <section className="py-24 px-10 bg-spiritual-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h3 className="text-agt-blue font-bold text-3xl">Featured Categories</h3>
              <div className="h-1 w-20 bg-agt-yellow mt-2"></div>
            </div>
            <p className="text-gray-500 max-w-md">Browse through our meticulously curated collection of spiritual knowledge spanning centuries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Ancient Series', 'Ge\'ez Manuscripts', 'Hymns (Dugua)', 'Modern Teachings'].map((cat, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all border border-gray-100">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-agt-blue mb-6">
                  📖
                </div>
                <h4 className="font-bold text-xl mb-3 text-agt-blue">{cat}</h4>
                <p className="text-gray-500 text-sm mb-6">Authentic sources of spiritual nourishment and historical truth.</p>
                <a href="#" className="text-church-red font-semibold flex items-center gap-2 group">
                  Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}