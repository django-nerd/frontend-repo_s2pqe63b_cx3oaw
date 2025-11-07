export default function BrandSection() {
  return (
    <section id="about" className="py-16 sm:py-24 border-t border-zinc-200">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Considered design, enduring quality</h3>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              Echoform explores the quiet intersection of typography, geometry, and philosophy. Our tees are cut from
              premium combed cotton, garment-dyed for a lived-in feel, and printed using water-based inks for a soft
              hand. Minimal branding. Maximum intention.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-xl border border-zinc-200 p-5 shadow-sm bg-white">
                <p className="text-sm font-medium text-zinc-900">Ethically made</p>
                <p className="mt-1 text-xs text-zinc-500">Responsible supply chain and small-batch production.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-5 shadow-sm bg-white">
                <p className="text-sm font-medium text-zinc-900">Timeless palette</p>
                <p className="mt-1 text-xs text-zinc-500">Muted tones that integrate seamlessly into any wardrobe.</p>
              </div>
              <div className="rounded-xl border border-zinc-200 p-5 shadow-sm bg-white">
                <p className="text-sm font-medium text-zinc-900">Thoughtful prints</p>
                <p className="mt-1 text-xs text-zinc-500">Graphic work that leaves room for interpretation.</p>
              </div>
            </div>
          </div>
          <div className="md:pl-8">
            <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm bg-white">
              <p className="text-sm text-zinc-600">Newsletter</p>
              <p className="mt-1 text-zinc-900 font-medium">Join for early access</p>
              <form className="mt-4">
                <div className="flex items-center gap-2">
                  <input type="email" required placeholder="you@domain.com" className="w-full rounded-full border border-zinc-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-zinc-900 focus:border-zinc-900" />
                  <button className="rounded-full bg-zinc-900 text-white px-5 py-2.5 text-sm hover:bg-zinc-800 transition-colors">Sign up</button>
                </div>
              </form>
              <p className="mt-3 text-xs text-zinc-500">We send a few thoughtful updates each month — no noise.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
