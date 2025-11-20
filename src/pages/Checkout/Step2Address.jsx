// src/pages/checkout/Step2Address.jsx
import React from "react";

const Step2Address = ({ booking, updateBooking, goNext, goBack }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">Service Location & Schedule</h3>
      <p className="text-gray-600 mb-6">Where and when should the technician come?</p>

      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Address line 1"
          value={booking.address.line1}
          onChange={(e) => updateBooking("address.line1", e.target.value)}
          className="border rounded-lg p-3"
        />
        <input
          type="text"
          placeholder="Address line 2 (optional)"
          value={booking.address.line2}
          onChange={(e) => updateBooking("address.line2", e.target.value)}
          className="border rounded-lg p-3"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            value={booking.address.city}
            onChange={(e) => updateBooking("address.city", e.target.value)}
            className="border rounded-lg p-3"
          />
          <input
            type="text"
            placeholder="State"
            value={booking.address.state}
            onChange={(e) => updateBooking("address.state", e.target.value)}
            className="border rounded-lg p-3"
          />
          <input
            type="text"
            placeholder="Pincode"
            value={booking.address.pincode}
            onChange={(e) => updateBooking("address.pincode", e.target.value)}
            className="border rounded-lg p-3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="date"
            value={booking.schedule.date}
            onChange={(e) => updateBooking("schedule.date", e.target.value)}
            className="border rounded-lg p-3"
          />
          <input
            type="time"
            value={booking.schedule.time}
            onChange={(e) => updateBooking("schedule.time", e.target.value)}
            className="border rounded-lg p-3"
          />
        </div>

        <textarea
          placeholder="Notes for technician (optional)"
          value={booking.notes}
          onChange={(e) => updateBooking("notes", e.target.value)}
          className="border rounded-lg p-3"
        />
      </div>

      <div className="mt-8 flex justify-between">
        <button onClick={goBack} className="px-6 py-3 rounded-md border">Back</button>
        <button onClick={goNext} className="px-6 py-3 rounded-md bg-[#3b82f6] text-white">Proceed to Payment</button>
      </div>
    </div>
  );
};

export default Step2Address;
