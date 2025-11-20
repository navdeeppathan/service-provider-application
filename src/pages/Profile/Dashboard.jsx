import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';


export default function Dashboard(){
return (
<ProfileLayout active="dashboard">
<div className="bg-white p-6 rounded-xl shadow mt-20 ">
<h2 className="text-2xl font-semibold mb-4">Welcome back, Rohit</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="p-4 rounded-lg border text-center">
<div className="text-sm text-gray-500">Upcoming Bookings</div>
<div className="text-xl font-bold mt-2">2</div>
</div>
<div className="p-4 rounded-lg border text-center">
<div className="text-sm text-gray-500">Total Orders</div>
<div className="text-xl font-bold mt-2">45</div>
</div>
<div className="p-4 rounded-lg border text-center">
<div className="text-sm text-gray-500">Saved Addresses</div>
<div className="text-xl font-bold mt-2">3</div>
</div>
</div>


<div className="mt-6">
<h3 className="text-lg font-semibold mb-2">Recent Bookings</h3>
<div className="space-y-3">
<div className="p-4 border rounded-lg flex items-center justify-between">
<div>
<div className="font-medium">AC Service - 12 Nov 2025</div>
<div className="text-sm text-gray-500">Technician: Aman Kumar</div>
</div>
<div className="text-sm text-gray-700">₹1,499</div>
</div>


<div className="p-4 border rounded-lg flex items-center justify-between">
<div>
<div className="font-medium">Home Cleaning - 01 Nov 2025</div>
<div className="text-sm text-gray-500">Technician: Sunita</div>
</div>
<div className="text-sm text-gray-700">₹799</div>
</div>
</div>
</div>
</div>
</ProfileLayout>
);
}