import React from 'react'
import Hero from '../Component/Hero'
import LastestCollection from '../Component/LastestCollection'
import BestSeller from '../Component/BestSeller'
import OurPolicy from '../Component/OurPolicy'
import LetterBox from '../Component/LetterBox'
const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <LastestCollection></LastestCollection>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <LetterBox></LetterBox>
    </div>
  )
}

export default Home
