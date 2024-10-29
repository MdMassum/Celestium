import React from 'react';
import stars from '../assets/Stars.png';

// Define the type for the props
interface StarssProps {
  className?: string;
  align?:string;
  astrologer?:boolean;
}

const Starss: React.FC<StarssProps> = ({ className = "",align = "", astrologer = false }) => {
  return (
    <div className={`hidden md:flex relative w-1/2 mx-12 -mt-20 ${align}`} >
      <img src={stars} alt="stars" className={className} />
      <div className='flex flex-col'>
        <h1 className="font-astloch text-[#FFD700] text-7xl mt-32 ml-20">Celestium</h1>
        <p className={`${astrologer ? "flex" : "hidden"} ml-24 mt-2`}>for Astrologer</p>
      </div>
      
    </div>
  );
};

export default Starss;
