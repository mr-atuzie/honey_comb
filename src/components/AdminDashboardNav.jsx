import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiSolidDashboard, BiTransfer } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { HiMiniClipboardDocumentCheck } from "react-icons/hi2";
// import { ImStatsBars } from "react-icons/im";
// import { IoMdSettings } from "react-icons/io";
import { IoNotificationsSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../assets/honeycomb full logo.png";

const AdminDashboardNav = ({ user }) => {
  return (
    <div>
      <div>
        <div className=" w-full flex justify-center items-center py-5">
          <img className="w-40" src={logo} alt="" />
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
          to={"/admin/withdraw"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <BiTransfer size={24} />
            </div>
            <p className="font-medium text-lg  ">Withdrawals</p>
          </div>
        </NavLink>

        <NavLink
          to={"/admin/register"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <GiGraduateCap size={24} />
            </div>
            <p className="font-medium text-lg  ">Create Admin</p>
          </div>
        </NavLink>

        <NavLink
          to={"/admin/content-management"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <AiFillEdit size={24} />
            </div>
            <p className="font-medium text-lg  ">Edit content</p>
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
            <p className="font-medium text-lg  ">Add Notifications</p>
          </div>
        </NavLink>

        <NavLink
          to={"/admin/approve-kyc"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className=" text-white">
              <HiMiniClipboardDocumentCheck size={24} />
            </div>
            <p className="font-medium text-lg  ">Pending Kyc</p>
          </div>
        </NavLink>

        {/* <NavLink
          to={"/admin/statistics"}
          className={({ isActive }) =>
            isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <ImStatsBars size={24} />
            </div>
            <p className="font-medium text-lg  ">Statistics</p>
          </div>
        </NavLink> */}

        <button className=" border-2 border-yellow-500 text-lg rounded-lg bg-green-500 text-white w-full py-3  mt-14">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboardNav;
