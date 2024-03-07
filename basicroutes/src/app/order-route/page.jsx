"use client"
import { useRouter } from "next/navigation"

const OrderPage = () => {
    const router = useRouter()
    const handleOrder = () =>{
        console.log("order placed")
        router.push('/')
    }
  return (
    <div>
      <h1>Place your order</h1>
      <button onClick={handleOrder}>Order</button>
    </div>
  )
}

export default OrderPage
