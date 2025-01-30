import React, { useState } from 'react'
import "./Hero.css"
import { IoIosArrowRoundForward } from "react-icons/io";
import { NavLink } from 'react-router';
const Hero = () => {

    const [menu, setMenu] = useState("Movies")
  return (
    <div>
        <div className='hero'>
            <div className='herotext'>
                <div className='first'>
                    <h1>That's a</h1>
                </div>
                <div className='second'>
                    <h1>Wrap 2025</h1>
                </div>
                <div className='thirdtext'>
                    <p>The best (and worst) of the year from TMDB.</p>
                </div>
                <div className='fourthtext'>
                    <button className='checkout' onClick={()=>{setMenu("Movies")}}><NavLink style={{textDecoration: "none", color: "red"}} to='/Movies'>Check it out</NavLink>
                        
                        <div className='btnicon'>
                        <IoIosArrowRoundForward className='iconbtn'/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero