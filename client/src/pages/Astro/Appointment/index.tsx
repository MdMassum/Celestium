import React, { useState } from 'react'
import img from '../../../assets/profile/dp.png'
import User from './User';


interface user {
  name : string,
  image: string,
  type : "chat" | "call",
  active:boolean;
}
const CallAppointment : React.FC = () => {

  const [variant, setVariant] = useState<'chats' | 'calls'>('chats');

  const handleChange = (Variant: 'chats' | 'calls') => {
    setVariant(Variant);
  };

  const appointments:user[] = [
    {
      name : "Kathryn Murphy",
      image : img,
      type : "chat",
      active : true,
    },
    {
      name : "Celeb Smith",
      image : img,
      type : "chat",
      active : true,
    },
    {
      name : "Annie Marie",
      image : img,
      type : "chat",
      active : false,
    },
    {
      name : "Celeb Smith",
      image : img,
      type : "call",
      active : false,
    },
    {
      name : "Kathryn Murphy",
      image : img,
      type : "call",
      active : true,
    },
    {
      name : "Annie Marie",
      image : img,
      type : "call",
      active : true,
    },
  ]

  return (
    <div  className='md:ml-32 md:px-8 mt-20 mb-10 flex flex-col text-lg md:text-base'>

      <h1 className='hidden md:flex text-4xl text-[#FFD700] font-robotoSerif text-center md:text-left'>Call & Chat Appointments</h1>

      <div className='flex flex-col p-8'>

            <div className="flex justify-between items-center mb-6 ">
                <button
                className={`w-1/2 p-4 border-b-2 font-normal text-4xl md:text-2xl ${variant === 'chats' ? 'text-white border-[#FFD700]' : 'text-gray-400   border-dashed'}`}
                onClick={() => handleChange('chats')}
                >
                Chats
                </button>
                <button
                className={`w-1/2 p-4 border-b-2 font-normal text-4xl md:text-2xl ${variant === 'calls' ? 'text-white border-[#FFD700]' : 'text-gray-400   border-dashed'}`}
                onClick={() => handleChange('calls')}
                >
                Calls
                </button>
            </div>

      {variant === 'chats' ? (
        <div className="space-y-8">
          {
           appointments.filter((item)=> item.type==='chat')
           .map((item)=>(
            <User key={item.name} name={item.name} image={item.image} type={item.type} active={item.active}/>
           ))
          }
        </div>
      ) : (
        <div className="space-y-8">
          {
           appointments
           .filter((item)=>item.type === "call")
           .map((item)=>
            <User key={item.name} name={item.name} image={item.image} type={item.type} active={item.active}/>
           )
          }
        </div>
      )}
      </div>
    </div>
  )
}

export default CallAppointment