import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductHighlights from "./components/ProductHighlights";
import Footer from "./components/Footer";
import PoweringIndustries from "./components/PoweringIndustries";
import Reviews from "./components/Reviews";
import GlobalPaymentsSection from "./sections/GlobalPaymentsSection";
import HorizonSection from "./sections/HorizonSection";
import BankingSection from "./sections/BankingSection";

function App() {
  return (
    <>
      <div className="w-full">
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
      </div>
    </>
  );
}

export default App;
