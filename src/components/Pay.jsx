import React from "react";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";
// import axios from "axios";
import logo from "../assets/honeycomb full logo.png";

const Pay = ({ amount, pay }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const config = {
    public_key: process.env.REACT_APP_FLUTTERWAVE_KEY,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: user.email,
      phone_number: "08154963477",
      name: user.name,
    },
    customizations: {
      title: "Honey-comb-fxd",
      description: "Payment for items in cart",
      logo: logo,
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave",
    callback: (response) => {
      console.log(response);
      if (response.status === "completed") {
        pay();
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
    <FlutterWaveButton
      className="text-white text-sm lg:text-lg bg-[#08432d]  rounded py-2.5 lg:p-4 w-full uppercase font-medium my-4"
      {...fwConfig}
    />
  );
};

export default Pay;
