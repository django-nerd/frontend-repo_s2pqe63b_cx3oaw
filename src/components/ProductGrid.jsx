const products = [
  {
    id: 'p1',
    name: 'Echo Tee — Silent Geometry',
    color: 'Ivory',
    price: 58,
    image: 'https://images.unsplash.com/photo-1623908277264-f123c5d7d441?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFY2hvZXMlMjBvZiUyMFRob3VnaHQlMjAlRTIlODAlOTQlMjBTZXJpZXMlMjBJSXxlbnwwfDB8fHwxNzYyNTMxNTI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p2',
    name: 'Echo Tee — Metaphysical Form',
    color: 'Black',
    price: 58,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1600&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: 'Echo Tee — Echoes of Thought',
    color: 'Ash Grey',
    price: 58,
    image: 'https://images.unsplash.com/photo-1755723848122-75599c29ab93?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZXRhcGh5c2ljYWwlMjBGb3JtJTIwJUUyJTgwJTk0JTIwU2VyaWVzJTIwSXxlbnwwfDB8fHwxNzYyNTMxNTIzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    id: 'p4',
    name: 'Echo Tee — Monoline',
    color: 'Cream',
    price: 58,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop'
  }
];

function ProductCard({ product }) {
  return (
    <a href="#" className="group block">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/10 to-transparent" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-zinc-900">{product.name}</h3>
          <p className="text-xs text-zinc-500">{product.color}</p>
        </div>
        <p className="text-sm text-zinc-900">${product.price}</p>
      </div>
    </a>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">New Arrivals</h2>
          <a href="#" className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors">View all</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard product={p} key={p.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
