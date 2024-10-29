import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { IoPersonOutline } from "react-icons/io5";
import MobileNav from './MobileNav';

interface NavItem {
  label: string;
  href: string;
}

const Header: React.FC = () => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);

  const location = useLocation();

  const nav: NavItem[] = [
    {
      label: "Astrologers",
      href: "/astrologers",
    },
    {
      label: "About Us",
      href: "/about",
    },
  ];

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdownOpen(!featuresDropdownOpen);
  };

  // Check if the current path is related to any feature dropdown page
  const isFeaturesActive = ["/features/horoscope", "/features/tarotHome", "/features/palmistry", "/features/natalChart", "/features/compatibility"].includes(location.pathname);

  return (
    <div>

      {/* mobile header */}
      <MobileNav/>

     {/* pc header */}
    <header className="hidden md:flex justify-between items-center py-3 mx-auto text-white md:w-[80%] mt-2">
      {/* Left part (Logo) */}
      <div>
        <NavLink to="/">
          <img src={logo} alt="Logo" className="h-14 text-[#FFD700]" />
        </NavLink>
      </div>

      {/* Middle part (Navigation links) */}
      <nav className="flex items-center justify-center space-x-8 bg-gray-800 rounded-2xl mx-2 px-4 py-1">
        {/* Features Dropdown */}
        <div className="relative">
          <button
            onClick={toggleFeaturesDropdown}
            className={`hover:text-[#FFD700] transition-colors duration-300 focus:outline-none font-semibold ${isFeaturesActive ? 'text-[#FFD700]' : ''}`}
          >
            Features
          </button>
          {featuresDropdownOpen && (
            <div className="absolute mt-4 w-40 px-3 bg-[#0c0a16] text-white border border-gray-300 rounded-lg p-2 z-50" style={{ boxShadow: '0 0 8px white' }}>
              <NavLink
                to="/features/horoscope"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-light "
                onClick={() => setFeaturesDropdownOpen(false)}
              >
                Horoscope
              </NavLink>
              <NavLink
                to="/features/tarotHome"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-light "
                onClick={() => setFeaturesDropdownOpen(false)}
              >
                Tarot Card
              </NavLink>
              <NavLink
                to="/features/palmistry"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-light "
                onClick={() => setFeaturesDropdownOpen(false)}
              >
                Palm Reading
              </NavLink>
              <NavLink
                to="/features/natalChart"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-light "
                onClick={() => setFeaturesDropdownOpen(false)}
              >
                Natal Chart
              </NavLink>
              <NavLink
                to="/features/compatibility"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors duration-300 font-light "
                onClick={() => setFeaturesDropdownOpen(false)}
              >
                Compatibility
              </NavLink>
            </div>
          )}
        </div>

        {/* Other Nav Items */}
        {nav.map((navItem) => (
          <NavLink 
            key={navItem.label} 
            to={navItem.href}
            className={({ isActive }) =>
              `hover:text-[#FFD700] transition-colors duration-300 ${isActive && 'text-[#FFD700]'}`
            }
          >
            {navItem.label}
          </NavLink>
        ))}
      </nav>

      {/* Right part (Profile icon with dropdown) */}
      <div className="relative">
        <button
          onClick={toggleProfileDropdown}
          className={`hover:text-[#FFD700] transition-colors duration-300 focus:outline-none ${location.pathname === "/profile" ? "text-[#FFD700]" : ''} `}
        >
          <IoPersonOutline className="text-3xl cursor-pointer" />
        </button>
        {profileDropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-[#0c0a16] text-white border border-gray-300 rounded-lg shadow-lg text-center" style={{ boxShadow: '0 0 8px white' }}>
            <NavLink
              to="/profile"
              className="block px-4 pt-2 pb-1 hover:bg-gray-700 transition-colors duration-300 font-light"
              onClick={() => setProfileDropdownOpen(false)}
            >
              My Profile
            </NavLink>
            <NavLink
              to="/signIn"
              className="block px-4 pb-2 pt-1 hover:bg-gray-700 transition-colors duration-300 text-[#FFD700] font-light"
              onClick={() => setProfileDropdownOpen(false)}
            >
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </header>
    </div>
  );
};

export default Header;
