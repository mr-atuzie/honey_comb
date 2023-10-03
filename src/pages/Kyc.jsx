import React from "react";
import { BsUpload } from "react-icons/bs";

const Kyc = () => {
  return (
    <div className=" w-full  h-screen ">
      <div className="">
        <form className="w-[85%] lg:w-[50%] mx-auto">
          <div className=" my-16">
            {/* <p className=" uppercase font-semibold text-yellow-600 mb-4">
              Honey comb fxd
            </p> */}

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
