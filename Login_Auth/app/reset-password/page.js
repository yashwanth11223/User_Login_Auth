"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

export default function ResetPassword(){

  const searchParams = useSearchParams()
  const router = useRouter()

  const email = searchParams.get("email")

  const [password,setPassword] = useState("")
  const [msg,setMsg] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const res = await fetch("/api/reset-password",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})
    })

    const data = await res.json()

    if(res.ok){

      setMsg("Password updated successfully")

      setTimeout(()=>{
        router.push("/login")
      },2000)

    }else{
      setMsg(data.error)
    }
  }

  return(
    <div className="login-container">

      <div className="login-card">

        <h2>Reset Password</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

        {msg && <p style={{marginTop:"10px"}}>{msg}</p>}

      </div>

    </div>
  )
}