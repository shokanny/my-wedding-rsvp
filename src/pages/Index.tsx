import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import ScheduleSection from "@/components/wedding/ScheduleSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FAQSection from "@/components/wedding/FAQSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section id="schedule">
        <ScheduleSection />
      </section>
      <section id="rsvp">
        <RSVPSection />
      </section>
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
