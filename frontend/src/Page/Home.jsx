import React from 'react'
import Hero from '../Component/Hero'
import LastestCollection from '../Component/LastestCollection'
import BestSeller from '../Component/BestSeller'
const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <LastestCollection></LastestCollection>
      <BestSeller></BestSeller>
    </div>
  )
}

export default Home
