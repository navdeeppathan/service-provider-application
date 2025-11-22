import React, { useEffect } from "react";
import {
  CheckCircle,
  Calendar,
  Package,
  CreditCard,
  FileText,
} from "lucide-react";
import Header from "../../utils/Header";
import { Link, useSearchParams } from "react-router-dom";
import http from "../../service/http";

const Successpage = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const [selectedSub, setSelectedSub] = React.useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await http.get(`/booking/details/${status}`);

      console.log("response:-", res.data.data);

      setSelectedSub(res.data.data || null);
    } catch (err) {
      console.log(err);
    }
  };

  // const orderDetails = {
  //   orderNumber: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
  //   date: new Date().toLocaleDateString("en-US", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   }),
  //   service: "Home Cleaning Service",
  //   amount: "$150.00",
  // };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50 px-4 py-25">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
          {/* ICON */}
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-[#5E72C6] rounded-full flex items-center justify-center shadow">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-center text-xl font-medium text-gray-900 mt-4">
            Payment Successful!
          </h1>
          <p className="text-center text-xs text-gray-600 mt-1">
            Your booking is confirmed
          </p>

          {/* ORDER DETAILS */}
          <div className="mt-6 space-y-3">
            <DetailItem
              icon={<FileText className="w-5 h-5 text-blue-600" />}
              label="Order ID"
              value={
                "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase()
              }
              bg="bg-blue-50"
            />

            <DetailItem
              icon={<Calendar className="w-5 h-5 text-purple-600" />}
              label="Date"
              value={new Date(selectedSub?.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              bg="bg-purple-50"
            />

            <DetailItem
              icon={<Package className="w-5 h-5 text-orange-600" />}
              label="Service"
              value={selectedSub?.service?.name}
              bg="bg-orange-50"
            />

            <DetailItem
              icon={<CreditCard className="w-5 h-5 text-emerald-600" />}
              label="Total Paid"
              value={`₹${selectedSub?.amount}`}
              bg="bg-emerald-50"
            />
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/profile/orders"
              className="flex-1 bg-[#5E72C6] text-white text-center py-2 text-sm font-normal rounded-xl cursor-pointer  hover:bg-emerald-700 transition"
            >
              View My Bookings
            </Link>

            <Link
              to="/"
              className="flex-1 bg-gray-100 text-gray-800 text-center py-2 text-sm font-normal rounded-xl cursor-pointer border hover:bg-gray-200 transition"
            >
              Book Another Service
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const DetailItem = ({ icon, label, value, bg }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl border border-gray-200">
    <div
      className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center`}
    >
      {icon}
    </div>
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

export default Successpage;
