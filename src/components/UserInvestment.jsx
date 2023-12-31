import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const UserInvestment = ({ transactions }) => {
  return (
    <div className=" p-3 lg:p-5 bg-white shadow-lg rounded mb-10 lg:mb-0">
      <div className=" mb-6 ">
        <p className=" font-medium  lg:text-xl ">Investments</p>
        <p className=" text-xs text-gray-500 ">
          {transactions?.length} Investments
        </p>
      </div>
      {/* {transactions?.length < 1 && (
        <p className=" text-sm text-gray-500">No Investments</p>
      )} */}

      <div>
        {transactions?.length >= 1 &&
          transactions.map((transaction) => {
            return (
              <div
                key={transaction._id}
                className=" flex justify-between items-center mb-3 border-b-2 border-gray-100 pb-2"
              >
                <div>
                  <p className=" text-xs lg:text-base"> {transaction?.type}</p>
                  <p className=" text-gray-700 text-[11px] lg:text-sm">
                    {moment(transaction?.createdAt).format("MMM Do YYYY")}
                  </p>
                </div>

                <div className=" flex flex-col items-center justify-center">
                  <p className=" font-medium text-xs lg:text-base">
                    {new Intl.NumberFormat().format(transaction?.payout)}
                  </p>
                  <p className=" text-gray-700  text-[11px] lg:text-sm">
                    {moment(transaction?.maturity).format("MMM Do YYYY")}
                  </p>
                </div>

                <Link to={`/user/investment/${transaction?._id}`}>
                  {" "}
                  <button className=" bg-green-700 text-white w-[90px] text-xs py-2 px-2 rounded disabled:bg-green-300 ">
                    View
                  </button>
                </Link>

                {/* {transaction.status === "" && (
                  
                )}
                {transaction.status === "approved" && (
                  <button
                    disabled={withdraw}
                    className=" bg-green-400 w-[90px] text-white text-xs py-2 px-2 rounded disabled:bg-green-300 "
                  >
                    Paid
                  </button>
                )}
                {transaction.status === "withdraw" && (
                  <button
                    disabled={withdraw}
                    className=" bg-yellow-400 w-[90px] text-white text-xs py-2 px-2 rounded disabled:bg-green-300 "
                  >
                    Pending
                  </button>
                )} */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default UserInvestment;
