import React, { useState } from "react";
// import { AiOutlineCamera } from "react-icons/ai";
// import { countries } from "../data";
import { validateEmail } from "../services/authServices";
import { toast } from "react-toastify";
import axios from "axios";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({});

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email } = formData;

    if (email) {
      if (!validateEmail(email)) {
        setLoading(false);
        return toast.error("Please enter a valid email");
      }
    }

    // if (password) {
    //   if (password.length < 6) {
    //     setLoading(false);
    //     return toast.error("Password must be up to 6 characters");
    //   }
    // }

    try {
      const res = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/update-user`,
        formData
      );

      const data = res.data.user;

      console.log(data);
      setLoading(false);

      // console.log(`${data?.firstname[0]}${data?.lastname[0]}`);

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

      toast.success("User updated successfully");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setLoading(false);
      console.log(error);

      toast.error(message);
    }

    // try {
    //   const data = await updateUser(formData);

    //   localStorage.setItem(
    //     "user",
    //     JSON.stringify({
    //       name: data?.name,
    //       email: data?.email,
    //       photo: data?.photo,
    //     })
    //   );

    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // }
  };

  return (
    <div>
      <h1 className=" font-bold text-green-600 text-2xl lg:text-4xl  my-9 lg:my-11">
        Profile
      </h1>

      <div>
        {/* form */}
        <div className=" mt-4">
          <div className="w-[90%] md:w-[45%] mx-auto ">
            {/* image change */}
            <div className=" flex  justify-center items-center mt-6 ">
              <div className="relative w-28 h-28 lg:w-36 lg:h-36 flex justify-center items-center rounded-full bg-green-600 text-yellow-400 text-4xl uppercase font-semibold ">
                {/* <label
                  htmlFor="image"
                  className=" z-40 bg-black/60 h-[50px] w-[50px] rounded-full absolute flex items-center justify-center"
                >
                  <AiOutlineCamera className=" text-white" size={30} />
                </label> */}
                {user?.abv}
                {/* <img
                  className=" w-full h-full  rounded-full object-cover self-center"
                  src={
                    "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                  }
                  alt=""
                /> */}
              </div>

              <input
                type="file"
                name="image"
                id="image"
                className=" hidden"
                placeholder="Your Email"
              />
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className=" my-14 w-[90%] md:w-[45%] mx-auto"
          >
            <div className="relative my-7">
              <input
                type="text"
                name="name"
                id="name"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
                defaultValue={user?.name}
              />
              <label
                htmlFor="name"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
              >
                Your Name
              </label>
            </div>

            <div className="relative my-7 lg:my-11">
              <input
                type="email"
                name="email"
                id="email"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
                defaultValue={user?.email}
              />
              <label
                htmlFor="email"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
              >
                Your Email
              </label>
            </div>

            <div className="relative my-7 lg:my-11">
              <input
                type="date"
                name="DOB"
                id="DOB"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
              />
              <label
                htmlFor="DOB"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
              >
                Date Of Birth
              </label>
            </div>

            <div className="relative my-7">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={handleInputChange}
              />
              <label
                htmlFor="phone"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-gray-100 px-2  left-1"
              >
                Your Phone Number
              </label>
            </div>
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

            <button
              disabled={loading}
              type="submit"
              className=" bg-green-600 text-white rounded-lg text-sm w-full p-3 text-center font-medium disabled:opacity-95"
            >
              {loading ? "Loading" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
