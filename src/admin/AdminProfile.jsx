import { useEffect, useState } from "react";

export default function AdminProfile() {
  return (
    <div className="">

      {/* --------- TOP GRID --------- */}
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-4">

        {/* PROFILE CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/120?img=12"
              className="w-20 h-20 rounded-full border-4 border-blue-200 shadow-sm"
            />
            <div>
              <h2 className="text-xl font-semibold">John Carter</h2>
              <p className="text-sm text-gray-500">Senior Service Provider</p>
              <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full mt-2 inline-block">
                Active Provider
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 text-center mt-6">
            <div>
              <h3 className="text-lg font-bold text-gray-700">152</h3>
              <p className="text-xs text-gray-500">Bookings</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">4.9</h3>
              <p className="text-xs text-gray-500">Rating</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-700">6 yrs</h3>
              <p className="text-xs text-gray-500">Experience</p>
            </div>
          </div>
        </div>

        {/* CONTACT CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700 mb-3">Contact</h3>
          <p className="text-sm text-gray-600 mb-1">
            📞 +91 9876543210
          </p>
          <p className="text-sm text-gray-600 mb-1">
            ✉️ john@example.com
          </p>
          <p className="text-sm text-gray-600">
            📍 Mumbai, India
          </p>
        </div>

        {/* SERVICES CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700 mb-3">Services</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">Electrician</span>
            <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">Plumber</span>
            <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">AC Repair</span>
            <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">Home Service</span>
          </div>
        </div>

        {/* COMPLETION CARD */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700">Performance</h3>

          <div className="w-full bg-gray-100 rounded-full h-3 mt-3">
            <div className="bg-blue-500 h-3 rounded-full" style={{ width: "86%" }}></div>
          </div>

          <p className="text-sm text-gray-500 mt-2">Job Completion: <b>86%</b></p>
        </div>

      </div>

      {/* --------- BOTTOM GRID --------- */}
      <div className="grid grid-cols-1 md:grid-cols-[2.1fr_1fr] gap-4 mt-4">

        {/* ABOUT SECTION */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700 mb-3">About Provider</h3>
          <p className="text-gray-600 text-sm leading-6">
            John Carter is a highly experienced service provider with 6+ years in
            home maintenance & appliance repair. Known for his punctuality,
            clean work process, and excellent customer reviews.
          </p>
        </div>

        {/* AVAILABILITY */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-700 mb-3">Availability</h3>
          <p className="text-sm text-gray-600">Mon – Fri: 9 AM – 7 PM</p>
          <p className="text-sm text-gray-600">Sat: 10 AM – 5 PM</p>
          <p className="text-sm text-gray-600">Sun: Off</p>
        </div>

      </div>

    </div>
  );
}
