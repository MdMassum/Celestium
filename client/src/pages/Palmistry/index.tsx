import React, { useState } from 'react';
import palm from '../../assets/palm.png';
import maleIcon from '../../assets/palmistry/maleIcon.png';
import femaleIcon from '../../assets/palmistry/femaleIcon.png';
import downIcon from '../../assets/palmistry/downIcon.png';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';

const Palmistry: React.FC = () => {
  const [gender, setGender] = useState<string | null>(null);
  const [rightPalm, setRightPalm] = useState<File | null>(null);
  const [leftPalm, setLeftPalm] = useState<File | null>(null);
  const [rightPalmFileName, setRightPalmFileName] = useState<string | null>(null);
  const [leftPalmFileName, setLeftPalmFileName] = useState<string | null>(null);

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleRightPalmUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setRightPalm(file);
      setRightPalmFileName(file.name); // Store file name
    }
  };

  const handleLeftPalmUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setLeftPalm(file);
      setLeftPalmFileName(file.name); // Store file name
    }
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('Gender:', gender);
    console.log('Right Palm Image:', rightPalm);
    console.log('Left Palm Image:', leftPalm);

    navigate('/palmAnalysis')
  };

  return (
    <div className="flex flex-col justify-between items-center mt-14 mb-10 md:w-[80%] p-8 md:p-0 gap-4 mx-auto text-lg md:text-base">

      {/* top part */}
      <div className="w-full flex justify-between">
        <div className='w-1/2'>
          <h1 className="text-[#FFD700] font-robotoSerif w-full min-w-[200px] text-6xl font-light mb-6 tracking-wider">Palmistry</h1>
          <p className='mb-6'>Palmistry, also known as chiromancy, is an ancient practice that involves the interpretation of the lines, mounts, and markings on the palm of the hand. It's based on the belief that the hand's features can reveal insights into an individual's personality, character, life path, and potential future.</p>
          <p className="text-[#FFD700]">Ready to unlock the secrets of your palm?</p>
          <p className='mb-2'>Here's how you can do it:</p>
        </div>

        <img src={palm} className='h-80' alt="Palmistry" />
      </div>

      {/* bottom part */}
      <div className='w-full flex flex-col min-h-96 border border-dashed rounded-lg p-6'>
        <div className='flex mt-2 gap-2'>
          <p className='text-[#FFD700]'>Select Gender:</p>
          <img
            src={maleIcon}
            alt="Male"
            className={`h-28 cursor-pointer ${gender === 'male' ? 'border-2 border-[#FFD700]' : ''}`}
            onClick={() => handleGenderSelect('male')}
          />
          <img
            src={femaleIcon}
            alt="Female"
            className={`h-28 cursor-pointer ${gender === 'female' ? 'border-2 border-[#FFD700]' : ''}`}
            onClick={() => handleGenderSelect('female')}
          />
        </div>

        <div className='flex justify-between w-full mt-20 gap-2'>
          <div className='flex-col w-1/2'>
            <p className='text-[#FFD700] mb-2'>Upload the image of Right Palm:</p>
            <label className='flex justify-between items-center bg-[#12122F] w-52 md:w-72 min-h-10 rounded-lg border border-[#E1E1E1] p-2 px-4 cursor-pointer'>
              <span>{rightPalmFileName || 'Choose File'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleRightPalmUpload}
                className='hidden'
              />
              <img src={downIcon} alt="Down Arrow" className='h-3 px-2' />
            </label>
          </div>

          <div className='flex-col w-1/2'>
            <p className='text-[#FFD700] mb-2'>Upload the image of Left Palm:</p>
            <label className='flex justify-between items-center bg-[#12122F]  w-52 md:w-72 min-h-10 rounded-lg border border-[#E1E1E1] p-2 px-4 cursor-pointer'>
              <span>{leftPalmFileName || 'Choose File'}</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleLeftPalmUpload}
                className='hidden'
              />
              <img src={downIcon} alt="Down Arrow" className='h-3 px-2' />
            </label>
          </div>
        </div>

        <div className='w-full mt-12 mb-3 flex items-center justify-center'>
          <Button className='min-w-48' onClick={handleSubmit}>Get Readings</Button>
        </div>
      </div>
    </div>
  );
};

export default Palmistry;
