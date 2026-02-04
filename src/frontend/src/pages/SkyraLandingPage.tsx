import TopNav from '../components/skyra/TopNav';
import HeroSection from '../components/skyra/HeroSection';
import ProblemSection from '../components/skyra/ProblemSection';
import WhatIsSkyraSection from '../components/skyra/WhatIsSkyraSection';
import HowItWorksSection from '../components/skyra/HowItWorksSection';
import WhySkyraSection from '../components/skyra/WhySkyraSection';
import ProductsSection from '../components/skyra/ProductsSection';
import ApplicationsSection from '../components/skyra/ApplicationsSection';
import AQIScienceExplainerSection from '../components/skyra/AQIScienceExplainerSection';
import SustainabilityESGSection from '../components/skyra/SustainabilityESGSection';
import FutureVisionSection from '../components/skyra/FutureVisionSection';
import BottomCTASection from '../components/skyra/BottomCTASection';
import Footer from '../components/skyra/Footer';

export default function SkyraLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main>
        <HeroSection />
        <ProblemSection />
        <WhatIsSkyraSection />
        <HowItWorksSection />
        <WhySkyraSection />
        <ProductsSection />
        <ApplicationsSection />
        <AQIScienceExplainerSection />
        <SustainabilityESGSection />
        <FutureVisionSection />
        <BottomCTASection />
      </main>
      <Footer />
    </div>
  );
}
