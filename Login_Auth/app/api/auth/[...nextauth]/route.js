import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { connectDB } from "@/lib/mongodb";
import Users from "@/models/User";
import bcrypt from "bcryptjs";

export const authOptions = {

  providers: [

    // GOOGLE LOGIN
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),

    // GITHUB LOGIN
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    // EMAIL + PASSWORD LOGIN
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },

      async authorize(credentials) {

        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw new Error("Missing email or password");
        }

        await connectDB();

        const user = await Users.findOne({ email });

        if (!user) {
          throw new Error("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          throw new Error("Invalid password");
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name || "User"
        };
      }
    })

  ],

  callbacks: {

    async signIn({ user, account }) {

      if (account.provider === "google" || account.provider === "github") {

        await connectDB();

        const existingUser = await Users.findOne({
          email: user.email
        });

        if (!existingUser) {
          return false;
        }

        // Ensure name exists for OAuth users
        user.name = existingUser.name || user.name || "User";
      }

      return true;
    },

    // Store user info inside JWT
    async jwt({ token, user }) {

      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
      }

      return token;
    },

    // Send user info to session
    async session({ session, token }) {

      if (session?.user) {
        session.user.id = token.id;
        session.user.name = token.name || "User";
        session.user.email = token.email;
      }

      return session;
    }

  },

  session: {
    strategy: "jwt"
  },

  pages: {
    signIn: "/login"
  },

  secret: process.env.NEXTAUTH_SECRET
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };