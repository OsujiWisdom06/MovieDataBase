import React from 'react'
import "./Free.css"

const Free = ({ searchQuery }) => {

    const Data= [
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/imKSymKBK7o73sajciEmndJoVkR.jpg",
            title: "Flow",
            year: "Aug 29, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/paesE1W2WFqJEBNMFUszFVcuDsW.jpg",
            title: "The Sand Castle",
            year: "Jan 24, 2025"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/aZT7iZwR4LE2kk7sXWslgpOP7oT.jpg",
            title: "I Am Nobody",
            year: "Aug 04, 2023"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
            title: "Severance",
            year: "Feb 17, 2022"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/rzsmKSFEsEWBLbJ968abffnfYZ7.jpg",
            title: "Number 24",
            year: "Oct 30, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/8pwdnL3pEISIN1EGmwZzU6hpNVk.jpg",
            title: "Ferry 2",
            year: "Dec 20, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/4HTfd1PhgFUenJxVuBDNdLmdr0c.jpg",
            title: "The Blacklist",
            year: "Sep 23, 2013",
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/wIGJnIFQlESkC2rLpfA8EDHqk4g.jpg",
            title: "Apocalypse Z: The Beginning of the End",
            year: "Oct 04, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/1sQA7lfcF9yUyoLYC0e6Zo3jmxE.jpg",
            title: "Your Fault",
             year: "Dec 26, 2024"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/s4QRRYc1V2e68Qy9Wel9MI8fhRP.jpg",
            title: "Yellowstone",
             year: "Jun 20, 2018"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/KoYWXbnYuS3b0GyQPkbuexlVK9.jpg",
            title: "Supernatural",
             year: "Sep 13, 2005"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/mBcu8d6x6zB1el3MPNl7cZQEQ31.jpg",
            title: "NCIS",
            year: "Sep 23, 2003"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/fHpKWq9ayzSk8nSwqRuaAUemRKh.jpg",
            title: "Jujutsu Kaisen",
            year: "Oct 03, 2020"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/sZ6KyLsnkCLwNetqYup3PI1yhnZ.jpg",
            title: "Six Sisters",
            year: "Apr 23, 2015"
        },
        {
            image: "https://media.themoviedb.org/t/p/w220_and_h330_face/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg",
            title: "Squid Game",
            year: "Sep 17, 2021"
        },
        
        
    ]

  return (

    <div className='Wpl'>
        <div className='Trendingheader'>
            <div className='Trendingheaderwrap'>
                <div className='trendingmain2'>
                    <div className='trendingfirst2'>
                        <h2>Free To Watch</h2>
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


export default Free