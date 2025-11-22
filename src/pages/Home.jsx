import React, { useEffect, useState } from "react";
import Header from "../utils/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../utils/Footer";
import http from "../service/http";

const portfolioItems = [
  // Home Cleaning
  {
    id: 1,
    category: "home-cleaning",
    title: "Home Cleaning 1",
    decs: "Professional home cleaning service.",
    img: "/home_cleing.jpg",
  },

  // Deep Cleaning
  {
    id: 4,
    category: "deep-cleaning",
    title: "Deep Cleaning 1",
    decs: "Intensive deep cleaning service.",
    img: "/deep cleaning.jpg",
  },

  // Bathroom Cleaning
  {
    id: 7,
    category: "bathroom-cleaning",
    title: "Bathroom Cleaning 1",
    decs: "Tiles & fittings cleaning.",
    img: "/bathroom cleaning.webp",
  },

  // AC Repair
  {
    id: 10,
    category: "ac-service",
    title: "AC Service 1",
    decs: "AC servicing with gas check.",
    img: "/ac repair service.webp",
  },

  // Electrician
  {
    id: 13,
    category: "electrician",
    title: "Electrician Work 1",
    decs: "Switchboard installation.",
    img: "/electrician services.jpg",
  },

  // Add similarly for all other categories...
];

