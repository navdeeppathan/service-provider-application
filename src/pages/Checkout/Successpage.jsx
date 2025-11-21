import React from "react";
import { CheckCircle, Calendar, Mail, Phone, Home, FileText } from "lucide-react";
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
      <Header />
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Success Icon and Message */}
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-xl text-gray-600">
              Your service has been successfully booked
            </p>
          </div>

          {/* Order Details Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
              <h2 className="text-2xl font-semibold text-white">Order Details</h2>
            </div>
            
            <div className="p-6 space-y-4">
              {/* Order Number */}
              <div className="flex items-start pb-4 border-b border-gray-200">
                <FileText className="w-5 h-5 text-gray-400 mt-1 mr-3" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Order Number</p>
                  <p className="text-lg font-semibold text-gray-900">{orderDetails.orderNumber}</p>
                </div>
              </div>

              {/* Service */}
              <div className="flex items-start pb-4 border-b border-gray-200">
                <Home className="w-5 h-5 text-gray-400 mt-1 mr-3" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="text-lg font-semibold text-gray-900">{orderDetails.service}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start pb-4 border-b border-gray-200">
                <Calendar className="w-5 h-5 text-gray-400 mt-1 mr-3" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Booking Date</p>
                  <p className="text-lg font-semibold text-gray-900">{orderDetails.date}</p>
                </div>
              </div>

              {/* Amount */}
              <div className="flex items-start pb-4 border-b border-gray-200">
                <div className="w-5 h-5 text-gray-400 mt-1 mr-3 flex items-center justify-center">
                  <span className="text-lg font-bold">$</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className="text-lg font-semibold text-green-600">{orderDetails.amount}</p>
                </div>
              </div>
            </div>
          </div>

         

          

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to ="/profile/orders">
            <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all shadow-md">
              View My Bookings
            </button>
            </Link>
            <Link to ="/">

            <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold border-2 border-gray-300 hover:border-gray-400 transition-all">
              Book Another Service
            </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Successpage;