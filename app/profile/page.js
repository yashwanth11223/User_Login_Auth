import React from 'react'
import { getServerSession } from "next-auth"
const page = async(req) => {
   const session = await getServerSession()

  const email = session?.user?.email
    return (
    <div>
      email:{email}
    </div>
  )
}

export default page
