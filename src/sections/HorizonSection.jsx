import React, { useState, useEffect } from "react";
import {
  FaDollarSign,
  FaCreditCard,
  FaChartLine,
  FaShieldAlt,
  FaMobileAlt,
  FaBolt,
  FaGlobe,
  FaLock,
  FaWallet,
} from "react-icons/fa";
import "../assets/styles/horizon.css";

const HorizonSection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // ✔ Watch screen size (Fixes mobile responsiveness)
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fintechItems = [
    {
      id: 1,
      icon: FaGlobe,
      name: "Global Reach",
      data: "180+ countries served",
      angle: 165,
      radius: 200,
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: FaBolt,
      name: "Instant Transfer",
      data: "< 2 second processing",
      angle: 145,
      radius: 240,
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: FaDollarSign,
      name: "Payments",
      data: "$2.5T processed annually",
      angle: 125,
      radius: 280,
      color: "bg-blue-700",
    },
    {
      id: 4,
      icon: FaLock,
      name: "Security",
      data: "256-bit encryption",
      angle: 105,
      radius: 220,
      color: "bg-blue-500",
    },
    {
      id: 5,
      icon: FaCreditCard,
      name: "Digital Banking",
      data: "150M+ active users",
      angle: 85,
      radius: 300,
      color: "bg-blue-600",
    },
    {
      id: 6,
      icon: FaMobileAlt,
      name: "Mobile Wallet",
      data: "500M+ transactions/day",
      angle: 65,
      radius: 260,
      color: "bg-blue-700",
    },
    {
      id: 7,
      icon: FaWallet,
      name: "Digital Wallet",
      data: "99.9% uptime guaranteed",
      angle: 45,
      radius: 230,
      color: "bg-blue-500",
    },
    {
      id: 8,
      icon: FaChartLine,
      name: "Investments",
      data: "$1.8T AUM",
      angle: 25,
      radius: 290,
      color: "bg-blue-600",
    },
    {
      id: 9,
      icon: FaShieldAlt,
      name: "Insurance",
      data: "95% claim approval rate",
      angle: 15,
      radius: 210,
      color: "bg-blue-700",
    },
  ];

  // ✔ Responsive radius calculation
  const getResponsiveRadius = (base) => {
    if (screenWidth < 480) return base * 0.55; // Mobile S
    if (screenWidth < 640) return base * 0.65; // Mobile M-L
    if (screenWidth < 768) return base * 0.35; // Tablets small
    if (screenWidth < 1024) return base * 0.8; // Tablets large
    return base;
  };

  const getPosition = (angle, radius) => {
    const radian = (angle * Math.PI) / 180;
    const r = getResponsiveRadius(radius); // 👈 use dynamic radius
    return {
      left: `calc(50% + ${Math.cos(radian) * r}px)`,
      bottom: `${Math.sin(radian) * r}px`,
    };
  };

  return (
    <div
      className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4"
      style={{ overflow: "visible" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900">
            Powering the Future of Finance
          </h2>
          <p className="text-blue-600 text-base sm:text-lg">
            Explore our comprehensive fintech ecosystem
          </p>
        </div>

        {/* ORBIT */}
        <div
          className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] flex items-end justify-center overflow-visible"
          style={{ overflow: "visible" }}
        >
          {/* Semi Circles */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
            {[1, 2, 3, 4, 5].map((circle) => (
              <div
                key={circle}
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
                style={{
                  width: `${circle * (screenWidth < 480 ? 80 : 120)}px`,
                  height: `${circle * (screenWidth < 480 ? 40 : 60)}px`,
                  borderLeft: "2px solid rgba(59, 130, 246, 0.2)",
                  borderRight: "2px solid rgba(59, 130, 246, 0.2)",
                  borderTop: "2px solid rgba(59, 130, 246, 0.2)",
                  borderBottom: "none",
                  borderRadius: "999px 999px 0 0",
                }}
              />
            ))}
          </div>

          {/* Icons */}
          <div className="absolute inset-0">
            {fintechItems.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredItem === item.id;
              const pos = getPosition(item.angle, item.radius);

              // Determine tooltip position based on angle
              const isLeftSide = item.angle > 90;
              const isTopArea = item.angle > 120 || item.angle < 60;

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-300"
                  style={pos}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div
                    className="relative float-animation"
                    style={{
                      transform: `translate(-50%, 50%) ${
                        isHovered ? "scale(1.22)" : "scale(1)"
                      }`,
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`${item.color} w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white w-5 h-5 sm:w-7 sm:h-7 z-0" />
                    </div>

                    {/* Tooltip */}
                    {isHovered && (
                      <div
                        className="fixed bg-white p-3 rounded-lg border-2 border-blue-500 shadow-xl animate-fadeIn z-[9999] pointer-events-none"
                        style={{
                          width: screenWidth < 640 ? "144px" : "192px",
                          left: "50%",
                          top: "20%",
                          transform: "translateX(-50%)",
                        }}
                      >
                        <h3 className="font-bold text-blue-900 text-xs sm:text-lg">
                          {item.name}
                        </h3>
                        <p className="text-blue-600 text-xs sm:text-sm">
                          {item.data}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 sm:w-28 h-8 sm:h-14 bg-blue-500 opacity-20 blur-2xl rounded-full"></div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-10">
          <p className="text-blue-900 font-medium text-sm sm:text-base">
            Join thousands of businesses transforming finance
          </p>
        </div>
      </div>
    </div>
  );
};

export default HorizonSection;
