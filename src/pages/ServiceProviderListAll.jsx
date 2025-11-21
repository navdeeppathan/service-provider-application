import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, CheckCircle, Clock, Star } from "lucide-react";

export default function ServiceProviderListAll() {

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

  const providersData = [
    {
      serviceId: 1,
      list: [
        { name: "Sharma Home Cleaning", rating: 4.8, experience: "5 Years" },
        { name: "Sparkle Cleaners", rating: 4.6, experience: "3 Years" },
        { name: "FreshNest Cleaning", rating: 4.7, experience: "4 Years" },
      ],
    },
    {
      serviceId: 2,
      list: [
        { name: "Deep Clean Experts", rating: 4.9, experience: "7 Years" },
        { name: "UltraWash Deep Care", rating: 4.7, experience: "5 Years" },
        { name: "Pro DeepClean Team", rating: 4.8, experience: "6 Years" },
      ],
    },
    {
      serviceId: 8,
      list: [
        { name: "CoolFix AC Service", rating: 4.8, experience: "6 Years" },
        { name: "FreshAir AC Repair", rating: 4.5, experience: "4 Years" },
        { name: "BlueStar Cooling Experts", rating: 4.7, experience: "5 Years" },
      ],
    },
  ];

  const [selectedServiceId, setSelectedServiceId] = useState(allServices[0].id);
  const [providerList, setProviderList] = useState([]);

  useEffect(() => {
    const matchedProviders =
      providersData.find((p) => p.serviceId === selectedServiceId)?.list || [];
    setProviderList(matchedProviders);
  }, [selectedServiceId]);

  const selectedService = allServices.find(s => s.id === selectedServiceId);

  return (
    <>
      <Header />

      <section className="container mx-auto px-6 py-10 mt-10">

        {/* CATEGORY SLIDER */}
        <div className="relative w-full mt-10 mb-12 px-4">

          <button className="swiper-button-prev custom-prev"></button>
          <button className="swiper-button-next custom-next"></button>

          <Swiper
            slidesPerView={2}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            modules={[Navigation, Pagination]}
          >
            {allServices.map((service) => (
              <SwiperSlide key={service.id} className="flex justify-center">
                <div
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`
                    cursor-pointer h-[150px] w-full 
                    flex flex-col items-center text-center 
                    rounded-2xl transition-all duration-300 
                    ${
                      selectedServiceId === service.id
                        ? "bg-[#5678D0] text-white shadow-lg"
                        : "bg-[#F1F7FC] text-black shadow hover:shadow-2xl"
                    }
                  `}
                >
                  <span
                    className={`
                      w-14 h-14 rounded-full flex items-center justify-center mt-4 
                      text-2xl mb-3 transition-all 
                      ${
                        selectedServiceId === service.id
                          ? "bg-white text-[#5678D0]"
                          : "bg-[#5678D0] text-white"
                      }
                    `}
                  >
                    <i className={service.icon}></i>
                  </span>

                  <span className="text-sm ">
                    {service.title}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* SELECTED SERVICE */}
        {selectedService && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-[#5678D0]">
            <div className="flex items-center gap-4">
              <div className="bg-white w-16 h-16 text-[#5678D0] rounded-xl flex items-center justify-center text-3xl">
                <i className={selectedService.icon}></i>
              </div>

              <div>
                <h3 className="text-2xl  text-gray-800">
                  {selectedService.title}
                </h3>
                <p className="text-gray-600">{selectedService.decs}</p>
              </div>
            </div>
          </div>
        )}

        {/* PROVIDER LIST */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl text-gray-800">
              Available Professionals
            </h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              {providerList.length} Providers
            </span>
          </div>

          {providerList.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {providerList.map((provider, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md border border-gray-200 flex flex-col md:flex-row w-full transition-all"
                >
                  {/* LEFT (IMAGE) */}
                  <div className="relative p-2 w-full md:w-40">
                    <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-md">
                      15% OFF
                    </span>

                    <img
                      src="/Home Renovation.jpg"
                      alt={provider.name}
                      className="w-full h-40 object-cover rounded-lg border"
                    />
                  </div>

                  {/* RIGHT (DETAILS) */}
                  <div className="flex-1 p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {provider.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {provider.service || "Professional Service"}
                    </p>

                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
                      <span>⭐ {provider.rating}</span>
                      <span>•</span>
                      <span>{provider.experience}</span>
                    </div>

                    {/* TEAM ICONS */}
                    <div className="flex items-center mt-2 space-x-[-10px]">
                      {[1, 2, 3].map((_, i) => (
                        <img
                          key={i}
                          className="w-7 h-7 rounded-full border-2 border-white"
                          src="/Carpet Cleaning.jpg"
                        />
                      ))}
                      <span className="text-xs text-gray-400 ml-3">
                        Team Experts
                      </span>
                    </div>

                    {/* PRICE + ACTIONS */}
                    <div className="mt-4 flex items-center justify-between">
                      <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {provider.price || "170 AED / h"}
                      </div>

                      <div className="flex gap-3 text-gray-500 text-xl">
                        <button className="hover:text-blue-600 transition">
                          <i className="bi bi-share"></i>
                        </button>
                        <button className="hover:text-red-500 transition">
                          <i className="bi bi-heart"></i>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow">
              <p className="text-lg text-gray-500">No providers available</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      <style>{`
        .custom-prev,
        .custom-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
        }
        .custom-prev { left: -40px; }
        .custom-next { right: -40px; }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          color: #5678D0;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}
