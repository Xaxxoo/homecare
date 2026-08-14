import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";
import { MessageCircle, ClipboardList, FileCheck, Home } from "lucide-react";
import { cn } from "@/lib/utils";

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
      "A care approach shaped around the individual's needs, preferences, and home environment is developed to guide the support provided.",
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
    <section className="py-20 lg:py-32 bg-navy-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimateIn>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-400 mb-4">
              How It Works
            </p>
            <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-white leading-[1.12] tracking-tight">
              Getting Started Is Simple
            </h2>
            <p className="mt-5 text-navy-300 leading-relaxed text-lg">
              We&apos;ve made the process of exploring home care straightforward
              and personal.
            </p>
          </div>
        </AnimateIn>

        <div className="mt-14 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <AnimateIn key={step.number} delay={index * 0.08}>
                <div
                  className={cn(
                    "relative rounded-2xl p-6 h-full",
                    "bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm",
                    "hover:bg-white/[0.07] transition-colors duration-300"
                  )}
                >
                  {/* Step number */}
                  <span className="text-[11px] font-bold text-cyan-400/60 uppercase tracking-widest">
                    Step {step.number}
                  </span>
                  <div className="mt-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="text-[17px] font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-navy-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimateIn>
            );
          })}
        </div>

        <AnimateIn className="mt-12 text-center">
          <Button href="/contact" variant="secondary" size="lg">
            Start a Conversation
          </Button>
        </AnimateIn>
      </Container>
    </section>
  );
}
