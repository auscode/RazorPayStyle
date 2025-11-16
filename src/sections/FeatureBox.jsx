import { useEffect, useState } from "react";
import {
  FaMoneyBillWave,
  FaPaperPlane,
  FaUniversity,
  FaCreditCard,
  FaRobot,
  FaQuestionCircle,
  FaSearch,
  FaCompass,
} from "react-icons/fa";

export default function FeatureBox() {
  // Changing text
  const changingTexts = [
    "Need help choosing?",
    "Not sure where to start?",
    "Looking for the right product?",
    "Tell us what you need!",
    "We’ll guide you!",
  ];

  // Icons that match the text
  const textIcons = [
    <FaSearch />,
    <FaQuestionCircle />,
    <FaCompass />,
    <FaSearch />,
    <FaCompass />,
  ];

  // YOUR labels + icons
  const items = [
    { label: "Accept Payments", icon: <FaMoneyBillWave /> },
    { label: "Make Payouts", icon: <FaPaperPlane /> },
    { label: "Start Business Banking", icon: <FaUniversity /> },
    { label: "Get Credit", icon: <FaCreditCard /> },
    { label: "Automate Payroll", icon: <FaRobot /> },
    { label: "Something else?", icon: <FaQuestionCircle /> },
  ];

  // Animation index
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % changingTexts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white text-center gap-4 rounded-xl shadow-xl p-4 mx-auto max-w-7xl">
      {/* Changing Animated Text */}
      <div className="flex items-center gap-3 w-[300px] text-left perspective-[1000px]">
        <span className="text-blue-600 text-xl flip-up">
          {textIcons[textIndex]}
        </span>

        <p className="block text-lg font-semibold flip-up">
          {changingTexts[textIndex]}
        </p>
      </div>

      {/* Feature Chips */}
      <ul className="flex flex-wrap justify-center gap-4 text-xs text-blue-600 font-medium">
        {items.map((item, i) => (
          <li
            key={i}
            className="
              p-2 flex items-center gap-2 rounded-full bg-blue-100 
              hover:bg-blue-600 hover:text-white cursor-pointer transition-all 
              shadow-sm
            "
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
