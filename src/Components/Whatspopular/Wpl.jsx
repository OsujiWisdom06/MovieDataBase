import React from 'react'
import "./Wpl.css"

const Wpl = () => {
   
  const Data= [
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/aQvJ5WPzZgYVDrxLX4R6cLJCEaQ.jpg",
        title: "Sonic the Hedgehog",
        year: "Feb 12, 2020"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/oGythE98MYleE6mZlGs5oBGkux1.jpg",
        title: "Bad Boys: Ride or Die",
        year: "Jun 05, 2024"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/xanYKxuFkDPrMngvm1NSHVGOEjS.jpg",
        title: "Unstoppable",
        year: "Dec 06, 2024"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/sjMN7DRi4sGiledsmllEw5HJjPy.jpg",
        title: "Carry-On",
        year: "Dec 13, 2024"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dcoc4C57lCpAzBr2qojFjRCKO9E.jpg",
        title: "Undercover Party Crasher",
        year: "Jan 17, 2025"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/4c5yUNcaff4W4aPrkXE6zr7papX.jpg",
        title: "The Night Agent",
        year: "Mar 23, 2023"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/1XS1oqL89opfnbLl8WnZY1O1uJx.jpg",
        title: "Game of Thrones",
        year: "Apr 17, 2011"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/cdqLnri3NEGcmfnqwk2TSIYtddg.jpg",
        title: "Red One",
        year: "Oct 31, 2024"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3Cz7ySOQJmqiuTdrc6CY0r65yDI.jpg",
        title: "House",
        year: "Nov 16, 2004"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
        title: "Back in Action",
        year: "Dec 17, 2021"
    },
    {
        image: "https://media.themoviedb.org/t/p/w220_and_h330_face/q8dWfc4JwQuv3HayIZeO84jAXED.jpg",
        title: "Dexter",
        year: "Oct 01, 2006"
    }, 
    
]


  return (
    <div className='Wpl'>
        <div className='Trendingheader'>
            <div className='Trendingheaderwrap'>
                <div className='trendingmain3'>
                    <div className='trendingfirst3'>
                        <h2>What's Popular</h2>
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
  


export default Wpl