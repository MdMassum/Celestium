import React from 'react';
import Search from './Search';
import history from '../../assets/AstroHeader/history.svg';
import notification from '../../assets/AstroHeader/notification.svg';
import calendar from '../../assets/AstroHeader/calendar.svg';
import profile from '../../assets/profile/dp.png';
import { NavLink } from 'react-router-dom';
import MobileHeader from './MobileHeader';

const TopHeader: React.FC = () => {
  return (
    <div>

      <MobileHeader />
      
    {/* desktop header */}
    <header className="hidden md:flex justify-between bg-[#3B3B5B] py-1 w-full min-w-[800px] absolute top-0">
      {/* Left side */}
      <div className="h-12 flex items-center">
        <p className="font-astloch text-3xl text-[#FFD700] px-6">Celestium</p>
        <div className="bg-black rounded-full px-5 border border-gray-300 h-11">
          <Search />
        </div>
      </div>

      {/* Right side */}
      <div className="flex w-1/3 gap-9 items-center relative">
        <NavLink to="/astro/history">
          <img src={history} alt="History" className="h-7" />
        </NavLink>

        <div className="relative">
          <NavLink to="/astro/notification">
            <img src={notification} alt="Notification" className="h-6" />
            {/* Notification badge */}
            <div className="bg-red-700 text-white absolute top-[-5px] right-[-10px] flex items-center justify-center text-xs border border-white h-4 w-4 rounded-full">
              2
            </div>
          </NavLink>
        </div>

        <img src={calendar} alt="Calendar" className="h-6" />

        <NavLink to="/astro/profile" className="h-8 w-8 flex gap-3 items-center">
          <img src={profile} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
          <p className="text-gray-200 ">Ammy</p>
        </NavLink>
        
      </div>
    </header>

    </div>
  );
};

export default TopHeader;
