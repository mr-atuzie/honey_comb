import React, { useEffect, useState } from "react";
import UserTransactions from "../components/UserTransactions";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import Loader from "../components/Loader";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserTransactions = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/transaction-history`,
        {
          withCredentials: true,
        }
      );

      setTransactions(res.data.transactions);
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
    getUserTransactions();
  }, []);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChange = (e) => {
    const month = e.target.value;
    const userData = { month };

    if (month === "All") {
      getUserTransactions();
    } else {
      handleFilter(userData);
    }
  };

  const handleFilter = async (formData) => {
    console.log(formData);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/filter-transactions-month`,
        formData,
        {
          withCredentials: true,
        }
      );

      setTransactions(res.data);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="h-screen">
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Transactions History
      </h1>

      <div className="relative mb-10">
        <select
          className=" w-[45%]  lg:w-[15%]  mt-1 lg:mt-3  rounded-lg  border border-gray-300 text-gray-700  p-3 "
          onChange={handleChange}
        >
          <option>Select month</option>
          <option value={"All"}>All</option>
          {months.map((month, index) => {
            return (
              <option key={index} value={month}>
                {month}
              </option>
            );
          })}
        </select>
      </div>

      <div className="lg:hidden bg-white lg:mx-auto">
        <UserTransactions transactions={transactions} />
      </div>
      {/* {transactions?.length < 1 && (
        <p className=" text-gray-500">No Transaction found</p>
      )} */}
      {transactions?.length >= 1 && (
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
                  Investment
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>{" "}
                {/*
                <th scope="col" className="px-6 py-3">
                  Plan
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions?.map((transaction) => {
                return (
                  <tr
                    key={transaction._id}
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
                          {transaction.plan}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      {moment(transaction.createdAt).format("MMM Do YYYY")}
                    </td>

                    {transaction.type === "payout" && (
                      <td className="px-6 py-4 font-medium capitalize text-red-600">
                        {" "}
                        {transaction.type}
                      </td>
                    )}

                    {transaction.type === "registration fee" && (
                      <td className="px-6 py-4 font-medium capitalize text-red-600">
                        {" "}
                        {transaction.type}
                      </td>
                    )}

                    {transaction.type === "credit" && (
                      <td className="px-6 py-4 font-medium capitalize text-green-600">
                        {" "}
                        {transaction.type}
                      </td>
                    )}

                    <td className="px-6 py-4">
                      {" "}
                      &#8358;{" "}
                      {new Intl.NumberFormat().format(transaction?.amount)}
                    </td>

                    <td className="px-6 py-4">
                      <div class="flex items-center  text-green-600">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                        Successful
                      </div>
                    </td>
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

export default Transactions;
