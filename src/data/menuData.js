import {
  HiOutlineCreditCard,
  HiOutlineCurrencyRupee,
  HiOutlineGlobeAlt,
  HiOutlineQrCode,
  HiOutlineArrowTrendingUp,
  HiOutlineClipboardDocumentList,
  HiOutlineBanknotes,
} from "react-icons/hi2";

export const megaMenuData = [
  {
    title: "Accept Payments Online",
    items: [
      { label: "Payment Aggregator", icon: HiOutlineCreditCard },
      { label: "Payment Gateway", icon: HiOutlineCurrencyRupee },
      { label: "Payment Links", icon: HiOutlineClipboardDocumentList },
      { label: "Payment Pages", icon: HiOutlineGlobeAlt },
      { label: "QR Codes", icon: HiOutlineQrCode },
      { label: "UPI Payments", icon: HiOutlineBanknotes },
    ],
  },
  {
    title: "All-In-One Payments",
    items: [
      { label: "Magic Checkout", icon: HiOutlineArrowTrendingUp },
      { label: "Subscriptions", icon: HiOutlineClipboardDocumentList },
      { label: "Instant Settlement", icon: HiOutlineBanknotes },
      { label: "Optimizer", icon: HiOutlineArrowTrendingUp },
    ],
  },
  {
    title: "International Payments",
    items: [
      { label: "Omnichannel Payments", icon: HiOutlineGlobeAlt },
      { label: "International Payments", icon: HiOutlineGlobeAlt },
      { label: "International Bank Transfers", icon: HiOutlineBanknotes },
      { label: "Accept Payments from India", icon: HiOutlineCurrencyRupee },
    ],
  },
];
