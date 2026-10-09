import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veltra.my.id"),
  title:
    "Jasa Website Custom & Web Application untuk Bisnis | Veltra Creative",
  description:
    "Veltra Creative membantu UMKM, startup, dan perusahaan membangun website bisnis, company profile, landing page, serta web application custom sesuai kebutuhan operasional.",
  keywords: [
    "jasa pembuatan website custom Indonesia",
    "jasa web application custom",
    "jasa pembuatan website UMKM",
    "jasa website company profile perusahaan",
    "jasa landing page bisnis",
    "jasa pengembangan sistem berbasis web",
    "jasa pembuatan dashboard bisnis",
    "jasa integrasi API website",
    "software house pengembangan web Indonesia",
    "jasa digitalisasi proses bisnis",
    "custom web development Indonesia",
    "jasa website untuk bisnis travel",
    "jasa website booking villa",
    "jasa pembuatan website Jakarta",
    "jasa pembuatan website profesional untuk bisnis",
    "jasa redesign website perusahaan",
    "jasa pembuatan website katalog produk",
    "jasa pembuatan website pemesanan online",
    "jasa pembuatan website booking online",
    "jasa pembuatan website reservasi",
    "jasa pembuatan website membership",
    "jasa pembuatan website portal perusahaan",
    "jasa pembuatan website multi vendor",
    "jasa pembuatan website marketplace",
    "jasa pembuatan website ecommerce custom",
    "jasa pembuatan website B2B",
    "jasa pembuatan website untuk startup",
    "jasa migrasi website ke teknologi modern",
    "jasa maintenance website bisnis",
    "jasa pembuatan sistem manajemen bisnis",
    "jasa pembuatan aplikasi internal perusahaan",
    "jasa pembuatan sistem manajemen pesanan",
    "jasa pembuatan sistem inventori berbasis web",
    "jasa pembuatan sistem manajemen stok",
    "jasa pembuatan sistem CRM custom",
    "jasa pembuatan sistem ERP custom",
    "jasa pembuatan sistem laporan keuangan",
    "jasa pembuatan admin dashboard custom",
    "jasa pembuatan dashboard analytics",
    "jasa otomatisasi workflow bisnis",
    "jasa integrasi payment gateway Indonesia",
    "jasa integrasi WhatsApp API bisnis",
    "jasa integrasi sistem antar aplikasi",
    "jasa pengembangan REST API",
    "jasa pengembangan backend aplikasi",
    "jasa website perusahaan konstruksi",
    "jasa website perusahaan properti",
    "jasa website hotel dan penginapan",
    "jasa website rental villa",
    "jasa website travel umroh",
    "jasa website agen perjalanan",
    "jasa website catering dan katering",
    "jasa website restoran dan cafe",
    "jasa website bakery dan toko kue",
    "jasa website fashion brand lokal",
    "jasa website untuk distributor",
    "jasa website supplier dan grosir",
    "jasa website klinik dan layanan kesehatan",
    "jasa website konsultan profesional",
    "jasa website untuk lembaga pendidikan",
    "jasa pengembangan aplikasi Next.js",
    "jasa pengembangan aplikasi Golang",
    "jasa pengembangan backend Golang",
    "jasa pembuatan aplikasi web modern",
    "jasa pengembangan aplikasi berbasis cloud",
    "jasa pengembangan microservices",
    "jasa integrasi database PostgreSQL",
    "jasa pengembangan aplikasi SaaS",
    "jasa pembuatan MVP startup",
    "jasa pengembangan produk digital",

    "jasa web developer Jakarta",
    "jasa software house Jakarta",
    "jasa pembuatan web perusahaan Jakarta",
    "jasa pembuatan website bisnis Jakarta",
    "jasa web developer Indonesia",
    "jasa software house Indonesia",
    "jasa pembuatan website Tangerang",
    "jasa pembuatan website Bekasi",
    "jasa pembuatan website Bandung",
    "jasa pembuatan website Surabaya",

    "custom website development company Indonesia",
    "custom web application development Indonesia",
    "Indonesia web development agency",
    "business website developer Indonesia",
    "custom software development company Indonesia",
    "MVP development for startups Indonesia",
    "Next.js development agency Indonesia",
    "Golang backend development services",
    "B2B web application development",
    "business process automation developer"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    siteName: "Veltra Creative",
    title:
      "Veltra Creative | Website Custom & Solusi Web untuk Bisnis",
    description:
      "Bangun website bisnis, company profile, landing page, dan aplikasi web custom bersama Veltra Creative. Solusi digital disesuaikan dengan kebutuhan bisnis Anda.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Veltra Creative - Website Custom dan Web Application",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Veltra Creative | Website Custom untuk Bisnis",
    description:
      "Website profesional dan web application custom untuk mendukung operasional dan pertumbuhan bisnis.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
