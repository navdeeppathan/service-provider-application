// src/pages/checkout/Step4Review.jsx
import React from "react";

const Step4Review = ({ booking, goBack, placeOrder }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Review your booking</h3>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-white shadow-sm space-y-2">
          <h4 className="font-semibold text-sm text-gray-800 border-b pb-2">
            Customer
          </h4>

          <div>
            <p className="text-xs text-gray-500">Name</p>
            <p className="text-sm font-medium text-gray-800">
              {booking.customer.fullName}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">Contact</p>
            <p className="text-sm text-gray-700">
              {booking.customer.email} • {booking.customer.phone}
            </p>
          </div>
        </div>

        <div className="p-4 border rounded-lg bg-white shadow-sm space-y-2">
          <h4 className="font-semibold text-sm text-gray-800 border-b pb-2">
            Service & Schedule
          </h4>

          {/* Service Name */}
          <div>
            <p className="text-xs text-gray-500">Selected Service</p>
            <p className="text-sm font-medium text-gray-800">
              {booking.service?.name || "Not selected"}
            </p>
          </div>

          {/* Schedule */}
          <div>
            <p className="text-xs text-gray-500">Scheduled For</p>
            <p className="text-sm font-medium text-gray-800">
              {booking.schedule.date || "Date not set"} •{" "}
              {booking.schedule.time || "Time not set"}
            </p>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs text-gray-500">Address</p>
            <p className="text-sm text-gray-700">
              {booking.address.line1 && `${booking.address.line1}, `}
              {booking.address.line2 && `${booking.address.line2}, `}
              {booking.address.city && `${booking.address.city}, `}
              {booking.address.state && `${booking.address.state} `}
              {booking.address.pincode}
            </p>
          </div>
        </div>

        <div className="p-4 border rounded-lg flex items-center gap-2">
          <h4 className="font-medium text-sm">Payment Method:</h4>
          <p className="text-sm">
            {booking.payment.method === "card"
              ? "Card"
              : booking.payment.method === "upi"
              ? "UPI / Wallet"
              : "Pay on Service"}
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={goBack}
          className="px-6 py-2 rounded-md text-sm font-normal border"
        >
          Back
        </button>
        <button
          onClick={placeOrder}
          className="px-6 py-2 rounded-md text-sm font-normal bg-green-600 text-white"
        >
          Confirm & Pay
        </button>
      </div>
    </div>
  );
};

export default Step4Review;
