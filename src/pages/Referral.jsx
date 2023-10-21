import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Referral = () => {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUserReferrals = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/referrals`,
        {
          withCredentials: true,
        }
      );

      setReferrals(res.data.referrals);
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
    getUserReferrals();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Referrals
      </h1>

      {referrals?.length < 1 && (
        <p className=" text-gray-500">No Referrals found</p>
      )}
      {referrals?.length >= 1 && (
        <div className="hidden lg:block relative overflow-x-auto shadow-md sm:rounded-lg md:w-[50%] mx-auto">
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
                {/* <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Plan
                </th> */}
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {referrals?.map((transaction) => {
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
                          {transaction.name}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      {" "}
                      {moment(transaction.createdAt).format("MMM Do YYYY")}
                    </td>

                    <td className="px-6 py-4"> &#8358; {transaction.amount}</td>
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

export default Referral;
