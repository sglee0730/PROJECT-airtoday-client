import React from 'react';
import '../ContactApp.css';
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

        <div class="contact-section">
            <h1>Contact Us</h1>
            <span class="border"></span>
            <form class="contact-form">
                <input type="text" class="contact-form-text" placeholder="Your name"></input>
                <input type="text" class="contact-form-text" placeholder="Your email"></input>
                <textarea class="contact-form-text" placeholder="Your message"></textarea>
                <input type="submit" class="contact-form-btn" value="Send"></input>
            </form>
        </div>
        </>
    );
}
