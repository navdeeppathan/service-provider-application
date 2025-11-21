




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
const selectedService = allServices.find(s => s.id === selectedServiceId);

  return (
    <>
      <Header />

      <section className="container mx-auto px-15 py-25">

        {/* 🔵 CATEGORY SLIDER */}
        {/* SLIDER */}
      <div className="relative w-full mt-10 mb-12 px-4">

  {/* Custom arrows */}
  <button className="swiper-button-prev custom-prev"></button>
  <button className="swiper-button-next custom-next"></button>

  <Swiper
    slidesPerView={2}     // default mobile
    spaceBetween={20}
    navigation={{
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    }}
    breakpoints={{
      0: { slidesPerView: 2 },     // small mobile
      480: { slidesPerView: 3 },   // large mobile
      640: { slidesPerView: 4 },   // tablet
      768: { slidesPerView: 5 },   // small laptop
      1024: { slidesPerView: 6 },  // ✅ desktop = 6 cards
    }}
    modules={[Navigation, Pagination]}
  >
    {allServices.map((service) => (
      <SwiperSlide key={service.id} className="flex justify-center">
        <div
          onClick={() => setSelectedServiceId(service.id)}
          className={`
            cursor-pointer h-[190px] w-full 
            flex flex-col items-center justify-center text-center 
            rounded-2xl transition-all duration-300 p-4
            ${
              selectedServiceId === service.id
                ? "bg-[#5678D0] text-white shadow-2xl"
                : "bg-[#F1F7FC] text-black shadow hover:shadow-2xl"
            }
          `}
        >
          <span
            className={`
              w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3 transition-all 
              ${
                selectedServiceId === service.id
                  ? "bg-white text-[#5678D0]"
                  : "bg-[#5678D0] text-white"
              }
            `}
          >
            <i className={service.icon}></i>
          </span>

          <h3 className="text-base font-semibold leading-tight">
            {service.title}
          </h3>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>



         {selectedService && (
          <div className="bg-white rounded-2xl shadow-lg p-6 mt-8 mb-8 border border-[#5678D0]">
            <div className="flex items-center gap-4">
              <div className={`bg-white w-16 h-16 text-[#5678D0] rounded-xl flex items-center justify-center text-3xl`}>
                 <i className={selectedService.icon}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
                <p className="text-gray-600">{selectedService.decs}</p>
              </div>
            </div>
          </div>
        )}

        {/* 🔵 PROVIDER LIST */}
         <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-800">
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200"
                >
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                        {provider.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-bold text-gray-800">{provider.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Clock className="w-4 h-4 text-indigo-500" />
                        <span>{provider.experience}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{provider.jobs} Jobs</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl">
                      Book Now
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-xl text-gray-600 font-medium">
                No providers found for this service
              </p>
              <p className="text-gray-500 mt-2">Try selecting a different service category</p>
            </div>
          )}
        </div>
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



// import React, { useState, useEffect } from "react";
// import { Star, Clock, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

// export default function ServiceProviderListAll() {
//   const allServices = [
//     {
//       id: 1,
//       key: "home_cleaning",
//       title: "Home Cleaning",
//       decs: "Complete home cleaning with trained, background-verified staff.",
//       icon: "🏠",
//       gradient: "from-blue-400 to-blue-600",
//     },
//     {
//       id: 2,
//       key: "deep_cleaning",
//       title: "Deep Cleaning",
//       decs: "Deep, detailed cleaning for toughest stains & dirt.",
//       icon: "✨",
//       gradient: "from-purple-400 to-purple-600",
//     },
//     {
//       id: 8,
//       key: "ac_service",
//       title: "AC Repair",
//       decs: "AC service, repair, installation & gas filling.",
//       icon: "❄️",
//       gradient: "from-cyan-400 to-cyan-600",
//     },
//     {
//       id: 9,
//       key: "washing_machine",
//       title: "Washing Machine",
//       decs: "Front-load, top-load & automatic washer repair.",
//       icon: "🔄",
//       gradient: "from-teal-400 to-teal-600",
//     },
//     {
//       id: 10,
//       key: "fridge_repair",
//       title: "Refrigerator",
//       decs: "Cooling, gas refill, compressor fixing & more.",
//       icon: "🧊",
//       gradient: "from-indigo-400 to-indigo-600",
//     },
//     {
//       id: 11,
//       key: "ro_service",
//       title: "RO Purifier",
//       decs: "Filter change, servicing & purifier repair.",
//       icon: "💧",
//       gradient: "from-sky-400 to-sky-600",
//     },
//     {
//       id: 12,
//       key: "electrician",
//       title: "Electrician",
//       decs: "Wiring, switches, lights, MCB, fan & more.",
//       icon: "⚡",
//       gradient: "from-yellow-400 to-yellow-600",
//     },
//     {
//       id: 13,
//       key: "plumbing",
//       title: "Plumbing",
//       decs: "Tap leak repair, fitting, installation, blockage fix.",
//       icon: "🔧",
//       gradient: "from-orange-400 to-orange-600",
//     },
//     {
//       id: 14,
//       key: "carpenter",
//       title: "Carpenter",
//       decs: "Furniture fixing, repair, modular woodwork.",
//       icon: "🔨",
//       gradient: "from-amber-400 to-amber-600",
//     },
//     {
//       id: 15,
//       key: "painting",
//       title: "Painting",
//       decs: "Home/office painting, wall texture, waterproofing.",
//       icon: "🎨",
//       gradient: "from-pink-400 to-pink-600",
//     },
//     {
//       id: 16,
//       key: "cctv",
//       title: "CCTV",
//       decs: "Camera installation, configuration & maintenance.",
//       icon: "📹",
//       gradient: "from-slate-400 to-slate-600",
//     },
//     {
//       id: 18,
//       key: "geyser_repair",
//       title: "Geyser",
//       decs: "Water heater installation & repair.",
//       icon: "🌡️",
//       gradient: "from-red-400 to-red-600",
//     },
//     {
//       id: 19,
//       key: "solar_service",
//       title: "Solar Panel",
//       decs: "Solar maintenance, cleaning & inverter check.",
//       icon: "☀️",
//       gradient: "from-yellow-400 to-orange-500",
//     },
//     {
//       id: 21,
//       key: "interior_design",
//       title: "Interior Design",
//       decs: "Modern interior designing for home & office.",
//       icon: "🏛️",
//       gradient: "from-violet-400 to-violet-600",
//     },
//     {
//       id: 22,
//       key: "garden_maintenance",
//       title: "Garden Care",
//       decs: "Plant care, trimming, landscaping & maintenance.",
//       icon: "🌳",
//       gradient: "from-green-400 to-green-600",
//     },
//   ];

//   const providersData = [
//     {
//       serviceId: 1,
//       list: [
//         { name: "Sharma Home Cleaning", rating: 4.8, experience: "5 Years", jobs: 230 },
//         { name: "Sparkle Cleaners", rating: 4.6, experience: "3 Years", jobs: 145 },
//         { name: "FreshNest Cleaning", rating: 4.7, experience: "4 Years", jobs: 189 },
//       ],
//     },
//     {
//       serviceId: 2,
//       list: [
//         { name: "Deep Clean Experts", rating: 4.9, experience: "7 Years", jobs: 345 },
//         { name: "UltraWash Deep Care", rating: 4.7, experience: "5 Years", jobs: 278 },
//         { name: "Pro DeepClean Team", rating: 4.8, experience: "6 Years", jobs: 312 },
//       ],
//     },
//     {
//       serviceId: 8,
//       list: [
//         { name: "CoolFix AC Service", rating: 4.8, experience: "6 Years", jobs: 256 },
//         { name: "FreshAir AC Repair", rating: 4.5, experience: "4 Years", jobs: 198 },
//         { name: "BlueStar Cooling", rating: 4.7, experience: "5 Years", jobs: 223 },
//       ],
//     },
//     {
//       serviceId: 9,
//       list: [
//         { name: "WasherPro Repair", rating: 4.6, experience: "4 Years", jobs: 167 },
//         { name: "FixMyWash Services", rating: 4.7, experience: "5 Years", jobs: 203 },
//         { name: "SmartWash Hub", rating: 4.8, experience: "6 Years", jobs: 245 },
//       ],
//     },
//     {
//       serviceId: 10,
//       list: [
//         { name: "CoolTech Fridge", rating: 4.8, experience: "7 Years", jobs: 289 },
//         { name: "FreezeFix Experts", rating: 4.6, experience: "4 Years", jobs: 176 },
//         { name: "ChillPoint Repair", rating: 4.7, experience: "5 Years", jobs: 212 },
//       ],
//     },
//     {
//       serviceId: 11,
//       list: [
//         { name: "PureDrop RO", rating: 4.7, experience: "5 Years", jobs: 234 },
//         { name: "AquaCare Solutions", rating: 4.6, experience: "4 Years", jobs: 187 },
//         { name: "Crystal RO Experts", rating: 4.8, experience: "6 Years", jobs: 267 },
//       ],
//     },
//     {
//       serviceId: 12,
//       list: [
//         { name: "PowerFix Electric", rating: 4.8, experience: "6 Years", jobs: 298 },
//         { name: "BrightWire Experts", rating: 4.5, experience: "3 Years", jobs: 156 },
//         { name: "SafeVolt Services", rating: 4.7, experience: "5 Years", jobs: 221 },
//       ],
//     },
//     {
//       serviceId: 13,
//       list: [
//         { name: "FlowMaster Plumbing", rating: 4.8, experience: "7 Years", jobs: 312 },
//         { name: "PipeFix Pros", rating: 4.6, experience: "5 Years", jobs: 243 },
//         { name: "AquaLine Plumbers", rating: 4.7, experience: "4 Years", jobs: 198 },
//       ],
//     },
//     {
//       serviceId: 14,
//       list: [
//         { name: "WoodCraft Carpentry", rating: 4.8, experience: "8 Years", jobs: 334 },
//         { name: "HandyCarpenter", rating: 4.5, experience: "3 Years", jobs: 145 },
//         { name: "RoyalWood Experts", rating: 4.7, experience: "5 Years", jobs: 267 },
//       ],
//     },
//     {
//       serviceId: 15,
//       list: [
//         { name: "ColorHouse Painters", rating: 4.9, experience: "7 Years", jobs: 389 },
//         { name: "PerfectPaint Studio", rating: 4.6, experience: "4 Years", jobs: 212 },
//         { name: "WallArt Painters", rating: 4.7, experience: "5 Years", jobs: 278 },
//       ],
//     },
//     {
//       serviceId: 16,
//       list: [
//         { name: "SecureCam Solutions", rating: 4.8, experience: "6 Years", jobs: 234 },
//         { name: "VisionEye CCTV", rating: 4.6, experience: "4 Years", jobs: 189 },
//         { name: "SafeHome Surveillance", rating: 4.7, experience: "5 Years", jobs: 223 },
//       ],
//     },
//     {
//       serviceId: 18,
//       list: [
//         { name: "HeatFix Geyser", rating: 4.8, experience: "6 Years", jobs: 256 },
//         { name: "WarmCare Tech", rating: 4.5, experience: "3 Years", jobs: 167 },
//         { name: "QuickHot Services", rating: 4.7, experience: "5 Years", jobs: 198 },
//       ],
//     },
//     {
//       serviceId: 19,
//       list: [
//         { name: "SunPower Solar", rating: 4.8, experience: "6 Years", jobs: 245 },
//         { name: "EcoSolar Maintenance", rating: 4.6, experience: "5 Years", jobs: 212 },
//         { name: "BrightSun Experts", rating: 4.7, experience: "4 Years", jobs: 189 },
//       ],
//     },
//     {
//       serviceId: 21,
//       list: [
//         { name: "ModernSpace Interiors", rating: 4.9, experience: "8 Years", jobs: 412 },
//         { name: "DreamHome Designers", rating: 4.7, experience: "6 Years", jobs: 298 },
//         { name: "Elite Interior Studio", rating: 4.8, experience: "7 Years", jobs: 356 },
//       ],
//     },
//     {
//       serviceId: 22,
//       list: [
//         { name: "GreenCare Gardeners", rating: 4.8, experience: "6 Years", jobs: 267 },
//         { name: "NatureLeaf Landscape", rating: 4.6, experience: "4 Years", jobs: 198 },
//         { name: "FreshBloom Garden", rating: 4.7, experience: "5 Years", jobs: 234 },
//       ],
//     },
//   ];

//   const [selectedServiceId, setSelectedServiceId] = useState(allServices[0].id);
//   const [providerList, setProviderList] = useState([]);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slidesPerView = 4;

//   useEffect(() => {
//     const matchedProviders =
//       providersData.find((p) => p.serviceId === selectedServiceId)?.list || [];
//     setProviderList(matchedProviders);
//   }, [selectedServiceId]);

//   const selectedService = allServices.find(s => s.id === selectedServiceId);

//   const nextSlide = () => {
//     if (currentSlide < allServices.length - slidesPerView) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
//       {/* Hero Header */}
//       <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4">
//         <div className="max-w-7xl mx-auto text-center">
//           <div className="flex items-center justify-center gap-2 mb-4">
//             <Sparkles className="w-8 h-8 animate-pulse" />
//             <h1 className="text-5xl font-bold">Premium Services</h1>
//           </div>
//           <p className="text-xl text-white/90 max-w-2xl mx-auto">
//             Connect with verified professionals for all your home service needs
//           </p>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-12">
//         {/* Service Categories Slider */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             Choose Your Service
//           </h2>
          
//           <div className="relative">
//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               disabled={currentSlide === 0}
//               className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
//                 currentSlide === 0
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white"
//               }`}
//               style={{ left: "-20px" }}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>

//             <button
//               onClick={nextSlide}
//               disabled={currentSlide >= allServices.length - slidesPerView}
//               className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
//                 currentSlide >= allServices.length - slidesPerView
//                   ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                   : "bg-white hover:bg-indigo-600 text-indigo-600 hover:text-white"
//               }`}
//               style={{ right: "-20px" }}
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             {/* Slider Container */}
//             <div className="overflow-hidden mx-8">
//               <div
//                 className="flex gap-4 transition-transform duration-500 ease-out"
//                 style={{
//                   transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`
//                 }}
//               >
//                 {allServices.map((service) => (
//                   <div
//                     key={service.id}
//                     onClick={() => setSelectedServiceId(service.id)}
//                     className={`flex-shrink-0 cursor-pointer group relative overflow-hidden rounded-2xl transition-all duration-300 ${
//                       selectedServiceId === service.id
//                         ? "ring-4 ring-indigo-500 shadow-2xl scale-105"
//                         : "hover:shadow-xl hover:scale-105"
//                     }`}
//                     style={{ width: `calc(${100 / slidesPerView}% - 12px)` }}
//                   >
//                     <div
//                       className={`bg-gradient-to-br ${service.gradient} p-6 h-40 flex flex-col items-center justify-center text-white relative`}
//                     >
//                       {selectedServiceId === service.id && (
//                         <div className="absolute top-2 right-2">
//                           <CheckCircle className="w-6 h-6 fill-white" />
//                         </div>
//                       )}
//                       <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
//                         {service.icon}
//                       </div>
//                       <h3 className="text-sm font-semibold text-center leading-tight">
//                         {service.title}
//                       </h3>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Selected Service Header */}
//         {selectedService && (
//           <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-indigo-100">
//             <div className="flex items-center gap-4">
//               <div className={`bg-gradient-to-br ${selectedService.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-3xl`}>
//                 {selectedService.icon}
//               </div>
//               <div>
//                 <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
//                 <p className="text-gray-600">{selectedService.decs}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Provider List */}
//         <div>
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-3xl font-bold text-gray-800">
//               Available Professionals
//             </h2>
//             <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
//               {providerList.length} Providers
//             </span>
//           </div>

//           {providerList.length > 0 ? (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {providerList.map((provider, index) => (
//                 <div
//                   key={index}
//                   className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-indigo-200"
//                 >
//                   <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 border-b border-gray-100">
//                     <div className="flex items-start justify-between mb-3">
//                       <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
//                         {provider.name}
//                       </h3>
//                       <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
//                         <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
//                         <span className="font-bold text-gray-800">{provider.rating}</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-3 text-sm">
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <Clock className="w-4 h-4 text-indigo-500" />
//                         <span>{provider.experience}</span>
//                       </div>
//                       <div className="flex items-center gap-1 text-gray-600">
//                         <CheckCircle className="w-4 h-4 text-green-500" />
//                         <span>{provider.jobs} Jobs</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-lg hover:shadow-xl">
//                       Book Now
//                       <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-20 bg-white rounded-2xl shadow-lg">
//               <div className="text-6xl mb-4">🔍</div>
//               <p className="text-xl text-gray-600 font-medium">
//                 No providers found for this service
//               </p>
//               <p className="text-gray-500 mt-2">Try selecting a different service category</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }