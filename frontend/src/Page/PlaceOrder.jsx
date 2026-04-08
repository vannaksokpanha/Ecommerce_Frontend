import React from 'react'

const PlaceOrder = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      <div className='flex flex-col gap-4 w-full sm:max-w-120'>

        <div className='text-x1 sm:text-2x1 my-3'>
          <title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone number'/>
      </div>

      <div className='mt-8'>

        
        
        

      </div>
    </div>
  )
}

export default PlaceOrder
