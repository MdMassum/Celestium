import React from 'react';
import img1 from '../../../assets/horoscope1.png';
import img2 from '../../../assets/about/man astronaut.png';
import img3 from '../../../assets/about/palm2.png';
import img4 from '../../../assets/about/card.png';
import img5 from '../../../assets/about/infinity.png';

const Section2: React.FC = () => {
  return (
    <div className='flex flex-col mb-10 mt-6'>
      <h1 className='text-[#FFD700] text-6xl md:text-4xl mb-10 text-center font-robotoSerif'>What we Offer</h1>

      {/* component 1 */}
      <div className='flex justify-between  mx-auto lg:w-[90%] mb-8'>
        {/* left part */}
        <div className='flex w-2/3 mt-4'>
          <p>
            • <span className='text-[#FFD700]'>Daily Horoscopes:</span> Start your day with personalized horoscopes that offer insights into your daily life, challenges, and opportunities. Our daily horoscopes are carefully crafted to provide guidance and clarity.
          </p>
        </div>
        {/* right part */}
        <img src={img1} alt="Daily Horoscopes" className='h-32'/>
      </div>

      {/* component 2 */}
      <div className='flex justify-between mx-auto lg:w-[90%] mb-8'>
        {/* left part */}
        <img src={img2} alt="Expert Astrologers" className='h-32' />
        {/* right part */}
        <div className='flex w-2/3 mt-4 text-right'>
          <p>
            • <span className='text-[#FFD700]'>Expert Astrologers:</span> Connect with our expert astrologers for in-depth readings, personal consultations, and cosmic wisdom. Our astrologers are here to answer your questions, offer guidance, and help you make informed decisions.
          </p>
        </div>
      </div>

      {/* component 3 */}
      <div className='flex justify-between  mx-auto lg:w-[90%] mb-8'>
        {/* left part */}
        <div className='flex w-2/3 mt-4'>
          <p>
            • <span className='text-[#FFD700]'>Palmistry Insights:</span> Discover the secrets hidden in your hands with our palmistry readings. Our experts will decode the lines and mounts on your palms, offering a glimpse into your unique personality, strengths, and challenges.
          </p>
        </div>
        {/* right part */}
        <img src={img3} alt="Palmistry Insights" className='h-32'/>
      </div>

      {/* component 4 */}
      <div className='flex justify-between mx-auto lg:w-[90%] mb-8'>
        {/* left part */}
        <img src={img4} alt="Tarot Readings" className='h-32' />
        {/* right part */}
        <div className='flex w-2/3 mt-4 text-right'>
          <p>
            • <span className='text-[#FFD700]'>Tarot Readings:</span> Dive into the world of Tarot cards with our skilled readers. Explore the symbolism, meanings, and guidance that the Tarot offers. Whether you seek clarity on love, career, or personal growth, our Tarot readings can provide profound insights.
          </p>
        </div>
      </div>

      {/* component 5 */}
      <div className='flex justify-between  mx-auto lg:w-[90%] mb-8'>
        {/* left part */}
        <div className='flex w-2/3 mt-4'>
          <p>
            • <span className='text-[#FFD700]'>Compatibility Analysis:</span> Understand your relationships on a deeper level with our compatibility feature. Whether you're seeking love, friendship, or professional connections, our compatibility analysis can help you build stronger, more meaningful relationships.
          </p>
        </div>
        {/* right part */}
        <img src={img5} alt="Compatibility Analysis" className='h-32'/>
      </div>
    </div>
  );
}

export default Section2;
