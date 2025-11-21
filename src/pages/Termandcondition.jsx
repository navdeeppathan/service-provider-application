import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function Termandcondition() {
  

  return (
    <>
      <Header />

     
<div className="bg-gray-50  py-12 min-h-screen">

      <div className="max-w-4xl mx-auto bg-white shadow p-8 mt-20 rounded-xl">
        <h1 className="text-3xl font-bold text-[#3b82f6] mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-4">
          Welcome to <strong>Homexa</strong>. By accessing or using our platform,
          mobile app, or any service, you agree to comply with the following
          Terms & Conditions. Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p className="text-gray-600">
          Homexa is a home service marketplace connecting users with verified
          service providers. We act only as a facilitator. All services are
          performed directly by the service providers.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide accurate personal details while booking services.</li>
          <li>Ensure availability at the service location.</li>
          <li>Do not misuse or abuse the platform or service providers.</li>
          <li>Pay applicable charges before or after service completion.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Service Provider Responsibilities
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide genuine & high-quality service.</li>
          <li>Arrive on time as per the confirmed slot.</li>
          <li>Maintain safety and hygiene during the service.</li>
          <li>Follow Homexa guidelines and professional behavior.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Booking & Cancellation
        </h2>
        <p className="text-gray-600">
          Bookings can be rescheduled or cancelled through the platform. Certain
          cancellations may include charges based on timing and service type.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Payments</h2>
        <p className="text-gray-600">
          Homexa accepts online payment, UPI, card, and cash in certain cases.
          Tax may apply depending on service category.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Refunds & Disputes
        </h2>
        <p className="text-gray-600">
          Refunds are processed only after reviewing service quality, service
          provider report, and proof submitted by the user.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
        <p className="text-gray-600">
          Homexa is not liable for any direct or indirect damages caused during
          service delivery. Responsibility lies with the service provider.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Termination</h2>
        <p className="text-gray-600">
          Homexa has the right to suspend or remove any user or service provider
          violating our terms or engaging in fraudulent activity.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Changes to Terms</h2>
        <p className="text-gray-600">
          We may modify these terms at any time. Continued use of our platform
          means acceptance of updated terms.
        </p>
      </div>
    </div>
      <Footer />
    </>
  );
}
