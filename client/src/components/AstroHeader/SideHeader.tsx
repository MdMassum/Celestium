import React from 'react';
import home from '../../assets/AstroHeader/home.png';
import live from '../../assets/AstroHeader/live.svg';
import call from '../../assets/AstroHeader/call-chat.svg';
import performance from '../../assets/AstroHeader/mdi_performance.svg';
import logout from '../../assets/AstroHeader/logout.svg'
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutFailure, signOutStart, signOutSuccess } from '../../redux/authSlice';

interface NavItem {
  icon: string;
  label: string;
  href: string;
}

const SideHeader: React.FC = () => {
  const nav: NavItem[] = [
    {
      icon: home,
      label: 'Home',
      href: '/astro_Dashboard',
    },
    {
      icon: live,
      label: 'Go Live',
      href: '/astro/goLive',
    },
    {
      icon: call,
      label: 'Call/Chat',
      href: '/astro/callAppointment',
    },
    {
      icon: performance,
      label: 'Performance Insights',
      href: '/astro/performance',
    },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    try {
      dispatch(signOutStart());
      // Simulate API call
      dispatch(signOutSuccess());
      navigate('/signIn_Astro');
    } catch (error: any) {
      dispatch(signOutFailure(error.message));
    }
  };

  return (
    <div className="hidden md:flex flex-col w-28 ml-3 h-screen absolute items-center top-16 text-lg md:text-sm">
      <div className="flex flex-col w-full bg-[#3B3B5B] gap-10 px-3 py-6 items-center justify-center rounded-md ">
        {nav.map((item) => (
          <NavLink
            to={item.href}
            key={item.href}
            className={({ isActive }) =>
              `flex flex-col items-center text-center gap-2 hover:text-[#FFD700] transition-colors duration-300 ${
                isActive ? 'text-[#FFD700]' : ''
              }`
            }
          >
            <img src={item.icon} alt={item.label} className="h-7 text-[#FFD700] " />
            <p className='max-w-24'>{item.label}</p>
          </NavLink>
        ))}
      </div>

      <div 
      onClick={()=>handleLogout()}
      className='flex w-full rounded-md py-3 gap-1 justify-center items-center bg-[#3B3B5B] mt-2'>
        <img src={logout} alt="" className='h-9'/>
        <p className=' hover:text-[#FFD700]'>Logout</p>
      </div>
    </div>
  );
};

export default SideHeader;
