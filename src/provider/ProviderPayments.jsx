import { useState } from "react";

export default function ProviderPayments() {
  const [method, setMethod] = useState("");
  const [search, setSearch] = useState("");

  const payments = [
    { id: 1, user: "John Doe", amount: "£40", method: "Card", date: "2025-02-10", status: "completed" },
    { id: 2, user: "Priya Sharma", amount: "£20", method: "UPI", date: "2025-02-11", status: "completed" },
    { id: 3, user: "Aman Verma", amount: "£35", method: "Card", date: "2025-02-09", status: "pending" },
    { id: 4, user: "Ravi Kumar", amount: "£50", method: "Cash", date: "2025-02-12", status: "completed" },
    { id: 5, user: "Simran Kaur", amount: "£28", method: "UPI", date: "2025-02-13", status: "completed" },
    { id: 6, user: "Michael Smith", amount: "£60", method: "Card", date: "2025-02-14", status: "pending" },
  ];

  const filtered = payments.filter((p) => {
    const matchesMethod = method ? p.method === method : true;
    const matchesSearch = search ? 
      p.user.toLowerCase().includes(search.toLowerCase()) ||
      p.id.toString().includes(search) : true;
    return matchesMethod && matchesSearch;
  });

  const totalAmount = filtered.reduce((sum, p) => sum + parseFloat(p.amount.replace('£', '')), 0);

  const methodColors = {
    Card: "from-blue-500 to-blue-600",
    UPI: "from-purple-500 to-purple-600",
    Cash: "from-green-500 to-green-600"
  };

  const methodIcons = {
    Card: "💳",
    UPI: "📱",
    Cash: "💵"
  };

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Payments Overview</h1>
        <p className="text-gray-600">Track and manage all payment transactions</p>
      </div>

      {/* FILTERS */}
      <div className="bg-white p-5 rounded-2xl shadow-lg mb-6 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search by user name or ID..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Method Filter */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition bg-white"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            <option value="">All Payment Methods</option>
            <option value="Card">💳 Card</option>
            <option value="UPI">📱 UPI</option>
            <option value="Cash">💵 Cash</option>
          </select>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Payments</div>
          <div className="text-3xl font-bold">{filtered.length}</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Total Revenue</div>
          <div className="text-3xl font-bold">£{totalAmount.toFixed(2)}</div>
        </div>
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Completed</div>
          <div className="text-3xl font-bold">{payments.filter(p => p.status === 'completed').length}</div>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-red-600 p-5 rounded-2xl shadow-lg text-white">
          <div className="text-sm opacity-90 mb-1">Pending</div>
          <div className="text-3xl font-bold">{payments.filter(p => p.status === 'pending').length}</div>
        </div>
      </div>

      {/* PAYMENT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Card Header with Gradient */}
            <div className={`bg-gradient-to-r ${methodColors[p.method]} p-4 text-white`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <div className="text-xs opacity-80 mb-1">Payment ID</div>
                  <div className="font-semibold">#{p.id.toString().padStart(4, '0')}</div>
                </div>
                <div className="text-3xl">{methodIcons[p.method]}</div>
              </div>
              <div className="text-2xl font-bold">{p.amount}</div>
            </div>

            {/* Card Body */}
            <div className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white font-semibold">
                  {p.user.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{p.user}</div>
                  <div className="text-xs text-gray-500">{p.date}</div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    p.status === 'completed' 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                  }`}>
                    <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1 ${
                      p.status === 'completed' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></span>
                    {p.status}
                  </span>
                </div>

                <button className="px-3 py-1.5 text-xs font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4 opacity-20">💳</div>
            <div className="text-gray-400 text-lg">No payments found</div>
            <div className="text-gray-500 text-sm mt-2">Try adjusting your search criteria</div>
          </div>
        )}
      </div>
    </div>
  );
}