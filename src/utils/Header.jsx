import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "home",
    "Solutions",
    "services",
    "Partners",
    "about",
    "support",
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-10 h-20">
          {/* Logo */}
          <a href="/">
            <img src="/Newlogo.png" alt="Logo" className="w-[100px] " />
          </a>

        <nav className="hidden xl:block">
  <ul className="flex items-center space-x-8 text-black font-medium">
    {menuItems.map((item) => (
      <li key={item} className="group relative">
        <button
          onClick={() => {
            setActive(item);  // 👈 set active menu

            if (item.toLowerCase() === "about") {
              navigate("/abouts");
            } else if (item.toLowerCase() === "services") {
              navigate("/servicecategories");
            } else if (item.toLowerCase() === "support") {
              navigate("/support");
            } else {
              navigate("/");
            }
          }}
          className={`
            transition font-medium
            ${active === item ? "text-[#036DDA]" : "text-black"}
            hover:text-[#036DDA]
          `}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>

        {/* underline effect */}
        <span
          className={`absolute h-[2px] bottom-[-8px] left-0 
          bg-[#036DDA] transition-all duration-300
          ${active === item ? "w-full" : "w-0 group-hover:w-full"}`}
        ></span>
      </li>
    ))}
  </ul>
</nav>


          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Desktop GET STARTED (show only if user not logged in) */}
            {!userData && (
              <a
                href="/login"
                className="hidden xl:inline-block bg-[#036DDA] text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            )}

            {/* USER PROFILE DROPDOWN */}
            {userData && (
              <div className="relative">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setOpen(!open)}
                >
                  <i className="bi bi-person-circle text-2xl text-[#036DDA]"></i>
                  <span className="hidden xl:block font-medium text-black">
                    {userData.name}
                  </span>
                  <i className="bi bi-caret-down-fill text-sm"></i>
                </div>

                {open && (
                  <div className="absolute right-0 mt-3 w-60 bg-white shadow-lg rounded-lg border-white py-2 z-50">
                    <button
                      onClick={() => navigate("/profile/dashboard")}
                      className="w-full text-left px-4 py-2 text-black flex items-center gap-2"
                    >
                      <i className="bi bi-box-seam"></i>
                      Profile Dashboard
                    </button>

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

            {/* MOBILE MENU TOGGLE  */}
            <button
              className="xl:hidden text-3xl"
              onClick={() => setMobileOpen(true)}
            >
              <i className="bi bi-list"></i>
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-all ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileOpen(false)}
      ></div>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 w-72 h-full bg-white shadow-xl z-50 p-6 transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          className="text-3xl absolute top-4 right-4"
          onClick={() => setMobileOpen(false)}
        >
          <i className="bi bi-x-lg"></i>
        </button>

        <ul className="space-y-5 mt-12 text-black font-medium text-lg">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMobileOpen(false)}
                className="block hover:text-[#036DDA]"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}

          {/* Mobile Login Button */}
          {!userData && (
            <a
              href="/login"
              className="block bg-[#036DDA] text-center text-white py-2 rounded-lg mt-4"
            >
              Get Started
            </a>
          )}

          {/* Mobile Logout */}
          {userData && (
            <button
              onClick={handleLogout}
              className="block w-full bg-red-500 text-white py-2 rounded-lg mt-4"
            >
              Logout
            </button>
          )}
        </ul>
      </div>
    </>
  );
}
