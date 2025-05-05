"use client"
import React from 'react'
import {facebookLogin} from "@/firebase/auth"

export default function page() {
  return (
    <div>
      <button onClick={facebookLogin}>Login</button>
    </div>
  )
}
