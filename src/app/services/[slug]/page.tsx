import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { AnimateIn } from "@/components/ui/animate-in";
import { CTASection } from "@/components/sections/cta-section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.name,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ASD Homecare`,
      description: service.shortDescription,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedServices = getRelatedServices(service.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    provider: {
      "@type": "LocalBusiness",
      name: "ASD Homecare",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Little Brook Ct",
        addressLocality: "Windsor Mill",
        addressRegion: "MD",
        postalCode: "21244",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-100/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <Container>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="max-w-xl">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
                {service.name}
              </h1>
              <p className="mt-5 text-lg text-navy-600 leading-relaxed">
                {service.heroDescription}
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Request This Service
                </Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg shadow-navy-900/5">
              {/* TODO: Replace with actual service-specific lifestyle image */}
              <ImagePlaceholder
                alt={service.imageAlt}
                aspectRatio="video"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* How We Help */}
      <section className="py-16 lg:py-24">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-3">
                  How We Can Help
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 leading-tight tracking-tight mb-5">
                  {service.tagline}
                </h2>
                <p className="text-navy-600 leading-relaxed">
                  {service.howWeHelp}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900 mb-5">
                  Areas of Support
                </h3>
                <ul className="grid gap-3">
                  {service.supportAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-3 text-navy-600"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[15px]">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </section>

      {/* Who This Helps + Benefits */}
      <section className="py-16 lg:py-24 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            <AnimateIn direction="left">
              <div className="bg-white rounded-2xl border border-navy-100/50 p-8">
                <h3 className="text-xl font-bold text-navy-900 mb-5">
                  Who This May Help
                </h3>
                <ul className="space-y-4">
                  {service.whoThisHelps.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-navy-600"
                    >
                      <span
                        className="w-2 h-2 rounded-full bg-navy-400 mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="bg-navy-600 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-5">
                  Benefits
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[15px] leading-relaxed text-navy-100">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24">
          <Container>
            <AnimateIn>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight mb-10">
                Related Services
              </h2>
            </AnimateIn>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedServices.map((related, index) => {
                const RelatedIcon = related.icon;
                return (
                  <AnimateIn key={related.slug} delay={index * 0.08}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block p-6 rounded-2xl border border-navy-100/60 hover:border-navy-200 hover:shadow-md hover:shadow-navy-900/5 hover:-translate-y-0.5 transition-all duration-300 h-full"
                    >
                      <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4 group-hover:bg-cyan-100 transition-colors">
                        <RelatedIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">
                        {related.name}
                      </h3>
                      <p className="text-sm text-navy-500 leading-relaxed mb-4">
                        {related.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-600 group-hover:text-navy-800 transition-colors">
                        Learn More
                        <ArrowRight
                          className="w-4 h-4 transition-transform group-hover:translate-x-1"
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
      )}

      <CTASection />
    </>
  );
}
