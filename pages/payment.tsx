// Here is an example code snippet for implementing Momo payment in a ReactJS project:

import { useState } from "react";
import axios from "axios";

const paymentEndpoint = "https://api.momo.vn/v1/gateway/payment/...";

function PaymentPage() {
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [amount, setAmount] = useState("");

  //   const handlePayment = async () => {
  //     try {
  //       const response = await axios.post(paymentEndpoint, {
  //         partnerCode: "YOUR_PARTNER_CODE",
  //         accessKey: "YOUR_ACCESS_KEY",
  //         requestId: Date.now(),
  //         amount,
  //         orderInfo: "Payment for your purchase",
  //         returnUrl: "http://localhost:3000/success",
  //         notifyUrl: "http://localhost:8080/notify",
  //         extraData: "",
  //         requestType: "captureMoMoWallet",
  //         signature: "", // Generate signature using partnerCode, accessKey, requestId, amount, returnUrl, signatureSecret
  //         customerNumber: phoneNumber,
  //       });
  //       console.log(response.data);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     }
  //   };

  return (
    <div>
      {/* <h1>Payment Page</h1>
      <label>Enter Phone Number:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <br />
      <label>Enter Amount:</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <button onClick={handlePayment}>Pay with Momo</button> */}
    </div>
  );
}

export default PaymentPage;
// Note that you need to replace YOUR_PARTNER_CODE and YOUR_ACCESS_KEY with your own API credentials provided by Momo. Additionally, you need to generate a signature using the signatureSecret provided by Momo, which is a private key used to encrypt the signature.
