import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  console.log(user);

  return (
    <div className=" h-full bg-green-50 shadow-lg flex flex-col justify-between  px-4 py-6 lg:p-8 rounded">
      <div className=" mb-4 flex justify-between items-center">
        <div>
          <p className=" text-xs lg:text-sm  text-gray-500 ">
            Current Balanace
          </p>
          <h2 className=" text-xl font-semibold lg:text-5xl ">
            {" "}
            &#8358;
            {new Intl.NumberFormat().format(user?.accountBalance)}
          </h2>
        </div>

        <div className="bg-green-100 text-green-600  p-1  rounded-full">
          <BsEyeSlash size={18} />
        </div>
      </div>

      <div className=" mt-8 flex gap-2  ">
        <Link to={"/user/packages"}>
          <button className=" text-white bg-[#08432d]  py-2 lg:py-3 text-center font-medium rounded text-xs lg:text-sm px-4 lg:px-8">
            Invest
          </button>
        </Link>
        <button className="text-white bg-[#08432d]   py-2 lg:py-3 text-center font-medium rounded  text-xs  lg:text-sm px-4 lg:px-8">
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default UserCard;
