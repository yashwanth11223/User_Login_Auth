import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
export default async function Dashboard() {
  const session = await getServerSession()
    if (!session) {
    redirect("/login")   // ✅ Prevent crash
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <p>Role: {session.user.role}</p>
    </div>
  )
}