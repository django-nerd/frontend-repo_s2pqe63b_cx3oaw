import { useEffect, useState } from 'react';

const mockups = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop',
    caption: 'Metaphysical Form — Series I',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1755723848122-75599c29ab93?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZXRhcGh5c2ljYWwlMjBGb3JtJTIwJUUyJTgwJTk0JTIwU2VyaWVzJTIwSXxlbnwwfDB8fHwxNzYyNTMxNTIzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Echoes of Thought — Series II',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1623908277264-f123c5d7d441?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFY2hvZXMlMjBvZiUyMFRob3VnaHQlMjAlRTIlODAlOTQlMjBTZXJpZXMlMjBJSXxlbnwwfDB8fHwxNzYyNTMxNTI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    caption: 'Silent Geometry — Series III',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % mockups.length);
    }, 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
              Echoform — minimalist tees with philosophical art prints
            </h1>
            <p className="mt-5 text-zinc-600 max-w-xl">
              Design-forward, ethically produced, and made for thoughtful wardrobes. Subtle graphics,
              precise typography, and enduring materials.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-zinc-900 text-white px-6 py-3 text-sm hover:bg-zinc-800 transition-colors shadow-sm">
                Shop new arrivals
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-full border border-zinc-300 text-zinc-900 px-6 py-3 text-sm hover:bg-zinc-50 transition-colors">
                Our philosophy
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">
            {mockups.map((m, i) => (
              <img
                key={m.id}
                src={m.src}
                alt={m.caption}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-700">
              <span className="bg-white/70 backdrop-blur px-3 py-1 rounded-full">{mockups[index].caption}</span>
              <span className="bg-white/70 backdrop-blur px-3 py-1 rounded-full">{String(index + 1).padStart(2, '0')} / {mockups.length}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
