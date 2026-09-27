

// Workout Interface
export interface Workout {
    id: number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
}

export interface WorkoutsCardProps {
    workouts: Workout[];
}