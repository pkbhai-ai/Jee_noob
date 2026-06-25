import React from 'react'
import categories from '../data/sampleCategories'
import { Link } from 'react-router-dom'

export default function Categories(){
  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold">Shop by category</h3>
        <Link to="/categories" className="text-sm text-slate-600">View all</Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {categories.map(cat => (
          <Link to={`/categories/${cat.slug}`} key={cat.id} className="block border rounded overflow-hidden bg-white">
            <img src={cat.image} alt={cat.name} className="w-full h-36 object-cover" />
            <div className="p-3">
              <div className="font-medium">{cat.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
