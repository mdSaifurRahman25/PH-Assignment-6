import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/assets/banner.png'

const Banner = () => {
  return (
    <div className='bg-[#15171D]'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>          
        <div className='py-8 md:py-20'>
          {/* Banner Container */}
          <div className='grid grid-cols-1 lg:grid-cols-12 bg-[#222630] rounded-2xl md:rounded-3xl p-6 sm:p-10 lg:p-15 gap-8 items-center'>
            
            {/* Text section */}
            <div className='lg:col-span-7 flex flex-col items-start text-left'>
              <p className='text-lime-400 tracking-widest font-bold uppercase text-sm sm:text-base pb-3 md:pb-5'>
                Workout Library
              </p>
              
              <h1 className='text-white font-bold text-2xl sm:text-4xl lg:text-5xl uppercase pb-3 md:pb-5 leading-tight'>
                Train with intent. Log Every set.
              </h1>
              
              <p className='text-slate-300 text-sm sm:text-lg lg:text-xl pb-6 md:pb-10 leading-relaxed max-w-xl'>
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into {"today's"} plan, and watch the {"week's"} work add up.
              </p>

              <Link href={'/workouts'}>
                <button className='bg-[#C2F800] text-black hover:bg-lime-400 transition-colors px-6 sm:px-8 py-3 sm:py-4 rounded-xl uppercase font-bold text-base sm:text-xl cursor-pointer'>
                  Browse Workouts
                </button>
              </Link>
            </div>

            {/* Image section */}
            <div className='lg:col-span-5 flex justify-center lg:justify-end items-center w-full'>
              <Image 
                src={HeroImage} 
                className='w-full max-w-[300px] sm:max-w-[400px] h-auto object-contain' 
                alt='Hero Image' 
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;