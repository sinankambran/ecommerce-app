import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = ()=> {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t '>
        <Title text1={'ABOUT'} text2={'US'} />

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" /> 
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever was born from a passion for innovation and a desire to revolutionize the industry. Our mission is to push boundaries and redefine what’s possible, creating solutions that not only meet today’s needs but also anticipate tomorrow’s challenges. </p>
        <p>Since our inception, we’ve worked tirelessly to drive progress and transform ideas into groundbreaking solutions. Our commitment to excellence and innovation has been the cornerstone of our journey, propelling us to continually push the envelope and redefine industry standards.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to empower our customers by providing innovative solutions that enhance their lives and drive success. We are dedicated to delivering exceptional value and fostering growth through cutting-edge technology and unparalleled service.</p>
        </div>

      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our highest standards of quality and performance. Our rigorous evaluation process guarantees that every item we offer delivers exceptional value and aligns with our commitment to excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free experience, we make it easy for customers to find and access the products they need. Our commitment is to ensure that every interaction is smooth, efficient, and enjoyable, allowing our customers to focus on what matters most to them.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 md:py-20 flex flex-col gap-5'>
          <b>Exxception Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to provide unparalleled support and expertise. We are committed to assisting you every step of the way, ensuring that you have the resources and guidance needed to achieve your goals and make the most of our offerings.</p>
        </div>

      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About