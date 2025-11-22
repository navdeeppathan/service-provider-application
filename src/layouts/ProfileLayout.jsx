import React from "react";
import ProfileSidebar from "../utils/ProfileSidebar";
import Header from "../utils/Header";
import Footer from "../utils/Footer";

export default function ProfileLayout({ children, active = "account" }) {
  return (
    <div className=" bg-gray-50">
      <Header />
      <div className="max-w-6xl mx-auto  py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6  mt-20">
          <div className="lg:col-span-3">
            <ProfileSidebar active={active} />
          </div>

          <main className="lg:col-span-9">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
