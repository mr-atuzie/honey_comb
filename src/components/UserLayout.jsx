import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MobileNav from "./MobileNav";
import Header from "./Header";
import {
  BiSolidDashboard,
  BiSolidUser,
  BiSupport,
  BiTransfer,
} from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { GiGraduateCap } from "react-icons/gi";
import { toast } from "react-toastify";
import axios from "axios";
import { FaIdCard } from "react-icons/fa";

const UserLayout = () => {
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user`,
        {
          withCredentials: true,
        }
      );

      setUser(res.data);
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
    getUser();
  }, []);
  return (
    <div className=" min-h-screen lg:flex">
      <div className=" hidden lg:block lg:w-[20%] bg-green-600   ">
        <div>
          <div className=" w-full flex justify-center items-center py-5">
            <p className=" uppercase font-semibold text-yellow-400 mb-4">
              Honey comb fxd
            </p>
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

          <NavLink
            to={"/user/add-kyc"}
            className={({ isActive }) =>
              isActive ? "rounded-lg bg-yellow-400 text-white w-full" : ""
            }
          >
            <div className="flex gap-3 text-white items-center px-6  py-3">
              <div className="">
                <FaIdCard size={24} />
              </div>
              <p className="font-medium text-lg  ">Add Kyc</p>
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
      <div className=" lg:w-[80%] bg-gray-100  py-5   pb-40">
        <div className=" w-[95%] mx-auto">
          <Header />
          <Outlet />
        </div>
      </div>
      <MobileNav />
    </div>
  );
};

export default UserLayout;
