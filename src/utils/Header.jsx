import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
   const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home"); // ACTIVE STATE
const userData = JSON.parse(localStorage.getItem("userData"));

const [open, setOpen] = useState(false);
 const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["home", "about", "services", "portfolio", "team", "contact"];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 w-full z-50 px-10 transition-all duration-500 ${
          isScrolled ? "bg-white shadow-lg" : "bg-[#FFF]"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-20 text-white">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
          <img src="./Newlogo.png" alt="Logo" className="w-[100px] h-[100px]" />
            
          </a>

          {/* Desktop Menu */}
          <nav className="hidden xl:block">
            <ul className="flex items-center space-x-8 font-medium">

              {menuItems.map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <a
                    href={`#${item}`}
                    onClick={() => setActive(item)}
                    className={`${
                      active === item ? "text-black" : "text-black/50"
                    } hover:text-black`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>

                  {/* ACTIVE + HOVER UNDERLINE */}
                  <span
                    className={`content-[''] absolute h-[2px] bottom-[-15px] left-0 
                      bg-[#036DDA] transition-all duration-300
                      ${active === item ? "visible w-full" : "invisible w-0 group-hover:visible group-hover:w-full"}
                    `}
                  ></span>
                </li>
              ))}

              {/* DROPDOWN */}
              <li className="relative group">
                <button className="flex items-center text-white/80 hover:text-white">
                  Dropdown <i className="bi bi-chevron-down ml-1"></i>
                </button>

                <span className="content-[''] absolute h-[2px] bottom-[-15px] left-0 
                  bg-[#036DDA] invisible w-0 group-hover:visible group-hover:w-full transition-all"></span>

                <ul className="absolute left-0 top-10 bg-white text-black shadow-lg rounded-lg w-48 hidden group-hover:block">
                  <li><a className="block px-4 py-2 hover:bg-gray-100">Dropdown 1</a></li>

                  {/* Deep Dropdown */}
                  <li className="relative group">
                    <a className="flex items-center justify-between px-4 py-2 hover:bg-gray-100">
                      Deep Dropdown <i className="bi bi-chevron-right"></i>
                    </a>

                    <ul className="absolute left-full top-0 bg-white text-black shadow-lg rounded-lg w-48 hidden group-hover:block">
                      {["Deep 1", "Deep 2", "Deep 3", "Deep 4", "Deep 5"].map((d) => (
                        <li key={d}>
                          <a className="block px-4 py-2 hover:bg-gray-100">{d}</a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li><a className="block px-4 py-2 hover:bg-gray-100">Dropdown 2</a></li>
                  <li><a className="block px-4 py-2 hover:bg-gray-100">Dropdown 3</a></li>
                  <li><a className="block px-4 py-2 hover:bg-gray-100">Dropdown 4</a></li>
                </ul>
              </li>

            </ul>
          </nav>

          {/* Desktop Button */}
         {!userData && (
  <a
    href="/login"
    className="hidden xl:inline-block bg-[#036DDA] text-white px-6 py-2 rounded-[8px] shadow hover:bg-blue-700 transition"
  >
    Get Started
  </a>
)}
 {userData && (
          <div className="relative">
            
            {/* Profile Button */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <i className="bi bi-person-circle text-2xl text-[#036DDA]"></i>
              <span className="font-medium text-gray-700 hidden xl:block">
                {userData.name}
              </span>
              <i className="bi bi-caret-down-fill text-sm"></i>
            </div>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg border py-2 z-50">
                
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600 flex items-center gap-2"
                >
                  <i className="bi bi-box-arrow-right"></i>
                  Logout
                </button>

              </div>
            )}

          </div>
        )}



          {/* Mobile Toggle */}
          <button
            className="xl:hidden text-3xl z-[60]"
            onClick={() => setMobileOpen(true)}
          >
            <i className="bi bi-list"></i>
          </button>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/70 z-[50] transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-[60] p-6 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-3xl absolute top-4 right-4"
          onClick={() => setMobileOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <ul className="space-y-4 mt-10 text-black font-medium text-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => {
                  setActive(item);
                  setMobileOpen(false);
                }}
                className={`${active === item ? "text-blue-600 font-semibold" : ""}`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          {/* Mobile Dropdown */}
          <li>
            <div className="font-semibold">Dropdown</div>
            <ul className="pl-4 mt-2 space-y-2 text-gray-600">
              <li>Dropdown 1</li>

              <li>
                <span className="font-semibold">Deep Dropdown</span>
                <ul className="pl-4 mt-2 space-y-2">
                  {["Deep 1", "Deep 2", "Deep 3", "Deep 4", "Deep 5"].map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>

              <li>Dropdown 2</li>
              <li>Dropdown 3</li>
              <li>Dropdown 4</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
