'use client'

import { WorkoutContext } from '@/context/Workoutprovider';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { IoIosSave } from 'react-icons/io';
import { TbCalendarDue } from 'react-icons/tb';
import { toast } from 'react-toastify';


interface WorkoutContextType {
    plan: number;
    setPlan: Dispatch<SetStateAction<number>>;
    saved: number;
    setSaved: Dispatch<SetStateAction<number>>;
    planList: any[];
    setPlanList: Dispatch<SetStateAction<any[]>>;
    savedList: any[];
    setSavedList: Dispatch<SetStateAction<any[]>>;
}

interface SingleWorkoutPageButtonProps {
    workout: any;
}

const SingleWorkoutPageButton = ({ workout }: SingleWorkoutPageButtonProps) => {
   
    const { 
        setPlan, 
        setSaved, 
        setPlanList, 
        setSavedList 
    } = useContext(WorkoutContext) as WorkoutContextType;

    const [isPlanned, setIsPlanned] = useState<boolean>(false);
    const [isSaved, setIsSaved] = useState<boolean>(false); 

    
    const handlePlan = () => {
        if (isPlanned) {
            toast.error('Already added to your plan!');
            return;
        } 

        setPlan((prev) => prev + 1);
        setPlanList((prev) => [...prev, workout]); 
        toast.success('Items has been added Successfully.'); 
        setIsPlanned(true); 
    };

    
    const handleSaved = () => {
        if (isSaved) {
            toast.error('Already Saved to your plan!');
            return; 
        }

        setSaved((prev) => prev + 1); 
        setSavedList((prev) => [...prev, workout]); 
        toast.success('Items has been added Successfully.'); 
        setIsSaved(true); 
    };

    return (
        <div className="pt-5 flex gap-5">
            <button 
                onClick={handlePlan}
                className={`border rounded-2xl px-6 py-2 flex items-center gap-2 transition-all ${
                    isPlanned 
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-60' 
                        : 'bg-lime-500 cursor-pointer text-black hover:bg-lime-400'
                }`}
            >
                <TbCalendarDue />
                <p>{isPlanned ? "Added to Plan" : "Add to Today's Plan"}</p>
            </button>

            <button 
                onClick={handleSaved}
                className={`border rounded-2xl px-6 py-2 flex items-center gap-2 transition-all ${
                    isSaved 
                        ? 'bg-gray-600 text-gray-300 cursor-not-allowed opacity-60' 
                        : 'bg-lime-500 cursor-pointer text-black hover:bg-lime-400'
                }`}
            >
                <IoIosSave />
                <p>{isSaved ? "Saved" : "Save for later"}</p>
            </button>
        </div>
    );
};

export default SingleWorkoutPageButton;