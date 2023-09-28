import React from "react";
import vid from "../assets/crypto2.mp4";
import { BsUpload } from "react-icons/bs";

const Kyc = () => {
  return (
    <div className=" w-full  h-screen flex flex-row-reverse">
      <div className="m-6 rounded-lg relative w-[40%] flex justify-center items-center flex-col ">
        <video
          src={vid}
          className="rounded-xl w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        <div className=" w-full h-full absolute rounded-lg top-0 z-30 bg-black/20 flex  items-center">
          <div className=" w-[80%] mx-auto text-center">
            <p className="text-white capitalize tracking-wide font-medium text-xs  lg:text-base my-3">
              recieve, Transfer, Send Money Safely
            </p>
            <h1 className="  text-gray-100 uppercase text-3xl lg:text-6xl font-extrabold ">
              WELCOME TO{" "}
              <span className=" text-yellow-500">HONEY COMB FXD</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <form className="w-[50%] mx-auto">
          <div className=" my-16">
            <p className=" uppercase font-semibold text-yellow-600 mb-4">
              Honey comb fxd
            </p>

            <h2 className="text-xl lg:text-4xl font-bold ">Add Document</h2>

            <p className=" text-gray-500  text-sm my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              quasi, dolorem saepe sapiente culpa illum.
            </p>
          </div>

          <div className=" border-2 bg-gray-100 rounded-sm  flex justify-center items-center  border-dashed h-52 mb-5">
            <div className=" flex justify-center items-center flex-col">
              <BsUpload className=" text-gray-400 text-center" size={30} />
              <p className=" text-gray-500 text-sm mt-2 text-center">
                click to upload file
              </p>
            </div>
          </div>

          <p className=" text-sm text-gray-500">
            Accepted file type: jpg , png and svg
          </p>
          <button
            className=" w-full text-center py-3.5 my-10  bg-black text-white "
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kyc;
