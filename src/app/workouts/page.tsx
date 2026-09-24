import WorkoutsCard from "@/components/shared/WorkoutsCard";

const getWorkouts = async () => {
    const res = await fetch('https://api.abcz.workers.dev/api/fitlog'); 
    const data = await res.json(); 
    return data; 
}

const Workout = async () => {

    const workouts = await getWorkouts(); 
    // console.log(workouts);

    return (
        <div className='bg-[#222630] text-white py-10'>
            <div className='container mx-auto'>
                <h3 className='uppercase font-bold text-3xl'>The Library</h3>
                <p>Twelve lifts covering every major muscle group.</p>
                <div>
                    <WorkoutsCard workouts={workouts} />
                </div>
            </div>
        </div>
    )
}

export default Workout