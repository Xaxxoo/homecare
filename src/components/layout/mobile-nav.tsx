"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 -mr-2 text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-navy-950/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl shadow-navy-900/10 transition-transform duration-300 ease-out overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="p-5 space-y-0.5" aria-label="Mobile navigation">
          <Link
            href="/"
            onClick={closeMenu}
            className={cn(
              "block px-4 py-3 text-[15px] font-medium rounded-xl transition-colors",
              pathname === "/"
                ? "text-navy-900 bg-navy-50"
                : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
            )}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className={cn(
              "block px-4 py-3 text-[15px] font-medium rounded-xl transition-colors",
              pathname === "/about"
                ? "text-navy-900 bg-navy-50"
                : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
            )}
          >
            About
          </Link>

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={cn(
                "flex items-center justify-between w-full px-4 py-3 text-[15px] font-medium rounded-xl transition-colors",
                pathname.startsWith("/services")
                  ? "text-navy-900 bg-navy-50"
                  : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
              )}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
                aria-hidden="true"
              />
            </button>
            {servicesOpen && (
              <div className="mt-1 ml-4 space-y-0.5 pb-1">
                <Link
                  href="/services"
                  onClick={closeMenu}
                  className="block px-4 py-2.5 text-[13.5px] font-semibold text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors"
                >
                  All Services
                </Link>
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={closeMenu}
                      className="flex items-center gap-3 px-4 py-2.5 text-[13.5px] text-navy-600 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors"
                    >
                      <Icon className="w-4 h-4 text-cyan-500 flex-shrink-0" aria-hidden="true" />
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className={cn(
              "block px-4 py-3 text-[15px] font-medium rounded-xl transition-colors",
              pathname === "/contact"
                ? "text-navy-900 bg-navy-50"
                : "text-navy-600 hover:text-navy-900 hover:bg-navy-50"
            )}
          >
            Contact
          </Link>

          <div className="pt-5 px-1">
            <Button href="/contact" className="w-full" size="lg" onClick={closeMenu}>
              Request Care
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}
