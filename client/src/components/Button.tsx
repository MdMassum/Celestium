import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  return (
    <button type={type} className={`w-[180px] md:w-[120px] py-3 md:py-2 rounded-lg bg-gradient-to-r from-[#06061A] to-[#525280] text-white font-semibold border border-[#8C8CCE] shadow-[0_0_10px_2px_#484B53] hover:bg-[#1a1a48] transition-all text-lg md:text-sm ${className}`} {...props} >
      {children}
    </button>
  );
};

export default Button;
