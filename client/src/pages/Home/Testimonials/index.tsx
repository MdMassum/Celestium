import React from 'react';
import img1 from '../../../assets/testimonial/Ellipse 7.png'
import img2 from '../../../assets/testimonial/Ellipse 8.png'
import img3 from '../../../assets/testimonial/Ellipse 9.png'
import Card from './card';

interface people {
  label: string;
  img : string;
  rating: string;
  feedback: string;
}

const Testimonials: React.FC = () => {
  const peoples: people[] = [
    {
      label: 'Emma Jones',
      img : img1,
      rating: '5.0',
      feedback: "I've always been curious about astrology, and this app has exceeded my expectations. The daily horoscopes are eerily accurate, and I've found great insights into my life. Highly recommended!",
    },
    {
      label: 'Asher Robert',
      img : img2,
      rating: '5.0',
      feedback: "I had my natal chart read by one of the app's astrologers, and it was a mind-blowing experience. They explained things about my personality and life path that I had never considered. I'm a believer now!",
    },
    {
      label: 'William Mount',
      img : img3,
      rating: '5.0',
      feedback: "I had my natal chart read by one of the app's astrologers, and it was a mind-blowing experience. They explained things about my personality and life path that I had never considered. I'm a believer now!",
    },
    
  ];

  return (
    <div className="flex flex-col justify-between items-center mt-16">
      <h1 className='text-6xl md:text-5xl text-center text-[#FFD700] font-robotoSerif mb-8 tracking-wider'>Testimonials</h1>
      
      <div className="w-[90%] md:w-[80%] gap-8 flex overflow-x-scroll scrollbar-hide md:overflow-visible items-center justify-between mt-20 mb-20">
          {peoples.map((people, index) => (
            <Card key={index} people={people} />
          ))}
        </div>
      
    </div>
  );
};

export default Testimonials;
