import React from 'react';
import scorpionRight from '../../assets/compatibility/scorpion_right.png';
import scorpionLeft from '../../assets/profile/SCORPION.png';
import ImageComp from './ImageComp';

// Define User interface with proper naming conventions
interface User {
  name: string;
  horoscope: string;
}

// Hardcoded user and partner data
const user: User = {
  name: 'Amy',
  horoscope: 'Scorpio',
};

const partner: User = {
  name: 'Sam',
  horoscope: 'Scorpio',
};

const Compatibility2: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-10 mb-10 w-full md:w-[80%] p-8 md:p-0 mx-auto text-lg md:text-base">

      {/* Top row with scorpion images and compatibility result */}
      <div className="flex justify-between items-end space-x-8 w-full">
        {/* Left Scorpion Image */}
        <img src={scorpionLeft} alt="Left Scorpion mr-2" className="h-24 hidden md:flex" />

        {/* Compatibility Result with user and partner data */}

        <ImageComp user={user} partner={partner} />
        
        {/* Right Scorpion Image */}
        <img src={scorpionRight} alt="Right Scorpion" className="h-24 hidden md:flex" />
      </div>

      {/* compatibility percentage */}
      <p className='text-[#FFD700] mr-16 text-2xl -mt-2'>89%</p>

      <p className='mt-8'>When two Scorpions make a love match, it is a fierce tempest of intense passion.</p>

      <p className='mt-8'>Both are obsessed with one another, and they move forward in love, sex and romance at an accelerated — some would say foolish — way. Personal relations are positively steamy but, to the equal and opposite extreme, disputes will also be frenetically powerful. This relationship could go either way: It will either be the most wonderful thing in the world or a destruction of both involved.</p>

      <p className='text-[#FFD700] mt-8 max-w-[500px]'>“This relationship could go either way: It will either be the most wonderful thing in the world or a destruction of both involved.”</p>
    </div>
  );
};

export default Compatibility2;
