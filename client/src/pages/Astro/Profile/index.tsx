import React, { useState } from 'react';
import profile from '../../../assets/profile/dp.png';
import Button from '../../../components/Button';

interface User {
  name: string;
  avatar: string;
  email: string;
  age: number;
  skills: string[];
  description: string;
}

const AstroProfile: React.FC = () => {
  const initialUser: User = {
    name: "Amy Warren",
    avatar: profile,
    email: "amywaren@abc",
    age: 27,
    skills: ["psychic", "Tarot", "Palmistry", "Face Reading"],
    description: '',
  };

  const [user, setUser] = useState<User>(initialUser);
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof User) => {
    const value = e.target.value;

    // Handle skills as a comma-separated string
    if (field === 'skills') {
      setUser((prevUser) => ({
        ...prevUser,
        skills: value.split(',').map((skill) => skill.trim()), // Split and trim skills
      }));
    } else if (field === 'age') {
      setUser((prevUser) => ({
        ...prevUser,
        age: parseInt(value, 10), // Convert age to number
      }));
    } else {
      setUser((prevUser) => ({
        ...prevUser,
        [field]: value,
      }));
    }
  };

  return (
    <div className='md:ml-32 p-8 md:p-4 mt-14 text-3xl md:text-base'>
      <div className='flex justify-center w-full'>
        <img src={user.avatar} alt={`${user.name}'s avatar`} className='h-80 w-80 md:h-48 md:w-48 flex justify-center' />
      </div>

      <div className={`${edit ? "mt-7 md:mt-3" : "mt-0"} flex`}>
        <span className={`${edit ? "flex" : "hidden"} text-[#FFD700] min-w-24 md:min-w-16`}>Name : </span>
        <input 
          value={user.name}
          className={`outline-none text-4xl md:text-xl font-semibold bg-black ${edit ? "border-b border-gray-400 w-full mx-12 px-1" : 'text-center w-full'}`}
          disabled={!edit}
          onChange={(e) => handleChange(e, 'name')}
        />
      </div>

      <div className={`${edit ? "mt-8 md:mt-5" : "mt-0"} flex`}>
        <span className={`${edit ? "flex" : "hidden"} text-[#FFD700] min-w-24 md:min-w-16`}>Email : </span>
        <input 
          value={user.email}
          className={`outline-none bg-black ${edit ? "border-b border-gray-400 w-full mx-12 px-1" : 'text-center w-full'}`}
          disabled={!edit}
          onChange={(e) => handleChange(e, 'email')}
        />
      </div>

      <div className='flex mt-8 md:mt-5'>
        <span className='text-[#FFD700] min-w-24 md:min-w-16'>Age : </span>
        <input 
          type="number" 
          value={user.age}
          className={`outline-none bg-black ${edit ? "border-b border-gray-400 w-full mx-12 px-1" : 'w-[70%]'}`}
          disabled={!edit}
          onChange={(e) => handleChange(e, 'age')}
        />
      </div>

      <div className='flex mt-8 md:mt-5'>
        <span className='text-[#FFD700] min-w-24 md:min-w-16'>Skills : </span>
        <input 
          value={user.skills.join(', ')}
          className={`outline-none bg-black ${edit ? "border-b border-gray-400 w-full mx-12 px-1" : 'w-[70%]'}`}
          disabled={!edit}
          onChange={(e) => handleChange(e, 'skills')}
        />
      </div>

      <div className={`flex mt-8 md:mt-5 ${edit ? "flex-col" : "flex-row"}`}>
        <span className='text-[#FFD700] min-w-24 md:min-w-20'>Description : </span>
        <input 
          value={user.description}
          className={`outline-none bg-black ${edit ? "border border-gray-400 border-dashed h-28 w-full p-3 my-1" : 'w-[70%] px-2'}`}
          disabled={!edit}
          onChange={(e) => handleChange(e, 'description')}
        />
      </div>

      <div className='flex mt-20 md:mt-10 justify-center mb-6'>
        <Button onClick={toggleEdit}>{edit ? "Save Changes" : "Edit Profile"}</Button>
      </div>
    </div>
  );
};

export default AstroProfile;
