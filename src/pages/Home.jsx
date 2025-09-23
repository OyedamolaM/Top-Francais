import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Pricing from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Popup from "../components/PopUp";
import Stats from "../components/Stats";
import WelcomeVideo from "../components/WelcomeVideo";

export default function Home() {
  return (
    <>
      <Popup />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <WelcomeVideo />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
