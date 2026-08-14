import { Container } from "@/components/ui/container";
import { AnimateIn } from "@/components/ui/animate-in";
import {
  UserCheck,
  HeartHandshake,
  Home,
  Sunrise,
  HandHeart,
} from "lucide-react";
import { cn } from "@/lib/utils";

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
    <section className="py-20 lg:py-32">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky heading */}
          <AnimateIn className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                Why ASD Homecare
              </p>
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-navy-900 leading-[1.12] tracking-tight">
                Support You Can Feel Good About
              </h2>
              <p className="mt-5 text-navy-600 leading-relaxed max-w-md">
                We approach every individual&apos;s care with the same values:
                respect, compassion, and a genuine commitment to quality of life.
              </p>
              {/* Decorative element */}
              <div className="hidden lg:block mt-10">
                <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-navy-300" />
              </div>
            </div>
          </AnimateIn>

          {/* Right: values list with varied visual treatment */}
          <div className="lg:col-span-7 space-y-5">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <AnimateIn key={value.title} delay={index * 0.06}>
                  <div
                    className={cn(
                      "group rounded-2xl p-6 transition-all duration-300",
                      index === 0
                        ? "bg-navy-900 text-white shadow-lg shadow-navy-900/15"
                        : "bg-cream-50 hover:bg-white hover:shadow-md hover:shadow-navy-900/5 border border-transparent hover:border-navy-100/60"
                    )}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={cn(
                          "flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-colors",
                          index === 0
                            ? "bg-cyan-500/15 text-cyan-400"
                            : "bg-white text-cyan-600 shadow-sm group-hover:bg-cyan-50"
                        )}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <h3
                          className={cn(
                            "text-[17px] font-bold mb-1.5",
                            index === 0 ? "text-white" : "text-navy-900"
                          )}
                        >
                          {value.title}
                        </h3>
                        <p
                          className={cn(
                            "text-[15px] leading-relaxed",
                            index === 0 ? "text-navy-300" : "text-navy-600"
                          )}
                        >
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
