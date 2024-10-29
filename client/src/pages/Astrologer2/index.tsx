import React, { useState } from 'react';
import SearchFeature from '../Astrologers/search';
import astro1 from '../../assets/AstrologersPage/astrologer1.png';
import { useNavigate, useParams } from 'react-router-dom';
import Card from './Card';
import Button from '../../components/Button';

// Define the type for astrologer data
interface AstroItem {
  name: string;
  id: string;
  img: string;
  rating: string;
  category: string[];
  experience: string;
  available: boolean;
  description: string;
}

const Astrologer2: React.FC = () => {
  const params = useParams();
  console.log(params.id)

  // Sample astrologer data
  const astro: AstroItem = {
    name: 'Kathryn Murphy',
    id: 'dkfjlkfj',
    img: astro1,
    rating: '5.0',
    category: ['Psychic', 'Tarot'],
    experience: '8',
    available: true,
    description:
      "Kathryn Murphy is a gifted and intuitive astrologer with a deep connection to the cosmic energies that influence our lives. With years of experience and a passion for guiding others, she has become known for her compassionate and empathetic approach to astrology. She specializes in providing insights related to relationships, self-discovery, and personal growth. Whether you seek clarity in matters of love, career, or destiny, she is here to provide you with personalized guidance and cosmic wisdom.",
  };

  // State to track which button is clicked ('chat' or 'call') and the selected duration
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);

  const navigate = useNavigate();

  // Duration options
  const durationOptions = ['10 minutes','15 minutes', '30 minutes', '45 minutes', '60 minutes'];

  // Handle button click for chat or call
  const handleServiceClick = (service: string) => {
    setSelectedService(service);
    setSelectedDuration(null); // Reset duration when selecting a new service
  };

  // Handle duration selection
  const handleDurationSelect = (duration: string) => {
    setSelectedDuration(duration);
  };

  // handle payment button click
  const handlePaymentButton = () =>{
    console.log("selectedService: ",selectedService)
    console.log("selectedDuration: ",selectedDuration)

    // navigate
    navigate('/payment');
  }
  return (
    <div className="flex flex-col justify-between items-center mt-14 mb-10 p-8 md:p-0 md:w-[80%] gap-8 md:gap-4 mx-auto text-xl md:text-base">
      <SearchFeature />
      <Card astro={astro} />

      {/* Chat & Call Section */}
      <div className="flex text-black font-semibold gap-3 text-lg mt-6 mb-6">
        <button
          className={`h-14 w-36 rounded-l-full ${selectedService === 'chat' ? 'bg-[#FFBF00]' : 'bg-[#FFD700]'}`}
          onClick={() => handleServiceClick('chat')}
        >
          Chat
        </button>
        <button
          className={`h-14 w-36 rounded-r-full ${selectedService === 'call' ? 'bg-[#FFBF00]' : 'bg-[#FFD700]'}`}
          onClick={() => handleServiceClick('call')}
        >
          Call
        </button>
      </div>

      {/* Duration Dropdown */}
      {selectedService && (
        <div className="flex flex-col items-center">
          <h3 className="md:text-lg font-semibold mb-2">Choose Duration for {selectedService}</h3>
          <select
            value={selectedDuration || 'Select Duration'}
            onChange={(e) => handleDurationSelect(e.target.value)}
            className={`p-2 rounded-md border text-center ${
              selectedDuration
                ? "bg-[#1E1428] text-[#FFD700] border-[#898989] shadow-[0_0_10px_2px_#3B6381]"
                : "bg-white text-black border-gray-400"
            }`}
          >
            <option disabled>Select Duration</option>
            {durationOptions.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Payment Button */}
      {selectedDuration && (
        <Button children="Continue to Payment" className='mt-6 min-w-48 min-h-12' onClick={handlePaymentButton} />
      )}

      {/* About Section */}
      <div className="p-3 mt-6">
        <h2 className="text-[#FFD700] font-semibold mb-4">About {astro.name}</h2>
        <p className="text-lg md:text-sm w-full">{astro.description}</p>
      </div>
    </div>
  );
};

export default Astrologer2;
