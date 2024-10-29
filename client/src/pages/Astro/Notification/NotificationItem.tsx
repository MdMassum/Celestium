import React from 'react'
import callIcon from '../../../assets/AstrologersPage/phoneIcon.png'
import chatIcon from '../../../assets/AstrologersPage/chatIcon.png'

interface NotifProps {
    type : "call" | "chat" | "cancelled" | "rating";
    description:string,
    time?:string,
    date?:string,
    isNew : boolean
}
const NotificationItem:React.FC<NotifProps> = ({type, date, time, description, isNew}) =>{
  return (
    <div className={`flex w-full justify-between min-h-24 md:min-h-12 items-center mt-3 md:mt-2 pl-8 md:pl-32 text-xl md:text-base ${isNew ? "bg-gradient-to-r from-[rgba(126,115,159,0.75)] to-[rgba(117,84,133,0.3075)]":""}`}>
        <div className='flex items-center gap-10 w-4/5 md:w-5/6'>
            <img src={type=="chat"?chatIcon : callIcon} className='h-8 w-8 md:h-5 md:w-5' alt="" />
            <p className='max-w-[410px] md:max-w-[500px] text-[27px] leading-normal md:text-base'>{description}</p>
        </div>
        <p className='text-left w-1/5 md:w-1/6 text-[#B7AECD] text-2xl md:text-base'>{time ? time : date}</p>
    </div>
  )
}

export default NotificationItem