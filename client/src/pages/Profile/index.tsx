import React from 'react'
import profile from '../../assets/profile/dp.png'
import scorpio from '../../assets/profile/SCORPION.png'
import zodiac from '../../assets/profile/zodiac sign.png'
import img1 from '../../assets/profile/img1.png'
import img2 from '../../assets/profile/img2.png'
import img3 from '../../assets/profile/img3.png'
import arrow from '../../assets/Vector 190.png'
import { NavLink } from 'react-router-dom'

const user = {
    name:"Amy Stone",
    horoscope:"Scorpio",
    birthDate:"09 November,1997",
    birthTime:"05:20 AM",
    birthPlace:"New Delhi",
    gender:"female"
}
const Profile: React.FC = () => {
  return (
    <div className='flex flex-col gap-8 md:gap-0 md:w-[80%] p-8 md:p-0 mx-auto min-h-screen mb-10 text-xl md:text-base'>

        {/* top section */}
        <div className='flex w-full justify-between items-center mt-16 mx-auto min-w-[600px] -ml-4'>

            {/* left part */}
            <div className='flex  justify-between items-center gap-2'>
                <img src={profile} alt="" className='h-40' />
                <div className='flex flex-col gap-4'>
                    <p className='text-3xl text-[#FFD700]' >{user.name}</p>
                    <p>{user.horoscope}</p>
                </div>
            </div>
            {/* right part */}
            <div className='flex gap-4 justify-center items-center'>
                <img src={scorpio} alt="" className='h-20' />
                <img src={zodiac} alt="" className='h-32'/>
            </div>
        </div>

        {/* detail section */}
        <div className='flex justify-between mt-10 w-full flex-wrap gap-8 '>
            <div className='flex flex-col items-center justify-between border border-[#E1E1E1] bg-[#1B142C] rounded-lg min-w-44 p-3 min-h-20'>
                <p>Birth Date</p>
                <p className='text-[#FFD700]'>{user.birthDate}</p>
            </div>

            <div className='flex flex-col items-center justify-between border border-[#E1E1E1] bg-[#1B142C] rounded-lg min-w-44 p-3 min-h-20'>
                <p>Birth Time</p>
                <p className='text-[#FFD700]'>{user.birthTime}</p>
            </div>

            <div className='flex flex-col items-center justify-between border border-[#E1E1E1] bg-[#1B142C] rounded-lg min-w-44 p-3 min-h-20'>
                <p>Birth Place</p>
                <p className='text-[#FFD700]'>{user.birthPlace}</p>
            </div>

            <div className='flex flex-col items-center justify-between border border-[#E1E1E1] bg-[#1B142C] rounded-lg min-w-44 p-3 min-h-20'>
                <p>Gender</p>
                <p className='text-[#FFD700]'>{user.gender}</p>
            </div>
        </div>
        
        {/* button 1 */}
        <NavLink to='/features/horoscope' className='flex justify-between items-center h-24 md:h-16 p-2 px-4 mt-16 border border-dashed border-[#E1E1E1] mx-auto w-full min-w-[600px]'>
            <div className='flex items-center'>
                <img src={img1} alt="" className='h-10 mr-8' />
                <p>Check today’s Horoscope</p>
            </div>
            <img src={arrow} alt="" />
        </NavLink>

        {/* button 2 */}
        <NavLink to='/features/compatibility' className='flex justify-between items-center h-24 md:h-16 p-2 px-4 mt-10 border border-dashed border-[#E1E1E1] mx-auto w-full min-w-[600px]'>
            <div className='flex items-center'>
                <img src={img2} alt="" className='h-10 mr-8' />
                <p>Check your Compatibility with your partner</p>
            </div>
            <img src={arrow} alt="" />
        </NavLink>

        {/* button 3 */}
        <NavLink to='/features/natalChart' className='flex justify-between items-center h-24 md:h-16 p-2 px-4 mt-10 border border-dashed border-[#E1E1E1] mx-auto w-full min-w-[600px]'>
            <div className='flex items-center'>
                <img src={img3} alt="" className='h-10 mr-8' />
                <p>Check your Natal Chart</p>
            </div>
            <img src={arrow} alt="" />
        </NavLink>

    </div>
  )
}

export default Profile