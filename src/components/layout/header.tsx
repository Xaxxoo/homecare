"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeDropdown = useCallback(() => setDropdownOpen(false), []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] border-b border-navy-100/40"
          : "bg-white/0"
      )}
    >
      <Container>
        <nav
          className="flex items-center justify-between h-16 lg:h-[72px]"
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navigation.map((item) => (
              <div
                key={item.href}
                className="relative"
                ref={item.hasDropdown ? dropdownRef : undefined}
                onMouseEnter={item.hasDropdown ? handleMouseEnter : undefined}
                onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  onClick={closeDropdown}
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors",
                    pathname === item.href ||
                      (item.href !== "/" && pathname.startsWith(item.href))
                      ? "text-navy-900"
                      : "text-navy-500 hover:text-navy-800"
                  )}
                  aria-expanded={item.hasDropdown ? dropdownOpen : undefined}
                  aria-haspopup={item.hasDropdown ? "true" : undefined}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        dropdownOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && dropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                    role="menu"
                  >
                    <div className="bg-white rounded-2xl shadow-xl shadow-navy-900/8 border border-navy-100/50 p-2.5 w-[300px]">
                      <div className="space-y-0.5">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              onClick={closeDropdown}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-cream-50 transition-colors group"
                              role="menuitem"
                            >
                              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-navy-50 text-navy-500 flex items-center justify-center group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">
                                <Icon className="w-4 h-4" />
                              </div>
                              <span className="text-[13.5px] font-medium text-navy-600 group-hover:text-navy-900 transition-colors">
                                {service.name}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                      <div className="mt-1.5 pt-1.5 border-t border-navy-100/60">
                        <Link
                          href="/services"
                          onClick={closeDropdown}
                          className="block px-3 py-2 text-[13.5px] font-semibold text-navy-600 hover:text-navy-900 rounded-xl hover:bg-cream-50 transition-colors"
                          role="menuitem"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <Button href="/contact" size="default">
              Request Care
            </Button>
          </div>

          {/* Mobile Nav */}
          <MobileNav />
        </nav>
      </Container>
    </header>
  );
}
