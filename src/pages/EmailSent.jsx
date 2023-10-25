import React from "react";
import vid from "../assets/crypto2.mp4";
import logo from "../assets/honeycomb full logo.png";
import { Link } from "react-router-dom";

const EmailSent = () => {
  return (
    <div className=" w-full h-screen   flex  lg:flex-row-reverse">
      <div className=" relative w-[70%] hidden lg:flex justify-center items-center flex-col ">
        <video
          src={vid}
          className=" w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        <div className=" w-full h-full absolute rounded-lg top-0 z-30 bg-black/20 flex  items-center">
          {/* <div className=" w-[80%] mx-auto text-center">
            <p className="text-white capitalize tracking-wide font-medium text-xs  lg:text-base my-3">
              recieve, Transfer, Send Money Safely
            </p>
            <h1 className="  text-green-600 uppercase text-3xl lg:text-6xl font-extrabold ">
              WELCOME TO{" "}
              <span className=" text-yellow-500">HONEY COMB FXD</span>
            </h1>
          </div> */}
        </div>
      </div>
      <div className="w-full bg-gray-50 lg:w-[30%]  p-5">
        <img className=" w-28 lg:w-40" src={logo} alt="" />
        <h2 className="   lg:text-3xl font-bold capitalize   text-green-700 mt-28 lg:mt-56 ">
          Welcome to{" "}
          <span className=" text-yellow-500 uppercase">
            Honey-comb-fxd farm
          </span>
        </h2>
        <p className=" text-sm lg:text-base">
          An email has been sent to you, check your email to continue
        </p>

        <Link to={"/"}>
          <button className="bg-[#08432d] px-8 py-2 text-center lg:py-3 rounded text-white font-medium my-3 lg:px-8 text-sm lg:text-base">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmailSent;
