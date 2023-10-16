import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
// import { validateEmail } from "../services/authServices";
import moment from "moment";
import Pay from "../components/Pay";

const UserProfile = () => {
  const [formData, setFormData] = useState({});
  //   const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");

  const { id } = useParams();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/user/${id}`,
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
    getUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const approvekyc = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/approve-kyc/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("Kyc has been accepteced");
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

  const disapprovekyc = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/disapprove-kyc/${id}`,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      toast.success("Kyc has been rejected");
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

  console.log(user);

  console.log(typeof user);

  return (
    <div>
      <form className=" my-14 w-[90%] md:w-[45%] mx-auto">
        <div className="relative my-7">
          <p
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none capitalize   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            // placeholder=""
            // onChange={handleInputChange}
            // defaultValue={name}
          >
            {user?.firstname} {user?.lastname}
          </p>
          <label
            htmlFor="name"
            className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
          >
            Your Name
          </label>
        </div>

        <div className="relative my-7 lg:my-11">
          <p
            // type="email"
            // name="email"
            // id="email"
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            // placeholder=""
            // onChange={handleInputChange}
            // defaultValue={user?.email}
          >
            {user?.email}
          </p>
          <label
            htmlFor="email"
            className="absolute   text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
          >
            Your Email
          </label>
        </div>

        <div className="relative my-7 lg:my-11">
          <p
            // type="email"
            // name="email"
            // id="email"
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            // placeholder=""
            // onChange={handleInputChange}
            // defaultValue={user?.email}
          >
            {user?.DOB}
          </p>
          <label
            htmlFor="DOB"
            className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
          >
            Date Of Birth
          </label>
        </div>

        <div className="relative my-7 lg:my-11">
          <p
            // type="email"
            // name="email"
            // id="email"
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            // placeholder=""
            // onChange={handleInputChange}
            // defaultValue={user?.email}
          >
            {moment(user.createdAt).format("MMM Do YYYY")}
          </p>
          <label
            htmlFor="DOB"
            className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
          >
            Joined
          </label>
        </div>

        <div className=" my-7">
          <img
            className=" h-full rounded-sm  h-[200px]  "
            src={user?.document?.image}
            alt=""
          />

          <div className=" mt-4 flex gap-2 ">
            <button
              className=" text-white bg-green-600   py-2 lg:py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8"
              onClick={() => approvekyc(user._id)}
            >
              Accept
            </button>
            <button
              className="text-white bg-red-600   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8"
              onClick={() => disapprovekyc(user._id)}
            >
              Decline
            </button>
          </div>
        </div>

        <div className=" flex justify-between items-center gap-8 my-7 ">
          <div className="relative ">
            <input
              type="text"
              name="amount"
              id="amount"
              className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Pay client"
              onChange={handleInputChange}
              // defaultValue={user?.email}
            />

            <label
              htmlFor="amount"
              className="absolute   text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
            >
              Amount
            </label>
          </div>

          <Pay type={"withdral"} amount={50000} />
        </div>

        {/* </div> */}
        {/* <div className="relative my-7">
              <select
                name="location"
                id="location"
                className="  w-full  mt-1 lg:mt-3  rounded-lg  border border-gray-300 text-gray-700  p-3 "
              >
                <option>Select Location</option>
                {countries.map((c) => {
                  return (
                    <option key={c.code} value={c.name}>
                      {c.name}
                    </option>
                  );
                })}
              </select>
              <label
                htmlFor="location"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
              >
                Your Location
              </label>
            </div> */}

        {/* <button
          disabled={loading}
          type="submit"
          className=" bg-green-600 text-white rounded-lg text-sm w-full p-3 text-center font-medium disabled:opacity-95"
        >
          {loading ? "Loading" : "Submit"}
        </button> */}
        {/* <button
          disabled={loading}
          className=" bg-red-600 text-white rounded-lg mt-6 text-sm w-full p-3.5 p-3.5 text-center font-medium disabled:opacity-95"
        >
          {loading ? "Loading" : "Delete user"}
        </button> */}
      </form>
    </div>
  );
};

export default UserProfile;
