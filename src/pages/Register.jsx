import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import vid from "../assets/crypto2.mp4";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import { validateEmail } from "../services/authServices";
import axios from "axios";
import logo from "../assets/honeycomb full logo.png";

const Register = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    referral: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);
  const [tc, setTC] = useState(false);

  const { firstname, lastname, email, password, confirmPassword, referral } =
    formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!tc) {
      setLoading(false);
      return toast.error("Accept terms and condition to continue");
    }

    if (!firstname || !lastname || !email || !password) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    if (password !== confirmPassword) {
      setLoading(false);
      return toast.error("Check passwords and try again");
    }

    if (!validateEmail(email)) {
      setLoading(false);
      return toast.error("Please enter a valid email");
    }

    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be up to 6 characters");
    }

    const userData = { firstname, lastname, email, password, referral };

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
          id: data?._id,
          name: `${data?.firstname} ${data?.lastname}`,
          email: data?.email,
          photo: data?.photo,
          abv: `${data?.firstname.charAt(0)}${data?.lastname.charAt(0)}`,
        })
      );

      toast.success("User Registered successfully");
      navigate("/user/dashboard");
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
  };

  return (
    <div className=" w-full   flex  lg:flex-row-reverse">
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
            <img className="w-40" src={logo} alt="" />

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
              Fisrtname
            </label>

            <input
              className="border p-2.5 lg:p-3.5  block w-full placeholder:text-sm lg:placeholder:text-base"
              type="text"
              placeholder="Enter your firstname"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              id="firstname"
            />
          </div>

          <div className=" my-5">
            <label className="  text-xs lg:text-sm mb-2" htmlFor="text">
              Lastname
            </label>

            <input
              className="border p-2.5 lg:p-3.5  block w-full placeholder:text-sm lg:placeholder:text-base"
              type="text"
              placeholder="Enter your lastname"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              id="lastname"
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
            <label className="  text-xs lg:text-sm mb-2" htmlFor="referral">
              Referral code (optional)
            </label>

            <input
              className="border p-2.5 lg:p-3.5  block w-full placeholder:text-sm lg:placeholder:text-base"
              type="text"
              placeholder="Enter referral code"
              name="referral"
              value={referral}
              onChange={handleInputChange}
              id="referral"
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
              name="confirmPassword"
              placeholder="Retype password"
              value={confirmPassword}
              onChange={handleInputChange}
              id="confirmPassword"
            />
          </div>

          <div className="flex gap-1 my-5">
            <input type="checkbox" name="" id="" onClick={() => setTC(!tc)} />

            <Link to={"/terms-and-condition"}>
              <p className=" text-xs font-medium lg:text-sm text-gray-800">
                I accept all{" "}
                <span className=" text-blue-700"> Terms & condition</span>
              </p>
            </Link>
          </div>

          <button
            disabled={loading}
            className="border-2 text-sm lg:text-base border-yellow-500 rounded w-full text-center py-2.5 lg:py-3.5 my-4 bg-green-700 disabled:opacity-95 text-white "
            type="submit"
          >
            {loading ? "Loading" : "Sign up"}
          </button>

          <p className="text-xs lg:text-base text-center  mt-3 mb-14  text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className=" text-blue-700 font-medium">Sign In</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
