import React from "react";
import vid from "../assets/crypto2.mp4";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" w-full  h-screen flg:flex lg:flex-row-reverse">
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
      <div className=" my-16 lg:w-[60%">
        <form className="w-[80%] lg:w-[50%] mx-auto mb-16">
          <div className="">
            <p className=" text-sm lg:text-lg uppercase font-semibold text-yellow-500 lg:mb-4">
              Honey comb fxd
            </p>

            <h2 className="text-2xl lg:text-4xl font-bold  text-green-700 my-2 ">
              Log into your Account
            </h2>

            <p className=" text-gray-900  text-sm  lg:my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              quasi, dolorem saepe sapiente culpa illum.
            </p>
          </div>

          <div className=" my-5">
            <label className="  font-medium text-xs lg:text-sm" htmlFor="email">
              Email
            </label>

            <input
              className="border p-2.5 lg:p-3.5 block w-full placeholder:text-sm lg:placeholder:text-base"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className=" my-5">
            <label
              className=" font-medium text-xs lg:text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border p-2.5 lg:p-3.5 block w-full placeholder:text-sm lg:placeholder:text-base"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <Link to={"/dashboard"}>
            <button
              className="border-2 border-yellow-500 w-full text-center py-2.5 lg:py-3.5 my-4  bg-green-600 text-white "
              type="submit"
            >
              Sign In
            </button>
          </Link>
          <p className="text-sm lg:text-base text-center mt-3   text-gray-500">
            Don't have an account?{" "}
            <Link to={"/"}>
              <span className=" text-black font-medium">Sign Up</span>
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
