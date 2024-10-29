import React from 'react';
import Button from '../../../components/Button';
import RightComp from './rightComp';

const Section1: React.FC = () => {
  return (
    <div className='flex flex-col mb-10 mt-16'>
      <h1 className='text-[#FFD700] text-5xl md:text-4xl mb-10 text-center font-robotoSerif'>Meet Our Cosmic Guides</h1>

      <div className='flex justify-between mx-auto lg:w-[90%] mb-20'>
        {/* left part */}
        <div className='flex flex-col gap-4 w-1/2'>
          <p className='mt-6'>Our team consists of seasoned astrologers, intuitive readers, and spiritual guides who have dedicated their lives to the study of the stars and the mysteries of the universe.</p>
          <p className='mb-10'>With years of experience and a profound connection to the cosmic energies, they are here to assist you on your path to self-discovery.</p>
          <Button>Explore Now</Button>
        </div>

        {/* right part */}

          <RightComp />

      </div>
    </div>
  );
}

export default Section1;
