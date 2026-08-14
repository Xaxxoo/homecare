import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { AnimateIn } from "@/components/ui/animate-in";
import { Shield, Clock, Smile, Heart } from "lucide-react";

const highlights = [
  { icon: Shield, text: "Safety-focused environment" },
  { icon: Clock, text: "Consistent, familiar routines" },
  { icon: Smile, text: "Meaningful engagement" },
  { icon: Heart, text: "Patient, dignified care" },
];

export function FeaturedCare() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <AnimateIn direction="left">
            <div className="max-w-lg">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
                Specialized Support
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
                Familiar Surroundings. Compassionate Support.
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  For individuals living with Alzheimer&apos;s or dementia, the
                  comfort of home and the consistency of familiar routines can
                  make a profound difference. Our specialized care is built
                  around patience, safety, and meaningful engagement.
                </p>
                <p>
                  Every person experiences cognitive changes differently. We take
                  the time to understand what matters to each individual and
                  shape our support around their needs, their comfort, and their
                  dignity.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2.5">
                      <Icon
                        className="w-4.5 h-4.5 text-cyan-500 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium text-navy-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <Button href="/services/alzheimers-dementia-care">
                  Explore Dementia Care
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Image */}
          <AnimateIn direction="right">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-lg shadow-navy-900/5">
                {/* TODO: Replace with image of caregiver engaging warmly with senior client */}
                <ImagePlaceholder
                  alt="A caregiver engaging gently with an older adult, maintaining eye contact and showing patience"
                  aspectRatio="square"
                />
              </div>
              <div
                className="absolute -top-3 -left-3 w-20 h-20 border-2 border-cyan-300/30 rounded-2xl -z-10"
                aria-hidden="true"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
