import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserCard = () => {
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
    <div className=" bg-white shadow-lg  px-4 py-6 lg:p-8 rounded h-fit mb-10">
      <div className=" mb-4 flex justify-between items-center">
        <div>
          <p className="  text-xs font-medium text-green-600  uppercase">
            current Balance{" "}
          </p>
          <h2 className=" text-xl font-semibold lg:text-4xl ">
            {" "}
            &#8358; {user?.accountBalance}
          </h2>
        </div>

        <div className="bg-green-100 text-green-600  p-1 h-fit rounded-full">
          <BsEyeSlash size={18} />
        </div>
      </div>

      <div className=" mt-8 flex gap-2 ">
        <Link to={"/user/packages"}>
          <button className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium text-xs lg:text-sm px-4 lg:px-8">
            Invest
          </button>
        </Link>
        <button className="text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default UserCard;
