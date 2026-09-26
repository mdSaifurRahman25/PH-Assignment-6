'use client'

import { WorkoutContext } from '@/context/Workoutprovider';
import React, { useContext, useState } from 'react'
import MyPlanWorkoutDetails from './Nothing';
import Image from 'next/image';
import { IoMdClose, IoMdTime } from 'react-icons/io';
import { IoTimerSharp } from 'react-icons/io5';
import { CiStar } from 'react-icons/ci';
import Link from 'next/link';
import { FaCheck } from 'react-icons/fa';
import { toast } from 'react-toastify';

const MyTodayDashboard = ({ sortBy }: { sortBy: string }) => {
    const { planList, deletePlan } = useContext(WorkoutContext) as any;
    // console.log(planList, savedList);

    const [mark, setMark] = useState<number[]>([]);
    const [disabledButtons, setDisabledButtons] = useState<number[]>([]);


    if (planList.length === 0) {
        return <MyPlanWorkoutDetails />
    }

    const handleMark = (id: number) => {
        toast.success('Items has been Completed Successfully.');
        setMark((prev) => [...prev, id]);
        setDisabledButtons((prev) => [...prev, id]);
    };

    const handleDelete = (id: number) => {
        deletePlan(id);
        toast.error('Item removed from your list.');
    };


    // sorting 
    const getSortedList = () => {
        if (!planList) return [];

        const currentSort = sortBy?.toLowerCase();

        return [...planList].sort((a: any, b: any) => {
            if (currentSort === 'duration') {
                return (Number(b.duration) || 0) - (Number(a.duration) || 0);
            }
            if (currentSort === 'calories' || currentSort === 'caloriesburned') {
                const calA = Number(a.caloriesBurned ?? a.calories) || 0;
                const calB = Number(b.caloriesBurned ?? b.calories) || 0;
                return calB - calA;
            }
            if (currentSort === 'rating') {
                return (Number(b.rating) || 0) - (Number(a.rating) || 0);
            }
            return 0;
        });
    }

    const sortedPlans = getSortedList();

    return (
        <div>
            {/* Details */}
            <div className='text-white space-y-3'>
                {sortedPlans.map((plan) => {
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
                                <Link className='border border-gray-600 px-5 py-2 rounded-3xl' href={`/workouts/${plan.id}`}>View Details</Link>

                                <button
                                    disabled={disabledButtons.includes(plan.id)}
                                    onClick={() => handleMark(plan.id)}
                                    className={`flex justify-between items-center gap-3 px-5 py-2 rounded-3xl ${disabledButtons.includes(plan.id)
                                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                        : 'bg-lime-500 text-black cursor-pointer'
                                        }`}
                                >
                                    <FaCheck />
                                    {disabledButtons.includes(plan.id) ? <p>Done</p> : <p>Mark as Done</p>}
                                </button>
                                <button
                                    onClick={() => handleDelete(plan.id)}
                                    className='flex justify-center items-center pr-3 cursor-pointer text-gray-400 hover:text-red-500 transition-colors'
                                >
                                    <IoMdClose className="text-xl" />
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