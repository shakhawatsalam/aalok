import React from "react";
import "./contactus.css";

const ContactUs = () => {
    return (
      <div className="container">
            
    <div className='containerC'>
      <div className='content'>
        <div className='left-side'>
          <div className='address details'>
            <i className='fas fa-map-marker-alt'></i>
            <div className='topic'>Address</div>
            <div className='text-one'>Example, NP12</div>
            <div className='text-two'>Example Area</div>
          </div>
          <div className='phone details'>
            <i className='fas fa-phone-alt'></i>
            <div className='topic'>Phone</div>
            <div className='text-one'>+000001002310</div>
            <div className='text-two'>+010222220222</div>
          </div>
          <div className='email details'>
            <i className='fas fa-envelope'></i>
            <div className='topic'>Email</div>
            <div className='text-one'>Example@gmail.com</div>
            <div className='text-two'>info.Example@gmail.com</div>
          </div>
        </div>
        <div className='right-side'>
          <div className='topic-text'><span>Contact</span> With Us</div>
          <p>
            If you have any work from Us or any types of quries related to my
            Services, you can send me message from here. It's my pleasure to
            help you.
          </p>
          <form action='#'>
            <div className='input-box'>
              <input type='text' placeholder='Enter your name' />
            </div>
            <div className='input-box'>
              <input type='text' placeholder='Enter your email' />
            </div>
            <div className='input-box message-box'>
              <textarea
                name=''
                id=''
                cols='30'
                rows='8'
                placeholder='Write Your message'></textarea>
            </div>
            <div>
              <input type='button' value='Send Now' className="headerBtn" />
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>
  );
};

export default ContactUs;
