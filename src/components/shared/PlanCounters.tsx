'use client'

import { useContext, Dispatch, SetStateAction } from 'react'
import { WorkoutContext } from '@/context/Workoutprovider'
import Link from 'next/link'

interface WorkoutContextType {
  plan: number
  setPlan: Dispatch<SetStateAction<number>>
  saved: number
  setSaved: Dispatch<SetStateAction<number>>
}

interface PlanCountersProps {
  onItemClick?: () => void
}

const PlanCounters = ({ onItemClick }: PlanCountersProps) => {
  const { plan, saved } = useContext(WorkoutContext) as WorkoutContextType

  return (
    <div className='flex gap-4 items-center'>
      <Link 
        href={'/myplan'} 
        onClick={onItemClick} 
        className='flex gap-2 items-center hover:opacity-90 transition-opacity'
      >
        <p className='font-medium'>Plan</p>
        <p className='bg-[#C2F800] border border-gray-600 text-black px-2.5 py-0.5 rounded-full font-bold text-xs'>
          {plan}
        </p>
      </Link>
      <Link 
        href={'/myplan'} 
        onClick={onItemClick} 
        className='flex gap-2 items-center hover:opacity-90 transition-opacity'
      >
        <p className='font-medium'>Saved</p>
        <p className='bg-[#C2F800] border border-gray-600 text-black px-2.5 py-0.5 rounded-full font-bold text-xs'>
          {saved}
        </p>
      </Link>
    </div>
  )
}

export default PlanCounters