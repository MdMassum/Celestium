import React, { useState } from 'react'
import Horoscope from '../Home/Features/Horoscope'
import DatePicker from '../../components/DatePicker'
import Button from '../../components/Button';
import { NavLink } from 'react-router-dom';

const HoroscopePage: React.FC = () => {

  const [yourDOB, setYourDOB] = useState({ day: "", month: "", year: "" });
  // Handlers for DatePicker
  const handleYourDOBChange = (date: { day: string | null; month: string | null; year: string | null }) => {
    setYourDOB({ day: date.day || "", month: date.month || "", year: date.year || "" });
  };

  const handleClick = () =>{
    // if (!yourDOB.day || !yourDOB.month || !yourDOB.year) {
    //   alert("Please fill out your complete Date of Birth.");
    //   return;
    // }
    console.log(yourDOB)
    // api call 
    // navigation
  }
  return (
    <div className='flex flex-col mt-10 mb-6 mx-auto gap-16 md:gap-0 p-10 md:p-0 md:w-[80%] text-xl md:text-base'>
      <div className='flex justify-between w-full mx-auto mt-8 '>

        <div className='flex flex-col gap-4 '>
            <h1 className='text-7xl font-robotoSerif text-[#FFD700] tracking-wider'>Horoscope</h1>
            <p className='mb-6'>Check your Zodiac Sign</p>

            {/* date component */}
            <DatePicker onChange={handleYourDOBChange} />
            
        </div>
        
        <div className='hidden md:flex'>
        <Horoscope/>
        </div>
        

      </div>
      <NavLink to='/horoscope/result'>
      <Button onClick={handleClick} children="Check Horoscope" className='min-w-40' />
      </NavLink>
    </div>
  )
}

export default HoroscopePage