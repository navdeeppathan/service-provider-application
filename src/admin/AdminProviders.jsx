import { useState } from "react";

export default function AdminProviders() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [status, setStatus] = useState("all");

  const providers = [
    {
      id: 1,
      name: "Rahul Kumar",
      service: "Electrician",
      phone: "9876543210",
      status: "active",
      rating: 4.8,
      jobs: 45
    },
    {
      id: 2,
      name: "Vijay Singh",
      service: "Plumber",
      phone: "8899776655",
      status: "inactive",
      rating: 4.5,
      jobs: 32
    },
    {
      id: 3,
      name: "Aman Yadav",
      service: "Carpenter",
      phone: "9988776655",
      status: "active",
      rating: 4.9,
      jobs: 58
    },
    {
      id: 4,
      name: "Rohit Verma",
      service: "Electrician",
      phone: "9911223344",
      status: "inactive",
      rating: 4.3,
      jobs: 28
    },
  ];

  const filteredProviders = providers.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.phone.includes(search.toLowerCase());
    const matchesCategory = category === "all" ? true : p.service === category;
    const matchesStatus = status === "all" ? true : p.status === status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const serviceIcons = {
    Electrician: "⚡",
    Plumber: "🔧",
    Carpenter: "🪚"
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Service Providers</h1>
        <p className="text-gray-600">Manage and monitor all service providers</p>
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
              placeholder="Search by name or phone..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Services</option>
            <option value="Electrician">⚡ Electrician</option>
            <option value="Plumber">🔧 Plumber</option>
            <option value="Carpenter">🪚 Carpenter</option>
          </select>

          {/* Status Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Providers</div>
          <div className="text-3xl font-bold">{providers.length}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Active</div>
          <div className="text-3xl font-bold">{providers.filter(p => p.status === 'active').length}</div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Avg Rating</div>
          <div className="text-3xl font-bold">4.6</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Jobs</div>
          <div className="text-3xl font-bold">{providers.reduce((sum, p) => sum + p.jobs, 0)}</div>
        </div>
      </div>

      {/* PROVIDERS TABLE */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Provider</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Service</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Contact</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Rating</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Jobs</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredProviders.map((provider) => (
                <tr key={provider.id} className="hover:bg-indigo-50 transition-colors duration-150">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-semibold">
                        {provider.name.charAt(0)}
                      </div>
                      <div className="font-semibold text-gray-800">{provider.name}</div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{serviceIcons[provider.service]}</span>
                      <span className="text-gray-700">{provider.service}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="text-gray-600">{provider.phone}</div>
                  </td>
                  <td className="p-5">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold text-gray-800">{provider.rating}</span>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="text-gray-700 font-medium">{provider.jobs}</div>
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                        provider.status === "active"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        provider.status === "active" ? "bg-green-500" : "bg-red-500"
                      }`}></span>
                      {provider.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <button className="px-4 py-2 text-sm font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}

              {filteredProviders.length === 0 && (
                <tr>
                  <td colSpan="7" className="p-12 text-center">
                    <div className="text-gray-400 text-lg">No providers found</div>
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