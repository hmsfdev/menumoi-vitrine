import React from "react";
import Hero from "./components/HomePage/Hero";
import Partners from "./components/HomePage/Partners";
import About from "./components/HomePage/About";
import HowItWorks from "./components/HomePage/HowItWorks";
import SubscriptionPlans from "./components/HomePage/SubscriptionPlans";
import MobileAppFeatures from "./components/HomePage/MobileAppFeatures";
import Testimonials from "./components/HomePage/Testimonials";

const page = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <About />
      <HowItWorks />
      <SubscriptionPlans />
      <MobileAppFeatures />
      <Testimonials />
    </div>
  );
};

export default page;
