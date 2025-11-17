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
      title: "Advanced Fraud & Risk Protection",
      description:
        "Multi-layer security and intelligent fraud monitoring keep your transactions safe and compliant at all times.",
    },
    {
      icon: HiTrendingUp,
      title: "Real-Time Financial Insights",
      description:
        "Smart analytics help you track cash flow, settlements, and payouts with complete visibility and accuracy.",
    },
    {
      icon: HiLightningBolt,
      title: "Instant Global Payouts",
      description:
        "Send money across 195+ countries in minutes with fast, reliable, and seamless settlement infrastructure.",
    },
    {
      icon: HiLockClosed,
      title: "Bank-Grade Encryption",
      description:
        "Your data and payments are protected with enterprise-grade encryption and secure authentication systems.",
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Banking Built for Growing
            <br />
            Businesses Across the World
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Secure. Fast. Reliable.
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            LaZerPay combines modern banking infrastructure with powerful software tools,
            giving you access to seamless payments, instant payouts, connected accounts,
            and enterprise-grade security — all in one unified platform.
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
              Trusted by 10,000+ businesses of every size — startups, enterprises, and global brands
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
