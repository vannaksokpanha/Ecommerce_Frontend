import React from 'react'

const LetterBox = () => {
    const onSubmitHandler = (event) =>{  
        event.preventDefault();
    }
  return (
    <div className=' my-5 mt-2 text-center'>
      <p className='mt-10 lg:text-2xl md:text-xl sm:text-xl xl:text-4xl font-medium text-gray-800'>Order now & get 70% off for new customer</p>
      <p className=' text-gray-400 mt-10 xl:text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis natus distinctio, nisi quas quo dolore illo velit odio temporibus saepe alias iure tempore quidem magni ducimus repudiandae iusto impedit dolor.</p>
      <form onSubmit={onSubmitHandler} className='mt-15 w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 '>  
        <input className='w-full sm:flex-1 outline-none ' type='email' placeholder='Enter your email'></input>
        <button type='submit' className='bg-black text-white text-md px-10 py-5 cursor-pointer ' >ORDER NOW</button>
      </form>
    </div>
  )
}

export default LetterBox