import React, { useState } from "react";
import Header from "../utils/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import Footer from "../utils/Footer";

const portfolioItems = [
  {
    id: 1,
    category: "app",
    title: "App 1",
    img: "./img/portfolio/portfolio-1.webp",
  },
  {
    id: 2,
    category: "product",
    title: "Product 1",
    img: "./img/portfolio/portfolio-10.webp",
  },
  {
    id: 3,
    category: "branding",
    title: "Branding 1",
    img: "./img/portfolio/portfolio-7.webp",
  },
  {
    id: 4,
    category: "books",
    title: "Books 1",
    img: "./img/portfolio/portfolio-4.webp",
  },
  {
    id: 5,
    category: "app",
    title: "App 2",
    img: "./img/portfolio/portfolio-2.webp",
  },
  {
    id: 6,
    category: "product",
    title: "Product 2",
    img: "./img/portfolio/portfolio-11.webp",
  },
  {
    id: 7,
    category: "branding",
    title: "Branding 2",
    img: "./img/portfolio/portfolio-8.webp",
  },
  {
    id: 8,
    category: "books",
    title: "Books 2",
    img: "./img/portfolio/portfolio-5.webp",
  },
  {
    id: 9,
    category: "app",
    title: "App 3",
    img: "./img/portfolio/portfolio-3.webp",
  },
  {
    id: 10,
    category: "product",
    title: "Product 3",
    img: "./img/portfolio/portfolio-12.webp",
  },
  {
    id: 11,
    category: "branding",
    title: "Branding 3",
    img: "./img/portfolio/portfolio-9.webp",
  },
  {
    id: 12,
    category: "books",
    title: "Books 3",
    img: "./img/portfolio/portfolio-6.webp",
  },
];
const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      q: "Non consectetur a erat nam at lectus urna duis?",
      a: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.",
    },
    {
      q: "Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?",
      a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.",
    },
    {
      q: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      a: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim.",
    },
    {
      q: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      a: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices.",
    },
    {
      q: "Tempus quam pellentesque nec nam aliquam sem et tortor consequat?",
      a: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in.",
    },
  ];

  const team = [
    {
      name: "Olivia Martinez",
      role: "Senior Developer",
      img: "./img/person/person-f-3.webp",
      desc: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      name: "James Wilson",
      role: "Creative Director",
      img: "./img/person/person-m-9.webp",
      desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque habitant morbi tristique.",
    },
    {
      name: "Sophia Johnson",
      role: "Project Manager",
      img: "./img/person/person-f-8.webp",
      desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
    },
    {
      name: "Benjamin Davis",
      role: "Business Analyst",
      img: "./img/person/person-m-12.webp",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    },
  ];

  return (
    <>
      <Header />

      <main className="main mt-20">
        <section
          id="hero"
          className="pt-[121px] pb-[119px] relative overflow-hidden bg-white px-10"
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
                <h2 className="text-[3rem] md:text-[3.3rem] sm:text-[2.5rem] xs:text-[2rem] font-semibold leading-[1.2] text-gray-900">
                  Smarter Services for Every Home
                </h2>

                {/* Paragraph */}
                <p className="text-[1.1rem] text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 md:flex-row sm:flex-col">
                  <a
                    href="#contact"
                    className="px-6 py-3 rounded-md font-semibold bg-[#5678D0] hover:bg-blue-700 text-white shadow transition"
                  >
                    Get a Free Consultation
                  </a>

                  <a
                    href="#services"
                    className="px-6 py-3 rounded-md font-semibold border-2 border-blue-600 text-blue-600 hover:bg-[#5678D0] hover:text-white transition"
                  >
                    Our Services
                  </a>
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
                      10 +
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Years Experience
                    </p>
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
                      100 +
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Clients Worldwide
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
                      80 %
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Success Rate</p>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div
                className="flex justify-center"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img
                  src="./img/about/about-8.webp"
                  alt="Consulting Services"
                  className="rounded-lg shadow-lg w-full hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        

        <section id="about" className="py-20 bg-[#F1F7FC] px-6 md:px-10">
  {/* Section Title */}
  <div className="container mx-auto text-center mb-12" data-aos="fade-up">
   <h2 className="relative text-3xl font-semibold text-gray-900 w-fit mx-auto pb-4
  after:content-[''] after:absolute after:block after:w-[50px] after:h-[3px]
  after:bg-[#5678D0] after:left-0 after:right-0 after:bottom-0 after:mx-auto">
  About
</h2>

    <p className="mt-3 text-gray-600">
      Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
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
      <div data-aos="fade-up" data-aos-delay="200" className="space-y-6">

        {/* Meta */}
        <span className="text-blue-600 font-semibold tracking-wide">
          MORE ABOUT US
        </span>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-900 leading-tight">
          Voluptas enim suscipit<br/> temporibus
        </h2>

        {/* Description */}
        <p className="text-gray-600">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
          architecto beatae vitae dicta sunt explicabo.
        </p>

        {/* Feature List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-gray-700">
            {[
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
              "Sed do eiusmod tempor",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-7 h-7 flex items-center justify-center 
        bg-[#036DDA] text-white rounded-full shadow">
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 0 24 24" 
  strokeWidth={2} 
  stroke="white" 
  className="w-5 h-5"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-6-6l6 6-6 6" />
</svg>

        </span>
                {item}
              </li>
            ))}
          </ul>

          <ul className="space-y-3 text-gray-700">
            {[
              "Incididunt ut labore et",
              "Dolore magna aliqua",
              "Ut enim ad minim veniam",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
               <span className="w-7 h-7 flex items-center justify-center 
        bg-[#036DDA] text-white rounded-full shadow">
          <svg 
  xmlns="http://www.w3.org/2000/svg" 
  fill="none" 
  viewBox="0 0 24 24" 
  strokeWidth={2} 
  stroke="white" 
  className="w-5 h-5"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-6-6l6 6-6 6" />
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
              <p className="font-semibold text-gray-900">+123 456-789</p>
            </div>
          </div>

        </div>
      </div>

      {/* Right Images Section */}
      <div data-aos="fade-up" data-aos-delay="300">

        {/* Main Image Wrapper */}
        <div className="relative" data-aos="zoom-out" data-aos-delay="400">
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
          <p className="text-sm opacity-90">Of experience in business service</p>
        </div>

      </div>
    </div>
  </div>
</section>


        <section id="stats" className="py-20 bg-white px-10">
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

        <section id="services" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div
            className="container mx-auto px-4 mt-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center">
              <article
                className="relative text-center p-8 shadow-sm border border-gray-200 rounded-xl hover:shadow-lg transition bg-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="bi bi-palette"></i>
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  <a
                    href="/"
                    className="hover:text-blue-600"
                  >
                    Creative <span className="text-blue-600">branding</span>
                  </a>
                </h3>

                <p className="text-gray-600 mb-6">
                  Suspendisse in ultricies ipsum. Nulla commodo sem ac tortor
                  rhoncus, vel volutpat magna varius.
                </p>

                <a
                  href="/"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </article>

              <article
                className="relative text-center p-8 shadow-sm border border-gray-200 rounded-xl hover:shadow-lg transition bg-white"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="bi bi-gem"></i>
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  <a
                    href="/"
                    className="hover:text-blue-600"
                  >
                    Design <span className="text-blue-600">systems</span>
                  </a>
                </h3>

                <p className="text-gray-600 mb-6">
                  Fusce aliquet, nibh ac facilisis viverra, nulla purus aliquet
                  diam.
                </p>

                <a
                  href="/"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </article>

              <article
                className="relative text-center p-8 shadow-sm border border-gray-200 rounded-xl hover:shadow-lg transition bg-white"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="bi bi-megaphone"></i>
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  <a
                    href="/"
                    className="hover:text-blue-600"
                  >
                    Marketing <span className="text-blue-600">strategies</span>
                  </a>
                </h3>

                <p className="text-gray-600 mb-6">
                  Aliquam erat volutpat. Integer at sapien at risus elementum
                  ornare.
                </p>

                <a
                  href="/"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </article>

              <article
                className="relative text-center p-8 shadow-sm border border-gray-200 rounded-xl hover:shadow-lg transition bg-white"
                data-aos="fade-up"
                data-aos-delay="250"
              >
                <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="bi bi-code-slash"></i>
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  <a
                    href="/"
                    className="hover:text-blue-600"
                  >
                    Digital <span className="text-blue-600">platforms</span>
                  </a>
                </h3>

                <p className="text-gray-600 mb-6">
                  Sed in tortor eget lacus gravida dignissim eu sed leo.
                </p>

                <a
                  href="/"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </article>

              <article
                className="relative text-center p-8 shadow-sm border border-gray-200 rounded-xl hover:shadow-lg transition bg-white"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="bi bi-graph-up"></i>
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  <a
                    href="/"
                    className="hover:text-blue-600"
                  >
                    Growth <span className="text-blue-600">acceleration</span>
                  </a>
                </h3>

                <p className="text-gray-600 mb-6">
                  Pellentesque faucibus augue at maximus ultricies, metus velit
                  malesuada.
                </p>

                <a
                  href="/"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </article>

              <article
                className="relative text-center p-8 shadow-sm border border-gray-200 rounded-xl hover:shadow-lg transition bg-white"
                data-aos="fade-up"
                data-aos-delay="350"
              >
                <span className="w-16 h-16 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-2xl mx-auto mb-4">
                  <i className="bi bi-camera-video"></i>
                </span>

                <h3 className="text-xl font-semibold mb-3">
                  <a
                    href="/"
                    className="hover:text-blue-600"
                  >
                    Media <span className="text-blue-600">solutions</span>
                  </a>
                </h3>

                <p className="text-gray-600 mb-6">
                  Curabitur eget dictum lacus. Cras et augue vitae ex dictum
                  tincidunt.
                </p>

                <a
                  href="/"
                  className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#5678D0] text-white flex items-center justify-center hover:bg-blue-700 transition"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="alt-services" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
              <div className="" data-aos="zoom-in" data-aos-delay="100">
                <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white h-full flex flex-col">
                  <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-xl">
                      <i className="bi bi-shield-check"></i>
                    </div>
                    <h4 className="text-lg font-semibold">
                      Consectetur adipiscing
                    </h4>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore.
                    </p>

                    <div className="rounded-lg overflow-hidden">
                      <img
                        src="./img/services/services-1.webp"
                        alt="Security Services"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100">
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Explore Service <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="" data-aos="zoom-in" data-aos-delay="200">
                <div className="border border-blue-600 rounded-xl shadow-md hover:shadow-lg transition bg-white h-full flex flex-col">
                  <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-xl">
                      <i className="bi bi-cpu"></i>
                    </div>
                    <h4 className="text-lg font-semibold">Sed do eiusmod</h4>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo.
                    </p>

                    <div className="rounded-lg overflow-hidden">
                      <img
                        src="./img/services/services-2.webp"
                        alt="Technology Solutions"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100">
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Explore Service <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="" data-aos="zoom-in" data-aos-delay="300">
                <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white h-full flex flex-col">
                  <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-xl">
                      <i className="bi bi-rocket-takeoff"></i>
                    </div>
                    <h4 className="text-lg font-semibold">Tempor incididunt</h4>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>

                    <div className="rounded-lg overflow-hidden">
                      <img
                        src="./img/services/services-3.webp"
                        alt="Innovation Services"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100">
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Explore Service <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="" data-aos="zoom-in" data-aos-delay="400">
                <div className="border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white h-full flex flex-col">
                  <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5678D0] text-white flex items-center justify-center text-xl">
                      <i className="bi bi-puzzle"></i>
                    </div>
                    <h4 className="text-lg font-semibold">Ut labore dolore</h4>
                  </div>

                  <div className="p-6 flex-grow">
                    <p className="text-gray-600 mb-4">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim.
                    </p>

                    <div className="rounded-lg overflow-hidden">
                      <img
                        src="./img/services/services-4.webp"
                        alt="Strategic Planning"
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100">
                    <a
                      href="#"
                      className="text-blue-600 font-medium hover:underline inline-flex items-center gap-1"
                    >
                      Explore Service <i className="bi bi-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
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
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
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
                  Revolutionary Digital Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Transforming business operations through innovative technology
                  and strategic implementation methodologies.
                </p>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      99.9%
                    </div>
                    <div className="text-gray-600 text-sm">
                      Uptime Guarantee
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600 text-sm">Expert Support</div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-gray-600 text-sm">
                      Satisfied Clients
                    </div>
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
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
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
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
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
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
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
                className="text-center p-8 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
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

            <div className="mt-20" data-aos="fade-up" data-aos-delay="100">
              <div
                className="text-center mb-10"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3 className="text-2xl font-semibold">
                  Advanced Capabilities
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                  Discover powerful features designed to elevate your business
                  operations.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div
                  className="relative border border-gray-200 rounded-xl p-8 shadow-sm bg-white hover:shadow-lg transition"
                  data-aos="fade-right"
                  data-aos-delay="300"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">01</div>
                    <div className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
                      Enterprise
                    </div>
                  </div>

                  <h5 className="font-semibold text-lg mb-3">
                    Automated Workflow Engine
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Streamline complex business processes with intelligent
                    automation.
                  </p>

                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Process
                      Optimization
                    </li>
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Error
                      Reduction
                    </li>
                  </ul>

                  <div className="absolute bottom-4 right-4 text-4xl text-gray-300">
                    <i className="bi bi-diagram-3"></i>
                  </div>
                </div>

                <div
                  className="relative border border-gray-200 rounded-xl p-8 shadow-sm bg-white hover:shadow-lg transition"
                  data-aos="fade-left"
                  data-aos-delay="400"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">02</div>
                    <div className="px-3 py-1 text-sm bg-purple-100 text-purple-600 rounded-full">
                      Premium
                    </div>
                  </div>

                  <h5 className="font-semibold text-lg mb-3">
                    Real-time Collaboration
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Enable seamless teamwork with synchronized data sharing.
                  </p>

                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Live Updates
                    </li>
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Team Sync
                    </li>
                  </ul>

                  <div className="absolute bottom-4 right-4 text-4xl text-gray-300">
                    <i className="bi bi-people"></i>
                  </div>
                </div>

                <div
                  className="relative border border-gray-200 rounded-xl p-8 shadow-sm bg-white hover:shadow-lg transition"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">03</div>
                    <div className="px-3 py-1 text-sm bg-green-100 text-green-600 rounded-full">
                      Standard
                    </div>
                  </div>

                  <h5 className="font-semibold text-lg mb-3">
                    Predictive Intelligence
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Leverage machine learning to forecast trends and support
                    decisions.
                  </p>

                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Trend Analysis
                    </li>
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Risk
                      Assessment
                    </li>
                  </ul>

                  <div className="absolute bottom-4 right-4 text-4xl text-gray-300">
                    <i className="bi bi-cpu"></i>
                  </div>
                </div>

                <div
                  className="relative border border-gray-200 rounded-xl p-8 shadow-sm bg-white hover:shadow-lg transition"
                  data-aos="fade-left"
                  data-aos-delay="600"
                >
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-3xl font-bold text-blue-600">04</div>
                    <div className="px-3 py-1 text-sm bg-yellow-100 text-yellow-600 rounded-full">
                      Coming Soon
                    </div>
                  </div>

                  <h5 className="font-semibold text-lg mb-3">
                    Cloud Scalability
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Dynamic resource allocation ensures smooth peak performance.
                  </p>

                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Auto Scaling
                    </li>
                    <li>
                      <i className="bi bi-check-circle mr-2"></i> Cost
                      Optimization
                    </li>
                  </ul>

                  <div className="absolute bottom-4 right-4 text-4xl text-gray-300">
                    <i className="bi bi-cloud-arrow-up"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="py-20 bg-white px-10">
          <div
            className="container mx-auto px-4 text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Us</h2>
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
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      01
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Primus contactus
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Phasellus eget enim eu lectus faucibus vestibulum.
                      Suspendisse sodales pellentesque elementum.
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      02
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Quaestio investigatio
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Curabitur ligula sapien, tincidunt non, euismod vitae,
                      posuere imperdiet, leo.
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      03
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      Consilium evolutio
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Fusce convallis metus id felis luctus adipiscing.
                      Pellentesque egestas neque sit amet.
                    </p>
                  </div>

                  <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition bg-white"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      04
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Executio</h3>
                    <p className="text-gray-600 text-sm">
                      Nam pretium turpis et arcu. Duis arcu tortor, suscipit
                      eget imperdiet nec.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img
                  src="./img/about/about-portrait-3.webp"
                  alt="Why Us"
                  className="rounded-2xl shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="call-to-action" className="py-20 bg-white relative px-10">
          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="relative bg-gray-50 rounded-3xl p-10 overflow-hidden shadow-lg">
              <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-blue-100 to-pink-100 opacity-40"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"></div>
                <div className="absolute top-20 left-16 w-14 h-14 bg-pink-200 rounded-xl rotate-12 opacity-30"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 relative">
                <div className="order-1 lg:order-2">
                  <div
                    className="relative"
                    data-aos="fade-left"
                    data-aos-delay="200"
                  >
                    <div className="relative w-full max-w-md mx-auto">
                      <img
                        src="./img/cta/cta-4.webp"
                        alt="CTA Image"
                        className="rounded-2xl shadow-xl w-full"
                      />

                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>
                      <div className="absolute -bottom-4 -right-6 w-16 h-16 bg-pink-300 rounded-full opacity-40 animate-ping"></div>
                    </div>

                    <div
                      className="absolute top-10 -left-4 bg-white shadow-md px-4 py-3 rounded-xl flex items-center gap-3 border border-gray-100"
                      data-aos="zoom-in"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-graph-up-arrow text-blue-600 text-xl"></i>
                      <div>
                        <h6 className="text-xl font-bold">95%</h6>
                        <span className="text-gray-600 text-sm">
                          Success Rate
                        </span>
                      </div>
                    </div>

                    <div
                      className="absolute bottom-6 -right-4 bg-white shadow-md px-4 py-3 rounded-xl flex items-center gap-3 border border-gray-100"
                      data-aos="zoom-in"
                      data-aos-delay="500"
                    >
                      <i className="bi bi-trophy-fill text-yellow-500 text-xl"></i>
                      <div>
                        <h6 className="text-xl font-bold">50K+</h6>
                        <span className="text-gray-600 text-sm">
                          Happy Clients
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-2 lg:order-1 flex items-center">
                  <div className="" data-aos="fade-right" data-aos-delay="300">
                    <div
                      className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="bi bi-rocket-takeoff text-lg"></i>
                      <span>Launch Today</span>
                    </div>

                    <h2
                      className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                      data-aos="fade-up"
                      data-aos-delay="450"
                    >
                      Ready to Take Your Business to the Next Level?
                    </h2>

                    <p
                      className="text-gray-600 text-lg mb-6"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      Quis autem vel eum iure reprehenderit qui in ea voluptate
                      velit esse quam nihil molestiae consequatur.
                    </p>

                    <div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                      data-aos="fade-up"
                      data-aos-delay="550"
                    >
                      {[
                        "24/7 Expert Support",
                        "Advanced Analytics",
                        "Seamless Integration",
                        "Custom Solutions",
                      ].map((text, i) => (
                        <div className="flex items-center gap-3" key={i}>
                          <i className="bi bi-check-circle-fill text-green-600 text-xl"></i>
                          <span className="text-gray-700">{text}</span>
                        </div>
                      ))}
                    </div>

                    <div
                      className="flex items-center gap-6 flex-wrap"
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      <a
                        href="#"
                        className="bg-[#5678D0] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                      >
                        Get Started Free
                      </a>

                      <div className="flex items-center gap-3">
                        <a
                          href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition"
                        >
                          <i className="bi bi-play-circle text-3xl"></i>
                          <span className="font-medium">Watch Demo</span>
                        </a>

                        <span className="text-gray-500 text-sm">
                          No credit card required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-gray-50 px-10">
          <div
            className="container mx-auto px-4 mb-10 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <p className="text-gray-600 mt-2">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="container mx-auto px-4">
            <ul
              className="flex justify-center gap-4 mb-10 flex-wrap"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {[
                { label: "All", value: "all" },
                { label: "App", value: "app" },
                { label: "Product", value: "product" },
                { label: "Branding", value: "branding" },
                { label: "Books", value: "books" },
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
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition relative"
                >
                  <a
                    href={item.img}
                    className="glightbox"
                    data-gallery="portfolio-gallery"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition"
                    />
                  </a>

                  <div className="p-4">
                    <h4 className="text-lg font-semibold">
                      <a href="#" className="hover:text-blue-600">
                        {item.title}
                      </a>
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lorem ipsum, dolor sit amet consectetur
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 bg-gray-50 px-10">
          <div
            className="container mx-auto px-4 text-center mb-12"
            data-aos="fade-up"
          >
            <h2 className="text-3xl font-bold">Pricing</h2>
            <p className="text-gray-600 mt-2 max-w-xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div
            className="container mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              <div
                className="bg-white shadow-md rounded-xl p-8 border hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Basic Plan
                </h3>

                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">$</span>
                  <span className="text-4xl font-bold text-blue-600">9.9</span>
                  <span className="text-gray-600 ml-1">/ month</span>
                </div>

                <p className="text-gray-600 mt-3">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium totam.
                </p>

                <h4 className="mt-6 font-semibold text-gray-700">
                  Features Included:
                </h4>

                <ul className="space-y-2 mt-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Duis aute irure dolor
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Excepteur sint occaecat
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Nemo enim ipsam voluptatem
                  </li>
                </ul>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#5678D0] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Buy Now <i className="bi bi-arrow-right ml-2"></i>
                </a>
              </div>

              <div
                className="bg-white shadow-xl border border-blue-500 rounded-xl p-8 relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="absolute top-3 right-3 bg-[#5678D0] text-white text-xs px-3 py-1 rounded-full shadow">
                  Most Popular
                </div>

                <h3 className="text-xl font-semibold text-gray-800">
                  Standard Plan
                </h3>

                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">$</span>
                  <span className="text-4xl font-bold text-blue-600">19.9</span>
                  <span className="text-gray-600 ml-1">/ month</span>
                </div>

                <p className="text-gray-600 mt-3">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum.
                </p>

                <h4 className="mt-6 font-semibold text-gray-700">
                  Features Included:
                </h4>

                <ul className="space-y-2 mt-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Consectetur adipiscing elit
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Sed do eiusmod tempor
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="bi bi-check-circle-fill text-blue-600"></i>
                    Ut labore et dolore magna
                  </li>
                </ul>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center w-full bg-gray-100 border py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Buy Now <i className="bi bi-arrow-right ml-2"></i>
                </a>
              </div>

              <div
                className="bg-white shadow-md rounded-xl p-8 border hover:shadow-xl transition"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  Premium Plan
                </h3>

                <div className="mt-4 flex items-end">
                  <span className="text-2xl font-bold text-blue-600">$</span>
                  <span className="text-4xl font-bold text-blue-600">39.9</span>
                  <span className="text-gray-600 ml-1">/ month</span>
                </div>

                <p className="text-gray-600 mt-3">
                  Quis autem vel eum iure reprehenderit qui in ea voluptate
                  velit esse quam nihil molestiae.
                </p>

                <h4 className="mt-6 font-semibold text-gray-700">
                  Features Included:
                </h4>

                <ul className="space-y-2 mt-3 text-gray-700">
                  {[
                    "Temporibus autem quibusdam",
                    "Saepe eveniet ut et voluptates",
                    "Nam libero tempore soluta",
                    "Cumque nihil impedit quo",
                    "Maxime placeat facere possimus",
                  ].map((txt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <i className="bi bi-check-circle-fill text-blue-600"></i>
                      {txt}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center justify-center w-full bg-[#5678D0] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Buy Now <i className="bi bi-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-white px-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-8">
              <div
                className="lg:col-span-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="lg:pr-10">
                  <h3 className="text-3xl font-bold">
                    <span className="text-gray-800">Frequently Asked </span>
                    <strong className="text-blue-600">Questions</strong>
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div
                className="lg:col-span-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="space-y-4">
                  {faqData.map((item, index) => (
                    <div
                      key={index}
                      className={`border rounded-xl p-5 cursor-pointer transition-all ${
                        openIndex === index
                          ? "bg-blue-50 border-blue-400"
                          : "bg-white"
                      }`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                          <span className="text-blue-600 font-bold">
                            {index + 1}.
                          </span>
                          {item.q}
                        </h3>

                        <i
                          className={`bi bi-chevron-right text-xl transition-transform ${
                            openIndex === index
                              ? "rotate-90 text-blue-600"
                              : "text-gray-500"
                          }`}
                        ></i>
                      </div>

                      <div
                        className={`mt-3 text-gray-600 overflow-hidden transition-all ${
                          openIndex === index
                            ? "max-h-40 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {item.a}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-white px-10">
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
                  className="w-full max-w-xs bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
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

                    <div className="absolute top-3 right-3 bg-[#5678D0] text-white text-sm px-3 py-1 rounded-full shadow">
                      {member.role}
                    </div>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4 opacity-0 hover:opacity-100 transition-opacity">
                      <a
                        href="#"
                        className="text-blue-600 text-xl hover:text-blue-800"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a
                        href="#"
                        className="text-gray-700 text-xl hover:text-black"
                      >
                        <i className="bi bi-twitter-x"></i>
                      </a>
                      <a
                        href="#"
                        className="text-pink-600 text-xl hover:text-pink-800"
                      >
                        <i className="bi bi-instagram"></i>
                      </a>
                    </div>
                  </div>

                  <div className="p-5 text-center">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {member.name}
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm">{member.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50 px-10">
          <div
            className="container mx-auto px-4 text-center mb-14"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
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
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <div
                  className="bg-white shadow-md rounded-2xl p-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Contact Info
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi.
                  </p>

                  <div
                    className="flex items-start gap-4 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="bg-[#5678D0] text-white p-3 rounded-full text-xl">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Our Location
                      </h4>
                      <p className="text-gray-600">A108 Adam Street</p>
                      <p className="text-gray-600">New York, NY 535022</p>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-4 mb-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="bg-[#5678D0] text-white p-3 rounded-full text-xl">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Phone Number
                      </h4>
                      <p className="text-gray-600">+1 5589 55488 55</p>
                      <p className="text-gray-600">+1 6678 254445 41</p>
                    </div>
                  </div>

                  <div
                    className="flex items-start gap-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div className="bg-[#5678D0] text-white p-3 rounded-full text-xl">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        Email Address
                      </h4>
                      <p className="text-gray-600">info@example.com</p>
                      <p className="text-gray-600">contact@example.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div
                  className="bg-white shadow-md rounded-2xl p-8"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                    Get In Touch
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi.
                  </p>

                  <form
                    className="space-y-5"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                      />

                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <textarea
                      name="message"
                      rows="6"
                      placeholder="Message"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="bg-[#5678D0] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
                      >
                        Send Message
                      </button>
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
