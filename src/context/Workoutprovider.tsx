'use client'

import { Workout } from '@/types/workout.types';
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface WorkoutContextType {
  plan: number;
  setPlan: Dispatch<SetStateAction<number>>;
  saved: number;
  setSaved: Dispatch<SetStateAction<number>>;
  planList: Workout[];
  setPlanList: Dispatch<SetStateAction<Workout[]>>;
  savedList: Workout[];
  setSavedList: Dispatch<SetStateAction<Workout[]>>;
  deletePlan: (id: number) => void;
  deleteSaved: (id: number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType>({
  plan: 0,
  setPlan: () => {},
  saved: 0,
  setSaved: () => {},
  planList: [],
  setPlanList: () => {},
  savedList: [],
  setSavedList: () => {},
  deletePlan: () => {},
  deleteSaved: () => {},
});


const Workoutprovider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<number>(0);
  const [saved, setSaved] = useState<number>(0);

  const [planList, setPlanList] = useState<Workout[]>([]);
  const [savedList, setSavedList] = useState<Workout[]>([]);


  const deletePlan = (id: number) => {
    setPlanList((prevList) => prevList.filter((item) => item.id !== id));
    setPlan(plan - 1)
  };

  const deleteSaved = (id: number) => {
    setSavedList((prevList) => prevList.filter((item) => item.id !== id));
    setSaved(saved - 1); 
  };

  return (
    <WorkoutContext.Provider value={{ plan, setPlan, saved, setSaved, planList, setPlanList, savedList, setSavedList, deletePlan, deleteSaved }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export default Workoutprovider