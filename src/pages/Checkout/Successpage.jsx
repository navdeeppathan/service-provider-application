import React from "react";
import { CheckCircle, Calendar, Mail, Phone, Home, FileText, Package, CreditCard } from "lucide-react";

const Header = () => (
  <header className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl  text-gray-900">ServiceHub</h1>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white mt-16">
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-center text-gray-400">© 2024 ServiceHub. All rights reserved.</p>
    </div>
  </footer>
);

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
      
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Success Card */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
            
            {/* Success Header with Icon */}
            <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-12 text-center">
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
            <div className="p-8">
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

              {/* Customer Details */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 mb-6 border border-gray-200">
                <h3 className="text-base  text-gray-900 mb-4 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Home className="w-4 h-4 text-blue-600" />
                  </div>
                  Service Details
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Mail className="w-4 h-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Email</p>
                      <p className="text-sm text-gray-900">{orderDetails.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-4 h-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <p className="text-sm text-gray-900">{orderDetails.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Home className="w-4 h-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-500">Service Address</p>
                      <p className="text-sm text-gray-900">{orderDetails.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Confirmation Notice */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-6">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                  <p className="text-sm text-blue-800">
                    Confirmation email sent to <span className="font-semibold">{orderDetails.email}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  View My Bookings
                </button>
                <button className="flex-1 bg-white text-gray-700 px-6 py-3.5 rounded-xl font-semibold border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all">
                  Book Another Service
                </button>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Need help? Contact our support team at{" "}
              <a href="mailto:support@servicehub.com" className="text-emerald-600 font-semibold hover:underline">
                support@servicehub.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Successpage;