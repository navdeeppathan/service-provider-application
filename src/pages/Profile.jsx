import React, { useState } from "react";
import {  Link } from "react-router-dom";
import Header from "../utils/Header";
import ProfileLayout from "../layouts/ProfileLayout";

const Profile = () => {
  const [preferences, setPreferences] = useState({
    orders: true,
    promotions: false,
    newsletter: true,
  });

  const togglePref = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };
    return (
        <div className="min-h-screen bg-gray-50">
        <Header />
                    <ProfileLayout active="dashboard">

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="lg:col-span-3 space-y-6 mt-6 lg:mt-0">

            <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>

            {/* PERSONAL INFORMATION */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { label: "First Name", value: "Sarah" },
                    { label: "Last Name", value: "Anderson" },
                    { label: "Email", value: "sarah@example.com", type: "email" },
                    { label: "Phone", value: "+1 (555) 123-4567" },
                ].map((field, index) => (
                    <div key={index}>
                    <label className="text-sm font-semibold">{field.label}</label>
                    <input
                        type={field.type || "text"}
                        defaultValue={field.value}
                        className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200 outline-none"
                    />
                    </div>
                ))}
                </div>

                <button className="mt-4 bg-[#3b82f6] text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700">
                Save Changes
                </button>
            </div>

            {/* EMAIL PREFERENCES */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Email Preferences</h2>
                <div className="space-y-4">
                {[
                    { key: "orders", label: "Order Updates" },
                    { key: "promotions", label: "Promotions" },
                    { key: "newsletter", label: "Newsletter" },
                ].map((item) => (
                    <div
                    key={item.key}
                    className="flex justify-between items-center border-b pb-3"
                    >
                    <div>
                        <h4 className="font-medium">{item.label}</h4>
                        <p className="text-sm text-gray-500">
                        Notifications for {item.label.toLowerCase()}
                        </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                        type="checkbox"
                        checked={preferences[item.key]}
                        onChange={() => togglePref(item.key)}
                        className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#3b82f6] transition-all"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                    </label>
                    </div>
                ))}
                </div>
            </div>

            {/* SECURITY */}
            <div className="bg-white shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Security</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Current Password */}
                <div>
                    <label className="text-sm font-semibold">Current Password</label>
                    <input
                    type="password"
                    className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div></div>

                <div>
                    <label className="text-sm font-semibold">New Password</label>
                    <input
                    type="password"
                    className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
                    />
                </div>

                <div>
                    <label className="text-sm font-semibold">Confirm Password</label>
                    <input
                    type="password"
                    className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
                    />
                </div>
                </div>

                <button className="mt-4 bg-[#3b82f6] text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
                Update Password
                </button>
            </div>

            {/* DELETE ACCOUNT */}
            <div className="bg-red-50 border border-red-200 shadow rounded-xl p-6">
                <h2 className="text-xl font-semibold text-red-700 mb-2">
                Delete Account
                </h2>
                <p className="text-gray-700 mb-4">
                This action is permanent. All bookings, saved locations, and account
                data will be deleted.
                </p>
                <button className="bg-red-600 text-white px-6 py-2 rounded-lg shadow hover:bg-red-700">
                Permanently Delete Account
                </button>
            </div>

            </main>
                    </ProfileLayout>
        </div>
    );
};

export default Profile;
