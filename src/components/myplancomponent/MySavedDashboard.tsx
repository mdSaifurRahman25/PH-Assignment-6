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
import { Workout } from '@/types/workout.types';

const MySavedDashboard = ({ sortBy }: { sortBy: string }) => {
    const { savedList, deleteSaved } = useContext(WorkoutContext);

    const [mark, setMark] = useState<number[]>([]);
    const [disabledButtons, setDisabledButtons] = useState<number[]>([]);

    if (!savedList || savedList.length === 0) {
        return <MyPlanWorkoutDetails />
    }

    const handleMark = (id: number) => {
        toast.success('Items has been Completed Successfully.');
        setMark((prev) => [...prev, id]);
        setDisabledButtons((prev) => [...prev, id]);
    };

    const handleDelete = (id: number) => {
        deleteSaved(id);
        toast.error('Item removed from your list.');
    };

    // Sorting Logic
    const getSortedList = () => {
        if (!savedList) return [];

        const currentSort = sortBy?.toLowerCase();

        return [...savedList].sort((a: Workout, b: Workout) => {
            if (currentSort === 'duration') {
                return (Number(b.duration) || 0) - (Number(a.duration) || 0);
            }
            if (currentSort === 'calories' || currentSort === 'caloriesburned') {
                const calA = Number(a.caloriesBurned) || 0;
                const calB = Number(b.caloriesBurned) || 0;
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
                {sortedPlans.map((saved: Workout) => {
                    return (
                        <div
                            className='flex flex-col md:flex-row md:justify-between md:items-center border border-gray-700 bg-gray-900 rounded-2xl p-4 gap-4'
                            key={saved.id}
                        >
                            {/* Left side of the card */}
                            <div className='flex items-center gap-3 sm:gap-4'>
                                <div className='w-[80px] h-[70px] sm:w-[120px] sm:h-[80px] relative overflow-hidden rounded-xl flex-shrink-0'>
                                    <Image 
                                        src={saved.image} 
                                        alt={saved.name} 
                                        fill
                                        className='object-cover' 
                                    />
                                </div>
                                <div className='min-w-0 space-y-1'>
                                    <h4 className='font-bold text-lg sm:text-2xl text-white truncate'>{saved.name}</h4>
                                    <p className='text-xs sm:text-base text-gray-400 truncate'>{saved.equipment}</p>
                                    
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-base text-slate-400 pt-1">
                                        {/* Duration */}
                                        <div className="flex items-center gap-1">
                                            <IoMdTime className='text-lime-500' />
                                            <span>{saved.duration} min</span>
                                        </div>

                                        {/* Calories */}
                                        <div className="flex items-center gap-1">
                                            <IoTimerSharp className='text-lime-500' />
                                            <span>{saved.caloriesBurned} kcal</span>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <CiStar className='text-lime-500' />
                                            <span>{saved.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side of the card */}
                            <div className='flex items-center justify-between md:justify-end gap-2 sm:gap-4 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-gray-800 md:border-none'>
                                <div className='flex items-center gap-2 sm:gap-4 flex-1 md:flex-initial'>
                                    <Link 
                                        className='flex-1 md:flex-initial text-center border border-gray-600 px-3 sm:px-5 py-2 rounded-3xl text-xs sm:text-base whitespace-nowrap hover:bg-gray-800 transition-colors' 
                                        href={`/workouts/${saved.id}`}
                                    >
                                        View Details
                                    </Link>

                                    <button
                                        disabled={disabledButtons.includes(saved.id)}
                                        onClick={() => handleMark(saved.id)}
                                        className={`flex-1 md:flex-initial flex justify-center items-center gap-2 px-3 sm:px-5 py-2 rounded-3xl text-xs sm:text-base whitespace-nowrap ${
                                            disabledButtons.includes(saved.id)
                                                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                                                : 'bg-lime-500 text-black cursor-pointer font-medium hover:bg-lime-400 transition-colors'
                                        }`}
                                    >
                                        <FaCheck />
                                        <span>{disabledButtons.includes(saved.id) ? 'Done' : 'Mark as Done'}</span>
                                    </button>
                                </div>

                                {/* Close Button - Rightmost on Desktop & Mobile */}
                                <button
                                    onClick={() => handleDelete(saved.id)}
                                    className='flex justify-center items-center pl-2 sm:pr-3 cursor-pointer text-gray-400 hover:text-red-500 transition-colors flex-shrink-0'
                                >
                                    <IoMdClose className="text-xl sm:text-2xl" />
                                </button>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default MySavedDashboard;