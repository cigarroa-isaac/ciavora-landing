import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import LocaleBootstrap from "@/components/LocaleBootstrap";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title:
    "Ciavora | Software a medida que acelera tu negocio · Custom software that accelerates your business",
  description:
    "Desarrollo de software personalizado para empresas que necesitan velocidad, calidad y resultados medibles. Custom software development for businesses that need speed, quality, and measurable results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${inter.variable} ${syne.variable}`}>
      <head>
        <LocaleBootstrap />
      </head>
      <body className="font-sans">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
