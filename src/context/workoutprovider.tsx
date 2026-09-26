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
  deletePlan: (id: number) => void;
  deleteSaved: (id: number) => void;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);


const Workoutprovider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<number>(0);
  const [saved, setSaved] = useState<number>(0);

  const [planList, setPlanList] = useState<any[]>([]);
  const [savedList, setSavedList] = useState<any[]>([]);


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