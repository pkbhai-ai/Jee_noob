import React from 'react'
import HeroBanner from '../components/HeroBanner'
import Categories from '../components/Categories'
import ProductGrid from '../components/ProductGrid'
import products from '../data/sampleProducts'

export default function Home(){
  return (
    <div>
      <HeroBanner />

      <div className="container mx-auto px-4 py-8">
        <Categories />
        <ProductGrid products={products} />
      </div>
    </div>
  )
}
