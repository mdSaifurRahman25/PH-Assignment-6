import Image from 'next/image'
import Logo from '@/assets/logo.png'

const Footer = () => {
  return (
    <div className='commonColor text-white border-t border-slate-600 '>
     <div className='container mx-auto text-center sm:flex sm:items-center sm:justify-between py-10'>
       <div className='flex items-center justify-start gap-4 pl-5'>
          <Image src={Logo} className='w-[30px] h-[30px] rotated-image' alt='FitLog' />
          <p className='font-bold text-xl'>FITLOG</p>
        </div>
      <div>
        <p> &copy;  2026. Fit Log -- Workout Library. Train hard. Log honest.</p>
      </div>
     </div>
    </div>
  )
}

export default Footer