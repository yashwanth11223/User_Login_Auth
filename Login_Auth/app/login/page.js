"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Login(){

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  const handleLogin = async(e)=>{
    e.preventDefault()

    setLoading(true)
    setError("")

    const res = await signIn("credentials",{
      email,
      password,
      redirect:false
    })

    setLoading(false)

    if(res?.error){
      setError("Invalid email or password")
    }else{
      router.push("/")
    }
  }

  return(
    <div className="login-container">

      <div className="login-card">

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          {error && (
            <p style={{color:"red"}}>{error}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        <div className="create-text">

          <p>
            Don't have an account?{" "}
            <Link href="/register">Create Account</Link>
          </p>

          <p>
            <Link href="/forgot-password">
              Forgot Password?
            </Link>
          </p>

        </div>

      </div>

    </div>
  )
}