import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';
import Search from './Search';

const Menu = [
  {
    id: 1,
    name: 'Home',
    link: '/',
  },
  {
    id: 2,
    name: 'Products',
    link: '/products',
  },
  {
    id: 3,
    name: 'Contact',
    link: '/contact',
  },
  {
    id: 4,
    name: 'About',
    link: '/about',
  },
  {
    id: 5,
    name: 'Dashboard',
    link: '/dashboard',
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              DFlower
            </Link>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <Search />

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
