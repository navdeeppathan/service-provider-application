import React from "react";

export default function Header() {
  return (
    <div className="w-full flex justify-center">
      {/* centered fixed-width container */}
      <div className="w-full max-w-md bg-[#e7f0ff] rounded-b-3xl p-4 shadow-sm flex flex-col gap-4">
        {/* Profile Row */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/avatar_circle_blue_512dp.png"
              alt="profile"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="leading-tight">
              <h2 className="text-[17px] font-semibold text-black">
                Muhammad Farhan
              </h2>
              <p className="text-[13px] text-gray-600">
                Dubai, United Arab Emirates ▼
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-700 text-xl">
            <div className="p-2 bg-white rounded-full shadow-md cursor-pointer">
              <i className="fas fa-cog"></i>
            </div>
            <div className="p-2 bg-white rounded-full shadow-md cursor-pointer">
              <i className="fas fa-bell"></i>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full bg-white rounded-2xl shadow-md flex items-center px-4 py-3 gap-3">
          <i className="fas fa-search text-gray-500 text-lg"></i>
          <input
            type="text"
            placeholder="Search Service..."
            className="flex-grow text-[15px] outline-none text-gray-700"
          />
          <i className="fas fa-sliders-h text-gray-600 text-lg"></i>
        </div>
      </div>
    </div>
  );
}
