import React, { useEffect } from "react";
import ProfileLayout from "../../layouts/ProfileLayout";
import http from "../../service/http";
import { AlarmCheck, Calendar, LocationEdit } from "lucide-react";

export default function Orders() {
  const [orders, setOrders] = React.useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await http.get(`/booking/my`);
      console.log("response:-", res.data.data);
      setOrders(res.data.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  const getStatusColor = (status) => {
    if (!status) return "bg-gray-100 text-gray-700";

    switch (status.toLowerCase()) {
      case "accepted":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700"; // pending
    }
  };

  return (
    <ProfileLayout active="orders">
      <div className="bg-white p-6 rounded-xl shadow ">
        <h2 className="text-xl font-medium mb-6">My Orders</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orders.map((o) => (
            <div
              key={o.id}
              className=" rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <img
                src={o.service?.image}
                alt="service"
                className="w-full h-48 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4">
                {/* Title & Status */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-medium ">
                      {o.service?.name}
                    </h3>
                    <p className="text-xs font-normal text-gray-500">
                      Order: #{o.id}
                    </p>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-normal ${getStatusColor(
                      o.booking_status
                    )}`}
                  >
                    {o.booking_status}
                  </span>
                </div>

                {/* Provider */}
                <p className="text-xs font-normal text-gray-600 mt-2">
                  Provider: <span className="font-medium">Homexa</span>
                </p>

                {/* Date & Time */}
                <div className="flex  justify-between text-xs font-normal text-gray-600 mt-3">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {o.date}
                  </span>
                  <span className="flex items-center ">
                    <AlarmCheck size={16} className="mr-2" /> {o.time}
                  </span>
                </div>

                {/* Address */}
                <p className="text-xs font-normal text-gray-600 mt-2 flex  items-center">
                  <LocationEdit size={16} className="mr-2" /> {o.address}
                </p>

                {/* Price */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-base font-medium text-gray-900">
                    ₹{Number(o.amount).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProfileLayout>
  );
}
