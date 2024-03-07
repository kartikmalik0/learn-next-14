"use client"
import React from 'react'

const ErrorBoudry = ({
    error,
    reset
}) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={reset}>Try Again</button>
    </div>
  )
}

export default ErrorBoudry
