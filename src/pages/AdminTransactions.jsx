import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import Loader from "../components/Loader";

const AdminTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTransactions = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/all-transactions`,
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

  useEffect(() => {
    getTransactions();
  }, []);

  console.log(transactions);
  const handleChange = (e) => {
    const month = e.target.value;
    const userData = { month };

    if (month === "All") {
      getTransactions();
    } else {
      handleFilter(userData);
    }
  };

  const handleFilter = async (formData) => {
    console.log(formData);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/filter-transactions-month`,
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
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        All Transactions
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
      {transactions?.length < 1 && (
        <p className=" text-gray-500">No Transaction found</p>
      )}
      {transactions?.length >= 1 && (
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
                  Plan
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
                          {transaction?.name}
                        </div>
                        <div className="font-normal text-gray-500">
                          {transaction?.email}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      {moment(transaction.createdAt).format("Do MMM YYYY")}
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
                    <td className="px-6 py-4"> </td>
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
      )}
    </div>
  );
};

export default AdminTransactions;
