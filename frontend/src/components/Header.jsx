import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import logo from "../assets/logos/shopping-bag.png";
import search_icon from "../assets/icons/search_icon.png";
import profile_icon from "../assets/icons/profile_icon.png";
import cart_icon from "../assets/icons/cart_icon.png";
import menu_icon from "../assets/icons/menu_icon.png";

const Header = () => {
    const [navbarToggle, setNavbarToggle] = useState(false);
    const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!location.pathname.includes('collections')) {
            navigate('/collections')
        }

        setShowSearch(!showSearch)
    }

    return (
        <header
            className={`relative flex justify-between items-center gap-1.5 w-full py-3 px-1 sm:px-4 bg-slate-50 z-10 ${navbarToggle ? "mb-[200px]" : "mb-0"} md:mb-0`}
        >
            <div className="flex items-center gap-0.5">
                <Link to="/">
                    <img src={logo} alt="EasyShop Logo" className="w-8 sm:w-10 md:w-12 md:h-10 cursor-pointer" />
                </Link>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer">
                    Easy
                    <span className="text-green-500">Shop</span>
                </h2>
            </div>

            <nav
                className={`absolute top-[58px] left-0 md:static px-0 md:px-2 w-full md:w-auto bg-slate-50 transition-all duration-300 ease-in-out ${navbarToggle ? "block" : "hidden"} md:flex`}
            >
                <ul className="flex flex-col md:flex-row gap-1 md:gap-4 lg:gap-5 text-xl font-semibold py-2 md:py-0 whitespace-nowrap">
                    {['/', '/collections', '/about', '/contact'].map((path, index) => {
                        const labels = ["Home", "Collections", "About Us", "Contact Us"];
                        return (
                            <Link to={path} key={index}>
                                <li className="cursor-pointer px-8 md:px-0 py-2 md:py-0 hover:bg-slate-100 md:hover:bg-transparent md:hover:text-gray-500">
                                    {labels[index]}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                <button>
                    <img src={search_icon} alt="Search" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" onClick={handleSearch} />
                </button>
                <button>
                  <Link to='/login'>  <img src={profile_icon} alt="Profile" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" /></Link>
                </button>
                <Link to='/cart' className="relative">
                    <img src={cart_icon} alt="Cart" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                        {getCartCount()}
                    </p>
                </Link>
                <div className="flex md:hidden">
                    <button onClick={() => setNavbarToggle(!navbarToggle)}>
                        <img src={menu_icon} alt="menu" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
                    </button>
                </div>
            </div>

        </header>
    );
};

export default Header;
