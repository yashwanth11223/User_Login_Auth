import { connectDB } from "@/lib/mongodb"
import User from "@/models/User"
import { sendEmail } from "@/lib/sendEmail"
import { NextResponse } from "next/server"

export async function POST(req){

  try{

    const { email } = await req.json()

    await connectDB()

    const user = await User.findOne({ email })

    if(!user){
      return NextResponse.json({ error:"User not found" })
    }

    const resetLink = `http://localhost:3000/reset-password?email=${email}`

    await sendEmail(
      email,
      "Password Reset",
      `Click this link to reset your password: ${resetLink}`
    )

    return NextResponse.json({
      message:"Reset email sent successfully"
    })

  }catch(error){

    console.log("EMAIL ERROR:", error)

    return NextResponse.json({
      error:"Failed to send email"
    })

  }
}