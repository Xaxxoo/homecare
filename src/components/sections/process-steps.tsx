import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { MessageCircle, ClipboardList, FileCheck, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Tell Us What You Need",
    description:
      "Share what kind of support you or your loved one may need. There's no obligation, just a conversation to understand your situation.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Discuss Your Care Needs",
    description:
      "We learn about routines, preferences, health needs, and priorities so we can understand what kind of support would help most.",
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Create a Personalized Plan",
    description:
      "A care approach tailored to the individual's needs, preferences, and home environment is developed to guide the support provided.",
  },
  {
    number: "04",
    icon: Home,
    title: "Begin Support at Home",
    description:
      "Receive compassionate, reliable support where it matters most. Care is delivered with consistency, warmth, and respect.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Started Is Simple"
            description="We've made the process of exploring home care straightforward and personal."
          />
        </AnimateIn>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimateIn key={step.number} delay={index * 0.1}>
                <div className="relative">
                  {/* Connector line (desktop only) */}
                  {index < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-[-32px] h-px bg-navy-200/50"
                      aria-hidden="true"
                    />
                  )}
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-navy-100 shadow-sm mb-5">
                      <Icon
                        className="w-7 h-7 text-navy-600"
                        aria-hidden="true"
                      />
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cyan-500 text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-navy-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-navy-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn className="mt-12 text-center">
          <Button href="/contact" size="lg">
            Start a Conversation
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
