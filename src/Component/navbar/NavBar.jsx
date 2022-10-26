import React, { useState } from "react";
import "./navbar.css";
import img from "../../Assets/Image/aanloklogo.png";

//==============================//
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  //===================================//
  return (
    <>
      <div className='container'>
        <div className='Navbar'>
          <div className='logoImg'>
            <img src={img} alt="" />
          </div>
          <div className={`nav-items ${isOpen && "open"}`}>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
            <a href='/service'>Service</a>
            <a href='/contact'>Contact</a>
          </div>
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}>
            <div className='bar'></div>
          </div>
        </div>
      </div>
    </>
  );
  //=====================================//
}

export default NavBar;
