import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Ciavora — Software a medida, en semanas",
  description:
    "Desarrollo de software personalizado para empresas que necesitan velocidad, calidad y resultados medibles. Monterrey, México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${fraunces.variable} ${instrument.variable} ${fragmentMono.variable}`}>
      <head>
        <LocaleBootstrap />
      </head>
      <body className="font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
