import React, { useState } from 'react'

import logo from '../assets/logos/shopping-bag.png'
import search_icon from '../assets/icons/search_icon.png'
import profile_icon from '../assets/icons/profile_icon.png'
import cart_icon from '../assets/icons/cart_icon.png'
import menu_icon from '../assets/icons/menu_icon.png'
import { Link } from 'react-router-dom'

const Header = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);

    return (
        <header className={`relative flex justify-between items-center w-full py-3 px-1 sm:px-4 bg-slate-50 z-10 ${navbarToggle ? 'mb-40' : 'mb-0'} md:mb-0`}>
            <div className='flex items-center gap-2'>
              <Link to='/'>  <img
                    src={logo}
                    alt='logo'
                    className='h-12 cursor-pointer'
                /></Link>
                <h2 className='text-2xl font-bold cursor-pointer'>
                    Easy
                    <span className='text-green-500'>Shop</span>
                </h2>
            </div>

            <nav className={`absolute top-16 left-0 md:static w-full md:w-auto bg-slate-50 transition-all duration-300 ease-in-out ${navbarToggle ? 'block' : 'hidden'} md:flex`}>
                <ul className='flex flex-col md:flex-row gap-1 sm:gap-5 text-xl font-semibold py-2 md:py-0'>
                    <Link to='/'>
                    <li className='cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500'>
                        Home
                    </li>
                    </Link>
                    <li className='cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500'>
                        Collections
                    </li>
                    <Link to='/about'>
                    <li className='cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500'>
                        About Us
                    </li>
                    </Link>
                    <li className='cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500'>
                        Contact Us
                    </li>
                </ul>
            </nav>

            <div className='flex items-center gap-3 md:gap-4'>
                <button>
                    <img
                        src={search_icon}
                        alt=''
                        className='h-8'
                    />
                </button>
                <button>
                    <img
                        src={profile_icon}
                        alt=''
                        className='h-8'
                    />
                </button>
                <button>
                    <img
                        src={cart_icon}
                        alt=''
                        className='h-8'
                    />
                </button>
            </div>

            <div className='flex md:hidden'>
                <button onClick={() => setNavbarToggle(!navbarToggle)}>
                    <img
                        src={menu_icon}
                        alt=''
                        className='h-8'
                    />
                </button>
            </div>
        </header>
    )
}

export default Header