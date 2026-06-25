import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header(){
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function onSearch(e){
    e.preventDefault()
    const q = query.trim()
    if(q) navigate(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="md:hidden" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Link to="/" className="text-2xl font-bold text-slate-800">ROY MART</Link>
          </div>

          <form onSubmit={onSearch} className="hidden md:flex items-center flex-1 max-w-2xl">
            <label htmlFor="site-search" className="sr-only">Search products</label>
            <input id="site-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for products, categories, brands..." className="w-full border rounded-l px-3 py-2 focus:outline-none" />
            <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-r">Search</button>
          </form>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <Link to="/categories" className="text-slate-600 hover:text-slate-900">Categories</Link>
              <Link to="/orders" className="text-slate-600 hover:text-slate-900">Orders</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/wishlist" className="text-slate-600 hover:text-slate-900" aria-label="Wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.84 4.61c-1.54-1.4-3.98-1.4-5.52 0L12 7.14 8.68 4.61c-1.54-1.4-3.98-1.4-5.52 0-1.64 1.5-1.66 4.07-.04 5.6L12 21.35l8.88-11.14c1.62-1.53 1.6-4.1-.04-5.6z" />
                </svg>
              </Link>

              <Link to="/cart" className="text-slate-600 hover:text-slate-900" aria-label="Cart">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 7h14l-2-7M10 21a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z" />
                </svg>
              </Link>

              <Link to="/login" className="text-slate-600 hover:text-slate-900 text-sm">Sign in</Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-3 md:hidden">
            <form onSubmit={onSearch} className="flex items-center gap-2">
              <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search..." className="w-full border rounded px-3 py-2" />
              <button type="submit" className="bg-sky-600 text-white px-3 py-2 rounded">Go</button>
            </form>
            <div className="mt-3 flex flex-col gap-2">
              <Link to="/categories" onClick={()=>setOpen(false)} className="block py-2">Categories</Link>
              <Link to="/orders" onClick={()=>setOpen(false)} className="block py-2">Orders</Link>
              <Link to="/wishlist" onClick={()=>setOpen(false)} className="block py-2">Wishlist</Link>
              <Link to="/cart" onClick={()=>setOpen(false)} className="block py-2">Cart</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
