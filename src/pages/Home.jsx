import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import How from "../components/How";
import Contact from "../components/Contact";
import Packages from "../components/Packages";
import Faq from "../components/Faq";
import Terms from "../components/Terms";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <How />
      <Packages />
      <Terms />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
