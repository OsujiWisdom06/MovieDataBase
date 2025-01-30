import React, { useState } from 'react'
import Popularpeople from '../Components/Popularpeople/Popularpeople'
import Header from '../Components/Header/Header'
import Director from '../Components/Directors/Director'
import Footer from '../Components/Footer/Footer'
import Search from '../Components/Search/Search'

const People = () => {

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Header/>
      <Search setSearchQuery={setSearchQuery}/>
      <Popularpeople searchQuery={searchQuery}/>
      <Director searchQuery={searchQuery}/>
      <Footer/>
    </div>
  )
}

export default People