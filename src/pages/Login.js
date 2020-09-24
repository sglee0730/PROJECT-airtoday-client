import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';

export default function Mappage() 
{
  
    return (
        <div>
            <nav>
                <img className="logo" src={Logo} alt=""/>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About Us</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                </ul>
            </nav>
            <h1>login page</h1>
        </div>
    );
}
