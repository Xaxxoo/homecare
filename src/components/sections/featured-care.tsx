import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { AnimateIn } from "@/components/ui/animate-in";
import { Shield, Clock, Smile, Heart } from "lucide-react";

const highlights = [
  { icon: Shield, text: "Safety-focused environment" },
  { icon: Clock, text: "Consistent, familiar routines" },
  { icon: Smile, text: "Daily engagement and activities" },
  { icon: Heart, text: "Patient, dignified care" },
];

export function FeaturedCare() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Subtle warm background wash */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-warm-50 via-white to-cyan-50/20 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Content */}
          <AnimateIn direction="left" className="lg:col-span-6">
            <div className="max-w-lg">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                Specialized Support
              </p>
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-navy-900 leading-[1.12] tracking-tight">
                Familiar Surroundings.
                <br />
                Compassionate Support.
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                <p>
                  For individuals living with Alzheimer&apos;s or dementia, the
                  comfort of home and the consistency of familiar routines can
                  make a real difference. Our specialized care is built
                  around patience, safety, and consistent engagement.
                </p>
                <p>
                  Every person experiences cognitive changes differently. We take
                  the time to understand what matters to each individual and
                  shape our support around their needs, their comfort, and their
                  dignity.
                </p>
              </div>

              {/* Highlights in a 2x2 grid */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <span className="text-[13.5px] font-medium text-navy-700">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-9">
                <Button href="/services/alzheimers-dementia-care">
                  Explore Dementia Care
                </Button>
              </div>
            </div>
          </AnimateIn>

          {/* Image */}
          <AnimateIn direction="right" className="lg:col-span-6">
            <div className="relative lg:pl-8">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl shadow-navy-900/8">
                {/* TODO: Replace with image of caregiver engaging warmly with senior client */}
                <ImagePlaceholder
                  alt="A caregiver engaging gently with an older adult, maintaining eye contact and showing patience"
                  aspectRatio="photo"
                />
              </div>
              {/* Decorative accents */}
              <div
                className="absolute -top-4 -left-2 lg:left-4 w-24 h-24 border-2 border-cyan-200/20 rounded-2xl -z-10 rotate-6"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -right-2 w-20 h-20 bg-navy-100/20 rounded-2xl -z-10 -rotate-3"
                aria-hidden="true"
              />
            </div>
          </AnimateIn>
        </div>
      </Container>
    </section>
  );
}
