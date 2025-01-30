import React, { useState } from 'react'
import "./Search2.css"
import { IoSearchSharp } from "react-icons/io5";
import { useEffect } from 'react';

const Search2 = ({ onSearch }) => {

    const [query, setQuery] = useState("")

    const handleSearch = (e) => {
        setQuery(e.target.value);
        if(onSearch) {
            onSearch(e.target.value);
        }
    };

    useEffect(()=>{
        const delaySearch = setTimeout(()=>{
          onSearch(query);
        }, 300);
        return () => clearTimeout(delaySearch);
      }, [query]);

  return (
    <div className='searchdiv1'>
        <div className='searchicondev1'>
        <IoSearchSharp className='searchicon1'/>
        </div>
        <div className='mainsearchdiv1'>
            <input type="text" placeholder='Search for a movie, tv show, person...' className='input1' value={query} onChange={handleSearch}/>
        </div>
    </div>
  )
}

export default Search2