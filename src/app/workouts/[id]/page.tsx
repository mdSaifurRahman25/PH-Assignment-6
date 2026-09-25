import Image from "next/image";
import Link from "next/link";

const WorkoutDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        return (
            <div className="flex justify-center items-center h-screen text-red-500">
                <h2>Workout details not found!</h2>
            </div>
        );
    }

    const workout = await res.json();
    // console.log(workout);

    return (
        <div className="commonColor text-white">
            <div className="container mx-auto">
                <div className="w-[1280px] flex px-5 py-10 ">
                    {/* Image Section */}
                    <div className="w-1/2">
                        <Image src={workout.image} width={400} height={600} className="w-[550px] h-[450px] border rounded-2xl" loading="eager" alt={workout.name} />
                    </div>

                    {/* Text Section */}
                    <div className="w-1/2">
                        <h1 className="font-bold text-5xl pb-3">{workout.name}</h1>
                        <p className="pb-3">{workout.description}</p>

                        {/* muscleGroups */}
                        <div className="flex gap-4">
                            {
                                workout.muscleGroups.map((muscle: string[], index: number) => (
                                    <div className="px-4 py-1  text-black font-bold bg-lime-500 rounded-full" key={index}>
                                        <p>{muscle}</p>
                                    </div>
                                ))
                            }
                        </div>

                        {/* key notes */}
                        <div>
                            <p>EQUIPMENT {workout.equipment}</p>
                            <p>DIFFICULTY{workout.difficulty}</p>
                            <p>SETS{workout.sets}</p>
                            <p>REPS{workout.reps}</p>
                            <p>DURATION{workout.duration} min</p>
                            <p>CALORIES{workout.caloriesBurned} kcal</p>
                            <p>RATING{workout.rating}</p>
                        </div>

                        {/* instructions */}
                        <div>
                            <ol>
                                {
                                workout.instructions.map((instruction: string, index: number) => (
                                    <li key={index}>
                                        {index + 1}
                                        <p>{instruction}</p>
                                    </li>
                                ))
                            }
                            </ol>
                        </div>

                        {/* Button Section */}
                        <div>
                            <Link href={'/myplan'}>Add to {"Today's"} Plan</Link>
                            <Link href={'/myplan'}>Saved for later</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetailsPage