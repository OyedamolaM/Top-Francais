import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Pricing from "../components/PricingPlans";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
