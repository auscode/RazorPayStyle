import React from "react";
import {
  HiShieldCheck,
  HiTrendingUp,
  HiLightningBolt,
  HiLockClosed,
} from "react-icons/hi";

export default function BankingSection() {
  const services = [
    {
      icon: HiShieldCheck,
      title: "Blockchain-Powered Encryption",
      description:
        "Military-grade security protocols protecting your digital assets with distributed ledger technology",
    },
    {
      icon: HiTrendingUp,
      title: "AI-Driven Investment Analytics",
      description:
        "Machine learning algorithms analyze market trends in real-time to optimize your portfolio performance",
    },
    {
      icon: HiLightningBolt,
      title: "Instant Cross-Border Payments",
      description:
        "Lightning-fast international transactions with zero fees using our proprietary settlement network",
    },
    {
      icon: HiLockClosed,
      title: "Quantum-Resistant Security",
      description:
        "Next-generation cryptographic systems designed to withstand future quantum computing threats",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We Tried To Provide You
            <br />
            With All Global Banking
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Services
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We blend fintary banking infrastructors in Software That You Have
            Access To A Comprehensive Range Of Global Banking Services. Our
            Ultra-Fast, Secure, And Transparent Digital Ecosystem Is Built On
            Advanced Technologies Like Quantum Blockchain Of New Platform
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Learn More
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-20 h-20 mx-auto relative">
                  {/* Animated circles background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-2 border-blue-200 rounded-full animate-pulse"></div>
                    <div className="absolute w-12 h-12 border-2 border-indigo-200 rounded-full animate-ping opacity-20"></div>
                  </div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-white/60 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">
              Trusted by over 10,000+ businesses worldwide
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white"
                  ></div>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-2">and many more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
