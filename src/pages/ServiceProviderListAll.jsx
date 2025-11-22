import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, Star, Clock, CheckCircle, ArrowRight } from "lucide-react";

import { Navigation } from "swiper/modules";
import "swiper/css";
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

      <section className="container mx-auto px-5 md:px-10 py-10 mt-10">

        

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
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 mr-2 text-yellow-300 fill-yellow-300" />
              <span className="text-sm font-medium">Trusted by 10,000+ customers</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              {category?.name}
            </h1>
            
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              {category?.decs}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 mr-2 text-green-300" />
                <span className="font-medium">Verified Professionals</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5 mr-2 text-blue-300" />
                <span className="font-medium">Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </div>

        {/* SUBCATEGORY SWIPER */}
        <h3 className="text-2xl font-bold mt-10 mb-4">Available Services</h3>

        <div className="relative w-full my-8">
          <button className="swiper-button-prev custom-prev"></button>
          <button className="swiper-button-next custom-next"></button>

          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            modules={[Navigation]}
          >
            {subcategories?.map((sub) => (
              <SwiperSlide key={sub.id}>
                <div
                key={sub.id}
                onClick={() => setSelectedSub(sub)}
                className={`
                  group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105
                  ${selectedSub?.id === sub.id 
                    ? "ring-4 ring-blue-500 shadow-2xl scale-105" 
                    : "shadow-lg hover:shadow-2xl"
                  }
                `}
              >
                {/* <div className="relative h-48 overflow-hidden">
                  <img 
                    src={sub.img} 
                    alt={sub.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    selectedSub?.id === sub.id 
                      ? "bg-blue-600/40" 
                      : "bg-black/20 group-hover:bg-black/30"
                  }`}></div>
                  
                  {selectedSub?.id === sub.id && (
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                  )}
                </div> */}
                
                <div className={`p-5 transition-colors duration-300 ${
                  selectedSub?.id === sub.id 
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white" 
                    : "bg-white text-gray-900"
                }`}>
                  <h3 className="text-xl font-bold mb-2">{sub.name}</h3>
                  <p className={`text-2xl font-bold ${
                    selectedSub?.id === sub.id ? "text-white" : "text-blue-600"
                  }`}>
                    ₹{sub.price}
                  </p>
                </div>
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      


         {selectedSub && (
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
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
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 w-fit">
                  Selected Service
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  {selectedSub.name}
                </h2>
                
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {selectedSub.desc}
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-blue-600">
                      ₹{selectedSub.price}
                    </span>
                    <span className="text-gray-600 ml-2">/ service</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
<Link to='/checkout'>

                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center group">
                    Book Service Now
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  </Link>
                  <Link to={`/serviceproviderlist/${id}/${selectedSub.id}`}>
                  <button className="flex-1 bg-white border-2 border-gray-300 hover:border-blue-600 text-gray-800 hover:text-blue-600 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center">
                    View Details
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                  </Link>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">2-3h</div>
                      <div className="text-sm text-gray-600">Duration</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">4.8★</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">1000+</div>
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


