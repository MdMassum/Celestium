import React from 'react';
import SearchFeature from './search';
import live1 from '../../assets/AstrologersPage/live1.png';
import live2 from '../../assets/AstrologersPage/live2.png';
import live3 from '../../assets/AstrologersPage/live3.png';
import live4 from '../../assets/AstrologersPage/live4.png';
import live5 from '../../assets/AstrologersPage/live5.png';
import live6 from '../../assets/AstrologersPage/live6.png';
import live7 from '../../assets/AstrologersPage/live7.png';
import astro1 from '../../assets/AstrologersPage/astrologer1.png';
import astro2 from '../../assets/AstrologersPage/astrologer2.png';
import astro3 from '../../assets/AstrologersPage/astrologer3.png';
import Card from './Card';
import { NavLink } from 'react-router-dom';

// Define an interface for the astrologers' data
interface Astrologer {
  name: string;
  img: string;
  href: string;
}

interface AstroItem {
    name: string;
    img : string;
    id: string;
    rating: string;
    category: string[];
    experience: string;
    available:Boolean;
  }

const Astrologers: React.FC = () => {
  //an array of live astrologers
  const liveAstrologers: Astrologer[] = [
    { name: 'Samarth', img: live1, href: '#' },
    { name: 'Katy', img: live2, href: '#' },
    { name: 'Edna', img: live3, href: '#' },
    { name: 'Will', img: live4, href: '#' },
    { name: 'Ellie', img: live5, href: '#' },
    { name: 'Russell', img: live6, href: '#' },
    { name: 'Samarth', img: live3, href: '#' },
    { name: 'Katy', img: live5, href: '#' },
    { name: 'Edna', img: live1, href: '#' },
    { name: 'Edna', img: live7, href: '#' },
    
  ];

  //an array of all astrologers 
  const Astros: AstroItem[] = [
    {
      name: 'Kathryn Murphy',
      id:"dkfjlkfj",
      img : astro1,
      rating: '5.0',
      category: ['Psychic', 'Tarot'],
      experience: '8',
      available:true,
    },
    {
      name: 'Andrew Will',
      img : astro2,
      id: "dfldjfljf",
      rating: '5',
      category: ['Psychic', 'Numerology'],
      experience: '5',
      available:false,
    },
    {
      name: 'Ellie Anders',
      img : astro3,
      id: "dfljdfjllkdf",
      rating: '4.5',
      category: ['Psychic', 'Tarot'],
      experience: '6',
      available:true,
    },
  ];

  return (
    <div className="flex flex-col justify-between items-center mt-14 mb-10 w-full md:w-[80%] p-8 md:p-0 gap-10 md:gap-4 mx-auto text-xl md:text-base">
      <SearchFeature />

      {/* Live astrologers section */}
      <div className="w-full">

        <p className="text-lg ml-1 mb-2 mt-4">Join Live Astrologers</p>
        {/* Scrollable container */}
        <div className="flex overflow-x-scroll scrollbar-hide space-x-2 p-2 mb-6">
          {liveAstrologers.map((astro, index) => (
            <div key={index} className="flex flex-col justify-center items-center min-w-[120px]">
              <img src={astro.img} alt={`${astro.name} profile`} className="h-20 rounded-full mb-2" />
              <p className="text-sm font-medium">{astro.name}</p>
            </div>
          ))}
        </div>

      </div>

       {/* all astrologers chats */}

       {Astros.map((astro,index)=>(

            <NavLink to={`/astrologers/${astro.id}`} className='w-full'>
                <Card key={index} astro={astro} /> 
            </NavLink>
       ))}

    </div>
  );
};

export default Astrologers;
