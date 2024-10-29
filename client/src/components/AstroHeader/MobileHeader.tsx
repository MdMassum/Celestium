import React, { useState } from 'react';
import menu from '../../assets/menu.svg';
import cross from '../../assets/cross.svg';
import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

const MobileHeader: React.FC = () => {

  // State to track if the mobile menu is open
  const [menuOpen, setMenuOpen] = useState(false);

  // State to track the active menu label
  const [activeLabel, setActiveLabel] = useState('Home');

  const nav: NavItem[] = [
    { label: 'Home', href: '/astro_Dashboard' },
    { label: 'Go Live', href: '/astro/goLive' },
    { label: 'Call/Chat', href: '/astro/callAppointment' },
    { label: 'Performance Insights', href: '/astro/performance' },
    { label: 'History', href: '/astro/history' },
    { label: 'Notifications', href: '/astro/notification' },
    { label: 'Profile', href: '/astro/profile' },
    { label: 'Logout', href: '/signIn_Astro' },
  ];

  // Function to handle menu toggle
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle clicking on a nav item
  const handleNavClick = (label: string) => {
    setActiveLabel(label);
    setMenuOpen(false);
  };

  return (
    <header className="md:hidden fixed top-0 z-50 max-h-screen w-full p-4 mx-auto text-white pt-4 bg-black  border-b border-gray-200">

      {/* Top bar containing menu/cross icon and title */}
      <div className="flex justify-between items-center text-white py-1 pb-1">
        <img
          src={menuOpen ? cross : menu}
          alt="menu"
          className="cursor-pointer h-10 pl-2"
          onClick={toggleMenu}
        />
        
        {/* Show active label when menu is closed, or app title when open */}
        <p className="text-6xl font-normal font-robotoSerif w-full text-center text-[#FFD700]">
          {menuOpen ?  <p className='font-astloch'>Celestium</p> : (activeLabel !== 'Home' ? activeLabel : <p className='font-astloch '>Celestium</p>)}
        </p>
      </div>

      {/* Navigation menu, shown only when `menuOpen` is true */}
      {menuOpen && (
        <nav className="h-screen max-h-[2000px] z-50 overflow-hidden min-h-[2000px] top-10  bg-black p-6 pt-10 rounded-lg shadow-lg">
          <ul className="min-h-screen flex flex-col justify-evenly gap-10 bg-black ">
            {nav.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  className="text-4xl font-light text-white bg-black  hover:text-[#FFD700] transition-all"
                  onClick={() => handleNavClick(item.label)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
