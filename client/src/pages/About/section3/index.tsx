import React from 'react';
import img1 from '../../../assets/about/hands.png';

const Section3: React.FC = () => {
  return (
    <div className='flex flex-col mb-16 mt-6'>

      {/* our commitment main content */}
      <div className='flex flex-col'>
        <h1 className='text-[#FFD700] text-5xl md:text-4xl mb-10 text-center font-robotoSerif'>Our Commitment</h1>
        <div className='flex justify-between lg:w-[90%] mt-6'>
          <p className='w-3/4'>
            At <span className='text-[#FFD700]'>Celestium</span>, we are committed to providing you with accurate, insightful, and compassionate guidance. We respect your unique journey and are here to support you every step of the way. Your cosmic well-being is our priority.
          </p>

          <img src={img1} alt="Commitment Illustration" className='h-24' />
        </div>
      </div>

      {/* Contact Us main content */}
      <div className='mt-16'>
        <h1 className='text-[#FFD700] text-5xl md:text-4xl mb-10 text-center font-robotoSerif'>Contact Us</h1>
        <div className='flex flex-col justify-between lg:w-[90%] mt-6 gap-2'>
          <p className='w-3/4'>
            Have questions, feedback, or inquiries? We're here to listen. Feel free to reach out to us anytime. Your cosmic journey is our shared adventure.
          </p>
          <p><span className='text-[#FFD700]'>Email</span>: info@celestium.abc</p>
          <p><span className='text-[#FFD700]'>Phone</span>: +91 11 22 33 9900</p>
          <p>
            Thank you for using <span className='text-[#FFD700]'>Celestium</span>. We hope you find our platform helpful and enjoy a positive experience on our site.
          </p>
        </div>
      </div>

      {/* Thank You main content */}
      <div className='mt-20 mb-10'>
        <h1 className='text-[#FFD700] text-5xl md:text-4xl mb-10 text-center font-robotoSerif'>Thank You</h1>
        <div className='flex flex-col justify-between lg:w-[90%] mt-6 gap-2'>
          <p className='w-3/4'>
            Thank you for choosing <span className='text-[#FFD700]'>Celestium</span> as your cosmic companion. We're honored to be a part of your journey of self-discovery and enlightenment.
          </p>
          <p>
            Together, we'll unlock the cosmos within and embrace the infinite possibilities that await.
          </p>
          <p>
            Welcome to a universe of endless wisdom and boundless potential. Your cosmic journey begins here.
          </p>

          <p className='mt-14'><span className='text-[#FFD700]'>Celestium</span> Team</p>
        </div>
      </div>

    </div>
  );
}

export default Section3;
