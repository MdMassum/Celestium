import React, { useState } from 'react'
import PieceStar from '../../assets/horoscope/PiesceStart.svg'
import heartIcon from '../../assets/horoscope/heartIcon.svg'
import careerIcon from '../../assets/horoscope/careerIcon.svg'
import healthIcon from '../../assets/horoscope/healthIcon.svg'
import gem from '../../assets/horoscope/gemIcon.svg'
import aqua from '../../assets/horoscope/aqua.svg'

const HoroscopeResult:React.FC = () => {

  // State to manage the current displayed date
  const [currentDate, setCurrentDate] = useState(new Date());
  // State to track which button is active ("Yesterday", "Today", or "Tomorrow")
  const [selectedButton, setSelectedButton] = useState('Today');

  // Function to change the date based on the number of days
  const changeDate = (targetButton: string) => {
    let daysToAdd = 0;

    // Determine the number of days to adjust based on the target button and current selected button
    if (selectedButton === 'Yesterday' && targetButton === 'Today') {
      daysToAdd = 1;
    } else if (selectedButton === 'Today' && targetButton === 'Yesterday') {
      daysToAdd = -1;
    } else if (selectedButton === 'Yesterday' && targetButton === 'Tomorrow') {
      daysToAdd = 2; // Move 2 days forward
    } else if (selectedButton === 'Tomorrow' && targetButton === 'Today') {
      daysToAdd = -1;
    } else if (selectedButton === 'Tomorrow' && targetButton === 'Yesterday') {
      daysToAdd = -2; // Move 2 days back
    } else if (selectedButton === 'Today' && targetButton === 'Tomorrow') {
      daysToAdd = 1;
    }

    // Update the date state and the selected button state
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setDate(prevDate.getDate() + daysToAdd);
      return newDate;
    });
    setSelectedButton(targetButton);
  };

  // Determine which day of the week it is (0 = Sunday, 1 = Monday, etc.)
  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const today = currentDate.getDay();
  console.log(today);

  // Format the date in "DD Month YYYY" format
  const formattedDate = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex flex-col items-center mt-10 mb-10 md:w-[80%] gap-8 mx-auto my-auto p-8 md:p-0 text-lg md:text-sm">

        <div className='flex w-full justify-between items-center gap-10'>
            {/* leftpart */}
            <div className='flex flex-col w-1/2 text-lg md:text-sm gap-4'>
                <h1 className='text-[#FFD700] font-robotoSerif w-full min-w-[200px] text-6xl font-light mb-6 tracking-widest'>
                    Pisces
                </h1>

                {/* Days of the week indicator */}
                <div className="flex space-x-2 mb-2">
                    {daysOfWeek.map((day, index) => (
                    <div
                        key={index}
                        className={`w-10 h-10 flex items-center justify-center rounded-full ${
                        today === index ? 'bg-[#FFD700] text-black font-semibold' : 'bg-[#070E39]'
                        }`}
                    >
                        {day}
                    </div>
                    ))}
                </div>
                
                {/* Current date display */}
                <div className="text-lg mb-2">Today: {formattedDate}</div>
                
                {/* Button group for Yesterday, Today, Tomorrow */}
                <div className="flex space-x-4 font-semibold text-sm">
                    {/* Yesterday Button */}
                    <button
                    className={`px-4 py-2 border rounded-md border-[#8C8CCE] ${
                        selectedButton === 'Yesterday' ? 'bg-[#FFD700] text-black  font-semibold' : 'bg-[#070E39]'
                    }`}
                    onClick={() => changeDate('Yesterday')}
                    disabled={selectedButton === 'Yesterday'}
                    >
                    Yesterday
                    </button>
                    
                    {/* Today Button */}
                    <button
                    className={`px-7 py-2  border rounded-md border-[#8C8CCE] ${
                        selectedButton === 'Today' ? 'bg-[#FFD700] text-black  font-semibold' : 'bg-[#070E39]'
                    }`}
                    onClick={() => {
                        setCurrentDate(new Date());
                        setSelectedButton('Today');
                    }}
                    disabled={selectedButton === 'Today'}
                    >
                    Today
                    </button>
                    
                    {/* Tomorrow Button */}
                    <button
                    className={`px-4 py-2 border rounded-md border-[#8C8CCE] ${
                        selectedButton === 'Tomorrow' ? 'bg-[#FFD700] text-black  font-semibold' : 'bg-[#070E39]'
                    }`}
                    onClick={() => changeDate('Tomorrow')}
                    disabled={selectedButton === 'Tomorrow'}
                    >
                    Tomorrow
                    </button>
                </div>

                <div className='mt-4'>
                    <p className='text-[#FFD700] text-lg font-semibold font-robotoSerif'>{formattedDate}</p>
                    <p>Today, you are in the perfect state of mind to go with the flow and let your intuition guide you. Trust your inner voice and see where it takes you. There are opportunities on the horizon, and you will be in the right place at the right time if you remain open and adaptable.</p>
                </div>


            </div>
            {/* right part */}
            <div className='w-1/2'>
                <img src={PieceStar} alt="" className='h-60' />
            </div>
        </div>

         {/* love part */}
        <div>
            <div className='flex gap-2 items-center'>
                <p className='text-[#FFD700] font-semibold text-xl md:text-lg'>Pisces Love Horoscope Today:</p>
                <img src={heartIcon} alt="" className='h-10'/>
            </div>
            
            <p>n matters of the heart, your intuition will be particularly strong today. If you have been feeling uncertain in your relationship, trust your gut and have an open and honest conversation with your partner. If you are single, don't be afraid to put yourself out there and be open to unexpected connections</p>
        </div>

        {/* career */}
        <div>
            <div className='flex gap-2 items-center'>
                <p className='text-[#FFD700] font-semibold text-xl md:text-lg mb-2'>Pisces Career Horoscope Today:</p>
                <img src={careerIcon} alt="" className='h-6'/>
            </div>
            
            <p>This is a great time for creative ventures and following your passions. If you have been feeling uninspired in your work, now is the time to seek out new projects or collaborations that excite you. Trust your intuition and let your creativity flow.</p>
        </div>

        {/* health */}
        <div className='mb-8'>
            <div className='flex gap-2 items-center'>
                <p className='text-[#FFD700] font-semibold text-xl md:text-lg mb-2'>Pisces Health Horoscope Today:</p>
                <img src={healthIcon} alt="" className='h-6'/>
            </div>
            
            <p>Your body may be asking for some extra attention today, so take the time to rest and recharge. Yoga, meditation, or a long bath can help you relax and rejuvenate. Listen to your body and prioritize self-care. Remember to prioritize your mental and emotional well-being, as it will lead to overall better health.</p>
        </div>

        <div className='bg-[#12122F] w-[80%] h-36 flex flex-col font-semibold text-sm md:text-base'>

            <div className='flex p-6'>

                <span className='w-1/2'>Lucky Number : <span className='text-[#FFD700]'>6</span></span>

                <span className='flex items-center w-1/2 gap-1'>Lucky Color : 
                    <span className='text-[#FFD700]'>Aquamarine</span>
                    <img src={aqua} alt="" className='h-8'/>
                </span>

            </div>

            <div className='flex p-6'>

                <span className='flex items-center w-1/2 gap-1'>Lucky Stone : 
                    <span className='text-[#FFD700]'>Red Coral  </span>
                    <img src={gem} alt="" className='h-5 text-red-700'/>
                </span>

                <span className='w-1/2'>Lucky Time : <span className='text-[#FFD700]'>7:30 pm</span></span>

            </div>
        </div>
        
    </div>
  )
}

export default HoroscopeResult