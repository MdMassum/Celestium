import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moon from '../../../assets/LaunchMoonAstro.svg';

const LaunchAstro: React.FC = () => {
  const navigate = useNavigate();
  const [showLaunch, setShowLaunch] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {

      setShowLaunch(false); // Hide the launch page
      navigate('/astro_Dashboard');    // Navigate to the home page 
      
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (!showLaunch) return null; // If launch is false, render nothing

  return (
    <div className="min-h-screen flex items-center justify-center mt-28 md:mt-0">
    <div className="bg-black mx-auto relative flex items-center justify-center">
      <h1 className="w-full min-w-[700px] absolute text-5xl md:text-4xl tracking-wider font-robotoSerif flex items-center justify-center pl-2 md:pl-0"><span className="font-astloch text-7xl md:text-6xl text-[#FFD700] tracking-wider pr-8 md:pr-10 ">Celestium </span>for Astrologer</h1>
      <img src={moon} alt="Moon" className="h-[520px] md:h-80 mx-auto" />
    </div>
</div>

  );
};

export default LaunchAstro;
