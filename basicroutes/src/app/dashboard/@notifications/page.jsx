import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

const Notifications = () => {
  return (
    <Card>
      Notifications
      <Link href={"/dashboard/archived"}>Archived Notifcation</Link>
    </Card>
  )
}

export default Notifications
