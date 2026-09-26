'use client'
import MyPlanDashboard from '@/components/myplancomponent/MyTodayDashboard'
import MyPlanDetails from '@/components/myplancomponent/MyPlanDetails'
import ToggleButton from '@/components/myplancomponent/ToggleButton'
import { useState } from 'react'
import MyTodayDashboard from '@/components/myplancomponent/MyTodayDashboard'
import MySavedDashboard from '@/components/myplancomponent/MySavedDashboard'




const MyPlan = () => {

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

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
          {/* <ToggleButton /> */}
          <div className="inline-flex items-center gap-1 border border-gray-700 bg-[#161a23] p-1 rounded-full">
            {/* Today's Plan Button */}
            <button
              onClick={() => setActiveTab('today')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${activeTab === 'today'
                  ? 'bg-lime-400 text-black font-semibold'
                  : 'text-gray-300 hover:text-white'
                }`}
            >
              Today s Plan
            </button>

            {/* Saved Button */}
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${activeTab === 'saved'
                  ? 'bg-lime-400 text-black font-semibold'
                  : 'text-gray-300 hover:text-white'
                }`}
            >
              Saved
            </button>
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
        {activeTab === 'today' ? <MyTodayDashboard /> : <MySavedDashboard /> }

      </div>
    </div>
  )
}

export default MyPlan