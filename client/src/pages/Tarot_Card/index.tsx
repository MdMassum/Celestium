import React, { useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import cardPack from '../../assets/tarot/SHUFFLE.svg';
import tarotcard1 from '../../assets/tarot/tarotcard1.svg';
import tarotcard2 from '../../assets/tarot/tarotcard2.svg';
import tarotcard3 from '../../assets/tarot/tarotcard3.svg';
import cardBack from '../../assets/tarot/cardBack.svg';
import Button from '../../components/Button';

const Tarot_Card: React.FC = () => {
  const params = useParams();
  const [flippedCards, setFlippedCards] = useState([false, false, false]); // Track flipped status of each card
  const [isFlippedOnce, setIsFlippedOnce] = useState([false, false, false]); // Track if card has flipped once

  // Tarot card images to be displayed when the cards are flipped
  const tarotImages = [tarotcard1, tarotcard2, tarotcard3];

  const handleCardClick = (index: number) => {
    
    if (!isFlippedOnce[index]) {
      const newFlippedCards = [...flippedCards];
      newFlippedCards[index] = true; // Set card to flipped
      setFlippedCards(newFlippedCards);

      const newIsFlippedOnce = [...isFlippedOnce];
      newIsFlippedOnce[index] = true; // Set flag to indicate card has flipped once
      setIsFlippedOnce(newIsFlippedOnce);
    }
  };

  // Check if all cards are flipped
  const areAllCardsFlipped = flippedCards.every((card) => card === true);

  return (
    <div className="flex flex-col mt-16 mb-10 md:w-[80%] mx-auto p-10 md:p-0">
      <div className="flex flex-col md:flex-row">
        {/* Left part */}
        <div className="flex flex-col">
          <h1 className="text-[#FFD700] font-robotoSerif text-6xl font-light mb-8 min-w-[350px] tracking-wider">Tarot Card</h1>
          <p className="text-white text-lg ml-4 mb-8">
            Category : <span className="text-[#FFD700]">{params.id}</span>
          </p>
          <p className="text-white text-lg ml-4">Pick 3 cards</p>
          <img src={cardPack} alt="Card Pack" className="h-80" />
        </div>

        {/* Right part - Tarot cards */}
        <div className="flex justify-evenly items-center gap-6 flex-wrap">
          {flippedCards.map((isFlipped, index) => (
            <div
              key={index}
              className={`relative h-60 w-40 cursor-pointer perspective`}
              onClick={() => handleCardClick(index)}
            >
              {/* Inner container to handle the flipping effect */}
              <div
                className={`relative w-full h-full transition-transform duration-5000 ${
                  isFlipped ? 'rotate-y-180' : ''
                }`}
              >
                {/* Card Back */}
                <div className={`absolute backface-hidden w-full h-full`}>
                  <img src={cardBack} alt={`Card Back ${index + 1}`} className="w-full h-full" />
                </div>

                {/* Card Front (visible after flipping) */}
                <div
                  className={`absolute w-full h-full rotate-y-180 backface-hidden ${
                    isFlipped ? 'block' : 'hidden'
                  }`}
                >
                  <img src={tarotImages[index]} alt={`Card ${index + 1}`} className="w-full h-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Display button after all cards are flipped */}
      {areAllCardsFlipped && (
        <NavLink to={`/tarot_Result/${params.id}`} className="flex justify-center mt-10">
          <Button children='Interpret' />
        </NavLink>
      )}
    </div>
  );
};

export default Tarot_Card;
