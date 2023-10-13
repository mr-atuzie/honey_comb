import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";
import axios from "axios";

const Pay = ({ amount, type }) => {
  const config = {
    public_key: "FLWPUBK_TEST-992ecad07f109c391d1ba645e5782842-X",
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "atuzierex0@gmail.com",
      phone_number: "08154963477",
      name: "rex atuzie",
    },
    customizations: {
      title: "Honey-comb-fxd",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const invest = async () => {
    const userData = { amount, type };
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/invest`,
        userData,
        {
          withCredentials: true,
        }
      );
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log(error);

      toast.error(message);
    }
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: (response) => {
      console.log(response);
      if (response.status === "completed") {
        invest();
        toast.success("Transaction successfull");
      } else {
        toast.error("Transaction failed");
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      console.log("closed by user");
    },
  };
  return (
    <button className="text-white text-sm lg:text-lg bg-green-700  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4">
      <FlutterWaveButton {...fwConfig} />
    </button>
  );
};

export default Pay;
