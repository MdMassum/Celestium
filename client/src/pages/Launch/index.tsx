import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import moon from '../../assets/launchMoon.png';

const Launch: React.FC = () => {
  const navigate = useNavigate();
  const [showLaunch, setShowLaunch] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {

      setShowLaunch(false); // Hide the launch page
      navigate('/');    // Navigate to the home page 
      
    }, 1000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  if (!showLaunch) return null; // If launch is false, render nothing

  return (
    <div className="min-h-screen flex items-center justify-center mt-28 md:mt-0">
    <div className="bg-black mx-auto relative flex items-center justify-center">
      <h1 className="absolute font-astloch text-[#FFD700] md:text-9xl text-[150px] tracking-wider">Celestium</h1>
      <img src={moon} alt="Moon" className="h-[520px] md:h-80 mx-auto" />
    </div>
</div>

  );
};

export default Launch;
