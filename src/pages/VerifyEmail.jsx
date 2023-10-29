import React, { useState } from "react";
import vid from "../assets/crypto2.mp4";
import logo from "../assets/honeycomb full logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const VerifyEmail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const verifyEmail = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/verify-email/${id}`
      );

      console.log(res.data);
      setLoading(false);
      navigate("/login");
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
        <h2 className="    font-medium capitalize lg:text-lg  mt-28 lg:mt-56 ">
          You’re almost finished setting up your account,Please take a moment to
          confirm your email address.
        </h2>

        <button
          onClick={verifyEmail}
          disabled={loading}
          className="bg-[#08432d] px-8 py-2 text-center lg:py-3 rounded text-white font-medium my-3 lg:px-8 text-sm lg:text-base disabled:bg-green-300"
        >
          {loading ? "Verifying" : "Verify Email"}
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
