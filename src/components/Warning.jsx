import React from "react";
import { useNavigate } from "react-router-dom";

const Warning = ({ warning, setWarning, type }) => {
  const navigate = useNavigate();
  return (
    <div className=" bg-black/90 w-full h-screen fixed left-0 top-0 z-50 flex justify-center items-center">
      <div className=" bg-white p-5 rounded shadow-lg w-[90%] lg:w-[30%]">
        <h1 className=" text-red-600 font-semibold text-center lg:text-lg mb-3">
          CAUTION WARNING
        </h1>

        <p className=" text-sm lg:text-base leading-7">
          Your capital is at risk. You should not spend more than you can afford
          to lose and should ensure that you fully understand the risks
          involved.
          <br />
          This package is not suitable for everyone please take into
          consideration your level of experience, and financial objectives and
          also seek independent advice if necessary.
          <br />
          Under no circumstances shall Honey Comb FXD Farm have any liability to
          any person or entity for any loss or damage in whole or part caused
          by, resulting from, or relating to this investing activity
        </p>

        <div className=" flex gap-4 mt-5">
          <button
            onClick={() => setWarning(!warning)}
            className=" rounded bg-green-700 text-white px-4 text-xs lg:text-base lg:px-6 py-2 capitalize hover:bg-green-700 hover:text-white  "
          >
            Cancel
          </button>
          <button
            onClick={() => navigate(`/user/invest/${type}`)}
            className=" rounded bg-yellow-400 text-white px-4 text-xs lg:text-base lg:px-6 py-2 capitalize hover:bg-green-700 hover:text-white"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Warning;
