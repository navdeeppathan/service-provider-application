import { Sidebar } from "lucide-react";
import { Header } from "../../utils/Header";
import { Footer } from "../../utils/Footer";
import { Sidebar as ProfileSidebar } from "../Profile/Sidebar";

export default function AccountSettings(){
return (
<div className="min-h-screen bg-gray-50">
<Header />
    <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-12 gap-6  mt-20">
        <div className="lg:col-span-3">
            <Sidebar active="account"/>
        </div>
        <main className="lg:col-span-9 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input className="border rounded p-2" defaultValue="Rohit" />
                <input className="border rounded p-2" defaultValue="Sharma" />
                <input className="border rounded p-2 md:col-span-2" defaultValue="rohit@example.com" />
                <input className="border rounded p-2 md:col-span-2" defaultValue="+91 90000 00000" />
            </div>
            <button className="mt-4 bg-[#3b82f6] text-white px-4 py-2 rounded">Save Changes</button>
        </div>


        <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Email Preferences</h3>
            <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-3">
            <div>
        <div className="font-medium">Order Updates</div>
            <div className="text-sm text-gray-500">Receive notifications about your order status</div>
        </div>
            <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" checked={prefs.orders} onChange={()=>toggle('orders')} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#3b82f6]"></div>
            <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5"></div>
        </label>
        </div>


        <div className="flex justify-between items-center border-b pb-3">
        <div>
        <div className="font-medium">Promotions</div>
        <div className="text-sm text-gray-500">Receive emails about new promotions and deals</div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={prefs.promos} onChange={()=>toggle('promos')} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#3b82f6]"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5"></div>
        </label>
        </div>


        <div className="flex justify-between items-center">
        <div>
        <div className="font-medium">Newsletter</div>
        <div className="text-sm text-gray-500">Subscribe to our weekly newsletter</div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={prefetchDNS.newsletter} onChange={()=>toggle('newsletter')} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-[#3b82f6]"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5"></div>
        </label>
        </div>
        </div>
        </div>


        <div className="bg-white p-6 rounded-xl shadow border border-red-100">
        <h3 className="font-semibold text-red-600">Delete Account</h3>
        <p className="text-gray-500 mt-2">Once you delete your account, there is no going back. Please be certain.</p>
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">Delete Account</button>
        </div>
        </main>
    </div>
    <Footer />
</div>
)
}