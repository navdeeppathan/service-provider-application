import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";

export default function Orders() {
    const orders = [
        { id: "ORD-1001", service: "AC Repair", date: "2025-11-12", status: "Completed", amount: 1499 },
        { id: "ORD-1000", service: "Home Cleaning", date: "2025-11-01", status: "Completed", amount: 799 },
        { id: "ORD-0999", service: "Plumbing", date: "2025-10-20", status: "Cancelled", amount: 0 }
    ];

    return (
        <ProfileLayout active="orders">
        <div className="bg-white p-6 rounded-xl shadow mt-20">

            {/* PAGE TITLE */}
            <h2 className="text-2xl font-semibold mb-4">My Orders</h2>

            <div className="space-y-4">
            {orders.map((o) => (
                <div
                key={o.id}
                className="p-4 border rounded-lg flex justify-between items-center"
                >
                {/* LEFT SIDE */}
                <div>
                    <div className="font-medium">
                    {o.service}{" "}
                    <span className="text-sm text-gray-500">#{o.id}</span>
                    </div>
                    <div className="text-sm text-gray-500">{o.date}</div>
                </div>

                {/* RIGHT SIDE */}
                <div className="text-right">
                    <div
                    className={`px-3 py-1 rounded-full text-sm 
                    ${
                        o.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : o.status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                    >
                    {o.status}
                    </div>

                    <div className="font-semibold mt-1">₹{o.amount}</div>
                </div>
                </div>
            ))}
            </div>

        </div>
        </ProfileLayout>
    );
}
