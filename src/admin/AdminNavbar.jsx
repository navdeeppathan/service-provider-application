import { Menu } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AdminNavbar({ setOpen }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <header className="w-full py-3 px-4 flex items-center bg-white shadow-sm rounded-bl-[12px] rounded-br-[12px]">

      {/* MOBILE MENU ICON */}
      <button className="md:hidden mr-2" onClick={() => setOpen(true)}>
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-gray-800">Welcome Admin</h1>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-[#F5F5F5] rounded-full px-3 py-2 w-[300px]">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent text-gray-600 placeholder-gray-400 text-sm focus:outline-none"
          />
          <button className="  flex items-center justify-center rounded-full">
            <img
              src="https://siaprofessional.nexteck.uk/Searchicon.png"
              className="w-full h-5"
              alt=""
            />
          </button>
        </div>
      </div>

      {/* RIGHT SECTION ICONS */}
      <div className="flex items-center gap-6 ml-auto">

        {/* <img
          src="https://siaprofessional.nexteck.uk/sidebar2.png"
          alt="Icon"
          className="w-[21px] h-[21px]"
        />

        <img
          src="https://siaprofessional.nexteck.uk/sidebar2.png"
          alt="Icon"
          className="w-[21px] h-[21px]"
        /> */}

        {/* PROFILE */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="w-9 h-9 flex items-center justify-center bg-[#D9D9D9] rounded-full text-gray-800 cursor-pointer">
            {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 top-10 w-40 bg-white shadow-lg rounded-md border z-50">
              <button
                className="w-full text-left px-4 py-2 text-[#0A3D8F] hover:bg-[#0A3D8F] hover:text-white"
                onClick={() => navigate("/admindashboard/profile")}
              >
                Profile
              </button>

              <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
