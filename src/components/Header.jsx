import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

const Header = () => {
  const user =
    "https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1667315305235-RCUO3EX7WIENHM8CG9U1/20210601_SLP2805-edit.jpg?format=1000w";
  return (
    <div className="bg-white w-full z-40   fixed top-0 p-3 lg:pl-80  lg:py-4 lg:pr-4">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center ">
          {user === "" ? (
            <img
              className=" w-14 h-14 rounded-full object-cover shadow-md"
              src="https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
              alt=""
            />
          ) : (
            <img
              className=" w-14 h-14 rounded-full object-cover shadow-md"
              src={user}
              alt=""
            />
          )}

          <h3 className=" ml-3 font-semibold lg:text-xl capitalize">
            Hi Amarachi
          </h3>
        </div>

        <div className=" flex items-center gap-4 lg:gap-7">
          <Link to={"/notification"}>
            <div className=" flex items-center relative">
              <div className=" border-2 border-yellow-500 bg-green-500 text-white p-2 h-fit rounded-full">
                <IoIosNotifications size={25} className=" " />
              </div>

              <div className=" absolute w-2 h-2 bg-red-600 top-2 rounded-full right-3"></div>
              <p className=" font-medium hidden lg:block ml-1">Notifications</p>
            </div>
          </Link>

          {/* <button className=" hidden lg:block rounded-lg bg-blue-600 text-white py-2.5 px-6">
            Logout
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
