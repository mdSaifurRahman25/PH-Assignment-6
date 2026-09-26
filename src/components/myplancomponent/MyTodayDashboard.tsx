'use client'

import { WorkoutContext } from '@/context/Workoutprovider';
import React, { useContext } from 'react'
import MyPlanWorkoutDetails from './Nothing';
import Image from 'next/image';
import { IoMdClose, IoMdTime } from 'react-icons/io';
import { IoTimerSharp } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';

const MyTodayDashboard = () => {
    const { planList, savedList } = useContext(WorkoutContext) as any;
    // console.log(planList, savedList);


    if (planList.length === 0) {
        return <MyPlanWorkoutDetails />
    }

    return (
        <div>
            {/* Details */}
            <div className='text-white space-y-3'>
                {planList.map((plan) => {
                    return (
                        <div
                            className='flex justify-between items-center border border-gray-700 bg-gray-900 rounded-2xl px-3 py-4'
                            key={plan.id}
                        >

                            {/* Left side of the card */}
                            <div className='flex gap-4'>
                                <div className='w-[120px] h-[80px] relative overflow-hidden rounded-xl'>
                                    <Image src={plan.image} width={200} height={100} alt={plan.name} className='object-cover' />
                                </div>
                                <div>
                                    <h4 className='font-bold text-2xl'>{plan.name}</h4>
                                    <p>{plan.equipment}</p>
                                    <div className="flex gap-4 text-slate-400">
                                        {/* Duration */}
                                        <div className="flex items-center gap-1">
                                            <IoMdTime className='text-lime-500' />
                                            <p>{plan.duration}</p>
                                            <p>min</p>
                                        </div>

                                        {/* Calories */}
                                        <div className="flex items-center gap-1">
                                            <IoTimerSharp className='text-lime-500' />
                                            <p>{plan.caloriesBurned}</p>
                                            <p>kcal</p>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <CiStar className='text-lime-500' />
                                            <p>{plan.rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side of the card */}
                            <div className='flex gap-4 '>
                                <Link className='border border-gray-600 px-5 py-2 rounded-3xl' href={'/workouts'}>View Details</Link>
                                <button className='flex justify-between items-center gap-3 text-black bg-lime-500 px-5 py-2 rounded-3xl cursor-pointer'>
                                    <FaCheck />
                                    <p>Mark as Done</p>
                                </button>
                                <button className='flex justify-center items-center pr-3 cursor-pointer'>
                                    <IoMdClose />
                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MyTodayDashboard