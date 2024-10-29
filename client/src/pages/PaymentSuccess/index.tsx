import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import SuccessLogo from './successLogo';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () =>{

    //navigate to chat
    navigate('/');
  }
  return (
    <div className="flex flex-col justify-center items-center w-full mx-auto min-h-screen gap-3 mt-20 md:mt-0">

        <SuccessLogo />
        <h2 className="text-4xl md:text-2xl font-semibold">Done!</h2>
        <p className='text-lg md:text-base'>Payment Successful</p>
        <Button children="Continue" onClick={handleClick} className='mt-10'/>

    </div>
  );
};

export default PaymentSuccess;
