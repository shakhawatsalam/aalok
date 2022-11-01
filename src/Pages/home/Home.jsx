import React from "react";
import AboutUs from "../../Component/aboutUs/AboutUs";
import ContactUs from "../../Component/contactus/ContactUs";
import Header from "../../Component/header/Header";
import NavBar from "../../Component/navbar/NavBar";
import OusServices from "../../Component/ourservices/OusServices";


const Home = () => {
  return (
      <>
      <NavBar />
      <Header/>
      <OusServices />
      <AboutUs />
      <ContactUs/>
      </>
      
  );
};

export default Home;
