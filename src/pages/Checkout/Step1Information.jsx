// src/pages/checkout/Step1Information.jsx
import React from "react";

const Step1Information = ({ booking, updateBooking, goNext }) => {
  return (
    <div>
      <h3 className="text-lg font-medium mb-2">Customer Information</h3>
      <p className="text-gray-600 text-sm mb-6">
        Please enter your contact details for the booking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name"
          value={booking.customer.firstName}
          onChange={(e) => updateBooking("customer.firstName", e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Last name"
          value={booking.customer.lastName}
          onChange={(e) => updateBooking("customer.lastName", e.target.value)}
          className="border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Email address"
          value={booking.customer.email}
          onChange={(e) => updateBooking("customer.email", e.target.value)}
          className="border rounded-lg p-2 md:col-span-2"
        />
        <input
          type="tel"
          placeholder="Phone number"
          value={booking.customer.phone}
          onChange={(e) => updateBooking("customer.phone", e.target.value)}
          className="border rounded-lg p-2 md:col-span-2"
        />
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <button
          onClick={goNext}
          className="bg-[#3b82f6] text-white px-6 py-2 rounded-md text-sm font-normal cursor-pointer hover:bg-blue-600 shadow hover:opacity-95"
        >
          Continue to Service Location
        </button>
      </div>
    </div>
  );
};

export default Step1Information;
