import { useState } from "react";

export default function ProviderUsers() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const users = [
    { id: 1, name: "Tarun Birla", email: "tarun@gmail.com", status: "active", joinDate: "2024-12-15" },
    { id: 2, name: "Ravi Singh", email: "ravi@gmail.com", status: "inactive", joinDate: "2024-11-20" },
    { id: 3, name: "Kunal Mehta", email: "kunal@gmail.com", status: "active", joinDate: "2025-01-05" },
    { id: 4, name: "Aayush Verma", email: "aayush@gmail.com", status: "inactive", joinDate: "2024-10-10" },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ? true : user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Users Management</h1>
        <p className="text-gray-600">Manage and monitor all registered users</p>
      </div>

     

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Users</div>
          <div className="text-3xl font-bold">{users.length}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Active Users</div>
          <div className="text-3xl font-bold">{users.filter(u => u.status === 'active').length}</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Inactive Users</div>
          <div className="text-3xl font-bold">{users.filter(u => u.status === 'inactive').length}</div>
        </div>
      </div>
       {/* FILTERS */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-gray-100">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Status Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* USER TABLE */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">User</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Contact</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Join Date</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="text-left p-5 text-sm font-semibold text-gray-700 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-indigo-50 transition-colors duration-150">
                  <td className="p-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-semibold">
                        {user.name.charAt(0)}
                      </div>
                      <div className="font-semibold text-gray-800">{user.name}</div>
                    </div>
                  </td>
                  <td className="p-5">
                    <div className="text-gray-600">{user.email}</div>
                  </td>
                  <td className="p-5">
                    <div className="text-gray-600">{user.joinDate}</div>
                  </td>
                  <td className="p-5">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                        user.status === "active"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-red-100 text-red-700 border border-red-200"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        user.status === "active" ? "bg-green-500" : "bg-red-500"
                      }`}></span>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <button className="px-4 py-2 text-sm font-medium rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td colSpan="5" className="p-12 text-center">
                    <div className="text-gray-400 text-lg">No users found</div>
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