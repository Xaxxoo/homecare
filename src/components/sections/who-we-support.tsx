import { Container } from "@/components/ui/container";
import { AnimateIn } from "@/components/ui/animate-in";
import { User, Users, Activity, Heart, Brain, Stethoscope } from "lucide-react";
import { cn } from "@/lib/utils";

const audiences = [
  {
    icon: User,
    title: "Older Adults",
    description:
      "Seniors who wish to remain safely and comfortably in their own homes with the right level of support.",
  },
  {
    icon: Users,
    title: "Families",
    description:
      "Family members seeking dependable, compassionate care for a parent, spouse, or loved one.",
  },
  {
    icon: Activity,
    title: "Individuals Recovering",
    description:
      "People rehabilitating at home after surgery, illness, or a hospital stay who need extra support.",
  },
  {
    icon: Heart,
    title: "Adults Needing Daily Help",
    description:
      "Individuals who benefit from assistance with personal care, daily activities, and household tasks.",
  },
  {
    icon: Brain,
    title: "People with Cognitive Needs",
    description:
      "Individuals living with Alzheimer's or dementia who need specialized, patient support at home.",
  },
  {
    icon: Stethoscope,
    title: "Those Requiring Clinical Care",
    description:
      "People who need nursing support, medication management, or health monitoring in their home.",
  },
];

export function WhoWeSupport() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <AnimateIn>
          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
              Who We Help
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-navy-900 leading-[1.12] tracking-tight">
              Care for Every Stage of Life at Home
            </h2>
            <p className="mt-5 text-navy-600 leading-relaxed text-lg max-w-2xl mx-auto">
              We work with individuals and families across a range of needs,
              always focused on supporting comfort, safety, and independence.
            </p>
          </div>
        </AnimateIn>

        {/* Two-row layout: top row has 3, bottom row has 3. Alternate visual treatment */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isAccented = index === 0;
            return (
              <AnimateIn key={audience.title} delay={index * 0.05}>
                <div
                  className={cn(
                    "relative rounded-2xl p-6 h-full transition-all duration-300",
                    isAccented
                      ? "bg-navy-900 text-white shadow-lg shadow-navy-900/15"
                      : "bg-cream-50 hover:bg-white hover:shadow-md hover:shadow-navy-900/5 border border-transparent hover:border-navy-100/60"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-4",
                      isAccented
                        ? "bg-cyan-500/15 text-cyan-400"
                        : "bg-white text-navy-500 shadow-sm"
                    )}
                  >
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3
                    className={cn(
                      "text-[17px] font-bold mb-2 leading-snug",
                      isAccented ? "text-white" : "text-navy-900"
                    )}
                  >
                    {audience.title}
                  </h3>
                  <p
                    className={cn(
                      "text-[14px] leading-relaxed",
                      isAccented ? "text-navy-300" : "text-navy-600"
                    )}
                  >
                    {audience.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
