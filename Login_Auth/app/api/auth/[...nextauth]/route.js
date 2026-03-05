import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import {connectDB} from "@/lib/mongodb"
import Users from "@/models/User"
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {

        const email = credentials?.email
        const password = credentials?.password

        if (!email || !password) {
          return null
        }

        await connectDB()

        const user = await Users.findOne({ email })

        if (!user) {
          return null
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
          return null
        }

        return {
          id: user._id.toString(),
          email: user.email
        }
      }
    })
  ],

  session:{
    strategy:"jwt"
  },

  pages:{
    signIn:"/login"
  },

  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }