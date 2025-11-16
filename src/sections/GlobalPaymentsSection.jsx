import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function GlobalPaymentsSection() {
  const [activeCountry, setActiveCountry] = useState(0);

  const countries = [
    { flag: "🇮🇳", top: "45%", left: "15%", delay: 0 },
    { flag: "🇬🇧", top: "25%", left: "35%", delay: 200 },
    { flag: "🇺🇸", top: "20%", right: "-10%", delay: 400 },
    { flag: "🇱🇹", top: "50%", right: "-10%", delay: 600 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((prev) => (prev + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in text-center md:text-left">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Global Payments
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Expand New Market
            <br />
            <span className="bg-blue-500 bg-clip-text text-transparent">
              Faster and Easier
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-md md:max-w-xl leading-relaxed mx-auto md:mx-0">
            Reduce the complexity and cost of multicurrency management with
            flexible cross-border payment options available in 195 countries
            across 135+ currencies
          </p>

          <button className="group bg-blue-400 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105 mx-auto md:mx-0">
            Learn More
            <FaArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Visual */}
        <div className="relative h-72 sm:h-80 md:h-[500px] flex items-center justify-center">
          {/* Central Globe */}
          <div className="relative w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl overflow-hidden">
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                viewBox="0 0 100 100"
              >
                <ellipse
                  cx="50"
                  cy="30"
                  rx="45"
                  ry="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-400"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="48"
                  ry="12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-400"
                />
                <ellipse
                  cx="50"
                  cy="70"
                  rx="45"
                  ry="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-400"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="12"
                  ry="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-400"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="24"
                  ry="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-400"
                />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="36"
                  ry="48"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-gray-400"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
            </div>

            {/* Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" }}
            >
              {countries.map((country, idx) => {
                const startX = country.left
                  ? country.left
                  : `calc(100% - ${country.right})`;
                const startY = country.top;
                return (
                  <line
                    key={idx}
                    x1="50%"
                    y1="50%"
                    x2={startX}
                    y2={startY}
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                    className={`transition-opacity duration-500 ${
                      activeCountry === idx ? "opacity-100" : "opacity-30"
                    }`}
                  />
                );
              })}
            </svg>

            {/* Country flags */}
            {countries.map((country, idx) => (
              <div
                key={idx}
                className={`absolute w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-white shadow-xl flex items-center justify-center text-2xl sm:text-3xl cursor-pointer transition-all duration-500 hover:scale-110 ${
                  activeCountry === idx
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
                onMouseEnter={() => setActiveCountry(idx)}
              >
                {country.flag}
                {activeCountry === idx && (
                  <span className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></span>
                )}
              </div>
            ))}

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-float"
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

      <style jsx="true">{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-15px) scale(1.1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
