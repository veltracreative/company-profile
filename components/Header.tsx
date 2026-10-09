"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import veltra from "@/public/veltra.png";

const navigation = [
  { label: "Keunggulan", id: "features" },
  { label: "Layanan", id: "services" },
  { label: "Portofolio", id: "portfolio" },
];

const whatsappUrl =
  "https://wa.me/6285710950704?text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Veltra%20Creative";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-xl">
          <div className="flex h-18 items-center justify-between px-4 sm:px-6">
            {/* Brand */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
              aria-label="Veltra Creative home"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl bg-gray-50">
                <Image
                  src={veltra}
                  alt="Veltra Creative logo"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-[#0A2463] sm:text-sm">
                  Veltra Creative
                </span>
                <span className="text-xs font-medium uppercase tracking-widest text-gray-400 sm:block">
                  Digital solutions
                </span>
              </div>
            </motion.a>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-8 md:flex"
            >
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-[#0A2463]"
                >
                  {item.label}
                </button>
              ))}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#0A2463] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#123783] hover:shadow-lg hover:shadow-blue-950/10"
              >
                Hubungi Kami
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </nav>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-[#0A2463] transition-colors hover:bg-gray-50 md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? "close" : "open"}
                  initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile navigation */}
          <AnimatePresence initial={false}>
            {mobileMenuOpen && (
              <motion.div
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden md:hidden"
              >
                <nav
                  aria-label="Mobile navigation"
                  className="flex flex-col gap-1 border-t border-gray-100 p-3"
                >
                  {navigation.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      onClick={() => scrollToSection(item.id)}
                      className="rounded-xl px-4 py-3 text-left text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 hover:text-[#0A2463]"
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0A2463] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#123783]"
                  >
                    Hubungi Kami
                    <ArrowUpRight size={16} />
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}