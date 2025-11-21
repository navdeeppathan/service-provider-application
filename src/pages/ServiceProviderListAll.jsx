




import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  {
    serviceId: 9,
    list: [
      { name: "WasherPro Repair", rating: 4.6, experience: "4 Years" },
      { name: "FixMyWash Services", rating: 4.7, experience: "5 Years" },
      { name: "SmartWash Repair Hub", rating: 4.8, experience: "6 Years" },
    ],
  },
  {
    serviceId: 10,
    list: [
      { name: "CoolTech Fridge Repair", rating: 4.8, experience: "7 Years" },
      { name: "FreezeFix Experts", rating: 4.6, experience: "4 Years" },
      { name: "ChillPoint Repair", rating: 4.7, experience: "5 Years" },
    ],
  },
  {
    serviceId: 11,
    list: [
      { name: "PureDrop RO Service", rating: 4.7, experience: "5 Years" },
      { name: "AquaCare Solutions", rating: 4.6, experience: "4 Years" },
      { name: "Crystal RO Experts", rating: 4.8, experience: "6 Years" },
    ],
  },
  {
    serviceId: 12,
    list: [
      { name: "PowerFix Electricians", rating: 4.8, experience: "6 Years" },
      { name: "BrightWire Experts", rating: 4.5, experience: "3 Years" },
      { name: "SafeVolt Services", rating: 4.7, experience: "5 Years" },
    ],
  },
  {
    serviceId: 13,
    list: [
      { name: "FlowMaster Plumbing", rating: 4.8, experience: "7 Years" },
      { name: "PipeFix Professionals", rating: 4.6, experience: "5 Years" },
      { name: "AquaLine Plumbers", rating: 4.7, experience: "4 Years" },
    ],
  },
  {
    serviceId: 14,
    list: [
      { name: "WoodCraft Carpentry", rating: 4.8, experience: "8 Years" },
      { name: "HandyCarpenter Works", rating: 4.5, experience: "3 Years" },
      { name: "RoyalWood Experts", rating: 4.7, experience: "5 Years" },
    ],
  },
  {
    serviceId: 15,
    list: [
      { name: "ColorHouse Painters", rating: 4.9, experience: "7 Years" },
      { name: "PerfectPaint Studio", rating: 4.6, experience: "4 Years" },
      { name: "WallArt Painters", rating: 4.7, experience: "5 Years" },
    ],
  },
  {
    serviceId: 16,
    list: [
      { name: "SecureCam Solutions", rating: 4.8, experience: "6 Years" },
      { name: "VisionEye CCTV", rating: 4.6, experience: "4 Years" },
      { name: "SafeHome Surveillance", rating: 4.7, experience: "5 Years" },
    ],
  },
  {
    serviceId: 18,
    list: [
      { name: "HeatFix Geyser Repair", rating: 4.8, experience: "6 Years" },
      { name: "WarmCare Technicians", rating: 4.5, experience: "3 Years" },
      { name: "QuickHot Services", rating: 4.7, experience: "5 Years" },
    ],
  },
  {
    serviceId: 19,
    list: [
      { name: "SunPower Solar Care", rating: 4.8, experience: "6 Years" },
      { name: "EcoSolar Maintenance", rating: 4.6, experience: "5 Years" },
      { name: "BrightSun Solar Experts", rating: 4.7, experience: "4 Years" },
    ],
  },
  {
    serviceId: 21,
    list: [
      { name: "ModernSpace Interiors", rating: 4.9, experience: "8 Years" },
      { name: "DreamHome Designers", rating: 4.7, experience: "6 Years" },
      { name: "Elite Interior Studio", rating: 4.8, experience: "7 Years" },
    ],
  },
  {
    serviceId: 22,
    list: [
      { name: "GreenCare Gardeners", rating: 4.8, experience: "6 Years" },
      { name: "NatureLeaf Landscaping", rating: 4.6, experience: "4 Years" },
      { name: "FreshBloom Garden Care", rating: 4.7, experience: "5 Years" },
    ],
  },
];

  // ✅ Default: First service selected
  const [selectedServiceId, setSelectedServiceId] = useState(allServices[0].id);
  const [providerList, setProviderList] = useState([]);

  // ✅ Load providers when category changes
  useEffect(() => {
    const matchedProviders =
      providersData.find((p) => p.serviceId === selectedServiceId)?.list || [];
    setProviderList(matchedProviders);
  }, [selectedServiceId]);

  return (
    <>
      <Header />

      <section className="container mx-auto px-15 py-25">

        {/* 🔵 CATEGORY SLIDER */}
        <div className="relative mt-8">
          <button className="swiper-button-prev custom-prev"></button>
          <button className="swiper-button-next custom-next"></button>

          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            modules={[Pagination, Navigation]}
          >
            {allServices.map((service) => (
              <SwiperSlide key={service.id}>
                <div
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`cursor-pointer relative h-[180px] text-center p-6 border-white rounded-2xl transition-all duration-300
                  ${
                    selectedServiceId === service.id
                      ? "bg-[#5678D0] text-white shadow-xl scale-102"
                      : "bg-[#F1F7FC] shadow hover:scale-100 hover:shadow-lg"
                  }`}
                >
                  <span className="w-16 h-16 rounded-full bg-white text-[#5678D0] flex items-center justify-center text-3xl mx-auto mb-4">
                    <i className={service.icon}></i>
                  </span>

                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  {/* <p className="text-sm">{service.decs}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🔵 PROVIDER LIST */}
        <h2 className="text-2xl font-bold mt-10 mb-6 text-center">
          Service Providers
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {providerList.map((pro, index) => (
            <div
              key={index}
              className="shadow-lg rounded-xl p-6 bg-white hover:shadow-2xl hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">{pro.name}</h3>
              <p className="mt-2">⭐ Rating: {pro.rating}</p>
              <p>🎯 Experience: {pro.experience}</p>

              <button className="mt-4 w-full bg-[#5678D0] text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {/* ❌ No providers found */}
        {providerList.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No providers found for this service.
          </p>
        )}
      </section>

      <Footer />

      {/* ✅ Slider Custom Arrows Style */}
      <style>
        {`
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
        `}
      </style>
    </>
  );
}
