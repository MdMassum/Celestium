import React, { useState } from 'react';

const PalmResult: React.FC = () => {
  const [selectedPalm, setSelectedPalm] = useState<'right' | 'left'>('right');

  const handlePalmChange = (palm: 'right' | 'left') => {
    setSelectedPalm(palm);
  };

  return (
    <div className="rounded-lg shadow-lg md:w-[80%] p-8 md:p-0 mx-auto text-lg md:text-base">
      <h2 className="text-[#FFD700] text-5xl font-robotoSerif mb-8 mt-10">Your Palmistry Results:</h2>

      <div className='flex flex-col p-8 border border-dashed'>

            <div className="flex justify-between items-center mb-6 ">
                <button
                className={`w-1/2 p-4 border-b font-normal ${selectedPalm === 'right' ? 'text-[#FFD700] border-[#FFD700]' : 'text-gray-400   border-dashed'}`}
                onClick={() => handlePalmChange('right')}
                >
                Right Palm
                </button>
                <button
                className={`w-1/2 p-4 border-b font-normal ${selectedPalm === 'left' ? 'text-[#FFD700] border-[#FFD700]' : 'text-gray-400   border-dashed'}`}
                onClick={() => handlePalmChange('left')}
                >
                Left Palm
                </button>
            </div>

      {selectedPalm === 'right' ? (
        <div className="space-y-8">
          <div>
            <h3 className="text-[#FFD700]">Heart line <span className='text-[#B7AECD]'> (Right hand): </span></h3>
            <p className="text-gray-300 text-lg md:text-sm">
            Your heart line on the right hand indicates that you're proactive in matters of the heart. You take initiative in forming relationships and expressing your emotions. Your romantic nature is balanced by practicality, and you seek genuine connections that bring joy and fulfillment to your life.
            </p>
          </div>
          <div>
          <h3 className="text-[#FFD700]">Head line <span className='text-[#B7AECD]'> (Right hand): </span></h3>
            <p className="text-gray-300 text-lg md:text-sm">
            Your head line on the right hand indicates a balanced approach to thinking and decision-making. You're rational and logical in your thoughts, and you strive for clarity and understanding. Your problem-solving skills are strong, and you approach challenges with a clear and focused mind.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <div>
          <h3 className="text-[#FFD700]">Heart line <span className='text-[#B7AECD]'> (Left hand): </span></h3>
            <p className="text-gray-300 text-lg md:text-sm">
            Your heart line on the left hand suggests that you possess deep sensitivity and empathy. You're attuned to your emotions and those of others, making you a compassionate and caring individual. Relationships play a significant role in your life, and you tend to prioritize emotional connections.
            </p>
          </div>
          <div>
          <h3 className="text-[#FFD700]">Head line <span className='text-[#B7AECD]'> (Left hand): </span></h3>
            <p className="text-gray-300 text-lg md:text-sm">
            Your head line on the left hand indicates a balanced approach to thinking and decision-making. You're rational and logical in your thoughts, and you strive for clarity and understanding. Your problem-solving skills are strong, and you approach challenges with a clear and focused mind.
            </p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default PalmResult;
