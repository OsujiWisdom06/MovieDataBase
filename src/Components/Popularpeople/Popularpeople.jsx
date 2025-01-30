import React from 'react'
import "./Popularpeople.css"
import { BsDisplay } from 'react-icons/bs'


const Popularpeople = ({ searchQuery }) => {

   const Data = [
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/ego6I5PWMZRJGYyu8aPjiNwsz3l.jpg",
        name: "Miho Nomoto",
        description: "Fudoh: The New Generation, Deadly Outlaw: Rekka, and Intimate Desire"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/uDnIdU4KGjQg7liFvb9wnALvg95.jpg",
        name: "Sydney Sweeney",
        description: "Euphoria, Anyone But You, and Immaculate"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg",
        name: "Jason Statham",
        description: "The Meg, Wrath of Man, and The Transporter"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/d7tO5Z1UdpMfutCdW2zfLfXCOfO.jpg",
        name: "Yvonne Yung Hung",
        description: "The Legend of Drunken Master, A Chinese Torture Chamber Story, and Sex and the Emperor"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/BE2sdjpgsa2rNTFa66f7upkaOP.jpg",
        name: "Timothée Chalamet",
        description: "Dune, Dune: Part Two, and Call Me by Your Name"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
        name: "Scarlett Johansson",
        description: "Lucy, Black Widow, and Ghost in the Shell"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/pviRYKEEmoPUfLYwP1VHJ6LQcRg.jpg",
        name: "Gabriel Guevara",
        description: "My Fault, Your Fault, and Raising Voices"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
        name: "Keanu Reeves",
        description: "The Matrix, John Wick, and John Wick: Chapter 2"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/74G750E1HZzjksJ9oSr8aWFadE2.jpg",
        name: "McKenna Roberts",
        description: "Skyscraper, Barbie, and Euphoria"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/nVznarxjPgR2JtMUBNl7TRxqTqH.jpg",
        name: "Alexandra Daddario",
        description: "San Andreas, Percy Jackson & the Olympians: The Lightning Thief, and Baywatch"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/xlvq6OYCN6yQef4fpJQtwVyQxqr.jpg",
        name: "Nicole Wallace",
        description: "My Fault, Your Fault, and Raising Voices"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/hjuAEb4VksEtgSpygDKXs5WSWho.jpg",
        name: "Zhao Lusi",
        description: "Hidden Love, I Hear You, and The Romance of Tiger and Rose"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg",
        name: "Jenna Ortega",
        description: "Wednesday, X, and Scream"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/3vxvsmYLTf4jnr163SUlBIw51ee.jpg",
        name: "Ana de Armas",
        description: "Blade Runner 2049, Knives Out, and War Dogs"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/jrUvWNqOpfDm3D0KhbuRwQOy8Nu.jpg",
        name: "Hande Erçel",
        description: "Love Is in the Air, Love Doesn't Understand Words, and Sun's Daughters"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/eOh4ubpOm2Igdg0QH2ghj0mFtC.jpg",
        name: "Tom Cruise",
        description: "Edge of Tomorrow, Oblivion, and Mission: Impossible - Ghost Protocol"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/2HOlaSd30yBCrr366GfPG2PF6D8.jpg",
        name: "Ali Larter",
        description: "Final Destination, Final Destination 2, and Resident Evil: Extinction"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/kU6N4Z2L7f3mFeSZnrnmFE0k4ZZ.jpg",
        name: "Jacob McCarthy",
        description: "The Last Summer, The Tragedy of Macbeth, and SAS Rogue Heroes"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/xak9L0fkIOkjSwJpz3SWLl94tVP.jpg",
        name: "Dyessa Garcia",
        description: "Donselya, Init, and Dilig"
    },
    {
        image: "https://media.themoviedb.org/t/p/w235_and_h235_face/xghVxRPUmFCHYxzD0NxMO8NtoKK.jpg",
        name: "Cecilia Cheung",
        description: "The Promise, King of Comedy, and Shaolin Soccer"
    },
    
   ]

   const filterPopularpeople = Data.filter((Popularpeople)=> Popularpeople.name.toLocaleLowerCase().includes(searchQuery)
);


  return (
    <div className='Popularpeople'>
        <div className='popularpeopleheader'>
            <div className='popularpeopleheaderwrap'>
                <h2>Popular Actors</h2></div>
        </div>
        <div className='popularpeopleheaderbtm'>
            <div className='actorswrap'>
                {filterPopularpeople.length === 0 ? (<p>No data found</p>) : (
                     filterPopularpeople.map((e)=>(
                        <div className='actorsimagewrap'>
                            <div className='actorimagediv'>
                                <img src={e.image} alt="" />
                            </div>
                            <div className='actorstext'>
                                <div className='firstactortext'>{e.name}</div>
                                <div className='secondactortext'>{e.description}</div>
                            </div>
                        </div>
                        )
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Popularpeople