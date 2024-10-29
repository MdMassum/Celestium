import React from 'react';
import NatalChart from '../../assets/NatalChart/NatalChart.png'
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';

const Natal_Chart: React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-20 md:mt-14 mb-10 md:w-[80%] p-8 md:p-0 mx-auto text-lg md:text-base">

      <div className='w-1/2 flex flex-col gap-8 min-w-[300px]'>

        <h1 className='text-[#FFD700] font-robotoSerif from-neutral-400 min-w-[350px] tracking-wider'>Natal Chart</h1>

        <p>Your natal chart, also known as your birth chart or Kundli, is a cosmic snapshot of the heavens at the moment of your birth. </p>

        <p>It's a powerful tool that unveils the unique patterns of your personality, destiny, and life's journey.</p>

        <p>Dive into the profound wisdom of your natal chart and discover what the universe has in store for you.</p>

        <NavLink to="/natalChart_Details" className="mt-4 mx-auto">
        <Button children="Get Started" />
        </NavLink>

      </div>

      <img src={NatalChart} alt="" className='h-72'/>
    </div>
  );
};

export default Natal_Chart;
