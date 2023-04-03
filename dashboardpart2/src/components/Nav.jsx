import React from 'react'
import { Link } from "react-router-dom";
import Statistics from './Statistics';

const Nav = () => {
  return (
    <div>
      <div className="sidenav">
        <li className='btn button-3'>
          <Link to="/" className="link-style">Home</Link>
        </li>
        <li className='btn button-3'>
          <Link to="/about" className="link-style">About</Link>
        </li>
        <li className='btn button-3'>
          <Link to="/brewery" className="link-style" >Brewery</Link>
        </li>

        <Statistics />
      </div>
    </div>
  );
}

export default Nav