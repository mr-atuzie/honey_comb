import React from "react";
import { BsCheck2 } from "react-icons/bs";
import Pay from "./Pay";

const Packages = () => {
  return (
    <div className=" bg-green-50 mt-3">
      <div className="w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Our Packages
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  gap-4 lg:gap-10 mt-10">
          <div className="bg-white p-4  h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-red-500 lg:text-lg font-semibold tracking-wide uppercase">
                basic
              </h1>
              <div className=" text-yellow-500 flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  50,000
                </h2>
              </div>
              {/* <p className=" capitalize text-gray-800 text-xs font-medium">
                Pay per momth
              </p> */}
            </div>

            <ul className=" mt-5">
              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                0% risk
              </li>

              <li className="text-xs lg:text-base text-gray-600  capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                15% payout weekly
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                7.5% VAT charged on withdrawal
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Enjoy 2% referra
              </li>
            </ul>

            <Pay amount={20000} type={"Basic"} />

            {/* <button className="text-white bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start basic plan
            </button> */}
          </div>

          <div className=" bg-white p-4  h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" lg:text-lg text-orange-500 font-semibold tracking-wide uppercase">
                prenium
              </h1>
              <div className=" text-green-600 flex items-center">
                <span className=" text-yellow-500 font-bold">&#x20A6;</span>
                <h2 className=" text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  100,000
                </h2>
              </div>
              {/* <p className="text-xs capitalize text-gray-800 font-medium">
                Pay for 2 Year
              </p> */}
            </div>

            <ul className=" mt-5">
              <li className=" text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                7.5% VAT charged on withdrawal
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Enjoy 2% referral bonus
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                3% Monthly Returns paid upfront Enjoy 2% referral bonus
              </li>
            </ul>

            {/* <button className="text-white text-sm lg:text-lg bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start platinum plan
            </button> */}
            <Pay amount={10000} type={"Platnium"} />
          </div>

          <div className="bg-white p-4  h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-red-500 lg:text-lg font-semibold tracking-wide uppercase">
                Gold
              </h1>
              <div className=" text-yellow-500 flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  250,000
                </h2>
              </div>
              {/* <p className=" capitalize text-gray-800 text-xs font-medium">
                Pay per momth
              </p> */}
            </div>

            <ul className=" mt-5">
              <li className=" text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                7.5% VAT charged on withdrawal
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Enjoy 2% referral bonus
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                3% Monthly Returns paid upfront Enjoy 2% referral bonus
              </li>
            </ul>

            <Pay amount={25000} type={"Gold"} />

            {/* <button className="text-white bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start basic plan
            </button> */}
          </div>

          <div className="bg-white p-4 h-fit shadow-md rounded-md hover:scale-105">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-red-500 lg:text-lg font-semibold tracking-wide uppercase">
                Platinum
              </h1>
              <div className=" text-yellow-500 flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  500,000
                </h2>
              </div>
              {/* <p className=" capitalize text-gray-800 text-xs font-medium">
                Pay per momth
              </p> */}
            </div>

            <ul className=" mt-5">
              <li className=" text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                7.5% VAT charged on withdrawal
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                Enjoy 2% referral bonus
              </li>

              <li className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2">
                <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                  <BsCheck2 />
                </span>
                3% Monthly Returns paid upfront Enjoy 2% referral bonus
              </li>
            </ul>

            <Pay amount={50000} type={"Platinum"} />

            {/* <button className="text-white bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
              start basic plan
            </button> */}
          </div>

          {/* <div className=" bg-yellow-500 p-4 md:p-7 h-fit shadow-md rounded-md ">
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-sm lg:text-lg font-semibold text-green-700    uppercase">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Packages;
