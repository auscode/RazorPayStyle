import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BankingSection from "./sections/BankingSection";
const Features = lazy(() => import("./components/Features"));
const PoweringIndustries = lazy(() =>
  import("./components/PoweringIndustries")
);
const GlobalPaymentsSection = lazy(() =>
  import("./sections/GlobalPaymentsSection")
);
const Reviews = lazy(() => import("./components/Reviews"));
const ProductHighlights = lazy(() => import("./components/ProductHighlights"));
const HorizonSection = lazy(() => import("./sections/HorizonSection"));
const Footer = lazy(() => import("./components/Footer"));
import Loading from "./components/Loading";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <BankingSection />
      <Features />
      <PoweringIndustries />
      <GlobalPaymentsSection />
      <Reviews />
      <ProductHighlights />
      <HorizonSection />
      <Footer />
    </>
  );
}

export default App;
