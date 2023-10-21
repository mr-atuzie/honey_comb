import React from "react";

const Terms = () => {
  return (
    <div className="bg-[#08432d]  py-10">
      <div className=" text-center flex flex-col justify-center items-center ">
        <div className="text-center  text-white text-lg lg:text-3xl font-semibold capitalize ">
          Terms & Conditions
        </div>
        <div className=" w-48 rounded-md mt-2 h-1 bg-yellow-500"></div>
      </div>
      <div className=" w-[90%]  lg:w-[80%] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between mt-10 ">
        <div className=" lg:w-[50%] ">
          <p className=" text-white text-sm lg:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            exercitationem vel voluptas illum debitis? Alias libero beatae
          </p>
        </div>
        <div className=" flex justify-center items-center mt-10">
          <button className=" text-sm  bg-white text-green-700 py-3 px-5 rounded-md  ">
            Download File
          </button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
