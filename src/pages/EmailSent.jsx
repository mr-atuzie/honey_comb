import React from "react";
import vid from "../assets/crypto2.mp4";
import logo from "../assets/honeycomb full logo.png";

const EmailSent = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className=" w-full h-screen   flex  lg:flex-row-reverse">
      <div className="relative w-[70%] hidden lg:flex justify-center items-center flex-col ">
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
              recieve, Transfer, Send Money Safely
            </p>
            <h1 className="  text-green-600 uppercase text-3xl lg:text-6xl font-extrabold ">
              <span className=" text-yellow-500">HONEY COMB FXD FARM</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-50 lg:w-[30%]  p-5">
        <img className=" w-28 lg:w-40" src={logo} alt="" />

        <div className=" mt-28  lg:mt-56 ">
          <h2 className=" text-green-600 font-medium mb-2 lg:text-lg">
            Hi {user.name}
          </h2>
          <h2 className="    font-medium  lg:text-lg ">
            An email has been sent to{" "}
            <span className=" text-yellow-400">{user?.email}</span> , check your
            email to continue Registration
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
