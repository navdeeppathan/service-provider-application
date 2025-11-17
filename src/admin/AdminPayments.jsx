import React, { useEffect, useState } from "react";
import http from "../service/http"; // your axios instance

export default function AdminPayments() {
  const [payments, setPayments] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // Fetch Payments From API
  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = () => {
    http
      .get("/admin/payments")
      .then((res) => {
        setPayments(res.data.data);
        setFiltered(res.data.data);
      })
      .catch((err) => console.log("Error fetching payments:", err));
  };

  // Filters
  useEffect(() => {
    applyFilters();
  }, [search, status]);

  const applyFilters = () => {
    let data = [...payments];

    // STATUS FILTER
    if (status !== "") {
      data = data.filter((p) => p.status === status);
    }

    // SEARCH FILTER
    if (search.trim() !== "") {
      data = data.filter(
        (p) =>
          p.user?.name.toLowerCase().includes(search.toLowerCase()) ||
          p.provider?.business_name
            ?.toLowerCase()
            .includes(search.toLowerCase()) ||
          p.id.toString().includes(search)
      );
    }

    setFiltered(data);
  };

  // Counters
  const totalAmount = filtered.reduce(
    (sum, p) => sum + parseFloat(p.amount || 0),
    0
  );
  const totalCommission = filtered.reduce(
    (sum, p) => sum + parseFloat(p.commission || 0),
    0
  );

  return (
    <div className="min-h-screen p-6">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Payments Overview
        </h1>
        <p className="text-gray-600">
          Track and manage all payment transactions
        </p>
      </div>

      

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Payments</div>
          <div className="text-3xl font-bold">{filtered.length}</div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Revenue</div>
          <div className="text-3xl font-bold">₹{totalAmount.toFixed(2)}</div>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Commission Earned</div>
          <div className="text-3xl font-bold">₹{totalCommission.toFixed(2)}</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Success</div>
          <div className="text-3xl font-bold">
            {payments.filter((p) => p.status === "success").length}
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by user, provider, or payment ID..."
              className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {/* PAYMENT CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {/* HEADER */}
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-4 text-white">
              <div className="text-xs opacity-80">Payment ID</div>
              <div className="font-semibold text-lg">
                #{p.id.toString().padStart(4, "0")}
              </div>
              <div className="text-xl font-bold mt-2">₹{p.amount}</div>
            </div>

            {/* BODY */}
            <div className="p-4">
              {/* USER */}
              <div className="mb-3">
                <div className="font-semibold text-gray-800">
                  User: {p.user?.name}
                </div>
                <div className="text-xs text-gray-500">
                  Phone: {p.user?.phone}
                </div>
              </div>

              {/* PROVIDER */}
              <div className="mb-3">
                <div className="font-semibold text-gray-800">
                  Provider: {p.provider?.business_name}
                </div>
                <div className="text-xs text-gray-500">
                  City: {p.provider?.city}
                </div>
              </div>

              {/* BOOKING */}
              <div className="mb-3">
                <div className="font-semibold text-gray-800">
                  Booking: #{p.booking_id}
                </div>
                <div className="text-xs text-gray-500">
                  {p.booking?.date} • {p.booking?.time}
                </div>
              </div>

              {/* STATUS */}
              <div className="flex justify-between items-center pt-2 border-t">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    p.status === "success"
                      ? "bg-green-100 text-green-700"
                      : p.status === "pending"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {p.status}
                </span>

                <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full py-16 text-center text-gray-500">
            No payments found
          </div>
        )}
      </div>
    </div>
  );
}
