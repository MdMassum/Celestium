import React, { useState } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import DatePicker from '../../components/DatePicker';
import TimePicker from '../../components/TimePicker';

const NatalChart_Details: React.FC = () => {
  // State management for the form
  const [yourFullName, setYourFullName] = useState("");
  const [yourPlaceOfBirth, setYourPlaceOfBirth] = useState("");
  const [yourDOB, setYourDOB] = useState({ day: "", month: "", year: "" });
  const [yourTimeOfBirth, setYourTimeOfBirth] = useState({
    hour: "",
    minute: "",
    ampm: "AM",
  });

  // Handlers for inputs
  const handleYourFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYourFullName(e.target.value);
  };
  
  const handleYourPlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYourPlaceOfBirth(e.target.value);
  };

  const handleYourDOBChange = (date: { day: string | null; month: string | null; year: string | null }) => {
    setYourDOB({ day: date.day || "", month: date.month || "", year: date.year || "" });
  };

  const handleYourTimeChange = (hour: string, minute: string, ampm: string) => {
    setYourTimeOfBirth({ hour, minute, ampm });
  };

  const navigate = useNavigate()

  // button Click
  const handleClick = () =>{

    console.log(yourFullName,yourPlaceOfBirth,yourDOB,yourTimeOfBirth);
    navigate("/natalChart_Results")

  }

  return (
    <div className="flex flex-col justify-between items-center mt-14 mb-10 w-[80%] gap-4 mx-auto text-lg md:text-base">
      <div className='flex flex-col gap-2  items-start w-full min-w-[300px]'>
        <h1 className='text-[#FFD700] font-robotoSerif min-w-[300px] tracking-wider'>Natal Chart</h1>
        <p>Get your Natal Chart now! Fill out the details:</p>
      </div>

      <div className='flex flex-col md:flex-row justify-between w-full mt-12'>

            {/* for full name */}
            <div className="text-sm mb-8">
            <p className="text-[#FFD700] text-2xl md:text-xl font-medium mb-2">Full Name:</p>
            <input
                required
                className="bg-white text-black min-w-80 min-h-10 py-1.5 px-2 rounded-md "
                value={yourFullName}
                onChange={handleYourFullNameChange}
                placeholder="Enter your full name"
            />
            </div>

            {/* for place of birth */}
            <div className="text-sm mb-8">
            <p className="text-[#FFD700] text-2xl md:text-xl font-medium mb-2">Your Place of Birth:</p>
            <input
                required
                className="bg-white text-black min-w-80 min-h-10 py-1.5 px-2 rounded-md"
                value={yourPlaceOfBirth}
                onChange={handleYourPlaceChange}
                placeholder="Enter your place of birth"
            />
            </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 w-full mb-8'>

            {/* date of birth */}
            <div>
            <p className="text-[#FFD700] text-2xl md:text-xl font-medium">Date of Birth:</p>
            <DatePicker onChange={handleYourDOBChange} />
            </div>

            {/* time of birth */}
            <div>
            <p className="text-[#FFD700] text-2xl md:text-xl font-medium">Your Time of Birth:</p>
            <TimePicker onChange={handleYourTimeChange} />
            </div>

      </div>

        <Button children="Proceed" onClick={handleClick} className='mt-4 text-xl md:text-base'/>

    </div>
  );
};

export default NatalChart_Details;
