import { useState, useEffect } from "react";
import http from "../service/http"; // axios wrapper
import Swal from "sweetalert2";

export default function AdminProviders() {
  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  useEffect(() => {
    fetchProviders();
  }, []);

  const fetchProviders = async () => {
    try {
      const res = await http.get("/admin/providers");
      setProviders(res.data.data);
    } catch (error) {
      console.error("Error fetching providers:", error);
    } finally {
      setLoading(false);
    }
  };

  // ⭐ APPROVE PROVIDER
  const approveProvider = async (id) => {
    try {
      await http.post(`/admin/provider/approve/${id}`);
      Swal.fire("Provider Approved Successfully!");
      fetchProviders();
    } catch (error) {
      console.error("Approve Error:", error);
      Swal.fire("Error approving provider.");
    }
  };

  // ⭐ REJECT PROVIDER
  const rejectProvider = async (id) => {
    try {
      await http.post(`/admin/provider/reject/${id}`);
      Swal.fire("Provider Rejected Successfully!");
      fetchProviders();
    } catch (error) {
      console.error("Reject Error:", error);
      Swal.fire("Error rejecting provider.");
    }
  };

  // Dynamic categories from business_name
  const serviceCategories = [...new Set(providers.map((p) => p.business_name))];

  // Apply Filters
  const filteredProviders = providers.filter((p) => {
    const matchesSearch =
      p.user?.name?.toLowerCase().includes(search.toLowerCase()) ||
      p.user?.phone.includes(search);

    const matchesCategory =
      category === "all" ? true : p.business_name === category;

    const matchesStatus =
      status === "all" ? true : p.approved_status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="min-h-screen">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Service Providers
        </h1>
        <p className="text-gray-600">Manage and monitor all service providers</p>
      </div>
       {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-indigo-600 p-5 rounded-2xl text-white">
          <div className="text-sm opacity-90">Total Providers</div>
          <div className="text-3xl font-bold">{providers.length}</div>
        </div>

        <div className="bg-green-600 p-5 rounded-2xl text-white">
          <div className="text-sm opacity-90">Approved</div>
          <div className="text-3xl font-bold">
            {providers.filter((p) => p.approved_status === "approved").length}
          </div>
        </div>

        

        <div className="bg-red-600 p-5 rounded-2xl text-white">
          <div className="text-sm opacity-90">Rejected</div>
          <div className="text-3xl font-bold">
            {providers.filter((p) => p.approved_status === "rejected").length}
          </div>
        </div>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-3 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search by name or phone..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-indigo-500"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Services</option>
            {serviceCategories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Status Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl bg-white focus:ring-2 focus:ring-indigo-500"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

     

      {/* LOADING */}
      {loading && (
        <div className="text-center py-20 text-gray-500 text-lg">
          Loading providers...
        </div>
      )}

      {/* PROVIDERS TABLE */}
      {!loading && (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="p-5 text-left">Provider</th>
                  <th className="p-5 text-left">Business</th>
                  <th className="p-5 text-left">City</th>
                  <th className="p-5 text-left">Phone</th>
                  <th className="p-5 text-left">Experience</th>
                  <th className="p-5 text-left">Status</th>
                  <th className="p-5 text-left">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {filteredProviders.map((p) => (
                  <tr key={p.id} className="hover:bg-indigo-50 transition">
                    {/* Provider */}
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                          {p.user.name.charAt(0)}
                        </div>
                        <div className="font-semibold text-gray-800">
                          {p.user.name}
                        </div>
                      </div>
                    </td>

                    {/* Business */}
                    <td className="p-5">{p.business_name}</td>

                    {/* City */}
                    <td className="p-5">{p.city}</td>

                    {/* Phone */}
                    <td className="p-5">{p.user.phone}</td>

                    {/* Experience */}
                    <td className="p-5">{p.experience_years} yrs</td>

                    {/* Status */}
                    <td className="p-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          p.approved_status === "approved"
                            ? "bg-green-100 text-green-700"
                            : p.approved_status === "pending"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {p.approved_status}
                      </span>
                    </td>

                    {/* ACTION BUTTONS */}
                    <td className="p-5 flex gap-2">
                      {/* Approve */}
                      {p.approved_status !== "approved" && (
                        <button
                          onClick={() => approveProvider(p.id)}
                          className="px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
                        >
                          Approve
                        </button>
                      )}

                      {/* Reject */}
                      {p.approved_status !== "rejected" && (
                        <button
                          onClick={() => rejectProvider(p.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
                        >
                          Reject
                        </button>
                      )}

                      {/* View Details */}
                      {/* <button className="px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700">
                        View Details
                      </button> */}
                    </td>
                  </tr>
                ))}

                {filteredProviders.length === 0 && (
                  <tr>
                    <td colSpan="7" className="p-12 text-center text-gray-400">
                      No providers found
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
