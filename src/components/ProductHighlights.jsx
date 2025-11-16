import React, { useState, useEffect, useRef } from "react";
import {
  FaCreditCard,
  FaUniversity,
  FaLink,
  FaRobot,
  FaShieldAlt,
} from "react-icons/fa";

export default function ProductHighlights() {
  const [activeItems, setActiveItems] = useState([]);
  const itemRefs = useRef([]);

  const topics = [
    {
      id: 1,
      title: "Fintech topics",
      position: "right",
      color: "from-blue-50 to-indigo-50 border-blue-200",
      icon: <FaCreditCard className="text-blue-600 text-3xl" />,
    },
    {
      id: 2,
      title: "Digital Banking Revolution",
      position: "left",
      color: "from-purple-50 to-pink-50 border-purple-200",
      icon: <FaUniversity className="text-purple-600 text-3xl" />,
    },
    {
      id: 3,
      title: "Blockchain & Cryptocurrencies",
      position: "right",
      color: "from-green-50 to-emerald-50 border-green-200",
      icon: <FaLink className="text-green-600 text-3xl" />,
    },
    {
      id: 4,
      title: "AI in Financial Services",
      position: "left",
      color: "from-orange-50 to-amber-50 border-orange-200",
      icon: <FaRobot className="text-amber-600 text-3xl" />,
    },
    {
      id: 5,
      title: "RegTech Solutions",
      position: "right",
      color: "from-cyan-50 to-teal-50 border-cyan-200",
      icon: <FaShieldAlt className="text-cyan-600 text-3xl" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const newActiveItems = [];

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top < windowHeight / 2) {
            newActiveItems.push(index);
          }
        }
      });

      setActiveItems(newActiveItems);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20 px-4">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Product Highlights
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the key features and innovations that make our product stand
          out.
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-blue-200 via-purple-200 to-cyan-200 top-0 bottom-0 rounded-full" />

        {/* Timeline items */}
        <div className="space-y-32">
          {topics.map((topic, index) => (
            <div
              key={topic.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="relative grid grid-cols-1 md:grid-cols-2"
            >
              {/* LEFT SIDE */}
              <div
                className={`pr-0 md:pr-12 flex z-20 justify-center md:justify-end ${
                  topic.position === "left"
                    ? ""
                    : "opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100"
                }`}
              >
                {topic.position === "left" && (
                  <div
                    className={`bg-gradient-to-br ${
                      topic.color
                    } border-2 rounded-2xl p-6 shadow-lg transition-all duration-700 transform max-w-sm ${
                      activeItems.includes(index)
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 translate-x-4 md:translate-x-8 scale-95"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{topic.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Exploring innovative solutions and cutting-edge
                      technologies
                    </p>
                  </div>
                )}
              </div>

              {/* RIGHT SIDE */}
              <div
                className={`pl-0 md:pl-12 flex justify-center z-20 md:justify-start ${
                  topic.position === "right"
                    ? ""
                    : "opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100"
                }`}
              >
                {topic.position === "right" && (
                  <div
                    className={`bg-gradient-to-br ${
                      topic.color
                    } border-2 rounded-2xl p-6 shadow-lg transition-all duration-700 transform max-w-sm ${
                      activeItems.includes(index)
                        ? "opacity-100 translate-x-0 scale-100"
                        : "opacity-0 -translate-x-4 md:-translate-x-8 scale-95"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{topic.icon}</span>
                      <h3 className="text-xl font-bold text-gray-800">
                        {topic.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Exploring innovative solutions and cutting-edge
                      technologies
                    </p>
                  </div>
                )}
              </div>

              {/* CENTER DOT */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                <div
                  className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all duration-700 ${
                    activeItems.includes(index)
                      ? "bg-gradient-to-br from-blue-400 to-purple-500 scale-125 shadow-xl"
                      : "bg-gray-300 scale-100"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="h-96" />
      </div>
    </div>
  );
}
