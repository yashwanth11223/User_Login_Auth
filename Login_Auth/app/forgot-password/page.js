"use client"

import { useState } from "react"

export default function ForgotPassword(){

  const [email,setEmail] = useState("")
  const [msg,setMsg] = useState("")

  const handleSubmit = async(e)=>{
    e.preventDefault()

    try{

      const res = await fetch("/api/forgot-password",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({email})
      })

      let data = {}

      try{
        data = await res.json()
      }catch(err){
        console.log("Invalid JSON response")
      }

      setMsg(data.message || data.error || "Something went wrong")

    }catch(error){
      console.log(error)
      setMsg("Server error")
    }

  }

  return(
    <div className="login-container">

      <div className="login-card">

        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send Reset Email
          </button>

        </form>

        {msg && (
          <p style={{marginTop:"10px"}}>
            {msg}
          </p>
        )}

      </div>

    </div>
  )
}