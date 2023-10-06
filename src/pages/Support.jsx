import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const Support = () => {
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Support
      </h1>

      <div className=" lg:w-[50%] bg-white p-3 mx-auto">
        <h1 className=" text-sm lg:text-base text-green-600 font-medium mb-5">
          Social Media
        </h1>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaTwitter size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">
            honeycombfxd_help
          </div>
        </div>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaFacebookF size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">HoneyCombFxd</div>
        </div>

        <div className=" flex gap-3 b items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaInstagram size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">
            honeycombfxd_more
          </div>
        </div>

        <div className=" flex gap-3 border-b-2 border-gray-100  items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaWhatsapp size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">0801 234 5678</div>
        </div>
      </div>
    </div>
  );
};

export default Support;
