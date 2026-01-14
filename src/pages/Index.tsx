import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import DefinitionSection from '@/components/sections/DefinitionSection';
import AudienceMatrix from '@/components/sections/AudienceMatrix/AudienceMatrix';
import MoneyFlow3D from '@/components/sections/MoneyFlow3D';
import RiskTransparencyDial from '@/components/sections/RiskTransparencyDial';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DefinitionSection />
        <AudienceMatrix />
        <MoneyFlow3D />
        <RiskTransparencyDial />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
