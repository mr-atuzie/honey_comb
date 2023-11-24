import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import moment from "moment";
import { FaRegCopy, FaTimes } from "react-icons/fa";

const InvestDetails = () => {
  const { id } = useParams();
  const [investment, setInvestment] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reinvest, setReInvest] = useState(false);
  const [withdraw, setWithdraw] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getInvestments = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/investment/${id}`,
          {
            withCredentials: true,
          }
        );

        setInvestment(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        toast.error(message);
      }
    };
    getInvestments();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  const handleWithdraw = async (id) => {
    setWithdraw(true);
    try {
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/withdraw/${id}`,
        {
          withCredentials: true,
        }
      );

      setWithdraw(false);

      toast.success("Transaction in Progress");
    } catch (error) {
      setWithdraw(false);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  const highWithdraw = async (id) => {
    setWithdraw(true);
    try {
      const resp = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/investment/${id}`,
        {
          withCredentials: true,
        }
      );

      const investment = resp.data;

      if (investment?.week === 3) {
        setReInvest(true);
        setWithdraw(false);
      } else {
        await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/withdraw/${id}`,
          {
            withCredentials: true,
          }
        );

        toast.success("Transaction in Progress");
        setWithdraw(false);
      }
    } catch (error) {
      setWithdraw(false);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  const finalWithdraw = async (id) => {
    setWithdraw(true);
    try {
      await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/final-withdraw/${id}`,
        {
          withCredentials: true,
        }
      );

      toast.success("Transaction in Progress");
      navigate("/user/dashboard");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setWithdraw(false);
      toast.error(message);
    }
  };

  const handleCopy = (referralCode) => {
    navigator.clipboard.writeText(referralCode);
    toast.success(` referral code copied  to clipboard`);
  };

  return (
    <div className="h-screen">
      {reinvest && (
        <div className=" bg-black/90 w-full h-screen fixed left-0 top-0 z-50 flex justify-center items-center">
          <div className=" bg-white p-3 lg:p-5 rounded shadow-lg w-[90%] lg:w-[30%]">
            <FaTimes onClick={() => setReInvest(false)} size={20} />
            <h1 className=" text-green-600 font-semibold text-center lg:text-lg mb-3">
              REINVEST
            </h1>

            <p className=" text-sm lg:text-base ">
              Kindly reinvest to withdrawal at this stage
            </p>

            <div className=" flex gap-4 mt-5">
              <button
                onClick={() => finalWithdraw(investment._id)}
                className=" rounded bg-green-700 text-white px-4 text-xs lg:text-base lg:px-6 py-2 capitalize hover:bg-green-700 hover:text-white  "
              >
                {withdraw ? "Processing" : "withdraw"}
              </button>
              <button
                onClick={() => navigate(`/user/reinvest/${id}`)}
                className=" rounded bg-yellow-400 text-white px-4 text-xs lg:text-base lg:px-6 py-2 capitalize hover:bg-green-700 hover:text-white"
              >
                ReInvest
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="my-9 lg:my-11">
        <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  ">
          Investment
        </h1>
      </div>

      <div className=" bg-white md:w-[45%] shadow-lg mx-auto p-3 lg:p-5">
        <div className=" font-bold text-green-700 lg:text-2xl">
          {investment?.type}
        </div>

        {investment?.activated && (
          <div
            onClick={() => handleCopy(investment?._id)}
            className=" mt-3 flex justify-between cursor-pointer"
          >
            <div>
              <p className=" text-green-700 text-xs lg:text-sm font-medium capitalize">
                referral code
              </p>
              <p className=" text-gray-700 text-sm lg:text-lg font-medium">
                {investment?._id}
              </p>
            </div>

            <FaRegCopy className=" text-gray-500" />
          </div>
        )}

        <div className=" mt-3">
          <p className=" text-xs lg:text-sm text-green-700  font-medium capitalize">
            Amount
          </p>
          <p className=" text-gray-700  text-sm lg:text-lg font-medium">
            &#8358; {new Intl.NumberFormat().format(investment?.amount)}
          </p>
        </div>

        <div className=" mt-3">
          <p className="text-xs text-green-700 lg:text-sm font-medium capitalize">
            Date
          </p>
          <p className=" text-gray-700  text-sm lg:text-lg font-medium">
            {moment(investment?.createdAt).format("MMM Do YYYY")}
          </p>
        </div>

        <div className=" mt-3">
          <p className="text-xs text-green-700 lg:text-sm font-medium capitalize">
            Payout
          </p>
          <p className=" text-gray-700 text-sm lg:text-lg font-medium">
            &#8358; {new Intl.NumberFormat().format(investment?.payout)}
          </p>
        </div>

        <div className=" mt-3">
          <p className="text-xs text-green-700 lg:text-sm font-medium capitalize">
            Maturity
          </p>
          <p className=" text-gray-700 text-sm lg:text-lg font-medium">
            {moment(investment?.maturity).format("MMM Do YYYY")}
          </p>
        </div>

        <div className=" mt-3">
          <p className="text-xs text-green-700 lg:text-sm font-medium capitalize">
            Maturity
          </p>
          <p className=" text-gray-700 text-sm lg:text-lg font-medium">
            {moment(investment?.maturity).format("MMM Do YYYY")}
          </p>
        </div>

        {!investment?.activated && (
          <div className=" mt-5 bg-yellow-200 w-full p-3 text-center flex justify-center items-center rounded">
            <p className="text-xs text-yellow-700 lg:text-sm font-medium capitalize">
              Pending Validation
            </p>
          </div>
        )}

        {investment?.activated && (
          <div className=" mt-6">
            {investment.status === "" &&
              (investment?.type === "Gold Investment" ? (
                <div
                  onClick={() => handleWithdraw(investment._id)}
                  className="px-6 py-4"
                >
                  <button
                    disabled={withdraw}
                    className=" bg-green-700 text-white py-2.5  rounded w-full disabled:bg-green-300"
                  >
                    {withdraw ? "Processing" : "Withdraw"}
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => highWithdraw(investment._id)}
                  className="px-6 py-4"
                >
                  <button
                    disabled={withdraw}
                    className=" bg-green-700 text-white py-2.5  rounded w-full disabled:bg-green-300"
                  >
                    {withdraw ? "Processing" : "Withdraw"}
                  </button>
                </div>
              ))}
            {investment.status === "approved" && (
              <div className="px-6 py-4">
                <button
                  disabled={true}
                  className=" bg-green-700 text-white py-2.5  rounded w-full disabled:bg-green-300"
                >
                  Paid
                </button>
              </div>
            )}
            {investment.status === "withdraw" && (
              <div className="px-6 py-4">
                <button className=" bg-yellow-500 text-white py-2.5  rounded w-full disabled:bg-green-300">
                  Pending
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestDetails;
