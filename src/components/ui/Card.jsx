import React from 'react'

export default function Card({children}) {
  return (
    <div className='border rounded-md px-4 py-3 inline-block text-center'>
      {children}
    </div>
  )
}
