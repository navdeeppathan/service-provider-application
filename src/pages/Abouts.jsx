import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function Abouts() {
 

  return (
    <>
      <Header />

     <section id="about" className="py-30 bg-white px-6 md:px-10">
          {/* Section Title */}
          <div
            className="container mx-auto text-center mb-12"
            data-aos="fade-up"
          >
            <h2
              className="relative text-3xl font-semibold text-gray-900 w-fit mx-auto pb-4
              after:content-[''] after:absolute after:block after:w-[50px] after:h-[3px]
              after:bg-[#5678D0] after:left-0 after:right-0 after:bottom-0 after:mx-auto"
            >
              About Homexa
            </h2>

            <p className="mt-3 text-gray-600">
              Your trusted partner for safe, reliable and professional home
              services across all major categories.
            </p>
          </div>

          {/* About Content */}
          <div
            className="container mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="space-y-6"
              >
                {/* Meta */}
                <span className="text-blue-600 font-semibold tracking-wide">
                  MORE ABOUT US
                </span>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
                  Making Home Services Simple
                  <br /> Fast & Hassle-Free
                </h2>

                {/* Description */}
                <p className="text-gray-600">
                  At Homexa, we aim to redefine the home service experience by
                  delivering high-quality services through fully trained and
                  verified professionals. From deep cleaning to appliance
                  repair, we bring convenience, transparency, and trust to every
                  home.
                </p>

                {/* Feature List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Instant booking with confirmed time slots",
                      "Verified & trained service professionals",
                      "Fixed and transparent pricing",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          className="w-7 h-7 flex items-center justify-center 
                    bg-[#036DDA] text-white rounded-full shadow"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 12h16m-6-6l6 6-6 6"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Service warranty and dedicated support",
                      "Safety protocols for every service",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span
                          className="w-7 h-7 flex items-center justify-center 
                    bg-[#036DDA] text-white rounded-full shadow"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4 12h16m-6-6l6 6-6 6"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile + Contact */}
                <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <img
                      src="./img/person/person-m-2.webp"
                      alt="CEO Profile"
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-bold">Mario Smith</h4>
                      <p className="text-blue-600 text-sm">CEO & Founder</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex items-center gap-3 p-4 bg-white shadow rounded-lg">
                    <i className="bi bi-telephone-fill text-blue-600 text-xl"></i>
                    <div>
                      <p className="text-gray-500 text-sm">Call us anytime</p>
                      <p className="font-semibold text-gray-900">
                        +91 95753 70343
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Images Section */}
              <div data-aos="fade-up" data-aos-delay="300">
                {/* Main Image Wrapper */}
                <div
                  className="relative"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <img
                    src="./img/about/about-5.webp"
                    alt="Business Meeting"
                    className="rounded-xl shadow-lg w-full"
                  />

                  {/* Floating Small Image */}
                  <img
                    src="./img/about/about-square-1.webp"
                    alt="Team Discussion"
                    className="absolute bottom-0 right-0 w-40 rounded-xl shadow-md border-4 border-white translate-x-6 translate-y-6"
                  />
                </div>

                {/* Experience Badge */}
                <div className="mt-10 bg-[#5678D0] text-white w-max px-6 py-4 rounded-xl shadow-lg animate-float">
                  <h3 className="text-3xl font-bold">
                    15+ <span className="font-normal text-lg">Years</span>
                  </h3>
                  <p className="text-sm opacity-90">
                    Of experience in business service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="stats" className="py-20 bg-[#F1F7FC] px-10">
          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mb-12">
              <div data-aos="fade-right" data-aos-delay="200">
                <h3 className="text-3xl font-semibold mb-3 text-gray-900">
                  Transforming Data Into Impactful Insights
                </h3>
                <p className="text-gray-600">
                  Nunc euismod, tortor nec facilisis egestas, ligula turpis
                  cursus odio, a lobortis sapien ipsum et dolor. Morbi dignissim
                  cursus massa non lobortis.
                </p>
              </div>

              <div
                className="text-center lg:text-right"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="inline-flex items-center bg-white shadow-md px-5 py-3 rounded-xl">
                  <img
                    src="./img/about/about-1.webp"
                    className="w-14 h-14 rounded-md mr-3"
                    alt="User Group"
                  />

                  <div className="text-left">
                    <div className="flex items-center mb-1">
                      <span className="text-lg font-semibold mr-2">4.8/5</span>
                      <span className="text-yellow-500 flex">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-half"></i>
                      </span>
                    </div>

                    <p className="text-gray-500 text-sm">
                      Based on 70+ unique user reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-4xl font-bold text-[#1447E6] mb-1">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="120"
                    data-purecounter-duration="1.5"
                  ></span>
                  120 K+
                </h4>
                <p className="text-gray-500">Active Clients</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-4xl font-bold text-[#1447E6] mb-1">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="34"
                    data-purecounter-duration="1.5"
                  ></span>
                  50 K+
                </h4>
                <p className="text-gray-500">Analytics Projects</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h4 className="text-4xl font-bold text-[#1447E6] mb-1">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="97"
                    data-purecounter-duration="1.5"
                  ></span>
                  87 %
                </h4>
                <p className="text-gray-500">Automation Success</p>
              </div>

              <div data-aos="fade-up" data-aos-delay="400">
                <h4 className="text-4xl font-bold text-[#1447E6] mb-1">
                  <span
                    className="purecounter"
                    data-purecounter-start="0"
                    data-purecounter-end="99.96"
                    data-purecounter-duration="1.5"
                  ></span>
                  88%
                </h4>
                <p className="text-gray-500">Cloud Reliability</p>
              </div>
            </div>
          </div>
        </section>

         <section id="features" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4 text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900">Features</h2>
            <p className="text-gray-600 mt-2">
              Built to deliver consistent, high-quality home services at scale.
            </p>
          </div>

          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
              <div data-aos="fade-right" data-aos-delay="200">
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                  What makes Homexa different
                </h2>
                <p className="text-gray-600 mb-6">
                  From real-time tracking to standardized checklists, Homexa
                  ensures consistent outcomes for every home visit.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      99.9%
                    </div>
                    <div className="text-gray-600 text-sm">
                      Satisfaction Rate
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600 text-sm">
                      Support & Booking
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600 text-sm">Jobs Served</div>
                  </div>
                </div>
              </div>

              <div
                className="relative"
                data-aos="fade-left"
                data-aos-delay="300"
              >
                <img
                  src="./img/features/features-3.webp"
                  alt="Digital Solutions"
                  className="rounded-xl shadow-md"
                />

                <div className="absolute bottom-4 right-4 bg-[#5678D0] text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-md">
                  <i className="bi bi-award"></i>
                  <span>Industry Leader</span>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="text-3xl w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#5678D0] text-white">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">
                  Lightning Performance
                </h4>
                <p className="text-gray-600 mb-4">
                  Experience ultra-fast processing speeds with our optimized
                  infrastructure.
                </p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#5678D0] w-[95%]"></div>
                </div>
                <span className="text-sm text-gray-700">95% Efficiency</span>
              </div>

              <div
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <div className="text-3xl w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#5678D0] text-white">
                  <i className="bi bi-shield-shaded"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">
                  Advanced Security
                </h4>
                <p className="text-gray-600 mb-4">
                  Multi-layered security protocols protect you against modern
                  cyber threats.
                </p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#5678D0] w-full"></div>
                </div>
                <span className="text-sm text-gray-700">100% Secure</span>
              </div>

              <div
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <div className="text-3xl w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#5678D0] text-white">
                  <i className="bi bi-layers"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">
                  Seamless Integration
                </h4>
                <p className="text-gray-600 mb-4">
                  Easily connect all your existing systems with our scalable
                  platform.
                </p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#5678D0] w-[88%]"></div>
                </div>
                <span className="text-sm text-gray-700">88% Compatibility</span>
              </div>

              <div
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm  hover:shadow-2xl hover:scale-102 transition bg-white"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="text-3xl w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#5678D0] text-white">
                  <i className="bi bi-graph-up"></i>
                </div>
                <h4 className="font-semibold text-lg mb-3">Smart Analytics</h4>
                <p className="text-gray-600 mb-4">
                  Get powerful insights with real-time reporting and trend
                  analysis.
                </p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                  <div className="h-full bg-[#5678D0] w-[92%]"></div>
                </div>
                <span className="text-sm text-gray-700">92% Accuracy</span>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </>
  );
}
