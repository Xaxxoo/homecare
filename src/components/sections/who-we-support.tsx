import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { User, Users, Activity, Heart, Brain, Stethoscope } from "lucide-react";

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
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-cream-50">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="Who We Help"
            title="Care for Every Stage of Life at Home"
            description="We work with individuals and families across a range of needs, always focused on supporting comfort, safety, and independence."
          />
        </AnimateIn>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <AnimateIn key={audience.title} delay={index * 0.06}>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-navy-100/50 hover:border-navy-200/70 transition-colors">
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 mb-1">
                      {audience.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
