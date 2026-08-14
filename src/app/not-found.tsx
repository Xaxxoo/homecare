import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-100/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-3xl bg-navy-50 text-navy-400 flex items-center justify-center mx-auto mb-8">
            <Home className="w-9 h-9" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Page Not Found
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 leading-tight tracking-tight">
            We couldn&apos;t find that page.
          </h1>
          <p className="mt-4 text-lg text-navy-600 leading-relaxed">
            The page you&apos;re looking for may have been moved or doesn&apos;t
            exist. Let us help you find what you need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Back to Home
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
