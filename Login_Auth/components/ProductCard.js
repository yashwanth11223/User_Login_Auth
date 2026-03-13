"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ProductCard({ product }) {

  const { data: session } = useSession();
  const router = useRouter();

  const [qty, setQty] = useState(0);

  useEffect(() => {

    let cart = [];

    try {
      const stored = localStorage.getItem("cart");
      cart = stored ? JSON.parse(stored) : [];
    } catch {
      cart = [];
    }

    const item = cart.find(p => p.id === product.id);

    if (item) {
      setQty(item.qty);
    }

  }, [product.id]);


  const updateCart = (newQty) => {

    let cart = [];

    try {
      const stored = localStorage.getItem("cart");
      cart = stored ? JSON.parse(stored) : [];
    } catch {
      cart = [];
    }

    const index = cart.findIndex(p => p.id === product.id);

    if (index >= 0) {
      cart[index].qty = newQty;
    } else {
      cart.push({ ...product, qty: newQty });
    }

    if (newQty === 0) {
      cart = cart.filter(p => p.id !== product.id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

  };


  const increase = () => {

    if (!session) {
      alert("Please sign in to add items to cart");
      router.push("/login");
      return;
    }

    const newQty = qty + 1;

    setQty(newQty);
    updateCart(newQty);

  };


  const decrease = () => {

    const newQty = qty - 1;

    setQty(newQty);
    updateCart(newQty);

  };


  return (

    <div className="bg-white shadow rounded-lg p-4 ">

      <Image
        src={product.image}
        alt={product.name}
        width={400}
        height={300}
        className="rounded"
      />

      <h3 className="mt-3 font-semibold">
        {product.name}
      </h3>

      <p className="text-indigo-600 font-bold">
        ₹{product.price}
      </p>


      {qty === 0 ? (

        <button
          onClick={increase}
          className="mt-3 bg-yellow-500 text-black w-full py-2 rounded font-semibold"
        >
          Add to Cart
        </button>

      ) : (

        <div className="flex items-center justify-center gap-4 mt-3 bg-yellow-500 text-black py-2 rounded">

          <button onClick={decrease} className="text-lg font-bold">
            -
          </button>

          <span className="font-semibold">
            {qty}
          </span>

          <button onClick={increase} className="text-lg font-bold">
            +
          </button>

        </div>

      )}

    </div>

  );

}