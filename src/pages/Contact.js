import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Mappage() 
{
  
    return (
        <>
        <nav>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <Link to="/login"><li>Login</li></Link>
        </ul>
        </nav>
        <header className="header">
            <div className="left_area">
                <h3>Life <span>Today</span></h3>
            </div>
        </header>
        <h1>Contact Us</h1>
        </>
    );
}
