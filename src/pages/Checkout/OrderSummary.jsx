// src/pages/checkout/OrderSummary.jsx
import React from "react";
import { servicesCatalog } from "./data";

/**
 * For demo purposes, ORDER SUMMARY displays selected service,
 * quantity, base price, tax & total. It also allows switching service quick-select.
 *
 * NOTE: Example uses the uploaded screenshot as preview image.
 * local path (replace if needed): /mnt/data/f901c64e-4f72-464e-a6f6-9797ba9732e1.png
 */

const OrderSummary = ({ booking, services, updateBooking, gotoStep }) => {
  const selected = booking.service;
  const base = selected.price;
  const qty = 1;
  const tax = Math.round(base * 0.1);
  const total = base * qty + tax;

  return (
    <div className="bg-white rounded-xl shadow p-6 sticky top-20">
      <h4 className="text-lg font-semibold mb-4">Order Summary</h4>

      <div className="flex items-center gap-3 mb-4">
        <img src="/mnt/data/f901c64e-4f72-464e-a6f6-9797ba9732e1.png" alt="service" className="w-16 h-16 object-cover rounded-md" />
        <div>
          <div className="font-semibold">{selected.title}</div>
          <div className="text-sm text-gray-500">{selected.short}</div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>₹{base.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 mt-2">
          <span>Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-semibold text-lg mt-4">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm mb-2">Quick Select Service</label>
        <select
          value={selected.key}
          onChange={(e) => {
            const s = services.find(x => x.key === e.target.value);
            updateBooking("service", s);
            gotoStep(2);
          }}
          className="w-full border rounded-lg p-2"
        >
          {services.map((s) => <option key={s.key} value={s.key}>{s.title} — ₹{s.price}</option>)}
        </select>
      </div>

      <div className="mt-6">
        <button onClick={() => gotoStep(4)} className="w-full bg-[#3b82f6] text-white py-2 rounded-md">Go to Review</button>
      </div>
    </div>
  );
};

export default OrderSummary;
