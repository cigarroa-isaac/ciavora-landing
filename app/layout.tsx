import type { Metadata } from "next";
import { Inter, Syne, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
  title: "Ciavora | Software a medida que acelera tu negocio",
  description:
    "Desarrollo de software personalizado para empresas que necesitan velocidad, calidad y resultados medibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn(inter.variable, syne.variable, "font-sans", geist.variable)}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
