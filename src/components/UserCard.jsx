// import { BsEyeSlash } from "react-icons/bs";
// import { FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

const UserCard = ({ user }) => {
  // const handleCopy = (referralCode) => {
  //   navigator.clipboard.writeText(referralCode);
  //   toast.success(`Copied referral code ${referralCode} to clipboard`);
  // };

  return (
    <div className=" h-full  bg-white shadow-lg flex flex-col justify-between  px-4 py-6 lg:p-8 rounded">
      <div className=" mb-4 flex justify-between items-center">
        <div>
          <p className=" text-xs lg:text-sm  text-gray-500 ">
            Total Investments
          </p>
          <h2 className=" text-xl font-semibold lg:text-5xl ">
            {" "}
            &#8358;
            {new Intl.NumberFormat().format(user?.accountBalance)}
          </h2>
        </div>

        {/* <div>
          <p className=" text-xs lg:text-sm  text-gray-500 ">Profit</p>
          <h2 className=" text-xl font-semibold lg:text-5xl ">
            {" "}
            &#8358;
            {new Intl.NumberFormat().format(user?.accountBalance)}
          </h2>
        </div> */}
      </div>

      {/* <div
        onClick={() => handleCopy(user?._id)}
        className=" mb-4 flex justify-between items-center cursor-pointer"
      >
        <div>
          <p className=" text-xs lg:text-sm  text-gray-500 ">Referral Code</p>
          <h2 className=" text-xs lg:text-sm font-medium  ">{user?._id}</h2>
        </div>

        <FaRegCopy className=" text-gray-500" />
      </div> */}

      <div className=" mt-8 flex gap-2  ">
        <Link to={"/user/packages"}>
          <button className=" text-white bg-[#08432d]  py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8">
            Invest
          </button>
        </Link>

        <Link to={"/user/investments"}>
          <button className="text-white bg-[#08432d]  py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8">
            Withdraw
          </button>
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
