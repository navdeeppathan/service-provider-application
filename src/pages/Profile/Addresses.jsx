import React, { useState } from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';


export default function Addresses(){
const [addresses] = useState([
{ id:1, label: 'Home', line:'A-12, MG Road', city:'Indore', pincode:'452001' },
{ id:2, label: 'Office', line:'Plot 9, ABC Tower', city:'Indore', pincode:'452010' }
]);


return (
<ProfileLayout active="addresses">
<div className="bg-white p-6 rounded-xl shadow  mt-20">
<h2 className="text-2xl font-semibold mb-4">Addresses</h2>
<div className="space-y-4">
{addresses.map(a => (
<div key={a.id} className="p-4 border rounded-lg flex justify-between items-center">
<div>
<div className="font-medium">{a.label}</div>
<div className="text-sm text-gray-500">{a.line}, {a.city} - {a.pincode}</div>
</div>
<div className="flex gap-2">
<button className="text-sm text-blue-600">Edit</button>
<button className="text-sm text-red-600">Delete</button>
</div>
</div>
))}
</div>


<div className="mt-6">
<h3 className="font-semibold mb-2">Add New Address</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<input className="border rounded p-2" placeholder="Label (Home/Office)" />
<input className="border rounded p-2" placeholder="Address Line" />
<input className="border rounded p-2" placeholder="City" />
<input className="border rounded p-2" placeholder="Pincode" />
</div>
<button className="mt-3 bg-[#3b82f6] text-white px-4 py-2 rounded">Save Address</button>
</div>
</div>
</ProfileLayout>
);
}