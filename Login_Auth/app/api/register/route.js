import { connectDB } from "@/lib/mongodb"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"
import Users from "@/models/User"

export async function POST(req){

  try{

    const { name, email, password } = await req.json()

    if(!name || !email || !password){
      return NextResponse.json(
        { error:"All fields required" },
        { status:400 }
      )
    }

    await connectDB()

    const existingUser = await Users.findOne({ email })

    if(existingUser){
      return NextResponse.json(
        { error:"User already exists" },
        { status:400 }
      )
    }

    const hashedPassword = await bcrypt.hash(password,10)

    await Users.create({
      name,
      email,
      password: hashedPassword
    })

    return NextResponse.json({
      message:"Account created successfully"
    })

  }catch(error){

    console.log("REGISTER ERROR:", error)

    return NextResponse.json(
      { error:"Server error" },
      { status:500 }
    )

  }

}