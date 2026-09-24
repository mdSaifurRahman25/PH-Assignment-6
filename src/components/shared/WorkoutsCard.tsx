import Image from "next/image"
import { CiStar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoTimerSharp } from "react-icons/io5";


const WorkoutsCard = ({ workouts }) => {
    // console.log('Worrkouts card from ',workouts);
    return (
        <div className="grid grid-cols-3 gap-8 py-10">
            {
                workouts.map((workout) => {
                    const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;
                    return (
                        <div className="border border-transparent rounded-3xl bg-zinc-900" key={id}>
                            {/* Image Section */}
                            <div>
                                <Image src={image} className="w-full border-t rounded-t-3xl" width={300} height={100} alt={name} />
                            </div>

                            {/* Text Section */}
                            <div>
                                <div className="px-10">
                                    <div className="flex gap-4 pt-5 py-2">
                                        {
                                            muscleGroups.map((muscle: string, index: number) => (
                                                <div className="bg-lime-400 px-2 font-bold text-[12px] text-black uppercase rounded-full" key={index}>
                                                    <p className="">{muscle}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <h2 className="font-bold uppercase text-2xl pb-1">{name}</h2>
                                    <p className="pb-4 text-slate-400">{equipment}</p>
                                </div>

                                {/* Botton Number Section */}
                                <div className="pt-3 border-t border-gray-700 ">
                                    {/* Three Number under a single div */}
                                    <div className="flex justify-evenly items-center gap-5 pb-5">
                                        {/* First Nubmer */}
                                        <div className="flex items-center gap-1">
                                            <IoMdTime />
                                            <p>{duration}</p>
                                            <p>min</p>
                                        </div>

                                        {/* Second Number */}
                                        <div className="flex items-center gap-1">
                                            <IoTimerSharp />
                                            <p>{caloriesBurned}</p>
                                            <p>kcal</p>
                                        </div>

                                        {/* Third Number */}
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