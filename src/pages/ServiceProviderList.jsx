import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

/**
 * ServiceProviderList (Final)
 * - Desktop: Two-column layout (left gallery ~60%, right details ~40%)
 * - Gallery height: Medium (~50vh) for desktop & tablet (G2)
 * - Mobile: stacked layout (keeps your original mobile UI look)
 * - First gallery image uses local uploaded path (provided in conversation)
 */

export default function ServiceProviderList() {
  const { id } = useParams();
  const serviceId = parseInt(id || "1", 10);

  const allServices = [
    { id: 1, key: "home_cleaning", title: "Home Cleaning", decs: "Complete home cleaning with trained, background-verified staff.", icon: "bi bi-house-check", img: "https://images.unsplash.com/photo-1581579182254-0f3f5a1f8d3d?q=80&w=1200&auto=format&fit=crop" },
    { id: 2, key: "deep_cleaning", title: "Deep Cleaning", decs: "Deep, detailed cleaning for toughest stains & dirt.", icon: "bi bi-droplet-half", img: "https://images.unsplash.com/photo-1581579182249-f8f94c3f1a59?q=80&w=1200&auto=format&fit=crop" },
    { id: 8, key: "ac_service", title: "AC Repair & Service", decs: "AC service, repair, installation & gas filling.", icon: "bi bi-wind", img: "https://images.unsplash.com/photo-1582719478212-1a6f5b6a8b4b?q=80&w=1200&auto=format&fit=crop" },
    { id: 9, key: "washing_machine", title: "Washing Machine Repair", decs: "Front-load, top-load & automatic washer repair.", icon: "bi bi-arrow-repeat", img: "https://images.unsplash.com/photo-1581579182250-3b25f1b2a6d6?q=80&w=1200&auto=format&fit=crop" },
    { id: 10, key: "fridge_repair", title: "Refrigerator Repair", decs: "Cooling, gas refill, compressor fixing & more.", icon: "bi bi-snow", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop" },
    // ... other services
  ];

  const providersData = [
    { serviceId: 1, list: [{ name: "Sharma Home Cleaning", rating: 4.8, experience: "5 Years" }, { name: "Sparkle Cleaners", rating: 4.6, experience: "3 Years" }] },
    { serviceId: 2, list: [{ name: "Deep Clean Experts", rating: 4.9, experience: "7 Years" }] },
    { serviceId: 8, list: [{ name: "CoolFix AC Service", rating: 4.8, experience: "6 Years" }] },
  ];

  const selectedService = allServices.find((s) => s.id === serviceId) || allServices[0];
  const providerList = providersData.find((p) => p.serviceId === serviceId)?.list || [];

  // Gallery images: first is your uploaded file path; rest are placeholders (Unsplash)
  const gallery = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState("About");
  const [readMore, setReadMore] = useState(false);

  const plans = [
    { name: "Classic", price: "150 AED", desc: "Basic service" },
    { name: "Premium", price: "180 AED", desc: "Popular - adds more checks" },
    { name: "Platinum", price: "230 AED", desc: "Full service with priority" },
  ];

  return (
    <>
      <Header />

      {/* Container: full width layout */}
      <main className="bg-gray-50 min-h-screen mt-20">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 py-6">

          {/* DESKTOP TWO-COLUMN: uses grid with responsive columns.
              On small screens it stacks (mobile view preserved). */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT: gallery (desktop: span 7/12 ~58%, right: 5/12 ~42%) */}
            <div className="lg:col-span-7 col-span-1">
              <div className="rounded-xl overflow-hidden bg-white shadow relative">
                {/* Main Swiper gallery */}
                <Swiper
                  navigation
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[Navigation, Thumbs]}
                  className="w-full"
                  style={{ height: "50vh" }} // G2: medium height ~50vh
                >
                  {gallery.map((src, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="w-full h-full">
                        <img src={src} alt={`img-${idx}`} className="w-full h-full object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* overlay controls */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <button className="bg-white/90 p-2 rounded-full shadow"><i className="bi bi-arrow-left"></i></button>
                </div>

                <div className="absolute top-4 right-4 flex gap-3">
                  <button className="bg-white/90 p-2 rounded-full shadow"><i className="bi bi-share"></i></button>
                  <button className="bg-white/90 p-2 rounded-full shadow"><i className="bi bi-heart"></i></button>
                </div>

                {/* thumbnails (centered below the image) */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-[620px] px-4">
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    slidesPerView={4}
                    spaceBetween={10}
                    watchSlidesProgress
                    className="!bg-transparent"
                    breakpoints={{
                      320: { slidesPerView: 3 },
                      640: { slidesPerView: 4 },
                      1024: { slidesPerView: 5 },
                    }}
                  >
                    {gallery.map((src, i) => (
                      <SwiperSlide key={`t-${i}`} className="!w-auto">
                        <div className="w-20 h-14 rounded-lg overflow-hidden border-2 border-white shadow-sm">
                          <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* badges overlay */}
                <div className="absolute bottom-4 left-4 bg-white rounded-xl px-3 py-2 flex items-center gap-3 shadow">
                  <div className="text-sm font-semibold text-gray-700">20% OFF</div>
                  <div className="bg-yellow-100 px-2 py-1 rounded flex items-center gap-1">
                    <i className="bi bi-star-fill text-yellow-500"></i>
                    <span className="text-sm font-semibold">4.9</span>
                    <span className="text-xs text-gray-400">(2k)</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white rounded-xl px-4 py-2 shadow flex items-baseline gap-3">
                  <div className="text-sm text-gray-400">From</div>
                  <div className="text-lg font-bold text-[#1E57E0]">230 AED <span className="text-sm font-medium text-gray-400">/ h</span></div>
                </div>
              </div>

              {/* spacing for thumbnail overlap when stacked on mobile */}
              <div className="h-10 lg:h-6" />
            </div>

            {/* RIGHT: details */}
            <div className="lg:col-span-5 col-span-1">
              <div className="sticky top-6 space-y-4">

                {/* Title & team */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h1 className="text-2xl lg:text-3xl font-bold leading-tight">{selectedService.title}</h1>
                      <p className="text-gray-600 mt-2">{selectedService.decs}</p>

                      <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
                        <div className="flex -space-x-2">
                          <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="t1" />
                          <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="t2" />
                          <img src="https://randomuser.me/api/portraits/men/68.jpg" className="w-8 h-8 rounded-full border-2 border-white" alt="t3" />
                        </div>
                        <span className="text-xs text-gray-500">Team Experts</span>
                      </div>
                    </div>

                    <div className="hidden lg:flex lg:flex-col lg:items-end">
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="text-xl font-bold text-[#1E57E0]">230 AED / h</div>
                      <div className="text-sm text-gray-500 mt-2">⭐ 4.9 (2k)</div>
                    </div>
                  </div>

                  {/* Mobile price row */}
                  <div className="mt-3 lg:hidden flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-500">Starting at</div>
                      <div className="text-lg font-bold text-[#1E57E0]">230 AED / h</div>
                    </div>
                    <div className="text-sm text-gray-500">⭐ 4.9</div>
                  </div>
                </div>

                {/* Plans */}
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {plans.map((p) => (
                      <div key={p.name} className="border rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <div className="text-sm font-semibold">{p.name}</div>
                          <div className="text-xs text-gray-400">{p.desc}</div>
                        </div>
                        <div className="text-sm font-bold">{p.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="bg-white rounded-lg p-3 shadow-sm flex items-center gap-3">
                  <button className="flex-1 bg-[#1E57E0] text-white py-3 rounded-lg font-semibold">Book Service</button>
                  <button className="w-12 h-12 bg-white border rounded-lg shadow flex items-center justify-center">
                    <i className="bi bi-chat-dots text-lg"></i>
                  </button>
                </div>

                {/* small provider list preview */}
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold">Top Professionals</div>
                      <div className="text-xs text-gray-400">Verified & background checked</div>
                    </div>
                    <div>
                      <button className="text-sm text-[#1E57E0]">View all</button>
                    </div>
                  </div>

                  <div className="mt-3 space-y-3">
                    {providerList.slice(0, 3).map((p, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-lg font-semibold">P</div>
                        <div className="flex-1">
                          <div className="font-medium">{p.name}</div>
                          <div className="text-xs text-gray-500">⭐ {p.rating} • {p.experience}</div>
                        </div>
                        <div className="text-sm text-gray-700 font-semibold">170 AED</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* FULL-WIDTH TABS & CONTENT (below columns) */}
          <div className="mt-8">
            <div className="bg-white rounded-lg p-3 shadow-sm">
              <div className="flex flex-wrap gap-3">
                {["About", "Service", "Shop", "Gallery", "Packages", "Reviews"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-2 rounded-lg whitespace-nowrap ${activeTab === tab ? "bg-[#1E57E0] text-white" : "text-gray-600 bg-gray-100"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="mt-4 text-gray-700">
                {activeTab === "About" && (
                  <>
                    <p className="text-sm md:text-base">{readMore ? fullAboutText() : shortAboutText()}</p>
                    <button onClick={() => setReadMore((r) => !r)} className="mt-2 text-[#1E57E0] font-medium">
                      {readMore ? "Read Less" : "Read More"}
                    </button>
                  </>
                )}
                {activeTab === "Service" && <p className="text-sm md:text-base">Service details, inclusions and exclusions listed here in clear bullet points or paragraphs.</p>}
                {activeTab === "Shop" && <p className="text-sm md:text-base">Shop items and spare parts available for purchase.</p>}
                {activeTab === "Gallery" && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {gallery.map((g, i) => (
                      <div key={i} className="h-36 rounded overflow-hidden">
                        <img src={g} className="w-full h-full object-cover" alt={`g-${i}`} />
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "Packages" && <p className="text-sm md:text-base">Package information and bundled offers with benefits and terms.</p>}
                {activeTab === "Reviews" && <p className="text-sm md:text-base">Customer reviews and ratings (example content). ⭐⭐⭐⭐⭐</p>}
              </div>
            </div>
          </div>

          {/* More Services */}
          <div className="mt-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">More Services</h3>
              <button className="text-sm text-gray-500">View all</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <ServiceCard img="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" title="Carpentry Services" subtitle="Professional Carpentry" />
              <ServiceCard img="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=400&auto=format&fit=crop" title="Painting Services" subtitle="Professional Painting" />
              <ServiceCard img="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=400&auto=format&fit=crop" title="Garden & Lawn Care" subtitle="Landscaping & maintenance" />
              <ServiceCard img="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=400&auto=format&fit=crop" title="Electrician Services" subtitle="Wiring & Repairs" />
            </div>
          </div>
        </div>

        {/* Sticky bottom booking bar (desktop visible, mobile visible) */}
        <div className="fixed left-0 right-0 bottom-0 bg-gradient-to-r from-[#1E57E0] to-[#6B47FF] p-4 shadow-lg z-40">
          <div className="max-w-[1400px] mx-auto flex items-center gap-4 px-4">
            <div className="flex-1 text-white">
              <div className="text-sm">Blue Air Conditioning Technician</div>
              <div className="text-lg font-bold">230 AED / h</div>
            </div>
            <button className="bg-white text-[#1E57E0] px-6 py-3 rounded-lg font-semibold">Service Book</button>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}

/* Helper components and texts */

function ServiceCard({ img, title, subtitle }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <img src={img} className="w-full h-36 object-cover" alt={title} />
      <div className="p-3">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
      </div>
    </div>
  );
}

function shortAboutText() {
  return "Reliable, professional services with verified technicians. Quick response and transparent pricing. Read more for full details...";
}

function fullAboutText() {
  return "Reliable, professional services with verified technicians. Quick response and transparent pricing. We perform end-to-end checks, use quality parts, and maintain a full-service warranty on labour and spare parts as applicable. Our teams are background-checked and trained to ensure safety and satisfaction. Booking is simple, with flexible time slots and priority options for premium customers.";
}
