import React from 'react'
import moon from '../../assets/payment/moon.png'

const LeftPart:React.FC = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-evenly " style={{ background: 'linear-gradient(163.58deg, #102228 0%, #08011A 101.14%)' }}>
        <h2 className='font-astloch text-[#FFD700] text-5xl text-center mt-10'>Celestium</h2>
        <div className='relative w-full'>
            <div className='flex flex-col absolute top-20 lg:top-24 left-6 text-xs lg:text-sm gap-8 max-w-[60%] '>
                <h1 className=''>Payment</h1>
                <p className=''>We utilize industry-leading encryption and secure payment gateways to ensure that your payment information is protected at all times</p>
                <p className=''>Your financial data is transmitted securely, keeping your transactions safe and confidential.</p>
            </div>
            
            
            <img src={moon} alt="" className='w-[90%] lg:w-[80%]' />
        </div>
        
    </div>
  )
}

export default LeftPart