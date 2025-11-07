import { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#shop' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-zinc-900 text-lg sm:text-xl">ECHOFORM</a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                className="text-sm text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {l.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-zinc-100 transition-colors">
              <ShoppingBag className="h-5 w-5 text-zinc-900" />
            </button>
            <button
              aria-label="Menu"
              className="md:hidden p-2 rounded-full hover:bg-zinc-100 transition-colors"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  className="block rounded-md px-3 py-2 text-zinc-800 hover:bg-zinc-100"
                  onClick={() => setOpen(false)}
                >
                  {l.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
