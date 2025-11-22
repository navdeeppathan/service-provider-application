import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../utils/Header";
import ProfileLayout from "../layouts/ProfileLayout";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userData"));

  // Local form state
  const [form, setForm] = useState({
    name: user?.name?.split(" ")[0] || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });

  // Handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await http.post("/profile/update", {
        id: user.id,
        name: `${form.first_name} ${form.last_name}`,
        email: form.email,
        phone: form.phone,
      });

      console.log("Updated:", res.data);

      // Update localStorage also
      localStorage.setItem(
        "userData",
        JSON.stringify({
          ...user,
          name: `${form.first_name} ${form.last_name}`,
          email: form.email,
          phone: form.phone,
        })
      );

      alert("Profile updated successfully!");
    } catch (err) {
      console.log(err);
      alert("Something went wrong!");
    }
  };
  const [preferences, setPreferences] = useState({
    orders: true,
    promotions: false,
    newsletter: true,
  });

  const togglePref = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <ProfileLayout active="dashboard">
        {/* ---------------- MAIN CONTENT ---------------- */}
        <main className="lg:col-span-3 space-y-6 mt-6 lg:mt-0">
          <h1 className="text-xl font-medium text-gray-800">
            Account Settings
          </h1>

          {/* PERSONAL INFORMATION */}
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-base font-medium mb-4">Personal Information</h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* FIRST NAME */}
                <div>
                  <label className="text-sm font-normal">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border  text-sm font-normal rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200 outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="text-sm font-normal">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    disabled
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border text-sm font-normal rounded-lg px-3 py-2 mt-1 
               bg-gray-100 text-gray-500 cursor-not-allowed
               focus:ring-0 focus:outline-none"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="text-sm font-normal">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone || ""}
                    onChange={handleChange}
                    className="w-full border text-sm font-normal rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200 outline-none"
                  />
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="mt-6 flex items-center justify-end">
                <button
                  type="submit"
                  className=" cursor-pointer text-sm font-normal bg-[#3b82f6] text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* EMAIL PREFERENCES */}
          {/* <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-medium mb-4">Email Preferences</h2>
            <div className="space-y-4">
              {[
                { key: "orders", label: "Order Updates" },
                { key: "promotions", label: "Promotions" },
                { key: "newsletter", label: "Newsletter" },
              ].map((item) => (
                <div
                  key={item.key}
                  className="flex justify-between items-center border-b pb-3"
                >
                  <div>
                    <h4 className="font-medium">{item.label}</h4>
                    <p className="text-sm text-gray-500">
                      Notifications for {item.label.toLowerCase()}
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences[item.key]}
                      onChange={() => togglePref(item.key)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#3b82f6] transition-all"></div>
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition"></div>
                  </label>
                </div>
              ))}
            </div>
          </div> */}

          {/* SECURITY */}
          {/* <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-medium mb-4">Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <div>
                <label className="text-sm font-medium">Current Password</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
                />
              </div>

              <div></div>

              <div>
                <label className="text-sm font-medium">New Password</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            <button className="mt-4 bg-[#3b82f6] text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
              Update Password
            </button>
          </div> */}

          {/* DELETE ACCOUNT */}
          <div className="bg-red-50 border border-red-200 shadow rounded-xl p-6">
            <h2 className="text-base font-normal text-red-700 mb-2">
              Delete Account
            </h2>
            <p className="text-gray-700 text-xs font-normal mb-4">
              This action is permanent. All bookings, saved locations, and
              account data will be deleted.
            </p>
            <div className="flex items-center justify-end">
              <button className="bg-red-600 text-sm font-normal text-white px-4 py-2 rounded-lg shadow hover:bg-red-700">
                Permanently Delete Account
              </button>
            </div>
          </div>
        </main>
      </ProfileLayout>
    </div>
  );
};

export default Profile;
