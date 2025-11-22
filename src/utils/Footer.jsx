import React, { useState } from "react";
import Header from "../utils/Header";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="bg-[#F1F7FC] text-black shadow-md">
        <div className="container mx-auto max-w-7xl px-15 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <a href="/" className="text-xs font-bold text-black">
                <img src="/Newlogo.png" alt="Logo" className="w-[100px] " />
              </a>

              <div className="mt-5 text-sm">
                <p>Homexa Service HQ</p>
                <p>Mumbai, India 535022</p>
                <p className="mt-3">
                  Phone: <span>+91 95753 70343</span>
                </p>
                <p>
                  Email: <span>support@homexa.in</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-medium text-black mb-4">
                Useful Links
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/abouts"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicecategories"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/termandcondition"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privecepolicy"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-black mb-4">
                Our Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#services"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Home Cleaning
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    AC Repair & Service
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Electrician Services
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="flex items-center gap-2 hover:text-[#5678D0] transition"
                  >
                    Solar Panel Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-medium text-black mb-4">Follow Us</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>

              <div className="flex gap-3">
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-[#5678D0] transition"
                >
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-[#5678D0] transition"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-[#5678D0] transition"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 text-xl hover:text-[#5678D0] transition"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <div className="container mx-auto px-4 text-center text-sm">
            <p>
              © <span>Copyright</span>
              <span className="px-1 text-black font-semibold">HOMEXA</span>{" "}
              <span>All Rights Reserved</span>
            </p>

            <div className="text-gray-800  mt-2">
              Designed by{" "}
              <a
                href="https://homexa.infoharry.in/"
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
