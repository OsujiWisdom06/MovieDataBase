import React, { useState } from 'react'
import "./Header.css"
import { FaPlus } from "react-icons/fa";
import { RiMovieFill } from "react-icons/ri";
import { NavLink } from 'react-router';

const Header = () => {

    const [menu, setMenu] = useState("TvShow")
  return (
    <div className='header'>
        <div className='headerwrap'>
            <div className='leftheader'>
                <div className='tmdb'>
                    <div className='logo'>
                        <h1>TMDB</h1>
                    </div>
                    <div className='logoimg'>
                        <div className='logocircle'></div>
                    </div>
                </div>
                <div className='tvshow'>
                    <h3 onClick={()=>{setMenu("TvShow")}}><NavLink style={{textDecoration: "none", color: "white" }} to='/'>TV Shows</NavLink></h3>
                </div>
                <div className='movies'>
                    <h3 onClick={()=>{setMenu("Movies")}}><NavLink style={{textDecoration: "none", color: "white"}} to='/Movies'>Movies</NavLink></h3>
                </div>
                <div className='peoples'>
                    <h3 onClick={()=>{setMenu("People")}}><NavLink style={{textDecoration: "none", color: "white"}} to='/People'>People</NavLink></h3>
                </div>
            </div>
            <div className='rightheader'>
                <div className='language'>
                    <div className='plusicon'>
                    <FaPlus className='plus'/>
                    </div>
                    <div className='english'>
                        <button className='englihbtn'>
                            EN
                        </button>
                    </div>
                </div>
                <div className='loginandtdmb'>
                    <div className='login'>
                        <button  className='loginbtn'>
                            <h3 onClick={()=>{setMenu("Login")}}><NavLink style={{textDecoration: "none", color: "white"}} to='/Login'>Login</NavLink></h3>
                        </button>
                    </div>
                    <div className='join'>
                        <button className='jointdmb'>
                            <h3 onClick={()=>{setMenu("Sign-Up")}}><NavLink style={{textDecoration: "none", color: "white"}} to='/Sign-Up'>Join TMDB</NavLink></h3>
                        </button>
                    </div>
                </div>
                <div className='movieicon'>
                    <RiMovieFill className='movie'/>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header