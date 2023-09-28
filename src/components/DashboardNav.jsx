import React from "react";
import { GrTransaction } from "react-icons/gr";

import { BiHomeAlt2 } from "react-icons/bi";
import { FaCog, FaWallet } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { TbBellRingingFilled } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className=" rounded-t-xl z-50 lg:rounded-t-none  fixed bottom-0  lg:top-0 w-full lg:left-0 lg:w-72 bg-white  shadow-xl lg:shadow-none lg:h-screen">
      {/* desktop */}
      <div className="  hidden lg:block">
        <div className=" w-full flex justify-center items-center py-5">
          <p className=" uppercase font-semibold text-yellow-500 mb-4">
            Honey comb fxd
          </p>
        </div>

        <div className=" my-14 px-12 flex flex-col gap-10">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (isActive ? "" : "")}
          >
            <div className="flex  items-center">
              <div className=" border-2 border-yellow-500 bg-green-500 text-white p-2 h-fit rounded-lg">
                <BiHomeAlt2 size={20} />
              </div>
              <p className=" ml-4 font-medium text-lg  ">Home</p>
            </div>
          </NavLink>
          <NavLink
            to={"/wallet"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <div className=" flex  items-center">
              <div className="border-2 border-yellow-500 bg-green-500 text-white  p-2 h-fit rounded-lg">
                <FaWallet size={20} />
              </div>
              <p className=" ml-4 font-medium text-lg ">Wallet</p>
            </div>
          </NavLink>

          <NavLink
            to={"/profile"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <div className=" flex  items-center ">
              <div className=" border-2 border-yellow-500 bg-green-500 text-white  p-2 h-fit rounded-lg">
                <BsFillPersonFill size={20} />
              </div>
              <p className=" ml-4 font-medium  text-lg ">Profile</p>
            </div>
          </NavLink>
          <NavLink
            to={"/chats"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <div className=" flex  items-center ">
              <div className=" border-2 border-yellow-500 bg-green-500 text-white p-2 h-fit rounded-lg">
                <FaCog size={20} />
              </div>
              <p className=" ml-4  text-lg font-medium">Settings</p>
            </div>
          </NavLink>
          <NavLink
            to={"/notification"}
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            <div className=" flex  items-center ">
              <div className=" border-2 border-yellow-500 bg-green-500 text-white  p-2 h-fit rounded-lg">
                <TbBellRingingFilled size={20} />
              </div>
              <p className=" ml-4 font-medium  text-lg ">Notifications</p>
            </div>
          </NavLink>

          <button className=" border-2 border-yellow-500 text-lg rounded-lg bg-green-500 text-white w-full py-3  mt-14">
            Logout
          </button>
        </div>
      </div>

      {/* mobile */}
      <div className=" px-6 py-3 flex items-center justify-between lg:hidden">
        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <BiHomeAlt2 size={30} />
            <p className=" text-xs mt-2">Home</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/explore"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <FaWallet size={30} />
            <p className=" text-xs mt-2">Wallet</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/save/favorites"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <GrTransaction size={30} />
            <p className=" text-xs mt-2">Transactionss</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/more"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-500"
            }
          >
            <IoPersonOutline size={30} />
            <p className=" text-xs mt-2">Profile</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
