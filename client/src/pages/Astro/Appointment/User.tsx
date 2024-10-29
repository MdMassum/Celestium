import React from 'react'
import chatIcon from '../../../assets/AstrologersPage/chatIcon.png'
import callIcon from '../../../assets/AstrologersPage/phoneIcon.png'

interface userProps{
    name:string,
    image:string,
    type:"call" | "chat",
    active:boolean;
}
const User :React.FC<userProps> = ({name, image, type, active}) =>{
  return (
    <div className='flex items-center text-2xl md:text-base'>

        <img src={image} alt="" className='h-44 md:h-32' />

        <div className='flex flex-col justify-center w-2/3 ml-2'>
            <p className='text-white '>{name}</p>
            <p className='text-[#C5C5C5] text-xl md:text-base'>{type} Request</p>
        </div>
        <div className='min-w-48 md:w-1/3 flex items-center gap-3'>
            {
                active ? <p className='text-[#83E583]'>{type === "call" ? "Start a Call" : "Start chat"}</p> : <p className='text-[#B7AECD]'>Cancelled</p>
            }
            <img src={type === "chat" ? chatIcon : callIcon} alt="" className='h-9 md:h-5'/>
        </div>
    </div>
  )
}

export default User