import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function CookiesPolicy() {
  

  return (
    <>

     
 <div className="bg-gray-50 min-h-screen">

      <div className="max-w-4xl mx-auto bg-white p-8 shadow mt-20 rounded-xl">
        <h1 className="text-3xl font-bold text-[#3b82f6] mb-6">
          Cookies Policy
        </h1>

        <p className="text-gray-600 mb-4">
          Homexa uses cookies to enhance your experience. This policy explains
          how and why we use cookies.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
        <p className="text-gray-600">
          Cookies are small text files stored on your device to help websites
          work properly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Types of Cookies We Use
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Essential Cookies</li>
          <li>Performance Cookies</li>
          <li>Functional Cookies</li>
          <li>Marketing Cookies</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          3. Managing Cookies
        </h2>
        <p className="text-gray-600">
          You can disable cookies via browser settings but some features may not
          work properly.
        </p>
      </div>
    </div>
    </>
  );
}
