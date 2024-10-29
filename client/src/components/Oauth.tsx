import React, { FC, ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../assets/Google.png';

interface OauthProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Oauth: FC<OauthProps> = ({
  children,
  type = 'button',
  className = '',
  ...props
}) => {
  const navigate = useNavigate();

  const handleGoogleClick = async () => {
    try {
      // API call for Google sign-in
      navigate('/launch');

    } catch (error: unknown) {
      
      if (error instanceof Error) {
        console.error("Could not sign in with Google", error.message);
      } else {
        console.error("An unknown error occurred during Google sign-in");
      }
    }
  };

  return (
    <button
      type={type}
      onClick={handleGoogleClick}
      className={`w-full min-w-96 min-h-16 md:min-h-10 md:min-w-80 bg-[#f5f5f5] hover:bg-[#ebebeb] cursor-pointer flex justify-center items-center py-3 md:py-2 rounded-md shadow-sm transition-all mb-3 text-3xl md:text-base ${className}`}
      {...props}
    >
      <img src={google} alt="Google" className="h-6 mr-3" />
      <span className="font-semibold text-slate-800">{children}</span>
    </button>
  );
};

export default Oauth;
