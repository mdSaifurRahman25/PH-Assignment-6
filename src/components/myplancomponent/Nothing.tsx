import Link from "next/link"


const MyPlanWorkoutDetails = () => {
    return (
        <div className="py-20 border border-gray-500 rounded-2xl bg-gray-900/60 flex flex-col justify-between items-center text-center text-white">
            <p className='text-3xl font-bold'>Nothing Here Yet!</p>
            <p className='pt-2 text-sm'>Browse the library and add a lift to get today moving.</p>
            <button className='pt-10'>
                <Link className='border border-lime-500 rounded-full px-5 py-3 bg-lime-500 ' href={'/workouts'}>Go to Workouts
                </Link>
            </button>
        </div>
    )
}

export default MyPlanWorkoutDetails