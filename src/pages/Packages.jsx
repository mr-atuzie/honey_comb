import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Terms from "../components/Terms";
import Ready from "../components/Ready";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import PackagesComp from "../components/Packages";

const Packages = () => {
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://cdn.financebuzz.com/images/2020/08/07/values-based-investing.jpg"
        }
        heading={"Our Packages"}
        text={"what we offer"}
      />
      <PackagesComp homePage />
      <Ready />
      <Terms />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Packages;
