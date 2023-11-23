import React from "react";
import { FaRegCopy } from "react-icons/fa";
import { toast } from "react-toastify";

const AccountModal = ({ setModal }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(1026682128);
    toast.success(`Account number copied  to clipboard`);
    setModal(false);
  };

  return (
    <div
      onClick={() => setModal(false)}
      className=" bg-black/90 w-full h-screen fixed left-0 top-0 z-50 flex justify-center items-center"
    >
      <div className=" bg-white p-5 rounded shadow-lg w-[90%] lg:w-[30%]">
        <p className=" font-medium text-xs lg:text-base">
          To begin your investment, kindly pay into this account and we'll
          confirm within 24hours.
        </p>

        <div className=" mt-3">
          <p className=" text-xs lg:text-sm font-medium text-green-700 uppercase">
            Bank
          </p>
          <p className=" text-gray-800 text-sm lg:text-lg font-medium">
            MONIEPOINT
          </p>
        </div>

        <div className=" mt-3">
          <p className=" text-xs lg:text-sm font-medium text-green-700 uppercase">
            Account Name
          </p>
          <p className=" text-gray-800 text-sm lg:text-lg font-medium">
            Honeycomb FXD FARM LIMITED
          </p>
        </div>

        <div
          onClick={() => handleCopy()}
          className=" mt-3 flex justify-between cursor-pointer"
        >
          <div>
            <p className=" text-xs lg:text-sm font-medium text-green-700 uppercase">
              Account Number
            </p>
            <p className=" text-gray-800 text-sm lg:text-lg font-medium">
              5427630237
            </p>
          </div>

          <FaRegCopy className=" text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
