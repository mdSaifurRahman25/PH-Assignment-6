import Image from "next/image";
import Link from "next/link";
import { CiStar } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoTimerSharp } from "react-icons/io5";

// Workout Interface
interface Workout {
    id: string | number;
    name: string;
    image: string;
    muscleGroups: string[];
    equipment: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
}

interface WorkoutsCardProps {
    workouts: Workout[];
}

const WorkoutsCard = ({ workouts }: WorkoutsCardProps) => {
    return (
        /* Mobile-এ ১টি, Tablet-এ ২টি, Desktop-এ ৩টি করে কার্ড আসবে */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
            {workouts?.map((workout: Workout) => {
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
                    <Link
                        href={`/workouts/${id}`}
                        key={id}
                        className="group flex flex-col justify-between overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-lime-400 transition-all duration-300"
                    >
                        {/* Image Section */}
                        <div className="relative w-full h-[220px] overflow-hidden">
                            <Image
                                src={image}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                width={400}
                                height={250}
                                alt={name}
                                priority
                            />
                        </div>

                        {/* Content Section */}
                        <div className="p-5 flex flex-col flex-grow justify-between">
                            <div>
                                {/* Muscle Groups */}
                                <div className="flex flex-wrap gap-2 pb-3">
                                    {muscleGroups?.map((muscle: string, index: number) => (
                                        <div
                                            className="rounded-full bg-lime-400 px-2.5 py-1 text-[11px] font-bold uppercase text-black"
                                            key={index}
                                        >
                                            {muscle}
                                        </div>
                                    ))}
                                </div>

                                {/* Name */}
                                <h2 className="pb-1 text-xl sm:text-2xl font-bold uppercase text-white leading-snug group-hover:text-lime-400 transition-colors">
                                    {name}
                                </h2>

                                {/* Equipment */}
                                <p className="pb-4 text-sm text-slate-400">
                                    {equipment}
                                </p>
                            </div>

                            {/* Bottom Divider & Stats */}
                            <div>
                                <div className="border-t border-zinc-800 my-2"></div>
                                <div className="pt-2">
                                    <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400">
                                        {/* Duration */}
                                        <div className="flex items-center gap-1">
                                            <IoMdTime className="text-lime-400 text-base" />
                                            <span>{duration} min</span>
                                        </div>

                                        {/* Calories */}
                                        <div className="flex items-center gap-1">
                                            <IoTimerSharp className="text-lime-400 text-base" />
                                            <span>{caloriesBurned} kcal</span>
                                        </div>

                                        {/* Rating */}
                                        <div className="flex items-center gap-1">
                                            <CiStar className="text-amber-400 text-base font-bold" />
                                            <span>{rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default WorkoutsCard;