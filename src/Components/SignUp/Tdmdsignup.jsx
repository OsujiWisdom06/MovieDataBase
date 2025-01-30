import React from 'react'
import "./Tdmbsignup.css"
import { ImCheckmark } from "react-icons/im";

const Tdmdsignup = () => {


   const Data = [
    {
      text: "Find something to watch on your subscribed streaming services",
    },
    {
      text: "Log the movies and TV shows you have watched",
    },
    {
      text: "Keep track of your favourite movies and TV shows and get recommendations from them",
    },
    {
      text: "Build and maintain a personal watchlist",
    },
    {
      text: "Take part in movie and TV discussions",
    },
    {
      text: "Contribute to, and improve the information in our database",
    },
   ]


  return (
    <div className='mysignuppage'>
      <div className='mysignuppagewrap'>
        <div className='signupright'>
          <div className='signuprightheader'>
            <h3>Benefits of being a member</h3>
          </div>
          <div className='signuprightmain'>
            {Data.map((e)=>(
               <div className='signupmainimage'>
                <div className='signupmainicon'>
                <ImCheckmark />
                </div>
                <div className='signupmaintext'>{e.text}</div>
               </div> 
               ))}
           
          </div>
        </div>
        <div className='signupleft'>
          <div className='signupinnerwrap'>
            <div className='signupheader'>
              <h2>Sign up for an account</h2>
            </div>
            <div className='signuptext1'>
              <p>Signing up for an account is free and easy. Fill out the form below to get started.</p>
            </div>
            <div className='signumain'>
              <div className='signup1'>
                <div className='signupuser'>
                  <p>Username</p>
                </div>
                <div className='signupinput'>
                  <input type="text" className='mysignupdiv' placeholder='' />
                </div>
              </div>
              <div className='signup2'>
                <div className='signuppassword'>
                  <p>Password (4 characters minimum)</p>
                </div>
                <div className='signupupinput'>
                  <input type="Password" className='myinputdiv22'/>
                </div>
              </div>
              <div className='signup3'>
                <div className='comfirm'>
                  <p>Password Confirm</p>
                </div>
                <div className='confirminputdiv'>
                  <input type="Password" placeholder='' className='mycomfirminput'/>
                </div>
              </div>
              <div className='signup4'>
                <div className='email2'>
                  <p>Email</p>
                </div>
                <div className='emailinputdiv'>
                  <input type="Email" className='myemailinput'/>
                </div>
              </div>
              <div className='signup5'>
                <div className='signupwrap'>
                  <div className='signuptext'>
                    <p>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</p>
                  </div>
                  <div className='signupbtmtext'>
                    <div className='signupcancel'>
                      <button className='signupmmainbtn'>Sign Up</button>
                      <div className='cancel'>Cancel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tdmdsignup