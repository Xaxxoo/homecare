import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient background with more visual depth */}
      <div className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 py-20 lg:py-28">
        {/* Layered decorative elements */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-[60%_40%_50%_50%/40%_50%_50%_60%] -translate-y-1/4 translate-x-1/4 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-600/10 rounded-[40%_60%_50%_50%/60%_40%_50%_50%] translate-y-1/3 -translate-x-1/4 pointer-events-none"
          aria-hidden="true"
        />
        {/* Horizontal glow line */}
        <div
          className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <Container className="relative">
          <AnimateIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-400/70 mb-5">
                Get Started
              </p>
              <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.5rem] font-bold text-white leading-[1.12] tracking-tight">
                The Right Support Can Make Home Feel Possible Again.
              </h2>
              <p className="mt-6 text-[17px] text-navy-300 leading-relaxed max-w-xl mx-auto">
                Whether you&apos;re exploring care for yourself or someone you
                love, ASD Homecare is here to help you understand the support
                available.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
                <Button href="/contact" variant="secondary" size="lg">
                  Request Care
                </Button>
                <Button href="/services" variant="white" size="lg">
                  View Services
                </Button>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </div>
    </section>
  );
}
