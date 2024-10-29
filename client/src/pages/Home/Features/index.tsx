import React from 'react';
import Horoscope from './Horoscope';
import palm from '../../../assets/palm.png'
import fig1 from '../../../assets/detailedInsight1.png'
import fig2 from '../../../assets/detailedInsight2.png'
import fig3 from '../../../assets/detailedInsight3.png'
import fig4 from '../../../assets/detailedInsight4.png'
import Button from '../../../components/Button';
import { NavLink } from 'react-router-dom';

const Features: React.FC = () => {
  return (
    <div id='features' className="flex flex-col min-h-screen p-6 md:p-0 mx-auto text-xl md:text-base">
        <h1 className='text-center text-7xl md:text-5xl text-[#FFD700] font-robotoSerif tracking-wider'>Features</h1>

        {/* Main Content Horoscope*/}
        <div className="flex justify-between items-center mx-auto md:w-[80%] mt-24 mb-10">

        {/* Left Part (Horoscope) */}
        <div className="flex flex-col justify-center max-w-[50%] mr-5">
          <h1 className="text-5xl md:text-4xl text-[#B7AECD] font-semibold mb-6 tracking-wider">Horoscope</h1>
          <div className='flex'>
            <span className='font-semibold text-[#F5F5F5]'>Your Cosmic Compass : <span className='text-[#E1E1E1] font-light'> Daily Horoscopes</span></span>
            
          </div>
          <p className="text-lg text-[#E1E1E1] mt-10 font-roboto">
          Welcome to the enchanting world of Daily Horoscopes where the stars align to illuminate your path each day. 🌟
          </p>
          <NavLink to="/features/horoscope"><Button children="Get Started" className='mt-14'/></NavLink>
          
        </div>

        {/* Right Part (Text and Button) */}
        <div className='ml-5'>
          <Horoscope/>
        </div>

      </div>

      {/* Main Content Astrologers*/}
      <div className="flex justify-between items-center mx-auto md:w-[80%] mt-28 mb-10">

        {/* Left Part (palm Image) */}
        <div className='mr-5 max-w-[50%]'>
          <img src={palm} alt="" className='h-72 md:h-80' />
        </div>

        {/* Right Part (Text and Button) */}
        <div className="flex flex-col justify-center items-end text-right max-w-[50%] ml-5 text-xl md:text-base">
          <h1 className='text-5xl md:text-4xl text-[#B7AECD] font-semibold mb-6 tracking-wider'>Astrologers</h1>
          <div className='flex'>
            <span className='font-semibold text-[#F5F5F5]'>Expert Astrologers : <span className='text-[#E1E1E1] font-light'> Guiding You to Cosmic Insights</span></span>
            
          </div>
          <p className="text-md text-[#E1E1E1] mt-10 font-roboto md:max-w-[80%]">
            Connect with experienced astrologers for insights into love, career, and more. Get ready to unlock the universe's secret on your behalf.
          </p>
          
            <Button children="Connect with Astrologer" className="mt-14 min-w-[220px] min-h-12"/>

        </div>
      </div>

      {/* Main Content Detailed Insigts*/}
      <div className="flex flex-col justify-start mx-auto md:w-[80%] mt-28 mb-10">

          <h1 className='text-5xl md:text-4xl text-[#B7AECD] font-semibold mb-6 tracking-wider'>Detailed Insights</h1>
          <p className="text-md text-[#E1E1E1] mt-10 font-roboto max-w-[75%] ">Explore in-depth readings like Tarot, Natal charts, Compatibility and Palmistry</p>
          <p className="text-md text-[#E1E1E1] mt-10 max-w-[75%]">In the heart of <span className='text-[#FFD700]'>Celestium</span> lies a treasure trove of mystical arts, offering you profound insights into your life's tapestry. 🌌</p>

          <div className='flex justify-between items-center mt-16 mb-24'>

            <img src={fig1} alt="" className='h-32' />
            <img src={fig2} alt="" className='h-32' />
            <img src={fig3} alt="" className='h-32' />
            <img src={fig4} alt="" className='h-32' />

          </div>
      </div>
      </div>

  );
};

export default Features;
