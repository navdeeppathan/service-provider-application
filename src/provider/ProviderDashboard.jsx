import { Outlet, Route, Routes } from "react-router-dom";

import { useState } from "react";
import ProviderSidebar from "./ProviderSidebar";
import ProviderNavbar from "./ProviderNavbar";



export default function ProviderDashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-300 ">
        {/* <div className="p-2"> */}

      <ProviderSidebar open={open} setOpen={setOpen} />
{/* </div> */}
      {/* Overlay for mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Main Section */}
      <div className="flex flex-col flex-1 px-5">
        <ProviderNavbar setOpen={setOpen} />
        <div className="p-1 mt-5 ml-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
