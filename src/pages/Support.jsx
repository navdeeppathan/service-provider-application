import React, { useState } from "react";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";

export default function Support() {
  const [openIndex, setOpenIndex] = useState(0);
  
    const toggleFAQ = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
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

  return (
    <>
      <Header />

      <section id="contact" className="py-30 bg-white px-10">
          <div
            className="container mx-auto px-4 text-center mb-14"
            data-aos="fade-up"
          >
            <h2 className="text-4xl font-bold text-gray-800">Contact</h2>
            <p className="text-gray-600 mt-2">
              Our customer support is available 24/7 for booking and emergency
              service requests.
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
                    Request a callback, ask about packages, or get a custom
                    estimate.
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
                      <p className="text-gray-600">Homexa Service HQ</p>
                      <p className="text-gray-600">Mumbai, India 535022</p>
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
                      <p className="text-gray-600">+91 95753 70343</p>
                      <p className="text-gray-600">+91 91117 58467</p>
                      <p className="text-gray-600">+91 91715 20657</p>
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
                      <p className="text-gray-600">help@honexa.in</p>
                      <p className="text-gray-600">support@honexa.in</p>
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
                    Have questions or need help with a service? Our team is
                    always here to assist.
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

      <Footer />
    </>
  );
}