const Home = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("home-cleaning");
  const [categories, setCategories] = useState([]);

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

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

  const team = [
    {
      name: "Hariom Birla",
      role: "Head of Operations",
      img: "https://aiuniversity.live/images/h.jpg",
      desc: "10+ years managing service operations and quality assurance across cities.",
    },
    {
      name: "Tarun Birla",
      role: "Customer Experience Lead",
      img: "https://aiuniversity.live/images/Tarun.png",
      desc: "Designs smooth booking journeys and ensures top-rated customer support.",
    },
    {
      name: "Navdeep Birla",
      role: "Head Technician Network",
      img: "/navdeep.jpeg",
      desc: "Leads technician training and regional partner onboarding.",
    },
    {
      name: "Harry",
      role: "Product & Growth",
      img: "https://aiuniversity.live/images/h.jpg",
      desc: "Product strategist focusing on improving booking conversion and retention.",
    },
  ];

  const serviceCategories = [
    {
      id: 1,
      category: "home-cleaning",
      title: "Professional Home Cleaning",
      decs: "Complete home cleaning including floors, windows, dusting and sanitation using eco-friendly supplies.",
      icon: "bi bi-house-check",
      img: "/home_cleing.jpg",
    },
    {
      id: 2,
      category: "deep-cleaning",
      title: "Deep Cleaning Service",
      decs: "Intensive cleaning for kitchen, bathroom, and entire house to remove stains, grease, and germs.",
      icon: "bi bi-badge-ad",
      img: "/deep cleaning.jpg",
    },
    {
      id: 3,
      category: "bathroom-cleaning",
      title: "Bathroom Cleaning",
      decs: "Tiles, commode, faucets, shower and glass cleaning with anti-bacterial treatment for freshness.",
      icon: "bi bi-droplet-half",
      img: "/bathroom cleaning.webp",
    },
  ];

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=1200&auto=format&fit=crop",
    // "https://images.unsplash.com/photo-1598023695159-8f7c6d46cddd?q=80&w=1200&auto=format&fit=crop",
  ];

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      // setLoading(true);
      const res = await http.get("/categories");
      setCategories(res.data.data || []);
    } catch (err) {
      console.log(err);
    } finally {
      // setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`.custom-prev,
        .custom-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 50;
          width: 40px;
          // height: 46px;
          // border-radius: 50%;
          // background: white;
          // box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          // border: 2px solid #3b82f6;
        }

        .custom-prev {
          left: -40px;
        }

        .custom-next {
          right: -40px;
        }

        .custom-prev::after,
        .custom-next::after {
          font-size: 20px;
          color: #3b82f6;
          font-weight: bold;
        }
          horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal {
            /* bottom: var(--swiper-pagination-bottom, 8px); */
            /* top: var(--swiper-pagination-top, auto); */
            /* left: 0; */
            /* width: 100%; */
            display: none;
        }`}
      </style>

      <Header />

      <main className="main mt-10">
        <section
          id="hero"
          className="pt-[80px] pb-[20px] relative overflow-hidden bg-white px-10"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              {/* LEFT CONTENT */}
              <div
                className="space-y-6 text-left md:text-left"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Heading */}
                <h2 className="text-[3rem] md:text-[2.5rem] sm:text-[2.5rem] xs:text-[2rem] font-semibold leading-[1.2] text-gray-900">
                  Trusted Professionals for Every Home Service
                </h2>

                {/* Paragraph */}
                <p className="text-[1.1rem] text-gray-600 leading-relaxed">
                  Homexa connects you with trained, background-verified experts
                  for AC servicing, appliance repair, deep cleaning, plumbing,
                  electrical work, painting, pest control and more. Book
                  reliable home services instantly at transparent prices.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 md:flex-row sm:flex-col">
                  <Link
                    href="#contact"
                    className="px-6 py-3 rounded-md font-semibold bg-[#5678D0] hover:bg-blue-700 text-white shadow transition"
                  >
                    Book a Service
                  </Link>

                  <Link
                    to="/servicecategories"
                    className="px-6 py-3 rounded-md font-semibold border-2 border-blue-600 text-blue-600 hover:bg-[#5678D0] hover:text-white transition"
                  >
                    Explore Services
                  </Link>
                </div>

                {/* Stats */}
                <div className="flex gap-10 flex-wrap sm:gap-6">
                  {/* Stat 1 */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end="15"
                        data-purecounter-duration="1"
                      ></span>
                      5 +
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Years of Trust</p>
                  </div>

                  {/* Stat 2 */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end="500"
                        data-purecounter-duration="1"
                      ></span>
                      10000 +
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Happy Customers
                    </p>
                  </div>

                  {/* Stat 3 */}
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">
                      <span
                        className="purecounter"
                        data-purecounter-start="0"
                        data-purecounter-end="98"
                        data-purecounter-duration="1"
                      ></span>
                      98 %
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {" "}
                      Service Satisfaction
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              {/* <div
                  className="flex justify-center"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                    alt="Homexa service"
                    className="rounded-lg shadow-lg w-full hover:scale-[1.03] transition-transform duration-500"
                  />
                </div> */}

              <div
                className="flex justify-center"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="w-full"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        className="rounded-lg shadow-lg w-full h-[400px] hover:scale-[1.03] transition-transform duration-500"
                        alt="Homexa slider"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-[#F1F7FC] px-10">
          <div
            className="container mx-auto px-4 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive home services — verified professionals, transparent
              pricing, and guaranteed results.
            </p>
          </div>

          <div
            className="container mx-auto px-4 mt-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative">
              {/* CUSTOM ARROWS */}
              <button className="swiper-button-prev custom-prev"></button>
              <button className="swiper-button-next custom-next"></button>

              <Swiper
                slidesPerView={1}
                spaceBetween={25}
                pagination={{ clickable: true }}
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
                className="mySwiper"
              >
                {categories.map((service, index) => (
                  <SwiperSlide key={index}>
                    <Link to={`/serviceproviderlistall/${service.id}`}>
                      <article
                        className="relative h-[280px] min-h-[280px] flex flex-col justify-between text-center p-8 shadow-md border border-gray-200 rounded-2xl bg-white hover:shadow-2xl hover:scale-102 transition-all duration-300
  transition"
                      >
                        <div>
                          <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-3xl mx-auto mb-4">
                            <i className={service.icon}></i>
                          </span>

                          <h3 className="text-xl font-semibold mb-3">
                            {service.name}
                          </h3>

                          <p className="text-gray-600 text-sm leading-relaxed">
                            {service.decs}
                          </p>
                        </div>

                        <Link
                          to={`/serviceproviderlistall/${service.id}`}
                          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                        >
                          <i className="bi bi-arrow-up-right"></i>
                        </Link>
                      </article>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate("/servicecategories")}
              className="px-6 py-3 mt-12 bg-[#5678D0] text-white flex items-center gap-2 rounded-full hover:bg-blue-700 transition"
            >
              View All Services
            </button>
          </div>
        </section>

        {/* <section id="alt-services" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {serviceCategories.map((service, index) => (
                <div
                  key={service.id}
                  data-aos="zoom-in"
                  data-aos-delay={(index + 1) * 100}
                >
                  <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white h-full flex flex-col">
                  
                    <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-xl">
                        <i className={service.icon}></i>
                      </div>
                      <h4 className="text-lg font-semibold">{service.title}</h4>
                    </div>

                    <div className="p-6 flex-grow">
                      <p className="text-gray-600 mb-4">{service.decs}</p>
                      <div className="rounded-lg overflow-hidden">
                        <img
                          src={service.img}
                          alt={service.title}
                          className="w-full h-[200px]"
                        />
                      </div>
                    </div>

                    <div className="p-6 border-t border-gray-100">
                      <Link
                        to="/servicecategories"
                        className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                      >
                        Explore Service <i className="bi bi-arrow-up-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        <section id="why-us" className="py-20 bg-[#F1F7FC] px-10">
          <div
            className="container mx-auto px-4 text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Homexa
            </h2>
            <p className="text-gray-600 mt-2">
              We focus on trust, transparency, and delivering excellent outcomes
              for homeowners.
            </p>
          </div>

          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div
                className="flex justify-center"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="w-full"
                >
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={img}
                        className="rounded-lg shadow-lg w-full h-[400px] hover:scale-[1.03] transition-transform duration-500"
                        alt="Homexa slider"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      01
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Verified Experts
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Trusted partners who meet Homexa's quality standards.
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      02
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Transparent Pricing
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fixed packages with clear inclusions and optional add-ons.
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      03
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Easy Scheduling
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Same-day or scheduled appointments with SMS & email
                      updates.
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      04
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Secure Payments
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Multiple payment options with secure checkout and receipts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4 mb-10 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <p className="text-gray-600 mt-2">
              Selected before-after projects and recent jobs completed by Homexa
              technicians.
            </p>
          </div>

          <div className="container mx-auto px-4">
            <ul
              className="flex justify-center gap-4 mb-10 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {[
                { label: "Home Cleaning", value: "home-cleaning" },
                { label: "Deep Cleaning", value: "deep-cleaning" },
                { label: "Bathroom Cleaning", value: "bathroom-cleaning" },
                { label: "AC Service", value: "ac-service" },
                { label: "Electrician", value: "electrician" },
                { label: "All", value: "all" },
              ].map((filter) => (
                <li
                  key={filter.value}
                  className={`cursor-pointer px-5 py-2 rounded-full text-sm font-medium transition
                  ${
                    activeFilter === filter.value
                      ? "bg-[#5678D0] text-white shadow"
                      : "bg-white text-gray-700 border hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </li>
              ))}
            </ul>

            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm  hover:shadow-2xl hover:scale-102 transition relative"
                >
                  <Link
                    href={item.img}
                    className="glightbox"
                    data-gallery="portfolio-gallery"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition"
                    />
                  </Link>

                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <Link href="#" className="hover:text-blue-600">
                        {item.title}
                      </Link>
                    </h4>
                    <p className="text-gray-600 text-sm">{item.decs}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-[#F1F7FC] px-10">
          <div
            className="container mx-auto px-4 text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold">Service Packages</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              Transparent packages for common home services. Choose a package or
              ask for a custom estimate.
            </p>
          </div>

          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <div
                className="bg-white shadow-md rounded-xl p-8 border-white  hover:shadow-2xl hover:scale-102 transition"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Home Cleaning — Basic
                </h3>

                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">₹</span>
                  <span className="text-4xl font-bold text-blue-600">799</span>
                  <span className="text-gray-600 ml-1">/ single visit</span>
                </div>

                <p className="text-gray-600 mt-3">
                  General cleaning, dusting, vacuuming, and bathroom wipe-down.
                </p>

                <h4 className="mt-6 font-semibold text-gray-700">
                  Features Included:
                </h4>

                <ul className="space-y-2 mt-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Up to 3 rooms
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>2
                    technicians
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    24-hour support
                  </li>
                </ul>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#5678D0] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Buy Now <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </div>

              <div
                className="bg-white shadow-xl border-white border-blue-500 rounded-xl p-8 relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="absolute top-3 right-3 bg-[#5678D0] text-white text-xs px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  AC Service — Premium
                </h3>

                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">₹</span>
                  <span className="text-4xl font-bold text-blue-600">
                    1,499
                  </span>
                  <span className="text-gray-600 ml-1">/ service</span>
                </div>

                <p className="text-gray-600 mt-3">
                  Gas top-up, cleaning, filter check, and minor repairs
                  included.
                </p>

                <h4 className="mt-6 font-semibold text-gray-700">
                  Features Included:
                </h4>

                <ul className="space-y-2 mt-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Certified AC technician
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Spare-part inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    7-day warranty
                  </li>
                </ul>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center justify-center w-full bg-gray-100 border py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Buy Now <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </div>

              <div
                className="bg-white shadow-md rounded-xl p-8 border-white  hover:shadow-2xl hover:scale-102 transition"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Plumbing — Standard
                </h3>

                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">₹</span>
                  <span className="text-4xl font-bold text-blue-600">999</span>
                  <span className="text-gray-600 ml-1">/ visit</span>
                </div>

                <p className="text-gray-600 mt-3">
                  Leak fixes, faucet replacement, and drain cleaning by expert
                  plumbers
                </p>

                <h4 className="mt-6 font-semibold text-gray-700">
                  Features Included:
                </h4>

                <ul className="space-y-2 mt-3 text-gray-700">
                  {[
                    "Certified plumber",
                    " Parts & labour estimate",
                    "14-day warranty",
                  ].map((txt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-blue-600"></i>
                      {txt}
                    </li>
                  ))}
                </ul>

                <Link
                  href="#"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#5678D0] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Buy Now <i className="bi bi-arrow-right ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* <section id="team" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4 text-center mb-14"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-gray-800">Team</h2>
            <p className="text-gray-600 mt-2">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden  hover:shadow-2xl hover:scale-102 transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 50}
                >
                  <div className="relative">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-60 object-cover"
                      loading="lazy"
                    />

                   

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 hover:opacity-100 transition-opacity">
                      <Link
                        href="#"
                        className="text-blue-600 text-xl hover:text-blue-800"
                      >
                        <i className="bi bi-linkedin"></i>
                      </Link>
                      <Link
                        href="#"
                        className="text-gray-700 text-xl hover:text-black"
                      >
                        <i className="bi bi-twitter-x"></i>
                      </Link>
                      <Link
                        href="#"
                        className="text-pink-600 text-xl hover:text-pink-800"
                      >
                        <i className="bi bi-instagram"></i>
                      </Link>
                    </div>
                  </div>

                  <div className="p-5 text-center">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h4>
                    <div className=" bg-[#5678D0] text-white text-sm px-3 py-1 rounded-full shadow">
                      {member.role}
                    </div>
                    <p className="text-gray-600 mt-2 text-sm">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
};

export default Home;
