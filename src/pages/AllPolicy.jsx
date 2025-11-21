import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import ProviderPolicy from "./ProviderPolicy";
import Privecepolicy from "./Privecepolicy";
import CookiesPolicy from "./CookiesPolicy";
import RefundPolicy from "./RefundPolicy";
import ReturnPolicy from "./ReturnPolicy";

export default function AllPolicy() {
  const [activeTab, setActiveTab] = useState("privacy");

  const renderContent = () => {
    switch (activeTab) {
      case "privacy":
        return <Privecepolicy noHeader />;
      case "provider":
        return <ProviderPolicy noHeader />;
      case "cookies":
        return <CookiesPolicy noHeader />;
      case "refund":
        return <RefundPolicy noHeader />;
      case "return":
        return <ReturnPolicy noHeader />;
      default:
        return <Privecepolicy noHeader />;
    }
  };

  return (
    <>
      <Header />

      <section className="container mx-auto px-4 py-10">

        <div className="grid md:grid-cols-4 gap-8">

          {/* SIDEBAR */}
          <div className="backdrop-blur bg-white/70 shadow-xl border border-gray-200 rounded-2xl p-6 h-fit sticky top-24">

            <h2 className="text-xl font-bold mb-6 text-gray-700 flex items-center gap-2">
              <i className="bi bi-shield-check text-[#3b82f6]"></i>
              Policies
            </h2>

            <div className="space-y-3">
              {[
                { name: "Privacy Policy", key: "privacy", icon: "bi-shield-lock" },
                { name: "Provider Policy", key: "provider", icon: "bi-people" },
                { name: "Cookies Policy", key: "cookies", icon: "bi-cookie" },
                { name: "Refund Policy", key: "refund", icon: "bi-arrow-repeat" },
                { name: "Return Policy", key: "return", icon: "bi-bag-x" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setActiveTab(item.key)}
                  className={`
                    group relative w-full flex items-center gap-3 px-4 py-3 font-medium rounded-xl transition-all duration-300 overflow-hidden
                    ${
                      activeTab === item.key
                        ? "bg-[#3b82f6] text-white shadow-lg"
                        : "bg-gray-50 hover:bg-blue-50 text-gray-700"
                    }
                  `}
                >
                  {/* LEFT ANIMATED BAR */}
                  <span
                    className={`
                      absolute left-0 top-0 h-full w-1 rounded-r-lg transition-all duration-500
                      ${activeTab === item.key ? "bg-white" : "bg-[#3b82f6] opacity-0 group-hover:opacity-100"}
                    `}
                  ></span>

                  {/* ICON ANIMATION */}
                  <i
                    className={`bi ${item.icon} text-lg transition-all duration-300
                      ${
                        activeTab === item.key
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }
                    `}
                  ></i>

                  {/* TEXT */}
                  <span
                    className={`
                      transition-all duration-300
                      ${
                        activeTab === item.key
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }
                    `}
                  >
                    {item.name}
                  </span>

                  {/* HOVER GLOW */}
                  <span className="
                    absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-[#3b82f6] transition-all duration-300">
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT AREA */}
          <div className="md:col-span-3">
            <div className="bg-white shadow-xl border border-gray-200 rounded-2xl  animate-fadeIn">
              {renderContent()}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}