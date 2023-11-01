import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Pay from "../components/Pay";
import { toast } from "react-toastify";
import axios from "axios";

const Invest = () => {
  const { type } = useParams();
  const [amount, setAmout] = useState(0);
  const [duration, setDuration] = useState(1);

  const durations = [
    { name: "3 months", value: 3 },
    { name: "6 months", value: 6 },
    { name: "1 years", value: 12 },
  ];

  const LRI = async () => {
    const userData = { amount, type, duration };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/low-risk-investment`,
        userData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(error);

      toast.error(message);
    }
  };

  const HRI = async () => {
    const userData = { amount, type };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/high-risk-investment`,
        userData,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(error);

      toast.error(message);
    }
  };

  const calHighInvestment = (amount) => {
    const intrest = parseInt(amount) * 0.15;
    const initialInvest = parseInt(amount) / 4;

    const payout = intrest + initialInvest;

    setAmout(payout);
  };

  return (
    <div className=" w-full h-screen ">
      <div className=" w-full lg:w-[50%] mx-auto bg-white shadow-lg rounded mt-20 p-5 flex flex-col justify-center items-center">
        <h1 className=" text-red-500 lg:text-lg font-semibold tracking-wide uppercase">
          {type}
        </h1>
        <div className=" text-yellow-500 flex items-center">
          <span className=" font-bold">&#x20A6;</span>
          <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold">
            {type === "Low Risk Investment"
              ? new Intl.NumberFormat().format(amount * duration * 0.03)
              : new Intl.NumberFormat().format(amount)}
          </h2>
        </div>

        {type === "Low Risk Investment" ? (
          <div className="relative w-full mt-7">
            <input
              type="text"
              name="amount"
              id="amount"
              className="block p-2.5  lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
        ) : (
          <div className="relative w-full mt-7">
            <input
              type="text"
              name="amount"
              id="amount"
              className="block p-2.5  lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              onChange={(e) => calHighInvestment(e.target.value)}
            />
            <label
              htmlFor="amount"
              className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
            >
              Amount
            </label>
          </div>
        )}

        {type === "Low Risk Investment" && (
          <div className="relative w-full mt-7">
            <select
              name="duration"
              id="duration"
              className="block p-2.5 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              onChange={(e) => setDuration(e.target.value)}
            >
              <option className=" text-xs lg:text-base">Select Duration</option>
              {durations.map((d, index) => {
                return (
                  <option
                    className=" text-sm lg:text-base"
                    key={index}
                    value={d.value}
                  >
                    {d.name}
                  </option>
                );
              })}
            </select>
            <label
              htmlFor="bank"
              className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
            >
              Duration
            </label>
          </div>
        )}

        {type === "Low Risk Investment" && (
          <Pay handleInvest={LRI} amount={amount} />
        )}
        {type === "High Risk Investment" && (
          <Pay handleInvest={HRI} amount={amount} />
        )}
      </div>
    </div>
  );
};

export default Invest;
