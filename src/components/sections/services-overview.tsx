import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimateIn } from "@/components/ui/animate-in";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServicesOverview() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <Container>
        <AnimateIn>
          <SectionHeading
            eyebrow="Our Services"
            title="Care That Meets You Where You Are"
            description="From professional nursing to everyday home support, our services are designed to help you live comfortably and independently at home."
          />
        </AnimateIn>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHighlighted = index === 0 || index === 5;

            return (
              <AnimateIn key={service.slug} delay={index * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className={cn(
                    "group block h-full rounded-2xl p-6 transition-all duration-300",
                    "hover:shadow-lg hover:shadow-navy-900/5 hover:-translate-y-0.5",
                    isHighlighted
                      ? "bg-navy-600 text-white sm:col-span-1"
                      : "bg-white border border-navy-100/60 hover:border-navy-200"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-5",
                      isHighlighted
                        ? "bg-white/15 text-cyan-300"
                        : "bg-cyan-50 text-cyan-600"
                    )}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <h3
                    className={cn(
                      "text-lg font-bold mb-2",
                      isHighlighted ? "text-white" : "text-navy-900"
                    )}
                  >
                    {service.name}
                  </h3>
                  <p
                    className={cn(
                      "text-sm leading-relaxed mb-4",
                      isHighlighted ? "text-navy-200" : "text-navy-500"
                    )}
                  >
                    {service.tagline}
                  </p>
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 text-sm font-semibold",
                      isHighlighted
                        ? "text-cyan-300"
                        : "text-navy-600 group-hover:text-navy-800"
                    )}
                  >
                    Learn More
                    <ArrowRight
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </AnimateIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
