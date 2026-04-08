import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {

  return (
    <div className="max-w-6xl mx-auto  px-4 py-12 border border-gray-300 p-10 ">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16 ">
        <div className="md:w-1/2 w-full">
          <img 
            src={assets.about_img}
            alt="About Forever Store"
            className="w-full h-auto rounded-lg shadow-md object-cover transition-all duration-300 ease-in-out hover:scale-105 border border-red-100"
          />
        </div>
        
        <div className="md:w-1/2 w-full my-10 mx-10 items-center">
          <p className="text-2xl mb-4 text-gray-700  flex justify-center  gap-2">
            Welcome to
           <strong className="text-blue-600"><Title text1={"FOREVER"} text2={"SHOP"} ></Title></strong>
          </p>
          
          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            We take pride in offering only the highest quality products at prices that won't break the bank, backed by fast, reliable shipping and exceptional customer service that's always ready to help you with anything you need.
          </p>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-800">Why Shop With Us?</h3>
          <ul className="space-y-2 mb-6 text-xl">
            <li className="text-gray-700">✓ Quality Products</li>
            <li className="text-gray-700">✓ Secure Payments</li>
            <li className="text-gray-700">✓ Fast Delivery</li>
            <li className="text-gray-700">✓ 24/7 Customer Support</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h3>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          To provide the best possible shopping experience by offering carefully curated quality products, 
          delivering exceptional customer service at every step, and ensuring that every interaction with 
          our brand leaves you feeling valued and satisfied.
        </p>
      </div>
    </div>
  )
}

export default About

