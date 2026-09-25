import Image from 'next/image'
import IMAGE from '@/assets/logo.png'
import Link from 'next/link'
import PlanCounters from './PlanCounters' 

const Navbar = () => {
  return (
    <div className='commonColor text-white py-4 border-b-2 border-[#15171D]'>
      <nav className='flex justify-between items-center container mx-auto'>
        <div>
          <Link className='flex gap-2' href={'/'}>
            <Image src={IMAGE} className='w-[30px] h-[30px]' alt='FitLog' priority />
            <p className='font-bold text-xl'>FITLOG</p>
          </Link>
        </div>

        <div className='flex gap-3'>
          <Link href={'/'}>Workouts</Link>
          <Link href={'/myplan'}>My Plan</Link>
        </div>

        <PlanCounters />
      </nav>
    </div>
  )
}

export default Navbar