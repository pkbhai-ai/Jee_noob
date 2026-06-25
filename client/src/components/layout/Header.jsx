import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">ROY MART</Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-slate-600">Home</Link>
          <Link to="/world-clock" className="text-sm text-slate-600">World Clock</Link>
        </nav>
      </div>
    </header>
  )
}
