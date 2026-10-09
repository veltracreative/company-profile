"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./ui/Reveal";

import villa from "@/public/villa.jpeg";
import umroh from "@/public/umroh.jpeg";

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: StaticImageData;
  url: string;
  description: string;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    title: "Al Barkah Travel",
    category: "Tour & Travel",
    imageUrl: umroh,
    url: "https://umroh.veltra.my.id/",
    description:
      "Website travel umroh dengan tampilan profesional untuk memperkenalkan layanan perjalanan.",
  },
  {
    id: "2",
    title: "Villa Veltra",
    category: "Hospitality",
    imageUrl: villa,
    url: "https://villa.veltra.my.id/",
    description:
      "Website villa yang menonjolkan properti dan memberikan pengalaman digital yang nyaman.",
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-80 w-175 -translate-x-1/2 rounded-full bg-blue-50/80 blur-[100px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Centered heading */}
        <Reveal width="100%">
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
              <Sparkles size={15} className="text-[#FF6B35]" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A2463]">
                Portofolio Kami
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Website yang Membawa
              <span className="mt-2 block text-[#0A2463]">
                Ide Menjadi Nyata.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Setiap bisnis punya cerita. Kami membantu menyampaikannya
              melalui website yang dirancang profesional, modern, dan
              sesuai kebutuhan.
            </p>
          </div>
        </Reveal>

        {/* Centered project grid */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 md:gap-7 lg:gap-10">
          {PORTFOLIO_ITEMS.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 0.12}
              direction="up"
            >
              <article className="group h-full">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Kunjungi website ${item.title}`}
                  className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2463] focus-visible:ring-offset-4"
                >
                  {/* Project image */}
                  <div className="relative aspect-5/4 overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={item.imageUrl}
                      alt={`Website ${item.title}`}
                      fill
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/65 via-transparent to-slate-950/10 opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                    {/* Category */}
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/30 bg-white/90 px-3.5 py-2 text-xs font-semibold text-slate-800 backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    {/* External link icon */}
                    <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0A2463] shadow-sm transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#0A2463] group-hover:text-white">
                      <ArrowUpRight size={19} />
                    </div>

                    {/* Image title */}
                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">
                        Selected Work
                      </p>
                      <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="flex items-start justify-between gap-4 px-1 pt-5">
                    <div className="min-w-0">
                      <p className="text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                        {item.description}
                      </p>
                    </div>

                    <span className="inline-flex shrink-0 items-center gap-1.5 pt-1 text-sm font-semibold text-[#0A2463]">
                      Visit
                      <ExternalLink
                        size={14}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </div>
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Minimal bottom CTA */}
        <Reveal delay={0.15} width="100%">
          <div className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-slate-50/80 px-6 py-7 text-center sm:mt-20 sm:flex-row sm:px-8 sm:text-left">
            <div>
              <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                Siap membuat website untuk bisnis Anda?
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                Mari diskusikan ide Anda bersama tim Veltra Creative.
              </p>
            </div>

            <a
              href="https://wa.me/6285710950704?text=Halo%2C%20saya%20ingin%20membuat%20website%20untuk%20bisnis%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0A2463] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#123783]"
            >
              Diskusikan Proyek
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