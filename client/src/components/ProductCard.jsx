import React from 'react'

export default function ProductCard({ product }){
  return (
    <article className="border rounded bg-white overflow-hidden shadow-sm">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <div className="p-3">
        <h4 className="font-semibold text-sm truncate">{product.title}</h4>
        <div className="mt-2 flex items-center justify-between">
          <div className="text-lg font-bold">${product.price.toFixed(2)}</div>
          {product.compareAtPrice && <div className="text-sm line-through text-slate-400">${product.compareAtPrice.toFixed(2)}</div>}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <button className="text-sm px-3 py-1 border rounded">Add</button>
          <button className="text-sm px-3 py-1 text-slate-500">Wishlist</button>
        </div>
      </div>
    </article>
  )
}
