import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Footer from "../components/Footer";
import How from "../components/How";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Terms from "../components/Terms";
import axios from "axios";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import Ready from "../components/Ready";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({});

  const getDocs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/content`
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
      <Hero />
      <About about={content?.about} />
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

export default Home;
