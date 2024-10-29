import React from 'react';
import star from '../../../assets/Astrologers/Star 12.png'; // Star icon for rating
import comma from '../../../assets/testimonial/comma.png'; // Quotation mark image for feedback

interface PeopleProps {
  people: {
    label: string;
    img: string;
    rating: string;
    feedback: string;
  };
}

const Card: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div className="relative bg-[#1E1E43] border border-[#6767AD] shadow-[0_0_10px_2px_rgba(111,108,250,0.4)] text-white p-1 rounded-lg mx-auto w-64 min-w-56 ">
      {/* Profile Image */}
      <div className="absolute md:-top-10 left-10 md:left-1/4 transform -translate-x-1/2">
        <img 
          src={people.img} 
          alt={`${people.label} image`} 
          className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover"
        />
      </div>

      {/* Card Content */}
      <div className="mt-2">
        {/* Name and Rating */}
        <p className="text-right font-semibold text-[#FFD700] mr-7">{people.label}</p>
        <div className="flex justify-end items-center mt-1 mr-20">
          <img src={star} alt="Star rating" className='h-3 mr-1' />
          <p className='text-sm font-medium pr-2'>{people.rating}</p>
        </div>

        {/* Feedback */}
        <div className="relative mt-4 p-4 rounded-lg">
          <img src={comma} alt="Comma icon" className="absolute left-2 top-2 h-4 w-4" />
          <p className="text-sm text-gray-300 pl-6 line-clamp-6">
            {people.feedback}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
