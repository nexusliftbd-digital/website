import type { Metadata, Viewport } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import MetaPixel from "@/components/marketing/MetaPixel";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-hind",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B1733",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Nexus Lift — AI-Powered Business Growth Infrastructure Platform",
  description: "Build your business on systems, not only effort. Corporate Business Profiles, F-Commerce OS & AI Automation for Bangladeshi Entrepreneurs. Starter ৳999 · Growth ৳1,499.",
  metadataBase: new URL("https://nexuslift.info"),
  alternates: {
    canonical: "https://nexuslift.info",
  },
  openGraph: {
    type: "website",
    url: "https://nexuslift.info/",
    title: "Nexus Lift — Business Growth Infrastructure Platform",
    description: "Business Profile, SOP Systems & AI Infrastructure. Delivered in 48-72 Hours.",
    siteName: "Nexus Lift",
    locale: "bn_BD",
    images: [{
      url: "/assets/brand/nexus-lift-og-card.png",
      width: 1200,
      height: 630,
      alt: "Nexus Lift Previews",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Lift — Business Growth Infrastructure",
    description: "Business Profile, SOP Systems & AI Infrastructure. Delivered in 48-72 Hours.",
    images: ["/assets/brand/nexus-lift-og-card.png"],
  },
  icons: {
    icon: "/assets/brand/nexus-lift-icon.svg",
    apple: "/assets/brand/nexus-lift-icon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-[#101828] bg-white min-h-screen flex flex-col">
        <MetaPixel />
        {children}
      </body>
    </html>
  );
}
