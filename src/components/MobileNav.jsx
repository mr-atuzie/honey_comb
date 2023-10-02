import React from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
// import { IoMdMore } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
// import { MdOutlineExplore } from "react-icons/md";
// import { AiTwotoneHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <div className="  z-50  lg:hidden  fixed bottom-0 left-0  w-full  bg-white  shadow-xl ">
      <div className=" px-6 py-3 flex items-center justify-between lg:hidden">
        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/user/dashboard"}
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-900"
            }
          >
            <BiHomeAlt2 size={25} />
            <p className=" text-xs mt-2">Home</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-900"
            }
          >
            <BsBarChartLineFill size={25} />
            <p className=" text-xs mt-2">Stats</p>
          </NavLink>
        </div>

        <div className=" flex flex-col items-center justify-center ">
          <NavLink
            to={"/user/profile"}
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-900"
            }
          >
            <IoPersonOutline size={30} />
            <p className=" text-xs mt-2">Profile</p>
          </NavLink>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <NavLink
            to={"/user/notifications"}
            className={({ isActive }) =>
              isActive ? "text-green-600" : "text-gray-900"
            }
          >
            <IoIosNotifications size={25} />
            <p className=" text-xs mt-2">Notifications</p>
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
