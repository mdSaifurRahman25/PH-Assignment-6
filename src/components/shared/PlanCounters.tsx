'use client'

import { useContext, Dispatch, SetStateAction } from 'react'
import { WorkoutContext } from '@/context/Workoutprovider'

interface WorkoutContextType {
    plan: number;
    setPlan: Dispatch<SetStateAction<number>>;
    saved: number;
    setSaved: Dispatch<SetStateAction<number>>;
}

const PlanCounters = () => {
    const { plan, saved } = useContext(WorkoutContext) as WorkoutContextType;

    return (
        <div className='flex gap-4'>
            <div className='flex gap-2 items-center'>
                <p>Plan</p>
                <p className='bg-[#C2F800] border border-gray-600 text-black px-2 rounded-full font-bold text-sm'>
                    {plan}
                </p>
            </div>
            <div className='flex gap-2 items-center'>
                <p>Saved</p>
                <p className='bg-[#C2F800] border border-gray-600 text-black px-2 rounded-full font-bold text-sm'>
                    {saved}
                </p>
            </div>
        </div>
    )
}

export default PlanCounters