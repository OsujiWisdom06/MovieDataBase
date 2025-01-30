import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer'>
        <div className='footerwrap'>
            <div className='line1'>
              <div className='footerlogo'>
                <div className='footerlogologo'>
                  <div className='upfooterthe'>
                    <div className='the1'>
                      <h1>THE</h1>
                    </div>
                    <div className='the2'></div>
                  </div>
                  <div className='secondfooterthe'>
                    <h1>MOVIE</h1>
                  </div>
                  <div className='thirdfooterthe'>
                    <div className='thirdthe'>
                      <h1>DB</h1>
                    </div>
                    <div className='thirdthe2'></div>
                  </div>
                </div>
              </div>
              <div className='footerbtm'>
                <button className='jointhecommunity'>
                  <h3>JOIN THE COMMUNITY</h3>
                </button>
              </div>
            </div>
            <div className='line2'>
              <div className='line2up'>
                <h3>THE BASICS</h3>
              </div>
              <div className='line2btm1'>
                <p>About TMDB</p>
                <p>Contact Us</p>
                <p>Support Forums</p>
                <p>API</p>
                <p>System Status</p>
              </div>
            </div>
            <div className='line3'>
            <div className='line2up'>
              <h3>GET INVOLVED</h3>
            </div>
            <div className='line3btm1'>
              <p>Contribution Bible</p>
              <p>Add New Movie</p>
              <p>Add New TV Show</p>
            </div>
            </div>
            <div className='line4'>
            <div className='line2up'>
              <h3>COMMUNITY</h3>
            </div>
            <div className='line4btm1'>
              <p>Guidelines</p>
              <p>Discussions</p>
              <p>Leaderboard</p>
            </div>
            </div>
            <div className='line5'>
            <div className='line2up'>
              <h3>LEGAL</h3>
            </div>
            <div className='line5btm1'>
              <p>Terms of Use</p>
              <p>API Terms of Use</p>
              <p>Privacy Policy</p>
              <p>DMCA Policy</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer