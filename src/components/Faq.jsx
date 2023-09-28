import React, { useState } from "react";

const Faq = () => {
  const [f1, setF1] = useState(false);
  const [f2, setF2] = useState(false);
  const [f3, setF3] = useState(false);
  const [f4, setF4] = useState(false);
  const [f5, setF5] = useState(false);
  return (
    <div>
      <div className=" w-[90%] lg:w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Frequently Asked Questions
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" lg:w-[60%] mx-auto my-10">
          <div className="w-full shadow-md mb-6">
            <div className=" bg-green-50 w-full p-3 flex items-center justify-between">
              <h2 className=" text-sm font-medium lg:text-lg text-green-700 lg:tracking-wide  capitalize">
                How do i sign up?
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
              <div className=" p-3 text-sm">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  commodi a fugiat. Eaque amet temporibus sit, quis provident
                  possimus distinctio mollitia cum excepturi.
                </p>
              </div>
            )}
          </div>
          <div className="w-full shadow-md mb-6">
            <div className=" bg-green-50 w-full p-3 flex items-center justify-between">
              <h2 className="text-sm font-medium lg:text-lg text-green-700 lg:tracking-wide  capitalize">
                How Much do i get back?
              </h2>

              {f2 ? (
                <button
                  onClick={() => setF2(!f2)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF2(!f2)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f2 && (
              <div className=" p-3 text-sm">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  commodi a fugiat. Eaque amet temporibus sit, quis provident
                  possimus distinctio mollitia cum excepturi.
                </p>
              </div>
            )}
          </div>
          <div className="w-full shadow-md mb-6">
            <div className=" bg-green-50 w-full p-3 flex items-center justify-between">
              <h2 className="text-sm font-medium lg:text-lg text-green-700 lg:tracking-wide  capitalize">
                When can i get my money back?
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
              <div className=" p-3 text-sm">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  commodi a fugiat. Eaque amet temporibus sit, quis provident
                  possimus distinctio mollitia cum excepturi.
                </p>
              </div>
            )}
          </div>
          <div className="w-full shadow-md mb-6">
            <div className=" bg-green-50 w-full p-3 flex items-center justify-between">
              <h2 className="text-sm font-medium lg:text-lg text-green-700 lg:tracking-wide  capitalize">
                How Much do i get back?
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
              <div className=" p-3 text-sm">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  commodi a fugiat. Eaque amet temporibus sit, quis provident
                  possimus distinctio mollitia cum excepturi.
                </p>
              </div>
            )}
          </div>
          <div className="w-full shadow-md mb-6">
            <div className=" bg-green-50 w-full p-3 flex items-center justify-between">
              <h2 className=" text-sm font-medium lg:text-lg text-green-700 lg:tracking-wide  capitalize">
                When can i withdraw my Intrest
              </h2>

              {f5 ? (
                <button
                  onClick={() => setF5(!f5)}
                  className=" text-lg font-medium "
                >
                  -
                </button>
              ) : (
                <button
                  onClick={() => setF5(!f5)}
                  className=" text-lg font-medium "
                >
                  +
                </button>
              )}
            </div>
            {f5 && (
              <div className=" p-3 text-sm">
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  commodi a fugiat. Eaque amet temporibus sit, quis provident
                  possimus distinctio mollitia cum excepturi.
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
