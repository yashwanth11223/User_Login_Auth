import {connectDB} from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req){

  try{

    const { email, password } = await req.json()

    await connectDB()

    const hashedPassword = await bcrypt.hash(password,10)

    await User.updateOne(
      { email },
      { password: hashedPassword }
    )

    return NextResponse.json({
      message:"Password updated successfully"
    })

  }catch(error){

    return NextResponse.json({
      error:"Server error"
    })

  }

}