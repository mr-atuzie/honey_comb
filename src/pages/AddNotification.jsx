import React from "react";

const AddNotification = () => {
  return (
    <div>
      <form className="w-[85%] lg:w-[50%] mx-auto">
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
            name="name"
            id="name"
            className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
          <textarea className="block px-2.5 py-3 lg:p-4 w-full h-48  text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"></textarea>
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
          Send
        </button>
      </form>
    </div>
  );
};

export default AddNotification;
