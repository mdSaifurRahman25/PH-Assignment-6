import Image from 'next/image'
import Link from 'next/link'
import HeroImage from '@/assets/banner.png'

const Banner = () => {
  return (
    <div className='bg-zinc-800'>
      <div className='container mx-auto'>          
            <div className='py-20'>
                {/* Text section */}
            <div className='grid grid-cols-12 bg-[#15171D] rounded-3xl px-15 py-25'>
              <div className='col-span-6'>
                <p className='text-lime-400 tracking-widest font-bold uppercase pb-5'>Workout Library</p>
                <h1 className='text-white font-bold text-4xl uppercase pb-5'>Train with intent. Log <br /> Every set. </h1>
                <p className='text-white text-xl pb-18'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br /> into {"today's"} plan, and watch the {"week's"} work add up.</p>
                <button className='commonColor px-8 py-4 rounded-xl uppercase font-bold text-xl'>
                  <Link href={'/workouts'}>Browse Workouts</Link>
                </button>
              </div>

              {/* Image section */}
              <div className='flex justify-end col-span-6'>
                <Image src={HeroImage} className='h-[400px]' alt='Hero Image' />
              </div>
            </div>
            </div>
      </div>
    </div>
  )
}

export default Banner