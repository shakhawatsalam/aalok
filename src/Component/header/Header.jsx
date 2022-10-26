import React from "react";
import './header.css'
import svg from '../../Assets/Image/undraw_all_the_data_re_hh4w.svg'
const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header_container">
                <div className="leftSide">
                        <h1><span>Lorem ipsum</span> dolor sit amet consectetur.</h1>
                        <h2>Lorem, ipsum dolor.</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint nemo laudantium quos quas ipsam porro optio neque, eos expedita repudiandae beatae enim quis, asperiores sapiente cupiditate a reiciendis veritatis quaerat.</p>
                        <button className="headerBtn">Button</button>
                    </div>
                    <div className="rightSide">
                        <div className="headerImage">
                            <img src={svg} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
  );
};

export default Header;
