import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
   <div className="">
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-15 mt-40 text-[18px]'>
            <div className="">
                <img className='mb-5 xl:w-40 sm:w-35' src={assets.logo} alt=''></img>
                <p className='w-full md:w-2/3 text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia enim, ut iure aspernatur aut laborum? Ab nostrum at earum cupiditate magnam accusamus, nesciunt, dolores maxime, a commodi nulla tenetur sint?</p>
            </div>
            <div className="">
                <h1 className='text-2xl font-medium mb-5'>COMPANY</h1>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                    <li></li>
                </ul>
            </div>
            <div className="">
                <h1 className='text-2xl font-medium mb-5' >GET IN TOUCH</h1>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+855-16521040</li>
                    <li>contact@panhaclonexyz.com</li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <div className="">
                <p className='py-5 sm:text-sm md:text-[18px] lg:text-[20px]  text-center'>Copyright 2026 Forever.com - All right reserved.</p>
        </div>
    </div>
  )
}

export default Footer
