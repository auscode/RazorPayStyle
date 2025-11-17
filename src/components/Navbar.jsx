import { useState, lazy } from "react";
import { megaMenuData } from "../data/menuData";
const MegaMenu = lazy(() => import("../sections/MegaMenu"));
import {
  HiArrowSmRight,
  HiMenu,
  HiX,
  HiLightningBolt,
  HiChevronRight,
  HiChevronDown,
} from "react-icons/hi";
import { HiOutlineCreditCard, HiOutlineLink } from "react-icons/hi2";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [openSection, setOpenSection] = useState(0);

  const menus = [
    "Payments",
    "Business Banking",
    "Payroll",
    "Solutions",
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
          {/* Flag Dropdown */}
          <div className="relative group hidden lg:flex items-center cursor-pointer">
            {/* Trigger */}
            <div className="flex items-center gap-1 text-2xl px-3 py-1 rounded-md">
              {"\uD83C\uDDEE\uD83C\uDDF3"}
              <span className="text-gray-600 text-sm">▾</span>
            </div>

            {/* Dropdown */}
            <div
              className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md p-2 
               opacity-0 group-hover:opacity-100 invisible group-hover:visible
               transition-all duration-300 w-40"
            >
              <ul className="flex flex-col gap-2 text-sm">
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                  <span className="text-2xl">{"\uD83C\uDDEE\uD83C\uDDF3"}</span>
                  <span className="ml-2 text-gray-700">India</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                  <span className="text-2xl">{"\uD83C\uDDEC\uD83C\uDDE7"}</span>
                  <span className="ml-2 text-gray-700">UK</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                  <span className="text-2xl">{"\uD83C\uDDFA\uD83C\uDDF8"}</span>
                  <span className="ml-2 text-gray-700">USA</span>
                </li>
                <li className="cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md">
                  <span className="text-2xl">{"\uD83C\uDDF1\uD83C\uDDF9"}</span>
                  <span className="ml-2 text-gray-700">Lithuania</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Login */}
          <button className="flex items-center gap-1 border-2 text-blue-600 px-5 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white transition">
            Login
            <HiArrowSmRight size={18} />
          </button>

          {/* Mobile toggle */}
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
        <div className="lg:hidden bg-white shadow-md p-4 space-y-7">
          {/* Country Selector */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-lg font-medium">
              🇮🇳 India
            </div>
            {/* <HiChevronRight className="text-xl text-blue-600" /> */}
          </div>

          {/* MOBILE MEGAMENU */}
          {megaMenuData.map((section, i) => (
            <div key={i} className="pb-3">
              {/* Section Header */}
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => setOpenSection(openSection === i ? null : i)}
              >
                <h3 className="text-sm font-semibold text-gray-800">
                  {section.title}
                </h3>

                {openSection === i ? (
                  <HiChevronDown className="text-xl text-blue-600" />
                ) : (
                  <HiChevronRight className="text-xl text-blue-600" />
                )}
              </div>

              {/* Section Items */}
              {openSection === i && (
                <div className="flex flex-col gap-4 mt-3 pl-2">
                  {section.items.map((item, j) => {
                    const Icon = item.icon;
                    return (
                      <div key={j} className="flex items-center gap-3">
                        <Icon className="text-blue-600 text-xl" />
                        <span className="text-gray-800 text-base">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
