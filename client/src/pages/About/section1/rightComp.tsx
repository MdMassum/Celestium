import React from 'react';
import img1 from '../../../assets/Astrologers/Rectangle 4.png';
import img3 from '../../../assets/Astrologers/Rectangle 5.png';
import img2 from '../../../assets/Astrologers/Rectangle 6.png';

const RightComp: React.FC = () => {
  return (
    <div className='relative'>
      <img src={img1} alt="" className='h-40'/>
      <img src={img2} alt="" className='absolute h-40 top-28 left-14'/>
      <img src={img3} alt="" className='absolute h-40 -left-10'/>
    </div>
  );
}

export default RightComp;
