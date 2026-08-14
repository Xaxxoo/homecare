import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { AnimateIn } from "@/components/ui/animate-in";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy-600/20 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <Container className="relative">
        <AnimateIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
              The Right Support Can Make Home Feel Possible Again.
            </h2>
            <p className="mt-6 text-lg text-navy-300 leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re exploring care for yourself or someone you love,
              ASD Homecare is here to help you understand the support available.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
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
    </section>
  );
}
