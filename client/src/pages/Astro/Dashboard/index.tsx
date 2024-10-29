import React from 'react';

interface User {
  name: string;
  earning: string;
  clientServedToday: number;
  clientServedYesterday: number;
  callsTakenToday: number;
  callsTakenYesterday: number;
  profileComplete: number;
}

const AstroDashboard: React.FC = () => {
  const user: User = {
    name: 'Ammy',
    earning: '30,000',
    clientServedToday: 18,
    clientServedYesterday: 42,
    callsTakenToday: 14,
    callsTakenYesterday: 37,
    profileComplete: 80,
  };

  const today: Date = new Date();

  const monthNames: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const formattedDate: string = `${today.getDate()} ${monthNames[today.getMonth()]}, ${today.getFullYear()}`;

  return (
    <div className="flex flex-col md:ml-40 px-8 mt-20 mb-10 gap-14 text-2xl md:text-base">
      <div>
        <h1 className="text-6xl md:text-4xl text-[#FFD700] font-robotoSerif font-semibold">Welcome {user.name}!</h1>
        <p className="mt-4 md:mt-2 text-gray-300 text-3xl md:text-xl">{formattedDate}</p>
      </div>

      <div className="flex gap-16 md:gap-28 font-semibold relative flex-wrap">
        <div className="relative">
          {/* Monthly earnings container */}
          <div className="relative h-40 w-64 md:h-32 md:w-48 border border-[#8C8CCE] shadow-[0_0_10px_2px_#484B53] flex flex-col items-center justify-between p-6 rounded-lg  bg-gradient-to-r from-[#333356] to-[#6e6eac] z-10">
            <p className='text-2xl md:text-lg'>Monthly Earnings</p>
            <div className="flex gap-6 justify-end items-end">
              <p className="md:mb-1">Rs.</p>
              <p className="text-[#FFD700] text-4xl md:text-2xl">{user.earning}</p>
            </div>
          </div>

          {/* Shadow container */}
          <div className="absolute h-40 w-64 md:h-32 md:w-48 bg-[#1E1E2A] rounded-md -right-8 -bottom-5 z-0"></div>
        </div>

        <div className="relative">
          {/* Clients served */}
          <div className="relative h-40 w-64 md:h-32 md:w-48 border border-[#8C8CCE] shadow-[0_0_10px_2px_#484B53] flex flex-col justify-between p-6 rounded-lg bg-gradient-to-r from-[#333356] to-[#6e6eac] z-10">
            <p className="text-center text-2xl md:text-lg -mt-1">Clients Served</p>
            <div className="flex mt-6  md:mt-2">
              <span className="font-light text-xl md:text-sm">Today: </span>
              <pre className="text-[#FFD700]"> {user.clientServedToday}</pre>
            </div>

            <div className="flex mt-1">
              <span className="font-light text-xl md:text-sm">Yesterday: </span>
              <pre className="text-[#FFD700]"> {user.clientServedYesterday}</pre>
            </div>
          </div>

          {/* Shadow container */}
          <div className="absolute h-40 w-64 md:h-32 md:w-48 bg-[#1E1E2A] rounded-md -right-8 -bottom-5 z-0"></div>
        </div>

        <div className="relative">
          {/* Calls taken */}
          <div className="relative h-40 w-64 md:h-32 md:w-48 border border-[#8C8CCE] shadow-[0_0_10px_2px_#484B53] flex flex-col justify-between p-6 rounded-lg bg-gradient-to-r from-[#333356] to-[#6e6eac] z-10">
            <p className="text-center text-2xl md:text-lg -mt-1">Total Calls Taken</p>
            <div className="flex mt-4 md:mt-2">
              <span className="font-light text-xl md:text-sm">Today: </span>
              <pre className="text-[#FFD700]"> {user.callsTakenToday}</pre>
            </div>

            <div className="flex mt-1">
              <span className="font-light text-xl md:text-sm">Yesterday: </span>
              <pre className="text-[#FFD700]"> {user.callsTakenYesterday}</pre>
            </div>
          </div>

          {/* Shadow container */}
          <div className="absolute h-40 w-64 md:h-32 md:w-48 bg-[#1E1E2A] rounded-md -right-8 -bottom-5 z-0"></div>
        </div>
      </div>

      {/* my profile */}
      <div className='mt-3'>
        <p className="text-[#FFD700] text-4xl md:text-3xl font-semibold">My Profile</p>
        <div className='flex mt-8 items-center'>
          <pre className='hidden md:flex'>Completion: </pre>
          {/* Progress bar container */}
          <div className="relative w-full md:w-[60%] h-10 md:h-6  bg-[#333344] border border-white overflow-hidden">
            {/* The gradient-filled bar */}
            <div
              className="h-full min-h-12"
              style={{
                width: `${user.profileComplete}%`,
                background: 'linear-gradient(to right, #FFD700, #FFA500)', // yellow to orange
              }}
            ></div>
          </div>
        </div>
        <p className='text-center md:-ml-48 mt-5 md:mt-2'>{user.profileComplete}% Completed</p>
      </div>
    </div>
  );
};

export default AstroDashboard;
