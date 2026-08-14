import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
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

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ASD Homecare's approach to compassionate home healthcare and everyday support for individuals and families in the Baltimore area.",
  openGraph: {
    title: "About ASD Homecare",
    description:
      "Learn about ASD Homecare's approach to compassionate home healthcare and everyday support for individuals and families in the Baltimore area.",
  },
};

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "Care is delivered with warmth, empathy, and genuine concern for each person's wellbeing.",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-4">
              About ASD Homecare
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Care Centered Around Comfort, Dignity &amp; Independence
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
              ASD Homecare helps individuals maintain their health, comfort, and
              independence in the place they know best. We provide healthcare and
              home-support services tailored to each person&apos;s needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left">
              <div className="rounded-3xl overflow-hidden shadow-lg shadow-navy-900/5">
                {/* TODO: Replace with image of caregiving team or warm home environment */}
                <ImagePlaceholder
                  alt="ASD Homecare team providing compassionate support in a bright home setting"
                  aspectRatio="square"
                />
              </div>
            </AnimateIn>
            <AnimateIn direction="right">
              <div className="max-w-lg">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
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
                    Whether someone needs professional nursing, help with personal
                    care, companionship, or support keeping their home running
                    smoothly, we tailor our services around what each individual
                    actually needs, not a one-size-fits-all checklist.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Our Approach */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateIn direction="left" className="order-2 lg:order-1">
              <div className="max-w-lg">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
                  Our Approach
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
                  The Person Comes First. Always.
                </h2>
                <div className="mt-6 space-y-4 text-navy-600 leading-relaxed">
                  <p>
                    We don&apos;t start with a list of services and try to fit
                    people into them. We start with the person. What are their
                    routines? What do they value? What kind of support would
                    actually make their day easier and their life more
                    comfortable?
                  </p>
                  <p>
                    From there, we shape a care approach that respects their
                    preferences, supports their goals, and adapts as their needs
                    change. Good care should feel natural, not intrusive.
                  </p>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn
              direction="right"
              className="order-1 lg:order-2"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg shadow-navy-900/5">
                {/* TODO: Replace with image of a caregiver attentively listening to a client */}
                <ImagePlaceholder
                  alt="A caregiver sitting with a client, listening attentively in a comfortable living room"
                  aspectRatio="square"
                />
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* What Matters to Us */}
      <section className="py-20 lg:py-28">
        <Container>
          <AnimateIn>
            <SectionHeading
              eyebrow="Our Values"
              title="What Matters to Us"
              description="These values guide every interaction, every care plan, and every relationship we build with the people and families we serve."
            />
          </AnimateIn>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimateIn key={value.title} delay={index * 0.06}>
                  <div className="p-6 rounded-2xl bg-cream-50 border border-navy-100/40 hover:border-navy-200/60 transition-colors h-full">
                    <div className="w-12 h-12 rounded-xl bg-white text-cyan-600 flex items-center justify-center shadow-sm mb-5">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Home Matters */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <Container size="narrow">
          <AnimateIn>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
                Why Home Matters
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
                Home Is More Than a Place
              </h2>
              <div className="mt-6 space-y-4 text-navy-600 leading-relaxed text-lg">
                <p>
                  Home is where routines feel natural, where surroundings are
                  familiar, and where comfort comes easily. For many people,
                  staying at home during times of illness, recovery, or aging
                  isn&apos;t just a preference. It&apos;s a meaningful part of
                  maintaining quality of life.
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
