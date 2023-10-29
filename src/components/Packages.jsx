import React from "react";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import Warning from "./Warning";
import ShowOnLogIn, { ShowOnLogOut } from "../protect/Protect";

import { Link, useNavigate } from "react-router-dom";

const Packages = ({ homePage }) => {
  const [warning, setWarning] = useState(false);
  const [type, setType] = useState("");

  const navigate = useNavigate();

  const packages = [
    {
      name: "Low Risk Investment",
      payout: " Basic (3 Months)| Standard (6 Months)| Premium (1 Year)",
      investments: "(SME Loans, Real Estate, Agriculture)",
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
      payout: "Weekly Cash Out",
      investments: "(Betting, Casino, Crypto, Forex Trading)",
      list: [
        "100,000 naira Minimum Investment ",
        "15% weekly payout",
        "2% Referral Bonus",
        "Minimum Investment is 100,000",
        "5% Registration Fee",
        "7.5% VAT Charged on Withdrawal",
      ],
    },
  ];

  const handleInvest = (name) => {
    if (name === "High Risk Investment") {
      setWarning(true);
      setType(name);
    } else {
      navigate(`/user/invest/${name}`);
    }
  };

  return (
    <div className={"  bg-green-50"}>
      {warning && (
        <Warning warning={warning} setWarning={setWarning} type={type} />
      )}

      <div className="w-[90%] mx-auto py-10 lg:py-20">
        {homePage && (
          <div className=" text-center flex flex-col justify-center items-center ">
            <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
              Our Packages
            </div>
            <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
          </div>
        )}

        <div className=" flex flex-col lg:flex-row gap-6 justify-around mt-10">
          {packages.map((p) => {
            return (
              <div
                key={p.name}
                className="bg-white p-3 lg:p-4  h-fit shadow-md rounded-md "
              >
                <div className=" flex flex-col justify-center items-center">
                  <h1
                    className={`${
                      p.name === "Low Risk Investment"
                        ? "text-orange-500-500"
                        : "text-red-500"
                    }   lg:text-lg font-semibold tracking-wide uppercase`}
                  >
                    {p.name}
                  </h1>
                  <div className=" text-yellow-500 flex items-center">
                    <span className=" font-bold">&#x20A6;</span>
                    <h2 className=" text-green-600 text-sm lg:text-base font-bold mt-1 mb-1 ">
                      {p.investments}
                    </h2>
                  </div>
                  <p className=" text-gray-800 text-xs lg:text-sm font-medium">
                    {p.payout}
                  </p>
                </div>

                <ul className=" mt-5">
                  {p.list.map((pl, index) => {
                    return (
                      <li
                        key={index}
                        className="text-xs lg:text-base text-gray-600 capitalize tracking-wide flex items-center gap-1 mb-2"
                      >
                        <span className="  flex items-center justify-center rounded-full text-green-700 ">
                          <BsCheck2 size={15} />
                        </span>
                        {pl}
                      </li>
                    );
                  })}
                </ul>

                <ShowOnLogOut>
                  <Link to={"/login"}>
                    <button
                      onClick={() => handleInvest(p.name)}
                      className="text-white text-sm lg:text-lg bg-[#08432d]  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4"
                    >
                      Get started
                    </button>
                  </Link>
                </ShowOnLogOut>

                <ShowOnLogIn>
                  <button
                    onClick={() => handleInvest(p.name)}
                    className="text-white text-sm lg:text-lg bg-[#08432d]  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4"
                  >
                    Get started
                  </button>
                </ShowOnLogIn>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Packages;
