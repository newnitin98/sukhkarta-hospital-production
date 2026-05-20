import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import EmergencyBar from "@/components/layout/EmergencyBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaScript from "@/components/ui/SchemaScript";
import { hospitalSchema } from "@/lib/schema";
import { DEFAULT_SEO, SITE_URL } from "@/data/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_SEO.defaultTitle,
    template: "%s | Sukhkarta Hospital",
  },
  description: DEFAULT_SEO.defaultDescription,
  keywords: DEFAULT_SEO.keywords,
  authors: [{ name: "Sukhkarta Hospital" }],
  creator: "Sukhkarta Hospital",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: DEFAULT_SEO.siteName,
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.defaultDescription,
    images: [{ url: DEFAULT_SEO.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_SEO.defaultTitle,
    description: DEFAULT_SEO.defaultDescription,
    images: [DEFAULT_SEO.ogImage],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <head>
        <SchemaScript schema={hospitalSchema()} />
      </head>
      <body>
        <EmergencyBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
