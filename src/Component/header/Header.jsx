import React from "react";
import "./header.css";
import svg from "../../Assets/Image/undraw_all_the_data_re_hh4w.svg";
const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='header_container'>
          <div className='leftSide'>
            <h1>
              <span>Your Brand</span> Success OTP{" "}
            </h1>
            <h2>(Outstanding Technological Partner)</h2>
            <p>
              We aim to broaden the digital growth of startups and businesses so
              that they can succeed through our technologies and services.
            </p>
            
              <a href="#contactUs" >Contact</a>
            
          </div>
          <div className='rightSide'>
            <div className='headerImage'>
              <img src={svg} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
