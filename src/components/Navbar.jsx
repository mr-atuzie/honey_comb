import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 2, link: "/", name: "Home" },
    { id: 2, link: "/about", name: "About us" },
    { id: 3, link: "/", name: "Services" },
    { id: 5, link: "/", name: "Packages" },
    { id: 4, link: "/", name: "Contact us" },
  ];

  const handleNav = () => {
    setNav(!nav);
    console.log("nav clicked");
  };

  return (
    <div className=" p-4 absolute top-0 z-40  w-full   ">
      <div className=" w-[90%] lg:w-[80%] mx-auto  flex justify-between items-center">
        <div className="flex items-center gap-36">
          <p className=" text-sm lg:text-base uppercase font-semibold text-yellow-500">
            Honey comb fxd
          </p>

          <ul className="hidden text-white md:flex ">
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

        <div className=" flex gap-4 items-center">
          <Link to={"/login"}>
            <button className="hidden md:flex rounded text-white px-6 py-3 capitalize   ">
              Log in
            </button>
          </Link>

          <Link to={"/register"}>
            <button className="hidden md:flex rounded bg-green-500 text-white px-6 py-2 capitalize hover:bg-white hover:text-green-500 hover:border-2 hover:border-green-500 ">
              Sign Up
            </button>
          </Link>
        </div>

        <button
          onClick={handleNav}
          className=" text-white  cursor-pointer pr-4 rounded-full  z-40  md:hidden"
        >
          {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
        </button>
      </div>
      {nav && (
        <div className=" p-6 z-40 duration-300 flex flex-col fixed  shadow-md bg-green-50 top-0 right-0  w-[80vw] h-screen">
          <div className=" flex justify-between items-center">
            <p className=" text-sm lg:text-base uppercase font-semibold text-yellow-500">
              Honey comb fxd
            </p>

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
                    className=" text-sm lg:text-base cursor-pointer  capitalize py-2   hover:scale-105 duration-200"
                  >
                    {name}
                  </li>
                </Link>
              );
            })}
          </ul>

          <Link to={"/register"}>
            <button className=" border-2 border-yellow-500 text-sm lg:text-base rounded bg-green-700 mt-6 text-white px-6 py-2.5 lg:py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black ">
              Register
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
