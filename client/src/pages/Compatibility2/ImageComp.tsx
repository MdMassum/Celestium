import React from 'react';
import leftImg from '../../assets/compatibility/left_logo.png';
import rightImg from '../../assets/compatibility/right_logo.png';
import Img from '../../assets/compatibility/img2.png';

interface Props {
  user: {
    name: string;
    horoscope: string;
  };
  partner: {
    name: string;
    horoscope: string;
  };
}

const ImageComp: React.FC<Props> = ({ user, partner }) => {
  return (
    <div className="relative flex items-center justify-center min-w-[400px] mx-auto w-full">
      {/* Left user details */}
      <div className="flex flex-col justify-center items-center text-black rounded-l-full py-2 px-4 -mr-36 mt-14 z-10">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-sm">{user.horoscope}</p>
      </div>

      {/* Left image */}
      <img src={leftImg} alt="Left icon" className="h-14 -mr-16 mt-16" />

      {/* Heart image in the center */}
      <img src={Img} alt="Heart symbol" className="h-48 z-20" />

      {/* Right user details */}
      <div className="flex flex-col justify-center items-center mt-14 text-black rounded-r-full py-2 px-4 z-10">
        <p className="text-lg font-semibold">{partner.name}</p>
        <p className="text-sm">{partner.horoscope}</p>
      </div>

      {/* Right image */}
      <img src={rightImg} alt="Right icon" className="h-14 -ml-36 mt-16" />
    </div>
  );
};

export default ImageComp;
