import React from 'react'

export default function HeroBanner(){
  return (
    <section className="relative bg-gradient-to-r from-sky-600 to-indigo-600 text-white rounded-lg overflow-hidden">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold">Discover premium products at great prices</h2>
          <p className="mt-4 text-lg text-sky-100 max-w-xl">ROY MART is a modern marketplace built for performance and maintainability. Shop curated collections and enjoy fast checkout.</p>
          <div className="mt-6 flex gap-3">
            <a href="/categories" className="bg-white text-sky-700 px-4 py-2 rounded font-semibold">Shop Now</a>
            <a href="/" className="border border-white px-4 py-2 rounded text-white">Learn More</a>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-3">
            <img alt="product" src="https://picsum.photos/seed/hero1/500/350" className="rounded shadow-md" />
            <img alt="product" src="https://picsum.photos/seed/hero2/500/350" className="rounded shadow-md" />
            <img alt="product" src="https://picsum.photos/seed/hero3/500/350" className="rounded shadow-md" />
            <img alt="product" src="https://picsum.photos/seed/hero4/500/350" className="rounded shadow-md" />
          </div>
        </div>
      </div>
    </section>
  )
}
