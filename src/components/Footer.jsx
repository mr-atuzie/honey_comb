import React from "react";
import { MdVerified } from "react-icons/md";
import { BsFacebook, BsLinkedin, BsReddit } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const F1 = ["Homeowner", "Landlords", "real estate", "services"];
  const F2 = [
    "What is super?",
    "Plans",
    "Smarter than home warranty",
    "Frequently asked questions",
    "Abouts us",
    "Blog",
    "Terms of Coveraage",
  ];
  return (
    <div className="h-full lg:h-[60vh] bg-black  py-10 ">
      <div className=" w-[90%] md:w-[80%] mx-auto ">
        <div className=" flex flex-col lg:flex-row justify-between items-start  mt-12">
          <div>
            <div className=" uppercase font-semibold tracking-wider text-3xl text-neutral-300 ">
              Trade fair
            </div>

            <p className="text-sm lg:text-base text-gray-400">
              Recieve updates, hot deals , discounts sent straight to inbox.
            </p>

            <div className=" flex bg-white items-center mt-3">
              <input
                className=" py-3 px-6 w-full  rounded-md border-none outline-none"
                type="email"
                placeholder="Your email"
              />
              <button className=" w-[30%] text-sm lg:text-base  py-3 px-6 bg-green-700 text-white">
                Subscribe
              </button>
            </div>
          </div>

          <div className=" mt-6 lg:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div>
              <div className="uppercase font-medium tracking-wider text-neutral-300 mb-4">
                WE MAKE LIFE EASIER FOR;
              </div>
              {F1.map((data, index) => {
                return (
                  <div className=" flex mb-4 tracking-wide " key={index}>
                    <MdVerified size={25} className="text-sky-900" />
                    <span className=" ml-3 text-gray-300 capitalize">
                      {data}
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <div className=" uppercase font-medium tracking-wider text-neutral-300 mb-4">
                LOOKING FOR SOMETHING?
              </div>
              {F2.map((data, index) => {
                return (
                  <div className=" mb-4 " key={index}>
                    <span className=" text-gray-600 capitalize">{data}</span>
                  </div>
                );
              })}
            </div>

            <div>
              <div className=" uppercase font-medium tracking-wider text-neutral-300 mb-4">
                Let's continue the conversation
              </div>
              <div className="flex gap-8 items-center">
                <AiFillTwitterCircle color="#00acee" size={30} />

                <BsFacebook className=" text-[#3b5998]" size={30} />

                <BsLinkedin className=" text-[#0072b1]" size={30} />

                <BsReddit className=" text-[#FF4300]" size={30} />
              </div>
              <div className=" text-sm text-gray-700 font-medium mt-8">
                &copy; 2023 Super Home Inc. Contracts not <br /> avaliable for
                sale in Nigeria.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
