"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { HOSPITAL } from "@/data/hospital";
import Image from "next/image";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Doctors",
    href: "/doctors",
    children: [
      { label: "Dr. Gunjan R. Dhundele", href: "/doctors/dr-gunjan-r-dhundele" },
      { label: "Dr. Tanu Dhundele", href: "/doctors/dr-tanu-dhundele" },
    ],
  },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Orthopaedic Care", href: "/orthopaedic-care" },
      { label: "Cardiac Care", href: "/cardiac-care" },
      { label: "TMT Test", href: "/tmt-test" },
      { label: "Health Checkups", href: "/health-checkups" },
    ],
  },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-card border-b border-gray-100"
          : "bg-white shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 overflow-hidden flex items-center justify-center rounded-xl bg-white ring-1 ring-gray-100 shadow-sm group-hover:shadow-md transition-all">
              <Image 
                src="/images/logo_final.png" 
                alt="Sukhkarta Hospital Orthopaedic and Cardiac Care Centre logo" 
                fill 
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="text-sm sm:text-base font-bold text-brand-blue-700 leading-tight font-display">
                Sukhkarta Hospital
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                Orthopaedic & Cardiac Care Centre
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={activeDropdown === item.label}
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      pathname.startsWith(item.href) && item.href !== "#"
                        ? "text-brand-blue-600 bg-brand-blue-50"
                        : "text-gray-700 hover:text-brand-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors block",
                      pathname === item.href
                        ? "text-brand-blue-600 bg-brand-blue-50"
                        : "text-gray-700 hover:text-brand-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-card-hover border border-gray-100 py-1 z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={cn(
                          "block px-4 py-2.5 text-sm transition-colors",
                          pathname === child.href
                            ? "text-brand-blue-600 bg-brand-blue-50 font-medium"
                            : "text-gray-700 hover:text-brand-blue-600 hover:bg-gray-50"
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={`tel:${HOSPITAL.phones.primary}`}
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-brand-blue-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {HOSPITAL.phones.display.primary}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <nav id="mobile-navigation" className="px-4 py-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={activeDropdown === item.label}
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-50"
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="ml-3 mt-1 space-y-1 border-l-2 border-brand-blue-100 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-brand-blue-600 rounded-lg hover:bg-gray-50"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2.5 text-sm font-medium rounded-lg",
                      pathname === item.href
                        ? "text-brand-blue-600 bg-brand-blue-50"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href={`tel:${HOSPITAL.phones.primary}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-brand-blue-200 text-brand-blue-600 text-sm font-medium rounded-lg hover:bg-brand-blue-50"
              >
                <Phone className="h-4 w-4" />
                Call {HOSPITAL.phones.display.primary}
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-brand-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-lg"
              >
                Book Appointment
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
