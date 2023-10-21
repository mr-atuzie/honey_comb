import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className=" flex justify-between items-center">
      <form className=" hidden lg:block lg:w-[38%]">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearchAlt2 size={30} />
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

      <div className=" flex items-center  gap-8">
        <Link
          className=" hidden lg:block border-2 border-yellow-500 bg-green-500 text-white p-2 h-fit rounded-full"
          to={"/user/notifications"}
        >
          <div>
            <IoIosNotifications size={25} className=" " />
          </div>
        </Link>

        <div className=" flex items-center gap-2">
          <div className=" w-12 h-12 rounded-full object-cover bg-green-600 text-yellow-400 flex justify-center items-center uppercase font-semibold">
            {user?.abv}
          </div>

          <div className="">
            <h2 className=" text-sm lg:text-base capitalize  font-medium">
              {user?.name}
            </h2>
            <p className=" text-xs text-gray-700">{user?.email}</p>
          </div>
        </div>
      </div>

      <Link
        className="  lg:hidden border-2 border-yellow-500 bg-green-500 text-white p-2 h-fit rounded-full"
        to={"/user/notifications"}
      >
        <div>
          <IoIosNotifications size={25} className=" " />
        </div>
      </Link>
    </div>
  );
};

export default Header;
