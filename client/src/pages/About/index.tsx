import React from 'react';
import star from '../../assets/Stars.png';
import eye from '../../assets/eye.png';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';

// Define the type for the props if needed (currently there are no props)
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <div className='flex flex-col min-h-screen md:w-[80%] p-8 md:p-0 mx-auto mt-28 text-white text-xl md:text-base'>
      
      {/* main content welcome */}
      <div className='flex flex-col gap-16'>
        <div className='flex items-center justify-between'>
          {/* left part */}
          <div className='flex flex-col text-[#FFD700]'>
            <h1 className='font-robotoSerif text-6xl tracking-wider'>Welcome To</h1>
            <h1 className='font-astloch text-7xl mt-8 tracking-wider'>Celestium</h1>
          </div>
          {/* right part */}
          <div>
            <img src={star} alt="star" className='h-40' />
          </div>
        </div>

        <p className='w-[80%]'>
          Where the mysteries of the universe meet the depths of human understanding. We are passionate about astrology, divination, and self-discovery, and our mission is to empower individuals on their cosmic journey.
        </p>
      </div>

      {/* main content cosmic vision */}
      <div className='flex flex-col mb-10 mt-36'>
        <h1 className='text-[#FFD700] text-6xl md:text-4xl mb-16 text-center font-robotoSerif'>Our Cosmic Vision</h1>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col w-1/2'>
            <p className='mb-8'>
              At <span className='text-[#FFD700]'>Celestium</span>, we believe that the cosmos hold the keys to unlocking the full potential of the human spirit.
            </p>
            <p>
              We are dedicated to providing you with the tools, insights, and guidance you need to navigate the cosmic labyrinth and discover your true self.
            </p>
          </div>
          
          <img src={eye} alt="eye" className='h-32 md:h-24' />
        </div>
      </div>

      <Section1 />
      <Section2 />
      <Section3 />

    </div>
  );
};

export default About;
