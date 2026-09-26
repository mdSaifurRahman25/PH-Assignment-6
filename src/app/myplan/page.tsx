import MyPlanDetails from '@/components/shared/MyPlanDetails'
import Link from 'next/link'


const MyPlan = () => {

  return (
    <div className='commonColor'>
      <div className='container mx-auto py-8'>
        {/* Title Section */}
        <div className='pb-6'>
          <h1 className='text-white font-bold text-4xl pb-2'>My Plan</h1>
          <p className='text-sm text-white'>Cap of five lifts for today. Finish them, then load more.</p>
        </div>

        {/* Dashboard Details */}
        <MyPlanDetails />

        {/* Card Name Section */}
        <div className='text-white flex justify-between pt-10 pb-10'>
          {/* Right Side */}
          <div className='flex gap-3 border border-gray-500 text-sm px-5 py-2 rounded-xl'>
            <button>{"Today's Plan"}</button>
            <button>Saved</button>
          </div>

          {/* Left Side */}
          <div className='text-white'>
            <label htmlFor="">Sort By</label>
            <select className='text-white' name="" id="">
              <option value="">Duration</option>
              <option value="">Example 1</option>
              <option value="">Example 2</option>
            </select>
          </div>
        </div>

        {/* Workout List Section */}
          <div className="py-20 border border-gray-500 rounded-2xl bg-gray-900/60 flex flex-col justify-between items-center text-center text-white">
            <p className='text-3xl font-bold'>Nothing Here Yet!</p>
            <p className='pt-2 text-sm'>Browse the library and add a lift to get today moving.</p>
            <button className='pt-10'>
              <Link className='border border-lime-500 rounded-full px-5 py-3 bg-lime-500 ' href={'/workouts'}>Go to Workouts</Link>
            </button>
          </div>

      </div>
    </div>
  )
}

export default MyPlan