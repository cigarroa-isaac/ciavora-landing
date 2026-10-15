import type { Metadata, Viewport } from "next";
import { Lexend, Fragment_Mono } from "next/font/google";
import "./globals.css";
import LocaleBootstrap from "@/components/LocaleBootstrap";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
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
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
  themeColor: "#12223D",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ciavora",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.png`,
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
    <html lang="es" suppressHydrationWarning className={`${lexend.variable} ${fragmentMono.variable}`}>
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
