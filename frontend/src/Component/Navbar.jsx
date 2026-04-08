import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import { useState } from 'react'
import { ShopContext } from '../Context/ShopContext'



const Navbar = () => {
  const [visible , setvisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className='flex items-center  justify-between py-5 font-medium mb-15'>
      <img src={assets.logo} className='p-3 w-40 sm:w-45' alt='logo' />

      <ul className='hidden sm:flex gap-5 text-[22px] text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

         <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
          <p>COLLECTION</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

         <NavLink to='/About' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>

         <NavLink to='/Contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-1/2 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        
      </ul>
      <div className="flex items-center gap-6 ">
          <img onClick={()=>setShowSearch(true)} src={assets.search_icon}  className='w-7 cursor-pointer' alt='Search icon'/>
          <div className="group relative">
            <img src={assets.profile_icon} className='w-6 min-w-6 cursor-pointer ' alt='pro icon' ></img>
            <div className='hidden group-hover:block absolute dropdown-menu right-0 pt-4'>
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          </div>
          <Link to='/Cart' className='relative'>
            <img src={assets.cart_icon} className='w-7 min-w-7' alt='cart'></img>
            <p className='absolute -right-1.75 -bottom-1.75 w-6 text-center leading-5 bg-black text-white aspect-square rounded-full text-[12px]'>{getCartCount()}</p>
          </Link>
          <img onClick={()=>{setvisible(true)}} src={assets.menu_icon} className='w-6 cursor-pointer sm:hidden' alt=''></img>
      </div>
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' :' w-0'}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={()=>{setvisible(false)}}  className="flex cursor-pointer items-center gap-4 p-3">
            <img src={assets.dropdown_icon} className='h-4 rotate-180 ' alt=''></img>
            <p className='hover:bg-slate-100 text-xl'>Back</p>
          </div>
          <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border-b' to='/'>HOME</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border-b' to = '/Collection'>COLLECTION</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border-b'to = '/About'>ABOUT</NavLink>
          <NavLink onClick={()=>{setvisible(false)}} className='py-2 pl-6 border-b'to = '/Contact'>CONTACT</NavLink>
        </div>
      </div>
    </div>
  )
}


export default Navbar