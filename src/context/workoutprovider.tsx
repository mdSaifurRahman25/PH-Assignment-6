'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

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

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const Workoutprovider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<number>(0);
  const [saved, setSaved] = useState<number>(0);

  const [planList, setPlanList] = useState<any[]>([]);
  const [savedList, setSavedList] = useState<any[]>([]);


  return (
    <WorkoutContext.Provider value={{ plan, setPlan, saved, setSaved, planList, setPlanList, savedList, setSavedList }}>
      {children}
    </WorkoutContext.Provider>
  )
}

export default Workoutprovider