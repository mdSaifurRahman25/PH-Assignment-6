'use client'
import { WorkoutContext } from '@/context/Workoutprovider';
import { Workout } from '@/types/workout.types';
import { useContext } from 'react';

const MyPlanDetails = () => {
    const { planList, savedList } = useContext(WorkoutContext);
    // console.log(planList, savedList);

    const totalDuration = planList?.reduce((acc: number, curr: Workout) => {
        return acc + Number(curr.duration);
    }, 0);

    const totalCaloriesBurned = planList?.reduce((acc: number, curr: Workout) => {
        return acc + Number(curr.caloriesBurned);
    }, 0);

    

    return (
        <div className='flex justify-between items-center text-white border border-gray-500 rounded-2xl px-5 py-10 bg-[#222630]'>
            <div>
                <p>Exercises</p>
                <p className='font-bold text-4xl'>{planList?.length}</p>
            </div>
            <div>
                <p>Minutes</p>
                <p className='font-bold text-4xl'>{totalDuration}</p>
            </div>
            <div>
                <p>Calories</p>
                <p className='font-bold text-4xl'>{totalCaloriesBurned}</p>
            </div>
        </div>
    )
}

export default MyPlanDetails