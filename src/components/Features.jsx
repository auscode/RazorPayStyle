import { useState, useEffect, useRef } from "react";
1;
import featuresImg1 from "../assets/images/scroll-s1.jpeg";
import featuresImg2 from "../assets/images/scroll-s2.jpeg";
import featuresImg3 from "../assets/images/scroll-s3.jpeg";
import featuresImg4 from "../assets/images/scroll-s4.jpeg";
import featuresImg5 from "../assets/images/scroll-s5.jpeg";

export default function Features() {
  const [activeCard, setActiveCard] = useState(0);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const scrollContainerRef = useRef(null);
  const buttonRefs = useRef([]);

  const cards = [
    {
      id: 0,
      title: "Accept Payments",
      subtitle: "Instant Settlements",
      description: "Get customer payments in your bank account instantly",
      image: featuresImg1,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 1,
      title: "Make Payouts",
      subtitle: "Bulk Transfers",
      description: "Send payments to multiple vendors efficiently",
      image: featuresImg2,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Start Business Banking",
      subtitle: "Corporate Accounts",
      description: "Open business accounts with zero balance requirement",
      image: featuresImg3,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Automate Payroll",
      subtitle: "Employee Management",
      description: "Streamline salary disbursement and compliance",
      image: featuresImg4,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Credit & Loans",
      subtitle: "LaZerPayX Corporate Cards",
      description: "Turn SaaS, cloud and marketing spends into real savings",
      image: featuresImg5,
      color: "from-indigo-500 to-blue-500",
    },
  ];

  // Update active card on scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const containerTop = containerRef.current.offsetTop;
        const containerBottom =
          containerTop + containerRef.current.offsetHeight;
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;

        // Check if Features component is in view
        setIsMenuVisible(
          scrollPos + windowHeight > containerTop + 800 &&
            scrollPos < containerBottom - 100
        );

        // Determine active card
        cardRefs.current.forEach((card, index) => {
          if (!card) return;
          const cardTop = card.offsetTop + containerTop;
          const cardHeight = card.offsetHeight;
          const triggerPoint = scrollPos + windowHeight * 0.6;

          if (triggerPoint > cardTop && triggerPoint < cardTop + cardHeight) {
            setActiveCard((prev) => (prev !== index ? index : prev));
          }
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll nav button when activeCard changes
  useEffect(() => {
    const activeButton = buttonRefs.current[activeCard];
    if (activeButton && scrollContainerRef.current) {
      activeButton.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  }, [activeCard]);

  const scrollToCard = (index) => {
    if (cardRefs.current[index]) {
      const card = cardRefs.current[index];
      const containerTop = containerRef.current.offsetTop;
      const cardTop = card.offsetTop + containerTop;
      const offset = window.innerHeight * 0.3;

      window.scrollTo({
        top: cardTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Sticky nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-gray-200 transition-all duration-300 ${
          isMenuVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <div className="flex gap-2 overflow-x-auto" ref={scrollContainerRef}>
            {cards.map((card, index) => (
              <button
                key={card.id}
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => scrollToCard(index)}
                className={`px-3 sm:px-4 py-2 rounded-lg transition-all whitespace-nowrap text-sm sm:text-base md:text-lg font-bold ${
                  activeCard === index
                    ? "bg-white text-blue-600 shadow-lg"
                    : "text-gray-400 hover:bg-white/20"
                }`}
              >
                {card.title}
              </button>
            ))}
          </div>

          <button className="hidden md:block ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Get Started
          </button>
        </div>
      </nav>

      {/* Cards */}
      <div ref={containerRef} className="relative pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className="mb-8 md:sticky"
              style={{ top: `${80 + index * 20}px`, zIndex: index + 1 }}
            >
              <div
                className={`bg-gradient-to-br ${
                  card.color
                } rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ${
                  activeCard === index
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-70"
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                  <div className="text-white">
                    <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                      {card.subtitle}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      {card.title}
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 mb-6">
                      {card.description}
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        Sign Up
                      </button>
                      <button className="px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm">
                        Know More
                      </button>
                    </div>
                  </div>
                  <div className="relative h-64 md:h-80">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover rounded-xl shadow-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
