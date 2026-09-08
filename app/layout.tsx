import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans, Fragment_Mono } from "next/font/google";
import "./globals.css";
import LocaleBootstrap from "@/components/LocaleBootstrap";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-instrument",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

const SITE_URL = "https://ciavora.com";
const TITLE = "Desarrollo de software a medida en Monterrey | Ciavora";
const DESCRIPTION =
  "Construimos el sistema exacto que tu negocio necesita: salud, automotriz y servicios B2B. De idea a producción en semanas. Monterrey, México.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Ciavora",
    locale: "es_MX",
    title: "Ciavora — Tu operación en digital. En semanas, no años.",
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Ciavora — Desarrollo de software a medida en Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ciavora — Tu operación en digital. En semanas, no años.",
    description: DESCRIPTION,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F3EC",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ciavora",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og.png`,
    description: DESCRIPTION,
    serviceType: "Desarrollo de software a medida",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
    },
    areaServed: {
      "@type": "Country",
      name: "México",
    },
    knowsAbout: [
      "Desarrollo de software a medida",
      "Sistemas para salud",
      "Software automotriz",
      "Automatización de servicios B2B",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ciavora",
    url: SITE_URL,
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${fraunces.variable} ${instrument.variable} ${fragmentMono.variable}`}>
      <head>
        <LocaleBootstrap />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
