import React, { useState } from "react";
import vid from "../assets/crypto2.mp4";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail } from "../services/authServices";
import axios from "axios";
import logo from "../assets/honeycomb full logo.png";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_USER } from "../redux/features/authSlice";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!email || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      setLoading(false);
      return toast.error("Please enter a valid email");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { email, password };

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

      // localStorage.setItem(
      //   "user",
      //   JSON.stringify({
      //     id: data?._id,
      //     name: `${data?.firstname} ${data?.lastname}`,
      //     email: data?.email,
      //     photo: data?.photo,
      //     abv: `${data?.firstname.charAt(0)}${data?.lastname.charAt(0)}`,
      //   })
      // );

      const user = {
        id: data?._id,
        name: `${data?.firstname} ${data?.lastname}`,
        email: data?.email,
        photo: data?.photo,
        abv: `${data?.firstname.charAt(0)}${data?.lastname.charAt(0)}`,
      };

      dispatch(SET_LOGIN(true));
      dispatch(SET_USER(user));

      navigate("/user/dashboard");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.response.statusText ||
        error.toString();

      console.log(error);
      console.log(error.response.statusText);
      setLoading(false);
      toast.error(message);
    }
  };

  return (
    <div className=" w-full  h-screen lg:flex lg:flex-row-reverse">
      <div className="m-6 rounded-lg relative w-[40%] hidden lg:flex justify-center items-center flex-col">
        <video
          src={vid}
          className="rounded-xl w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        <div className=" w-full h-full absolute rounded-lg top-0 z-30 bg-black/20 flex  items-center">
          <div className=" w-[80%] mx-auto text-center">
            <p className="text-white capitalize tracking-wide font-medium text-xs  lg:text-base my-3">
              recieve, Transfer, Send Money Safely
            </p>
            <h1 className="  text-green-600 uppercase text-3xl lg:text-6xl font-extrabold ">
              WELCOME TO{" "}
              <span className=" text-yellow-500">HONEY COMB FXD</span>
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full my-16 lg:w-[60%]">
        <form
          onSubmit={handleSubmit}
          className="w-[90%] lg:w-[50%] mx-auto mb-16"
        >
          <div className="">
            <img className="w-40" src={logo} alt="" />

            <h2 className="text-2xl lg:text-4xl font-bold  text-green-700 mt-4 ">
              Log into your Account
            </h2>
          </div>

          <div className=" my-5">
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

          <div className=" my-5">
            <label className="  text-xs lg:text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="border p-2.5 lg:p-3.5 block w-full placeholder:text-sm lg:placeholder:text-base"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange}
              id="password"
            />
          </div>

          <button
            disabled={loading}
            className="border-2 border-yellow-500 text-sm lg:text-base rounded w-full text-center py-2.5 lg:py-3.5 my-4 bg-green-700 disabled:opacity-95 text-white "
            type="submit"
          >
            {loading ? "Loading" : "Sign In"}
          </button>

          <p className="text-xs lg:text-base text-center mt-3   text-gray-500">
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className=" text-blue-700 font-medium">Sign Up</span>
            </Link>
          </p>
        </form>
      </div>

      {/* <div className=" flex items-center text-black">
      <h1 className=" ml-1 font-bold text-sm   lg:text-base">TRADE-FAIR</h1>
    </div>
    <form className=" w-[90%] lg:w-[38%] py-5 mx-auto">
      <div className=" my-8">
        <h2 className="text-xl lg:text-3xl font-medium text-center ">
          Create your account
        </h2>

        <p className="text-xs text-gray-500 text-center">
          Improve your business by creating a strong digital presence.
        </p>
      </div>

      <div className=" mb-3">
        <label className=" text-gray-800 text-xs" htmlFor="text">
          Fullname
        </label>

        <input
          className="border p-3 rounded-xl block w-full"
          type="text"
          name="text"
        />
      </div>

      <div className=" mb-3">
        <label className=" text-gray-800 text-xs" htmlFor="email">
          Email
        </label>

        <input
          className="border p-3 rounded-xl block w-full"
          type="email"
          name="email"
        />
      </div>

      <div className=" my-3">
        <label className=" text-gray-800 text-xs" htmlFor="password">
          Password
        </label>
        <input
          className="border p-3 rounded-xl block w-full"
          type="password"
          name="password"
        />
      </div>

      <div className=" mb-8">
        <label className=" text-gray-800 text-xs" htmlFor="password">
          Phone number
        </label>
        <PhoneInput
          country={"ng"}
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
      </div>

      <button
        className=" w-full text-center py-3 my-4 bg-black text-white  rounded-xl"
        type="submit"
      >
        Sign up
      </button>
    </form> */}
    </div>
  );
};

export default Login;
