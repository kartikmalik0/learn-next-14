"use client"
const page = ({params}) => {
  const getRandomNumber = (count) =>{
    return Math.floor(Math.random() * count)
  }
  
  const random = getRandomNumber(2)
  if(random === 1) {
     throw new Error("Something went wrong with Rewiew");
  }
  return (
    <div>
      <h1>Review {params.reviewId} for product {params.productId}</h1>
    </div>
  )
}

export default page
