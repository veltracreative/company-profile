"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Zap,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Clock,
  Headphones,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Performa Cepat",
    description:
      "Website yang dioptimalkan agar halaman terasa responsif dan pengunjung dapat mengakses informasi dengan nyaman.",
    number: "01",
  },
  {
    icon: ShieldCheck,
    title: "Keamanan Website",
    description:
      "Implementasi HTTPS, validasi input, dan praktik keamanan yang disesuaikan dengan kebutuhan website Anda.",
    number: "02",
  },
  {
    icon: Smartphone,
    title: "Responsif di Semua Perangkat",
    description:
      "Tampilan website yang menyesuaikan layar smartphone, tablet, hingga desktop untuk pengalaman yang konsisten.",
    number: "03",
  },
  {
    icon: TrendingUp,
    title: "SEO-Friendly",
    description:
      "Struktur halaman yang rapi dan mudah dipahami mesin pencari sebagai fondasi untuk meningkatkan visibilitas online.",
    number: "04",
  },
  {
    icon: Clock,
    title: "Pengerjaan Terencana",
    description:
      "Timeline dan ruang lingkup proyek yang jelas agar proses pengembangan lebih terarah dan transparan.",
    number: "05",
  },
  {
    icon: Headphones,
    title: "Dukungan Berkelanjutan",
    description:
      "Bantuan dan konsultasi setelah website diluncurkan sesuai kebutuhan serta kesepakatan layanan.",
    number: "06",
  },
];

export function Features() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="features"
      ref={ref}
      className="relative overflow-hidden bg-[#FAFBFF] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/50 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-100/40 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 24 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={15} className="text-[#FF6B35]" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A2463]">
              Mengapa Veltra Creative
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Bukan Sekadar Website,
            <span className="mt-2 block text-[#0A2463]">
              tapi Solusi untuk Bisnis.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Kami menggabungkan desain, teknologi, dan strategi untuk
            membangun website yang sesuai dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7 lg:p-8"
              >
                {/* Number */}
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2463]/6 text-[#0A2463] transition-colors duration-300 group-hover:bg-[#0A2463] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-medium tracking-wider text-slate-300 transition-colors group-hover:text-[#FF6B35]">
                    {feature.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-7 h-px w-full bg-slate-100 transition-colors duration-300 group-hover:bg-blue-100" />

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    Veltra Creative
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0A2463]"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:mt-16 sm:flex-row sm:p-8 lg:px-10"
        >
          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35] sm:flex">
              <Sparkles size={22} />
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Punya ide untuk bisnis Anda?
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base">
                Konsultasikan kebutuhan website Anda bersama tim kami.
              </p>

              <div className="mt-3 flex items-center gap-2 text-xs font-medium text-slate-500">
                <CheckCircle2 size={15} className="text-green-600" />
                Konsultasi awal gratis
              </div>
            </div>
          </div>

          <a
            href="https://wa.me/6285710950704?text=Halo%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20Veltra%20Creative"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0A2463] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#123783] sm:w-auto"
          >
            Konsultasi Gratis
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}