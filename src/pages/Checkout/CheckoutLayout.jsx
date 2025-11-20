// src/pages/checkout/CheckoutLayout.jsx
import React, { useState } from "react";
import Header from "../../utils/Header";
import Step1Information from "./Step1Information";
import Step2Address from "./Step2Address";
import Step3Payment from "./Step3Payment";
import Step4Review from "./Step4Review";
import OrderSummary from "./OrderSummary";
import { servicesCatalog } from "./data";

const CheckoutLayout = () => {
    const [step, setStep] = useState(1);

    // central booking state
    const [booking, setBooking] = useState({
        service: servicesCatalog[0], // default selected service
        customer: {
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
        },
        address: {
        line1: "",
        line2: "",
        city: "",
        state: "",
        pincode: ""
        },
        schedule: {
        date: "",
        time: ""
        },
        payment: {
        method: "card",
        cardName: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
        },
        notes: ""
    });

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

    const placeOrder = () => {
        // TODO: call API to create booking
        console.log("Placing booking:", booking);
        alert("Booking placed — check console for payload (mock).");
        // After placing, go to review (or confirmation page)
        goto(4);
    };

    return (
        
        <div className="min-h-screen bg-gray-50">
            <Header />
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-30">
            {/* Main steps area */}
            <div className="lg:col-span-8 bg-white rounded-xl shadow p-8">
                {/* Step indicators */}
                <div className="flex items-center gap-6 mb-8">
                {[1,2,3,4].map((n) => (
                    <div key={n} className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step===n ? "bg-[#3b82f6] text-white" : "bg-gray-100 text-gray-600"}`}>
                        {n}
                    </div>
                    <div className="hidden sm:block">
                        <div className={`text-sm ${step===n ? "text-gray-800 font-semibold" : "text-gray-500"}`}>
                        {n===1 && "Information"}
                        {n===2 && "Service Location"}
                        {n===3 && "Payment"}
                        {n===4 && "Review"}
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
                <OrderSummary booking={booking} services={servicesCatalog} updateBooking={updateBooking} gotoStep={goto} />
            </div>
            </div>
        </div>
        </div>
    );
};

export default CheckoutLayout;
