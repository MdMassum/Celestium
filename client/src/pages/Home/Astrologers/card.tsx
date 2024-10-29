import React from 'react';
import star from '../../../assets/Astrologers/Star 12.png';
import Button from '../../../components/Button';

interface CardProps {
  astro: {
    label: string;
    img: string;
    href: string;
    rating: string;
    category: string[];
    experience: string;
  };
}

const Card: React.FC<CardProps> = ({ astro }) => {
  return (
    <div className='flex flex-col items-start p-0 md:p-4 rounded-lg shadow-lg mx-auto'>
      <img src={astro.img} alt={`${astro.label} image`} className="h-56 rounded-lg mb-4" />
      
      <div className='flex justify-between w-full px-4'>
        <p className='font-semibold text-md'>{astro.label}</p>
        <div className='flex items-center'>
          <img src={star} alt="Star rating" className='h-4' />
          <p className='ml-1 text-sm'>{astro.rating}</p>
        </div>
      </div>
      
      <div className='flex flex-wrap my-2 px-4'>
        {astro.category.map((item, index) => (
          <p key={index} className='text-xs text-gray-400 mr-2'>{item},</p>
        ))}
      </div>
      
      <p className='text-sm text-gray-400 mb-4 px-4'>
        Experience: {astro.experience}
      </p>
      
      <Button className='md:w-[70%] ml-4'><p className='md:text-sm'>Connect Now</p></Button>
    </div>
  );
};

export default Card;
