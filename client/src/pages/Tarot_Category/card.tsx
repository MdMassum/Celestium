import React from 'react';

interface CardProps {
  tarot: {
    name: string;
    img: string;
    id: string;
    description: string;
  };
  isActive?: boolean;
}

const Card: React.FC<CardProps> = ({ tarot, isActive }) => {
  return (
    <div
      className={`flex flex-col justify-evenly items-center w-[200px] h-[270px] p-2 rounded-lg shadow-lg mx-auto font-light text-center text-lg md:text-sm gap-3 border transition-transform duration-500 ease-in-out
      ${isActive ? 'border-[#AB9000] bg-[#390B0B] scale-105' : 'border-white  bg-[#221936] opacity-95'}`}
    >
      <p className={`font-light font-robotoSerif text-lg ${isActive ? 'text-yellow-400' : 'text-white'}`}>
        {tarot.name}
      </p>
      {/* Conditionally render image */}
      {isActive ? (
        <img src={tarot.img} alt={tarot.name} className="h-12 w-12" />
      ) : (
        <div className="h-12 w-12"></div> // Placeholder when image is hidden
      )}
      <p className={`text-xs text-white}`}>{tarot.description}</p>
    </div>
  );
};

export default Card;
