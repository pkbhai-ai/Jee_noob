import React from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ products }){
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Featured products</h3>
        <a href="/products" className="text-sm text-slate-600">View all</a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
