import "./App.css";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import ReferEarnPage from "./components/ReferEarnPage";
import ReferralBenefits from "./components/ReferralBenefits";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <ReferEarnPage />
      <ReferralBenefits />
      <FAQSection />
      <Footer />
    </main>
  );
}

export default App;
