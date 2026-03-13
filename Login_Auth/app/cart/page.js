"use client"

import { useEffect, useState } from "react"

export default function Cart() {

    const [cart, setCart] = useState([])

    useEffect(() => {

        const data = JSON.parse(localStorage.getItem("cart")) || []
        const cart = JSON.parse(localStorage.getItem("cart") || "[]")
        setCart(data)

    }, [])

    const updateCart = (updatedCart) => {

        setCart(updatedCart)

        localStorage.setItem("cart", JSON.stringify(updatedCart))

        window.dispatchEvent(new Event("cartUpdated"))

    }

    const increase = (id) => {

        let newCart = [...cart]

        const index = newCart.findIndex(p => p.id === id)

        newCart[index].qty += 1

        updateCart(newCart)

    }

    const decrease = (id) => {

        let newCart = [...cart]

        const index = newCart.findIndex(p => p.id === id)

        newCart[index].qty -= 1

        if (newCart[index].qty === 0) {

            newCart = newCart.filter(p => p.id !== id)

        }

        updateCart(newCart)

    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0)

    return (

        <div className="pt-24 max-w-4xl mx-auto bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100">

            <h1 className="text-3xl font-bold mb-6">
                Your Cart
            </h1>

            {cart.map(item => (

                <div
                    key={item.id}
                    className="flex justify-between items-center border-b py-4"
                >

                    <div className="flex gap-4 items-center">

                        <img
                            src={item.image}
                            className="w-16 h-16 object-cover rounded"
                        />

                        <div>

                            <h3 className="font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-gray-500">
                                ₹{item.price}
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-6">

                        <div className="flex items-center gap-3 bg-yellow-400 px-3 py-1 rounded">

                            <button
                                onClick={() => decrease(item.id)}
                                className="font-bold text-lg"
                            >
                                -
                            </button>

                            <span className="font-semibold">
                                {item.qty}
                            </span>

                            <button
                                onClick={() => increase(item.id)}
                                className="font-bold text-lg"
                            >
                                +
                            </button>

                        </div>

                        <span className="font-bold">
                            ₹{item.price * item.qty}
                        </span>

                    </div>

                </div>

            ))}

            <div className="mt-6 text-xl font-bold">
                Total ₹{total}
            </div>

        </div>

    )

}