import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='my-5 mt-2 flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-gray-700'>
  <div className="">
    <img className='w-12 m-auto mb-5 sm:w-15 md:w-15' src={assets.exchange_icon} alt='' />
    <p className='font-semibold mb-3 text-base sm:text-sm xl:text-xl'>Easy Exchange Policy</p>
    <p className='text-sm sm:text-xs text-gray-700 xl:text-[15px]'>We offer hassle free exchange policy</p>
  </div>
  <div className="">
    <img className='w-12 m-auto mb-5 md:w-15 sm:w-15' src={assets.quality_icon} alt='' />
    <p className='font-semibold mb-3 text-base sm:text-sm xl:text-xl'>7 Days Return Policy</p>
    <p className='text-sm sm:text-xs text-gray-700 xl:text-[15px]'>We provide 7 days free return policy</p>
  </div>
  <div className="">
    <img className='w-11 m-auto mb-5 sm:w-15 md:w-13' src={assets.support_img} alt='' />
    <p className='font-semibold mb-3 text-base sm:text-sm xl:text-xl'>Best customer support</p>
    <p className='text-sm sm:text-xs text-gray-700 xl:text-[15px]'>we provide 24/7 customer support</p>
  </div>
</div>
  )
}

export default OurPolicy
