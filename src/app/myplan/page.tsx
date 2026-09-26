'use client'

import MyTodayPlanDetails from '@/components/myplancomponent/MyTodayPlanDetails'
import { useState } from 'react'
import MyTodayDashboard from '@/components/myplancomponent/MyTodayDashboard'
import MySavedDashboard from '@/components/myplancomponent/MySavedDashboard'
import MySavedPlanDetails from '@/components/myplancomponent/MySavedPlanDetails'




const MyPlan = () => {

  const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

  const [sortBy, setSortBy] = useState<string>('duration'); 


  return (
    <div className='commonColor'>
      <div className='container mx-auto py-8'>
        {/* Title Section */}
        <div className='pb-6'>
          <h1 className='text-white font-bold text-4xl pb-2'>My Plan</h1>
          <p className='text-sm text-white'>Cap of five lifts for today. Finish them, then load more.</p>
        </div>

        {/* Dashboard Details */}
        {activeTab === 'today' ? <MyTodayPlanDetails /> : <MySavedPlanDetails />}

        {/* Card Name Section */}
        <div className='text-white flex justify-between pt-10 pb-10'>
          {/* Right Side */}
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

          {/* Sorting Left Side */}
          <div className='text-white'>
            <label htmlFor="sort" className="mr-2">Sort By</label>
            <select 
            id='sort'
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className='text-white bg-gray-800 p-2 rounded-md border border-gray-700'>
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>

        </div>

        {/* Workout List Section */}
        {activeTab === 'today' ? <MyTodayDashboard sortBy={sortBy} /> : <MySavedDashboard sortBy={sortBy} />}

      </div>
    </div>
  )
}

export default MyPlan