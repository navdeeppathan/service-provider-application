// src/pages/checkout/CheckoutLayout.jsx
import React, { useEffect, useState } from "react";
import Header from "../../utils/Header";
import Step1Information from "./Step1Information";
import Step2Address from "./Step2Address";
import Step3Payment from "./Step3Payment";
import Step4Review from "./Step4Review";
import OrderSummary from "./OrderSummary";
import { servicesCatalog } from "./data";
import Swal from "sweetalert2";
import Footer from "../../utils/Footer";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../service/http";

const CheckoutLayout = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { serviceid } = useParams();

  const [selectedSub, setSelectedSub] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await http.get(`/service/${serviceid}`);

      console.log("response:-", res.data.data);

      setSelectedSub(res.data.data || null);
    } catch (err) {
      console.log(err);
    }
  };

  // central booking state
  const [booking, setBooking] = useState({
    service: selectedSub,
    customer: {
      fullName: "",
      email: "",
      phone: "",
    },
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      pincode: "",
    },
    schedule: {
      date: "",
      time: "",
    },
    payment: {
      method: "card",
      cardName: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    },
    notes: "",
  });

  useEffect(() => {
    if (selectedSub) {
      setBooking((prev) => ({
        ...prev,
        service: selectedSub,
      }));
    }
  }, [selectedSub]);

  const goNext = () => setStep((s) => Math.min(4, s + 1));
  const goBack = () => setStep((s) => Math.max(1, s - 1));
  const goto = (n) => setStep(n);

  const updateBooking = (path, value) => {
    // path like "customer.firstName" or "address.city"
    const keys = path.split(".");
    setBooking((prev) => {
      const copy = JSON.parse(JSON.stringify(prev));
      let cur = copy;
      for (let i = 0; i < keys.length - 1; i++) {
        cur = cur[keys[i]];
      }
      cur[keys[keys.length - 1]] = value;
      return copy;
    });
  };

  console.log("booking", booking);

  const placeOrder = async () => {
    // TODO: call API to create booking
    console.log("Placing booking:", booking);
    const payload = {
      provider_id: 1,
      service_id: booking?.service?.id,
      date: booking?.schedule?.date,
      time: booking?.schedule?.time,
      address:
        booking?.address?.line1 +
        " ," +
        booking?.address?.line2 +
        "," +
        booking?.address?.city +
        "," +
        booking?.address?.state +
        "," +
        booking?.address?.pincode,
    };

    console.log("payload:-", payload);
    try {
      setLoading(true);
      const response = await http.post("/booking/create", payload);

      console.log("Booking Success:", response.data);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message || "Booking created successfully!",
      });
      navigate(`/success?status=${response.data.data.id}`);
    } catch (error) {
      console.error("Booking Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }

    goto(4);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto  py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-30">
          {/* Main steps area */}
          <div className="lg:col-span-8 bg-white rounded-xl shadow p-8">
            {/* Step indicators */}
            <div className="flex items-center gap-6 mb-8">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex items-center gap-4">
                  <div
                    className={`w-6 h-6 rounded-full text-xs flex items-center justify-center ${
                      step === n
                        ? "bg-[#3b82f6] text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {n}
                  </div>
                  <div className="hidden sm:block">
                    <div
                      className={`text-sm ${
                        step === n
                          ? "text-gray-800 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      {n === 1 && "Information"}
                      {n === 2 && "Service Location"}
                      {n === 3 && "Payment"}
                      {n === 4 && "Review"}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Step content */}
            <div>
              {step === 1 && (
                <Step1Information
                  booking={booking}
                  updateBooking={updateBooking}
                  goNext={goNext}
                />
              )}

              {step === 2 && (
                <Step2Address
                  booking={booking}
                  updateBooking={updateBooking}
                  goNext={goNext}
                  goBack={goBack}
                />
              )}

              {step === 3 && (
                <Step3Payment
                  booking={booking}
                  updateBooking={updateBooking}
                  goNext={goNext}
                  goBack={goBack}
                />
              )}

              {step === 4 && (
                <Step4Review
                  booking={booking}
                  goBack={goBack}
                  placeOrder={placeOrder}
                />
              )}
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-4">
            <OrderSummary
              booking={booking}
              services={servicesCatalog}
              selectedSub={selectedSub}
              updateBooking={updateBooking}
              gotoStep={goto}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckoutLayout;
