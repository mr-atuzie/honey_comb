import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/crypto2.mp4";
// import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  // const initialState = {
  //   name: "",
  //   email: "",
  //   password: "",
  // };

  // const [formData, setFormData] = useState(initialState);

  // const [loading, setLoading] = useState(false);

  // const { name, email, password } = formData;

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // };

  return (
    <div className=" w-full   h-screen lg:flex lg:flex-row-reverse">
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
      <div className="lg:w-[60%]">
        <form className="w-[80%] lg:w-[50%] mx-auto mb-16">
          <div className="">
            <p className=" text-sm lg:text-lg uppercase font-semibold text-yellow-500 lg:mb-4">
              Honey comb fxd
            </p>

            <h2 className="text-2xl lg:text-4xl font-bold  text-green-700 my-2 ">
              Create your Account
            </h2>

            <p className=" text-gray-900  text-sm  lg:my-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
              quasi, dolorem saepe sapiente culpa illum.
            </p>
          </div>

          <div className=" my-5">
            <label
              className=" text-green-600 font-medium  text-xs lg:text-sm mb-2"
              htmlFor="text"
            >
              Name
            </label>

            <input
              className="border p-2.5 lg:p-3.5  block w-full placeholder:text-sm lg:placeholder:text-base"
              type="text"
              name="text"
              placeholder="Enter your name"
            />
          </div>

          <div className=" mb-5">
            <label
              className=" text-green-600 font-medium text-xs lg:text-sm"
              htmlFor="email"
            >
              Email
            </label>

            <input
              className="border p-2.5 lg:p-3.5 block w-full  placeholder:text-sm lg:placeholder:text-base"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>

          <div className=" my-5">
            <label
              className=" text-green-600 font-medium text-xs lg:text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="border p-2.5 lg:p-3.5 block w-full  placeholder:text-sm lg:placeholder:text-base"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>

          <div className=" my-5">
            <label
              className="  text-green-600 font-medium text-xs lg:text-sm"
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className="border p-2.5 lg:p-3.5  block w-full"
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
            className="border-2 border-yellow-500 rounded w-full text-center py-2.5 lg:py-3.5 my-4 bg-green-700 text-white "
            type="submit"
          >
            Sign up
          </button>

          <p className="text-sm lg:text-base text-center  mt-3  text-gray-500">
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className=" text-black font-medium">Sign In</span>
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
