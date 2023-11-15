import React from "react";
import logo from "../assets/honeycomb full logo.png";

const Terms = () => {
  return (
    <div className=" bg-white w-full py-10 ">
      <div className=" text-center flex flex-col justify-center items-center ">
        <img className=" w-[80%] " src={logo} alt="" />

        <div className="text-center   lg:text-2xl font-semibold capitalize ">
          Terms & Conditions of Investment - HIGH RISK INVESTMENT
        </div>
      </div>

      <div className=" w-[90%] lg:w-[50%] mx-auto mt-4 lg:mt-7  text-sm lg:text-base flex flex-col gap-5">
        <p className="">
          These Terms and Conditions ("Agreement") govern your participation in
          the investment offered by Honeycomb FXD Farm ("Company"). By investing
          in this program, you agree to abide by the following terms:
        </p>

        <div>
          <h3>
            <strong> 1. Eligibility:</strong>
          </h3>
          <p className=" m-2">
            1.1 To participate in this investment program, you must be at least
            18 years old and have the legal capacity to enter into a binding
            agreement.
          </p>
        </div>

        <div>
          <h3>
            <strong>2. Investment Details:</strong>
          </h3>
          <p className=" m-2">
            2.1 The investment amount, interest rate, and duration is specified
            in the packages page provided in the website.
          </p>
          <p className=" m-2">
            2.2 The Company reserves the right to modify investment terms with
            prior notice to investors.
          </p>
        </div>

        <div>
          <h3>
            <strong>3. Returns:</strong>
          </h3>
          <p className=" m-2">
            3.1 Returns on the investment will be calculated based on the
            agreed-upon interest rate and will be paid according to the terms
            specified in the packages page.
          </p>
        </div>

        <div>
          <h3>
            <strong>4. Risks:</strong>
          </h3>
          <p className=" m-2">
            4.1 While efforts will be made to minimize risks, all investments
            carry inherent risks. The Company does not guarantee the performance
            or safety of the investment especially the high risk investment
            package.
          </p>
          <p className=" m-2">
            4.2{" "}
            <strong>
              {" "}
              High Risk Investent (forex trading, betting, and cryptocurrency):
            </strong>{" "}
            Trading FX involves a high level of risk, and may not be suitable
            for all investors. The high degree of leverage can work against you
            as well as for you. Before deciding to invest you should carefully
            consider your investment objectives, level of experience, and risk
            appetite. The possibility exists that you could sustain a loss of
            some or all of your initial investment and therefore you should only
            invest money that you can afford to lose. You should be aware of all
            the risks associated with foreign exchange trading, and seek advice
            from an independent financial adviser if you have any doubt.
          </p>

          <p className=" mx-2 my-6">
            <strong>
              In the event of any unfavorable market conditions, the company and
              the investor will bear the brunt of the losses. Please carefully
              consider your financial situation and investment objectives before
              investing in the premium package.
            </strong>
          </p>

          <p className=" m-2">
            4.3 <strong>Low Risk Investment: </strong>This investment is risk
            free (ie: 0% risk) and is suitable for investors above 18 years.
          </p>
        </div>

        <div>
          <h3>
            <strong>5. Withdrawal:</strong>
          </h3>
          <p className=" m-2">
            5.1 <strong>High Risk Investment:</strong> Investors may request
            withdrawal of funds weekly.
          </p>
          <span className=" m-2">
            ⦁ <strong> 15% </strong>interest of your total investment will be
            paid to you weekly plus <strong>25%</strong> of your capital. This
            meas that a sum of <strong>40%</strong> from your total investment
            plus your interest will be paid
          </span>

          <div className=" my-6 flex flex-col justify-between item-center text-center">
            For instance; if your total invest is 100,000 Naira, We’ll divide it
            into 4 weeks
            <span className=" my-4">
              <strong>
                (100,000 / 4 weeks = 25,000) + (15% × 100,000 ÷ 100 = 15,000)
              </strong>
              <strong>25,000 + 15,000 = 40,000</strong>
            </span>
          </div>

          <p className=" m-2">
            ⦁ You will not be able to withdraw for the 4th week unless you
            re-invest or forfeit 50% of your balance for the 4th week.
          </p>

          <p className=" m-2">
            ⦁ Payment will be processed within 2-3 days of withdrawal request.
          </p>

          <p className=" m-2">
            ⦁ We pay out only on work days, weekends are not included.
          </p>

          <p className=" m-2">
            5.2 <strong>Low Risk Investment: </strong>Investors will be paid 3%
            upfront of their total investment and will be able to withdraw their
            total investment at the end of the specified duration.
          </p>

          <p className=" m-2">
            5.3 A compulsory <strong> 5% registration fee </strong>is required
            for the <strong> High-Risk Investment</strong> and an additional
            7.5% VAT deduction on all packages{" "}
            <strong>(High-Risk and Low Risk)</strong> will be applied to
            interest withdrawals from all packages.
          </p>
        </div>

        <div>
          <h3>
            <strong>6. Confidentiality:</strong>
          </h3>
          <p className=" m-2">
            6.1 We regard your information and will not for any circumstance,
            reveal your data.
          </p>
        </div>

        <div>
          <h3>
            <strong>7. Termination:</strong>
          </h3>
          <p className=" m-2">
            7.1 The Company reserves the right to terminate the investment
            program at any time with prior notice to investors.
          </p>
          <p className=" m-2">
            7.2 In the event of termination, the Company will make reasonable
            efforts to return the invested capital to investors.
          </p>
        </div>

        <div>
          <h3>
            <strong>8. Governing Law:</strong>
          </h3>
          <p className=" m-2">
            8.1 This Agreement is governed by the laws of Nigeria. Any disputes
            arising out of or in connection with this Agreement shall be
            resolved through arbitration in accordance with the rules of
            Arbitration and Conciliation Act (ACA).
          </p>
        </div>

        <div className=" my-6">
          By investing with Honeycomb FXD Farm, you acknowledge that you have
          read, understood, and agreed to these terms and conditions. If you do
          not agree with any part of these terms, you should not proceed with
          the investment.
        </div>

        <div className="mb-6">
          <strong>Honeycomb FXD Farm</strong>
        </div>

        <p className=" text-center">
          <strong>
            Have you read the T&Cs and wish to continue? Invest Now!
          </strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default Terms;
