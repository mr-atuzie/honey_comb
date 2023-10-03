import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import { countries } from "../data";

const Profile = () => {
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Profile
      </h1>

      <div>
        {/* form */}
        <div className=" mt-4">
          <div className="w-[90%] md:w-[45%] mx-auto ">
            {/* image change */}
            <div className=" flex mt-6 items-center">
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center rounded-full">
                <label
                  htmlFor="image"
                  className=" z-40 bg-black/60 h-[50px] w-[50px] rounded-full absolute flex items-center justify-center"
                >
                  <AiOutlineCamera className=" text-white" size={30} />
                </label>

                <img
                  className=" w-full h-full  rounded-full object-cover"
                  src={
                    "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                  }
                  alt=""
                />
              </div>

              <input
                type="file"
                name="image"
                id="image"
                className=" hidden"
                placeholder="Your Email"
              />

              <button className=" text-sm lg:text-base bg-green-600 text-white py-2.5 w-40 ml-5 rounded-md">
                Upload Image
              </button>
            </div>
          </div>

          <form className=" my-14 w-[90%] md:w-[45%] mx-auto">
            <div className="relative my-7">
              <input
                type="text"
                name="name"
                id="name"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="name"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-50 px-2  left-1"
              >
                Your Name
              </label>
            </div>
            <div className="relative my-7 lg:my-11">
              <input
                type="email"
                name="email"
                id="email"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-50 px-2  left-1"
              >
                Your Email
              </label>
            </div>
            <div className="relative my-7 lg:my-11">
              <input
                type="date"
                name="DOB"
                id="DOB"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="DOB"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-50 px-2  left-1"
              >
                Date Of Birth
              </label>
            </div>
            <div className="relative my-7">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
              />
              <label
                htmlFor="phone"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-50 px-2  left-1"
              >
                Your Phone Number
              </label>
            </div>
            <div className="relative my-7">
              <select
                name="location"
                id="location"
                className="  w-full  mt-1 lg:mt-3  rounded-lg  border border-gray-300 text-gray-700  p-3 "
              >
                <option>Select Location</option>
                {countries.map((c) => {
                  return (
                    <option key={c.code} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="location"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-50 px-2  left-1"
              >
                Your Location
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
