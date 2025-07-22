import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '../../assets/logo.webp';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`bg-white shadow-md z-50 fixed w-full top-0 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium relative">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>

          {/* Dropdown */}
          <li
            className="relative flex items-center gap-1 cursor-pointer hover:text-blue-500"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <span className="flex items-center">
              Services <ChevronDownIcon className="w-4 h-4 text-gray-500 ml-1" />
            </span>
            {showDropdown && (
              <ul className="absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-55 z-10">
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-700">
                  <Link to="/webdev">Web Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-700">
                  <Link to="/sofdev">Software Development</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-700">
                  <Link to="/uiuxpg">UI/UX Designs</Link>
                </li>
                <li className="px-4 py-2 hover:bg-blue-100 hover:text-gray-700">
                  <Link to="/cmsdev">CMS Development</Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/projects" className="hover:text-blue-500">Projects</Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </li>

          <Link to="/contact">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer">
              Contact
            </button>
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden ">
          <button className='cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/" className="hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-500">Projects</Link>
            </li>

            <div>
              <div
                className="flex items-center gap-1 hover:text-blue-500 cursor-pointer select-none"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Services <ChevronDownIcon className="w-4 h-4 text-gray-500" />
              </div>
              {showDropdown && (
                <ul className="bg-gray-100 mt-2 rounded-md px-2 py-1">
                  <li className="py-1  hover:text-gray-500 text-blue-500 hover:bg-blue-100 ">
                    <Link to="/webdev">Web Development</Link>
                  </li>
                  <li className="py-1 hover:text-gray-500 text-blue-500 hover:bg-blue-100 ">
                    <Link to="/sofdev">Software Development</Link>
                  </li>
                  <li className="py-1 hover:text-gray-500 text-blue-500 hover:bg-blue-100 ">
                    <Link to="/uiuxpg">UI/UX Designs</Link>
                  </li>
                  <li className="py-1 hover:text-gray-500 text-blue-500  hover:bg-blue-100">
                    <Link to="/cmsdev">CMS Development</Link>
                  </li>
                </ul>
              )}
            </div>

            <li>
              <Link to="/about" className="hover:text-blue-500">About</Link>
            </li>

            <Link to="/contact">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-fit">
                Contact
              </button>
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
