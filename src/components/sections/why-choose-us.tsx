import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  UserCheck,
  HeartHandshake,
  Home,
  Sunrise,
  HandHeart,
} from "lucide-react";

const values = [
  {
    icon: UserCheck,
    title: "Personalized Care",
    description:
      "Support shaped around the individual's routines, preferences, and goals. No two care plans look the same because no two people are the same.",
  },
  {
    icon: HeartHandshake,
    title: "Dignity & Respect",
    description:
      "Every interaction is guided by deep respect for the individual. Clients should always feel heard, valued, and treated with care.",
  },
  {
    icon: Home,
    title: "Whole-Home Support",
    description:
      "Healthcare and everyday home support work together to keep your home environment safe, comfortable, and running smoothly.",
  },
  {
    icon: Sunrise,
    title: "Greater Independence",
    description:
      "Our care is designed to support independence whenever possible, helping clients maintain the routines and activities they value.",
  },
  {
    icon: HandHeart,
    title: "Compassionate Relationships",
    description:
      "Great care begins with trust, patience, and genuine human connection. We build relationships that make care feel natural.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="Why ASD Homecare"
            title="Support You Can Feel Good About"
            description="We approach every individual's care with the same values: respect, compassion, and a genuine commitment to quality of life."
          />
        </AnimateIn>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AnimateIn key={value.title} delay={index * 0.08}>
                <div
                  className={
                    index === values.length - 1
                      ? "sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none"
                      : ""
                  }
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-50 to-navy-50 text-cyan-600 flex items-center justify-center">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-navy-600 text-[15px] leading-relaxed">
                        {value.description}
                      </p>
                    </div>
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
