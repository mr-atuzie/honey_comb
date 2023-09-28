import React from "react";

const Terms = () => {
  return (
    <div className="bg-green-700 ">
      <div className=" w-[80%] mx-auto py-20">
        <div className=" text-center flex flex-col justify-center items-center ">
          <div className="text-center  text-white text-lg lg:text-3xl font-semibold capitalize ">
            Terms & Conditions
          </div>
          <div className=" w-48 rounded-md mt-2 h-1 bg-yellow-500"></div>
        </div>

        <div className=" lg:w-[50%] mx-auto mt-10">
          <p className=" text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            exercitationem vel voluptas illum debitis? Alias libero beatae
            sapiente quis tempore impedit reprehenderit, facilis adipisci
            dolore.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            exercitationem vel voluptas illum debitis? Alias libero beatae
            sapiente quis tempore impedit reprehenderit, facilis adipisci
            dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Officiis exercitationem vel voluptas illum debitis? Alias libero
            beatae sapiente quis tempore impedit reprehenderit, facilis adipisci
            dolore.
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
            exercitationem vel voluptas illum debitis? Alias libero beatae
            sapiente quis tempore impedit reprehenderit, facilis adipisci
            dolore.
          </p>

          <div className=" flex justify-center items-center mt-5">
            <button className=" bg-white text-green-700 py-3 px-5 rounded-md  ">
              Download File
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
