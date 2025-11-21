import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function Privecepolicy() {
  

  return (
    <>

          <div className="bg-gray-50   min-h-screen">

      <div className="max-w-4xl mx-auto bg-white shadow p-8 mt-20 rounded-xl">
        <h1 className="text-3xl font-bold text-[#3b82f6] mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-4">
          At <strong>Homexa</strong>, we value and protect your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your data when using our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Name, email, phone number, and address.</li>
          <li>Location details to assign nearest service provider.</li>
          <li>Payment information (secured via third-party gateways).</li>
          <li>Device and usage data for analytics and improvements.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>To process bookings and provide home services.</li>
          <li>To verify and onboard service providers.</li>
          <li>To send alerts, notifications, and service updates.</li>
          <li>To enhance user experience and platform performance.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Sharing of Information
        </h2>
        <p className="text-gray-600">
          We do not sell your data. However, we may share it with:
        </p>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Verified service providers for completing services.</li>
          <li>Payment gateways for secure transactions.</li>
          <li>Law enforcement if required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Data Protection & Security
        </h2>
        <p className="text-gray-600">
          We use encryption, secure servers, and authentication to protect your
          data. However, no online transmission is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Cookies & Tracking
        </h2>
        <p className="text-gray-600">
          Cookies help us improve website experience, load faster pages, and
          remember user preferences.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. User Control Over Data
        </h2>
        <p className="text-gray-600">
          You can request account deletion, data correction, or opt-out from
          communication at any time.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Changes to Privacy Policy
        </h2>
        <p className="text-gray-600">
          Homexa may update this Privacy Policy. Updated versions will be posted
          on the website/app.
        </p>
      </div>
    </div>

    </>
  );
}
