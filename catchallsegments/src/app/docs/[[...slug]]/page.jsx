"use client"
export default function ({ params }) {
   console.log(params)
  if (params.slug?.length === 2) {
    return <div>Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}</div>
  } 
  else if (params.slug?.length === 1) {
    return <div>Viewing docs for feature {params.slug[0]}</div>
  }
  return (
  <div>
    <h1>Viewing the docs home page</h1>
  </div>
  )
}