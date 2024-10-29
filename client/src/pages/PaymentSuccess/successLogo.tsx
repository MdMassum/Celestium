import React from 'react';
import star from '../../assets/payment/paymentStar.png';
import rightIcon from '../../assets/payment/rightIcon.png';

const SuccessLogo: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center">
      
      {/* Star Icon as the background */}
      <img src={star} alt="Star Icon" className="relative w-40 h-40 md:w-32 md:h-32" />
      
      {/* Right Icon in the middle */}
      <img
        src={rightIcon}
        alt="Right Icon"
        className="absolute w-12 h-12"
      />
    </div>
  );
};

export default SuccessLogo;
