import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import SelectedWork from "@/components/sections/SelectedWork";
import SkillsMarquee from "@/components/sections/SkillsMarquee";
import Process from "@/components/sections/Process";
import AboutEducation from "@/components/sections/AboutEducation";
import Testimonials from "@/components/sections/Testimonials";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Core Services Bento Grid */}
      <Services />

      {/* 3. Selected Case Studies */}
      <SelectedWork />

      {/* 4. Skills Marquee & Category Chips */}
      <SkillsMarquee />

      {/* 5. 4-Step Predictable Process */}
      <Process />

      {/* 6. About Me & Education Timeline */}
      <AboutEducation />

      {/* 7. Client Testimonials */}
      <Testimonials />

      {/* 8. Conversion Contact & Inquiry Form */}
      <ContactSection />

      {/* 9. Global Footer */}
      <Footer />
    </div>
  );
}
