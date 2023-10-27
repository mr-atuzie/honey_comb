import React from "react";

const Ready = () => {
  return (
    <div className={" bg-green-50"}>
      <div className="w-[90%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Ready to get started?
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <p className=" text-center text-sm lg:text-base my-5">
          Create an account, invest and relax while we make cool money for you.
          Return on Investment guaranteed.
        </p>
      </div>
    </div>
  );
};

export default Ready;
