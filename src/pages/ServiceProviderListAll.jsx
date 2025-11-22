import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  ChevronRight,
  Star,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link, useParams } from "react-router-dom";
import http from "../service/http";

export default function ServiceProviderListAll() {
  const { id } = useParams();

  const [category, setCategory] = useState(null);
  const [subcategories, setSubCategories] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await http.get("/categories");

      const matchedCategory = res.data.data.find(
        (item) => item.id === Number(id)
      );

      setCategory(matchedCategory);
      setSubCategories(matchedCategory?.subcategories || []);

      if (matchedCategory?.subcategories.length > 0) {
        setSelectedSub(matchedCategory.subcategories[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Header />

      <section className="mx-auto max-w-6xl  py-10 mt-10">
        <div className="relative w-full h-[450px] overflow-hidden">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${category?.img})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/75 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Star className="w-4 h-4 mr-2 text-yellow-300 fill-yellow-300" />
                <span className="text-xs font-normal">
                  Trusted by 10,000+ customers
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-medium mb-2 leading-tight">
                {category?.name}
              </h1>

              <p className="text-xs font-normal text-blue-100 mb-8 leading-relaxed">
                {category?.decs}
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                  <span className="font-normal text-xs">
                    Verified Professionals
                  </span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Clock className="w-4 h-4 mr-2 text-blue-300" />
                  <span className="font-normal text-xs">Same Day Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0 -mb-[1px]">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full block leading-none"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        {/* SUBCATEGORY SWIPER */}
        <h3 className="text-xl font-medium mt-16 mb-4">Available Services</h3>

        <div className="relative w-full mt-4 mb-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={24}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            speed={800}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="pb-8"
          >
            {subcategories?.map((sub) => (
              <SwiperSlide key={sub.id}>
                <div
                  onClick={() => setSelectedSub(sub)}
                  className={`cursor-pointer rounded-xl 
                    border border-gray-200 
                    shadow-md hover:shadow-lg 
                    hover:scale-105
                    hover:border-blue-100
                    hover:bg-blue-50
                    transition-all duration-300 
                    hover:-translate-y-1
                    flex flex-col 
                    h-24 p-4
                    ${
                      selectedSub?.id === sub.id
                        ? "bg-blue-50 shadow-xl"
                        : "bg-white "
                    }
                  `}
                >
                  <h3 className="text-sm font-medium text-gray-800">
                    {sub.name}
                  </h3>

                  <p
                    className={`text-base font-semibold
                    ${
                      selectedSub?.id === sub.id
                        ? "text-blue-700"
                        : "text-blue-600"
                    }
                  `}
                  >
                    ₹{sub.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {selectedSub && (
          <div className="bg-white rounded-3xl shadow-2xl mt-4 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-auto">
                <img
                  src={selectedSub.img}
                  alt={selectedSub.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-xl font-medium text-gray-900 mb-4">
                  {selectedSub.name}
                </h2>

                <p className="text-gray-600 text-sm font-normal mb-6 leading-relaxed">
                  {selectedSub.desc}
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <div className="flex items-baseline">
                    <span className="text-xl font-medium text-blue-600">
                      ₹{selectedSub.price}
                    </span>
                    <span className="text-gray-600 ml-2">/ service</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/checkout">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-normal py-2 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group">
                      Book Service Now
                      <ArrowRight className="ml-2 w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </Link>
                  <Link to={`/serviceproviderlist/${id}/${selectedSub.id}`}>
                    <button className="flex-1 bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-800 hover:text-blue-600 text-sm font-normal py-2 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                      View Details
                      <ChevronRight className="ml-2 w-3 h-3" />
                    </button>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-sm font-normal text-gray-900">
                        2-3h
                      </div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div>
                      <div className="text-sm font-normal text-gray-900">
                        4.8★
                      </div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-sm font-normal text-gray-900">
                        1000+
                      </div>
                      <div className="text-sm text-gray-600">Bookings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />

      <style>{`
        .custom-prev,
        .custom-next {
          position: absolute;
          top: 40%;
          z-index: 10;
          background: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .custom-prev { left: -20px; }
        .custom-next { right: -20px; }

        .custom-prev:hover,
        .custom-next:hover {
          background: #3b82f6;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 18px;
          color: #3b82f6;
          font-weight: 700;
        }

        .custom-prev:hover::after,
        .custom-next:hover::after {
          color: white;
        }
      `}</style>
    </>
  );
}
