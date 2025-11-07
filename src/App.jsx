import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import BrandSection from './components/BrandSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <BrandSection />

        <section id="contact" className="py-16 sm:py-24 border-t border-zinc-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h3>
                <p className="mt-3 text-zinc-600 max-w-md">
                  Questions about sizing, materials, or orders? We’re here to help. Expect a thoughtful reply within 24 hours.
                </p>
                <div className="mt-6 rounded-2xl border border-zinc-200 p-6 shadow-sm bg-white">
                  <p className="text-sm text-zinc-600">Email</p>
                  <p className="text-sm font-medium">hello@echoform.studio</p>
                  <p className="mt-4 text-sm text-zinc-600">Social</p>
                  <div className="mt-1 text-sm font-medium">@echoform.studio</div>
                </div>
              </div>
              <form className="rounded-2xl border border-zinc-200 p-6 shadow-sm bg-white">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input className="rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900" placeholder="First name" />
                  <input className="rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900" placeholder="Last name" />
                  <input type="email" className="sm:col-span-2 rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900" placeholder="Email" />
                  <textarea rows={4} className="sm:col-span-2 rounded-xl border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900" placeholder="Message" />
                </div>
                <button className="mt-4 inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm hover:bg-zinc-800 transition-colors">
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-xs text-zinc-500">© {new Date().getFullYear()} Echoform Studio</p>
          <nav className="hidden sm:flex items-center gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-900">Home</a>
            <a href="#shop" className="hover:text-zinc-900">Shop</a>
            <a href="#about" className="hover:text-zinc-900">About</a>
            <a href="#contact" className="hover:text-zinc-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
