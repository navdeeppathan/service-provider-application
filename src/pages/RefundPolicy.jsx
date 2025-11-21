import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function RefundPolicy() {
  

  return (
    <>

     
<div className="bg-gray-50  min-h-screen">

      <div className="max-w-4xl mx-auto bg-white p-8 shadow mt-20 rounded-xl">
        <h1 className="text-3xl font-bold text-[#3b82f6] mb-6">
          Refund & Cancellation Policy
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Cancellation Policy
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Free cancellation up to 2 hours before service.</li>
          <li>Cancellation charges may apply after the 2-hour window.</li>
          <li>If provider is late 30+ minutes, free cancellation allowed.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Refund Policy</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>No-show by service provider</li>
          <li>Service not completed due to provider issue</li>
          <li>Poor service quality with valid proof</li>
          <li>Double payment or incorrect charges</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Refund Timeline</h2>
        <p className="text-gray-600">
          Refunds take 3–10 days depending on payment method.
        </p>
      </div>
    </div>

    </>
  );
}
