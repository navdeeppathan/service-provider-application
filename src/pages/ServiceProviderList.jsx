import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Share2,
  Heart,
  Star,
  Clock,
  CheckCircle,
  MessageCircle,
  Users,
  Shield,
  Award,
  ChevronRight,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../service/http";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

export default function ServiceProviderList() {
  // Mock data
  const { cateid, subid } = useParams();
  const [category, setCategory] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [selectedSub, setSelectedSub] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await http.get("/categories");

      // 1 Find correct category
      const matchedCategory = res.data.data.find(
        (item) => item.id === Number(cateid)
      );

      setCategory(matchedCategory);

      //  Set all subcategories
      setSubCategories(matchedCategory?.subcategories || []);

      //  Find correct subcategory by subid from URL
      const matchedSub = matchedCategory?.subcategories?.find(
        (s) => s.id === Number(subid)
      );

      setSelectedSub(matchedSub || null);
    } catch (err) {
      console.log(err);
    }
  };

  const gallery = [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&h=800&fit=crop",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("About");
  const [readMore, setReadMore] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const plans = [
    {
      name: "Classic",
      price: "150",
      desc: "Basic service package",
      duration: "1-2 hours",
      popular: false,
    },
    {
      name: "Premium",
      price: "180",
      desc: "Most popular choice",
      duration: "2-3 hours",
      popular: true,
    },
    {
      name: "Platinum",
      price: "230",
      desc: "Complete service",
      duration: "3-4 hours",
      popular: false,
    },
  ];

  const features = [
    { icon: Shield, text: "100% Verified Professionals" },
    { icon: Award, text: "Quality Guaranteed" },
    { icon: Clock, text: "On-Time Service" },
    { icon: CheckCircle, text: "Background Checked" },
  ];

  const moreServices = [
    {
      img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop",
      title: "Carpentry Services",
      subtitle: "Professional carpentry work",
      rating: "4.8",
    },
    {
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      title: "Painting Services",
      subtitle: "Interior & exterior painting",
      rating: "4.9",
    },
    {
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      title: "Garden & Lawn Care",
      subtitle: "Complete landscaping solutions",
      rating: "4.7",
    },
    {
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
      title: "Electrician Services",
      subtitle: "Wiring & electrical repairs",
      rating: "4.9",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <div className="max-w-7xl mx-auto px-15 py-25">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: Gallery Section */}
          <div className="lg:col-span-7">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden  group">
              <div className="relative h-[60vh] bg-gray-900">
                <img
                  src={gallery[currentImage]}
                  alt="Service"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Badges - Bottom Left */}
                {/* <div className="absolute bottom-6 left-6 flex flex-wrap gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium text-sm shadow-lg backdrop-blur-sm">
                    20% OFF Today
                  </div>
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-gray-900">4.9</span>
                    <span className="text-gray-500 text-sm">(2,450)</span>
                  </div>
                </div> */}

                {/* Price Badge - Bottom Right */}
                {/* <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                  <div className="text-xs text-gray-500 mb-1">Starting from</div>
                  <div className="text-2xl font-medium text-blue-600">
                    230 <span className="text-sm text-gray-500">AED/h</span>
                  </div>
                </div> */}

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentImage(
                      (currentImage - 1 + gallery.length) % gallery.length
                    )
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-800" />
                </button>
                <button
                  onClick={() =>
                    setCurrentImage((currentImage + 1) % gallery.length)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-6 h-6 text-gray-800" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-3 px-4 ">
                {gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all ${
                      currentImage === idx
                        ? "ring-4 ring-blue-500 shadow-xl scale-110"
                        : "opacity-60 hover:opacity-100 shadow"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumb ${idx}`}
                      className="w-full h-full object-cover "
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="h-16"></div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 shadow hover:shadow-xl transition-shadow text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <feature.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="text-xs font-normal text-gray-800">
                    {feature.text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Details Section */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Service Info Card */}
              <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-medium text-gray-900 mb-1 leading-tight">
                      {selectedSub?.name}
                    </h1>
                    <p className="text-gray-600 text-xs font-normal leading-relaxed">
                      {selectedSub?.desc}
                    </p>
                  </div>
                </div>

                {/* Team Section */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="flex -space-x-3">
                    <img
                      src="https://randomuser.me/api/portraits/men/32.jpg"
                      className="w-6 h-6 rounded-full border-2 border-white shadow"
                      alt="Expert 1"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/women/44.jpg"
                      className="w-6 h-6 rounded-full border-2 border-white shadow"
                      alt="Expert 2"
                    />
                    <img
                      src="https://randomuser.me/api/portraits/men/68.jpg"
                      className="w-6 h-6 rounded-full border-2 border-white shadow"
                      alt="Expert 3"
                    />
                    <div className="w-6 h-6 rounded-full border-2 border-white shadow bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-[10px] font-normal">
                      +15
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-900">
                      Expert Team
                    </div>
                    <div className="text-xs font-normal text-gray-500">
                      Verified professionals
                    </div>
                  </div>
                </div>
              </div>

              {/* Plans Selection */}
              {/* <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-shadow">
                <h3 className="text-md font-medium text-gray-900 mb-4">
                  Choose Your Plan
                </h3>
                <div className="space-y-3">
                  {plans.map((plan, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedPlan(idx)}
                      className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all ${
                        selectedPlan === idx
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "border-gray-200 hover:border-blue-300 hover:shadow"
                      }`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-[10px] font-normal px-3 py-1 rounded-full">
                          MOST POPULAR
                        </div>
                      )}
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-normal text-sm text-gray-900">
                            {plan.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {plan.desc}
                          </div>
                          <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {plan.duration}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-medium text-blue-600">
                            {plan.price}
                          </div>
                          <div className="text-xs text-gray-500">AED</div>
                        </div>
                      </div>
                      {selectedPlan === idx && (
                        <div className="absolute top-4 right-4 bg-blue-500 rounded-full p-1">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Action Buttons */}
              <div className="bg-white rounded-2xl p-6 shadow transform hover:shadow-xl transition-shadow space-y-3">
                <button
                  onClick={() => navigate(`/checkout/${cateid}/${subid}`)}
                  className="w-full bg-gradient-to-r from-blue-400 cursor-pointer to-blue-700 hover:from-blue-700 text-sm hover:to-blue-800 text-white font-normal py-2 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Book Service Now
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-normal text-sm py-2 rounded-xl transition-all flex items-center justify-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Chat with Expert
                </button>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm font-normal text-gray-900">
                      2-3h
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Duration</div>
                  </div>
                  <div>
                    <div className="text-sm font-normal text-gray-900">
                      4.9★
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Rating</div>
                  </div>
                  <div>
                    <div className="text-sm font-normal text-gray-900">
                      2.4k+
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Bookings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex overflow-x-auto scrollbar-hide">
                {[
                  "About",
                  "Service Details",
                  "Gallery",
                  "Packages",
                  "Reviews",
                ].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-4 text-sm font-normal whitespace-nowrap transition-all ${
                      activeTab === tab
                        ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {activeTab === "About" && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed font-normal text-sm">
                    {readMore
                      ? "Reliable, professional services with verified technicians. Quick response and transparent pricing. We perform end-to-end checks, use quality parts, and maintain a full-service warranty on labour and spare parts as applicable. Our teams are background-checked and trained to ensure safety and satisfaction. Booking is simple, with flexible time slots and priority options for premium customers."
                      : "Reliable, professional services with verified technicians. Quick response and transparent pricing. Read more for full details..."}
                  </p>
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className="mt-4 text-blue-600 font-normal  text-sm hover:text-blue-700 flex items-center gap-1"
                  >
                    {readMore ? "Read Less" : "Read More"}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        readMore ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                </div>
              )}

              {activeTab === "Service Details" && (
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    What's Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Complete system inspection",
                      "Deep cleaning of filters",
                      "Gas pressure check & refill",
                      "Thermostat calibration",
                      "Performance optimization",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm font-normal gap-3"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "Gallery" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        alt={`Gallery ${idx}`}
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Reviews" && (
                <div className="space-y-6">
                  {[1, 2, 3].map((review) => (
                    <div key={review} className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={`https://randomuser.me/api/portraits/men/${review}.jpg`}
                          className="w-12 h-12 rounded-full"
                          alt="Reviewer"
                        />
                        <div>
                          <div className="font-normal text-sm text-gray-900">
                            John Doe
                          </div>
                          <div className="flex items-center  gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-xs">
                        Excellent service! Very professional and thorough.
                        Highly recommend!
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* More Services */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-medium text-gray-900">
              More Services You'll Love
            </h2>
            <button className="text-blue-600 font-normal  text-sm hover:text-blue-700 flex items-center justify-center border border-blue-300 px-4 py-1 rounded-full gap-1">
              View All
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {moreServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.img}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    alt={service.title}
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-xs">
                      {service.rating}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-normal text-gray-900 text-sm mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">{service.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
