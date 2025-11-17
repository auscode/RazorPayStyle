import { useState } from "react";
import {
  FaShoppingCart,
  FaBook,
  FaUniversity,
  FaLaptopCode,
  FaUserTie,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

// E-Commerce Logos
import flipkart from "../assets/icon/flipkart.avif";
import nykaa from "../assets/icon/nykaa.avif";
import zomato from "../assets/icon/zomato.avif";
import decathlon from "../assets/icon/decathlon.avif";

// Education Logos
import niit from "../assets/icon/niit.avif";
import toppr from "../assets/icon/toppr.avif";
import greatLearning from "../assets/icon/greatLearning.avif";

// BFSI Logos
import clearTax from "../assets/icon/cleartax.avif";
import cred from "../assets/icon/cred.avif";
import acko from "../assets/icon/acko.avif";
import paisabazaar from "../assets/icon/paisabazaar.avif";

// SaaS Logos
import zoho from "../assets/icon/zoho.png";
import shopify from "../assets/icon/shopify.avif";
import intuit from "../assets/icon/intuit.avif";
import sulekha from "../assets/icon/sulekha.avif";

// Section Images
import education from "../assets/images/education-1.avif";
import freelancers from "../assets/images/freelancer.avif";
import bfsi from "../assets/images/bfsi.avif";
import saas from "../assets/images/saas.avif";
import ecom from "../assets/images/ecom-1.avif";

export default function PoweringIndustries() {
  const [activeTab, setActiveTab] = useState("Education");
  const [expandedTab, setExpandedTab] = useState(null);

  const tabs = [
    {
      label: "E-Commerce",
      icon: <FaShoppingCart />,
      title: "Payments designed for high-growth e-commerce brands.",
      description:
        "Deliver a seamless checkout experience, reduce cart drop-offs, and accept payments across every channel—online, in-store, or on-the-go.",
      logos: [
        { src: flipkart, alt: "Flipkart" },
        { src: nykaa, alt: "Nykaa" },
        { src: zomato, alt: "Zomato" },
        { src: decathlon, alt: "Decathlon" },
      ],
      others: "+ 500,000 others",
      image: ecom,
    },
    {
      label: "Education",
      icon: <FaBook />,
      title: "Smarter payments for schools, institutes, and ed-tech platforms.",
      description:
        "Manage fee collections, automate payouts, and bring complete transparency to your financial operations—whether offline or digital.",
      logos: [
        { src: niit, alt: "NIIT" },
        { src: toppr, alt: "Toppr" },
        { src: greatLearning, alt: "Great Learning" },
      ],
      others: "+ 21,000 others",
      image: education,
    },
    {
      label: "BFSI",
      icon: <FaUniversity />,
      title: "Secure and compliant payments for financial institutions.",
      description:
        "Power your banking, lending, wealth, and insurance workflows with reliable, compliant, enterprise-grade payment infrastructure.",
      logos: [
        { src: clearTax, alt: "ClearTax" },
        { src: cred, alt: "CRED" },
        { src: acko, alt: "Acko" },
        { src: paisabazaar, alt: "Paisabazaar" },
      ],
      others: "+ 10,000 others",
      image: bfsi,
    },
    {
      label: "SaaS",
      icon: <FaLaptopCode />,
      title: "Subscriptions and billing built for global SaaS companies.",
      description:
        "Automate recurring billing, reduce churn, and scale globally with multi-currency payments supported in 195+ countries.",
      logos: [
        { src: zoho, alt: "Zoho" },
        { src: shopify, alt: "Shopify" },
        { src: intuit, alt: "Intuit" },
        { src: sulekha, alt: "Sulekha" },
      ],
      others: "+ 15,000 others",
      image: saas,
    },
    {
      label: "Freelancer",
      icon: <FaUserTie />,
      title: "Faster, simpler payments for freelancers and creators.",
      description:
        "Get paid from anywhere in the world, create payment links instantly, and manage all earnings effortlessly from one dashboard.",
      logos: [],
      others: "",
      image: freelancers,
    },
  ];


  const activeTabData = tabs.find((tab) => tab.label === activeTab);

  const toggleMobileExpand = (label) => {
    setExpandedTab((prev) => (prev === label ? null : label));
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6 md:mb-0">
            Powering every industry.
            <br />
            Powering all disruptors.
          </h2>

          {/* Desktop: Icon Buttons */}
          <div className="hidden md:flex gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(tab.label)}
                className={`p-3 rounded-full transition ${
                  activeTab === tab.label
                    ? "bg-blue-100 text-blue-600 shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
                aria-label={tab.label}
              >
                {tab.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: Tab Navigation */}
        <div className="hidden md:flex gap-6 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(tab.label)}
              className={`pb-2 text-lg font-medium transition-colors ${
                activeTab === tab.label
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Desktop: Content Card */}
        <div className="hidden md:block">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px]">
            <img
              src={activeTabData.image}
              alt={activeTabData.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-start">
              <div className="max-w-2xl ml-12 p-8 bg-white rounded-2xl shadow-xl">
                <h3 className="text-4xl font-bold mb-4 text-gray-900">
                  {activeTabData.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {activeTabData.description}
                </p>

                {/* Logos */}
                {activeTabData.logos.length > 0 && (
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    {activeTabData.logos.map((logo, index) => (
                      <div
                        key={index}
                        className="p-2 bg-gray-100 rounded-lg flex items-center justify-center"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="h-8 object-contain grayscale"
                        />
                      </div>
                    ))}
                    {activeTabData.others && (
                      <span className="text-gray-500 text-sm font-medium">
                        {activeTabData.others}
                      </span>
                    )}
                  </div>
                )}

                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-md">
                  See Solutions →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion */}
        <div className="md:hidden space-y-3">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleMobileExpand(tab.label)}
                className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {tab.icon}
                  <span className="font-semibold text-gray-900">
                    {tab.label}
                  </span>
                </div>
                {expandedTab === tab.label ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>

              {expandedTab === tab.label && (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tab.image}
                    alt={tab.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        {tab.title}
                      </h3>
                      <p className="text-gray-200 mb-3 text-sm">
                        {tab.description}
                      </p>

                      {/* Logos */}
                      {tab.logos.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {tab.logos.map((logo, index) => (
                            <div
                              key={index}
                              className="px-2 py-1 bg-white/90 rounded-md"
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-6 object-contain grayscale"
                              />
                            </div>
                          ))}
                          {tab.others && (
                            <span className="text-gray-300 text-xs font-medium">
                              {tab.others}
                            </span>
                          )}
                        </div>
                      )}

                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700 transition-colors text-sm font-medium">
                        See Solutions →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
