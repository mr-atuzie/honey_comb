import moment from "moment";
import React from "react";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";

const UserTransactions = ({ transactions }) => {
  return (
    <div className=" p-5 bg-white shadow-lg rounded mb-10 lg:mb-0">
      <div className=" mb-6 ">
        <p className=" font-medium  lg:text-xl ">Transactions</p>
        <p className=" text-xs text-gray-500 ">
          {transactions?.length} Transactions
        </p>
      </div>
      {transactions?.length < 1 && (
        <p className=" text-sm text-gray-500">No transactions</p>
      )}

      <div>
        {transactions?.length >= 1 &&
          transactions.map((transaction) => {
            return (
              <div
                key={transaction._id}
                className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2"
              >
                {transaction?.type === "withdrawal" ? (
                  <div className=" flex items-center gap-2">
                    <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-red-100 text-red-600 flex justify-center items-center">
                      <BsArrowBarDown size={25} />
                    </div>
                    <div>
                      <p className=" text-xs lg:text-base">
                        {transaction.type}
                      </p>
                      <p className=" text-gray-700 text-xs lg:text-sm">
                        {moment(transaction.createdAt).format("MMM Do YYYY")}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className=" flex items-center gap-2">
                    <div className=" w-10 h-10 lg:w-12 lg:h-12 bg-green-100 text-green-600 flex justify-center items-center">
                      <BsArrowBarUp size={25} />
                    </div>
                    <div>
                      <p className=" text-sm lg:text-base">
                        {transaction.type}
                      </p>
                      <p className=" text-gray-700 text-xs lg:text-sm">
                        {moment(transaction.createdAt).format("MMM Do YYYY")}
                      </p>
                    </div>
                  </div>
                )}

                {transaction?.type === "withdrawal" ? (
                  <p className=" text-red-600 font-medium text-sm lg:text-base">
                    {" "}
                    <span className=" m">-</span> &#8358;
                    {new Intl.NumberFormat().format(transaction?.amount)}
                  </p>
                ) : (
                  <p className=" text-green-600 font-medium text-sm lg:text-base">
                    {" "}
                    <span className=" m">+</span> &#8358;
                    {new Intl.NumberFormat().format(transaction?.amount)}
                  </p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserTransactions;
