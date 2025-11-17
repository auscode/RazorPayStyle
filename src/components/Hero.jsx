import { useState, useEffect, lazy } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
const IconScroller = lazy(() => import("../sections/IconScroller.jsx"));
const FeatureBox = lazy(() => import("../sections/FeatureBox.jsx"));
import "../assets/styles/hero.css";
import hero1 from "../assets/images/hero1.png";
import hero2 from "../assets/images/hero2.webp";
import hero3 from "../assets/images/hero3.webp";
import hero4 from "../assets/images/hero4.webp";

export default function Hero() {
  const slides = [
    {
      title: "Accept Payments with Ease",
      desc: "Enable fast, secure online payments with a seamless checkout that works anywhere.",
      img: hero1,
    },
    {
      title: "Grow Your Online Business",
      desc: "Boost conversions with smart payment tools designed to reduce drop-offs and increase revenue.",
      img: hero2,
    },
    {
      title: "Fast Settlements to Banks",
      desc: "Access your funds instantly with reliable settlements delivered directly to your bank.",
      img: hero3,
    },
    {
      title: "Smart Dashboard for Efficiency",
      desc: "Monitor payments in real time with a powerful dashboard built for clarity and control.",
      img: hero4,
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next");
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection("next");
    setIndex((index + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection("prev");
    setIndex((index - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;

      if (touchEndX < touchStartX - 50) {
        nextSlide(); // swipe left → next
      }
      if (touchEndX > touchStartX + 50) {
        prevSlide(); // swipe right → previous
      }
    };

    const hero = document.getElementById("hero-carousel");
    hero.addEventListener("touchstart", handleTouchStart);
    hero.addEventListener("touchend", handleTouchEnd);

    return () => {
      hero.removeEventListener("touchstart", handleTouchStart);
      hero.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-50 via-blue-100 to-white pb-10">
        {/* Hero Section card Carousal Section */}
        <section
          className="min-h-[65vh] flex flex-col pb-16"
          id="hero-carousel"
        >
          <div className="max-w-7xl w-full pt-16 px-6 flex items-center justify-center gap-6 mx-auto mt-20">
            <button
              onClick={prevSlide}
              className="hidden lg:flex text-3xl shadow-md p-3 rounded-full hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous slide"
            >
              <HiChevronLeft size={20} />
            </button>

            <div className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl w-full">
              <div className="w-full lg:w-1/2 min-h-[250px] text-center lg:text-left space-y-6 overflow-hidden">
                <div
                  key={`title-${index}`}
                  className={`text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight ${
                    direction === "next"
                      ? "animate-slideInFromRight"
                      : "animate-slideInFromLeft"
                  }`}
                >
                  {slides[index].title}
                </div>
                <div
                  key={`desc-${index}`}
                  className={`text-gray-600 text-lg ${
                    direction === "next"
                      ? "animate-slideInFromRight delay-100"
                      : "animate-slideInFromLeft delay-100"
                  }`}
                >
                  {slides[index].desc}
                </div>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Get Started
                  </button>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center overflow-hidden h-[350px] lg:h-[450px]">
                <img
                  key={`img-${index}`}
                  src={slides[index].img}
                  alt={slides[index].title}
                  className={`h-full w-auto object-contain rounded-xl ${
                    direction === "next"
                      ? "animate-slideInFromRight"
                      : "animate-slideInFromLeft"
                  }`}
                />
              </div>
            </div>

            <button
              onClick={nextSlide}
              className="hidden lg:flex text-3xl shadow-md p-3 rounded-full hover:bg-gray-100 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next slide"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
          <div className="lg:hidden flex gap-2 justify-center">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? "next" : "prev");
                  setIndex(i);
                }}
                className={`h-2 w-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  index === i ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* feature box section */}
        <FeatureBox />

        {/* Icon Scroller Section */}
        <IconScroller />
      </div>
    </>
  );
}
