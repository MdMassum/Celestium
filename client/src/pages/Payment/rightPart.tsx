import React from 'react'
import img1 from '../../assets/payment/PaymentRight.png'
import img2 from '../../assets/payment/paymentBar.png'

const RightPart:React.FC = () => {
  return (
    <div className='w-full min-h-screen text-xs p-6 pt-24 lg:pt-4'>
        <div className='relative flex flex-col items-center'>
            <img src={img2} alt="" className='w-[70%] top-20 absolute' />
            <div className='w-[70%] lg:w-[55%] flex flex-col items-center top-20 absolute mt-8 gap-7'>
                <p>Order #: xyz123</p>

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
            </div>

            <img src={img1} alt="" className='h-[460px] w-[350px] mt-8' />
            <div className='flex flex-col absolute bottom-10 gap-2 items-center border-t border-dashed pt-7 px-10'>

                <p className='text-xs'>Paybable Amount</p>
                <p>Rs. 454.00 </p>
            </div>
        </div>
    </div>
  )
}

export default RightPart