import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function ProviderPolicy() {
  

  return (
    <>

     
 <div className="bg-gray-50  min-h-screen">

      <div className="max-w-4xl mx-auto bg-white p-8 shadow mt-20 rounded-xl">
        <h1 className="text-3xl font-bold text-[#3b82f6] mb-6">
          Service Provider Onboarding Policy
        </h1>

        <h2 className="text-xl font-semibold mb-2">1. Required Documents</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Aadhar / Valid ID proof</li>
          <li>Address proof</li>
          <li>Experience certificates (if available)</li>
          <li>Bank account details</li>
          <li>Profile photo</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Verification Steps</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Document verification</li>
          <li>Skill assessment</li>
          <li>Interview / Practical test</li>
          <li>Account approval</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Code of Conduct</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Be punctual and professional</li>
          <li>No harassment, misconduct, or overcharging</li>
          <li>Maintain hygiene and safety</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Deactivation Criteria
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Repeated complaints</li>
          <li>Poor ratings</li>
          <li>Fraud or document issues</li>
          <li>Unsafe behavior</li>
        </ul>
      </div>
    </div>
    </>
  );
}
