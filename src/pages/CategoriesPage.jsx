import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { useNavigate } from "react-router-dom";

const CategoriesPage = () => {
  return (
    <div>
      <div>
        <CategoriesSection />
        <ExploreService />
        <BottomNav />
      </div>
    </div>
  );
};

function CategoriesSection() {
  const categories = [
    { name: "AC Service", icon: "fas fa-fan" },
    { name: "Painting", icon: "fas fa-paint-roller" },
    { name: "Cleaning", icon: "fas fa-broom" },
    { name: "Salon", icon: "fas fa-cut" },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-4">
      {/* Full Background Container */}
      <div className="bg-[#e7f0ff] p-4 rounded-3xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[17px] font-semibold">All Categories</h2>
          <button className="text-sm text-blue-600">View all</button>
        </div>

        {/* Swiper Scroll */}
        <Swiper
          modules={[FreeMode]}
          freeMode={true}
          slidesPerView={"auto"}
          spaceBetween={12}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div
                className="
                  min-w-[95px] h-[90px]
                  bg-white 
                  rounded-2xl 
                  flex flex-col items-center justify-center 
                  shadow-sm
                "
              >
                <i className={`${item.icon} text-2xl text-gray-700 mb-1`}></i>
                <p className="text-sm font-medium text-gray-700">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function ExploreService() {
  const services = [
    {
      name: "Cameron Williamson",
      role: "Professional Electrician",
      price: "120 AED /h",
      rating: "4.8 (19)",
      discount: "20% OFF",
      image:
        "https://img.freepik.com/free-photo/young-electrician-working-with-fuse-board_23-2149175982.jpg",
    },
    {
      name: "Dianne Russell",
      role: "Professional Carpentry",
      price: "170 AED /h",
      rating: "4.2 (16)",
      discount: "15% OFF",
      image:
        "https://img.freepik.com/free-photo/carpenter-working-wood_23-2149175888.jpg",
    },
    {
      name: "Theresa Webb",
      role: "Professional Core Lawn",
      price: "100 AED /h",
      rating: "4.9 (22)",
      discount: "20% OFF",
      image:
        "https://img.freepik.com/free-photo/gardener-cutting-grass_23-2149175939.jpg",
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[17px] font-semibold">Explore Service</h2>
        <button className="text-sm text-blue-600">View all</button>
      </div>

      {/* Container Background */}
      <div className="bg-[#e7f0ff] p-3 rounded-3xl flex flex-col gap-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm p-3 flex gap-3"
          >
            {/* Left Image */}
            <div className="relative min-w-[95px] h-[95px] rounded-xl overflow-hidden">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt=""
              />

              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-black/40 text-white text-[10px] px-2 py-1 rounded-full">
                {item.discount}
              </div>

              {/* Rating Badge */}
              <div className="absolute bottom-2 left-2 bg-white px-2 py-[2px] text-xs rounded-full flex items-center gap-1 shadow">
                <i className="fas fa-star text-yellow-500 text-xs"></i>
                <span className="font-medium">{item.rating}</span>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-[16px] font-semibold">{item.name}</h3>

                <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                  <i className="fas fa-user-tie text-yellow-500"></i>
                  <span>{item.role}</span>
                </div>

                {/* Team Experts */}
                <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
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
              </div>

              {/* Bottom Row */}
              <div className="flex justify-between items-center mt-2">
                <button className="px-3 py-1 bg-[#008cff] text-white text-xs rounded-full shadow">
                  {item.price}
                </button>

                <div className="flex items-center gap-4 text-gray-600">
                  <i className="fas fa-share-alt"></i>
                  <i className="far fa-heart"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
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

export default CategoriesPage;
