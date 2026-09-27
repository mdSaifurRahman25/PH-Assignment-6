import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='min-h-[70vh] flex flex-col justify-center items-center text-center px-4 py-16 bg-black text-white'>
      <h1 className='text-7xl font-extrabold text-lime-500 mb-4'>404</h1>
      <h2 className='text-2xl sm:text-3xl font-bold mb-2'>This is a broken page.</h2>
      <p className='text-gray-400 mb-8 max-w-md text-sm sm:text-base'>
        The page you are looking for does not exist or has been moved.
      </p>
      
      <Link 
        href="/" 
        className='bg-lime-500 hover:bg-lime-400 text-black font-semibold px-6 py-3 rounded-3xl transition-colors duration-200'
      >
        Go to Home Page
      </Link>
    </div>
  )
}

export default NotFound