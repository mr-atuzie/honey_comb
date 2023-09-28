import React from "react";

const Banner = ({ img, heading, text }) => {
  return (
    <div className=" h-[60vh] w-full bg-gray-200 relative">
      <img src={img} alt="about" className=" w-full h-full object-cover  " />

      <div className="w-full absolute top-0 h-full bg-black/25 flex items-center  ">
        <div className="w-[80%] mx-auto  ">
          <h1 className=" capitalize text-gray-100 tracking-wide font-medium text ">
            {heading}
          </h1>
          <div className=" text-green-600 capitalize text-2xl lg:text-4xl font-medium  tracking-wider">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
