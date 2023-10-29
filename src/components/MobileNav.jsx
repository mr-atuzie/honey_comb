import React from "react";
import { BiSolidDashboard, BiSupport, BiTransfer } from "react-icons/bi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
// import { FaIdCard } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
// import { IoMdMore } from "react-icons/io";
// import { IoIosNotifications } from "react-icons/io";
// import { MdOutlineExplore } from "react-icons/md";
// import { AiTwotoneHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="  z-50  lg:hidden  fixed bottom-0 left-0  w-full  bg-[#08432d]  shadow-xl ">
      <div className=" px-3 py-3 flex items-center justify-between lg:hidden">
        <NavLink
          to={"/user/dashboard"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className=" flex flex-col items-center justify-center ">
            <BiSolidDashboard size={25} />
            <p className=" text-xs mt-2">Home</p>
          </div>
        </NavLink>
        <NavLink
          to={"/user/transactions"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className=" flex flex-col items-center justify-center">
            <BiTransfer size={25} />
            <p className=" text-xs mt-2">Transactions</p>
          </div>
        </NavLink>
        {/* <NavLink
          to={"/user/investment"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className="flex gap-3 text-white items-center px-6  py-3">
            <div className="">
              <FaMoneyBillTransfer size={24} />
            </div>
            <p className="font-medium text-lg  ">Investment</p>
          </div>
        </NavLink> */}
        <NavLink
          to={"/user/investments"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className=" flex flex-col items-center justify-center ">
            <FaMoneyBillTransfer size={24} />
            <p className=" text-xs mt-2">Investment</p>
          </div>
        </NavLink>

        <NavLink
          to={"/user/profile"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className=" flex flex-col items-center justify-center ">
            <IoPersonOutline size={25} />
            <p className=" text-xs mt-2">Profile</p>
          </div>
        </NavLink>

        <NavLink
          to={"/user/support"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className=" flex flex-col items-center justify-center">
            <BiSupport size={25} />
            <p className=" text-xs mt-2">Support</p>
          </div>
        </NavLink>

        {/* <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-900"
            }
          >
            <BiLogOut size={25} />
            <p className=" text-xs mt-2">Logout</p>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default MobileNav;
