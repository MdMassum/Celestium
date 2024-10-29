import React, { useState } from 'react';
import relation from '../../assets/tarot/relationIcon.svg';
import spiritual from '../../assets/tarot/spiritualIcon.svg';
import health from '../../assets/tarot/health.svg';
import dailyInsight from '../../assets/tarot/dailyInsight.svg';
import career from '../../assets/tarot/careerIcon.svg';
import decision from '../../assets/tarot/decisionIcon.svg';
import family from '../../assets/tarot/family.svg';
import healing from '../../assets/tarot/emotionalHealing.svg';
import leftArrow from '../../assets/tarot/leftArrow.svg';
import rightArrow from '../../assets/tarot/Vector 187.svg';
import { NavLink } from 'react-router-dom';
import Card from './card'; // Import the Card component

interface CardData {
  id: string;
  name: string;
  img: string;
  description: string;
}

const TarotCategory: React.FC = () => {
  const tarotCategory: CardData[] = [
    { id: '1', name: 'Relationships', img: relation, description: 'Your daily, weekly & monthly horoscope' },
    { id: '2', name: 'Spirituality', img: spiritual, description: 'Your daily, weekly & monthly horoscope' },
    { id: '3', name: 'Health & Wellness', img: health, description: 'Your daily, weekly & monthly horoscope' },
    { id: '4', name: 'Daily Insights', img: dailyInsight, description: 'Your daily, weekly & monthly horoscope' },
    { id: '5', name: 'Career & Finance', img: career, description: 'Your daily, weekly & monthly horoscope' },
    { id: '6', name: 'Life Path & Decisions', img: decision, description: 'Your daily, weekly & monthly horoscope' },
    { id: '7', name: 'Emotional Healing', img: healing, description: 'Your daily, weekly & monthly horoscope' },
    { id: '8', name: 'Family & Home', img: family, description: 'Your daily, weekly & monthly horoscope' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Index to track the start of the visible cards

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tarotCategory.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tarotCategory.length) % tarotCategory.length);
  };

  const getVisibleCards = () => {
    // Return a fixed number of visible cards based on the currentIndex
    const visibleCards = tarotCategory.slice(currentIndex, currentIndex + 5);
    return visibleCards.length < 5
      ? visibleCards.concat(tarotCategory.slice(0, 5 - visibleCards.length))
      : visibleCards;
  };

  return (
    <div className="flex flex-col mt-20 md:mt-8 mb-10 md:w-[80%] mx-auto p-10 md:p-0">
      <h1 className="text-[#FFD700] font-robotoSerif text-6xl font-light mt-8 md:mt-0 mb-16 md:mb-2 tracking-wider">Tarot Card</h1>
      <p className="text-white  text-xl md:text-lg ml-4">Pick Category</p>

      {/* Card Container */}
      <div className="relative overflow-hidden w-full">
        {/* Cards Row */}
        <div className="flex justify-center items-center space-x-8 min-h-[300px]">
            {getVisibleCards().map((tarot, index) => {
                const isActive = index === 2; // The middle card (index 2 in visible cards) is active

                return (
                <NavLink
                    key={tarot.id}
                    to={isActive ? `/tarotCard/${tarot.name}` : '#'}
                    className={`transition-transform duration-500 ease-in-out ${
                    isActive ? 'scale-105' : 'scale-90 opacity-70'
                    }`}
                >
                    {/* Card component */}
                    <Card tarot={tarot} isActive={isActive} />
                </NavLink>
                );
            })}
        </div>

        {/* Arrow Buttons*/}
        <div className="flex justify-center mt-10 md:mt-4 space-x-12">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="p-5 bg-[#221936] rounded-full">
            <img src={leftArrow} alt="left arrow" className="h-5" />
          </button>

          {/* Right Arrow */}
          <button onClick={handleNext} className="p-5 bg-[#221936] rounded-full">
            <img src={rightArrow} alt="right arrow" className="h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TarotCategory;
