import React from "react";

const Hero = () => {
  return (
    <div className=" h-[95vh]   bg-green-700 w-full flex justify-center items-center ">
      <div className=" w-[80%] mx-auto flex justify-between items-center">
        <div className="w-[55%]">
          <h1 className=" text-white text-7xl font-extrabold my-4 ">
            Unlock your{" "}
            <span className=" text-yellow-500">financial Potential</span> by
            investing
          </h1>

          <p className=" text-gray-200 my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            ea quod veniam maiores, iusto placeat nam, architecto rerum quisquam
            nisi, eos earum officia tempore non fugiat? Culpa commodi temporibus
            minus nihil quam. Quas reiciendis dolorem explicabo ducimus mollitia
            asperiores harum.
          </p>

          <button className="rounded bg-green-500  text-white px-6 py-2.5  hover:bg-white hover:text-green-500 ">
            Get started
          </button>
        </div>

        <img
          className=" w-[35%] rounded"
          src="  https://img.freepik.com/free-photo/stacks-coins-arranged-bar-graph_35913-2518.jpg?w=1060&t=st=1695731193~exp=1695731793~hmac=a67e2d5eda9397d9f84d1f856633848301d4eaa29472115b3db103e72eea2d08"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
