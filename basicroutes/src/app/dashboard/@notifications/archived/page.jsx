"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ArchivedNotification = () => {
    const router = useRouter()
  return (
    <div>
      ArchivedNotification
      <div className='cursor-pointer' onClick={()=>router.back()}>Defualt notifications</div>
    </div>
  )
}

export default ArchivedNotification
