import React from 'react'
import logo from '../assets/logos/shopping-bag.png'

const Footer = () => {
  return (
    <div>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={logo} className='mb-5 w-32' alt="" />
            <h2 className='text-2xl font-bold cursor-pointer'>
                    Easy
                    <span className='text-green-500'>Shop</span>
                </h2>
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry  

            </p>

        </div>

        <div className='mt-7'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
                
            </ul>

        </div>
        <div className='mt-7'>
           <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
           <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91-024-455-6666</li>
            <li>contact@foreveryou.com</li>

           </ul>
        </div>

    </div>

    <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com - All Right Reserved.</p>
    </div>
    </div>
  )
}

export default Footer