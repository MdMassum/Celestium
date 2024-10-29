import React, { useState } from 'react';
import Button from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import LeftPart from './leftPart';
import RightPart from './rightPart';
import card from '../../assets/payment/card.png';
import payPal from '../../assets/payment/payPal.png';
import upi from '../../assets/payment/upi.png';
import applePay from '../../assets/payment/applePay.png';

const Payment: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const navigate = useNavigate();

  const handlePay = () => {
    // if (selectedMethod && cardNumber && cardName && expiryDate && cvv) {
    //   navigate('/paymentSuccess');
    // } else {
    //   alert("Please fill out all payment fields");
    // }
    navigate('/paymentSuccess');
  };

  const handlePaymentSelection = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      {/* Left part */}
      <div className='w-1/3 hidden lg:flex'>
        <LeftPart />
      </div>

      {/* Middle part */}
      <div className='flex w-[80%] md:w-2/3 justify-center items-center'>
      <div className='w-full md:min-w-1/3 mx-auto my-auto min-h-screen p-10 md:pt-20 lg:pt-0 pl-4'>

            {/* for mobile device */}
          <div className='flex flex-col md:hidden text-xl gap-8'>
            <h1 className='font-astloch text-6xl text-center text-[#FFD700]'>Celestium</h1>
            <p className='text-center'>Order #: xyz123</p>
            <div className='w-full flex justify-between'>
                <div className='flex flex-col'>
                  <p>Chat with kathryn</p>
                  <p>(30 minutes)</p>
                </div>
                <p>Rs. 450.00</p>
            </div>
            <div className='w-full flex justify-between items-center'>
                <p>Taxable charges</p>
                <p>Rs. 4.00</p>
            </div>
            <div className='flex flex-col gap-2 items-center border-t border-dashed pt-7 px-10'>
                <p className='font-semibold'>Paybable Amount</p>
                <p className='font-semibold text-[#FFD700]'>Rs. 454.00 </p>
            </div>
          </div>

        <div className='w-full flex flex-col mt-16 justify-center items-center gap-4 '>
          {/* Coupon code */}
          <div className='flex items-center justify-center rounded-lg min-h-10 text-lg md:text-sm w-[90%] md:w-64 '>
            <input
              type="text"
              placeholder='Coupon Code'
              className='bg-white text-black p-2 min-w-full min-h-12 rounded-l-lg'
            />
            <button
              className='text-white min-h-12 text-sm max-w-20 min-w-14  border border-gray-400 rounded-r-lg'
              style={{ background: 'linear-gradient(163.58deg, #485053 0%, #08011A 101.14%)' }}
            >
              Apply
            </button>
          </div>

          {/* Payment method */}
          <div className='flex flex-col w-full md:max-w-80 mt-4 text-lg md:text-sm'>
            <p>Pay with</p>
            <div className='flex justify-between items-center mt-1'>
                <img
                src={card}
                alt="Card"
                className='h-14 md:h-8 cursor-pointer'
                onClick={() => handlePaymentSelection("card")}
                />
                <img
                src={payPal}
                alt="PayPal"
                className='h-14 md:h-8 cursor-pointer'
                onClick={() => handlePaymentSelection("paypal")}
                />
                <img
                src={upi}
                alt="UPI"
                className='h-14 md:h-8 cursor-pointer'
                onClick={() => handlePaymentSelection("upi")}
                />
                <img
                src={applePay}
                alt="ApplePay"
                className='h-14 md:h-8 cursor-pointer'
                onClick={() => handlePaymentSelection("applePay")}
                />
            </div>
          </div>

          {/* Conditional rendering for Card details */}
          {(selectedMethod === "card" || selectedMethod === "paypal" || selectedMethod === "applePay") && (
            <div className='w-full md:max-w-80 flex flex-col gap-4 text-lg md:text-sm mt-4'>
                <p>Your Card Details</p>
              <input
                type="text"
                placeholder='Enter 16 digit card number'
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                className='bg-white text-black p-2 px-4 min-w-full min-h-12 rounded-lg -mt-2'
              />
              <input
                type="text"
                placeholder='Enter the Name on Card'
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                className='bg-white text-black p-2 px-4 min-w-full min-h-12 rounded-lg'
              />
              <div className="flex justify-between">
                <input
                  type="text"
                  placeholder='03 / 23'
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className='bg-white text-black p-2 px-4 w-1/3 rounded-lg'
                />
                <input
                  type="text"
                  placeholder='CVV' 
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className='bg-white text-black p-2 px-4 w-1/3 rounded-lg'
                />
              </div>
            </div>
          )}

          {
            selectedMethod === "upi" && (
                <div className='w-full md:max-w-80 flex flex-col gap-4 text-sm mt-8'>
                    <input
                    type="text"
                    placeholder='Enter UPI Id'
                    className='bg-white text-black p-2 min-w-full min-h-12 rounded-lg -mt-2'
                />
                </div>
            )
          }

          {/* Pay button */}
          {selectedMethod && (
            <Button onClick={handlePay} className='mt-10'>Pay Now</Button>
          )}
        </div>
      </div>

      {/* Right part */}
      <div className='min-w-[380px] hidden md:flex'>
        <RightPart />
      </div>
      </div>
    </div>
  );
};

export default Payment;
