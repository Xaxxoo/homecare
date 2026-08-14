import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-32 bg-cream-50 relative">
      {/* Organic top transition */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy-100/50 to-transparent"
        aria-hidden="true"
      />
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Care That Meets You Where You Are"
            description="From professional nursing to everyday home support, our services are designed to help you live comfortably and independently at home."
          />
        </AnimateIn>

        {/* Card grid with varying visual weight */}
        <div className="mt-14 lg:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isFeature = index === 0 || index === 5;

            return (
              <AnimateIn key={service.slug} delay={index * 0.04}>
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group relative block h-full rounded-2xl p-6 lg:p-7 transition-all duration-300",
                    "hover:-translate-y-1",
                    isFeature
                      ? "bg-navy-900 text-white shadow-xl shadow-navy-900/20 hover:shadow-2xl hover:shadow-navy-900/25"
                      : "bg-white border border-navy-100/60 shadow-sm hover:shadow-md hover:shadow-navy-900/5 hover:border-navy-200/80"
                  )}
                >
                  {/* Subtle gradient overlay on featured cards */}
                  {isFeature && (
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-navy-800/50 to-transparent pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                  <div className="relative">
                    <div
                      className={cn(
                        "w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300",
                        isFeature
                          ? "bg-cyan-500/15 text-cyan-400 group-hover:bg-cyan-500/25"
                          : "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100"
                      )}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3
                      className={cn(
                        "text-[17px] font-bold mb-2 leading-snug",
                        isFeature ? "text-white" : "text-navy-900"
                      )}
                    >
                      {service.name}
                    </h3>
                    <p
                      className={cn(
                        "text-[13.5px] leading-relaxed mb-5",
                        isFeature ? "text-navy-300" : "text-navy-500"
                      )}
                    >
                      {service.tagline}
                    </p>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors",
                        isFeature
                          ? "text-cyan-400 group-hover:text-cyan-300"
                          : "text-navy-600 group-hover:text-navy-900"
                      )}
                    >
                      Learn More
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
