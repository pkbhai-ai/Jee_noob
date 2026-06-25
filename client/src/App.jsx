import React, { Suspense, lazy } from 'react'
import AppRoutes from './routes/AppRoutes'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Suspense fallback={<div>Loading...</div>}>
          <AppRoutes />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
