import React, { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import Pay from "./Pay";

const Packages = ({ homePage }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [amount, setAmout] = useState();
  const packages = [
    {
      name: "Low Risk Investment",
      type: "LRI",
      list: [
        "0% risk",
        "3% Monthly Returns paid upfront",
        "7.5% VAT charged on withdrawal",
        "Minimum Investment is 100,000",
        "Investment spans across 3 months (Basic), 6 months (Standard), 1 year (Professional)",
        "Enjoy 2% referral bonus",
      ],
    },
    {
      name: "High Risk Investment",
      type: "HRI",
      list: [
        "15% payout weekly",
        "0% payout for Investments above 1 Million",
        "7.5% VAT charged on withdrawal",
        "Minimum Investment is 100,000",
        "Investment spans across 3 months (Basic), 6 months (Standard), 1 year (Professional)",
        "Enjoy 2% referral bonus",
      ],
    },
  ];
  return (
    <div className={" bg-green-50 mt-3"}>
      <div className="w-[90%] mx-auto py-10 lg:py-20">
        {homePage && (
          <div className=" text-center flex flex-col justify-center items-center ">
            <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
              Our Packages
            </div>
            <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
          </div>
        )}

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2  gap-4 lg:gap-10 mt-10">
          {packages.map((p) => {
            return (
              <div
                key={p.name}
                className="bg-white p-4  h-fit shadow-md rounded-md "
              >
                <div className=" flex flex-col justify-center items-center">
                  <h1 className=" text-red-500 lg:text-lg font-semibold tracking-wide uppercase">
                    {p.name}
                  </h1>
                  {/* <div className=" text-yellow-500 flex items-center">
                <span className=" font-bold">&#x20A6;</span>
                <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold mt-1 mb-2 ">
                  {" "}
                  50,000
                </h2>
              </div> */}
                  {/* <p className=" capitalize text-gray-800 text-xs font-medium">
                Pay per momth
              </p> */}
                </div>

                <ul className=" mt-5">
                  {p.list.map((pl, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-2 mb-2"
                      >
                        <span className=" h-8 w-8 flex items-center justify-center rounded-full text-green-700 bg-green-100">
                          <BsCheck2 />
                        </span>
                        {pl}
                      </li>
                    );
                  })}
                </ul>

                {user && (
                  <div>
                    <div className="relative mt-11 mb-4">
                      <input
                        type="text"
                        name="amount"
                        id="amount"
                        className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=""
                        onChange={(e) => setAmout(e.target.value)}
                      />
                      <label
                        htmlFor="amount"
                        className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
                      >
                        Amount
                      </label>
                    </div>
                    <Pay amount={amount} type={p.type} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
