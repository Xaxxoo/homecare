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
    title: `${service.name} | Home Care in Baltimore, MD`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.name} | ASD Homecare Baltimore`,
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

  const jsonLd = [
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://asdhomecare.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://asdhomecare.com/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: `https://asdhomecare.com/services/${service.slug}`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 via-white to-white pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/20 rounded-[40%_60%_60%_40%/50%_40%_60%_50%] blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none"
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
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-10 items-center">
            <div className="lg:col-span-6 max-w-xl">
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7" aria-hidden="true" />
              </div>
              <h1 className="text-[1.75rem] sm:text-[2.25rem] lg:text-[2.75rem] font-extrabold text-navy-900 leading-[1.08] tracking-tight">
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
            <div className="lg:col-span-5 lg:col-start-8 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg shadow-navy-900/5">
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
      <section className="py-20 lg:py-32">
        <Container>
          <AnimateIn>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-10">
              <div className="lg:col-span-5">
                <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                  How We Can Help
                </p>
                <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-navy-900 leading-[1.15] tracking-tight mb-5">
                  {service.tagline}
                </h2>
                <p className="text-navy-600 leading-relaxed">
                  {service.howWeHelp}
                </p>
              </div>
              <div className="lg:col-span-6 lg:col-start-7">
                <h3 className="text-[17px] font-bold text-navy-900 mb-5">
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
      <section className="py-20 lg:py-32 bg-cream-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimateIn direction="left">
              <div className="bg-white rounded-2xl border border-navy-100/50 p-7 lg:p-8 h-full">
                <h3 className="text-[17px] font-bold text-navy-900 mb-5">
                  Who This May Help
                </h3>
                <ul className="space-y-3.5">
                  {service.whoThisHelps.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-navy-600"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-navy-400 mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[14px] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <div className="bg-navy-900 rounded-2xl p-7 lg:p-8 text-white h-full">
                <h3 className="text-[17px] font-bold mb-5">
                  Benefits
                </h3>
                <ul className="space-y-3.5">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2
                        className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-[14px] leading-relaxed text-navy-200">
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
        <section className="py-20 lg:py-32">
          <Container>
            <AnimateIn>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-cyan-600 mb-4">
                Explore More
              </p>
              <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-navy-900 tracking-tight mb-10">
                Related Services
              </h2>
            </AnimateIn>
            <div className="grid sm:grid-cols-3 gap-5">
              {relatedServices.map((related, index) => {
                const RelatedIcon = related.icon;
                return (
                  <AnimateIn key={related.slug} delay={index * 0.06}>
                    <Link
                      href={`/services/${related.slug}`}
                      className="group block p-6 rounded-2xl bg-cream-50 hover:bg-white border border-transparent hover:border-navy-100/60 hover:shadow-md hover:shadow-navy-900/5 hover:-translate-y-0.5 transition-all duration-300 h-full"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white text-cyan-600 flex items-center justify-center mb-4 shadow-sm group-hover:bg-cyan-50 transition-colors">
                        <RelatedIcon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-[17px] font-bold text-navy-900 mb-2">
                        {related.name}
                      </h3>
                      <p className="text-[14px] text-navy-500 leading-relaxed mb-4">
                        {related.tagline}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-navy-600 group-hover:text-navy-800 transition-colors">
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
