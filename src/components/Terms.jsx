import React from "react";
// import terms from "../assets/tc.pdf";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="bg-[#08432d] py-5  lg:py-10">
      <div className=" text-center flex flex-col justify-center items-center ">
        <div className="text-center  text-white text-lg lg:text-3xl font-semibold capitalize ">
          Terms & Conditions
        </div>
        <div className=" w-48 rounded-md mt-2 h-1 bg-yellow-500"></div>
      </div>
      <div className=" w-[90%]   mx-auto flex flex-col lg:flex-row items-center justify-center lg:items-center lg:justify-between mt-6 ">
        <div className="  lg:w-[50%] ">
          <p className=" text-white text-center lg:text-left font-medium text-xs lg:text-sm">
            PLEASE READ AND UNDERSTAND THE TERMS OF AGREEMENT CAREFULLY BEFORE
            AGREEING TO BE BOUND BY ITS TERMS
          </p>
        </div>
        <div className=" flex justify-center items-center mt-6">
          <Link
            to={"/terms-and-condition"}
            className=" text-sm  bg-white text-green-700 py-2 lg:py-3 px-5 rounded-md  "
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Terms;
