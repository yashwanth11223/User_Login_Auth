"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
export default function Home() {

  const { data: session } = useSession()

  const [employees, setEmployees] = useState([])
  const [departments, setDepartments] = useState(0)
  const offers = products.filter(p => p.offer);
  useEffect(() => {

    const fetchEmployees = async () => {

      try {

        const res = await fetch("/api/employees")

        if (!res.ok) return

        const data = await res.json()

        setEmployees(data)

        const uniqueDepartments = new Set(
          data.map(emp => emp.department).filter(Boolean)
        )

        setDepartments(uniqueDepartments.size)

      } catch (error) {
        console.error(error)
      }

    }

    fetchEmployees()

  }, [])

  return (

  <div className="pt-24 max-w-0xl mx-auto px-6 bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100">

{/* HERO */}

<div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-10 rounded-lg mb-10">

<h1 className="text-4xl font-bold">
Big Sale Today
</h1>

<p className="mt-2">
Best deals on electronics
</p>

</div>


{/* CURRENT OFFERS */}

<h2 className="text-2xl font-bold mb-4">
Current Offers
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">

{offers.map(p => (
<ProductCard key={p.id} product={p}/>
))}

</div>


{/* FEATURED PRODUCTS */}

<h2 className="text-2xl font-bold mb-4">
Featured Products
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

{products.slice(0,4).map(p => (
<ProductCard key={p.id} product={p}/>
))}

</div>

</div>


  )
}