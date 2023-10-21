import React from "react";
import { BiSolidDashboard, BiSupport, BiTransfer } from "react-icons/bi";
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
    <div className="  z-50  lg:hidden  fixed bottom-0 left-0  w-full  bg-green-600  shadow-xl ">
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
          to={"/user/add-kyc"}
          className={({ isActive }) =>
            isActive ? "text-yellow-400" : "text-white"
          }
        >
          <div className=" flex flex-col items-center justify-center ">
            <FaIdCard size={25} />
            <p className=" text-xs mt-2">Kyc</p>
          </div>
        </NavLink> */}
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

        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/user/profile"}
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "text-white"
            }
          >
            <IoPersonOutline size={25} />
            <p className=" text-xs mt-2">Profile</p>
          </NavLink>
        </div>

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
