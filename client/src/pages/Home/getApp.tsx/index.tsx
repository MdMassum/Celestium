import React from 'react';
import gplay from '../../../assets/getApp/ANDROID.png';
import ImageComp from './ImageComp';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const GetApp: React.FC = () => {
  return (
    <div className='flex flex-col mb-10 p-6 md:p-0 md:w-[80%] mx-auto mt-10 text-xl md:text-base'>
        <div className='flex justify-between items-center mx-auto'>
            {/* left part */}
        <div className='flex flex-col w-1/2'>

            <h2 className='font-robotoSerif text-5xl lg:text-6xl text-[#FFD700] min-w-[530px] z-20'>Get Celestium App</h2>
            <h1 className='font-robotoSerif text-6xl lg:text-7xl text-[#FFD700] mb-10 min-w-96'>Mobile App</h1>
            <p className='w-[350px] mb-10'>Unlock the magic of the stars by downloading our astrology app today!</p>
            <Link to="#"><img src={gplay} alt="Google Play Store" className='h-32 w-40 md:h-28 md:w-36'/></Link>

            </div>

            {/* right part */}
            <ImageComp />
        </div>
      

      <p className='text-center text-white mt-16 mb-6'>Subscribe to our Newsletter for  Latest  updates.</p>
      <div className='flex items-end text-white border bg-[#02021D] border-[#6f6cfa] rounded-lg w-[80%] md:w-[60%] md:h-14 py-3 md:py-2 px-4 mx-auto mb-20'>
      <input type="email"  placeholder='Your Email-ID' className='outline-none h-10 w-full bg-[#02021D]' />
      <Button children="Subscribe"/>
      </div>
      
    </div>
  );
}

export default GetApp;
