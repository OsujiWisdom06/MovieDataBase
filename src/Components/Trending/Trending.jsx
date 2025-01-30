import React, { useEffect } from 'react'
import "./Trending.css"

const Trending = () => {

    const Data= [
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
            title: "Sonic the Hedgehog 3",
            year: "Dec 19, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
            title: "Moana 2",
            year: "Nov 21, 2024",
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/sqiCinCzUGlzQiFytS30N1nO3Pt.jpg",
            title: "Star Trek: Section 31",
            year: "Jan 15, 2025"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/5qGIxdEO841C0tdY8vOdLoRVrr0.jpg",
            title: "Nosferatu",
            year: "Dec 25, 2024",
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/lqjr5O9Z7ChkWpNLbJ01paofjhP.jpg",
            title: "Paradise",
            year: "Jan 26, 2025"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/7MrgIUeq0DD2iF7GR6wqJfYZNeC.jpg",
            title: "Anora",
            year: "Oct 14, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/4c5yUNcaff4W4aPrkXE6zr7papX.jpg",
            title: "The Night Agent",
            year: "Mar 23, 2023"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
            title: "Solo Leveling",
            year: "Jan 07, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
            title: "The Substance",
            year: "Sep 07, 2024"
        },
        
        
    ]

    

  return (
    <div className='Trending'>
        <div className='Trendingheader'>
            <div className='Trendingheaderwrap'>
                <div className='trendingmain'>
                    <div className='trendingfirst'>
                        <h2>Trending</h2>
                    </div>
                    <div className='trendingsecond'>
                        <div className='trendingsecondbtn'>
                            <div className='trendingmovie'>
                                <h3>Movies</h3>
                            </div>
                            <div className='trendingmovie2'>
                                <h3>TV</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className='Trendingbtm'>
        <div className='Trendingbtmwrap'>
            { Data.length === 0 ? (<p>Loading....</p>) : (
            Data.map((e)=>(
                 <div className='trendingimage'>
                    <div className='imagediv'>
                        <img src={e.image} alt="" />
                    </div>
                    <div className='trendingtextdiv'>
                        <div className='title'>{e.title}</div>
                        <div className='date'>{e.year}</div>
                        <div></div>
                    </div>
                 </div>
                 )
            ))}
        </div>
        </div>
    </div>
  )
}

export default Trending