import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";
import { services } from "@/data/services";
import { Mail, MapPin } from "lucide-react";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-200" role="contentinfo">
      {/* Top border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <Container className="pt-14 pb-8 lg:pt-16 lg:pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Logo theme="dark" showTagline />
            <p className="mt-5 text-[14px] leading-relaxed text-navy-400 max-w-xs">
              Compassionate home care and everyday support shaped around
              each client&apos;s needs in the Baltimore, Maryland area.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[13.5px] text-navy-400 hover:text-white transition-colors link-underline"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13.5px] text-navy-400 hover:text-white transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-[13px] uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-cyan-500/70 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <address className="text-[13.5px] not-italic text-navy-400 leading-relaxed">
                  12 Little Brook Ct<br />
                  Windsor Mill / Woodlawn<br />
                  Baltimore, Maryland 21244
                </address>
              </li>
              <li>
                <a
                  href="mailto:asdhomecare@gmail.com"
                  className="flex items-center gap-3 text-[13.5px] text-navy-400 hover:text-white transition-colors"
                >
                  <Mail
                    className="w-4 h-4 text-cyan-500/70 flex-shrink-0"
                    aria-hidden="true"
                  />
                  asdhomecare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-navy-800/60">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-navy-500">
              &copy; {new Date().getFullYear()} ASD Homecare. All rights reserved.
            </p>
            <p className="text-[12px] text-navy-600">
              Empowering Your Health and Home
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
