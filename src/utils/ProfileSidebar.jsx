import React from 'react';

export default function ProfileSidebar({ active = 'account' }) {
    return (
        <aside className="bg-white shadow rounded-xl p-6 h-fit">

        {/* USER INFO */}
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
            <nav className="mt-8 space-y-2">

                <a
                href="/profile/orders"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'orders' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-bag"></i> My Orders
                </a>

                <a
                href="/profile/wishlist"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'wishlist' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-heart"></i> Wishlist
                </a>

                <a
                href="/profile/payments"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'payments' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-credit-card"></i> Payment Methods
                </a>

                <a
                href="/profile/reviews"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'reviews' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-chat-square-text"></i> My Reviews
                </a>

                <a
                href="/profile/addresses"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'addresses' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-geo-alt"></i> Addresses
                </a>

                <a
                href="/profile"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'account' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-person-lines-fill"></i> Account Settings
                </a>

                <a
                href="/profile/help"
                className={`flex items-center gap-2 px-4 py-3 rounded-lg 
                ${active === 'help' ? 'bg-[#3b82f6] text-white shadow' : 'hover:bg-gray-100'}`}
                >
                <i className="bi bi-question-circle"></i> Help Center
                </a>

                {/* LOGOUT */}
                <div className="mt-4 border-t pt-4">
                <button className="w-full flex items-center gap-2 px-4 py-3 text-red-600 rounded-lg hover:bg-red-50">
                    <i className="bi bi-box-arrow-right"></i> Log Out
                </button>
                </div>

            </nav>
        </aside>
    );
}
