import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OrganizationJsonLd } from "@/components/layout/json-ld";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asdhomecare.com"),
  title: {
    default: "ASD Homecare | Compassionate Home Care in Baltimore, Maryland",
    template: "%s | ASD Homecare",
  },
  description:
    "ASD Homecare provides compassionate nursing, personal care, companion care, rehabilitation, dementia support, and home assistance for individuals and families in the Baltimore area.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ASD Homecare",
    title: "ASD Homecare | Compassionate Home Care in Baltimore, Maryland",
    description:
      "ASD Homecare provides compassionate nursing, personal care, companion care, rehabilitation, dementia support, and home assistance for individuals and families in the Baltimore area.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASD Homecare | Compassionate Home Care in Baltimore, Maryland",
    description:
      "Compassionate nursing, personal care, companion care, rehabilitation, dementia support, and home assistance in the Baltimore area.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
