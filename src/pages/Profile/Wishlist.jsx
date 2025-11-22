import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";

export default function Wishlist() {
  const items = [
    { id: 1, title: "Premium Deep Cleaning", price: 2499 },
    { id: 2, title: "AC Annual Service", price: 1499 },
  ];

  return (
    <ProfileLayout active="wishlist">
      <div className="bg-white p-6 rounded-xl shadow">
        {/* PAGE TITLE */}
        <h2 className="text-xl font-medium mb-4">Wishlist</h2>

        {/* WISHLIST GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((i) => (
            <div
              key={i.id}
              className="border rounded-lg p-4 flex items-center justify-between"
            >
              <div>
                <div className="font-normal text-sm">{i.title}</div>
                <div className="text-sm text-gray-500">Service</div>
              </div>

              <div className="text-right">
                <div className="font-semibold">₹{i.price}</div>
                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileLayout>
  );
}
