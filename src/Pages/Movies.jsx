import React, { useState } from 'react'
import Header from '../Components/Header/Header'
// import Search from '../Components/Search/Search'
import Footer from '../Components/Footer/Footer'
import Movief from '../Components/Movie/Movief'
import Search2 from '../Components/Search2/Search2'

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query)
  }
    
  return (
    <div>
      <Header/>
      <Search2 onSearch={handleSearch}/>
      <Movief searchQuery={searchQuery}/>
      <Footer/>
    </div>
  )
}

export default Movies