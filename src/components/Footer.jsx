import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";
import pci from "../assets/icon/pci.avif";
import aicpa from "../assets/icon/aicpa.avif";
import iso from "../assets/icon/iso.png";

export default function Footer() {
  return (
<footer className="bg-gray-100 pt-12 pb-6 px-4">
  <div className="max-w-7xl mx-auto">

    {/* Unified Grid: Description + Link Columns */}
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">

      {/* COLUMN 1 — BRAND + DESCRIPTION */}
      <div className="md:col-span-2">
        <div className="flex items-center mb-4 text-blue-600">
          <HiLightningBolt className="text-3xl" />
          <span className="ml-2 text-xl font-bold">LaZerPay</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          LaZerPay is the only payments solution in India that allows
          businesses to accept, process, and disburse payments with its
          product suite. It gives you access to all payment modes including
          credit card, debit card, netbanking, UPI, and popular wallets
          including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money,
          and PayZapp.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          LaZerPayX supercharges your business banking experience, bringing
          effectiveness, efficiency, and excellence to all financial
          processes. With LaZerPayX, businesses can get access to
          fully-functional current accounts, supercharge their payouts and
          automate payroll compliance.
        </p>
        <p className="text-gray-600 text-sm mb-4">
          Manage your marketplace, automate bank transfers, collect recurring
          payments, share invoices with customers, and avail working capital
          loans — all from a single platform. Fast forward your business with
          LaZerPay.
        </p>
        <p className="text-gray-600 text-xs">
          Disclaimer: The LaZerPayX powered Current Account and VISA corporate
          credit card are provided by our partner banks. Your LaZerPayX
          powered current account is provided by our partner banks i.e.,
          ICICI, RBL, Yes Bank, in accordance with RBI regulations. LaZerPayX
          itself is not a bank and doesn't hold or claim to hold a banking
          license.
        </p>
      </div>

      {/* COLUMN 2 — ACCEPT PAYMENTS */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">ACCEPT PAYMENTS</h4>
        <ul className="space-y-2 text-sm">
          {[
            "Payment Aggregator",
            "Payment Gateway",
            "Payment Pages",
            "Payment Links",
            "LaZerPay POS NEW",
            "QR Codes",
            "Subscriptions",
            "Smart Collect",
            "Optimizer",
            "Instant Settlements",
          ].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">PAYROLL</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-blue-600 hover:underline">LaZerPayX Payroll</a></li>
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">BECOME A PARTNER</h4>
        <ul className="space-y-2 text-sm">
          {["Refer and Earn", "Onboarding APIs"].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMN 3 — BANKING + DEVELOPERS + RESOURCES */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">BANKING PLUS</h4>
        <ul className="space-y-2 text-sm">
          {[
            "LaZerPayX",
            "Source to pay",
            "Current Accounts",
            "Payouts",
            "Payout Links",
            "Corporate Credit Card",
          ].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">DEVELOPERS</h4>
        <ul className="space-y-2 text-sm">
          {["Docs", "Integrations", "API Reference"].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">RESOURCES</h4>
        <ul className="space-y-2 text-sm">
          {["Blog", "Learn", "Customer Stories", "Events"].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">SOLUTIONS</h4>
        <ul className="space-y-2 text-sm">
          {["Education", "E-commerce", "SaaS", "BFSI"].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* COLUMN 4 — COMPANY + HELP */}
      <div>
        <h4 className="font-semibold mb-4 text-gray-800">COMPANY</h4>
        <ul className="space-y-2 text-sm">
          {[
            "About Us",
            "Careers",
            "Terms of Use",
            "Privacy Policy",
            "Grievance Redressal",
            "Responsible Disclosure",
            "Partners",
            "White papers",
            "Corporate Information",
          ].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">HELP & SUPPORT</h4>
        <ul className="space-y-2 text-sm">
          {["Support", "Knowledge base"].map((item) => (
            <li key={item}>
              <a href="#" className="text-blue-600 hover:underline">{item}</a>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">FIND US ONLINE</h4>
        <div className="flex space-x-4">
          <FaFacebookF className="text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-blue-600 cursor-pointer" />
          <FaLinkedinIn className="text-gray-600 hover:text-blue-600 cursor-pointer" />
        </div>

        <h4 className="font-semibold mt-6 mb-4 text-gray-800">
          REGISTERED OFFICE ADDRESS
        </h4>
        <p className="text-gray-600 text-sm">
          LaZerPay Software Limited,
          <br />1st Floor, SJR Cyber,
          <br />22 Laskar Hosur Road,
          <br />Adugodi, Bengaluru, 560030
          <br />Karnataka, India
          <br />CIN: U72200KA201
        </p>
      </div>
    </div>

    {/* Certifications */}
    <div className="flex space-x-4 mb-8">
      <img src={pci} alt="PCI DSS Certified" className="h-12" />
      <img src={iso} alt="ISO Certified" className="h-12" />
      <img src={aicpa} alt="AICPA SOC Certified" className="h-12" />
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-gray-300 pt-6 text-center text-gray-600 text-xs">
      <p>
        Payment aggregation services provided by LaZerPay Software Limited
        (formerly known as LaZerPay Software Private Limited) — An RBI
        Authorised Online Payment Aggregator
      </p>
      <p className="mt-2">© LaZerPay 2025<br />All Rights Reserved</p>
    </div>
  </div>
</footer>

  );
}
