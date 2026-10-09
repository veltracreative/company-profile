"use client";

import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const whatsappUrl =
  "https://wa.me/6285710950704?text=Halo%20Veltra%20Creative,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20website.";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#091D50] px-4 pb-6 pt-16 text-white sm:px-6 sm:pt-20 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#FF6B35]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Company Info */}
          <div>
            <a
              href="#home"
              aria-label="Veltra Creative - Kembali ke halaman utama"
              className="mb-5 inline-flex items-center gap-3"
            >
              <Image
                src="/veltra.png"
                alt="Veltra Creative"
                width={50}
                height={50}
                priority
                className="h-15 w-25 object-cover rounded-xl"
              />
            </a>

            <p className="max-w-md text-sm leading-7 text-blue-100/75">
              Partner digital untuk membantu bisnis Indonesia berkembang
              melalui website profesional dan solusi teknologi yang sesuai
              dengan kebutuhan bisnis Anda.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Navigasi
            </h3>

            <ul className="space-y-3 text-sm text-blue-100/75">
              <li>
                <a
                  href="#home"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  Portofolio
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="transition-colors hover:text-[#FF6B35]"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.15em] text-white">
              Hubungi Kami
            </h3>

            <ul className="space-y-4 text-sm text-blue-100/75">
              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF6B35]"
                />
                <a
                  href="tel:+6285710950704"
                  className="transition-colors hover:text-white"
                >
                  +62 857-1095-0704
                </a>
              </li>

              {/* <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF6B35]"
                />
                <a
                  href="mailto:hanifsholihin884@gmail.com"
                  className="break-all transition-colors hover:text-white"
                >
                  hanifsholihin884@gmail.com
                </a>
              </li> */}

              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#FF6B35]"
                />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A61] transition-colors hover:text-white"
            >
              Konsultasi proyek
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 pt-6 text-center text-xs text-blue-100/50 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} Veltra Creative. All rights reserved.
          </p>

          <p>
            Dibuat dengan <span className="text-[#FF6B35]">♥</span> untuk
            bisnis Indonesia.
          </p>
        </div>
      </div>
    </footer>
  );
}