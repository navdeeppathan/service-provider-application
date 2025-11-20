import React from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { useParams } from "react-router-dom";

export default function ServiceProviderList() {
  const { id } = useParams();
  const serviceId = parseInt(id);

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


  // Find selected service
  const selectedService = allServices.find((s) => s.id === serviceId);

  // Find providers for that service
  const providerList =
    providersData.find((p) => p.serviceId === serviceId)?.list || [];

  return (
    <>
      <Header />

      <section className="container mx-auto px-10 py-30">
        {/* Show selected category info */}
       <div className="text-center mb-10 flex flex-col items-center">
  <div className="flex items-center justify-center w-20 h-20 bg-[#5678D0] rounded-full shadow-md">
    <i className={`${selectedService.icon} text-4xl text-white`}></i>
  </div>

  <h2 className="text-3xl font-bold mt-4">
    {selectedService.title}
  </h2>

  <p className="text-gray-600 max-w-xl mx-auto mt-2">
    {selectedService.decs}
  </p>
</div>


        {/* Provider List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providerList.map((pro, index) => (
            <div
              key={index}
              className="shadow-lg border-white rounded-xl p-6 bg-white  hover:shadow-2xl hover:scale-102 transition"
            >
              <h3 className="text-xl font-semibold">{pro.name}</h3>
              <p className="text-gray-600 mt-2">⭐ Rating: {pro.rating}</p>
              <p className="text-gray-600">🎯 Experience: {pro.experience}</p>

              <button className="mt-4 w-full bg-[#5678D0] text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>

        {providerList.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No providers found for this category.
          </p>
        )}
      </section>

      <Footer />
    </>
  );
}
