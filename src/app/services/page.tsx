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
  title: "Home Care Services in Baltimore, MD",
  description:
    "Explore ASD Homecare's home care services in Baltimore, Maryland — skilled nursing, personal care, companion care, dementia care, rehabilitation, medication management, shopping assistance, and house cleaning.",
  openGraph: {
    title: "Home Care Services | ASD Homecare",
    description:
      "Explore ASD Homecare's full range of home care services in the Baltimore and Windsor Mill, Maryland area.",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-white to-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/25 rounded-[60%_40%_50%_50%/45%_55%_45%_55%] blur-3xl -translate-y-1/3 -translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-warm-50/40 rounded-[40%_60%_50%_50%/55%_45%_55%_45%] blur-3xl translate-x-1/4 translate-y-1/4 pointer-events-none"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
              What We Offer
            </p>
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-extrabold text-navy-900 leading-[1.08] tracking-tight">
              Care &amp; Support for
              <br className="hidden sm:block" />
              Life at Home
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
              Our home care services in the Baltimore area range from
              professional nursing to everyday home support. Each service can be
              shaped to fit the needs and preferences of the person receiving
              care.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="space-y-16 lg:space-y-28">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isReversed = index % 2 === 1;

              return (
                <AnimateIn key={service.slug}>
                  <div
                    className={cn(
                      "grid lg:grid-cols-12 gap-8 lg:gap-10 items-center",
                      isReversed && "lg:direction-rtl"
                    )}
                  >
                    {/* Image */}
                    <div
                      className={cn(
                        isReversed
                          ? "lg:order-2 lg:col-span-5 lg:col-start-8"
                          : "lg:order-1 lg:col-span-5"
                      )}
                    >
                      <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-md shadow-navy-900/5">
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
                        isReversed
                          ? "lg:order-1 lg:col-span-6"
                          : "lg:order-2 lg:col-span-6 lg:col-start-7"
                      )}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h2 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-navy-900 tracking-tight">
                          {service.name}
                        </h2>
                      </div>
                      <p className="text-navy-600 leading-relaxed mb-5">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2.5 mb-6">
                        {service.supportAreas.slice(0, 4).map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2.5 text-[14px] text-navy-600"
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
                        className="inline-flex items-center gap-2 text-[14px] font-semibold text-navy-700 hover:text-navy-900 group transition-colors"
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
