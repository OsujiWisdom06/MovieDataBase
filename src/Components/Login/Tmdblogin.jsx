import React, { useState } from 'react'
import "./Tmdblogin.css"
import { NavLink } from 'react-router'

const Tmdblogin = () => {
   

    const [menu1, setMenu1] =useState("Tmdblogin")
       

  return (
    <div className='Tmdblogin'>
        <div className='loginwrap'>
            <div className='loginheader'>
                <h2>Login to your account</h2>
            </div>
            <div className='loginbtm'>
                <div className='btm1'>
                    <div className='loginfirsttext'>
                        <p>In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. <NavLink style={{textDecoration: "none", color: "red"}} to='/Sign-Up'>Click here.</NavLink></p>
                    </div>
                    <div className='loginsecondtext'>
                        <p>If you signed up but didn't get your verification email, <NavLink style={{textDecoration: "none", color: "blue"}} to='/Sign-Up'>Click here.</NavLink></p>
                    </div>
                </div>
                <div className='btm2'>
                    <div className='input1div'>
                        <div className='username'>
                            <p>Username</p>
                        </div>
                        <div className='usernameinput'>
                            <input type="text" className='myuserinput' placeholder='Enter a valid username...'/>
                        </div>
                    </div>
                    <div className='input2div'>
                        <div className='password'>
                            <p>Password</p>
                        </div>
                        <div className='passwordinputdiv'>
                            <input type="Password" className='mypasswordinput' placeholder='Enter a valid password...' />
                        </div>
                    </div>
                    <div className='input3div'>
                        <div className='loginreset'>
                            <button onClick={()=>{setMenu1("Tmdblogin")}}className='logintohome'><NavLink style={{textDecoration: "none", color: "white"}} to='/'>Login</NavLink></button>
                            <div className='resetpassword'>
                                <p>Reset password</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tmdblogin