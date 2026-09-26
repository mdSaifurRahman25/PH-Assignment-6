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
        <div className="commonColor text-white">
            <div className="container mx-auto">
                <div className="w-[1280px] flex px-5 py-10 ">
                    {/* Image Section */}
                    <div className="w-1/2">
                        <Image src={workout.image} width={400} height={900} className="w-[550px] h-[700px] border rounded-2xl" loading="eager" alt={workout.name} />
                    </div>

                    {/* Text Section */}
                    <div className="w-1/2">
                        <h1 className="font-bold text-5xl pb-3">{workout.name}</h1>
                        <p className="pb-3">{workout.description}</p>

                        {/* muscleGroups */}
                        <div className="flex gap-4 ">
                            {
                                workout.muscleGroups.map((muscle: string, index: number) => (
                                    <div className="px-4 py-1  text-black font-bold bg-lime-500 rounded-full" key={index}>
                                        <p>{muscle}</p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* key notes */}
                        <div className="pb-5 w-full bg-[#222630] border border-slate-800 rounded-2xl p-4 my-5 ">

                            <div className="flex justify-between items-center py-3 border-b border-gray-400">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">EQUIPMENT</span>
                                <span className="text-white font-medium">{workout.equipment}</span>
                            </div>

                            <div className="flex justify-between items-center py-3 border-b border-gray-400">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">DIFFICULTY</span>
                                <span className="text-white font-medium">{workout.difficulty}</span>
                            </div>

                            <div className="flex justify-between items-center py-3 border-b border-gray-400">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">SETS</span>
                                <span className="text-white font-medium">{workout.sets}</span>
                            </div>

                            <div className="flex justify-between items-center py-3 border-b border-gray-400">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">REPS</span>
                                <span className="text-white font-medium">{workout.reps}</span>
                            </div>

                            <div className="flex justify-between items-center py-3 border-b border-gray-400">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">DURATION</span>
                                <span className="text-white font-medium">{workout.duration} min</span>
                            </div>

                            <div className="flex justify-between items-center py-3 border-b border-gray-400">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">CALORIES</span>
                                <span className="text-white font-medium">{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex justify-between items-center pt-3">
                                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">RATING</span>
                                <span className="text-white font-medium">{workout.rating}</span>
                            </div>
                        </div>

                        {/* instructions */}
                        <div>
                            <p className="uppercase font-bold py-5">instructions</p>
                            <ol className="text-sm ">
                                {
                                    workout.instructions.map((instruction: string, index: number) => (
                                        <li className="flex" key={index}>
                                            <p className="pr-2">{index + 1} .</p>
                                            <p>{instruction}</p>
                                        </li>
                                    ))
                                }
                            </ol>
                        </div>

                        {/* Button */}
                        <SingleWorkoutPageButton workout={workout} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetailsPage;