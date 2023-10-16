import React from "react";
// import { MdVerified } from "react-icons/md";

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
            {/* <h3 className=" text-green-600   font-semibold text-xl lg:text-3xl capitalize">
              Unleash Potentials through{" "}
              <span className=" text-yellow-500"> investing</span> and{" "}
              <span className=" text-yellow-500"> geting double</span>
            </h3> */}
            <p className=" mt-4 text-sm lg:text-base my-3">
              At Honeycomb FXD Farm, we are committed to providing our clients
              with the best possible investment experience. We do this by
              offering a wide range of investment options, an easy-to-use
              platform, expert guidance, and budget-friendly/competitive fees.
              <br />
              <br />
              We use a variety of methods to ensure that our clients have a
              positive and profitable investment experience. Here are just a few
              of the ways we do it:
              <br />
              <br />
            </p>

            <ul className=" flex flex-col gap-3 ">
              <li className="   text-xs lg:text-base list-disc ">
                We offer a wide range of investment options to suit your needs
                and budget. Whether you're interested in forex trading,
                cryptocurrencies, or agriculture, we have something to offer
                you. (requires giving them the option to choose where they want
                their money invested)
              </li>

              {/* <li className="   text-xs lg:text-base list-disc ">
                We provide our clients with access to a team of experienced
                financial professionals who are available to answer your
                questions and provide guidance. Chat with an Investment Advisor
                - (This will be hyperlinked to the telegram group)
              </li> */}

              {/* <li className="   text-xs lg:text-base list-disc ">
                We offer a variety of educational resources, to help you learn
                more about investing. (This will be linked to the blog page)
              </li>

              <li className="   text-xs lg:text-base list-disc ">
                We use state-of-the-art technology to protect your investments
                and keep your account secure.
              </li>

              <li className="   text-xs lg:text-base list-disc ">
                We offer competitive fees and budget-friendly investments.
              </li> */}
            </ul>

            <button className=" mt-3 text-green-700 font-medium text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default How;
