// import axios from "axios";
import React from "react";
import { useState } from "react";
import Pay from "./Pay";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";

const ReInvest = () => {
  const [amount, setAmout] = useState(0);
  const [intrest, setIntrest] = useState(0);

  const { id } = useParams();

  const calHighInvestment = (amount) => {
    const currentAmount = parseInt(amount);

    const intrest = currentAmount * 0.15;
    const initialInvest = currentAmount / 4;

    const payout = intrest + initialInvest;
    setIntrest(payout);
    setAmout(amount);
  };

  const HRI = async () => {
    const userData = { amount };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/reinvest/${id}`,
        userData,
        {
          withCredentials: true,
        }
      );
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

  return (
    <div className=" w-full h-screen ">
      <div className=" w-full lg:w-[50%] mx-auto bg-white shadow-lg rounded mt-20 p-5 flex flex-col justify-center items-center">
        <h1 className=" text-green-600 lg:text-lg font-semibold tracking-wide uppercase">
          ReInvest
        </h1>
        <div className=" text-yellow-500 flex items-center">
          <span className=" font-bold">&#x20A6;</span>
          <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold">
            {new Intl.NumberFormat().format(intrest)}
          </h2>
        </div>

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

        <Pay handleInvest={HRI} amount={amount} />
      </div>
    </div>
  );
};

export default ReInvest;
