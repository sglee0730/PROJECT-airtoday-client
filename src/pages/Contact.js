import React from 'react';
import '../ContactApp.css';

export default function Mappage() 
{
    return (
        <>
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
        </>
    );
}
