"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
export const Sign = () => {
  return (
   
      <button className='nava' onClick={() => signOut({ callbackUrl: "/login" })}>
        Logout
      </button>
    
  )
}
