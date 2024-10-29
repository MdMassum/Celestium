import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import tarotcard1 from '../../assets/tarot/tarotcard1.svg';
import tarotcard2 from '../../assets/tarot/tarotcard2.svg';
import tarotcard3 from '../../assets/tarot/tarotcard3.svg';

const Tarot_Interpretation: React.FC = () => {

  const params = useParams();
  const [selectedCategory, setSelectedCategory] = useState<'interpretations' | 'cards'>('interpretations');

  const handlePalmChange = (val: 'interpretations' | 'cards') => {
    setSelectedCategory(val);
  };

  return (
    <div className="flex flex-col mt-16 mb-10 md:w-[80%] mx-auto p-10 md:p-0 text-lg md:text-base">

        <h2 className="text-[#FFD700] text-6xl font-robotoSerif mb-10">Tarot Interpretation</h2>
        <p className="text-white text-xl md:text-lg mb-8 ml-2">
            Category : <span className="text-[#FFD700]">{params.id}</span>
        </p>

        {/* card images */}
        <div className='flex justify-evenly mb-10'>
            <img src={tarotcard1} alt="" className='h-60' />
            <img src={tarotcard2} alt="" className='h-60'/>
            <img src={tarotcard3} alt="" className='h-60'/>

        </div>

      <div className='flex flex-col p-8 border border-dashed'>

            <div className="flex justify-between items-center mb-6 ">
                <button
                className={`w-1/2 p-4 border-b font-normal ${selectedCategory === 'interpretations' ? 'text-[#FFD700] border-[#FFD700]' : 'text-gray-400   border-dashed'}`}
                onClick={() => handlePalmChange('interpretations')}
                >
                Interpretations
                </button>
                <button
                className={`w-1/2 p-4 border-b font-normal ${selectedCategory === 'cards' ? 'text-[#FFD700] border-[#FFD700]' : 'text-gray-400   border-dashed'}`}
                onClick={() => handlePalmChange('cards')}
                >
                Cards
                </button>
            </div>

      {selectedCategory === 'interpretations' ? (
        <div className="space-y-8 flex flex-col">
          
            <p className="text-gray-300 text-lg md:text-sm">The combination of these cards suggests a complex and potentially challenging situation in the relationship.</p>

            <p className="text-gray-300 text-lg md:text-sm"> There may be hidden emotions, unresolved conflicts, and a need for clear communication. The High Priestess indicates that trusting your intuition and seeking deeper understanding can help navigate through these challenges.</p>

            <p className="text-gray-300 text-lg md:text-sm">The overall message is to address any pain, misunderstandings, or uncertainties in the relationship and to focus on open and honest communication for healing and growth.</p>

        </div>
      ) : (
        <div className="flex flex-col space-y-10">
            <div>
                <h3 className="text-[#FFD700] mb-2">The Moon</h3>
                <p className="text-gray-300 text-lg md:text-sm">
                The Moon The Moon card indicates that there might be hidden emotions, uncertainties, or illusions within the relationship. It suggests that things may not be as they seem and encourages you to explore your intuition and inner feelings. This card advises open communication and addressing any doubts or insecurities that might be causing confusion.
                </p>
            </div>

            <div>
                <h3 className="text-[#FFD700] mb-2">Three Of Swords</h3>
                <p className="text-gray-300 text-lg md:text-sm">The Three of Swords signifies heartbreak, emotional pain, or a sense of sorrow within the relationship. It could suggest that there have been misunderstandings or conflicts that have caused hurt. This card encourages you to address the pain and work towards healing and resolution. It might also symbolize the need to let go of past wounds to move forward.</p>
            </div>

            <div>
                <h3 className="text-[#FFD700] mb-2">The High Priestess</h3>
                <p className="text-gray-300 text-lg md:text-sm">The High Priestess card represents intuition, secrets, and the subconscious. It suggests that there might be hidden aspects to the relationship that need to be explored. This card encourages you to trust your instincts and delve deeper into your partner's feelings and intentions. It also advises taking time for introspection and self-discovery.</p>
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Tarot_Interpretation;
