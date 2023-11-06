import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";
import logo from "../assets/honeycomb logo.png";
import logo2 from "../assets/honeycomb full logo.png";
import ShowOnLogIn, { ShowOnLogOut } from "../protect/Protect";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const links = [
    { id: 1, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "Who we are" },
    { id: 3, link: "/packages", name: "Packages" },
    { id: 4, link: "/contact", name: "Contact us" },
  ];

  const handleNav = () => {
    setNav(!nav);
    console.log("nav clicked");
  };

  return (
    <div className=" bg-[#08432d] p-4   w-full   ">
      <div className=" w-[90%]  mx-auto  flex justify-between items-center">
        <div className="flex items-center gap-36">
          <img className=" w-28 lg:w-40" src={logo} alt="" />
          <ul className="hidden text-white lg:flex ">
            {links.map(({ id, link, name }) => {
              return (
                <li
                  key={id}
                  className=" capitalize px-4 cursor-pointer over:scale-105 duration-200"
                >
                  <Link to={link}> {name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <ShowOnLogOut>
          <div className=" flex gap-4 items-center">
            <Link to={"/login"}>
              <button className="hidden md:flex rounded bg-yellow-500 text-white  px-6 py-2 capitalize hover:bg-green-500 hover:text-white    ">
                Log in
              </button>
            </Link>

            <Link to={"/register"}>
              <button className="hidden md:flex rounded bg-green-500 text-white px-6 py-2 capitalize hover:bg-yellow-500 hover:text-white  ">
                Create Account
              </button>
            </Link>
          </div>
        </ShowOnLogOut>

        <ShowOnLogIn>
          <Link to={"/user/dashboard"}>
            <div className=" cursor-pointer hidden lg:flex items-center gap-2">
              <img
                className=" w-12 h-12 rounded-full object-cover "
                src={
                  user?.photo
                    ? user?.photo
                    : "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                }
                alt=""
              />

              <div className="">
                <h2 className=" text-sm lg:text-base text-yellow-500 capitalize  font-medium">
                  {user?.name}
                </h2>
                <p className=" text-xs text-gray-300">{user?.email}</p>
              </div>
            </div>
          </Link>
        </ShowOnLogIn>

        <button
          onClick={handleNav}
          className=" text-white  cursor-pointer pr-4 rounded-full  z-40  md:hidden"
        >
          {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
        </button>
      </div>
      {nav && (
        <div className=" p-4 z-40 duration-300 flex flex-col fixed  shadow-md bg-green-50 top-0 right-0  w-[80vw] h-screen">
          <div className=" flex justify-between items-center">
            <img className="w-28 lg:w-40" src={logo2} alt="" />

            <button onClick={handleNav} className="   cursor-pointer ">
              {nav ? (
                <IoCloseOutline size={30} />
              ) : (
                <HiOutlineBars3 size={30} />
              )}
            </button>
          </div>

          <ul className=" mt-7   ">
            {links.map(({ id, link, name }) => {
              return (
                <Link to={link} onClick={() => setNav(!nav)}>
                  <li
                    key={id}
                    className=" text-sm lg:text-base cursor-pointer  capitalize py-4   hover:scale-105 duration-200"
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>

          <ShowOnLogOut>
            <Link to={"/login"}>
              <button className="  font-medium text-sm lg:text-base rounded bg-green-700 mt-3 text-white px-6 py-2.5 lg:py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
                Login
              </button>
            </Link>
          </ShowOnLogOut>

          <ShowOnLogIn>
            <Link to={"/user/dashboard"}>
              <button className=" border-2 border-yellow-500 text-sm lg:text-base rounded bg-green-700 mt-3 text-white px-6 py-2.5 lg:py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
                Dashboard
              </button>
            </Link>
          </ShowOnLogIn>
        </div>
      )}
    </div>
  );
};

export default Navbar;
