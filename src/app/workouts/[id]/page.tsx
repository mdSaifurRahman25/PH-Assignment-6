import Image from "next/image";

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
        <div className="commonColor">
            <div className="container mx-auto">
                <div className="w-[950px] flex ">
                    {/* Image Section */}
                    <div className="w-1/2">
                        <Image src={workout.image} width={400} height={800} className="w-full" loading="eager" alt={workout.name} />
                    </div>

                    {/* Text Section */}
                    <div className="w-1/2">
                        <h1>{workout.name}</h1>
                        <p>{workout.description}</p>

                        {/* muscleGroups */}
                        <div>
                            {
                                workout.muscleGroups.map((muscle: string[], index: number) => (
                                    <div key={index}>
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
                            {
                                workout.instructions
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutDetailsPage