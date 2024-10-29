import React from 'react';
import moon from '../../assets/moon.png';
import Features from './Features';
import Button from '../../components/Button';
import Astrologers from './Astrologers';
import Testimonials from './Testimonials';
import GetApp from './getApp.tsx';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <div id='home' className="flex justify-between items-center mx-auto md:w-[80%] mt-24 mb-24 p-4 md:p-0 text-xl md:text-base">
        {/* Left Part (Moon Image) */}
        <div className='mr-5'>
          <img src={moon} alt="Moon" className="h-72 md:h-80" />
        </div>

        {/* Right Part (Text and Button) */}
        <div className="flex flex-col justify-center items-center max-w-[50%] ml-5">
          <h1 className="text-7xl font-astloch text-[#FFD700] tracking-wider">Celestium</h1>
          <p className="text-xl md:text-lg text-center text-white mt-10">
            Get personalized readings, connect with expert astrologers, and explore your cosmic destiny.
          </p>
          <a href="#features">
              <Button children="Explore Now" className='mt-14'/>
          </a>
        </div>
      </div>
        <Features/>
        <Astrologers/>
        <Testimonials/>
        <GetApp/>
    </div>
  );
};

export default Home;
