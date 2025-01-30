import React, { useEffect } from 'react'
import "./Movief.css"

const Movief = ( {searchQuery} ) => {

   

  const Data = [
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg",
      title: "Breaking Bad",
      year: "Jan 20, 2008",
    },

    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg",
      title: "Hazbin Hotel",
      year: "Jan 18, 2024",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/6qfZAOEUFIrbUH3JvePclx1nXzz.jpg",
      title: "Dan Da Dan",
      year: "Oct 04, 2024",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/abf8tHznhSvl9BAElD2cQeRr7do.jpg",
      title: "Arcane",
      year: "Nov 06, 2021",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dqZENchTd7lp5zht7BdlqM7RBhD.jpg",
      title: "Frieren: Beyond Journey's End",
      year: "Sep 29, 2023",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/py0s87C9214KRbZ4kWLQfgsE9ET.jpg",
      title: "No One Will Miss Us",
      year: "Aug 09, 2024",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
      title: "One Piece",
      year: "Oct 20, 1999",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/e3ojpANrFnmJCyeBNTinYwyBCIN.jpg",
      title: "The Apothecary Diaries",
      year: "Oct 22, 2023",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg",
      title: "Rick and Morty",
      year: "Dec 02, 2013",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/zjg4jpK1Wp2kiRvtt5ND0kznako.jpg",
      title: "Better Call Saul",
      year: "Feb 08, 2015",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/q2IiPRSXPOZ6qVRj36WRAYEQyHs.jpg",
      title: "Alchemy of Souls",
      year: "Jun 18, 2022",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/zqjSex7DZn7p4dU7mMktdJ8zQV5.jpg",
      title: "The Owl House",
      year: "Jan 10, 2020",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
      title: "Attack on Titan",
      year: "Apr 07, 2013",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/88dAGv0ywrLJKCynkH226dBwe0i.jpg",
      title: "Regular Show",
      year: "Sep 06, 2010",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dMOpdkrDC5dQxqNydgKxXjBKyAc.jpg",
      title: "INVINCIBLE",
      year: "Mar 25, 2021",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/tCZFfYTIwrR7n94J6G14Y4hAFU6.jpg",
      title: "Death Note",
      year: "Oct 04, 2006",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/dQc0QbDiHjGmWxTfKtBgYtS4bj5.jpg",
      title: "Heartstopper",
      year: "Apr 22, 2022",
    },
    {
      image: "https://media.themoviedb.org/t/p/w220_and_h330_face/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg",
      title: "I Am Not an Animal",
      year: "May 10, 2004",
    },
  ]

  const filteredMovies = Data.filter((e)=>{
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      e.title.toLowerCase().includes(lowerCaseQuery) || e.year.toString().includes(lowerCaseQuery)
    );
  });


  
  return (
    <div className='Movief'>
        <div className='moviefwrap'>
          <div className='moviefheader'>
            <h2>Top Rated Movies</h2>
          </div>
          <div className='moviebtm'>
            <div className='movieleft'>
              <img src="https://i.pinimg.com/236x/2f/86/5d/2f865d5c78f336f6dcd05f098d624478.jpg" alt="" />
            </div>
            <div className='movieright'>
              <div className='movierightwrap'>
                { 
                  filteredMovies.map((e)=>(
                    <div className='movieimage2'>
                      <div className='movieimgediv'>
                        <img src={e.image} alt="" />
                      </div>
                      <div className='movietextdiv'>
                        <div className='mymovietitle'>{e.title}</div>
                        <div className='mymovieyear'>{e.year}</div>
                      </div>
                    </div>
                  ))
                }
                
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Movief