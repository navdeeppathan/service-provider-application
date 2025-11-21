import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function ReturnPolicy() {
  

  return (
    <>

     
  <div className="bg-gray-50  min-h-screen">

      <div className="max-w-4xl mx-auto bg-white p-8 shadow mt-20 rounded-xl">
        <h1 className="text-3xl font-bold text-[#3b82f6] mb-6">
          Return & Replacement Policy
        </h1>

        <p className="text-gray-600 mb-4">
          This policy applies to products sold through Homexa. Services are not
          eligible for replacement or return.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Eligibility for Return or Replacement
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Damaged or defective products</li>
          <li>Incorrect or mismatched products</li>
          <li>Missing parts or incomplete package</li>
          <li>Return within allowed timeframe</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Return Window</h2>
        <table className="w-full border text-gray-700 mt-2">
          <tbody>
            <tr className="border">
              <td className="p-2 border">Spare Parts</td>
              <td className="p-2">2 Days</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Filters</td>
              <td className="p-2">3 Days</td>
            </tr>
            <tr className="border">
              <td className="p-2 border">Tools & Equipment</td>
              <td className="p-2">5 Days</td>
            </tr>
          </tbody>
        </table>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Pickup & Inspection
        </h2>
        <p className="text-gray-600">
          Returned products will be inspected before approval. If the product
          fails inspection, it will be sent back to the customer.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund Timeline</h2>
        <p className="text-gray-600">
          Refunds take 3–10 working days depending on payment mode.
        </p>
      </div>
    </div>
    </>
  );
}
