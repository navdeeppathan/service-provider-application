import React from "react";

export const Sidebar = ({ active = "account" }) => {
  return (
    <aside className="bg-white shadow rounded-xl p-6 h-fit">

      {/* USER PROFILE */}
      <div className="flex flex-col items-center">
        <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-24 h-24 rounded-full shadow object-cover"
            alt="profile"
        />
        <h3 className="mt-4 text-lg font-semibold">Rohit Sharma</h3>
        <span className="text-sm bg-[#3b82f6] text-white px-3 py-1 rounded-full mt-2">
          Member
        </span>
      </div>

      {/* MENU */}
      <div className="mt-8 space-y-2">
        {/* My Orders */}
        <a
          href="/profile/orders"
          className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
            active === "orders"
              ? "bg-[#3b82f6] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <i className="bi bi-bag"></i> My Orders
        </a>

        {/* Wishlist */}
        <a
          href="/profile/wishlist"
          className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
            active === "wishlist"
              ? "bg-[#3b82f6] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <i className="bi bi-heart"></i> Wishlist
        </a>

        {/* Payment Methods */}
        <a
          href="/profile/payments"
          className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
            active === "payments"
              ? "bg-[#3b82f6] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <i className="bi bi-credit-card"></i> Payment Methods
        </a>

        {/* My Reviews */}
        <a
          href="/profile/reviews"
          className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
            active === "reviews"
              ? "bg-[#3b82f6] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <i className="bi bi-chat-square-text"></i> My Reviews
        </a>

        {/* Addresses */}
        <a
          href="/profile/addresses"
          className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
            active === "addresses"
              ? "bg-[#3b82f6] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <i className="bi bi-geo-alt"></i> Addresses
        </a>

        {/* Account Settings */}
        <a
          href="/profile"
          className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
            active === "account"
              ? "bg-[#3b82f6] text-white shadow"
              : "hover:bg-gray-100"
          }`}
        >
          <i className="bi bi-person-lines-fill"></i> Account Settings
        </a>
      </div>

        {/* FOOTER LINKS */}
        <div className="mt-6 border-t pt-4">
            {/* Help Center */}
            <a
            href="/profile/help"
            className={`block px-4 py-3 rounded-lg flex items-center gap-2 ${
                active === "help"
                ? "bg-[#3b82f6] text-white shadow"
                : "hover:bg-gray-100"
            }`}
            >
            <i className="bi bi-question-circle"></i> Help Center
            </a>

            {/* Logout */}
            <button className="w-full text-left px-4 py-3 mt-2 text-red-600 rounded-lg hover:bg-red-50 flex items-center gap-2">
            <i className="bi bi-box-arrow-right"></i> Log Out
            </button>
        </div>

    </aside>
  );
};
