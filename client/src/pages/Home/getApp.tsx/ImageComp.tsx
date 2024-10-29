import React from 'react';
import left from '../../../assets/getApp/celestium1 1.png';
import mid from '../../../assets/getApp/celestium2 1.png';
import right from '../../../assets/getApp/celestium 3 1.png';

const ImageComp: React.FC = () => {
  return (
    <div className='flex mt-6'>
      <img src={left} alt="Left Image" className='h-40 md:h-64 mt-12 -mr-7 ' />
      <img src={mid} alt="Middle Image"  className='h-64 md:h-96 z-20 '/>
      <img src={right} alt="Right Image" className='h-40 md:h-64 mt-12 -ml-7'/>
    </div>
  );
}

export default ImageComp;
