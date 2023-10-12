import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vid from "../assets/crypto2.mp4";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { validateEmail } from "../services/authServices";
import axios from "axios";

const Register = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const { name, email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (!validateEmail(email)) {
      setLoading(false);
      return toast.error("Please enter a valid email");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { name, email, password };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/register`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);

      const data = res.data;

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: data?.name,
          email: data?.email,
          photo: data?.photo,
        })
      );

      toast.success("User Registered successfully");
      navigate("/user/dashboard");

      // return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(error);
      setLoading(false);
      toast.error(message);
    }

    // try {
    //   const data = await registerUser(userData);

    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       name: data?.name,
    //       email: data?.email,
    //       photo: data?.photo,
    //     })
    //   );

    //   navigate("/user/dashboard");
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className=" w-full   h-screen flex  lg:flex-row-reverse">
      <div className="m-6 rounded-lg relative w-[40%] hidden lg:flex justify-center items-center flex-col ">
        <video
          src={vid}
          className="rounded-xl w-full h-full object-cover"
          autoPlay
          loop
          muted
        />

        <div className=" w-full h-full absolute rounded-lg top-0 z-30 bg-black/20 flex  items-center">
          <div className=" w-[80%] mx-auto text-center">
            <p className="text-white capitalize tracking-wide font-medium text-xs  lg:text-base my-3">
              recieve, Transfer, Send Money Safely
            </p>
            <h1 className="  text-green-600 uppercase text-3xl lg:text-6xl font-extrabold ">
              WELCOME TO{" "}
              <span className=" text-yellow-500">HONEY COMB FXD</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:w-[60%] my-16">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] lg:w-[50%] mx-auto mb-16"
        >
          <div className="">
            <p className=" text-sm lg:text-lg uppercase font-semibold text-yellow-500 lg:mb-4">
              Honey comb fxd
            </p>

            <h2 className="text-2xl lg:text-4xl font-bold  text-green-700 my-2 ">
              Create your Account
            </h2>

            <p className=" text-gray-900 text-xs  lg:text-sm  lg:my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              quasi, dolorem saepe sapiente culpa illum.
            </p>
          </div>

          <div className=" my-5">
            <label className="  text-xs lg:text-sm mb-2" htmlFor="text">
              Name
            </label>

            <input
              className="border p-2.5 lg:p-3.5  block w-full placeholder:text-sm lg:placeholder:text-base"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={handleInputChange}
              id="name"
            />
          </div>

          <div className=" mb-5">
            <label className="  text-xs lg:text-sm" htmlFor="email">
              Email
            </label>

            <input
              className="border p-2.5 lg:p-3.5 block w-full  placeholder:text-sm lg:placeholder:text-base"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              id="email"
            />
          </div>

          <div className=" my-5">
            <label className="  text-xs lg:text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="border p-2.5 lg:p-3.5 block w-full  placeholder:text-sm lg:placeholder:text-base"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleInputChange}
              id="password"
            />
          </div>

          <div className=" my-5">
            <label className="  text-xs lg:text-sm" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="border p-2.5 lg:p-3.5  block w-full placeholder:text-sm lg:placeholder:text-base"
              type="password"
              name="password"
              placeholder="Retype password"
            />
          </div>

          <div className="flex gap-1 my-5">
            <input type="checkbox" name="" id="" />
            <p className=" text-xs lg:text-sm text-gray-800">
              I accept all terms and condition
            </p>
          </div>

          <button
            disabled={loading}
            className="border-2 text-sm lg:text-base border-yellow-500 rounded w-full text-center py-2.5 lg:py-3.5 my-4 bg-green-700 disabled:opacity-95 text-white "
            type="submit"
          >
            {loading ? "Loading" : "Sign up"}
          </button>

          <p className="text-xs lg:text-base text-center  mt-3  text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className=" text-green-600 font-medium">Sign In</span>
            </Link>
          </p>
        </form>
      </div>

      {/* <div className=" flex items-center text-black">
    <h1 className=" ml-1 font-bold text-sm   lg:text-base">TRADE-FAIR</h1>
  </div>
  <form className=" w-[90%] lg:w-[38%] py-5 mx-auto">
    <div className=" my-8">
      <h2 className="text-xl lg:text-3xl font-medium text-center ">
        Create your account
      </h2>

      <p className="text-xs text-gray-500 text-center">
        Improve your business by creating a strong digital presence.
      </p>
    </div>

    <div className=" mb-3">
      <label className=" text-gray-800 text-xs" htmlFor="text">
        Fullname
      </label>

      <input
        className="border p-3 rounded-xl block w-full"
        type="text"
        name="text"
      />
    </div>

    <div className=" mb-3">
      <label className=" text-gray-800 text-xs" htmlFor="email">
        Email
      </label>

      <input
        className="border p-3 rounded-xl block w-full"
        type="email"
        name="email"
      />
    </div>

    <div className=" my-3">
      <label className=" text-gray-800 text-xs" htmlFor="password">
        Password
      </label>
      <input
        className="border p-3 rounded-xl block w-full"
        type="password"
        name="password"
      />
    </div>

    <div className=" mb-8">
      <label className=" text-gray-800 text-xs" htmlFor="password">
        Phone number
      </label>
      <PhoneInput
        country={"ng"}
        value={phoneNumber}
        onChange={setPhoneNumber}
      />
    </div>

    <button
      className=" w-full text-center py-3 my-4 bg-black text-white  rounded-xl"
      type="submit"
    >
      Sign up
    </button>
  </form> */}
    </div>
  );
};

export default Register;
