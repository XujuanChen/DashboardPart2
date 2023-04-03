import React from 'react'
import { Link } from "react-router-dom";
import Statistics from './Statistics';

const Nav = () => {
  return (
    <div>
      <div className="sidenav">
        <li className='btn button-3 blue-btn'>
          <Link to="/" className="link-style"> <h3> 🏠 Home </h3> </Link>
        </li>
        <li className='btn button-3 blue-btn'>
          <Link to="/about" className="link-style"><h3> 🧐 About </h3> </Link>
        </li>
        <li className='btn button-3 blue-btn'>
          <Link to="/brewery" className="link-style"> <h3> 🧋 Brewery </h3> </Link>
        </li>

        <Statistics />
      </div>
    </div>
  );
}

export default Nav