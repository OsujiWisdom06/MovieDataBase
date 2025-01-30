import React from 'react'
import "./Directors.css"

const Director = ({ searchQuery }) => {

  const Data= [
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg",
      name: "Nicolas Cage",
      description: "The Croods, National Treasure, and Ghost Rider",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/9VYK7oxcqhjd5LAH6ZFJ3XzOlID.jpg",
      name: "Pedro Pascal",
      description: "The Mandalorian, The Last of Us, and The Equalizer 2",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/hTlhrrZMj8hZVvD17j4KyAFWBHc.jpg",
      name: "Donnie Yen",
      description: "xXx: Return of Xander Cage, Rogue One: A Star Wars Story, and Ip Man",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/7DP3bm3MS0qa0L8tBLHGebbCu6H.jpg",
      name: "Jean-Claude Van Damme",
      description: "Bloodsport, Universal Soldier, and Street Fighter",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/ts9l18VkDSooRGDWIeQegNVHciC.jpg",
      name: "Leonardo DiCaprio",
      description: "Inception, Titanic, and The Wolf of Wall Street",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/2Tlg632tAkfZNlnoF8CV8F9Pf63.jpg",
      name: "Chloë Grace Moretz",
      description: "Kick-Ass, The 5th Wave, and Carrie",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg",
      name: "Gary Oldman",
      description: "The Dark Knight Rises, The Dark Knight, and Bram Stoker's Dracula",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/1K2IvGXFbKsgkExuUsRvy4F0c9e.jpg",
      name: "Sam Elliott",
      description: "A Star Is Born, Ghost Rider, and Hulk",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/eOh4ubpOm2Igdg0QH2ghj0mFtC.jpg",
      name: "Tom Cruise",
      description: "Edge of Tomorrow, Oblivion, and Mission: Impossible - Ghost Protocol",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/hNwZWdT2KxKj1YLbipvtUhNjfAp.jpg",
      name: "Aaron Pierre",
      description: "Rebel Ridge, Mufasa: The Lion King, and Old",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
      name: "Robert Downey Jr.",
      description: "The Avengers, Avengers: Infinity War, and Iron Man",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/d81K0RH8UX7tZj49tZaQhZ9ewH.jpg",
      name: "Tom Hardy",
      description: "Mad Max: Fury Road, Venom, and Venom: Let There Be Carnage",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg",
      name: "Jackie Chan",
      description: "Rush Hour, Rush Hour 2, and Rush Hour 3",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg",
      name: "Dwayne Johnson",
      description: "Jumanji: Welcome to the Jungle, Jumanji: The Next Level, and San Andreas",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/gtBUIpZ3dvLpOMIVORxE6sHSyZj.jpg",
      name: "Amanda Seyfried",
      description: "In Time, Dear John, and Mamma Mia!",
    },
    {
      image: "https://media.themoviedb.org/t/p/w235_and_h235_face/4rjnRCQ6bGFYdBb4UooOjsQy12c.jpg",
      name: "Brad Pitt",
      description: "Inglourious Basterds, World War Z, and Fight Club",
    },
  ];

  const filterDirectors = Data.filter((Director)=> Director.name.toLocaleLowerCase().includes(searchQuery)
);

  return (
    <div className='director'>
      <div className='Directorswap'>
        <div className='directorheader'>
          <h2 style={{color: "red"}}>Directors</h2>
        </div>
        <div className='director-btm'>
          {filterDirectors.length === 0 ? (<p>No data found</p>) : (
            filterDirectors.map((e)=>(
              <div className='directorimage'>
                <div className='directorimagediv'>
                  <img src={e.image} alt="" />
                </div>
                <div className='directortextdiv'>
                  <div className='directorfirsttext'>{e.name}</div>
                  <div className='directorsecondtext'>{e.description}</div>
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

export default Director