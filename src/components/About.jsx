import React from "react";

const About = () => {
  return (
    <div className="">
      <div className=" lg:w-[80%] mx-auto py-10 lg:py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-green-600 text-lg lg:text-3xl font-semibold capitalize ">
            Who we are
          </div>
          <div className=" w-16 rounded-md  h-1 bg-yellow-500"></div>
        </div>

        <div className=" w-full  items-center mt-14  lg:flex justify-around ">
          <img
            className=" w-[80%] mx-auto lg:w-[40%]  lg:h-[40%] rounded"
            src="https://img.freepik.com/premium-photo/businessman-protection-money-table-with-tree_34152-1752.jpg?size=626&ext=jpg&uid=R74218588&ga=GA1.2.89680559.1678048408&semt=sph"
            alt=""
          />

          {/* text container */}
          <div className=" w-[80%] mt-6 lg:mt-0 mx-auto lg:w-[40%]">
            <h3 className=" text-green-600   font-semibold text-xl lg:text-3xl capitalize">
              Unleash Potentials through{" "}
              <span className=" text-yellow-500"> investing</span> and{" "}
              <span className=" text-yellow-500"> geting double</span>
            </h3>
            <p className="   mt-4 text-sm lg:text-base my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet, veritatis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              commodi a fugiat. Eaque amet temporibus sit, quis provident
              possimus distinctio mollitia cum excepturi. Eveniet,
              veritatis.Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Neque commodi a fugiat. Eaque amet temporibus sit.
            </p>
            <button className="hidden md:flex rounded bg-green-600 text-white px-6 py-3 capitalize hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600 ">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
