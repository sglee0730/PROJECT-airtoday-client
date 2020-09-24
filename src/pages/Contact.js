import React from 'react';
import '../ContactApp.css';
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

        <div class="contact-section">
            <h1>Contact Us</h1>
            <div class="contact-border"></div>
            <form class="contact-form">
                <input type="text" class="contact-form-text" placeholder="Your name"></input>
                <input type="text" class="contact-form-text" placeholder="Your email"></input>
                <textarea class="contact-form-text" placeholder="Your message"></textarea>
                <input type="submit" class="contact-form-btn" value="Send"></input>
            </form>
        </div>
      </div>
    );
}
