import React from "react";
import AboutUs from "../../Component/aboutUs/AboutUs";
import ContactUs from "../../Component/contactus/ContactUs";
import Footer from "../../Component/footer/Footer";
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
      <ContactUs />
      <Footer/>
      </>
      
  );
};

export default Home;
