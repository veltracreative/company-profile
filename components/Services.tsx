"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Check,
  ArrowUpRight,
  Sparkles,
  Globe,
  Layers3,
  Code2,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

const whatsappNumber = "6285710950704";

const services = [
  {
    name: "Website Starter",
    tagline: "Untuk bisnis yang ingin mulai online",
    description:
      "Bangun kehadiran digital profesional untuk memperkenalkan bisnis dan menjangkau lebih banyak pelanggan.",
    icon: Globe,
    features: [
      "Landing page profesional",
      "Desain responsif untuk mobile",
      "Integrasi WhatsApp",
      "Domain dan SSL sesuai kebutuhan",
      "Pengaturan SEO dasar",
      "Panduan pengelolaan website",
    ],
    popular: false,
    ctaText: "Diskusikan Kebutuhan",
    whatsappMessage:
      "Halo Veltra Creative, saya ingin konsultasi tentang pembuatan website starter. Saya ingin mendapatkan rekomendasi solusi dan proposal.",
  },
  {
    name: "Website Professional",
    tagline: "Untuk bisnis yang ingin berkembang",
    description:
      "Tampilkan produk dan layanan secara lebih lengkap dengan website yang dirancang mengikuti alur bisnis Anda.",
    icon: Layers3,
    features: [
      "Website multi-halaman",
      "Desain UI/UX sesuai brand",
      "Halaman produk atau layanan",
      "Blog atau artikel",
      "Integrasi formulir dan WhatsApp",
      "SEO dasar dan optimasi performa",
      "Dukungan setelah peluncuran",
    ],
    popular: true,
    ctaText: "Minta Proposal",
    whatsappMessage:
      "Halo Veltra Creative, saya tertarik dengan website professional. Saya ingin mendiskusikan kebutuhan bisnis dan meminta proposal.",
  },
  {
    name: "Custom Development",
    tagline: "Untuk kebutuhan bisnis yang spesifik",
    description:
      "Kembangkan solusi digital khusus ketika bisnis Anda membutuhkan fitur, sistem, atau integrasi yang lebih kompleks.",
    icon: Code2,
    features: [
      "Custom web application",
      "Dashboard dan admin panel",
      "Database dan API integration",
      "Sistem autentikasi pengguna",
      "E-commerce dan workflow khusus",
      "Integrasi layanan pihak ketiga",
      "Ruang lingkup dan timeline terencana",
    ],
    popular: false,
    ctaText: "Konsultasi Proyek",
    whatsappMessage:
      "Halo Veltra Creative, saya membutuhkan custom web application. Saya ingin konsultasi mengenai kebutuhan teknis, timeline, dan proposal proyek.",
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-[#FAFBFF] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-100/40 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-orange-100/40 blur-[100px]"
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
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <Sparkles size={15} className="text-[#FF6B35]" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A2463]">
              Layanan Kami
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Solusi Digital untuk
            <span className="mt-2 block text-[#0A2463]">
              Setiap Tahap Bisnis.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Setiap bisnis memiliki kebutuhan yang berbeda. Ceritakan ide
            Anda kepada kami, dan kami akan membantu menyusun solusi serta
            proposal yang sesuai dengan tujuan proyek Anda.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 24 }
                }
                transition={{
                  duration: 0.5,
                  delay: 0.1 + index * 0.12,
                }}
                className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7 lg:p-8 ${service.popular
                    ? "border-[#0A2463]/25 shadow-lg shadow-blue-950/6"
                    : "border-slate-200/80 shadow-sm hover:border-blue-200"
                  }`}
              >
                {/* Recommended badge */}
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0A2463] px-3.5 py-1.5 text-xs font-semibold text-white shadow-md">
                      <Sparkles size={12} />
                      Rekomendasi
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${service.popular
                      ? "bg-orange-50 text-[#FF6B35]"
                      : "bg-blue-50 text-[#0A2463]"
                    }`}
                >
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* Heading */}
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {service.tagline}
                </p>

                <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                  {service.name}
                </h3>

                <p className="mt-4 min-h-21 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

                <div className="my-6 h-px bg-slate-100" />

                {/* Features */}
                <p className="mb-4 text-sm font-semibold text-slate-900">
                  Cakupan layanan
                </p>

                <ul className="mb-8 flex-1 space-y-3.5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                        <Check size={13} strokeWidth={2.5} />
                      </span>

                      <span className="text-sm leading-6 text-slate-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    service.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${service.popular
                      ? "bg-[#0A2463] text-white shadow-md shadow-blue-950/10 hover:bg-[#123783]"
                      : "border border-slate-200 bg-white text-[#0A2463] hover:border-[#0A2463] hover:bg-slate-50"
                    }`}
                >
                  {service.ctaText}
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>

        {/* Proposal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:mt-14 sm:flex-row sm:p-8 lg:px-10"
        >
          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35] sm:flex">
              <MessageCircle size={22} />
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Punya kebutuhan di luar layanan di atas?
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                Diskusikan kebutuhan Anda dengan tim kami. Kami akan
                membantu menentukan ruang lingkup, timeline, dan proposal
                yang sesuai.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Halo Veltra Creative, saya ingin berkonsultasi mengenai kebutuhan website atau aplikasi untuk bisnis saya dan mendapatkan proposal."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#FF6B35] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#f45b28] sm:w-auto"
          >
            <MessageCircle size={17} />
            Hubungi Kami
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Reassurance */}
        <p className="mt-6 text-center text-xs leading-6 text-slate-500 sm:text-sm">
          Setiap proyek akan dievaluasi berdasarkan kebutuhan, ruang
          lingkup, dan target bisnis sebelum proposal disusun.
        </p>
      </div>
    </section>
  );
}