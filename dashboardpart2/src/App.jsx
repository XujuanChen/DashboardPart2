import { useState } from 'react'
import './App.css'
import {Link, Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Brewery from './pages/Brewery'
import Nav from './components/Nav'

function App() {

  return (
    <div className="App">
      <Nav />
      <div>
        <div>
          <h1>Blue Sky Brewery </h1>
        </div>

        <div>
          <Routes>
            <Route path='*' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/brewery/:brewery' element={<Brewery />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
