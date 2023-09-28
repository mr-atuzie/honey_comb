import React from "react";
import { BsCheck2 } from "react-icons/bs";

const Packages = () => {
  return (
    <div className=" bg-green-50">
      <div className="w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Our Packages
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-10 mt-10">
          <div className="bg-white p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-red-500 text-lg font-semibold tracking-wide uppercase">
                basic
              </h1>
              <div className=" text-yellow-500 flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  65,000
                </h2>
              </div>
              <p className=" capitalize text-gray-800 text-xs">Pay per momth</p>
            </div>

            <ul className=" mt-5">
              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className="text-sm lg:text-base text-gray-600  capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                8 hours of electricity daily.
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly in-house clean ups.
              </li>
            </ul>

            <button className="text-white bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start basic plan
            </button>
          </div>

          <div className=" bg-white p-4 md:p-7 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-lg text-orange-500 font-semibold tracking-wide uppercase">
                platinum
              </h1>
              <div className=" text-green-600 flex items-center">
                <span className=" text-yellow-500 font-bold">&#x20A6;</span>
                <h2 className=" text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  1, 600,000
                </h2>
              </div>
              <p className="text-xs capitalize text-gray-800">Pay for 2 Year</p>
            </div>

            <ul className=" mt-5">
              <li className=" text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                99.5% uptime guarantee
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                12 hours of electricity daily.
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Weekly Waste Pick ups.
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily in-house clean ups.
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                gym membership
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                rotary club membership
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Daily News paper
              </li>

              <li className="text-sm lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                No caution fee needed
              </li>
            </ul>

            <button className="text-white text-sm lg:text-lg bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start platinum plan
            </button>
          </div>

          <div className=" bg-yellow-500 p-4 md:p-7 h-fit shadow-md rounded-md ">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-start lg:text-lg font-semibold text-green-700    uppercase">
                Calculate Earning
              </h1>
              <div className=" flex items-center text-white">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className="text-white text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  0
                </h2>
              </div>
            </div>

            <div className="mt-3">
              <form>
                <div className=" mb-5">
                  <label
                    className=" font-medium text-xs lg:text-sm"
                    htmlFor="email"
                  >
                    Amount
                  </label>

                  <input
                    className="border p-2.5 block w-full"
                    type="email"
                    name="email"
                    placeholder="Enter amount"
                  />
                </div>
                <div className=" mb-5">
                  <label
                    for="duration"
                    className="font-medium text-xs lg:text-sm"
                  >
                    Duration
                  </label>
                  <select
                    id="duration"
                    className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                  >
                    <option selected>Choose Duration</option>
                    <option value="US">1 week</option>
                    <option value="CA">1 month</option>
                    <option value="FR">6 Month</option>
                    <option value="DE">1 year</option>
                  </select>
                </div>

                <button className="text-white text-sm lg:text-base bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
                  Calculate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
