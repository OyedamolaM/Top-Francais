import React, { useEffect } from "react";

const PaystackPayment = ({ email, amount, name, onSuccess, onClose }) => {
  useEffect(() => {
    // Load Paystack script dynamically if not already loaded
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const payWithPaystack = (e) => {
    e.preventDefault();

    if (!window.PaystackPop) {
      alert("Paystack script not yet loaded. Please wait a second and retry.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: import.meta.env.VITE_pk_test_060451e247e6c4708181dbdac90d6127d03ef531, // ✅ Your Paystack public key (add in .env)
      email,
      amount: amount * 100, // Convert to kobo
      currency: "NGN",
      metadata: {
        name,
      },
      callback: function (response) {
        console.log("Payment successful:", response);
        onSuccess && onSuccess(response);
      },
      onClose: function () {
        console.log("Payment closed.");
        onClose && onClose();
      },
    });

    handler.openIframe();
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h3>Proceed to Payment</h3>
      <p>You're about to pay ₦{amount.toLocaleString()}</p>
      <button
        onClick={payWithPaystack}
        style={{
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          padding: "0.8rem 1.5rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Pay with Paystack
      </button>
    </div>
  );
};

export default PaystackPayment;
