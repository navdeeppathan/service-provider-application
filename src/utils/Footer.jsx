import React, { useState } from "react";
import Header from "../utils/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";


const Footer = () => {
  

  return (
    <>
     

      <footer id="footer" className="bg-gray-900 text-gray-300  ">
        <div className="bg-gray-800 py-10">
          <div className="container mx-auto px-4">
            <div className="flex justify-center text-center">
              <div className="max-w-xl">
                <h4 className="text-2xl font-semibold text-white">
                  Join Our Newsletter
                </h4>
                <p className="mt-2 text-gray-400">
                  Subscribe to our newsletter and receive the latest news about
                  our products and services!
                </p>

                <form className="mt-5">
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg bg-gray-700 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="submit"
                      value="Subscribe"
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-15 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <a href="#" className="text-3xl font-bold text-white">
                eBusiness
              </a>

              <div className="mt-5">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                </p>
                <p>
                  <strong>Email:</strong> <span>info@example.com</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Useful Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Terms of service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Our Services
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Web Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Product Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <i className="bi bi-chevron-right"></i> Marketing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Follow Us
              </h4>
              <p className="text-gray-400 mb-4">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-white transition"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-white transition"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-white transition"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-white transition"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-6">
          <div className="container mx-auto px-4 text-center">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 text-white">HOMEXA</strong>{" "}
              <span>All Rights Reserved</span>
            </p>

            <div className="text-gray-400 text-sm mt-2">
              Designed by{" "}
              <a
                href="https://bootstrapmade.com/"
                className="text-blue-400 hover:text-blue-300"
              >
                HOMEXA
              </a>
            </div>
          </div>
        </div>
      </footer>

     <a
  href="#"
  id="scroll-top"
  className="fixed bottom-6 right-6 w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-full shadow-lg hover:bg-blue-700 transition"
>
  <i class="bi bi-arrow-up-short"></i>
</a>


      <div id="preloader" className="hidden"></div>
    </>
  );
};

export default Footer;
