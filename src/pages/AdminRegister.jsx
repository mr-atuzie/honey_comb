import React from "react";
import AdminHeader from "../components/AdminHeader";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { validateEmail } from "../services/authServices";

const AdminRegister = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const { firstname, lastname, email, password, confirmPassword } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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

    const userData = { firstname, lastname, email, password };

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/register`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);

      toast.success("Admin Registered successfully");
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
    <div>
      <AdminHeader />
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Create Admin
      </h1>

      <div className="lg:w-[60%] mx-auto shadow-lg rounded p-5 bg-white my-16">
        <form onSubmit={handleSubmit} className="w-[80%] mx-auto mb-16">
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

          <button
            disabled={loading}
            className="border-2 text-sm lg:text-base border-yellow-500 rounded w-full text-center py-2.5 lg:py-3.5 my-4 bg-green-700 disabled:opacity-95 text-white "
            type="submit"
          >
            {loading ? "Loading" : "Create Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminRegister;
