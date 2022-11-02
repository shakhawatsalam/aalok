import React from "react";
import "./aboutus.css";
import AboutUsImg from "../../Assets/Image/27.svg";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

function AboutUs() {
  return (
    <div className='container'>
      <div className='header_container'>
        <div className='leftSide'>
          <div className='title'>
            <h1>
              <span>About</span> Us
            </h1>
          </div>
          <div className='content'>
            <h3>We're here to make your brand a success!</h3>
            <p>
              Aanlok is a key to unlocking the path of success of your
              startup/business through our technology and services. We offer a
              great service in the design, development, and marketing of your
              website. Our goal is helping you to accomplish your vision ,grow
              digitally and obtain a great position in the digital world with
              our great strategies and IT based tools. If you are building a
              startup/business website Aanlok is here to simplify the process.
              We promise you the most unique logo design, eye-catching banner
              design, thumbnail design and a purposeful user-friendly website.
              Our service is dedicated to boosting your growth in the digital
              world.
            </p>
            {/* <div>
               <button className="headerBtn">Button</button>
              </div> */}
          </div>
          {/* <div className='social'>
              <a href=''>
                <AiFillFacebook/>
              </a>
              <a href=''>
                <AiFillLinkedin/>
              </a>
              <a href=''>
                <RiWhatsappFill/>
              </a>
            </div> */}
        </div>
        <div className='rightSide'>
          <div className='headerImage'>
            <img src={AboutUsImg} alt='' />
          </div>
        </div>
      </div>

      {/* <div className='section'>
        <div className='AboutUsContainer'>
          <div className='content-section'>
            <div className='title'>
              <h1>About Us</h1>
            </div>
            <div className='content'>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className='button'>
                <a href=''>Read More</a>
              </div>
            </div>
            <div className='social'>
              <a href=''>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href=''>
                <i className='fab fa-twitter'></i>
              </a>
              <a href=''>
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
          <div className='rightSide'>
            <div className='headerImage'>
              <img src={AboutUsImg} alt='' />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default AboutUs;
