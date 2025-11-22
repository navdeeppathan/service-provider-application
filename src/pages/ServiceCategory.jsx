import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function ServiceCategory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allServices = [
    { id: 1, key: "home_cleaning", title: "Home Cleaning", decs: "Complete home cleaning with trained, background-verified staff.", icon: "bi bi-house-check" },
    { id: 2, key: "deep_cleaning", title: "Deep Cleaning", decs: "Deep, detailed cleaning for toughest stains & dirt.", icon: "bi bi-droplet-half" },
    { id: 8, key: "ac_service", title: "AC Repair & Service", decs: "AC service, repair, installation & gas filling.", icon: "bi bi-wind" },
    { id: 9, key: "washing_machine", title: "Washing Machine Repair", decs: "Front-load, top-load & automatic washer repair.", icon: "bi bi-arrow-repeat" },
    { id: 10, key: "fridge_repair", title: "Refrigerator Repair", decs: "Cooling, gas refill, compressor fixing & more.", icon: "bi bi-snow" },
    { id: 11, key: "ro_service", title: "RO / Water Purifier Service", decs: "Filter change, servicing & purifier repair.", icon: "bi bi-droplet" },
    { id: 12, key: "electrician", title: "Electrician Services", decs: "Wiring, switches, lights, MCB, fan & more.", icon: "bi bi-lightning" },
    { id: 13, key: "plumbing", title: "Plumbing Services", decs: "Tap leak repair, fitting, installation, blockage fix.", icon: "bi bi-tools" },
    { id: 14, key: "carpenter", title: "Carpenter Services", decs: "Furniture fixing, repair, modular woodwork.", icon: "bi bi-hammer" },
    { id: 15, key: "painting", title: "Painting Services", decs: "Home/office painting, wall texture, waterproofing.", icon: "bi bi-palette" },
    { id: 16, key: "cctv", title: "CCTV Installation", decs: "Camera installation, configuration & maintenance.", icon: "bi bi-camera-video" },
    { id: 18, key: "geyser_repair", title: "Geyser Repair", decs: "Water heater installation & repair.", icon: "bi bi-thermometer-half" },
    { id: 19, key: "solar_service", title: "Solar Panel Service", decs: "Solar maintenance, cleaning & inverter check.", icon: "bi bi-sun" },
    { id: 21, key: "interior_design", title: "Interior Design", decs: "Modern interior designing for home & office.", icon: "bi bi-layers" },
    { id: 22, key: "garden_maintenance", title: "Garden & Lawn Care", decs: "Plant care, trimming, landscaping & maintenance.", icon: "bi bi-tree" },
  ];

  const totalPages = Math.ceil(allServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allServices.slice(startIndex, startIndex + itemsPerPage);

  const getPaginationNumbers = () => {
    let pages = [];
    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) pages = [1, 2, 3, 4, "...", totalPages];
      else if (currentPage >= totalPages - 2)
        pages = [1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      else pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
    }
    return pages;
  };

  return (
    <>
      <Header />

      <section className="py-20 px-6">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mt-3 text-lg">
            Trusted professionals • Fast service • Affordable pricing
          </p>
        </div>

        {/* GRID */}
        <div className="container mx-auto mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentItems.map((service) => (
              <Link key={service.id} to={`/serviceproviderlist/${service.id}`}>
                <div className="
                    group bg-white border border-gray-200 rounded-2xl p-8 h-[300px]
                    shadow-sm hover:shadow-xl hover:border-blue-400
                    transition-all duration-300 relative overflow-hidden
                  "
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#5E72C6] text-white rounded-2xl flex items-center justify-center text-3xl mb-5 mx-auto group-hover:scale-110 transition">
                    <i className={service.icon}></i>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#5E72C6] transition">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 mt-2 text-sm leading-relaxed line-clamp-3">
                    {service.decs}
                  </p>

                  {/* Arrow Button */}
                  <Link
                    to={`/serviceproviderlist/${service.id}`}
                    className="
                      absolute bottom-5 right-5 w-10 h-10 rounded-full bg-[#5E72C6] text-white
                      flex items-center justify-center shadow-md
                      group-hover:bg-blue-700 transition-all
                    "
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center mt-14 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              &lt;
            </button>

            {getPaginationNumbers().map((num, i) =>
              num === "..." ? (
                <span key={i} className="px-3 py-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(num)}
                  className={`
                    px-4 py-2 rounded-lg border shadow-sm
                    ${currentPage === num ? "bg-[#5E72C6] text-white border-[#5E72C6]" : "bg-white hover:bg-gray-100"}
                  `}
                >
                  {num}
                </button>
              )
            )}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-2 border rounded-lg shadow-sm bg-white hover:bg-gray-100 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
