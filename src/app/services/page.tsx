import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { AnimateIn } from "@/components/ui/animate-in";
import { CTASection } from "@/components/sections/cta-section";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore ASD Homecare's full range of services including skilled nursing, personal care, medication management, rehabilitation, companion care, dementia care, shopping assistance, and house cleaning.",
  openGraph: {
    title: "Our Services | ASD Homecare",
    description:
      "Explore ASD Homecare's full range of home healthcare and support services in the Baltimore area.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Care &amp; Support for Life at Home
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
              From professional nursing to everyday home support, our services
              are designed to help individuals live comfortably, safely, and
              independently at home. Every service can be tailored to fit the
              unique needs of the person receiving care.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-12 lg:space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 === 1;

              return (
                <AnimateIn key={service.slug}>
                  <div
                    className={cn(
                      "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
                      isReversed && "lg:direction-rtl"
                    )}
                  >
                    {/* Image */}
                    <div
                      className={cn(
                        isReversed ? "lg:order-2" : "lg:order-1"
                      )}
                    >
                      <div className="rounded-2xl overflow-hidden shadow-md shadow-navy-900/5">
                        {/* TODO: Replace with actual service image */}
                        <ImagePlaceholder
                          alt={service.imageAlt}
                          aspectRatio="video"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        isReversed ? "lg:order-1" : "lg:order-2"
                      )}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
                          {service.name}
                        </h2>
                      </div>
                      <p className="text-navy-600 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.supportAreas.slice(0, 4).map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2.5 text-sm text-navy-600"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"
                              aria-hidden="true"
                            />
                            {area}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-navy-700 hover:text-navy-900 group transition-colors"
                      >
                        Learn more about {service.name}
                        <ArrowRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
