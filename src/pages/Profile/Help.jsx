import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";

export default function Help() {
  const faqs = [
    {
      q: "How do I reschedule a booking?",
      a: "Go to My Orders → select booking → Reschedule",
    },
    {
      q: "What payment methods are accepted?",
      a: "Cards, UPI, Wallets and Cash on service",
    },
  ];

  return (
    <ProfileLayout active="help">
      <div className="bg-white p-6 rounded-xl shadow">
        {/* PAGE TITLE */}
        <h2 className="text-xl font-medium mb-4">Help Center</h2>

        {/* FAQ LIST */}
        <div className="space-y-4 text-sm font-normal">
          {faqs.map((f, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <div className=" mb-1">{f.q}</div>
              <div className="text-xs text-gray-600">{f.a}</div>
            </div>
          ))}
        </div>

        {/* CONTACT SUPPORT */}
        <div className="mt-6 text-sm font-normal">
          <h3 className=" mb-2">Contact Support</h3>
          <p className="font-medium text-gray-600">Email: support@homexa.in</p>
          <p className="font font-medium text-gray-600">
            Phone: +91 90000 00000
          </p>
        </div>
      </div>
    </ProfileLayout>
  );
}
