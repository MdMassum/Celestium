import React from 'react';
import img from '../../../assets/AstroPagesIcon/goLive.svg';
import Button from '../../../components/Button';

const GoLive: React.FC = () => {
  return (
    <div className='md:ml-32 md:px-8 mt-20 mb-10 flex flex-col md:flex-row justify-between items-center text-3xl md:text-base'>
      {/* left part */}
      <div className='w-full md:w-1/2 flex flex-col gap-8'>
        <h1 className='invisible md:visible text-5xl text-[#FFD700] font-robotoSerif font-semibold text-center md:text-left'>Go Live</h1>
        <p className='text-center md:text-left w-3/4 mb-5 md:mb-0 md:w-full mx-auto'>Welcome to your Live Sessions Dashboard, your gateway to real-time interactions with clients.</p>

        <div className='hidden md:flex md:flex-col'>
          <p className='text-2xl text-[#FFD700] font-robotoSerif'>How It Works:</p>
          <ol className='ml-8'>
            <li className='list-decimal mt-4'><span className='text-[#FFD700] '>Go Live: </span>You go live as per your desired timings</li>

            <li className='list-decimal mt-2'><span className='text-[#FFD700] '>Client Request: </span>Client can send you a request to join the live session with you to ask about their queries. A dialog box appears.</li>

            <li className='list-decimal mt-2'><span className='text-[#FFD700]'>Request Confirmation: </span>You can either Accept the request or Deny by clicking on the button present in the dialog box.</li>

            <li className='list-decimal mt-2'><span className='text-[#FFD700]'>Payment: </span>Clients make secure payments, and you receive earnings for your expertise.</li>

            <li className='list-decimal mt-2'><span className='text-[#FFD700]'>Provide Insights: </span>Offer personalized astrological insights and guidance during the session.</li>
          </ol>
        </div>
      </div>

      {/* right part */}
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center gap-24 md:gap-16 mt-16 md:mt-0'>
        <img src={img} alt="Go Live" className='h-[520px] md:h-72' />
        <Button>Go Live</Button>
      </div>
    </div>
  );
};

export default GoLive;
