




import { useEffect, useState } from "react";
import http from "../service/http"; // your axios instance

export default function AdminBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("all");

  // ================================
  // FETCH BOOKINGS API
  // ================================
  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await http.get("/admin/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setBookings(res.data.data || []);
    } catch (err) {
      console.error("API Error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ================================
  // Filters
  // ================================
  const filteredData = bookings.filter((b) => {
    const matchesSearch =
      b.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      b.user?.phone?.includes(search) ||
      b.id?.toString().includes(search);

    const matchesDate = date ? b.date === date : true;

    const matchesStatus =
      status === "all" ? true : b.booking_status === status;

    return matchesSearch && matchesDate && matchesStatus;
  });
  bookings.filter(b => b.booking_status === 'pending').length
bookings.filter(b => b.booking_status === 'accepted').length
bookings.filter(b => b.booking_status === 'completed').length
bookings.filter(b => b.booking_status === 'cancelled').length


  // ================================
  // STATUS UI CONFIG
  // ================================
  const statusConfig = {
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      border: "border-yellow-200",
      dot: "bg-yellow-500",
    },
    accepted: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      border: "border-blue-200",
      dot: "bg-blue-500",
    },
    completed: {
      bg: "bg-green-100",
      text: "text-green-700",
      border: "border-green-200",
      dot: "bg-green-500",
    },
    cancelled: {
      bg: "bg-red-100",
      text: "text-red-700",
      border: "border-red-200",
      dot: "bg-red-500",
    },
  };

  // Icons by service
  const serviceIcons = {
    "AC Service": "❄️",
    "Fan Repair": "🌀",
    "Full Kitchen Deep Cleaning": "🍽️",
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Bookings Management
        </h1>
        <p className="text-gray-600">
          Track and manage all service bookings
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg text-white">
    <div className="text-sm opacity-90 mb-1">Total Bookings</div>
    <div className="text-3xl font-bold">{bookings.length}</div>
  </div>

  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-5 rounded-2xl shadow-lg text-white">
    <div className="text-sm opacity-90 mb-1">Pending</div>
    <div className="text-3xl font-bold">
      {bookings.filter(b => b.booking_status === "pending").length}
    </div>
  </div>

  <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg text-white">
    <div className="text-sm opacity-90 mb-1">Completed</div>
    <div className="text-3xl font-bold">
      {bookings.filter(b => b.booking_status === "completed").length}
    </div>
  </div>

  <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg text-white">
    <div className="text-sm opacity-90 mb-1">Cancelled</div>
    <div className="text-3xl font-bold">
      {bookings.filter(b => b.booking_status === "cancelled").length}
    </div>
  </div>
</div>



      {/* FILTERS */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by ID, name or phone..."
              className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Date */}
          <div className="relative">
            <input
              type="date"
              className="w-full pl-4 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Status */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

     

      {/* LOADER */}
      {loading && (
        <div className="text-center py-20 text-lg text-gray-500">
          Loading bookings...
        </div>
      )}

      {/* BOOKINGS TABLE */}
      {!loading && (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <th className="p-5 text-left">ID</th>
                  <th className="p-5 text-left">Customer</th>
                  <th className="p-5 text-left">Service</th>
                  <th className="p-5 text-left">Date</th>
                  <th className="p-5 text-left">Amount</th>
                  <th className="p-5 text-left">Status</th>
                  <th className="p-5 text-left">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredData.map((b) => (
                  <tr key={b.id} className="hover:bg-indigo-50 transition">
                    <td className="p-5 font-semibold text-gray-800">
                      #{b.id}
                    </td>

                    <td className="p-5">
                      <div className="font-semibold text-gray-800">
                        {b.user?.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        📞 {b.user?.phone}
                      </div>
                    </td>

                    <td className="p-5 flex items-center gap-2">
                      <span className="text-xl">
                        {serviceIcons[b.service?.name] || "🛠️"}
                      </span>
                      {b.service?.name}
                    </td>

                    <td className="p-5">{b.date}</td>

                    <td className="p-5 font-semibold text-gray-800">
                      ₹{b.amount}
                    </td>

                    <td className="p-5">
                      <span
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border 
                          ${statusConfig[b.booking_status]?.bg}
                          ${statusConfig[b.booking_status]?.text}
                          ${statusConfig[b.booking_status]?.border}`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full mr-2 ${statusConfig[b.booking_status]?.dot}`}
                        ></span>
                        {b.booking_status}
                      </span>
                    </td>

                    <td className="p-5">
                      <button className="px-4 py-2 text-sm font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition">
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredData.length === 0 && (
                  <tr>
                    <td colSpan="7" className="p-12 text-center">
                      <div className="text-gray-400 text-lg">
                        No bookings found
                      </div>
                      <div className="text-gray-500 text-sm">
                        Try adjusting your search or filters
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
