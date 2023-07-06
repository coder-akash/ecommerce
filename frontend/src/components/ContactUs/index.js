import React from 'react';
import Header from '../Header';
import './index.css'

const ContactUs = () => {
    return (
        <>
        <Header />
        <div className="contactUS">
        <div className="contactUS-container">
            <div className="contact-image"></div>
            <div className="contact-form shadow-effect">
                <h1>Contact Us</h1>
                <form>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows='4' placeholder="Your Message" required />
                    <button type="submit">Send Message</button>
                </form>
                
                <div className="social-icons">
                
                    <img src='fb.png' alt='fb' />
                    <img src='insta.png' alt='fb' />
                    <img src='twitter.png' alt='fb' />
                    <img src='linkdin.png' alt='fb' />  
                </div>              
            </div>
        </div>
        <footer className="contactUS-footer">
            Powered by @FlyBuy
        </footer>
    </div> 
        </>
    );
}

export default ContactUs;
