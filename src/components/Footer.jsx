import React from "react";
import { MdVerified } from "react-icons/md";
import { BsFacebook, BsLinkedin, BsReddit } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const F1 = ["Agriculture", "Forex", "real estate", "Crypto"];
  const F2 = [
    "Forex Trading",
    "Cryptocurrency Investments",
    "Agriculture Investments",
    "Investment Security",
    "Foreign Investment",
    "Low investment minimums",
    "Expert Financial Guidance",
  ];
  return (
    <div className="h-full lg:h-[60vh] bg-white  py-10 ">
      <div className=" w-[90%] md:w-[80%] mx-auto ">
        <div className=" flex flex-col lg:flex-row justify-between items-start  mt-12">
          <div>
            <p className=" text-sm lg:text-lg uppercase font-semibold text-yellow-500 lg:mb-4">
              Honey comb fxd
            </p>

            <p className="text-sm lg:text-base">
              Recieve updates, hot deals , discounts sent straight to inbox.
            </p>

            <div className=" flex bg-white items-center border-[#08432d] border-2  mt-3">
              <input
                className=" py-3 px-6 w-full   rounded-md border-none outline-none"
                type="email"
                placeholder="Your email"
              />
              <button className="  text-sm lg:text-base  py-3 px-6 bg-[#08432d]  text-white">
                Subscribe
              </button>
            </div>
          </div>

          <div className=" mt-6 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="uppercase font-medium tracking-wider mb-4">
                WE MAKE LIFE EASIER FOR;
              </div>
              {F1.map((data, index) => {
                return (
                  <div className=" flex mb-4 tracking-wide " key={index}>
                    <MdVerified size={25} className="text-sky-900" />
                    <span className=" ml-3 text-gray-600 capitalize text-sm lg:text-base">
                      {data}
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              {F2.map((data, index) => {
                return (
                  <div className=" mb-4 " key={index}>
                    <span className=" text-gray-600 capitalize text-sm lg:text-base">
                      {data}
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <div className=" uppercase font-medium tracking-wider  mb-4">
                Let's continue the conversation
              </div>
              <div className="flex gap-8 items-center">
                <AiFillTwitterCircle color="#00acee" size={30} />

                <BsFacebook className=" text-[#3b5998]" size={30} />

                <BsLinkedin className=" text-[#0072b1]" size={30} />

                <BsReddit className=" text-[#FF4300]" size={30} />
              </div>
              <div className=" text-xs lg:text-sm text-gray-700 font-medium mt-8">
                &copy; 2023 Honey comb fxd
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
