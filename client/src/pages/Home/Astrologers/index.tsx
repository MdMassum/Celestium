import React from 'react';
import Card from './card';
import img1 from '../../../assets/Astrologers/Rectangle 4.png'
import img2 from '../../../assets/Astrologers/Rectangle 5.png'
import img3 from '../../../assets/Astrologers/Rectangle 6.png'

interface AstroItem {
  label: string;
  img : string;
  href: string;
  rating: string;
  category: string[];
  experience: string;
}

const Astrologers: React.FC = () => {
  const Astros: AstroItem[] = [
    {
      label: 'Emma Jones',
      img : img1,
      href: "#",
      rating: '5.0',
      category: ['Psychic', 'Tarot'],
      experience: '6 years',
    },
    {
      label: 'Thomas Riddle',
      img : img2,
      href: "#",
      rating: '4.5',
      category: ['Psychic', 'Numerology'],
      experience: '5 years',
    },
    {
      label: 'Kathryn Anders',
      img : img3,
      href: "#",
      rating: '4.5',
      category: ['Psychic', 'Tarot', 'Astronomy'],
      experience: '6 years',
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center ">
      <h1 className='text-5xl text-center text-[#FFD700] font-robotoSerif tracking-wider'>Featured Astrologers</h1>
      <div className='flex items-center justify-between mx-auto p-6 md:p-0 md:w-[80%] mt-16 mb-10'>

        {Astros.map((astro, index) => (
          <Card key={index} astro={astro} /> 
        ))}

      </div>
      
    </div>
  );
};

export default Astrologers;
