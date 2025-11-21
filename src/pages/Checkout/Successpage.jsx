import React from "react";
import { CheckCircle, Calendar, Mail, Phone, Home, FileText, Package, CreditCard } from "lucide-react";
import Header from "../../utils/Header";
import Footer from "../../utils/Footer";
import { Link } from "react-router-dom";


const Successpage = () => {
  const orderDetails = {
    orderNumber: "ORD-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    service: "Home Cleaning Service",
    amount: "$150.00",
    customerName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Apt 4B, New York, NY 10001"
  };

  return (
    <>
     <Header/>
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-23 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto">
          
          {/* Main Success Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Success Header with Icon */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-5 text-center">
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white rounded-full"></div>
              </div>
              
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg">
                <CheckCircle className="w-12 h-12 text-emerald-600" strokeWidth={2.5} />
              </div>
              
              <h1 className="text-2xl md:text-3xl  text-white mb-2">
                Payment Successful!
              </h1>
              <p className="text-emerald-50 text-lg">
                Your booking has been confirmed
              </p>
            </div>

            {/* Order Info Grid */}
            <div className="p-4">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                
                {/* Order Number */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Order ID</p>
                    <p className="text-sm  text-gray-900">{orderDetails.orderNumber}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Date</p>
                    <p className="text-sm  text-gray-900">{orderDetails.date}</p>
                  </div>
                </div>

                {/* Service */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Package className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Service</p>
                    <p className="text-sm  text-gray-900">{orderDetails.service}</p>
                  </div>
                </div>

                {/* Amount */}
                <div className="flex items-center space-x-4 p-4 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-emerald-700 font-medium uppercase tracking-wide">Total Paid</p>
                    <p className="text-sm  text-emerald-600">{orderDetails.amount}</p>
                  </div>
                </div>
              </div>

              

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Link to="/profile/orders">
                  View My Bookings
                </Link>
                </button>
                <button className="flex-1 bg-white text-gray-700 px-6 py-3.5 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                <Link to="/">

                  Book Another Service
                </Link>
                </button>
              </div>
            </div>
          </div>

          
        </div>
      </div>
{/* <Footer/> */}
     
    </>
  );
};

export default Successpage;