"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Plus,
  MessageCircle,
  Sparkles,
  ArrowUpRight,
  Minus,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Berapa lama pengerjaan website?",
    answer:
      "Durasi pengerjaan bergantung pada jenis website, kompleksitas fitur, dan kesiapan materi. Landing page sederhana umumnya membutuhkan beberapa hari kerja, sedangkan website multi-halaman atau aplikasi custom membutuhkan waktu lebih lama. Timeline akan kami jelaskan dalam proposal.",
  },
  {
    question: "Bagaimana cara mendapatkan penawaran harga?",
    answer:
      "Ceritakan kebutuhan dan tujuan bisnis Anda kepada kami. Setelah memahami ruang lingkup proyek, fitur, dan timeline yang diinginkan, kami akan menyusun proposal yang mencakup rekomendasi solusi, estimasi biaya, serta tahapan pengerjaan.",
  },
  {
    question: "Apakah ada biaya bulanan?",
    answer:
      "Tidak selalu. Biaya bergantung pada kebutuhan proyek. Domain, hosting, layanan pihak ketiga, atau maintenance dapat memiliki biaya terpisah. Semua komponen biaya yang relevan akan dijelaskan sebelum proyek dimulai.",
  },
  {
    question: "Saya tidak mengerti teknologi. Apakah akan dibantu?",
    answer:
      "Tentu. Kami akan membantu menjelaskan proses dengan bahasa yang mudah dipahami. Jika diperlukan, kami juga dapat memberikan panduan penggunaan atau sesi serah terima agar Anda lebih nyaman mengelola website.",
  },
  {
    question: "Apakah website bisa dibuka melalui HP?",
    answer:
      "Ya. Website dirancang responsif agar tampil dan berfungsi dengan baik di smartphone, tablet, dan desktop. Detail optimasi performa akan disesuaikan dengan kebutuhan dan karakteristik proyek.",
  },
  {
    question: "Apakah saya harus menyiapkan desain sendiri?",
    answer:
      "Tidak. Anda dapat memberikan referensi visual, logo, dan identitas brand jika tersedia. Kami dapat membantu merancang tampilan website sesuai tujuan bisnis, karakter brand, dan kebutuhan pengguna.",
  },
  {
    question: "Apakah domain dan hosting sudah termasuk?",
    answer:
      "Tergantung ruang lingkup proyek yang disepakati. Kami dapat membantu menentukan domain dan hosting yang sesuai, melakukan konfigurasi, atau membantu pengelolaannya. Biaya dan masa berlaku akan dicantumkan secara jelas dalam proposal.",
  },
  {
    question: "Bagaimana jika saya ingin mengubah desain atau fitur?",
    answer:
      "Kami mendiskusikan kebutuhan dan ruang lingkup di awal agar ekspektasi jelas. Revisi dalam lingkup yang disepakati mengikuti ketentuan proposal. Penambahan fitur atau perubahan besar dapat memerlukan penyesuaian biaya dan timeline.",
  },
  {
    question: "Apakah website bisa dikembangkan lagi nanti?",
    answer:
      "Bisa. Kami mempertimbangkan kebutuhan pengembangan saat merancang solusi. Fitur tambahan, integrasi, dashboard, maupun pengembangan menjadi aplikasi web dapat didiskusikan sesuai arsitektur dan kondisi proyek.",
  },
  {
    question: "Apakah website saya bisa muncul di Google?",
    answer:
      "Kami dapat menerapkan fondasi SEO teknis seperti struktur halaman, metadata, dan optimasi dasar sesuai lingkup proyek. Peringkat Google juga dipengaruhi persaingan, kualitas konten, otoritas website, dan faktor lainnya, sehingga posisi tertentu tidak dapat dijamin.",
  },
  {
    question: "Apakah tersedia maintenance setelah website selesai?",
    answer:
      "Dukungan setelah peluncuran dapat disesuaikan dengan kebutuhan Anda. Kami dapat mendiskusikan perbaikan bug, pembaruan konten, pemeliharaan teknis, dan pengembangan lanjutan. Cakupan serta durasinya akan dijelaskan dalam proposal.",
  },
  {
    question: "Bagaimana proses pembayaran proyek?",
    answer:
      "Skema pembayaran dibahas sebelum pengerjaan dimulai dan dicantumkan dalam proposal. Untuk proyek tertentu, pembayaran dapat dibagi berdasarkan tahapan atau milestone agar progres dan kewajiban setiap pihak lebih jelas.",
  },
  {
    question: "Apakah saya memiliki website yang sudah dibuat?",
    answer:
      "Kepemilikan hasil kerja, source code, akses hosting, domain, serta lisensi komponen pihak ketiga akan mengikuti kesepakatan tertulis dalam proposal atau kontrak. Kami akan memperjelas ketentuan tersebut sebelum proyek dimulai.",
  },
  {
    question: "Apakah Veltra Creative menerima custom web application?",
    answer:
      "Ya. Selain website company profile dan landing page, kami dapat mendiskusikan aplikasi web khusus seperti dashboard admin, sistem internal, integrasi API, dan alur bisnis custom. Solusi akan dirancang berdasarkan kebutuhan serta kelayakan teknis.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FAFBFF] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-blue-100/50 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-20 h-72 w-72 rounded-full bg-orange-100/40 blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={15} className="text-[#FF6B35]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A2463]">
                FAQ
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Ada yang Ingin
              <span className="mt-2 block text-[#0A2463]">
                Anda Tanyakan?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Temukan jawaban seputar proses pembuatan website, biaya,
              hingga dukungan setelah peluncuran.
            </p>
          </div>
        </Reveal>

        {/* FAQ accordion */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <Reveal key={item.question} delay={(index % 2) * 0.08}>
                <motion.div
                  layout
                  className={`h-fit overflow-hidden rounded-2xl border bg-white transition-colors duration-300 ${isOpen
                    ? "border-[#0A2463]/20 shadow-lg shadow-blue-950/4"
                    : "border-slate-200/80 shadow-sm hover:border-slate-300"
                    }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <span
                      className={`text-sm font-semibold leading-6 transition-colors sm:text-base ${isOpen ? "text-[#0A2463]" : "text-slate-800"
                        }`}
                    >
                      {item.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen
                        ? "rotate-180 bg-[#0A2463] text-white"
                        : "bg-slate-100 text-slate-500"
                        }`}
                    >
                      {isOpen ? (
                        <Minus size={17} />
                      ) : (
                        <Plus size={17} />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mx-5 border-t border-slate-100 sm:mx-6" />
                        <p className="px-5 pb-6 pt-4 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-[15px]">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        {/* Contact CTA */}
        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:mt-16 sm:flex-row sm:p-8 lg:px-10">
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-[#FF6B35] sm:flex">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                  Masih punya pertanyaan?
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                  Ceritakan kebutuhan bisnis Anda. Kami siap membantu
                  mendiskusikan solusi dan menyiapkan proposal yang sesuai.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/6285710950704?text=${encodeURIComponent(
                "Halo Veltra Creative, saya ingin bertanya tentang layanan pembuatan website dan konsultasi kebutuhan bisnis."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0A2463] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#123783] sm:w-auto"
            >
              <MessageCircle size={17} />
              Hubungi Kami
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};