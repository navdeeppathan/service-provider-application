import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";

export default function Reviews() {
    const reviews = [
        { id: 1, service: "AC Service", rating: 5, text: "Quick and professional" },
        { id: 2, service: "Home Cleaning", rating: 4, text: "Good job" }
    ];

    return (
        <ProfileLayout active="reviews">
        <div className="bg-white p-6 rounded-xl shadow mt-20">

            {/* PAGE TITLE */}
            <h2 className="text-2xl font-semibold mb-4">My Reviews</h2>

            <div className="space-y-4">
            {reviews.map((r) => (
                <div
                key={r.id}
                className="p-4 border rounded-lg"
                >
                {/* TOP ROW */}
                <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">{r.service}</div>

                    {/* STARS */}
                    <div className="text-sm text-yellow-500">
                    {Array(r.rating).fill("★").join("")}
                    </div>
                </div>

                {/* REVIEW TEXT */}
                <div className="text-sm text-gray-700">{r.text}</div>
                </div>
            ))}
            </div>

        </div>
        </ProfileLayout>
    );
}
