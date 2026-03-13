"use client"

import { useSession } from "next-auth/react"

export default function Profile(){

  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="pt-28 text-center text-gray-600">
        Loading profile...
      </div>
    )
  }

  const name = session?.user?.name ?? ""
  const email = session?.user?.email ?? ""

  return(

    <div className="min-h-screen bg-gradient-to-r  from-blue-100 via-purple-100 to-pink-100 flex justify-center items-start pt-28 px-4">

      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Profile Header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-36 relative">

          <div className="absolute left-1/2 transform -translate-x-1/2 top-20">

            <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg text-3xl font-bold text-indigo-600">

              {name ? name.charAt(0).toUpperCase() : "U"}

            </div>

          </div>

        </div>


        {/* Profile Info */}
        <div className="pt-20 pb-10 px-8 text-center">

          <h1 className="text-2xl font-bold text-gray-800">
            {name || "User"}
          </h1>

          <p className="text-gray-500 mb-6">
            {email}
          </p>


          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">

            <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Account Type</p>
              <p className="font-semibold text-lg">Standard User</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Account Status</p>
              <p className="font-semibold text-lg text-green-600">Active</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Member Since</p>
              <p className="font-semibold text-lg">2026</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="text-gray-500 text-sm">Employees Managed</p>
              <p className="font-semibold text-lg">--</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}