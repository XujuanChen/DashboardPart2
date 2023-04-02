import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import {Link, Route, Routes} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />

      <div>
        <div>
          <h1>Blue Sky Brewery </h1>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
