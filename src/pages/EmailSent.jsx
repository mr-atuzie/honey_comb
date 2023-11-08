import React, { useState } from "react";
import vid from "../assets/crypto2.mp4";
import logo from "../assets/honeycomb full logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EmailSent = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [loading, setLoading] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const navigate = useNavigate();

  const verifyEmail = async () => {
    setLoading(true);
    const userData = { verificationCode: verificationCode };

    if (!verificationCode) {
      setLoading(false);
      return toast.error("Please enter verification code");
    }
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/verify-email`,
        userData
      );

      console.log(res.data);
      setLoading(false);
      navigate("/user/dashboard");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setLoading(false);
    }
  };

  return (
    <div className=" w-full h-screen   flex  lg:flex-row-reverse">
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
      <div className="w-full bg-gray-50 lg:w-[50%]  p-5">
        <img className=" w-28 lg:w-40" src={logo} alt="" />

        <div className=" lg:max-w-2xl mx-auto mt-28  lg:mt-56 ">
          <h2 className=" text-green-600 capitalize font-bold mb-2 text-xl lg:text-2xl">
            Hi {user.name}
          </h2>

          <h2 className=" text-sm    font-medium  lg:text-lg ">
            Check your inbox at
            <span className=" text-yellow-400"> {user?.email}</span>, for your
            verification code to complete your registration. This link will
            expire shortly, so verify soon!
          </h2>
          <h6 className=" my-5 lg:my-8 text-xs lg:text-base">
            {" "}
            <span className="  font-medium">Don't see an email?</span> Check
            your spam folder.
          </h6>
          <div className=" my-5">
            <input
              className="border border-green-300 rounded p-2.5 lg:p-3.5 block w-full placeholder:text-sm lg:placeholder:text-base"
              type="text"
              name="verificationCode"
              placeholder="Enter verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              id="verificationCode"
            />
          </div>
          <button
            onClick={verifyEmail}
            disabled={loading}
            className="bg-[#08432d] px-8 py-2 text-center lg:py-3 rounded text-white font-medium lg:px-8 text-sm lg:text-base disabled:bg-green-300"
          >
            {loading ? "Verifying" : "Verify Email"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSent;
