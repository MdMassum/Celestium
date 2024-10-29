import React, { useState } from 'react';
import callIcon from '../../../assets/AstrologersPage/phoneIcon.png';
import chatIcon from '../../../assets/AstrologersPage/chatIcon.png';

interface HistoryRecord {
  name: string;
  type: 'call' | 'chat';
  paidAmnt: number;
  time: string;
}

const History: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'call' | 'chat'>('all');
  const [showDropdown, setShowDropdown] = useState(false);

  const history: HistoryRecord[] = [
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 250.00, time: "18:30 pm" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "chat", paidAmnt: 630.00, time: "26/09/2023" },
    { name: "Kathryn Murphy", type: "call", paidAmnt: 630.00, time: "26/09/2023" },
  ];

  const filteredHistory = history.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <div className="md:ml-40 p-4 mt-12 md:mt-20 md:w-[80%] text-2xl md:text-base">
      <div className="flex justify-between w-full md:w-[98%] md:ml-2">
        <h1 className="text-[#FFD700] text-5xl md:text-4xl font-robotoSerif font-semibold mt-4 md:mt-0 mb-2 md:mb-0">Call/Chat History</h1>

        {/* Dropdown Button */}
        <div className="relative mt-4 md:mt-0">
          <button
            className="bg-[#FFD700] w-24 mr-2 md:mr-0 py-2 rounded-md text-black font-semibold"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {filter === 'all' ? 'All' : filter === 'call' ? 'Call' : 'Chat'}
          </button>

          {showDropdown && (
            <div className="absolute right-0 mr-2 md:mr-0 mt-2 w-24 bg-white rounded-md shadow-lg">
              <ul className="text-center">
                <li
                  className="px-4 py-2 hover:bg-[#FFD700] cursor-pointer text-black font-semibold"
                  onClick={() => {
                    setFilter('all');
                    setShowDropdown(false);
                  }}
                >
                  All
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#FFD700] cursor-pointer text-black font-semibold"
                  onClick={() => {
                    setFilter('chat');
                    setShowDropdown(false);
                  }}
                >
                  Chat
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#FFD700] cursor-pointer text-black font-semibold"
                  onClick={() => {
                    setFilter('call');
                    setShowDropdown(false);
                  }}
                >
                  Call
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* History Table */}
      <table className="mt-8 md:mt-4 w-full text-white text-left">
        <thead className="text-[#B7AECD] font-semibold text-3xl md:text-xl">
          <tr>
            <th className="px-6 py-3 text-left w-1/6">Name</th> 
            <th className="pl-4 py-3 text-center w-1.5/6">Call/Chat</th> 
            <th className="pr-4 py-3 text-center w-1.5/6">Paid</th> 
            <th className="px-10 py-3 text-right w-1/6">Time</th> 
          </tr>
        </thead>
        <tbody className="text-neutral">
          {filteredHistory.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-4 text-left">{item.name}</td> 
              <td className="pl-4 py-4 flex items-center justify-center">
                <div className='flex items-center justify-center gap-3 mt-3'>
                <img
                  src={item.type === 'call' ? callIcon : chatIcon}
                  alt={item.type}
                  className="h-5 w-5"
                />
                <span>{item.type === 'call' ? 'Call' : 'Chat'}</span>
                </div>
                
              </td>
              <td className="pr-4 py-4 text-center">Rs. {item.paidAmnt.toFixed(2)}</td> 
              <td className="px-4 py-4 text-right">{item.time}</td> 
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default History;
