'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

interface WorkoutContextType {
  plan: number;
  setPlan: Dispatch<SetStateAction<number>>;
  saved: number;
  setSaved: Dispatch<SetStateAction<number>>;
}

export const WorkoutContext = createContext<WorkoutContextType | null >(null);

const Workoutprovider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<number>(10); 
  const [saved, setSaved] = useState<number>(10); 


  return (
    <WorkoutContext.Provider value={{plan, setPlan, saved, setSaved}}>
      { children }
    </WorkoutContext.Provider>
  )
}

export default Workoutprovider