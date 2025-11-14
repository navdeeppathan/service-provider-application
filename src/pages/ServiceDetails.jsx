import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import { useNavigate } from "react-router-dom";

const ServiceDetails = () => {
  return (
    <div>
      <div>
        <ServiceDetailsHeader />
        <ServiceTabs />
        <BottomBookButton />
      </div>
    </div>
  );
};

function ServiceDetailsHeader() {
  const images = [
    "https://img.freepik.com/free-photo/young-male-technician-repairing-air-conditioner_23-2149175899.jpg",
    "https://img.freepik.com/free-photo/technician-servicing-air-conditioner_23-2149390550.jpg",
    "https://img.freepik.com/free-photo/man-installing-air-conditioner_23-2149390546.jpg",
    "https://img.freepik.com/free-photo/repairman-checking-air-conditioner_23-2149175895.jpg",
    "https://img.freepik.com/free-photo/professional-technician-fixing-air-conditioner_23-2149175897.jpg",
  ];

  const [mainImg, setMainImg] = useState(images[0]);

  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* Main Image */}
      <div className="relative w-full h-[260px] rounded-b-3xl overflow-hidden">
        <img
          src={mainImg}
          alt="service"
          className="w-full h-full object-cover"
        />

        {/* Top buttons */}
        <div className="absolute top-4 left-4">
          <button className="w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow">
            <i className="fas fa-arrow-left text-gray-700"></i>
          </button>
        </div>

        <div className="absolute top-4 right-4 flex items-center gap-3">
          <button className="w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow">
            <i className="fas fa-share-alt text-gray-700"></i>
          </button>
          <button className="w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow">
            <i className="far fa-heart text-gray-700"></i>
          </button>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 px-4">
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={4}
          spaceBetween={12}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="w-[70px] h-[70px] rounded-xl overflow-hidden border border-white/50 shadow-sm cursor-pointer"
                onClick={() => setMainImg(img)}
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Section */}
      <div className="flex items-center gap-4 px-4 mt-3">
        <span className="bg-[#1d78f3] text-white text-xs px-3 py-1 rounded-full">
          25% OFF
        </span>
        <div className="flex items-center text-sm text-gray-700 gap-1">
          <i className="fas fa-star text-yellow-500"></i>
          <span>4.9 (35)</span>
        </div>
      </div>

      <div className="w-full  px-4 mt-4">
        {/* Title + Price */}
        <div className="flex justify-between items-start">
          <h2 className="text-[18px] font-semibold leading-tight">
            Blue Air Conditioning Technician
          </h2>

          <div className="text-blue-600 font-semibold text-[18px]">
            230 AED <span className="text-gray-500 text-sm">/h</span>
          </div>
        </div>

        {/* Service Type */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-700">
          <i className="fas fa-wrench text-yellow-500"></i>
          <span>Professional HVAC Service</span>
        </div>

        {/* Team Experts */}
        <div className="flex items-center gap-2 mt-2 text-xs text-gray-600">
          <div className="flex -space-x-2">
            <img
              src="https://i.pravatar.cc/40?img=1"
              className="w-6 h-6 rounded-full border border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=2"
              className="w-6 h-6 rounded-full border border-white"
            />
            <img
              src="https://i.pravatar.cc/40?img=3"
              className="w-6 h-6 rounded-full border border-white"
            />
          </div>
          <span>Team Experts</span>
        </div>

        {/* Packages Row */}
        <div className="flex gap-3 mt-4">
          {/* Classic */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <i className="far fa-star"></i>
              Classic
            </div>
            <div className="mt-2 text-gray-900 font-semibold">150 AED</div>
          </div>

          {/* Premium */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <i className="fas fa-star"></i>
              Premium
            </div>
            <div className="mt-2 text-gray-900 font-semibold">180 AED</div>
          </div>

          {/* Platinum */}
          <div className="flex-1 bg-white rounded-2xl p-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-red-500 font-medium">
              <i className="fas fa-star-of-life"></i>
              Platinum
            </div>
            <div className="mt-2 text-gray-900 font-semibold">230 AED</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceTabs() {
  const tabs = [
    "About",
    "Service",
    "Shop",
    "Gallery",
    "Packages",
    "Reviews",
    "FAQ",
  ];
  const [activeTab, setActiveTab] = useState("About");
  const swiperRef = useRef(null);

  const handleTabClick = (tab, index) => {
    setActiveTab(tab);

    // Scroll the clicked tab into view smoothly
    if (swiperRef.current && swiperRef.current.slideTo) {
      swiperRef.current.slideTo(index, 300);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-4">
      {/* Swiper Tabs */}
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={"auto"}
        spaceBetween={18}
        onSwiper={(sw) => (swiperRef.current = sw)}
        className="pb-2"
      >
        {tabs.map((tab, i) => (
          <SwiperSlide key={tab} className="!w-auto">
            <button
              onClick={() => handleTabClick(tab, i)}
              className={`pb-1 text-[15px] whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Tab Content */}
      <div className="mt-3 text-[14px] text-gray-600 leading-relaxed">
        {activeTab === "About" && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat{" "}
            <span className="text-blue-600 font-medium cursor-pointer">
              Read More...
            </span>
          </p>
        )}

        {activeTab !== "About" && (
          <div className="text-center py-6 text-gray-400">
            No content for <strong>{activeTab}</strong> yet.
          </div>
        )}
      </div>

      {/* More Services */}
      <div className="flex justify-between items-center mt-6">
        <h3 className="text-[16px] font-semibold">More Services</h3>
        <button className="text-blue-600 text-sm">View all</button>
      </div>

      {/* Example Card */}
      <div className="w-full bg-white rounded-2xl shadow-md mt-3 p-3 flex gap-3">
        <div className="w-[90px] h-[80px] rounded-xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/carpenter-workshop_23-2149175888.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h4 className="font-semibold text-[15px]">Carpentry Services</h4>
            <p className="text-gray-600 text-sm">Professional Carpentry</p>
          </div>
          <div className="text-blue-600 font-semibold text-[15px]">120 AED</div>
        </div>
      </div>
    </div>
  );
}

function BottomBookButton() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center">
      <button
        onClick={() => navigate("/categories")}
        className="
          w-[90%]
          max-w-md
          bg-gradient-to-r from-blue-500 to-blue-600
          text-white
          text-[16px]
          font-medium
          py-3
          rounded-full
          shadow-lg
          transition active:scale-95
        "
      >
        Service Book
      </button>
    </div>
  );
}

export default ServiceDetails;
