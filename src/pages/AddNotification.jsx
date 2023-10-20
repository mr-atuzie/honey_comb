import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddNotification = ({ placeholder }) => {
  const initialState = {
    title: "",
    desc: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { title, desc } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    if (!title || !desc) {
      setLoading(false);
      return toast.error("All fields are required");
    }

    const userData = { title, desc };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/admin/add-notification`,
        userData,
        {
          withCredentials: true,
        }
      );

      setLoading(false);
      const data = res.data;
      console.log(data);

      toast.success("Notification sent");
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
      <form onSubmit={handleSubmit} className="w-[85%] lg:w-[50%] mx-auto">
        <div className=" my-16">
          {/* <p className=" uppercase font-semibold text-yellow-600 mb-4">
      Honey comb fxd
    </p> */}

          <h2 className="text-xl lg:text-4xl font-bold text-green-600 ">
            Add Notification
          </h2>

          <p className=" text-gray-500  text-sm my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
            quasi, dolorem saepe sapiente culpa illum.
          </p>
        </div>

        <div className="relative my-7">
          <input
            type="text"
            name="title"
            id="title"
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={title}
            onChange={handleInputChange}
            placeholder=""
          />
          <label
            htmlFor="name"
            className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-gray-100 px-2  left-1"
          >
            Title
          </label>
        </div>

        <div className="relative mt-10">
          <textarea
            name="desc"
            id="desc"
            className="block px-2.5 py-3 lg:p-4 w-full h-48  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={desc}
            onChange={handleInputChange}
          ></textarea>
          <label
            htmlFor="name"
            className="absolute  text-gray-500 scale-75 -top-4 lg:text-lg   bg-gray-100 px-2  left-1"
          >
            Message
          </label>
        </div>

        <button
          className=" w-full text-center py-3.5 my-10  bg-green-600 text-white "
          type="submit"
        >
          {loading ? "Loading" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default AddNotification;
