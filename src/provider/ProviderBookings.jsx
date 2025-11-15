import { useState } from "react";

export default function ProviderBookings() {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("all");

  const bookings = [
    {
      id: "BK001",
      customer: "Rahul Sharma",
      service: "Electrician",
      phone: "9876543210",
      date: "2025-02-10",
      status: "pending",
      amount: "£40"
    },
    {
      id: "BK002",
      customer: "Amit Verma",
      service: "Plumber",
      phone: "9955443322",
      date: "2025-02-12",
      status: "confirmed",
      amount: "£55"
    },
    {
      id: "BK003",
      customer: "Simran Kaur",
      service: "Carpenter",
      phone: "9988776655",
      date: "2025-02-12",
      status: "cancelled",
      amount: "£35"
    },
    {
      id: "BK004",
      customer: "Rohan Gupta",
      service: "Electrician",
      phone: "9777755544",
      date: "2025-02-09",
      status: "confirmed",
      amount: "£50"
    },
  ];

  const filteredData = bookings.filter((b) => {
    const matchesSearch =
      b.customer.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    const matchesDate = date ? b.date === date : true;
    const matchesStatus = status === "all" ? true : b.status === status;
    return matchesSearch && matchesDate && matchesStatus;
  });

  const statusConfig = {
    pending: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200", dot: "bg-yellow-500" },
    confirmed: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", dot: "bg-green-500" },
    cancelled: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", dot: "bg-red-500" }
  };

  const serviceIcons = {
    Electrician: "⚡",
    Plumber: "🔧",
    Carpenter: "🪚"
  };

  return (
    <div className="min-h-screen ">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Bookings Management</h1>
        <p className="text-gray-600">Track and manage all service bookings</p>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by ID, name or phone..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Date Filter */}
          <div className="relative">
            <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input
              type="date"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Bookings</div>
          <div className="text-3xl font-bold">{bookings.length}</div>
        </div>
        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Pending</div>
          <div className="text-3xl font-bold">{bookings.filter(b => b.status === 'pending').length}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Confirmed</div>
          <div className="text-3xl font-bold">{bookings.filter(b => b.status === 'confirmed').length}</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Cancelled</div>
          <div className="text-3xl font-bold">{bookings.filter(b => b.status === 'cancelled').length}</div>
        </div>
      </div>

      {/* BOOKINGS TABLE */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Booking ID</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Service</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Date</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredData.map((b) => (
                <tr key={b.id} className="hover:bg-indigo-50 transition-colors duration-150">
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                        #
                      </div>
                      <span className="font-semibold text-gray-800">{b.id}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div>
                      <div className="font-semibold text-gray-800">{b.customer}</div>
                      <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        {b.phone}
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{serviceIcons[b.service]}</span>
                      <span className="text-gray-700">{b.service}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="text-gray-700">{b.date}</div>
                  </td>
                  <td className="p-5">
                    <div className="font-semibold text-gray-800">{b.amount}</div>
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${statusConfig[b.status].bg} ${statusConfig[b.status].text} border ${statusConfig[b.status].border}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${statusConfig[b.status].dot}`}></span>
                      {b.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <button className="px-4 py-2 text-sm font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-12 text-center">
                    <div className="text-gray-400 text-lg">No bookings found</div>
                    <div className="text-gray-500 text-sm mt-2">Try adjusting your search criteria</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
