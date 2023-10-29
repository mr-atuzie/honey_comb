import React from "react";
import { toast } from "react-toastify";
import { validateEmail } from "../services/authServices";
import { useState } from "react";
import axios from "axios";
import vid from "../assets/crypto2.mp4";
import { Link } from "react-router-dom";
import logo from "../assets/honeycomb full logo.png";

const ForgotPassword = () => {
  const initialState = {
    email: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const { email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      setLoading(false);
      return toast.error("Please enter a valid email");
    }

    const userData = { email };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/login`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);
      const data = res.data;
      console.log(data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.response.statusText ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div className=" w-full  h-screen lg:flex lg:flex-row-reverse">
      <div className="relative w-[50%] hidden lg:flex justify-center items-center flex-col ">
        <video
          src={vid}
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        <div className=" w-full h-full absolute rounded-lg top-0 z-30 bg-black/20 flex  items-center">
          <div className=" w-[80%] mx-auto text-center">
            <p className="text-white capitalize tracking-wide font-medium text-xs  lg:text-base my-3">
              Sign Up,Invest and Make Profit
            </p>
            <h1 className="  text-green-600 uppercase text-3xl lg:text-6xl font-extrabold ">
              <span className=" text-yellow-500">HONEY COMB FXD FARM</span>
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full my-10 lg:my-16 lg:w-[50%]">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] lg:w-[50%] mx-auto mb-16"
        >
          <div className="">
            <img className="w-28 lg:w-40" src={logo} alt="" />

            <h2 className="text-2xl lg:text-4xl font-bold  text-green-700 mt-4 ">
              Forgot Password
            </h2>
          </div>

          <div className=" mt-7">
            <label className="   text-xs lg:text-sm" htmlFor="email">
              Email
            </label>

            <input
              className="border p-2.5 lg:p-3.5 block w-full placeholder:text-sm lg:placeholder:text-base"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              id="email"
            />
          </div>

          <Link
            className=" text-blue-500 text-xs lg:text-sm mt-3 font-medium"
            to={"/login"}
          >
            Login
          </Link>

          <button
            disabled={loading}
            className="border-2 text-sm lg:text-base border-yellow-500 rounded w-full text-center py-2.5 lg:py-3.5 my-4 bg-[#08432d] disabled:bg-green-300 text-white "
            type="submit"
          >
            {loading ? "Loading" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
