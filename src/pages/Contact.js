import React from 'react';
import '../ContactApp.css';
import emailjs from 'emailjs-com'

export default function Mappage() 
{

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_9xr4qmk', 'template_1ujmqfb', e.target, 'user_TzIpBnXNAkfY2RrmR79az')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <>
        <div class="contact-section">
            <h1>Contact Us</h1>
            <div class="contact-border"></div>
            <form class="contact-form" onSubmit={sendEmail}>
                <input type="text" class="contact-form-text" placeholder="Your name" name="user_name"></input>
                <input type="text" class="contact-form-text" placeholder="Your email" name="user_email"></input>
                <textarea class="contact-form-text" placeholder="Your message" name="message"></textarea>
                <input type="submit" class="contact-form-btn" value="Send"></input>
            </form>
        </div>
        </>
    );
}
