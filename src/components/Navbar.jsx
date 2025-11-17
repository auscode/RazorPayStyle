import { useState, lazy } from "react";
const MegaMenu = lazy(() => import("../sections/MegaMenu"));
import { HiArrowSmRight, HiMenu, HiX, HiLightningBolt } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const menus = [
    "Payments",
    "Banking+",
    "Payroll",
    "Engage",
    "Partners",
    "Resources",
    "Pricing",
  ];

  return (
    <nav className="w-full fixed top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 my-2">
        {/* Logo */}
        <div className="flex items-center gap-1 text-blue-600">
          <HiLightningBolt className="text-3xl" />
          <span className="text-2xl font-bold">LaZerPay</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-4 text-xl text-gray-700 font-medium relative">
          {menus.map((menu, i) => (
            <li
              key={i}
              className="relative group py-4 cursor-pointer hover:text-blue-600"
               onMouseEnter={() => setActiveMenu(i)}
               onMouseLeave={() => setActiveMenu(null)}
            >
              <span>{menu}</span>

              {/* Hover bridge */}
              <div className="absolute top-full left-0 w-full h-4 bg-transparent hidden group-hover:block"></div>

              {/* Mega Menu */}
              {activeMenu === i && <MegaMenu />}
            </li>
          ))}
        </ul>

        {/* Sign In + Mobile Button */}
        <div className="flex gap-3 items-center">
          {/* Sign In Button + Arrow */}
          <button className="sm:flex hidden items-center gap-1 border-2 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white transition">
            Login
            <HiArrowSmRight size={18} />
          </button>

          {/* Mobile menu button */}
          <div
            className="lg:hidden text-3xl cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col text-gray-700 font-medium p-4 gap-4">
            {menus.map((menu, i) => (
              <li
                key={i}
                className="py-2 border-b cursor-pointer hover:text-blue-600"
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
