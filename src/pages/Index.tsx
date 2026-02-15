import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  SkillsSection,
  ContactSection,
} from "../components/Sections";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#020617] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;