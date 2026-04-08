import React from 'react'
import Title from '../Component/Title'
import { assets } from '../assets/frontend_assets/assets'

const contactDetails = [
  {
    title: 'Store Address',
    lines: ['st 1023', 'Phnom Penh Tmei, Phnom Penh, Cambodia'],
  },
  {
    title: 'Contact Us',
    lines: ['Tel: (855) 123 456 ', 'Email: hello@foreverbloom.com'],
  },
  {
    title: 'Working Hours',
    lines: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
  },
]

const Contact = () => {
  
  const openEmail = () => {
    window.open('https://t.me/Panhaclone', '_Blank'  );
  }

  return (
    <div className='my-10 sm:my-16'>
      <div className='text-center text-3xl pt-8 border-t border-gray-200'>
        <Title text1={'GET IN'} text2={'TOUCH'} />
        <p className='w-3/4 m-auto text-[12px] sm:text-[15px] md:text-base text-gray-400'>
          We would love to hear from you. Reach out for product questions,
          order support, or store enquiries and our team will get back to you
          shortly.
        </p>
      </div>

      <div className='my-12 flex flex-col lg:flex-row items-stretch gap-8 lg:gap-10'>
        <div className='lg:w-1/2 overflow-hidden border border-gray-200'>
          <img
            className='h-full w-full object-cover'
            src={assets.contact_img}
            alt='Customer support team'
          />
        </div>

        <div className='lg:w-1/2 flex flex-col justify-center'>
          <p className='text-sm font-medium tracking-[0.3em] text-gray-500'>
            CONTACT FOREVER
          </p>
          <h1 className='prata-regular mt-3 text-3xl sm:text-4xl text-gray-800 leading-tight'>
            Let&apos;s start a conversation
          </h1>
          <p className='mt-4 max-w-xl text-sm sm:text-base leading-7 text-gray-500'>
            Whether you need styling advice, an update on your order, or help
            finding the right fit, our team is here to make shopping easy and
            personal.
          </p>

          <div className='mt-8 grid gap-4 sm:grid-cols-2'>
            {contactDetails.map((item) => (
              <div 
                key={item.title}
                className='border border-gray-200 px-5 py-6 transition hover:-translate-y-1 hover:shadow-sm'
              >
                <h2 className='text-base font-semibold text-gray-800'>
                  {item.title}
                </h2> 
                <div className='mt-3 space-y-1 text-sm leading-6 text-gray-500'>
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className='mt-6 border border-gray-200 px-6 py-5'>
            <p className='text-sm font-medium tracking-[0.25em] text-gray-500'>
              QUICK RESPONSE
            </p>
            <p className='mt-2 text-sm sm:text-base leading-7 text-gray-500'>
              Prefer Telegram? Send us your question and we&apos;ll respond within
              24 hours on business days.
            </p>
            <button onClick={openEmail} className='mt-5 border border-black px-8 py-3 text-sm font-medium tracking-[0.2em] text-gray-800 transition hover:bg-black hover:text-white'>
              TELEGRAM
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
