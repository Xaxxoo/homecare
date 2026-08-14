import { Hero } from "@/components/sections/hero";
import { Introduction } from "@/components/sections/introduction";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeaturedCare } from "@/components/sections/featured-care";
import { WhoWeSupport } from "@/components/sections/who-we-support";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSteps />
      <FeaturedCare />
      <WhoWeSupport />
      <CTASection />
    </>
  );
}
