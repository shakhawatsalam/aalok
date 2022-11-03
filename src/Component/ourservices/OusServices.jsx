import React from "react";
import "./ourservices.css";
import { MdMonitor} from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import {BsMegaphoneFill} from "react-icons/bs"


const OusServices = () => {
  return (
    <div className='container'>
      <h1 className='OurServicesTitle'>
        <span>Our</span> Services
      </h1>
      <div className='ServiceContainer'>
        <div className='row'>
          <div className='column'>
            <div className='card'>
              <div className='icon-wrapper'>
                <FaPaintBrush />
              </div>
              <h3>Graphic Design</h3>
              <p>“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs</p>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='icon-wrapper'>
                <MdMonitor />
              </div>
              <h3>Wev Development</h3>
              <p>
                “A successful website does three things: It attracts the right
                kinds of visitors. Guides them to the main services or product
                you offer. Collect Contact details for future ongoing relation.”
                - Mohamed Saad
              </p>
            </div>
          </div>
          <div className='column'>
            <div className='card'>
              <div className='icon-wrapper'>
                <BsMegaphoneFill/>
              </div>
              <h3>Digital Marketing</h3>
              <p>
                “Good marketing makes the company look smart. Great marketing
                makes the customer feel smart.” – Joe Chernov
              </p>
            </div>
          </div>
          {/* <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-truck-pickup"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-broom"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <i className="fas fa-plug"></i>
            </div>
            <h3>Service Heading</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default OusServices;
