import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../utils/Header";
import { Link } from "react-router-dom";

const Profile = () => {
    const [preferences, setPreferences] = useState({
        orders: true,
        promotions: false,
        newsletter: true,
    });

    const location = useLocation();

    const togglePref = (key) => {
        setPreferences({ ...preferences, [key]: !preferences[key] });
    };

    const menu = [
        { path: "/profile/orders", icon: "bi-bag", label: "My Orders" },
        { path: "/profile/wishlist", icon: "bi-heart", label: "Wishlist" },
        { path: "/profile/payments", icon: "bi-credit-card", label: "Payment Methods" },
        { path: "/profile/reviews", icon: "bi-chat-square-text", label: "My Reviews" },
        { path: "/profile/addresses", icon: "bi-geo-alt", label: "Addresses" },
        { path: "/profile", icon: "bi-person-lines-fill", label: "Account Settings", active: true },
        { path: "/profile/help", icon: "bi-question-circle", label: "Help Center" }
    ];

    return (
        <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 mt-20">

            {/* ---------------- SIDEBAR ---------------- */}
            <aside className="bg-white shadow rounded-xl p-6 h-fit">
                <div className="flex flex-col items-center">
                    <div className="relative">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        className="w-24 h-24 rounded-full shadow object-cover"
                        alt="profile"
                    />

                    {/* Upload Button */}
                    <button className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center bg-[#3b82f6] text-white text-sm rounded-full shadow hover:bg-blue-600">
                        <i className="bi bi-camera-fill"></i>
                    </button>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold">Sarah Anderson</h3>
                    <span className="text-sm bg-[#3b82f6] text-white px-3 py-1 rounded-full mt-2">
                    Premium Member
                    </span>
                </div>

                <div className="mt-8 space-y-2">
                    {menu.map((item, index) => (
                        <Link
                        key={index}
                        to={item.path}
                        className={`w-full block text-left px-4 py-3 rounded-lg flex items-center gap-2 transition
                            ${
                            location.pathname === item.path
                                ? "bg-[#3b82f6] text-white shadow"
                                : "hover:bg-gray-100"
                            }
                        `}
                        >
                        <i className={`bi ${item.icon}`}></i> {item.label}
                        </Link>
                    ))}

                    <button className="w-full text-left px-4 py-3 text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-2 mt-3">
                        <i className="bi bi-box-arrow-right"></i> Log Out
                    </button>
                </div>
            </aside>

            {/* ---------------- MAIN CONTENT ---------------- */}
            <main className="lg:col-span-3 space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>

            {/* PERSONAL INFO */}
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
        </div>
        </div>
    );
};

export default Profile;
