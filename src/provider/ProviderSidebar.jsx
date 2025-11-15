import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

export default function ProviderSidebar({ open, setOpen }) {

  const handleNavClick = () => {
    if (window.innerWidth < 768) setOpen(false);
  };

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#EEF6FF]  transform 
        transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:inset-0 
        flex flex-col justify-between overflow-y-auto`}
      >
        {/* TOP */}
        <div>
          <div className="flex items-center justify-between p-3">
            <NavLink to="/providerdashboard">
              <img
                  src="/logo.jpeg"
                  className="w-full "
                  alt="icon"
                />
            </NavLink>

            <button className="md:hidden" onClick={() => setOpen(false)}>
              <X className="w-8 h-8 text-gray-600" />
            </button>
          </div>

          {/* MENU */}
          <ul className="pt-4 pl-4 space-y-2">

            {/* DASHBOARD */}
            <li>
              <NavLink
                to="/providerdashboard"
                end
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 font-medium rounded-l-[30px]
                  transition-all duration-200
                  ${isActive ? "active bg-gray-200 text-black" : "text-gray-700 hover:bg-gray-300"}`
                }
              >
                <img
                  src="https://siaprofessional.nexteck.uk/sidebar1.png"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
                Dashboard
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/providerdashboard/users"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 font-medium rounded-l-[30px]
                  transition-all duration-200
                  ${isActive ? "active bg-gray-200 text-black" : "text-gray-700 hover:bg-gray-300"}`
                }
              >
                <img
                  src="https://siaprofessional.nexteck.uk/sidebar6.png"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
                Users
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/providerdashboard/providers"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 font-medium rounded-l-[30px]
                  transition-all duration-200
                  ${isActive ? "active bg-gray-200 text-black" : "text-gray-700 hover:bg-gray-300"}`
                }
              >
                <img
                  src="https://siaprofessional.nexteck.uk/sidebar7.png"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
                Providers
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/providerdashboard/bookings"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 font-medium rounded-l-[30px]
                  transition-all duration-200
                  ${isActive ? "active bg-gray-300 text-black" : "text-gray-700 hover:bg-gray-300"}`
                }
              >
                <img
                  src="https://siaprofessional.nexteck.uk/sidebar9.png"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
                Bookings
              </NavLink>
            </li>
             <li>
              <NavLink
                to="/providerdashboard/payments"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 font-medium rounded-l-[30px]
                  transition-all duration-200
                  ${isActive ? "active bg-gray-200 text-black" : "text-gray-700 hover:bg-gray-300"}`
                }
              >
                <img
                  src="https://siaprofessional.nexteck.uk/sidebar8.png"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
                Payments
              </NavLink>
            </li>

            {/* PROFILE */}
            <li>
              <NavLink
                to="/providerdashboard/profile"
                onClick={handleNavClick}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 font-medium rounded-l-[30px]
                  transition-all duration-200
                  ${isActive ? "active bg-gray-200 text-black" : "text-gray-700 hover:bg-gray-300"}`
                }
              >
                <img
                  src="https://siaprofessional.nexteck.uk/sidebar10.png"
                  className="w-[24px] h-[24px]"
                  alt="icon"
                />
                Profile
              </NavLink>
            </li>

          </ul>
        </div>

        {/* LOGOUT */}
        <div className="flex flex-col gap-3 border-t border-gray-200 p-4">
          <NavLink
            to="/"
            className="flex items-center gap-3 px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-300"
          >
            <img src="https://siaprofessional.nexteck.uk/logout.png" className="w-[20px] h-[20px]" />
            Logout
          </NavLink>
        </div>
      </div>

      {/* CUSTOM CSS FOR CURVE */}
      <style>
        {`
          li .active {
            position: relative;
            background: #D1D5DC;
            border-radius: 30px 0 0 30px;
          }

          li .active:before {
            content: "";
            position: absolute;
            top: -25px;
            right: 0;
            width: 25px;
            height: 25px;
            background: transparent;
            border-radius: 60%;
            box-shadow: 15px 15px 0 #D1D5DC;
          }

          li .active:after {
            content: "";
            position: absolute;
            bottom: -25px;
            right: 0;
            width: 25px;
            height: 25px;
            background: transparent;
            border-radius: 60%;
            box-shadow: 15px -15px 0 #D1D5DC;
          }
        `}
      </style>
    </>
  );
}
