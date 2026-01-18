import HeroSection from "@/components/HeroSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import MethodologySection from "@/components/MethodologySection";
import SocialProofSection from "@/components/SocialProofSection";
import AuthoritySection from "@/components/AuthoritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TargetAudienceSection />
      <MethodologySection />
      <SocialProofSection />
      <AuthoritySection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
