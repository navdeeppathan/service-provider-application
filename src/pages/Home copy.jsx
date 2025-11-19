import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

/**
 * Homexa - Home.jsx
 * Fully rewritten page content for the Homexa Home Service Platform.
 * Tone: Professional + Clean (Urban Company style)
 *
 * NOTE:
 * - Replace Unsplash image URLs with your own assets later.
 * - Keeps original Tailwind classes and structure from your previous file.
 */

const allServices = [
  { id: 1, key: "home_cleaning", title: "Home Cleaning", img: "https://images.unsplash.com/photo-1581579182254-0f3f5a1f8d3d?q=80&w=1200&auto=format&fit=crop" },
  { id: 2, key: "deep_cleaning", title: "Deep Cleaning", img: "https://images.unsplash.com/photo-1581579182249-f8f94c3f1a59?q=80&w=1200&auto=format&fit=crop" },
  { id: 3, key: "bathroom_cleaning", title: "Bathroom Cleaning", img: "https://images.unsplash.com/photo-1581579182258-0e6a7bb2a2d2?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, key: "kitchen_cleaning", title: "Kitchen Cleaning", img: "https://images.unsplash.com/photo-1544213456-b254f2f4b8f3?q=80&w=1200&auto=format&fit=crop" },
  { id: 5, key: "sofa_cleaning", title: "Sofa Cleaning", img: "https://images.unsplash.com/photo-1582719478212-1a6f5b6a8b4b?q=80&w=1200&auto=format&fit=crop" },
  { id: 6, key: "mattress_cleaning", title: "Mattress Cleaning", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop" },
  { id: 7, key: "carpet_cleaning", title: "Carpet Cleaning", img: "https://images.unsplash.com/photo-1600585154211-4fcb0c23c6a1?q=80&w=1200&auto=format&fit=crop" },
  { id: 8, key: "ac_service", title: "AC Repair & Service", img: "https://images.unsplash.com/photo-1582719478212-1a6f5b6a8b4b?q=80&w=1200&auto=format&fit=crop" },
  { id: 9, key: "washing_machine", title: "Washing Machine Repair", img: "https://images.unsplash.com/photo-1581579182250-3b25f1b2a6d6?q=80&w=1200&auto=format&fit=crop" },
  { id: 10, key: "fridge_repair", title: "Refrigerator Repair", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop" },
  { id: 11, key: "ro_service", title: "RO / Water Purifier Service", img: "https://images.unsplash.com/photo-1600585154206-2f5c5d82c2ff?q=80&w=1200&auto=format&fit=crop" },
  { id: 12, key: "electrician", title: "Electrician Services", img: "https://images.unsplash.com/photo-1581093588401-9b2a6f7b6ef5?q=80&w=1200&auto=format&fit=crop" },
  { id: 13, key: "plumbing", title: "Plumbing Services", img: "https://images.unsplash.com/photo-1581579182279-6d0b6f4ee4be?q=80&w=1200&auto=format&fit=crop" },
  { id: 14, key: "carpenter", title: "Carpenter Services", img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" },
  { id: 15, key: "painting", title: "Painting Services", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop" },
  { id: 16, key: "cctv", title: "CCTV Installation", img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop" },
  { id: 17, key: "pest_control", title: "Pest Control", img: "https://images.unsplash.com/photo-1587019151443-1e0ebb2a0b3a?q=80&w=1200&auto=format&fit=crop" },
  { id: 18, key: "geyser_repair", title: "Geyser Repair", img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop" },
  { id: 19, key: "solar_service", title: "Solar Panel Service", img: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop" },
  { id: 20, key: "home_renovation", title: "Home Renovation", img: "https://images.unsplash.com/photo-1555002925-7e3bfb81a0d0?q=80&w=1200&auto=format&fit=crop" },
  { id: 21, key: "interior_design", title: "Interior Design", img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop" },
  { id: 22, key: "garden_maintenance", title: "Garden & Lawn Care", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop" },
];

const portfolioItems = [
  // Recent projects / before-after examples
  {
    id: 1,
    category: "home_cleaning",
    title: "Deep Home Clean – Juhu, Mumbai",
    img: "https://images.unsplash.com/photo-1581579182254-0f3f5a1f8d3d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "ac_service",
    title: "AC Service & Gas Refill – Dubai",
    img: "https://images.unsplash.com/photo-1582719478212-1a6f5b6a8b4b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "plumbing",
    title: "Bathroom Fix & Leak Repair – Pune",
    img: "https://images.unsplash.com/photo-1581579182279-6d0b6f4ee4be?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    category: "painting",
    title: "Interior Painting – Gurgaon Apartment",
    img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    category: "pest_control",
    title: "Pest Control – Termite Treatment",
    img: "https://images.unsplash.com/photo-1587019151443-1e0ebb2a0b3a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    category: "home_renovation",
    title: "Small Home Renovation – Living Room",
    img: "https://images.unsplash.com/photo-1555002925-7e3bfb81a0d0?q=80&w=1200&auto=format&fit=crop",
  },
];

const faqData = [
  {
    q: "How do I book a Homexa service?",
    a: "Select a service, choose a preferred date and time, provide your address, and confirm payment. You will receive a booking confirmation and technician details instantly.",
  },
  {
    q: "Are Homexa technicians verified?",
    a: "Yes. Every Homexa technician is background-checked, verified, and trained. We also collect ID and service history for transparency.",
  },
  {
    q: "What is Homexa’s cancellation policy?",
    a: "You can cancel up to 6 hours before the scheduled service for a full refund. Cancellations within 6 hours may be subject to a small fee depending on the service.",
  },
  {
    q: "Do you provide service warranties?",
    a: "Many Homexa services include a standard warranty (7–30 days) depending on the service type. Warranty details are shown on the service detail page.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing depends on the service package and scope. We offer transparent, fixed-price packages and itemized estimates for renovation and custom work.",
  },
];

const team = [
  {
    name: "Ravi Malhotra",
    role: "Head of Operations",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    desc: "10+ years managing service operations and quality assurance across cities.",
  },
  {
    name: "Aisha Khan",
    role: "Customer Experience Lead",
    img: "https://images.unsplash.com/photo-1545996124-2f46a3b14f9b?q=80&w=800&auto=format&fit=crop",
    desc: "Designs smooth booking journeys and ensures top-rated customer support.",
  },
  {
    name: "Suresh Patel",
    role: "Head Technician Network",
    img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop",
    desc: "Leads technician training and regional partner onboarding.",
  },
  {
    name: "Meera Joshi",
    role: "Product & Growth",
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop",
    desc: "Product strategist focusing on improving booking conversion and retention.",
  },
];

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate && useNavigate();

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />

      <main className="main mt-20">
        {/* HERO */}
        <section
          id="hero"
          className="pt-[100px] pb-[90px] relative overflow-hidden bg-white px-6"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              {/* LEFT CONTENT */}
              <div className="space-y-6 text-left md:text-left" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-[2.6rem] md:text-[3rem] sm:text-[2.4rem] xs:text-[1.8rem] font-semibold leading-[1.15] text-gray-900">
                  Smarter Services for Every Home
                </h2>

                <p className="text-[1.05rem] text-gray-600 leading-relaxed max-w-2xl">
                  Homexa connects you with verified professionals for cleaning,
                  repairs, installations and home improvements — fast, reliable,
                  and fully insured. Book a trusted expert in minutes and get
                  transparent pricing and service warranties.
                </p>

                <div className="flex gap-4 flex-wrap">
                  <a href="#contact" className="px-6 py-3 rounded-md font-semibold bg-[#1447E6] hover:bg-blue-700 text-white shadow transition">
                    Book a Service
                  </a>

                  <a href="#services" className="px-6 py-3 rounded-md font-semibold border-2 border-blue-600 text-blue-600 hover:bg-[#1447E0] hover:text-white transition">
                    Explore Services
                  </a>
                </div>

                {/* STATS */}
                <div className="flex gap-10 flex-wrap mt-6">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">120K+</h3>
                    <p className="text-sm text-gray-500 mt-1">Bookings Completed</p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">50K+</h3>
                    <p className="text-sm text-gray-500 mt-1">Verified Technicians</p>
                  </div>

                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-blue-600">4.8/5</h3>
                    <p className="text-sm text-gray-500 mt-1">Average Rating</p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="flex justify-center" data-aos="zoom-out" data-aos-delay="300">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
                  alt="Homexa service"
                  className="rounded-lg shadow-lg w-full hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 bg-[#F7FAFF] px-6 md:px-10">
          <div className="container mx-auto text-center mb-12" data-aos="fade-up">
            <h2 className="relative text-3xl font-semibold text-gray-900 w-fit mx-auto pb-4
              after:content-[''] after:absolute after:block after:w-[60px] after:h-[3px]
              after:bg-[#1447E6] after:left-0 after:right-0 after:bottom-0 after:mx-auto">
              About Homexa
            </h2>

            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
              Homexa is a technology-driven home services marketplace — delivering verified professionals,
              transparent pricing, and guaranteed quality across cleaning, repairs, installations, and renovations.
            </p>
          </div>

          <div className="container mx-auto" data-aos="fade-up" data-aos-delay="100">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="text-blue-600 font-semibold tracking-wide">WHY HOMEXA</span>
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight">Reliable professionals, delivered on time</h2>
                <p className="text-gray-600">
                  We verify each technician, standardize pricing, and provide clear service warranties so you can trust every booking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1447E6] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Verified Technicians</h4>
                      <p className="text-gray-600 text-sm">Background checks and ID verification for peace of mind.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1447E6] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Transparent Pricing</h4>
                      <p className="text-gray-600 text-sm">Fixed packages and clear estimates — no hidden charges.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1447E6] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l3 10 4-14 3 10h4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Service Warranty</h4>
                      <p className="text-gray-600 text-sm">Most services include a warranty window; details shown at booking.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1447E6] text-white flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3 7H9l3-7zM15 13l6 3-3 4-6-3 3-4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Instant Booking</h4>
                      <p className="text-gray-600 text-sm">Book same-day services or schedule at your convenience.</p>
                    </div>
                  </div>
                </div>

              </div>

              <div>
                <div className="relative" data-aos="zoom-out" data-aos-delay="300">
                  <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop" alt="Homexa about" className="rounded-xl shadow-lg w-full" />
                </div>

                <div className="mt-8 bg-[#1447E6] text-white w-max px-6 py-4 rounded-xl shadow-lg">
                  <h3 className="text-3xl font-bold">Service Coverage</h3>
                  <p className="text-sm opacity-90 mt-1">Available across major cities with rapid expansion weekly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 bg-white px-6 md:px-10">
          <div className="container mx-auto px-4 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive home services — verified professionals, transparent pricing, and guaranteed results.</p>
          </div>

          <div className="container mx-auto px-4 mt-10" data-aos="fade-up" data-aos-delay="100">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allServices.map((s) => (
                <article key={s.id} className="relative text-center p-6 shadow-sm border border-gray-100 rounded-xl hover:shadow-lg transition bg-white">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden mb-4">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm">Experienced professionals, genuine parts (where applicable), and on-time service.</p>

                  <a href="#contact" className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#1447E6] text-white flex items-center justify-center hover:bg-blue-700 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-20 bg-white px-6 md:px-10">
          <div className="container mx-auto px-4 text-center mb-12" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">Features</h2>
            <p className="text-gray-600 mt-2">Built to deliver consistent, high-quality home services at scale.</p>
          </div>

          <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">What makes Homexa different</h2>
                <p className="text-gray-600 mb-6">From real-time tracking to standardized checklists, Homexa ensures consistent outcomes for every home visit.</p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">99%</div>
                    <div className="text-gray-600 text-sm">Satisfaction Rate</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600 text-sm">Support & Booking</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">100K+</div>
                    <div className="text-gray-600 text-sm">Jobs Served</div>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">7–30d</div>
                    <div className="text-gray-600 text-sm">Warranty Window</div>
                  </div>
                </div>
              </div>

              <div data-aos="fade-left" data-aos-delay="300">
                <img src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1200&auto=format&fit=crop" alt="Features" className="rounded-xl shadow-md" />
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" className="py-20 bg-[#F7FAFF] px-6 md:px-10">
          <div className="container mx-auto px-4 text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Homexa</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We focus on trust, transparency, and delivering excellent outcomes for homeowners.</p>
          </div>

          <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 border border-gray-200 rounded-xl bg-white">
                    <h3 className="text-xl font-semibold mb-2">Verified Experts</h3>
                    <p className="text-gray-600 text-sm">Trusted partners who meet Homexa's quality standards.</p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-xl bg-white">
                    <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
                    <p className="text-gray-600 text-sm">Fixed packages with clear inclusions and optional add-ons.</p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-xl bg-white">
                    <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                    <p className="text-gray-600 text-sm">Same-day or scheduled appointments with SMS & email updates.</p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-xl bg-white">
                    <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                    <p className="text-gray-600 text-sm">Multiple payment options with secure checkout and receipts.</p>
                  </div>
                </div>
              </div>

              <div>
                <img src="https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=1200&auto=format&fit=crop" alt="Why Homexa" className="rounded-xl shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* RECENT PROJECTS / PORTFOLIO */}
        <section id="portfolio" className="py-20 bg-white px-6 md:px-10">
          <div className="container mx-auto px-4 mb-8 text-center" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Recent Projects</h2>
            <p className="text-gray-600 mt-2">Selected before-after projects and recent jobs completed by Homexa technicians.</p>
          </div>

          <div className="container mx-auto px-4">
            <ul className="flex justify-center gap-4 mb-8 flex-wrap" data-aos="fade-up" data-aos-delay="100">
              {[
                { label: "All", value: "all" },
                ...allServices.slice(0, 8).map(s => ({ label: s.title, value: s.key })),
              ].map((filter) => (
                <li key={filter.value} className={`cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition ${activeFilter === filter.value ? "bg-[#1447E6] text-white shadow" : "bg-white text-gray-700 border hover:bg-gray-100"}`} onClick={() => setActiveFilter(filter.value)}>
                  {filter.label}
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
              {filteredItems.map((item) => (
                <div key={item.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition relative">
                  <a href={item.img} className="glightbox" data-gallery="portfolio-gallery">
                    <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition" />
                  </a>

                  <div className="p-4">
                    <h4 className="text-lg font-semibold"><a href="#" className="hover:text-blue-600">{item.title}</a></h4>
                    <p className="text-gray-600 text-sm">Completed by our certified team with guaranteed results.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING / PACKAGES */}
        <section id="pricing" className="py-20 bg-gray-50 px-6 md:px-10">
          <div className="container mx-auto px-4 text-center mb-8" data-aos="fade-up">
            <h2 className="text-3xl font-bold">Service Packages</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">Transparent packages for common home services. Choose a package or ask for a custom estimate.</p>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Example package cards */}
              <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-xl font-semibold">Home Cleaning — Basic</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">₹</span>
                  <span className="text-4xl font-bold text-blue-600">799</span>
                  <span className="text-gray-600 ml-2">/ single visit</span>
                </div>
                <p className="text-gray-600 mt-3">General cleaning, dusting, vacuuming, and bathroom wipe-down.</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✔ Up to 3 rooms</li>
                  <li>✔ 2 technicians</li>
                  <li>✔ 24-hour support</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full bg-[#1447E6] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Book Now</a>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="200">
                <div className="absolute top-3 right-3 bg-[#1447E6] text-white text-xs px-3 py-1 rounded-full shadow">Popular</div>
                <h3 className="text-xl font-semibold">AC Service — Premium</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">₹</span>
                  <span className="text-4xl font-bold text-blue-600">1,499</span>
                  <span className="text-gray-600 ml-2">/ service</span>
                </div>
                <p className="text-gray-600 mt-3">Gas top-up, cleaning, filter check, and minor repairs included.</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✔ Certified AC technician</li>
                  <li>✔ Spare-part inspection</li>
                  <li>✔ 7-day warranty</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full bg-gray-100 border py-3 rounded-lg font-semibold hover:bg-gray-200 transition">Book Now</a>
              </div>

              <div className="bg-white shadow-md rounded-xl p-6 border hover:shadow-lg transition" data-aos="fade-up" data-aos-delay="300">
                <h3 className="text-xl font-semibold">Plumbing — Standard</h3>
                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">₹</span>
                  <span className="text-4xl font-bold text-blue-600">999</span>
                  <span className="text-gray-600 ml-2">/ visit</span>
                </div>
                <p className="text-gray-600 mt-3">Leak fixes, faucet replacement, and drain cleaning by expert plumbers.</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  <li>✔ Certified plumber</li>
                  <li>✔ Parts & labour estimate</li>
                  <li>✔ 14-day warranty</li>
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full bg-[#1447E6] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Request Quote</a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-white px-6 md:px-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-4" data-aos="fade-up" data-aos-delay="100">
                <div className="lg:pr-10">
                  <h3 className="text-3xl font-bold"><span className="text-gray-800">Frequently Asked </span><strong className="text-blue-600">Questions</strong></h3>
                  <p className="mt-3 text-gray-600">Answers to common queries homeowners ask before booking a Homexa technician.</p>
                </div>
              </div>

              <div className="lg:col-span-8" data-aos="fade-up" data-aos-delay="200">
                <div className="space-y-4">
                  {faqData.map((item, index) => (
                    <div key={index} className={`border rounded-xl p-5 cursor-pointer transition-all ${openIndex === index ? "bg-blue-50 border-blue-400" : "bg-white"}`} onClick={() => toggleFAQ(index)}>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2"><span className="text-blue-600 font-bold">{index + 1}.</span> {item.q}</h3>
                        <i className={`bi bi-chevron-right text-xl transition-transform ${openIndex === index ? "rotate-90 text-blue-600" : "text-gray-500"}`}></i>
                      </div>

                      <div className={`mt-3 text-gray-600 overflow-hidden transition-all ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TEAM */}
        <section id="team" className="py-20 bg-gray-50 px-6 md:px-10">
          <div className="container mx-auto px-4 text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            <p className="text-gray-600 mt-2">A cross-functional leadership team building Homexa’s operations, product, and quality programs.</p>
          </div>

          <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {team.map((member, index) => (
                <div key={index} className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <img src={member.img} alt={member.name} className="w-full h-60 object-cover" />
                    <div className="absolute top-3 right-3 bg-[#1447E6] text-white text-sm px-3 py-1 rounded-full shadow">{member.role}</div>
                  </div>

                  <div className="p-5 text-center">
                    <h4 className="text-xl font-semibold text-gray-800">{member.name}</h4>
                    <p className="text-gray-600 mt-2 text-sm">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 bg-white px-6 md:px-10">
          <div className="container mx-auto px-4 text-center mb-10" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-gray-900">Contact Homexa</h2>
            <p className="text-gray-600 mt-2">Have questions or need a custom quote? Reach our support team — we are happy to help.</p>
          </div>

          <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div className="bg-white shadow-md rounded-2xl p-8" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Contact Info</h3>
                  <p className="text-gray-600 mb-6">Our customer support is available 24/7 for booking and emergency service requests.</p>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#1447E6] text-white p-3 rounded-full text-xl">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Service Area</h4>
                      <p className="text-gray-600">Major metro areas — expanding weekly</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-[#1447E6] text-white p-3 rounded-full text-xl">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-[#1447E6] text-white p-3 rounded-full text-xl">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600">support@homexa.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white shadow-md rounded-2xl p-8" data-aos="fade-up" data-aos-delay="300">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Get In Touch</h3>
                  <p className="text-gray-600 mb-6">Request a callback, ask about packages, or get a custom estimate.</p>

                  <form className="space-y-5" data-aos="fade-up" data-aos-delay="200" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We will contact you shortly.'); }}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" name="name" placeholder="Your Name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                      <input type="email" name="email" placeholder="Your Email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />
                    </div>

                    <input type="text" name="subject" placeholder="Subject / Service" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" />

                    <textarea name="message" rows="6" placeholder="Message" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>

                    <div className="text-center">
                      <button type="submit" className="bg-[#1447E6] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">Send Message</button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;