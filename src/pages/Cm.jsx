import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import axios from "axios";

const Cm = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({});
  const [hero, setHero] = useState("");
  const [heroLoader, setHeroLoader] = useState(false);
  const [about, setAbout] = useState("");
  const [aboutLoader, setAboutLoader] = useState(false);
  const [how, setHow] = useState("");
  const [howLoader, setHowLoader] = useState(false);
  const [value, setValue] = useState("");
  const [valueLoader, setValueLoader] = useState(false);

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

  console.log(content);

  const heroContent = async (e) => {
    setHeroLoader(true);
    e.preventDefault();

    if (!hero) {
      return toast.error("Enter Hero Message");
    }

    const heroData = { hero };
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/hero`,
        heroData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("Hero section updated");
      setHeroLoader(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setHeroLoader(false);
    }
  };

  const aboutContent = async (e) => {
    setAboutLoader(true);
    e.preventDefault();

    if (!about) {
      return toast.error("Enter about Message");
    }

    const aboutData = { about };
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/about`,
        aboutData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("about section updated");
      setAboutLoader(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setAboutLoader(false);
    }
  };

  const howContent = async (e) => {
    setHowLoader(true);
    e.preventDefault();

    if (!how) {
      return toast.error("Enter Message");
    }

    const howData = { how };
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/how`,
        howData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("How we do it section updated");
      setHowLoader(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setHowLoader(false);
    }
  };

  const valueContent = async (e) => {
    setValueLoader(true);
    e.preventDefault();

    if (!value) {
      return toast.error("Enter Message");
    }

    const valueData = { value };
    try {
      const res = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/value`,
        valueData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("why chose us section updated");
      setValueLoader(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setValueLoader(false);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <AdminHeader />
      <h1 className="  font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Edit content
      </h1>

      <div className="">
        <form
          onSubmit={heroContent}
          className=" lg:w-[45%] mx-auto  bg-white p-3 lg:p-5 rounded-sm shadow-lg    "
        >
          <div className="">
            <h2 className="text-xl font-bold text-green-600 ">
              Hero blod Message
            </h2>
          </div>

          <div className="relative mt-10">
            <textarea
              className="block px-2.5 py-3 lg:p-4 w-full h-48  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={content?.hero}
              onChange={(e) => setHero(e.target.value)}
            ></textarea>
            <label className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-white px-2  left-1">
              Message
            </label>
          </div>

          <button
            disabled={heroLoader}
            className=" w-full text-center py-3.5 my-10  bg-green-600 text-white  disabled:bg-green-300"
            type="submit"
          >
            {heroLoader ? "Loading" : "Add"}
          </button>
        </form>

        <form
          onSubmit={aboutContent}
          className=" lg:w-[45%] mx-auto  bg-white p-3 lg:p-5 rounded-sm shadow-lg  my-16   "
        >
          <div className="">
            <h2 className="text-xl font-bold text-green-600 ">Who we are</h2>
          </div>

          <div className="relative mt-10">
            <textarea
              className="block px-2.5 py-3 lg:p-4 w-full h-48  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={content?.about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
            <label className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-white px-2  left-1">
              Message
            </label>
          </div>

          <button
            disabled={aboutLoader}
            className=" w-full text-center py-3.5 my-10  bg-green-600 text-white  disabled:bg-green-300"
            type="submit"
          >
            {aboutLoader ? "Loading" : "Add"}
          </button>
        </form>

        <form
          onSubmit={howContent}
          className=" lg:w-[45%] mx-auto  bg-white p-3 lg:p-5 rounded-sm shadow-lg  my-16   "
        >
          <div className="">
            <h2 className="text-xl font-bold text-green-600 ">How we do it</h2>
          </div>

          <div className="relative mt-10">
            <textarea
              className="block px-2.5 py-3 lg:p-4 w-full h-48  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={content?.how}
              onChange={(e) => setHow(e.target.value)}
            ></textarea>
            <label className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-white px-2  left-1">
              Message
            </label>
          </div>

          <button
            disabled={howLoader}
            className=" w-full text-center py-3.5 my-10  bg-green-600 text-white  disabled:bg-green-300"
            type="submit"
          >
            {howLoader ? "Loading" : "Add"}
          </button>
        </form>

        <form
          onSubmit={valueContent}
          className=" lg:w-[45%] mx-auto  bg-white p-3 lg:p-5 rounded-sm shadow-lg    "
        >
          <div className="">
            <h2 className="text-xl font-bold text-green-600 ">why choose us</h2>
          </div>

          <div className="relative mt-10">
            <textarea
              className="block px-2.5 py-3 lg:p-4 w-full h-48  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              defaultValue={content?.value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>
            <label className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-white px-2  left-1">
              Message
            </label>
          </div>

          <button
            disabled={valueLoader}
            className=" w-full text-center py-3.5 my-10  bg-green-600 text-white  disabled:bg-green-300"
            type="submit"
          >
            {valueLoader ? "Loading" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cm;
