"use client";

import { motion } from "motion/react";
import {
  ArrowRight,
  Zap,
  ShieldCheck,
  Headset,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/6285710950704?text=Halo%2C%20saya%20ingin%20konsultasi%20gratis%20tentang%20website%20untuk%20bisnis%20saya";

const benefits = [
  {
    icon: Zap,
    title: "Performa Cepat",
    description: "Pengalaman pengguna yang optimal",
  },
  {
    icon: ShieldCheck,
    title: "Aman & Andal",
    description: "Dibangun dengan praktik terbaik",
  },
  {
    icon: Headset,
    title: "Dukungan Personal",
    description: "Siap membantu kebutuhan Anda",
  },
];

export function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#FAFBFF] px-4 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8 lg:pb-28 lg:pt-44">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-0 h-105 w-180 -translate-x-1/2 rounded-full bg-blue-100/50 blur-[120px]" />
        <div className="absolute -right-40 top-48 h-72 w-72 rounded-full bg-orange-100/50 blur-[100px]" />
        <div className="absolute -left-40 top-80 h-72 w-72 rounded-full bg-indigo-100/40 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#0A2463 0.7px, transparent 0.7px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 shadow-sm shadow-blue-950/3 backdrop-blur-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50">
                <Sparkles size={14} className="text-[#FF6B35]" />
              </span>

              <span className="text-xs font-semibold tracking-wide text-[#0A2463] sm:text-sm">
                Solusi Digital untuk Bisnis Modern
              </span>

              <span className="hidden h-1.5 w-1.5 rounded-full bg-green-500 sm:block" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-[#101828] sm:text-5xl md:text-6xl lg:text-[72px]"
          >
            Website Profesional,
            <span className="mt-1 block bg-linear-to-r from-[#0A2463] via-[#244CB0] to-[#FF6B35] bg-clip-text pb-2 text-transparent">
              Bisnis Makin Optimal.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg"
          >
            Kami membantu UMKM dan bisnis berkembang melalui website yang
            modern, responsif, dan dirancang sesuai kebutuhan bisnis Anda.
            Fokus pada bisnis, biar kami yang urus teknologinya.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A2463] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-950/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#123783] hover:shadow-xl hover:shadow-blue-950/20 sm:text-base"
            >
              Konsultasi Gratis
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </a>

            <button
              type="button"
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-7 py-4 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-[#0A2463]/30 hover:bg-white hover:text-[#0A2463] sm:text-base"
            >
              Lihat Layanan
            </button>
          </motion.div>

          {/* Supporting note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-500 sm:text-sm"
          >
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-green-600" />
              Konsultasi tanpa biaya
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={15} className="text-green-600" />
              Solusi sesuai kebutuhan
            </span>
          </motion.div>

          {/* Trust cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 grid w-full max-w-4xl grid-cols-1 gap-3 sm:mt-20 sm:grid-cols-3 sm:gap-4"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/80 p-5 text-left shadow-sm shadow-gray-900/2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-lg hover:shadow-blue-950/4 sm:flex-col sm:items-center sm:p-6 sm:text-center"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0A2463] transition-colors group-hover:bg-[#0A2463] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-gray-500 sm:text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}