import React, { useEffect, useState } from "react";
import { countries } from "../data";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/all-transactions`,
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
    getTransactions();
  }, []);

  console.log(transactions);
  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        All Transactions
      </h1>

      <div className="relative mb-10">
        <select
          name="location"
          id="location"
          className="  w-[25%]  mt-1 lg:mt-3  rounded-lg  border border-gray-300 text-gray-700  p-3 "
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

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                type
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>

              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions?.map((transaction) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                        {transaction?.name}
                      </div>
                      <div className="font-normal text-gray-500">
                        {transaction?.email}
                      </div>
                    </div>
                  </th>
                  <td className="px-6 py-4">
                    {" "}
                    {moment(transaction.createdAt).format("MMM Do YY")}
                  </td>
                  <td
                    className={`${
                      transaction?.type === "withdrawal"
                        ? "text-red-500"
                        : "text-green-500"
                    }   px-6 py-4 font-medium`}
                  >
                    {transaction?.type}
                  </td>
                  <td
                    className={`${
                      transaction?.type === "withdrawal"
                        ? "text-red-500"
                        : "text-green-500"
                    }   px-6 py-4 font-medium`}
                  >
                    &#8358; {transaction?.amount}
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

export default AdminTransactions;
