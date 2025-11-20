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
        <div className="bg-white p-6 rounded-xl shadow mt-20">

            {/* PAGE TITLE */}
            <h2 className="text-2xl font-semibold mb-4">Help Center</h2>

            {/* FAQ LIST */}
            <div className="space-y-4">
            {faqs.map((f, i) => (
                <div key={i} className="p-4 border rounded-lg">
                <div className="font-medium mb-1">{f.q}</div>
                <div className="text-sm text-gray-600">{f.a}</div>
                </div>
            ))}
            </div>

            {/* CONTACT SUPPORT */}
            <div className="mt-6">
            <h3 className="font-semibold mb-2">Contact Support</h3>
            <p className="text-sm text-gray-600">
                Email: <b>support@homexa.in</b> | Phone: <b>+91 90000 00000</b>
            </p>
            </div>

        </div>
        </ProfileLayout>
    );
}
