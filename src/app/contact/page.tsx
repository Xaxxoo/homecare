import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { AnimateIn } from "@/components/ui/animate-in";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ASD Homecare to discuss home healthcare and support services for yourself or a loved one in the Baltimore area.",
  openGraph: {
    title: "Contact Us | ASD Homecare",
    description:
      "Get in touch with ASD Homecare to discuss home healthcare and support services in the Baltimore area.",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-cream-50 to-white pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-3xl -translate-y-1/3 -translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />
        <Container>
          <div className="max-w-3xl mx-auto text-center relative">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-600 mb-4">
              Get in Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-navy-900 leading-[1.1] tracking-tight">
              Let&apos;s Talk About the Care You Need
            </h1>
            <p className="mt-6 text-lg text-navy-600 leading-relaxed max-w-2xl mx-auto">
              Whether you&apos;re planning ahead or need support for a loved one,
              tell us a little about your situation and ASD Homecare can help you
              explore the next step.
            </p>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Info Sidebar */}
            <AnimateIn direction="left" className="lg:col-span-4">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-bold text-navy-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center">
                        <MapPin className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-800 mb-1">
                          Address
                        </p>
                        <address className="text-sm not-italic text-navy-600 leading-relaxed">
                          12 Little Brook Ct<br />
                          Windsor Mill / Woodlawn<br />
                          Baltimore, Maryland 21244
                        </address>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy-50 text-navy-500 flex items-center justify-center">
                        <Mail className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-800 mb-1">
                          Email
                        </p>
                        <a
                          href="mailto:hi@asdhomecare.com"
                          className="text-sm text-navy-600 hover:text-navy-800 transition-colors"
                        >
                          hi@asdhomecare.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-cream-50 border border-navy-100/40">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock
                      className="w-5 h-5 text-cyan-600"
                      aria-hidden="true"
                    />
                    <h3 className="font-bold text-navy-900">
                      What Happens Next?
                    </h3>
                  </div>
                  <ol className="space-y-3 text-sm text-navy-600 leading-relaxed">
                    <li className="flex gap-2.5">
                      <span className="font-bold text-navy-800 flex-shrink-0">
                        1.
                      </span>
                      We review your inquiry and reach out to learn more about
                      your needs.
                    </li>
                    <li className="flex gap-2.5">
                      <span className="font-bold text-navy-800 flex-shrink-0">
                        2.
                      </span>
                      Together, we discuss the kind of support that would help
                      most.
                    </li>
                    <li className="flex gap-2.5">
                      <span className="font-bold text-navy-800 flex-shrink-0">
                        3.
                      </span>
                      A personalized care approach is developed around your
                      individual situation.
                    </li>
                  </ol>
                </div>

                <div className="p-5 rounded-2xl bg-navy-900 text-white">
                  <p className="text-sm font-semibold mb-1">
                    Need urgent medical help?
                  </p>
                  <p className="text-xs text-navy-300 leading-relaxed">
                    For medical emergencies, please call 911 or visit your
                    nearest emergency room. ASD Homecare does not provide
                    emergency medical services.
                  </p>
                </div>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn direction="right" className="lg:col-span-8">
              <ContactForm />
            </AnimateIn>
          </div>
        </Container>
      </section>
    </>
  );
}
