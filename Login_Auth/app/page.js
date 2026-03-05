
import Link from "next/link"
import { Sign } from "@/components/Sign"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
export default async function Home() {
const session = await getServerSession()
if (!session) {
    redirect("/login")   // ✅ Prevent crash
  }

  return (
    <div>
      <nav className="navv">
        <div className="logo">MySite</div>
        <ul className="nav-links">
          <li><Link className="ll" href="/">Home</Link></li>
          <li><Link className="ll" href="/about">About</Link></li>
          <li><Link className="ll" href="/servic">Services</Link></li>
          <li><Link className="ll" href="/profile">Profile</Link></li>
          <li>
            <Link className="ll" href="/login">
            <Sign/>
            </Link>
            </li>
        </ul>
      </nav>

    </div>
  )
}