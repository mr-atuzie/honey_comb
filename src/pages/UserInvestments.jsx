import React from "react";
import { useState } from "react";
import UserInvestment from "../components/UserInvestment";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Loader from "../components/Loader";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
// import ReInvest from "../components/ReInvest";

const UserInvestments = () => {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState(false);

  const getInvestments = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/investments`,
        {
          withCredentials: true,
        }
      );

      setInvestments(res.data.investments);
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

  useEffect(() => {
    getInvestments();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className=" h-screen">
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Investment
      </h1>

      {investments?.length < 1 && (
        <p className=" text-gray-500">No Investment</p>
      )}

      <div className="lg:hidden bg-white lg:mx-auto">
        <UserInvestment transactions={investments} />
      </div>

      {investments?.length >= 1 && (
        <div className="hidden lg:block relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div class="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 0"
                    />
                    <label for="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Intrest
                </th>
                <th scope="col" className="px-6 py-3">
                  Maturity
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {investments?.map((investment) => {
                return (
                  <tr
                    key={investment._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          for="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {investment?.type}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      &#8358;{" "}
                      {new Intl.NumberFormat().format(investment?.amount)}
                    </td>
                    <td className="px-6 py-4">
                      {moment(investment?.createdAt).format("MMM Do YYYY")}
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      &#8358;{" "}
                      {new Intl.NumberFormat().format(investment?.payout)}
                    </td>

                    <td className="px-6 py-4">
                      {moment(investment?.maturity).format("MMM Do YYYY")}
                      {/* {moment(D).format("MMM Do YYYY")} */}
                    </td>

                    <td className="px-6 py-4 ">
                      <Link to={`/user/investment/${investment?._id}`}>
                        <button className=" bg-green-700 text-white py-2.5  rounded w-full disabled:bg-green-300">
                          View
                        </button>
                      </Link>
                    </td>

                    {/* {investment.status === "" &&
                      (investment?.type === "Low Risk Investment" ? (
                        
                      ) : (
                        <td
                          onClick={() => highWithdraw(investment._id)}
                          className="px-6 py-4"
                        >
                          <button
                            disabled={withdraw}
                            className=" bg-green-700 text-white py-2.5  rounded w-full disabled:bg-green-300"
                          >
                            {withdraw ? "Processing" : "Withdraw"}
                          </button>
                        </td>
                      ))} */}
                    {/* {investment.status === "approved" && (
                      <td className="px-6 py-4">
                        <button
                          disabled={true}
                          className=" bg-green-700 text-white py-2.5  rounded w-full disabled:bg-green-300"
                        >
                          Paid
                        </button>
                      </td>
                    )} */}
                    {/* {investment.status === "withdraw" && (
                      <td className="px-6 py-4">
                        <button className=" bg-yellow-500 text-white py-2.5  rounded w-full disabled:bg-green-300">
                          Pending
                        </button>
                      </td>
                    )} */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserInvestments;
