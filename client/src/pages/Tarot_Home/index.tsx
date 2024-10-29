import React from 'react'
import Button from '../../components/Button'
import homeTarot from '../../assets/tarot/homeTarot.svg'
import { NavLink } from 'react-router-dom'

const TarotHome : React.FC = () => {
  return (
    <div className="flex justify-between items-center mt-20 mb-10 md:w-[80%] gap-4 mx-auto my-auto p-10 md:p-0">
        {/* leftpart */}
        <div className='flex flex-col w-1/2 text-lg md:text-sm gap-4'>
            <h1 className='text-[#FFD700] font-robotoSerif w-full min-w-[400px] text-6xl font-light mb-6 tracking-wider'>Tarot Card</h1>

            <p>The Tarot is a timeless and mystical system of divination that holds the keys to the human experience. Each Tarot card is a doorway to wisdom, offering guidance, clarity, and insights into life's most pressing questions.</p>

            <p>Delve into the enchanting world of Tarot cards and embark on a journey of self-discovery and cosmic revelation.</p>

            <NavLink to='/tarot_Category'><Button className='mt-10 mx-auto'>Get Started</Button></NavLink>
        </div>

        {/* rightpart */}
        <div>
            <img src={homeTarot} alt="" className='h-80' />
        </div>
    </div>
  )
}

export default TarotHome