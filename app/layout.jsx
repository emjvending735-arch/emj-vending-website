import "./globals.css";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Animate from "@/components/Animate";

const archivo = Archivo({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-archivo" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["500", "600"], variable: "--font-mono" });

export const metadata = {
  title: "EmJ Vending | Free Full-Service Vending — Okaloosa & Santa Rosa Counties, FL",
  description:
    "EmJ Vending places, stocks, and services modern card-reader vending machines in offices, gyms, hotels, and apartments across Okaloosa and Santa Rosa counties — at zero cost to your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${inter.variable} ${mono.variable}`}>
      <body>
        <Animate />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
