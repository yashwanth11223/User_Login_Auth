"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { FaGithub, FaGoogle } from "react-icons/fa"

export default function Login() {

  const router = useRouter()

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")

  const handleLogin = async (e) => {

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

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to your account
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400"
            required
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>


        {/* Links */}

        <div className="text-center mt-4 text-sm text-gray-600">

          <p>
            Don't have an account?{" "}
            <Link href="/register" className="text-indigo-600 font-semibold">
              Create Account
            </Link>
          </p>

          <p className="mt-2">
            <Link href="/forgot-password" className="text-indigo-600">
              Forgot Password?
            </Link>
          </p>

        </div>


        {/* Divider */}

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>


        {/* OAuth Buttons */}

        <div className="space-y-3">

          <button
            onClick={()=>signIn("github",{callbackUrl:"/"})}
            className="w-full flex items-center justify-center gap-3 bg-gray-900 text-white py-2 rounded-lg hover:bg-black transition"
          >
            <FaGithub />
            Continue with GitHub
          </button>

          <button
            onClick={()=>signIn("google",{callbackUrl:"/"})}
            className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            <FaGoogle />
            Continue with Google
          </button>

        </div>

      </div>

    </div>

  )
}