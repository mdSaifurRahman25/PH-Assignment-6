import Image from "next/image"
import { CiStar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoTimerSharp } from "react-icons/io5";

const WorkoutsCard = ({ workouts }) => {
    return (
        <div className="grid grid-cols-3 gap-8 py-10">
            {
                workouts.map((workout) => {
                    const {
                        id,
                        name,
                        image,
                        muscleGroups,
                        equipment,
                        duration,
                        caloriesBurned,
                        rating
                    } = workout;

                    return (
                        <div
                            className="h-[400px] overflow-hidden rounded-3xl bg-zinc-900 border border-transparent"
                            key={id}
                        >
                  
                            <div className="h-1/2 w-full">
                                <Image
                                    src={image}
                                    className="h-full w-full object-cover"
                                    width={300}
                                    height={250}
                                    alt={name}
                                />
                            </div>

                            <div className="h-1/2">
                                <div className="px-10">
                                    {/* Muscle Groups */}
                                    <div className="flex gap-4 pt-5 pb-2">
                                        {
                                            muscleGroups.map(
                                                (muscle: string, index: number) => (
                                                    <div
                                                        className="rounded-full bg-lime-400 px-2 py-1 text-[12px] font-bold uppercase text-black"
                                                        key={index}
                                                    >
                                                        <p>{muscle}</p>
                                                    </div>
                                                )
                                            )
                                        }
                                    </div>

                                    {/* Name */}
                                    <h2 className="pb-1 text-2xl font-bold uppercase">
                                        {name}
                                    </h2>

                                    {/* Equipment */}
                                    <p className="pb-4 text-slate-400">
                                        {equipment}
                                    </p>
                                </div>

                                <div className="mx-10 border-t border-gray-700"></div>
                                {/* Bottom Number Section */}
                                <div className="pt-3">
                                    <div className="flex items-center justify-evenly gap-5 text-slate-400">
                                        {/* Duration */}
                                        <div className="flex items-center gap-1">
                                            <IoMdTime />
                                            <p>{duration}</p>
                                            <p>min</p>
                                        </div>

                                        {/* Calories */}
                                        <div className="flex items-center gap-1">
                                            <IoTimerSharp />
                                            <p>{caloriesBurned}</p>
                                            <p>kcal</p>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <CiStar />
                                            <p>{rating}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default WorkoutsCard