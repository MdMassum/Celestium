import React, { FC, ButtonHTMLAttributes } from 'react';
import vector from '../assets/Vector 190.png'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button2: FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  return (

    <button type={type} 
    className={`flex justify-between items-center min-w-[240px] md:min-w-[210px] bg-gradient-to-r from-[#0d0d2e] to-[#0f0f34] text-white py-4 md:py-2 px-6 rounded-lg border border-[#8C8CCE] shadow-[0_0_10px_2px_rgba(111,108,250,0.4)] hover:bg-[#1a1a48] text-lg md:text-base ${className}`} {...props} >

        <span className="text-[#FFD700]">{children}</span>
        <img src={vector} alt="vector" className="h-5" />
      
    </button>

  );
};

export default Button2;
