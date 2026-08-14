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
      <Container className="pt-16 pb-8 lg:pt-20 lg:pb-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Logo theme="dark" showTagline />
            <p className="mt-5 text-sm leading-relaxed text-navy-300 max-w-sm">
              ASD Homecare provides compassionate healthcare and everyday home
              support tailored to the individual needs of each client in the
              Baltimore area.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <address className="text-sm not-italic text-navy-300 leading-relaxed">
                  12 Little Brook Ct<br />
                  Windsor Mill / Woodlawn<br />
                  Baltimore, Maryland 21244
                </address>
              </li>
              <li>
                <a
                  href="mailto:hi@asdhomecare.com"
                  className="flex items-center gap-3 text-sm text-navy-300 hover:text-white transition-colors"
                >
                  <Mail
                    className="w-4 h-4 text-cyan-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  hi@asdhomecare.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-navy-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-navy-400">
              &copy; {new Date().getFullYear()} ASD Homecare. All rights
              reserved.
            </p>
            <p className="text-xs text-navy-500">
              Empowering Your Health and Home
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
