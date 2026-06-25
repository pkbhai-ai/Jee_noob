import React from 'react'
import WorldClock from '../components/WorldClock'

export default function Home(){
  return (
    <div>
      <section className="mb-8">
        <div className="rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 text-white p-8">
          <h1 className="text-3xl font-bold">Welcome to ROY MART</h1>
          <p className="mt-2 text-slate-100 max-w-xl">A modern marketplace scaffold focused on performance, accessibility, and maintainability.</p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">World Clock</h2>
        <WorldClock />
      </section>
    </div>
  )
}
