import React, { useState } from "react";

const Faq = () => {
  const [f1, setF1] = useState(false);
  // const [f2, setF2] = useState(false);
  const [f3, setF3] = useState(false);
  const [f4, setF4] = useState(false);
  // const [f5, setF5] = useState(false);
  const [f6, setF6] = useState(false);
  const [f7, setF7] = useState(false);
  return (
    <div>
      <div className=" w-[90%] lg:w-[80%] mx-auto py-10 lg:py-10">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Frequently Asked Questions
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" my-8 ">
          <div className="w-full shadow-md mb-6 lg:mb-9">
            <div className=" bg-green-50 w-full p-3  lg:p-5 flex items-center justify-between">
              <h2 className=" text-xs font-medium lg:text-base text-green-700 lg:tracking-wide  capitalize">
                What are the different types of investment options available on
                your platform?
              </h2>

              {f1 ? (
                <button
                  onClick={() => setF1(!f1)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF1(!f1)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f1 && (
              <div className=" p-3 lg:p-5 text-xs lg:text-base">
                <p>
                  We offer different investment options to suit your needs and
                  budget, including forex, crypto, and agriculture.
                </p>
              </div>
            )}
          </div>

          <div className="w-full shadow-md mb-6 lg:mb-9">
            <div className=" bg-green-50 w-full p-3 lg:p-5 flex items-center justify-between">
              <h2 className=" text-xs font-medium lg:text-base text-green-700 lg:tracking-wide  capitalize">
                How do I open an account and start investing?
              </h2>

              {f3 ? (
                <button
                  onClick={() => setF3(!f3)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF3(!f3)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f3 && (
              <div className=" p-3 lg:p-5 text-xs lg:text-base">
                <p>
                  To open an account and start investing, simply visit our
                  website and sign up. Once your account is verified, you can
                  deposit funds and start investing.
                </p>
              </div>
            )}
          </div>

          <div className="w-full shadow-md mb-6 lg:mb-9">
            <div className=" bg-green-50 w-full p-3 lg:p-5 flex items-center justify-between">
              <h2 className=" text-xs font-medium lg:text-base text-green-700 lg:tracking-wide  capitalize">
                What are the fees associated with investing on your platform?
              </h2>

              {f4 ? (
                <button
                  onClick={() => setF4(!f4)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF4(!f4)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f4 && (
              <div className=" p-3 lg:p-5 text-xs lg:text-base">
                <p>
                  We offer competitive fees on all of our investments.5%
                  mandatory registration fee upon deposit
                </p>
              </div>
            )}
          </div>

          <div className="w-full shadow-md mb-6 lg:mb-9">
            <div className=" bg-green-50 w-full p-3 lg:p-5 flex items-center justify-between">
              <h2 className=" text-xs font-medium lg:text-base text-green-700 lg:tracking-wide  capitalize">
                What are the different types of withdrawal options available?
              </h2>

              {f6 ? (
                <button
                  onClick={() => setF6(!f6)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF6(!f6)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f6 && (
              <div className=" p-3 lg:p-5 text-xs lg:text-base">
                <p>Withdrawal is made through bank transfer</p>
              </div>
            )}
          </div>

          <div className="w-full shadow-md mb-6 lg:mb-9">
            <div className=" bg-green-50 w-full p-3 lg:p-5 flex items-center justify-between">
              <h2 className=" text-xs font-medium lg:text-base text-green-700 lg:tracking-wide  capitalize">
                How long does it take to process a withdrawal request?
              </h2>

              {f7 ? (
                <button
                  onClick={() => setF7(!f7)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF7(!f7)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f7 && (
              <div className=" p-3 lg:p-5 text-xs lg:text-base">
                <p>
                  Withdrawal requests are typically processed within 1-3
                  business days. For First-time investors, withdrawals are
                  processed in 7 days r
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
