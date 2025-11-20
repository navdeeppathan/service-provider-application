// src/pages/checkout/Step4Review.jsx
import React from "react";

const Step4Review = ({ booking, goBack, placeOrder }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Review your booking</h3>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Customer</h4>
          <p>{booking.customer.firstName} {booking.customer.lastName}</p>
          <p>{booking.customer.email} • {booking.customer.phone}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Service & Schedule</h4>
          <p className="font-medium">{booking.service.title}</p>
          <p>{booking.schedule.date || "Date not set"} • {booking.schedule.time || "Time not set"}</p>
          <p className="text-sm text-gray-600">{booking.address.line1} {booking.address.line2}, {booking.address.city} {booking.address.state} {booking.address.pincode}</p>
        </div>

        <div className="p-4 border rounded-lg">
          <h4 className="font-semibold">Payment</h4>
          <p>Method: {booking.payment.method === "card" ? "Card" : booking.payment.method === "upi" ? "UPI / Wallet" : "Pay on Service"}</p>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={goBack} className="px-6 py-3 rounded-md border">Back</button>
        <button onClick={placeOrder} className="px-6 py-3 rounded-md bg-green-600 text-white">Confirm & Pay</button>
      </div>
    </div>
  );
};

export default Step4Review;
