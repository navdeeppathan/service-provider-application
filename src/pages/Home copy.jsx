import React from "react";
import Header from "../utils/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        <OfferSlider />
        <SpecialRequestCard />
        <Categories />
        <TopRatedCard />
        <BottomNav />
      </div>
    </div>
  );
};

function OfferSlider() {
  const slides = [
    {
      title: "UP TO",
      discount: "50% OFF",
      subtitle: "On First Cleaning Service",
      tag: "House Cleaning",
      image:
        "https://img.freepik.com/free-photo/young-cleaners-cleaning-modern-house_23-2147793963.jpg",
    },
    {
      title: "UP TO",
      discount: "40% OFF",
      subtitle: "On AC Cleaning Service",
      tag: "AC Cleaning",
      image:
        "https://img.freepik.com/free-photo/man-cleaning-ac-unit_23-2149390543.jpg",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1.2}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[170px] rounded-3xl overflow-hidden"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 p-4 flex flex-col justify-end text-white">
                <p className="text-xs">{item.title}</p>
                <h2 className="text-2xl font-extrabold leading-none">
                  {item.discount}
                </h2>
                <p className="text-xs opacity-80">{item.subtitle}</p>

                <button className="mt-2 px-3 py-1 bg-white text-black text-xs rounded-full w-fit">
                  {item.tag}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function SpecialRequestCard() {
  return (
    <div className="w-full max-w-md mx-auto px-4 mt-4">
      <div className="bg-[#0A67C8] rounded-3xl p-4 flex items-center gap-4 text-white shadow-md">
        {/* Left Icon */}
        <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
          {/* Replace with your SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="w-7 h-7 opacity-90"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zm0 7.29L5.74 7 12 4.71 18.26 7 12 9.29z" />
            <path d="M2 17l10 5 10-5-10-5-10 5zm10-2.29L5.74 17 12 19.29 18.26 17 12 14.71z" />
          </svg>
        </div>

        {/* Text */}
        <div className="flex-1">
          <h3 className="text-[15px] font-semibold">Special Requests</h3>
          <p className="text-sm text-white/80 leading-tight">
            You can now submit a Special request with us to obtain complete
            supervision and support...
          </p>
        </div>

        {/* Right Arrow */}
        <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
          <i className="fas fa-chevron-right text-white"></i>
        </button>
      </div>
    </div>
  );
}

function Categories() {
  const categories = [
    { name: "AC Service", icon: "❄️" },
    { name: "Painting", icon: "🎨" },
    { name: "Cleaning", icon: "🧹" },
    { name: "Salon", icon: "💈" },
    { name: "Painting Walls", icon: "🎨" },
    { name: "Cleaning Floors", icon: "🧹" },
    { name: "Salon Hair", icon: "💈" },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-4 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[17px] font-semibold">All Categories</h2>
        <button className="text-sm text-blue-600">View all</button>
      </div>

      {/* Swiper Scrollable Categories */}
      <Swiper
        modules={[FreeMode]}
        freeMode={true}
        slidesPerView={3.2}
        spaceBetween={12}
        className="mySwiper"
      >
        {categories.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="min-w-[95px] h-[90px] bg-[#eef5ff] rounded-2xl flex flex-col items-center justify-center text-center shadow-sm">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="text-sm text-gray-700">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function TopRatedCard() {
  return (
    <div className="w-full max-w-md mx-auto px-4 mt-4 mb-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[17px] font-semibold">Top Rated Service</h2>
        <button className="text-sm text-blue-600">View all</button>
      </div>

      {/* Card */}
      <div className="bg-white shadow-md rounded-3xl p-3 flex gap-3">
        {/* Image Left */}
        <div className="relative min-w-[90px] h-[90px] rounded-2xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/man-painting-wall-with-roller_23-2149158821.jpg"
            alt="service"
            className="w-full h-full object-cover"
          />

          {/* Discount Tag */}
          <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-1 rounded-full">
            20% OFF
          </div>

          {/* ⭐ Rating Badge (BOTTOM LEFT) */}
          <div className="absolute bottom-2 left-2 bg-white px-2 py-[2px] rounded-full flex items-center gap-1 shadow">
            <i className="fas fa-star text-yellow-500 text-xs"></i>
            <span className="text-xs font-medium">4.9</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-[16px] font-semibold">Savannah Nguyen</h3>

            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <i className="fas fa-paint-roller text-yellow-500"></i>
              <span>Professional Painter</span>
            </div>

            <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
              <img
                src="https://i.pravatar.cc/25?img=1"
                className="w-5 h-5 rounded-full"
              />
              <span>Team Experts</span>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center mt-2">
            <button className="px-3 py-1 bg-[#008cff] text-white text-xs rounded-full shadow">
              150 AED /h
            </button>

            <div className="flex items-center gap-4 text-gray-600">
              <i className="fas fa-share-alt"></i>
              <i className="far fa-heart"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="relative w-full max-w-md mx-auto bg-white rounded-t-3xl shadow-lg pb-3 pt-2 flex justify-between items-center px-6">
        {/* Left Icons */}
        <div className="flex flex-col items-center text-black">
          <i className="fas fa-home text-lg"></i>
          <span className="text-[11px] mt-1">Home</span>
        </div>

        <div
          onClick={() => navigate("/details")}
          className="flex flex-col items-center text-gray-500"
        >
          <i className="fas fa-th-large text-lg"></i>
          <span className="text-[11px] mt-1">Explore</span>
        </div>

        {/* Center Floating Button */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-xl flex items-center justify-center border-4 border-white">
            <i className="fas fa-layer-group text-white text-2xl"></i>
          </div>
        </div>

        <div className="flex flex-col items-center text-gray-500">
          <i className="fas fa-comment-dots text-lg"></i>
          <span className="text-[11px] mt-1">Message</span>
        </div>

        <div className="flex flex-col items-center text-gray-500">
          <i className="far fa-user text-lg"></i>
          <span className="text-[11px] mt-1">Profile</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
