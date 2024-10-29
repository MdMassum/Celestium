import React from 'react'
import searchIcon from '../../assets/AstroHeader/search.svg'

const Search : React.FC = () =>{
  return (
    <div className='rounded-full flex items-center justify-center'>
        <input type="text" placeholder='Search...' className='py-2 outline-none bg-black'/>
        <img src={searchIcon} alt="" className='h-8 cursor-pointer' />
    </div>
  )
}

export default Search