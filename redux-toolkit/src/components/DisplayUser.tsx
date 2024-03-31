"use client"
import React from 'react'
import { useSelector } from 'react-redux'

const DisplayUser = () => {
    const userData = useSelector((data:any)=>data.users)
    console.log(userData)
  return (
    <div>
      
    </div>

  )
}

export default DisplayUser
