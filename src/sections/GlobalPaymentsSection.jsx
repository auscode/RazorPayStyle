import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../assets/styles/globalPay.css";

export default function GlobalPaymentsSection() {
  const [activeCountry, setActiveCountry] = useState(0);

  const countries = [
    { flag: "\uD83C\uDDEC\uD83C\uDDE7", top: "45%", left: "15%", delay: 0 }, // 🇬🇧 UK
    { flag: "\uD83C\uDDEE\uD83C\uDDF3", top: "22%", left: "35%", delay: 200 }, // 🇮🇳 India
    { flag: "\uD83C\uDDFA\uD83C\uDDF8", top: "20%", left: "70%", delay: 400 }, // 🇺🇸 USA
    { flag: "\uD83C\uDDF1\uD83C\uDDF9", top: "50%", right: "-5%", delay: 600 }, // 🇱🇹 Lithuania
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((p) => (p + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-6 sm:p-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div className="space-y-6 text-center md:text-left animate-fade-in">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Global Payments
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Expand New Market
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
              Faster and Easier
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-lg md:max-w-xl leading-relaxed mx-auto md:mx-0">
            Reduce the complexity and cost of multicurrency management with
            flexible cross-border payment options available in 195 countries
            across 135+ currencies.
          </p>

          <button className="group bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 sm:px-9 sm:py-4 rounded-full font-medium flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-auto md:mx-0">
            Learn More
            <FaArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* RIGHT SIDE (Globe) */}
        <div className="relative h-72 sm:h-80 md:h-[500px] flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
            {/* GLOBE BACKGROUND */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 100 100"
              >
                {[
                  { cx: 50, cy: 30, rx: 45, ry: 8 },
                  { cx: 50, cy: 50, rx: 48, ry: 12 },
                  { cx: 50, cy: 70, rx: 45, ry: 8 },
                  { cx: 50, cy: 50, rx: 12, ry: 48 },
                  { cx: 50, cy: 50, rx: 24, ry: 48 },
                  { cx: 50, cy: 50, rx: 36, ry: 48 },
                ].map((el, i) => (
                  <ellipse
                    key={i}
                    {...el}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-gray-400"
                  />
                ))}
              </svg>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
            </div>

            {/* CONNECTION LINES */}
            <svg className="absolute inset-0 w-full h-full">
              {countries.map((country, index) => (
                <line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2={country.left || `calc(100% - ${country.right})`}
                  y2={country.top}
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className={`transition-opacity duration-500 ${
                    activeCountry === index ? "opacity-100" : "opacity-20"
                  }`}
                />
              ))}
            </svg>

            {/* FLAGS */}
            {countries.map((country, index) => (
              <div
                key={index}
                className={`absolute flex items-center justify-center 
                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-2xl sm:text-3xl
                bg-white rounded-full shadow-xl cursor-pointer 
                transition-all duration-500 
                ${
                  activeCountry === index
                    ? "scale-110 ring-4 ring-blue-400"
                    : "scale-100"
                }`}
                style={{
                  top: country.top,
                  left: country.left,
                  right: country.right,
                  transform: "translate(-50%, -50%)",
                  animationDelay: `${country.delay}ms`,
                }}
                onMouseEnter={() => setActiveCountry(index)}
              >
                {country.flag}
                {activeCountry === index && (
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-70"></span>
                )}
              </div>
            ))}

            {/* FLOATING PARTICLES */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-blue-400 w-2 h-2 animate-float"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
