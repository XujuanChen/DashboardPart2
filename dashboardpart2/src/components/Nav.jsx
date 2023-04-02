import React from 'react'
import {Outlet, Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <nav>
            <ul>
                <li className="home-link" key="home-button">
                    <Link to='/'>Home</Link>
                </li>
                <li className="home-link" key="home-button">
                    <Link to='/about'>About</Link>
                </li>
                <li className="home-link" key="home-button">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
  )
}

export default Nav