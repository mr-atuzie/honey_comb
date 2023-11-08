import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
// import Packages from "../components/Packages";
import AboutComp from "../components/About";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";
import Ready from "../components/Ready";
import Terms from "../components/Terms";
import Faq from "../components/Faq";
import How from "../components/How";
import Services from "../components/Services";

const About = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({});

  const getDocs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/content`,
        {
          withCredentials: true,
        }
      );

      setContent(res.data);
      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  useEffect(() => {
    getDocs();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://cdn.financebuzz.com/images/2020/08/07/values-based-investing.jpg"
        }
        heading={"About us"}
        text={"   who we are?"}
      />
      <AboutComp about={content?.about} />
      <Services value={content?.value} />
      <How how={content?.how} />
      <Ready />
      <Terms />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default About;
