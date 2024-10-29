import React from 'react'
import NotificationItem from './NotificationItem';


interface notificationItem {
  type : "call" | "chat" | "cancelled" | "rating";
  description:string,
  time?:string,
  date?:string,
}
const Notification : React.FC = () => {

  const newNotifications: notificationItem[] = [
    {
      type:"call",
      description:"You got a new call request",
      time:"11:30 pm"
    },
    {
      type:"chat",
      description:"You got a new chat request",
      time:"12:45 pm"
    },
  ]

  const notifications: notificationItem[] = [
    {
      type:"cancelled",
      description:"Kathryn Murphy has cancelled the appointment for a call session.  ",
      time:"18:30 pm"
    },
    {
      type:"call",
      description:"You got a new call request",
      date:"26th Sept"
    },
    {
      type:"rating",
      description:"Kathryn Murphy has given you 5 stars! Yay!",
      date:"26th Sept"
    },
    {
      type:"chat",
      description:"You got a new chat request",
      date:"26th Sept"
    },
  ]
  return (
    <div className='md:ml-32 md:px-8 mt-20 mb-10 flex flex-col text-xl md:text-base'>

      <h1 className='hidden md:flex text-4xl text-[#FFD700] font-robotoSerif text-center md:text-left'>Notification</h1>

      <div className='flex md:mt-10 items-center gap-2'>
        <p className='text-[#B7AECD] font-semibold text-4xl pl-8 mb-2 md:mb-0 md:pl-0  md:text-lg'>New</p>
        <div className="bg-red-700 text-white flex items-center justify-center text-lg md:text-xs border border-white h-7 w-7 md:h-4 md:w-4 rounded-full">
            {newNotifications.length}
        </div>
      </div>

      {/* new notifications */}
      <div className='md:-ml-32 md:-mr-8'>
        {
          newNotifications.map((item)=>(
            <NotificationItem key={item.date} isNew={true} type={item.type} time={item.time} date={item.date} description={item.description}/>
          ))
        }
      </div>

      <p className='text-[#B7AECD] font-semibold text-4xl pl-8 md:pl-0 md:text-lg mt-10 mb-4 md:mb-0 md:mt-5'>Recent</p>
      {/* Recent notifications */}
      <div className='md:-ml-32 md:-mr-8'>
        {
          notifications.map((item)=>(
            <NotificationItem key={item.date} isNew={false} type={item.type} time={item.time} date={item.date} description={item.description}/>
          ))
        }
      </div>


    </div>
  )
}

export default Notification