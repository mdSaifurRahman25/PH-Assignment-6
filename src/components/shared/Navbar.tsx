'use client'


import { useState } from 'react'
import Image from 'next/image'
import IMAGE from '@/assets/logo.png'
import Link from 'next/link'
import PlanCounters from './PlanCounters'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className='commonColor text-white py-4 border-b-2 border-[#15171D] relative z-50'>
      <nav className='flex justify-between items-center container mx-auto px-4'>
        {/* Logo Section */}
        <div>
          <Link className='flex gap-2 items-center' href={'/'}>
            <Image src={IMAGE} className='w-[30px] h-[30px]' alt='FitLog' priority />
            <p className='font-bold text-xl tracking-wider'>FITLOG</p>
          </Link>
        </div>


        {/* Desktop Menu */}
        <div className='hidden md:flex gap-6 items-center font-medium'>
          <Link href={'/'} className='hover:text-[#C2F800] transition-colors'>Workouts</Link>
          <Link href={'/myplan'} className='hover:text-[#C2F800] transition-colors'>My Plan</Link>
        </div>


        {/* Desktop Plan Counters */}
        <div className='hidden md:block'>
          <PlanCounters />
        </div>


        {/* Mobile Hamburger Toggle Button */}
        <div className='md:hidden flex items-center'>
          <button
            onClick={toggleMenu}
            type='button'
            className='text-gray-300 hover:text-white focus:outline-none p-2'
            aria-label='Toggle menu'
          >
            {isOpen ? (
              // Cross Icon (Close)
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>
      </nav>


      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className='md:hidden commonColor border-t border-gray-800 px-4 pt-4 pb-6 mt-4 flex flex-col gap-4 shadow-lg'>
          <Link
            href={'/'}
            onClick={() => setIsOpen(false)}
            className='text-lg font-medium hover:text-[#C2F800] transition-colors'
          >
            Workouts
          </Link>
          <Link
            href={'/myplan'}
            onClick={() => setIsOpen(false)}
            className='text-lg font-medium hover:text-[#C2F800] transition-colors'
          >
            My Plan
          </Link>


          <div className='pt-2 border-t border-gray-800'>
            <PlanCounters onItemClick={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </div>
  )
}


export default Navbar

