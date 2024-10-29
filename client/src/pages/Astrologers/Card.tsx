import React from 'react';
import star from '../../assets/Astrologers/Star 12.png';
import availableIcon from '../../assets/AstrologersPage/availableIcon.png';
import unavailableIcon from '../../assets/AstrologersPage/unavailableIcon.png';
import phoneIcon from '../../assets/AstrologersPage/phoneIcon.png';
import chatIcon from '../../assets/AstrologersPage/chatIcon.png';

interface CardProps {
  astro: {
    name: string;
    img: string;
    id: string;
    rating: string;
    category: string[];
    experience: string;
    available: Boolean;
  };
}

const Card: React.FC<CardProps> = ({ astro }) => {
  return (
    <div className='flex justify-between items-center w-full py-1 rounded-lg shadow-lg mx-auto font-thin'>
      

      <div className='flex gap-2'>
            {/* Profile and rating */}
            <div className='flex flex-col items-center'>
                <img src={astro.img} alt="" className='h-28 rounded-full object-cover' />
                <div className='flex items-center space-x-1'>
                <img src={star} alt="Star" className='h-4 w-4' />
                <p className='text-sm font-medium '>{astro.rating}</p>
                </div>
            </div>

            {/* Astrologer info */}
            <div className='flex flex-col justify-center space-y-1 space-x-1'>
                <p className='font-semibold text-lg px-1'>{astro.name}</p>
                <div className='flex flex-wrap space-x-1 text-sm '>
                {astro.category.map((horos, index) => (
                    <p key={index} className='py-1 rounded-full'>{horos}</p>
                ))}
                </div>
                <p className='text-sm '>Experience: {astro.experience} years</p>
            </div>

      </div>

      
      <div className='flex justify-between w-1/2'>
        {/* Availability */}
      <div className='flex items-center justify-center gap-2'>
        <img
          src={astro.available ? availableIcon : unavailableIcon}
          alt={astro.available ? "Available" : "Unavailable"}
          className='h-4 mb-1'
        />
        <p className={`text-sm font-medium ${astro.available ? 'text-green-500' : 'text-red-500'}`}>
          {astro.available ? "Available" : "Unavailable"}
        </p>
      </div>

      {/* Communication icons */}
      <div className='flex space-x-6'>
        <img src={phoneIcon} alt="Phone" className='h-7 cursor-pointer hover:opacity-75' />
        <img src={chatIcon} alt="Chat" className='h-7 cursor-pointer hover:opacity-75 pr-6' />
      </div>

      </div>
      
    </div>
  );
};

export default Card;
