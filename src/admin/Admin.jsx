import { useEffect, useState, useRef } from "react";
import http from "../service/http";

export default function Admin() {

 const [stats, setStats] = useState(null); // for API data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await http.get("/admin/dashboard");

      console.log("Dashboard Data:", response.data);
      setStats(response.data);
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className=" min-h-screen">

     <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Schools = Providers */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#EB5757] flex items-center">
          <div className="flex items-center gap-4 w-full">
            <div className="text-[#EB5757] text-4xl">🏫</div>
            <div className="h-10 w-[2px] bg-gray-300"></div>

            <div>
              <p className="text-gray-500 text-sm">Total Providers</p>
              <h2 className="text-xl font-bold">{stats?.approved_providers}</h2>
            </div>
          </div>
        </div>

        {/* Students = Users */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#4F4DBF] flex items-center">
          <div className="flex items-center gap-4">
            <div className="text-[#4F4DBF] text-4xl">👥</div>
            <div className="h-10 w-[2px] bg-gray-300"></div>

            <div>
              <p className="text-gray-500 text-sm">Total Users</p>
              <h2 className="text-xl font-bold">{stats?.total_users}</h2>
            </div>
          </div>
        </div>

        {/* Teachers = Bookings */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#F2C94C] flex items-center">
          <div className="flex items-center gap-4">
            <div className="text-[#F2C94C] text-4xl">👨‍🏫</div>
            <div className="h-10 w-[2px] bg-gray-300"></div>

            <div>
              <p className="text-gray-500 text-sm">Total Bookings</p>
              <h2 className="text-xl font-bold">{stats?.total_bookings}</h2>
            </div>
          </div>
        </div>

        {/* Parents = Payment */}
        <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#27AE60] flex items-center">
          <div className="flex items-center gap-4">
            <div className="text-[#27AE60] text-4xl">👪</div>
            <div className="h-10 w-[2px] bg-gray-300"></div>

            <div>
              <p className="text-gray-500 text-sm">Total Payments</p>
              <h2 className="text-xl font-bold">₹{stats?.total_payments}</h2>
            </div>
          </div>
        </div>

      </div>



      {/* SECOND GRID ROW */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-4 mt-6">

        {/* CALENDAR + ACTIVITIES */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-3">Calendar & Attendance</h2>

          <div className="bg-white rounded-xl border p-4">
            <div className="grid grid-cols-7 text-center font-semibold text-gray-500">
              <span>Sun</span><span>Mon</span><span>Tue</span>
              <span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
            </div>

            <div className="grid grid-cols-7 mt-4 text-center gap-y-2">
              {[...Array(30).keys()].map((d, i) => (
                <span
                  key={i}
                  className={`p-2 rounded-full ${
                    d + 1 === 9
                      ? "bg-green-500 text-white"
                      : d + 1 === 17 || d + 1 === 28
                      ? "bg-green-200 text-green-700"
                      : "text-gray-700"
                  }`}
                >
                  {d + 1}
                </span>
              ))}
            </div>
          </div>

          {/* Activities */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Activities Notification</h3>
            <div className="bg-gray-100 p-3 mt-2 rounded-lg">
              <p className="font-medium">St. Xavier School</p>
              <p className="text-sm text-gray-600">02 Oct, 2019</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (SCHOOL PERFORMANCE + TOP SCORER) */}
        <div className="grid gap-4">

         {/* SCHOOL PERFORMANCE */}
<div className="bg-white p-5 rounded-xl shadow-sm">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold">School Performance</h2>
    <p className="text-sm text-gray-400">Data shown in percentage (%)</p>
  </div>

  <div className="flex">

    {/* LEFT LEGENDS */}
    <div className="w-1/3 space-y-4">
      {/* Govt School */}
      <div className="flex items-start gap-3">
        <div className="w-4 h-4 rounded-full bg-purple-600"></div>
        <div>
          <p className="font-medium text-gray-700">Govt. School</p>
          <p className="text-xs text-gray-400">No. of Students</p>
        </div>
      </div>

      {/* Private School */}
      <div className="flex items-start gap-3">
        <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
        <div>
          <p className="font-medium text-gray-700">Private School</p>
          <p className="text-xs text-gray-400">No. of Students</p>
        </div>
      </div>

      {/* Average School */}
      <div className="flex items-start gap-3">
        <div className="w-4 h-4 rounded-full bg-green-500"></div>
        <div>
          <p className="font-medium text-gray-700">Average School</p>
          <p className="text-xs text-gray-400">No. of Students</p>
        </div>
      </div>
    </div>

    {/* RIGHT BAR CHART */}
    <div className="flex-1 flex items-end gap-8 justify-center h-44">

      {/* Govt Bar */}
      <div className="relative">
        <div className="w-10 h-32 bg-purple-600 rounded-t-xl"></div>
        <div className="absolute top-0 left-0 w-10 h-4 bg-purple-700 rounded-t-xl"></div>
      </div>

      {/* Private Bar */}
      <div className="relative">
        <div className="w-10 h-28 bg-yellow-500 rounded-t-xl"></div>
        <div className="absolute top-0 left-0 w-10 h-4 bg-yellow-600 rounded-t-xl"></div>
      </div>

      {/* Average Bar */}
      <div className="relative">
        <div className="w-10 h-30 bg-green-500 rounded-t-xl"></div>
        <div className="absolute top-0 left-0 w-10 h-4 bg-green-600 rounded-t-xl"></div>
      </div>

    </div>
  </div>
</div>


         {/* TOP SCORER */}
<div className="bg-white p-4 rounded-xl shadow-sm">
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-xl font-semibold">Top Scorer</h2>
    <p className="text-sm font-medium">2023 - 2024 ▼</p>
  </div>

  <div className="grid grid-cols-3 gap-4">

    {/* 1st Rank */}
    <div className="bg-green-500 rounded-2xl p-4 text-white text-center">
      <img
        src="https://i.pravatar.cc/80?img=5"
        alt="profile"
        className="w-14 h-14 rounded-full mx-auto border-4 border-green-300"
      />
      <h3 className="mt-2 font-semibold text-lg">Branden Harris</h3>
      <p className="text-xs opacity-80">St. Xavier School</p>

      <h1 className="text-3xl font-extrabold mt-3">99.90%</h1>

      <div className="mt-3 bg-green-300 text-green-900 py-1 rounded-lg font-semibold">
        1st
      </div>
    </div>

    {/* 2nd Rank */}
    <div className="bg-purple-500 rounded-2xl p-4 text-white text-center">
      <img
        src="https://i.pravatar.cc/80?img=12"
        alt="profile"
        className="w-14 h-14 rounded-full mx-auto border-4 border-purple-300"
      />
      <h3 className="mt-2 font-semibold text-lg">Charles James</h3>
      <p className="text-xs opacity-80">Faldo School</p>

      <h1 className="text-3xl font-extrabold mt-3">99.76%</h1>

      <div className="mt-3 bg-purple-300 text-purple-900 py-1 rounded-lg font-semibold">
        2nd
      </div>
    </div>

    {/* 3rd Rank */}
    <div className="bg-yellow-500 rounded-2xl p-4 text-white text-center">
      <img
        src="https://i.pravatar.cc/80?img=20"
        alt="profile"
        className="w-14 h-14 rounded-full mx-auto border-4 border-yellow-300"
      />
      <h3 className="mt-2 font-semibold text-lg">Mikeler Pater</h3>
      <p className="text-xs opacity-80">Green School</p>

      <h1 className="text-3xl font-extrabold mt-3">99.50%</h1>

      <div className="mt-3 bg-yellow-300 text-yellow-900 py-1 rounded-lg font-semibold">
        3rd
      </div>
    </div>

  </div>
</div>


        </div>
      </div>

    </div>
  );
}

