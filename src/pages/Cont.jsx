import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { FaEnvelopeOpenText, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Faq from "../components/Faq";
import Terms from "../components/Terms";
import Ready from "../components/Ready";

const Cont = () => {
  return (
    <div>
      <Navbar />
      <Banner
        img={
          "https://cdn.financebuzz.com/images/2020/08/07/values-based-investing.jpg"
        }
        heading={"Contact  us"}
        text={"farae lorem ipseume maximo maximus"}
      />
      <div className=" lg:w-[50%] bg-white p-3 mx-auto">
        <h1 className=" text-sm lg:text-base text-green-600 font-medium mb-5">
          Social Media
        </h1>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaFacebookF size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">HoneyCombFxd</div>
        </div>

        <div className=" flex gap-3   items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <FaWhatsapp size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">0801 234 5678</div>
        </div>
      </div>

      <div className=" lg:w-[50%] bg-white p-3 mx-auto my-6">
        <h1 className=" text-sm lg:text-base text-green-600 font-medium mb-5">
          Call Us
        </h1>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <BiSupport size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">060 12345</div>
        </div>

        <div className=" flex gap-3 border-b-2 border-gray-100 items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <BiSupport size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">02-000999-00</div>
        </div>

        <div className=" flex gap-3  items-center py-3">
          <div className=" w-fit p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <BiSupport size={30} />
          </div>
          <div className=" font-medium text-sm lg:text-base">0702 000 1000</div>
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
            honeycomFxd@gmail.com
          </div>
        </div>
      </div>
      <Ready />
      <Terms />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Cont;
