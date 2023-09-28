import React from "react";

const How = () => {
  return (
    <div className=" ">
      <div className=" lg:w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            How we do it
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" w-full  items-center mt-14  lg:flex justify-around ">
          <img
            className=" w-[80%] mx-auto lg:w-[40%]  lg:h-[40%] rounded"
            src="https://guardian.ng/wp-content/uploads/2023/02/IMG-20230301-WA0001.jpg"
            alt=""
          />

          {/* text container */}
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <h3 className=" text-green-600   font-semibold text-xl lg:text-3xl capitalize">
              Unleash Potentials through{" "}
              <span className=" text-yellow-500"> investing</span> and{" "}
              <span className=" text-yellow-500"> geting double</span>
            </h3>
            <p className=" mt-4 text-sm lg:text-base my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
