import React from "react";
import { BiSolidDashboard, BiTransfer } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const AdminDashboardNav = () => {
  return (
    <div>
      <div>
        <div className=" w-full flex justify-center items-center py-5">
          <p className=" uppercase font-semibold text-yellow-400 mb-4">
            Honey comb fxd
          </p>
        </div>
      </div>

      <div className=" my-10 px-12 flex flex-col gap-4 ">
        <NavLink
          to={"/admin/dashboard"}
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
          to={"/admin/users-list"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <FaUsers size={24} />
            </div>
            <p className="font-medium text-lg  ">Users</p>
          </div>
        </NavLink>

        <NavLink
          to={"/admin/transactions"}
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
        <NavLink
          to={"/admin/add-notifications"}
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
          to={"/user/add-kyc"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <IoMdSettings size={24} />
            </div>
            <p className="font-medium text-lg  ">Settings</p>
          </div>
        </NavLink>

        <button className=" border-2 border-yellow-500 text-lg rounded-lg bg-green-500 text-white w-full py-3  mt-14">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboardNav;
