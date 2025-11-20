import React, { useState } from "react";
import ProfileLayout from "../../layouts/ProfileLayout";

export default function PaymentMethods() {
    const [cards] = useState([
        { id: 1, brand: "Visa", last4: "4242", exp: "12/25" }
    ]);

    return (
        <ProfileLayout active="payments">
        <div className="bg-white p-6 rounded-xl shadow mt-20">

            {/* PAGE TITLE */}
            <h2 className="text-2xl font-semibold mb-4">Payment Methods</h2>

            {/* EXISTING CARDS */}
            <div className="space-y-3">
            {cards.map((c) => (
                <div
                key={c.id}
                className="p-4 border rounded-lg flex justify-between items-center"
                >
                <div>
                    <div className="font-medium">
                    {c.brand} •••• {c.last4}
                    </div>
                    <div className="text-sm text-gray-500">Expiry {c.exp}</div>
                </div>

                <div className="flex gap-3">
                    <button className="text-sm text-blue-600 hover:underline">
                    Make Default
                    </button>
                    <button className="text-sm text-red-600 hover:underline">
                    Remove
                    </button>
                </div>
                </div>
            ))}
            </div>

            {/* ADD CARD FORM */}
            <div className="mt-6">
            <h3 className="font-semibold mb-2">Add Card</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                className="border rounded p-2"
                placeholder="Card Number"
                />
                <input
                className="border rounded p-2"
                placeholder="Name on Card"
                />
                <input
                className="border rounded p-2"
                placeholder="Expiry MM/YY"
                />
                <input
                className="border rounded p-2"
                placeholder="CVV"
                />
            </div>

            <button className="mt-3 bg-[#3b82f6] text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Card
            </button>
            </div>

        </div>
        </ProfileLayout>
    );
}
