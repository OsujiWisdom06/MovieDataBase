import React from 'react'
import Header from '../Components/Header/Header'
import Search from '../Components/Search/Search'
import Hero from '../Components/Hero/Hero'
import Trending from '../Components/Trending/Trending'
import Wpl from '../Components/Whatspopular/Wpl'
import Free from '../Components/FreeTW/Free'
import JoinToday from '../Components/JoinToday/JoinToday'
import Leadershipboard from '../Components/LeaderShipBoard/Leadershipboard'
import Footer from '../Components/Footer/Footer'

const TvShow = () => {
  return (
    <div>
      <Header/>
      <Search/>
      <Hero/>
      <Trending/>
      <Wpl/>
      <Free/>
      <JoinToday/>
      <Leadershipboard/>
      <Footer/>
    </div>
  )
}

export default TvShow