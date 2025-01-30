import React from 'react'
import "./Search.css"
import { IoSearchSharp } from "react-icons/io5";

const Search = ( {setSearchQuery}) => {

  const handleInputChange = (event) =>{
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <div className='searchdiv'>
        <div className='searchicondev'>
        <IoSearchSharp className='searchicon'/>
        </div>
        <div className='mainsearchdiv'>
            <input type="text" placeholder='Search for a movie, tv show, person...' className='input'onChange={handleInputChange}/>
        </div>
    </div>
  )
}

export default Search