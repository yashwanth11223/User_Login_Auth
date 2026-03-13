import { products } from "@/data/products"

export default function ProductPage({ params }) {

  const product = products.find(p => p.id == params.id)

  if (!product) {
    return (
      <div className="pt-24 text-center text-red-500">
        Product not found
      </div>
    )
  }

  return (

    <div className="pt-24 max-w-5xl mx-auto px-6 flex gap-10">

      <img
        src={product.image}
        className="w-1/2 rounded"
      />

      <div>

        <h1 className="text-3xl font-bold">
          {product.name}
        </h1>

        <p className="mt-3 text-gray-600">
          {product.description}
        </p>

        <p className="mt-3 text-xl font-bold text-indigo-600">
          ₹{product.price}
        </p>

      </div>

    </div>

  )
}