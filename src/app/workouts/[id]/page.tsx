import SingleWorkoutPageButton from "@/components/shared/SingleWorkoutPageButton";
import Image from "next/image";

interface PageProps {
    params: Promise<{ id: string }>;
}

const WorkoutDetailsPage = async ({ params }: PageProps) => {
    const { id } = await params;

    const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                <h2>Workout details not found!</h2>
            </div>
        );
    }

    const workout = await res.json();

    return (
        <div className="commonColor text-white min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
                {/* Mobile-এ Column (একটির নিচে আরেকটি) এবং Desktop (lg)-এ Row (পাশাপাশি) */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[550px] h-[350px] sm:h-[500px] lg:h-[650px] rounded-2xl overflow-hidden border border-slate-800">
                            <Image 
                                src={workout.image} 
                                alt={workout.name}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl pb-3 uppercase leading-tight">
                            {workout.name}
                        </h1>
                        
                        <p className="pb-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                            {workout.description}
                        </p>

                        {/* Muscle Groups */}
                        <div className="flex flex-wrap gap-2 sm:gap-3 pb-2">
                            {workout.muscleGroups?.map((muscle: string, index: number) => (
                                <div className="px-3 sm:px-4 py-1 text-black font-bold bg-lime-500 rounded-full text-xs sm:text-sm uppercase" key={index}>
                                    <p>{muscle}</p>
                                </div>
                            ))}
                        </div>

                        {/* Key Notes */}
                        <div className="w-full bg-[#222630] border border-slate-800 rounded-2xl p-4 sm:p-6 my-5">
                            <div className="flex justify-between items-center py-2.5 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">EQUIPMENT</span>
                                <span className="text-white font-medium">{workout.equipment}</span>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">DIFFICULTY</span>
                                <span className="text-white font-medium">{workout.difficulty}</span>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">SETS</span>
                                <span className="text-white font-medium">{workout.sets}</span>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">REPS</span>
                                <span className="text-white font-medium">{workout.reps}</span>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">DURATION</span>
                                <span className="text-white font-medium">{workout.duration} min</span>
                            </div>

                            <div className="flex justify-between items-center py-2.5 border-b border-slate-700 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">CALORIES</span>
                                <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex justify-between items-center pt-2.5 text-sm sm:text-base">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">RATING</span>
                                <span className="text-white font-medium">{workout.rating}</span>
                            </div>
                        </div>

                        {/* Instructions */}
                        <div className="pb-4">
                            <p className="uppercase font-bold text-base sm:text-lg pb-3">Instructions</p>
                            <ol className="text-xs sm:text-sm space-y-2 text-slate-300">
                                {workout.instructions?.map((instruction: string, index: number) => (
                                    <li className="flex gap-2" key={index}>
                                        <span className="font-bold text-lime-400">{index + 1}.</span>
                                        <p>{instruction}</p>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {/* Button */}
                        <SingleWorkoutPageButton workout={workout} />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;