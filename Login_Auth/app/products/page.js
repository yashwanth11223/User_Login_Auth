"use client"

import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default function Products() {

  return (

    <div className="pt-24 max-w-7xl mx-auto px-6 bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100">

      <h1 className="text-3xl font-bold mb-6">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}

      </div>

    </div>

  )

}