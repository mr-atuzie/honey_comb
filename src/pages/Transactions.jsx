import React, { useEffect, useState } from "react";
import { countries } from "../data";
import UserTransactions from "../components/UserTransactions";

import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getUserTransactions = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/transaction-history`,
        {
          withCredentials: true,
        }
      );

      setTransactions(res.data.transactions);
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

  useEffect(() => {
    getUserTransactions();
  }, []);
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Transactions History
      </h1>

      <div className="relative mb-10">
        <select
          name="location"
          id="location"
          className=" w-[65%] text-sm lg:text-base  lg:w-[25%]  mt-1 lg:mt-3  rounded-lg  border border-gray-300 text-gray-700 p-2  lg:p-3 "
        >
          <option>Select month</option>
          {countries.map((c) => {
            return (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className="lg:hidden bg-white lg:mx-auto">
        <UserTransactions />
      </div>

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
                id
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Current Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Old Balance
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
                      <label for="checkbox-table-search-1" className="sr-only">
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
                        {transaction._id}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {" "}
                    {moment(transaction.createdAt).format("MMM Do YYYY")}
                  </td>
                  <td className="px-6 py-4"> &#8358; {transaction.amount}</td>
                  <td className="px-6 py-4">
                    {" "}
                    &#8358; {transaction.currentBalance}
                  </td>
                  <td className="px-6 py-4">
                    {" "}
                    &#8358; {transaction.oldBalance}
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
    </div>
  );
};

export default Transactions;
