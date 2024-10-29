import React from 'react';
import natalChart from '../../assets/NatalChart/NatalChartResult.png';
import sun from '../../assets/NatalChart/sun.png';
import moon from '../../assets/NatalChart/moon.png';
import arrow from '../../assets/NatalChart/arrowRight.png';

const NatalChart_Results: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center mt-14 mb-10 md:w-[80%] p-8 md:p-0 gap-4 mx-auto text-lg md:text-base">

      <h1 className="text-[#FFD700] font-robotoSerif w-full min-w-[300px] text-5xl md:text-3xl mb-6 z-30">
        Your Natal Chart is here:
      </h1>

      <div className="flex flex-col justify-between border border-dashed border-white w-full p-6 rounded-lg shadow-lg relative">

        {/* First Row - Sun Information */}
        <div className="flex justify-between w-full mb-6">
          {/* Left part */}
          <div className="flex gap-4 p-3 w-1/2">
            <img src={sun} alt="Sun Icon" className="h-6 p-1" />
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <p className="text-[#FFD700] text-2xl md:text-base">Sun</p>
                <img src={arrow} alt="Arrow Icon" className="h-4" />
                <p className="text-[#FFD700] text-2xl md:text-base">Scorpio</p>
              </div>
              <p className="w-full font-semibold ">Sun in Scorpio - THIRD HOUSE</p>


              <p className="text-lg md:text-sm text-gray-300">
              The sun determines your ego, identity, and "role" in life.It's the core of who you are, and is the sign you're most likely to already know. Your Sun is in Scorpio, meaning you have a fundamental urge to get to the bottom of things, which can at times lead you o be manipulative or power-hungry, 
              </p>
              
            </div>
            
          </div>

          {/* Right part - Natal Chart image */}
          <div className="w-1/2 flex justify-end relative">
            <img 
              src={natalChart} 
              alt="Natal Chart" 
              className="h-56 object-contain relative top-0 left-0 md:-top-28 md:-left-9 z-10" 
            />
          </div>
        </div>


        <p className="text-lg md:text-sm text-gray-300 px-12 mx-1 -mt-8 mb-10">
        but it comes down to an intense passion for authenticity, real intimacy, and the truth. It's in your third house, meaning you feel the need to distinguish yourself from others through the things you know and are familiar with.
        </p>

        {/* Second Row - Moon Information */}
        <div className="flex gap-4 p-3">
          <img src={moon} alt="Moon Icon" className="h-6 p-1" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <p className="text-[#FFD700] text-2xl md:text-base">Moon</p>
              <img src={arrow} alt="Arrow Icon" className="h-4" />
              <p className="text-[#FFD700] text-2xl md:text-base">Virgo</p>
            </div>
            <p className="w-full font-semibold">Moon in Virgo - FIRST HOUSE</p>
            <p className="text-lg md:text-sm text-gray-300">
              The moon rules your emotions, moods, and feelings. This is likely the sign you most think of yourself as, since it reflects your personality when you're alone or deeply comfortable. Your Moon is in Virgo, meaning your emotional self is analytical, responsible, and pacifying. A bundle of nerves, you struggle with a need to be pure that may come out in self-sacrificing or nitpicky tendencies.
            </p>
            <p className="text-lg md:text-sm text-gray-300">
              It's in your first house, meaning you find security and safety through your self and self-image—and, because it's your first house, your Moon in Virgo is hyper-present in your personality.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default NatalChart_Results;
