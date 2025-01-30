import React from 'react'
import TvShow from './Pages/TvShow'
import People from './Pages/People'
import Movies from './Pages/Movies'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Pages/Login'
import SignUP from './Pages/SignUP'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<TvShow/>}></Route>
        <Route path='/movies' element={<Movies/>}></Route>
        <Route path='/people' element={<People/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Sign-Up' element={<SignUP/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App