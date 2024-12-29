import React from "react";
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Projects from "./Projects"; 
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm";

function index() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <ContactForm />
        <Footer />
        <LeftSider />
      </div>
      )}
      
    </div>
  );
}

export default index;
