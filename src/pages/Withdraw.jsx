import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Withdraw = () => {
  const [formLoader, setFormLoader] = useState(false);
  const [amount, setAmout] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormLoader(true);

    const userData = { amount: parseInt(amount) };

    if (!amount) {
      return toast.error("Enter amount");
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/withdraw`,
        userData
      );

      const data = res.data.user;
      console.log(data);

      setFormLoader(false);

      toast.success("Transaction in Progress");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      setFormLoader(false);

      toast.error(message);
    }
  };

  return (
    <div>
      <div className="my-9 lg:my-11">
        <div className=" bg-white w-[90%] md:w-[45%] mx-auto shadow-lg rounded p-5">
          <h1 className=" font-medium text-[#08432d]0 text-2xl  ">Withdraw</h1>

          <form onSubmit={handleSubmit} className=" mb-14 ">
            <div className="relative my-7">
              <input
                type="text"
                name="amount"
                id="amount"
                className="block px-2.5 py-3 lg:p-4 w-full  text-gray-900 bg-transparent rounded-lg border border-green-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setAmout(e.target.value)}
              />
              <label
                htmlFor="amount"
                className="absolute  text-gray-500 scale-75 -top-3 lg:text-lg   bg-white px-2  left-1"
              >
                Amount
              </label>
            </div>
            <button
              disabled={formLoader}
              type="submit"
              className=" bg-green-600 text-white rounded-lg text-sm w-full p-3 lg:p-4 text-center font-medium disabled:bg-green-300"
            >
              {formLoader ? "Loading" : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
