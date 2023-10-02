import React from "react";
import UserLineGraph from "../components/UserLineGraph";
import UserTransactions from "../components/UserTransactions";
import UserLinearGraph from "../components/UserLinearGraph";
import UserStatCard from "../components/UserStatCard";
import UserBarChart from "../components/UserBarChart";
import Notification from "../components/Notification";
import UserAreaChart from "../components/UserAreaChart";
import UserCard from "../components/UserCard";
import { IoIosNotifications } from "react-icons/io";

const UserDashboard = () => {
  return (
    <div>
      {/* header */}
      <div className=" flex justify-between items-center">
        <form className=" hidden lg:block lg:w-[38%]">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
              placeholder="Search..."
              required
            />
          </div>
        </form>

        <div className=" flex items-center gap-2">
          <img
            className=" w-12 h-12 rounded-full object-cover"
            src="https://images.squarespace-cdn.com/content/v1/55cba28de4b05c606034e167/1642440989307-TLPN44V33FNLQCWNJ4O5/Gabriel+Tanhara_Actors-Headshots-London.jpg"
            alt=""
          />

          <h2 className=" capitalize  font-medium">Atuzie Rex</h2>
        </div>

        <div className=" border-2 border-yellow-500 bg-green-500 text-white p-2 h-fit rounded-full">
          <IoIosNotifications size={25} className=" " />
        </div>
      </div>
      <h1 className=" font-medium text-2xl lg:text-4xl  my-6 lg:my-11">
        {" "}
        Dashboard
      </h1>

      <div className=" hidden lg:block">
        <div className="  flex flex-col lg:flex-row lg:justify-between mb-10">
          <div className=" lg:w-[46%]">
            {/* card */}
            <UserCard />
            {/* areachart */}
            <div className="hidden lg:block bg-white shadow-lg pb-3 rounded h-fit">
              <UserAreaChart />
            </div>
          </div>
          <div className=" lg:w-[50%]">
            {/* Notification */}
            <Notification />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row lg:justify-between">
          <div className=" lg:w-[30%]  ">
            <UserStatCard />
          </div>

          <div className=" my-10 lg:my-0 lg:w-[32%] ">
            <UserLinearGraph />
          </div>

          <div className=" lg:w-[35%] ">
            <UserTransactions />
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between my-10">
          {/* line graph */}
          <div className=" lg:w-[60%] bg-white shadow-lg pb-3 rounded">
            <UserLineGraph />
          </div>
          {/* barchat */}
          <div className=" lg:w-[35%] bg-white shadow-lg pb-3 rounded">
            <UserBarChart />
          </div>

          {/* notification */}
        </div>
      </div>

      <div className="lg:hidden">
        <UserCard />

        <div className=" lg:w-[30%]  ">
          <UserStatCard />
        </div>

        <div className=" my-10 lg:my-0 lg:w-[32%] ">
          <UserLinearGraph />
        </div>

        <div className=" lg:w-[35%] ">
          <UserTransactions />
        </div>

        <div className=" lg:w-[50%]">
          {/* Notification */}
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
