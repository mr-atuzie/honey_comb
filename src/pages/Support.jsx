import React from "react";
import { FaTelegram } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaEnvelopeOpenText, FaWhatsapp } from "react-icons/fa6";

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

        <a
          href="https://t.me/+-y-Y5qDIRtE5MTJk"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
            <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
              <FaTelegram size={30} />
            </div>
            <div className=" font-medium text-sm lg:text-base">
              Honeycomb FXD Farm
            </div>
          </div>
        </a>

        <a
          href="https://wa.me/message/7K3EHYGPVIICP1"
          target="_blank"
          rel="noreferrer"
        >
          <div className=" flex gap-3   items-center py-3">
            <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
              <FaWhatsapp size={30} />
            </div>
            <div className=" font-medium text-sm lg:text-base">09119136523</div>
          </div>
        </a>
      </div>

      <div className=" lg:w-[50%] bg-white p-3 mx-auto my-6">
        <h1 className=" text-sm lg:text-base text-green-600 font-medium mb-5">
          Call Us
        </h1>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <BiSupport size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">09119136523</div>
        </div>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <BiSupport size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">09119379576</div>
        </div>

        <div className=" flex gap-3  items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <BiSupport size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">09119576755</div>
        </div>
      </div>

      <div className=" lg:w-[50%] bg-white p-3 mx-auto my-6">
        <h1 className=" text-sm lg:text-base text-green-600 font-medium mb-5">
          Email Us
        </h1>

        <div className=" flex gap-3 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaEnvelopeOpenText size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">
            support@honeycombfxd.com
          </div>
        </div>
        <div className=" flex gap-3 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaEnvelopeOpenText size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">
            honeycombfxd@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
