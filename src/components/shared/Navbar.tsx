import Image from 'next/image'
import IMAGE from '@/assets/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-black text-white py-4 border-b-2 border-[#15171D]'>
      <nav className='flex justify-between items-center container mx-auto'>
        <div className='flex gap-2'>
          <Image src={IMAGE} className='w-[30px] h-[30px]' alt='FitLog' priority />
          <p className='font-bold text-xl'>FITLOG</p>
        </div>
        <div className='flex gap-3'>
          <Link href={'/workouts'}>Workouts</Link>
          <Link href={'/myplan'}>My Plan</Link>
        </div>
        <div className='flex gap-4'>
          <div className='flex gap-2'>
            <p >Plan</p>
            <p className='border border-red-600 commonColor text-black px-2 rounded-full'>0</p>
          </div>
          <div className='flex gap-2'>
            <p>Saved</p>
            <p className='border border-red-600 commonColor text-black px-2 rounded-full'>0</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar