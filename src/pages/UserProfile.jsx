import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import { validateEmail } from "../services/authServices";
import moment from "moment";
import Pay from "../components/Pay";
import { MdAccountBalance } from "react-icons/md";
// import { GiMoneyStack } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { ImStatsBars } from "react-icons/im";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Loader from "../components/Loader";

const UserProfile = () => {
  // const [formData, setFormData] = useState({});
  //   const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [amount, setAmout] = useState();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const userRes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/user/${id}`,
          {
            withCredentials: true,
          }
        );

        const transactionRes = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/transaction-history/${id}`,
          {
            withCredentials: true,
          }
        );

        setUser(userRes.data);
        setTransactions(transactionRes.data.transactions);
        setLoading(false);
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

    getUser();
  }, [id]);

  if (loading) {
    return <Loader />;
  }

  // const handlePayout = () => {};

  return (
    <div>
      <h1 className=" font-bold text-green-600 capitalize text-2xl lg:text-4xl  my-9 lg:my-11">
        {user?.firstname} {user?.lastname} Dashboard
      </h1>

      <div className=" grid grid-cols-4 gap-5">
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-green-100 text-green-500 flex justify-center items-center rounded-md">
            <MdAccountBalance size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">
              {" "}
              &#8358;{" "}
              {new Intl.NumberFormat().format(
                user?.accountBalance + user?.intrest + user?.referralBonus
              )}
            </h2>
            <p className=" capitalize  font-medium text-gray-900">
              Total Balance
            </p>
          </div>
        </div>
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3  ">
          <div className=" p-4 bg-red-100 text-red-500 flex justify-center items-center rounded-md">
            <FaMoneyBillTransfer size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">
              {" "}
              &#8358;{new Intl.NumberFormat().format(user?.accountBalance)}
            </h2>
            <p className=" capitalize  font-medium text-gray-900">Investment</p>
          </div>
        </div>
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3">
          <div className=" p-4 bg-purple-100 text-purple-500 flex justify-center items-center rounded-md">
            <TbPigMoney size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">
              {" "}
              &#8358;
              {new Intl.NumberFormat().format(user?.intrest)}
            </h2>
            <p className=" capitalize  font-medium text-gray-900">Intrest</p>
          </div>
        </div>
        <div className=" bg-white px-5 py-8 shadow-lg rounded flex items-center gap-3 ">
          <div className=" p-4 bg-orange-100 text-orange-500 flex justify-center items-center rounded-md">
            <ImStatsBars size={30} />
          </div>

          <div className="">
            <h2 className=" text-2xl font-semibold">{transactions?.length}</h2>
            <p className=" capitalize  font-medium text-gray-900">
              Transactions
            </p>
          </div>
        </div>
      </div>

      <div className=" flex justify-between my-16 ">
        <div className=" w-[40%]">
          <form className=" p-5  bg-white">
            <div className=" mb-6 ">
              <p className=" font-medium  text-xl ">User Details </p>
            </div>

            <div className="relative my-7">
              <p
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none capitalize   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                // placeholder=""
                // onChange={handleInputChange}
                // defaultValue={name}
              >
                {user?.firstname} {user?.lastname}
              </p>
              <label
                htmlFor="name"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Username
              </label>
            </div>

            <div className=" flex justify-between items-center my-7 lg:my-11">
              <div className="relative  w-[45%]">
                <p
                  // type="email"
                  // name="email"
                  // id="email"
                  className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  // placeholder=""
                  // onChange={handleInputChange}
                  // defaultValue={user?.email}
                >
                  {user?.email}
                </p>
                <label
                  htmlFor="email"
                  className="absolute   text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
                >
                  Email
                </label>
              </div>

              <div className="relative w-[45%]">
                <p
                  // type="email"
                  // name="email"
                  // id="email"
                  className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  // placeholder=""
                  // onChange={handleInputChange}
                  // defaultValue={user?.email}
                >
                  {user?.DOB}
                </p>
                <label
                  htmlFor="DOB"
                  className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
                >
                  Date Of Birth
                </label>
              </div>
            </div>

            <div className="relative my-7">
              <p
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none capitalize   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                // placeholder=""
                // onChange={handleInputChange}
                // defaultValue={name}
              >
                {user?.address}
              </p>
              <label
                htmlFor="name"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Address
              </label>
            </div>

            <div className=" flex items-center justify-between my-7 lg:my-11">
              <div className="relative  w-[45%] ">
                <p
                  // type="email"
                  // name="email"
                  // id="email"
                  className="block px-2.5 py-3 lg:p-4   text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  // placeholder=""
                  // onChange={handleInputChange}
                  // defaultValue={user?.email}
                >
                  {/* {user?.kycStatus} */}
                  {!user?.kycStatus && "NIL"}
                  {user?.kycStatus === "pending" && "Pending"}
                  {user?.kycStatus === "disapprove" && "Rejected"}
                  {user?.kycStatus === "approved" && "Accepted"}
                </p>
                <label
                  htmlFor="DOB"
                  className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
                >
                  Kyc status
                </label>
              </div>

              <div className="relative w-[45%]">
                <p className="block px-2.5 py-3 lg:p-4   text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                  {user?.phone}
                </p>
                <label
                  htmlFor="DOB"
                  className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <div className="relative my-7">
              <p
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none capitalize   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                // placeholder=""
                // onChange={handleInputChange}
                // defaultValue={name}
              >
                {user?.bank}
              </p>
              <label
                htmlFor="name"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Bank
              </label>
            </div>

            <div className="relative my-7 lg:my-11">
              <p className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                {user?.accountNumber}
              </p>
              <label
                htmlFor="DOB"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Account Number
              </label>
            </div>

            <div className="relative my-7 lg:my-11">
              <p className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                {moment(user.createdAt).format("MMM Do YYYY")}
              </p>
              <label
                htmlFor="DOB"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Joined
              </label>
            </div>
          </form>
          {/* <div className=" mt-11  bg-white p-5">
            <div className=" mb-6 ">
              <p className=" font-medium  text-xl ">Validate Kyc </p>
            </div>
            <div className="">
              <img
                className=" rounded-sm  h-[200px]  "
                src={user?.document?.image}
                alt=""
              />

              <div className=" mt-4 flex gap-2 ">
                <button
                  className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8"
                  onClick={() => approvekyc(user._id)}
                >
                  Accept
                </button>
                <button
                  className="text-white bg-red-600   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8"
                  onClick={() => disapprovekyc(user._id)}
                >
                  Decline
                </button>
              </div>
            </div>
          </div> */}
        </div>
        <div className=" w-[55%]">
          <div className=" bg-white p-5 shadow-md  h-fit sm:rounded-sm">
            <div className=" mb-6 ">
              <p className=" font-medium  text-xl ">Transactions</p>
              <p className=" text-xs text-gray-500 ">
                {transactions?.length} Transactions
              </p>
            </div>

            {transactions?.length < 1 && (
              <p className=" text-gray-500">No transactions</p>
            )}
            {transactions?.length >= 1 && (
              <div className="relative overflow-x-auto ">
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
                    </tr>
                  </thead>
                  <tbody>
                    {transactions?.slice(0, 7).map((transaction) => {
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
                              <div className="text-xs font-normal text-gray-500">
                                {transaction?.email}
                              </div>
                            </div>
                          </th>
                          <td className="px-6 py-4">
                            {" "}
                            {moment(transaction.createdAt).format(
                              "Do MMM YYYY"
                            )}
                          </td>
                          <td
                            className={`${
                              transaction?.type === "withdrawal"
                                ? "text-red-500"
                                : "text-gray-900"
                            }   px-6 py-4 font-medium capitalize`}
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
                            {transaction?.type === "withdrawal" ? " -" : "+"}{" "}
                            &#8358;{transaction?.amount}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="  mt-11 bg-white p-5  h-fit">
            <div className=" mb-6 ">
              <p className=" font-medium  text-xl ">Payout</p>
            </div>
            <div className=" ">
              <div className="relative ">
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder="Pay client"
                  onChange={(e) => setAmout(e.target.value)}
                  // defaultValue={user?.email}
                />

                <label
                  htmlFor="amount"
                  className="absolute   text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
                >
                  Amount
                </label>
              </div>

              <Pay amount={amount} type={"withdral"} />
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className=" flex justify-between my-16">
        <div className=" w-[55%] bg-white p-5">
          <div className=" mb-6 ">
            <p className=" font-medium  text-xl ">Validate Kyc </p>
          </div>
          <div className="">
            <img
              className=" rounded-sm  h-[200px]  "
              src={user?.document?.image}
              alt=""
            />

            <div className=" mt-4 flex gap-2 ">
              <button
                className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8"
                onClick={() => approvekyc(user._id)}
              >
                Accept
              </button>
              <button
                className="text-white bg-red-600   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8"
                onClick={() => disapprovekyc(user._id)}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[45%] bg-white p-5  h-fit">
          <div className=" mb-6 ">
            <p className=" font-medium  text-xl ">Payout</p>
          </div>
          <div className=" ">
            <div className="relative ">
              <input
                type="text"
                name="amount"
                id="amount"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Pay client"
                onChange={handleInputChange}
                // defaultValue={user?.email}
              />

              <label
                htmlFor="amount"
                className="absolute   text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Amount
              </label>
            </div>

            <Pay amount={50000} type={"withdral"} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UserProfile;
