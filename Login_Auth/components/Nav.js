"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Sign } from "./Sign"
import { ShoppingCartIcon, BuildingStorefrontIcon } from "@heroicons/react/24/outline"

export function Nav() {

  const { data: session } = useSession()

  return (

    <nav className="fixed top-0 m-0 left-0 w-full bg-blue-50 shadow-sm z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-gray-800">

          <BuildingStorefrontIcon className="w-7 h-7 text-indigo-600" />

          Local Store

        </Link>


        {/* Menu */}

        <ul className="flex items-center gap-6 text-gray-700 font-medium">

          <li>
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>

          <li>
            <Link href="/products" className="hover:text-indigo-600">
              Products
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-indigo-600">
              About
            </Link>
          </li>

          <li>
            <Link href="/servic" className="hover:text-indigo-600">
              Services
            </Link>
          </li>

          <li>
            <Link href="/cart" className="flex items-center gap-1 hover:text-indigo-600">
              <ShoppingCartIcon className="w-6 h-6" />
              Cart
            </Link>
          </li>

          {session && (
            <li>
              <Link href="/profile" className="hover:text-indigo-600">
                Profile
              </Link>
            </li>
          )}

          <li>
            <Sign />
          </li>

        </ul>

      </div>

    </nav>

  )
}