import React, { useState } from "react";
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

  const fintechItems = [
    {
      id: 1,
      icon: FaGlobe,
      name: "Global Reach",
      data: "180+ countries served",
      angle: 165,
      radius: 280,
      color: "bg-blue-500",
    },
    {
      id: 2,
      icon: FaBolt,
      name: "Instant Transfer",
      data: "< 2 second processing",
      angle: 145,
      radius: 320,
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: FaDollarSign,
      name: "Payments",
      data: "$2.5T processed annually",
      angle: 125,
      radius: 360,
      color: "bg-blue-700",
    },
    {
      id: 4,
      icon: FaLock,
      name: "Security",
      data: "256-bit encryption",
      angle: 105,
      radius: 300,
      color: "bg-blue-500",
    },
    {
      id: 5,
      icon: FaCreditCard,
      name: "Digital Banking",
      data: "150M+ active users",
      angle: 85,
      radius: 380,
      color: "bg-blue-600",
    },
    {
      id: 6,
      icon: FaMobileAlt,
      name: "Mobile Wallet",
      data: "500M+ transactions/day",
      angle: 65,
      radius: 340,
      color: "bg-blue-700",
    },
    {
      id: 7,
      icon: FaWallet,
      name: "Digital Wallet",
      data: "99.9% uptime guaranteed",
      angle: 45,
      radius: 310,
      color: "bg-blue-500",
    },
    {
      id: 8,
      icon: FaChartLine,
      name: "Investments",
      data: "$1.8T assets under management",
      angle: 25,
      radius: 370,
      color: "bg-blue-600",
    },
    {
      id: 9,
      icon: FaShieldAlt,
      name: "Insurance",
      data: "95% claim approval rate",
      angle: 15,
      radius: 290,
      color: "bg-blue-700",
    },
  ];

  const getPosition = (angle, radius) => {
    const radian = (angle * Math.PI) / 180;
    return {
      left: `calc(50% + ${Math.cos(radian) * radius}px)`,
      bottom: `${Math.sin(radian) * radius}px`,
    };
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-blue-50 py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Powering the Future of Finance
          </h2>
          <p className="text-blue-600 text-base sm:text-lg">
            Explore our comprehensive fintech ecosystem
          </p>
        </div>

        {/* Orbit Container */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-end justify-center">
          {/* Concentric Semicircles */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {[1, 2, 3, 4, 5].map((circle) => (
              <div
                key={circle}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
                style={{
                  width: `${circle * 120}px`,
                  height: `${circle * 60}px`,
                  borderLeft: "2px solid rgba(59, 130, 246, 0.2)",
                  borderRight: "2px solid rgba(59, 130, 246, 0.2)",
                  borderTop: "2px solid rgba(59, 130, 246, 0.2)",
                  borderBottom: "none",
                  borderRadius: `${circle * 120}px ${circle * 120}px 0 0`,
                }}
              />
            ))}
          </div>

          {/* Floating Fintech Icons */}
          <div className="absolute inset-0">
            {fintechItems.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredItem === item.id;
              const position = getPosition(
                item.angle,
                item.radius *
                  (window.innerWidth < 640
                    ? 0.6
                    : window.innerWidth < 1024
                    ? 0.8
                    : 1)
              );

              return (
                <div
                  key={item.id}
                  className="absolute transition-all duration-300 ease-out"
                  style={position}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div
                    className="relative float-animation"
                    style={{
                      transform: `translate(-50%, 50%) ${
                        isHovered ? "scale(1.22)" : "scale(1)"
                      }`,
                      transition: "transform 0.3s ease-out",
                    }}
                  >
                    {/* Icon Circle */}
                    <div
                      className={`${item.color} w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:shadow-2xl`}
                    >
                      <Icon className="w-5 sm:w-7 h-5 sm:h-7 text-white" />
                    </div>

                    {/* Hover Card */}
                    {isHovered && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-40 sm:w-48 bg-white rounded-lg shadow-2xl p-3 sm:p-4 border-2 border-blue-500 z-10 animate-fadeIn">
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 sm:w-4 h-3 sm:h-4 bg-white border-r-2 border-b-2 border-blue-500"></div>
                        <h3 className="font-bold text-blue-900 text-sm sm:text-lg mb-1">
                          {item.name}
                        </h3>
                        <p className="text-blue-600 text-xs sm:text-sm font-medium">
                          {item.data}
                        </p>
                      </div>
                    )}

                    {/* Pulse Ring */}
                    <div
                      className={`absolute inset-0 ${item.color} rounded-full opacity-0 animate-ping pointer-events-none`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Glow Effect */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-10 sm:h-16 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-12 px-2 sm:px-0">
          <p className="text-blue-900 font-medium mb-2 text-sm sm:text-base">
            Join thousands of businesses transforming finance
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600 text-xs sm:text-sm">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>Real-time data visualization</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizonSection;
