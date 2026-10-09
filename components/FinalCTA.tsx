"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  MessageCircle,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const whatsappUrl =
  "https://wa.me/6285710950704?text=Halo%20Veltra%20Creative,%20saya%20ingin%20berkonsultasi%20mengenai%20website%20untuk%20bisnis%20saya%20dan%20mendapatkan%20proposal.";

const benefits = [
  "Konsultasi awal gratis",
  "Solusi sesuai kebutuhan bisnis",
  "Proposal yang transparan",
];

export function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 28 }
          }
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative isolate overflow-hidden rounded-3xl bg-[#091D50] px-6 py-14 text-center shadow-2xl shadow-blue-950/10 sm:px-12 sm:py-16 lg:px-20 lg:py-20"
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-24 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-orange-500/15 blur-[100px]" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(#FFFFFF 0.8px, transparent 0.8px)",
                backgroundSize: "24px 24px",
              }}
            />
          </div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 backdrop-blur-sm"
          >
            <Sparkles size={15} className="text-orange-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
              Mari Mulai Proyek Anda
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mx-auto max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl"
          >
            Punya Ide untuk Bisnis Anda?
            <span className="mt-2 block bg-linear-to-r from-orange-300 via-orange-400 to-amber-200 bg-clip-text text-transparent">
              Mari Wujudkan Bersama.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 16 }
            }
            transition={{ duration: 0.55, delay: 0.22 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg"
          >
            Ceritakan kebutuhan bisnis Anda kepada Veltra Creative.
            Kami akan membantu mengeksplorasi solusi yang tepat dan
            menyiapkan proposal sesuai ruang lingkup proyek Anda.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-4"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2.5 text-sm font-medium text-blue-50/90"
              >
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-emerald-400"
                />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 12 }
            }
            transition={{ duration: 0.55, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF6B35] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F45B28] hover:shadow-xl sm:w-auto sm:px-8 sm:text-base"
            >
              <MessageCircle size={20} />
              Konsultasi & Minta Proposal
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <p className="text-xs leading-6 text-blue-100/50 sm:text-sm">
              Sampaikan ide Anda. Kami bantu diskusikan langkah berikutnya.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}