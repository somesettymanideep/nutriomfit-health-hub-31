import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import ConsultationForm from "@/components/ConsultationForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProgramsSection />
      <ConsultationForm />
      <TestimonialsSection />
      <VideoTestimonialsSection />
      <WhyChooseSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
