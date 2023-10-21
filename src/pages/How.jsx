import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Packages from "../components/Packages";
import HowComp from "../components/How";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../components/Loader";
import { useState } from "react";

const How = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({});

  const getDocs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/content`,
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
        heading={"How we do it"}
        text={"lorem ipseum yemsum defrt er"}
      />
      <HowComp how={content?.how} />
      <Packages />
      <Contact />
      <Footer />
    </div>
  );
};

export default How;
