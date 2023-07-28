import React from "react";
import Navbar from "@components/Navbar";
import HeroBanner from "@components/HeroBanner";
import AboutMe from "@components/AboutMe";
import Skills from "@components/Skills";
import Testimonials from "@components/Testimonials";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import { ImHome } from "react-icons/im";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroBanner />
      {/* <AboutMe />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer /> */}
    </>
  );
};

export default Home;
