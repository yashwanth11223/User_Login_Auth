"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Register() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()

    setLoading(true)

    try {

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })

      let data = {}

      try {
        data = await res.json()
      } catch (err) {
        console.log("No JSON returned from API")
      }

      if (res.ok) {
        alert("Account created successfully")
        router.push("/login")
      } else {
        alert(data.error || "Registration failed")
      }

    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }

    setLoading(false)
  }

  return (
    <div className="login-container">

      <div className="login-card">

        <h2>Create Account</h2>

        <form onSubmit={handleRegister}>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>

        </form>

      </div>

    </div>
  )
}