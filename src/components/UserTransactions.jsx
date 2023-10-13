import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { BsArrowBarUp } from "react-icons/bs";
import { toast } from "react-toastify";

const UserTransactions = () => {
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
    <div className=" p-5 bg-white shadow-lg rounded mb-10 lg:mb-0">
      <div className=" mb-6">
        <p className=" font-medium text-lg  lg:text-xl ">
          Transactions History
        </p>
      </div>

      <div>
        {transactions?.map((transaction) => {
          return (
            <div
              key={transaction._id}
              className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2"
            >
              <div className=" flex items-center gap-2">
                <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 flex justify-center items-center">
                  <BsArrowBarUp size={25} />
                </div>
                <div>
                  <p className=" text-sm lg:text-base">{transaction.userId}</p>
                  <p className=" text-gray-700 text-xs lg:text-sm">
                    {moment(transaction.createdAt).format("MMM Do YYYY")}
                  </p>
                </div>
              </div>

              {/* <p className="text-sm lg:text-base text-green-600 font-medium bg-green-50 p-2">
            Credit
          </p> */}

              <p className=" text-green-600 font-medium text-sm lg:text-base">
                {" "}
                <span className=" m">+</span> &#8358;{transaction.amount}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserTransactions;
