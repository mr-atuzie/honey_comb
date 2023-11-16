import React, { useEffect, useState } from "react";
// import UserLineGraph from "../components/UserLineGraph";
import UserTransactions from "../components/UserTransactions";
// import UserLinearGraph from "../components/UserLinearGraph";
import UserStatCard from "../components/UserStatCard";
// import UserBarChart from "../components/UserBarChart";
// import Notification from "../components/Notification";
// import UserAreaChart from "../components/UserAreaChart";
import UserCard from "../components/UserCard";
// import UserPieChart from "../components/UserPieChart";
import moment from "moment";
import { toast } from "react-toastify";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Loader from "../components/Loader";
import UserReferral from "../components/UserReferral";
import { Link } from "react-router-dom";
import UserInvestment from "../components/UserInvestment";

const UserDashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [referrals, setReferrals] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [investments, setInvestments] = useState([]);

  const userData = JSON.parse(localStorage.getItem("user"));

  const getUserDashboard = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/transaction-history`,
        {
          withCredentials: true,
        }
      );

      const userRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user`,
        {
          withCredentials: true,
        }
      );

      const referralRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/referrals`,
        {
          withCredentials: true,
        }
      );

      const investmentRes = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/investments`,
        {
          withCredentials: true,
        }
      );

      setTransactions(res.data.transactions);
      setUser(userRes.data);
      setReferrals(referralRes.data.referrals);
      setInvestments(investmentRes.data.investments);

      setLoading(false);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);
      toast.error(message);
    }
  };

  useEffect(() => {
    getUserDashboard();
  }, []);

  const slides = [
    {
      text: "if you can dream it, you can do it.",
      sub: "Walt Disney",
    },
    {
      text: "Believe you can and you're halfway there.",
      sub: "Theodore Roosevelt",
    },
    {
      text: "The secret of getting ahead is getting started.",
      sub: "Mark Twain",
    },
    {
      text: "The only way to predict the future is to create it.",
      sub: "Peter Drucker",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      sub: "Eleanor Roosevelt",
    },
    {
      text: "The only person you are destined to become is the person you decide to be.",
      sub: "Ralph Waldo Emerson",
    },
    {
      text: "Don't let yesterday take up too much of today.",
      sub: "Will Rogers",
    },
    {
      text: "Happiness is not something ready-made. It comes from your own actions.",
      sub: "Dalai Lama",
    },
    {
      text: "The only thing that is constant is change.",
      sub: "Heraclitus",
    },

    {
      text: "If opportunity doesn't knock, build a door.",
      sub: "Milton Berle",
    },
    {
      text: "The best revenge is massive success.",
      sub: "Frank Sinatra",
    },
  ];

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      {!user?.kycStatus !== "approved" && (
        <Link to={"/user/add-kyc"}>
          <div className=" mt-5 bg-yellow-200  w-full p-3  flex rounded">
            <p className="text-xs text-yellow-700 lg:text-sm font-medium capitalize">
              Pending KYC, Uplaod a valid ID Card
            </p>
          </div>
        </Link>
      )}

      <h1 className=" font-extrabold text-green-600 text-2xl lg:text-4xl capitalize mt-4  lg:mt-9">
        welcome {userData?.name.split(" ")[0]}
      </h1>

      <div className=" lg:mb-9  mt-1">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
        >
          {slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div>
                  <p className=" text-sm lg:text-base capitalize font-medium text-yellow-600">
                    {slide.text}
                  </p>
                  <p className=" text-xs lg:text-sm  text-gray-600">
                    {slide.sub}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className=" hidden lg:block">
        <div className=" flex justify-between ">
          <div className=" w-[45%]">
            <UserCard user={user} />
          </div>
          <div className=" w-[50%]">
            <UserStatCard
              user={user}
              referrals={referrals.length}
              investments={investments}
            />
          </div>
        </div>

        <div className="  flex flex-col lg:flex-row lg:justify-between my-16">
          <div className=" lg:w-[43%]">
            <div className="  bg-white p-5 shadow-md sm:rounded-sm">
              <div className=" mb-6 ">
                <p className=" font-medium  text-xl ">Referrals</p>
                <p className=" text-xs text-gray-500 ">
                  {referrals?.length} Referral
                </p>
              </div>
              {referrals?.length < 1 && (
                <p className=" text-gray-500">No referrals</p>
              )}
              {referrals?.length >= 1 && (
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
                            <label
                              for="checkbox-all-search"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                          date
                        </th>
                        <th scope="col" className="px-6 py-3">
                          amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {referrals?.slice(0, 7).map((transaction) => {
                        return (
                          <tr
                            key={transactions._id}
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
                              className="flex capitalize items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {transaction?.name}
                            </th>

                            <td className={`px-6 py-4 `}>
                              {moment(transaction.createdAt).format(
                                "Do MMM YYYY"
                              )}
                            </td>

                            <td className={`px-6 py-4 font-medium`}>
                              &#8358;
                              {new Intl.NumberFormat().format(
                                transaction?.amount
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div className=" lg:w-[55%]">
            <div className="  bg-white p-5 shadow-md sm:rounded-sm">
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
                            <label
                              for="checkbox-all-search"
                              className="sr-only"
                            >
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
                          <tr
                            key={transactions._id}
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
                              {transaction?.plan}
                            </th>
                            <td className="px-6 py-4">
                              {" "}
                              {moment(transaction?.createdAt).format(
                                "Do MMM YYYY"
                              )}
                            </td>

                            {transaction?.type === "registration fee" && (
                              <td
                                className={
                                  "text-red-500  px-6 py-4 font-medium capitalize"
                                }
                              >
                                {transaction?.type}
                              </td>
                            )}

                            {transaction?.type === "payout" && (
                              <td
                                className={
                                  "text-red-500  px-6 py-4 font-medium capitalize"
                                }
                              >
                                {transaction?.type}
                              </td>
                            )}

                            {transaction?.type === "credit" && (
                              <td
                                className={
                                  "text-green-500  px-6 py-4 font-medium capitalize"
                                }
                              >
                                {transaction?.type}
                              </td>
                            )}

                            {/* <td
                              className={`${
                                transaction?.type === "registration fee" ||
                                "payout"
                                  ? "text-red-500"
                                  : "text-gray-900"
                              }   px-6 py-4 font-medium capitalize`}
                            >
                              {transaction?.type}
                            </td> */}

                            {/* <td
                              className={`${
                                transaction?.type === "registration fee"
                                  ? "text-red-500"
                                  : "text-green-500"
                              }   px-6 py-4 font-medium`}
                            >
                              {transaction?.type === "withdrawal" ? " -" : "+"}{" "}
                              &#8358;{" "}
                              {new Intl.NumberFormat().format(
                                transaction?.amount
                              )}
                            </td> */}

                            {transaction?.type === "registration fee" && (
                              <td
                                className={
                                  "text-red-500  px-6 py-4 font-medium capitalize"
                                }
                              >
                                -{" "}
                                {new Intl.NumberFormat().format(
                                  transaction?.amount
                                )}
                              </td>
                            )}

                            {transaction?.type === "credit" && (
                              <td
                                className={
                                  "text-green-500  px-6 py-4 font-medium capitalize"
                                }
                              >
                                +{" "}
                                {new Intl.NumberFormat().format(
                                  transaction?.amount
                                )}
                              </td>
                            )}

                            {transaction?.type === "payout" && (
                              <td
                                className={
                                  "text-red-500  px-6 py-4 font-medium capitalize"
                                }
                              >
                                -{" "}
                                {new Intl.NumberFormat().format(
                                  transaction?.amount
                                )}
                              </td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <UserCard user={user} />

        <div className=" my-6 ">
          <UserStatCard
            user={user}
            referrals={referrals.length}
            investments={investments}
          />
        </div>

        <div>
          <UserInvestment transactions={investments.slice(0, 7)} />
        </div>

        <div className="my-6  ">
          <UserTransactions transactions={transactions.slice(0, 7)} />
        </div>

        <div>
          <UserReferral referrals={referrals} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
