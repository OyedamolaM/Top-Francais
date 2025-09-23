import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Popup from "../components/PopUp";
import Stats from "../components/Stats";
import WelcomeVideo from "../components/WelcomeVideo";
import Bootcamp from "../components/Bootcamp";
import Newsletter from "../components/Newsletter";
import WhyChoose from "../components/WhyChoose";
import AboutUs from "../components/AboutUs";
import CourseSubscriptionPricing from "../components/CourseSubscriptionPricing";
import Community from "../components/Community";

export default function Home() {
  return (
    <>
      <Popup />
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <WelcomeVideo />
      <CourseSubscriptionPricing/>
      <Testimonials />
      <Bootcamp />
      <WhyChoose />
      <Community />
      <Newsletter />
      <AboutUs />
      <FAQ />
      <Footer />
    </>
  );
}
