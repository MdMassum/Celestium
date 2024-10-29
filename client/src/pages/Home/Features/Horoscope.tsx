import React from 'react';
import outerImg from '../../../assets/horoscope2.png';
import innerImg from '../../../assets/horoscope1.png';

const Horoscope: React.FC = () => {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80">
      {/* Outer Image */}
      <img src={outerImg} alt="Outer Horoscope" className="absolute w-full h-full " />
      
      {/* Inner Image */}
      <img src={innerImg} alt="Inner Horoscope" className="absolute inset-0 h-36 w-36 md:h-48 md:w-48 m-auto" />
    </div>
  );
};

export default Horoscope;
