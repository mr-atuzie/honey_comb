import React from "react";
import {
  BiSolidDashboard,
  BiSolidUser,
  BiSupport,
  BiTransfer,
} from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import logo from "../assets/honeycomb logo.png";
import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { FaUsers } from "react-icons/fa6";

const UserDashboardNav = ({ user }) => {
  return (
    <div>
      <div>
        <div className=" w-full flex justify-center items-center py-5">
          <img className="w-40" src={logo} alt="" />
        </div>
      </div>

      <div className=" my-10 px-12 flex flex-col gap-4 ">
        <NavLink
          to={"/user/dashboard"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <BiSolidDashboard size={24} />
            </div>
            <p className="font-medium text-lg  ">Dashboard</p>
          </div>
        </NavLink>
        <NavLink
          to={"/user/profile"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <BiSolidUser size={24} />
            </div>
            <p className="font-medium text-lg  ">Profile</p>
          </div>
        </NavLink>

        <NavLink
          to={"/user/investment"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <FaMoneyBillTransfer size={24} />
            </div>
            <p className="font-medium text-lg  ">Investment</p>
          </div>
        </NavLink>

        <NavLink
          to={"/user/transactions"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <BiTransfer size={24} />
            </div>
            <p className="font-medium text-lg  ">Transactions</p>
          </div>
        </NavLink>
        {/* <NavLink
          to={"/user/referrals"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <FaUsers size={24} />
            </div>
            <p className="font-medium text-lg  ">Referrals</p>
          </div>
        </NavLink> */}
        <NavLink
          to={"/user/notifications"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <IoNotificationsSharp size={24} />
            </div>
            <p className="font-medium text-lg  ">Notifications</p>
          </div>
        </NavLink>
        <NavLink
          to={"/user/support"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <BiSupport size={24} />
            </div>
            <p className="font-medium text-lg  ">Support</p>
          </div>
        </NavLink>

        {user?.admin && (
          <NavLink
            to={"/admin/dashboard"}
            className={({ isActive }) =>
              isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
            }
          >
            <div className="flex gap-3 text-white items-center px-6  py-3">
              <div className="">
                <GiGraduateCap size={24} />
              </div>
              <p className="font-medium text-lg  ">Admin</p>
            </div>
          </NavLink>
        )}

        <button className=" border-2 border-yellow-500 text-lg rounded-lg bg-green-500 text-white w-full py-3  mt-14">
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDashboardNav;
