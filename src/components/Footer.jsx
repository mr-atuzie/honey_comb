import React from "react";
import { MdVerified } from "react-icons/md";
import logo from "../assets/honeycomb full logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaEnvelope, FaTelegram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  // const F1 = ["About Us", "Terms and Condition", "Learn more"];
  const [email, setEmail] = useState("");

  const F2 = ["Real Estate Investments", "Agro Investments ", "Forex Trading"];

  const subscribe = () => {
    toast.success("subscribtion successfull");
    setEmail("");
  };
  return (
    <div className="h-full lg:h-[60vh] bg-white  py-10 ">
      <div className=" w-[90%] md:w-[80%] mx-auto ">
        <div className=" flex flex-col lg:flex-row justify-between items-start  mt-8 lg:mt-12">
          <div>
            <img className=" w-28 lg:w-40" src={logo} alt="" />

            <p className="text-xs mt-1 lg:text-base">
              Subscribe to recieve our newsletter
            </p>

            <div className=" flex bg-white items-center border-[#08432d] border-2  mt-3">
              <input
                className=" py-2 lg:py-3 px-6 w-full   rounded-md border-none outline-none"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={subscribe}
                className="  text-sm lg:text-base  py-3 px-6 bg-[#08432d]  text-white"
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className=" mt-4">
            <div className="uppercase font-medium text-sm lg:text-base mb-2">
              LEARN MORE
            </div>

            <div className=" flex mb-2 ">
              <MdVerified size={20} className="text-sky-900" />
              <span className=" ml-3 text-gray-600 capitalize text-xs lg:text-base">
                About Us
              </span>
            </div>
            <div className=" flex mb-2 ">
              <MdVerified size={20} className="text-sky-900" />
              <Link to={"/terms-and-condition"}>
                <span className=" ml-3 text-gray-600 capitalize text-xs lg:text-base">
                  Terms and Condition
                </span>
              </Link>
            </div>
          </div>

          <div className=" mt-4">
            <div className="uppercase font-medium text-sm lg:text-base mb-2">
              What we do;
            </div>
            {F2.map((data, index) => {
              return (
                <div className=" mb-2 " key={index}>
                  <span className=" text-gray-600 capitalize text-xs lg:text-base">
                    {data}
                  </span>
                </div>
              );
            })}
          </div>

          <div className=" mt-4">
            <div className=" uppercase font-medium  text-sm lg:text-base    mb-2">
              Let's continue the conversation
            </div>
            <div className="flex gap-3 lg:gap-8 items-center">
              <FaWhatsapp className=" text-[#075e54]" size={25} />

              <a
                href="https://t.me/+-y-Y5qDIRtE5MTJk"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegram className=" text-[#0072b1]" size={25} />
              </a>

              <FaEnvelope className=" text-red-400 " size={25} />
            </div>
            <div className=" text-xs lg:text-sm text-gray-700 font-medium mt-8">
              &copy; 2023 Honey comb fxd farm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
