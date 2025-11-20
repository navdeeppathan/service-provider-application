// src/pages/checkout/Step3Payment.jsx
import React from "react";

const Step3Payment = ({ booking, updateBooking, goNext, goBack }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Payment</h3>
      <p className="text-gray-600 mb-6">Choose a payment method to complete your booking.</p>

      <div className="space-y-4">
        <label className={`block border rounded-lg p-4 ${booking.payment.method === "card" ? "ring-2 ring-purple-200" : ""}`}>
          <input type="radio" name="payment" checked={booking.payment.method === "card"} onChange={() => updateBooking("payment.method", "card")} />{" "}
          <span className="ml-2 font-medium">Credit / Debit Card</span>

          {booking.payment.method === "card" && (
            <div className="mt-4 grid grid-cols-1 gap-3">
              <input type="text" placeholder="Name on card" className="border rounded-lg p-3" value={booking.payment.cardName} onChange={(e) => updateBooking("payment.cardName", e.target.value)} />
              <input type="text" placeholder="Card number" className="border rounded-lg p-3" value={booking.payment.cardNumber} onChange={(e) => updateBooking("payment.cardNumber", e.target.value)} />
              <div className="grid grid-cols-2 gap-3">
                <input type="text" placeholder="MM/YY" className="border rounded-lg p-3" value={booking.payment.expiry} onChange={(e) => updateBooking("payment.expiry", e.target.value)} />
                <input type="text" placeholder="CVV" className="border rounded-lg p-3" value={booking.payment.cvv} onChange={(e) => updateBooking("payment.cvv", e.target.value)} />
              </div>
            </div>
          )}
        </label>

        <label className={`block border rounded-lg p-4 ${booking.payment.method === "upi" ? "ring-2 ring-purple-200" : ""}`}>
          <input type="radio" name="payment" checked={booking.payment.method === "upi"} onChange={() => updateBooking("payment.method", "upi")} />{" "}
          <span className="ml-2 font-medium">UPI / Wallet</span>
          {booking.payment.method === "upi" && <div className="mt-2 text-sm text-gray-600">You will be redirected to complete payment.</div>}
        </label>

        <label className={`block border rounded-lg p-4 ${booking.payment.method === "cod" ? "ring-2 ring-purple-200" : ""}`}>
          <input type="radio" name="payment" checked={booking.payment.method === "cod"} onChange={() => updateBooking("payment.method", "cod")} />{" "}
          <span className="ml-2 font-medium">Pay on Service (Cash/Card)</span>
        </label>
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={goBack} className="px-6 py-3 rounded-md border">Back</button>
        <button onClick={goNext} className="px-6 py-3 rounded-md bg-[#3b82f6] text-white">Review & Confirm</button>
      </div>
    </div>
  );
};

export default Step3Payment;
