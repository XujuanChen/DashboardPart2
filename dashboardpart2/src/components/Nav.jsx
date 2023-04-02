import React from 'react'
import {Outlet, Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <nav>
            <ul>
                <li className="home-link" >
                    <Link to='/'>Home</Link>
                </li>
                <li className="home-link" >
                    <Link to='/about'>About</Link>
                </li>
                <li className="home-link" >
                    <Link to="/brewery">Brewery</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav