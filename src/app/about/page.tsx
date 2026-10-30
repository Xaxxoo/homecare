import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { CTASection } from "@/components/sections/cta-section";
import {
  Heart,
  Shield,
  HandHeart,
  Sunrise,
  Star,
  UserCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us | Home Care in Baltimore, MD",
  description:
    "Learn about ASD Homecare's approach to compassionate home healthcare and everyday support for individuals and families in the Baltimore and Windsor Mill, Maryland area.",
  openGraph: {
    title: "About ASD Homecare | Baltimore, MD",
    description:
      "Learn about ASD Homecare's approach to compassionate home healthcare and everyday support in Baltimore, Maryland.",
  },
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Care is delivered with warmth, empathy, and real concern for each person's wellbeing.",
  },
  {
    icon: Shield,
    title: "Respect",
    description:
      "Every individual deserves to be treated with dignity, patience, and consideration for their preferences.",
  },
  {
    icon: HandHeart,
    title: "Dignity",
    description:
      "We protect and honor the personal dignity of every client through thoughtful, sensitive care.",
  },
  {
    icon: Sunrise,
    title: "Independence",
    description:
      "Our support is designed to help clients maintain as much independence and autonomy as possible.",
  },
  {
    icon: Star,
    title: "Reliability",
    description:
      "Consistent, dependable care that families can count on, delivered by people who take their role seriously.",
  },
  {
    icon: UserCheck,
    title: "Personalized Support",
    description:
      "Every care plan reflects the unique needs, routines, and goals of the individual receiving care.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-white to-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/25 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
              About ASD Homecare
            </p>
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold text-navy-900 leading-[1.08] tracking-tight">
              Care Centered Around
              <br className="hidden sm:block" />
              Comfort, Dignity &amp; Independence
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
              ASD Homecare helps individuals maintain their health, comfort, and
              independence in the place they know best — with home care and
              support services shaped around each person&apos;s needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <AnimateIn direction="left" className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-care-team.jpg"
                  alt="Healthcare professionals reviewing patient care information together"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </AnimateIn>
            <AnimateIn direction="right" className="lg:col-span-6 lg:col-start-7">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                  Who We Are
                </p>
                <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-navy-900 leading-[1.15] tracking-tight">
                  Health and Home Support, Working Together
                </h2>
                <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                  <p>
                    ASD Homecare was built on a simple idea: that people receive
                    the best care when they can stay in a place that feels like
                    home. We bring together healthcare services and everyday home
                    support into a single, coordinated approach.
                  </p>
                  <p>
                    From professional nursing and personal care to companionship
                    and household support, we shape our services around what each
                    individual actually needs — not a one-size-fits-all
                    checklist.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-32 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            <AnimateIn direction="left" className="lg:col-span-6 order-2 lg:order-1">
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                  Our Approach
                </p>
                <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-navy-900 leading-[1.15] tracking-tight">
                  The Person Comes First. Always.
                </h2>
                <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                  <p>
                    We don&apos;t start with a list of services and try to fit
                    people into them. We start with the person. What are their
                    routines? What do they value? What kind of support would
                    actually make their day easier and their life more comfortable?
                  </p>
                  <p>
                    From there, we shape a care approach that respects their
                    preferences, supports their goals, and adapts as their needs
                    change. Good care should feel natural, not intrusive.
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn direction="right" className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-2xl lg:rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-caregiver-listening.jpg"
                  alt="A healthcare provider listening attentively during a patient consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* What Matters to Us */}
      <section className="py-20 lg:py-32">
        <Container>
          <AnimateIn>
            <SectionHeading
              eyebrow="Our Values"
              title="What Matters to Us"
              description="These values guide every interaction, every care plan, and every relationship we build with the people and families we serve."
            />
          </AnimateIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              const isFirst = index === 0;
              return (
                <AnimateIn key={value.title} delay={index * 0.05}>
                  <div
                    className={cn(
                      "rounded-2xl p-6 h-full transition-all duration-300",
                      isFirst
                        ? "bg-navy-900 text-white shadow-lg shadow-navy-900/15"
                        : "bg-cream-50 hover:bg-white hover:shadow-md hover:shadow-navy-900/5 border border-transparent hover:border-navy-100/60"
                    )}
                  >
                    <div
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center mb-5",
                        isFirst
                          ? "bg-cyan-500/15 text-cyan-400"
                          : "bg-white text-cyan-600 shadow-sm"
                      )}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3
                      className={cn(
                        "text-[17px] font-bold mb-2",
                        isFirst ? "text-white" : "text-navy-900"
                      )}
                    >
                      {value.title}
                    </h3>
                    <p
                      className={cn(
                        "text-[14px] leading-relaxed",
                        isFirst ? "text-navy-300" : "text-navy-600"
                      )}
                    >
                      {value.description}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Home Matters - editorial pull-quote style */}
      <section className="py-20 lg:py-32 bg-cream-50">
        <Container size="narrow">
          <AnimateIn>
            <div className="text-center">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                Why Home Matters
              </p>
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] font-bold text-navy-900 leading-[1.15] tracking-tight">
                Home Is More Than a Place
              </h2>
              <div className="mt-8 space-y-5 text-navy-600 leading-relaxed text-[17px]">
                <p>
                  Home is where routines feel natural, where surroundings are
                  familiar, and where comfort comes easily. For many people,
                  staying at home during times of illness, recovery, or aging
                  isn&apos;t just a preference. It&apos;s a meaningful part of
                  how they live well.
                </p>
                <p>
                  ASD Homecare exists to make that possible. By bringing the right
                  combination of healthcare and home support directly to our
                  clients, we help them continue living in the environment that
                  matters most to them.
                </p>
              </div>
              <div className="mt-10">
                <Button href="/services" size="lg">
                  Explore Our Services
                </Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
