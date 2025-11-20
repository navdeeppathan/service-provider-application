import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function ServiceCategory() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const allServices = [
    {
      id: 1,
      key: "home_cleaning",
      title: "Home Cleaning",
      decs: "Complete home cleaning with trained, background-verified staff.",
      icon: "bi bi-house-check",
      img: "https://images.unsplash.com/photo-1581579182254-0f3f5a1f8d3d?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 2,
      key: "deep_cleaning",
      title: "Deep Cleaning",
      decs: "Deep, detailed cleaning for toughest stains & dirt.",
      icon: "bi bi-droplet-half",
      img: "https://images.unsplash.com/photo-1581579182249-f8f94c3f1a59?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 8,
      key: "ac_service",
      title: "AC Repair & Service",
      decs: "AC service, repair, installation & gas filling.",
      icon: "bi bi-wind",
      img: "https://images.unsplash.com/photo-1582719478212-1a6f5b6a8b4b?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 9,
      key: "washing_machine",
      title: "Washing Machine Repair",
      decs: "Front-load, top-load & automatic washer repair.",
      icon: "bi bi-arrow-repeat",
      img: "https://images.unsplash.com/photo-1581579182250-3b25f1b2a6d6?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 10,
      key: "fridge_repair",
      title: "Refrigerator Repair",
      decs: "Cooling, gas refill, compressor fixing & more.",
      icon: "bi bi-snow",
      img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 11,
      key: "ro_service",
      title: "RO / Water Purifier Service",
      decs: "Filter change, servicing & purifier repair.",
      icon: "bi bi-droplet",
      img: "https://images.unsplash.com/photo-1600585154206-2f5c5d82c2ff?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 12,
      key: "electrician",
      title: "Electrician Services",
      decs: "Wiring, switches, lights, MCB, fan & more.",
      icon: "bi bi-lightning",
      img: "https://images.unsplash.com/photo-1581093588401-9b2a6f7b6ef5?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 13,
      key: "plumbing",
      title: "Plumbing Services",
      decs: "Tap leak repair, fitting, installation, blockage fix.",
      icon: "bi bi-tools",
      img: "https://images.unsplash.com/photo-1581579182279-6d0b6f4ee4be?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 14,
      key: "carpenter",
      title: "Carpenter Services",
      decs: "Furniture fixing, repair, modular woodwork.",
      icon: "bi bi-hammer",
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 15,
      key: "painting",
      title: "Painting Services",
      decs: "Home/office painting, wall texture, waterproofing.",
      icon: "bi bi-palette",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 16,
      key: "cctv",
      title: "CCTV Installation",
      decs: "Camera installation, configuration & maintenance.",
      icon: "bi bi-camera-video",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 18,
      key: "geyser_repair",
      title: "Geyser Repair",
      decs: "Water heater installation & repair.",
      icon: "bi bi-thermometer-half",
      img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 19,
      key: "solar_service",
      title: "Solar Panel Service",
      decs: "Solar maintenance, cleaning & inverter check.",
      icon: "bi bi-sun",
      img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 21,
      key: "interior_design",
      title: "Interior Design",
      decs: "Modern interior designing for home & office.",
      icon: "bi bi-layers",
      img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: 22,
      key: "garden_maintenance",
      title: "Garden & Lawn Care",
      decs: "Plant care, trimming, landscaping & maintenance.",
      icon: "bi bi-tree",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(allServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = allServices.slice(startIndex, startIndex + itemsPerPage);

  // Page numbers with "..."
  const getPaginationNumbers = () => {
    let pages = [];

    if (totalPages <= 6) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, "...", totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [
          1,
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages,
        ];
      } else {
        pages = [
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        ];
      }
    }
    return pages;
  };

  return (
    <>
      <Header />

      <section id="services" className="py-30  px-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive home services — verified professionals, transparent
            pricing.
          </p>
        </div>

        <div className="container mx-auto px-4 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentItems.map((service) => (
              <Link to={`/serviceproviderlist/${service.id}`}>
                <article
                  key={service.id}
                  className="relative h-[280px] min-h-[280px] flex flex-col justify-between text-center p-8 shadow-md border border-gray-200 rounded-2xl bg-white hover:shadow-lg transition"
                >
                  <div>
                    <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-3xl mx-auto mb-4">
                      <i className={service.icon}></i>
                    </span>
                    <h3 className="text-xl font-semibold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{service.decs}</p>
                  </div>
                  <Link
                    to={`/serviceproviderlist/${service.id}`}
                    className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </Link>
                </article>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2">
            {/* Prev Button */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-2 border rounded disabled:opacity-50"
            >
              &lt;
            </button>

            {getPaginationNumbers().map((num, i) =>
              num === "..." ? (
                <span key={i} className="px-3 py-2">
                  ...
                </span>
              ) : (
                <button
                  key={i}
                  onClick={() => setCurrentPage(num)}
                  className={`px-3 py-2 border rounded ${
                    currentPage === num ? "bg-[#5678D0] text-white" : ""
                  }`}
                >
                  {num}
                </button>
              )
            )}

            {/* Next Button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-2 border rounded disabled:opacity-50"
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
