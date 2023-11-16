import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
// import Pay from "../components/Pay";
import { toast } from "react-toastify";
import axios from "axios";
import AccountModal from "../components/AccountModal";

const Invest = () => {
  const { type } = useParams();
  const [amount, setAmout] = useState(0);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [intrest, setIntrest] = useState(0);
  const [duration, setDuration] = useState(1);

  const durations = [
    { name: "3 months", value: 3 },
    { name: "6 months", value: 6 },
    { name: "1 years", value: 12 },
  ];

  const LRI = async () => {
    const userData = { amount, type, duration };
    setLoading(true);
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/low-risk-investment`,
        userData,
        {
          withCredentials: true,
        }
      );

      setModal(true);
      setLoading(false);
      toast.success("Successfull");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setLoading(false);
    }
  };

  const HRI = async () => {
    const userData = { amount, type };
    setLoading(true);

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/high-risk-investment`,
        userData,
        {
          withCredentials: true,
        }
      );

      setModal(true);
      setLoading(false);
      toast.success("successfull");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
      setLoading(false);
    }
  };

  const calHighInvestment = (amount) => {
    const regFee = parseInt(amount) * 0.05;
    const currentAmount = parseInt(amount) - regFee;

    const intrest = currentAmount * 0.15;
    const initialInvest = currentAmount / 4;

    const payout = intrest + initialInvest;
    setIntrest(payout);
    setAmout(amount);
  };

  return (
    <div className=" w-full h-screen ">
      {modal && <AccountModal setModal={setModal} />}
      <div className=" w-full lg:w-[50%] mx-auto bg-white shadow-lg rounded mt-20 p-5 flex flex-col justify-center items-center">
        <h1 className=" text-red-500 lg:text-lg font-semibold tracking-wide uppercase">
          {type}
        </h1>
        <div className=" text-yellow-500 flex items-center">
          <span className=" font-bold">&#x20A6;</span>
          <h2 className=" text-green-600 text-4xl lg:text-5xl font-bold">
            {type === "Low Risk Investment"
              ? new Intl.NumberFormat().format(amount * duration * 0.03)
              : new Intl.NumberFormat().format(intrest)}
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
          <button
            onClick={LRI}
            disabled={loading}
            className="text-white text-sm lg:text-lg bg-[#08432d] disabled:bg-green-300  rounded py-2.5 lg:p-4 w-full capitalize font-medium my-4"
          >
            {loading ? "Loading" : "Invest now"}
          </button>
          // <Pay handleInvest={LRI} amount={amount} />
        )}
        {type === "High Risk Investment" && (
          <button
            onClick={HRI}
            disabled={loading}
            className="text-white text-sm lg:text-lg bg-[#08432d] disabled:bg-green-300  rounded py-2.5 lg:p-4 w-full capitalize font-medium my-4"
          >
            {loading ? "Loading" : "Invest now"}
          </button>
          // <Pay handleInvest={HRI} amount={amount} />
        )}
      </div>
    </div>
  );
};

export default Invest;
