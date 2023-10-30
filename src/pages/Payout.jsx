import React from "react";
import AdminHeader from "../components/AdminHeader";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import moment from "moment";
import AdminPay from "../components/AdminPay";

const Payout = () => {
  const { id } = useParams();
  const [investment, setInvestment] = useState();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPayout = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/investment/${id}`,
          {
            withCredentials: true,
          }
        );

        const userRes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/user/${res.data.userId}`,
          {
            withCredentials: true,
          }
        );

        setInvestment(res.data);
        setUser(userRes);

        // setUser(userRes.data);
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
    getPayout();
  }, [id, investment?.userId]);

  if (loading) {
    <Loader />;
  }

  const payout = async () => {
    const userData = { amount: investment?.amount, type: investment?.type };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/payout/${investment?._id}`,
        userData,
        {
          withCredentials: true,
        }
      );

      const investmentRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/investment/${id}`,
        {
          withCredentials: true,
        }
      );

      setInvestment(investmentRes.data);
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

  return (
    <div>
      <AdminHeader />
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Payout
      </h1>
      <div className="lg:w-[45%] mx-auto shadow-lg rounded p-5 bg-white my-16">
        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Name</span>
          <p className=" text-lg"> {investment?.name}</p>
        </div>
        <div className=" font-medium flex justify-between items-center mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Email</span>
          <p className=" text-lg"> {investment?.email}</p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Type</span>
          <p className=" text-lg"> {investment?.type}</p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Amount</span>
          <p className=" text-lg">
            &#8358; {new Intl.NumberFormat().format(investment?.amount)}
          </p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Date</span>
          <p className=" text-lg">
            {moment(investment?.createdAt).format("MMM Do YYYY")}
          </p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Intrest</span>
          <p className=" text-lg">
            &#8358; {new Intl.NumberFormat().format(investment?.payout)}
          </p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Maturity</span>
          <p className=" text-lg">
            {moment(investment?.maturity).format("MMM Do YYYY")}
          </p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Status</span>
          {investment?.status === "withdraw" ? (
            <p className=" text-lg text-red-600">{investment?.status}</p>
          ) : (
            <p className=" text-lg text-green-800">{investment?.status}</p>
          )}
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">payout</span>
          <p className=" text-lg">
            &#8358;{" "}
            {new Intl.NumberFormat().format(
              investment?.payout + investment?.amount
            )}
          </p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2 border-b py-2">
          <span className="  text-green-700 uppercase">Bank</span>
          <p className=" text-lg">{!user?.bank ? "Not added" : user?.bank}</p>
        </div>

        <div className=" font-medium flex justify-between items-center capitalize mb-2">
          <span className="  text-green-700 uppercase">Account Number</span>
          <p className=" text-lg">
            {!user?.accountNumber ? "Not added" : user?.accountNumber}
          </p>
        </div>

        <div className=" mt-8 ">
          {/* <div className="relative ">
            <input
              type="text"
              name="amount"
              id="amount"
              className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Pay client"
                onChange={(e) => setAmout(e.target.value)}
              value={investment?.payout + investment?.amount}
            />

            <label
              htmlFor="amount"
              className="absolute   text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
            >
              Amount
            </label>

          </div> */}
          <AdminPay
            handlePay={payout}
            amount={investment?.payout + investment?.amount}
          />
        </div>
      </div>
    </div>
  );
};

export default Payout;
