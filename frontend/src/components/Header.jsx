import React, { useContext, useState } from "react";

import logo from "../assets/logos/shopping-bag.png";
import search_icon from "../assets/icons/search_icon.png";
import profile_icon from "../assets/icons/profile_icon.png";
import cart_icon from "../assets/icons/cart_icon.png";
import menu_icon from "../assets/icons/menu_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const { setShowSearch } = useContext(ShopContext)

    return (
        <header
            className={`relative flex justify-between items-center gap-1.5 w-full py-3 bg-slate-50 z-10 ${navbarToggle ? "mb-52" : "mb-0"} md:mb-0`}
        >
            <div className="flex items-center gap-0.5">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-8 sm:w-10 md:w-12 md:h-10 cursor-pointer" />
                </Link>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer">
                    Easy
                    <span className="text-green-500">Shop</span>
                </h2>
            </div>

            <nav
                className={`absolute top-[58px] left-0 md:static w-full px-0 md:px-2 md:w-auto bg-slate-50 transition-all duration-300 ease-in-out ${navbarToggle ? "block" : "hidden"} md:flex`}
            >
                <ul className="flex flex-col md:flex-row gap-1 md:gap-4 lg:gap-5 text-xl font-semibold py-2 md:py-0 whitespace-nowrap">
                    <Link to="/">
                        <li className="cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500">
                            Home
                        </li>
                    </Link>
                    <Link to="/collections">
                        <li className="cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500">
                            Collections
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500">
                            About Us
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li className="cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500">
                            Contact Us
                        </li>
                    </Link>
                </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <button>
                    <img
                        onClick={() => setShowSearch(true)}
                        src={search_icon}
                        alt="Search"
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                    />
                </button>

                <button>
                    <img
                        src={profile_icon}
                        alt="Profile"
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                    />
                </button>

                <button>
                    <img
                        src={cart_icon}
                        alt="Cart"
                        className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                    />
                </button>

                <div className="block md:hidden">
                    <button onClick={() => setNavbarToggle(!navbarToggle)}>
                        <img
                            src={menu_icon}
                            alt="Menu"
                            className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8"
                        />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
