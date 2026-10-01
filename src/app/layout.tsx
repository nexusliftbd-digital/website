import type { Metadata, Viewport } from "next";
import { Inter, Hind_Siliguri } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import MetaPixel from "@/components/marketing/MetaPixel";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SocialProofToast from "@/components/ui/SocialProofToast";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://nexuslift.info/#organization",
        "name": "Nexus Lift",
        "url": "https://nexuslift.info",
        "logo": "https://nexuslift.info/assets/brand/nexus-lift-og-card.png",
        "description": "AI-Powered Business Growth Infrastructure Platform for Bangladeshi Entrepreneurs.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+8801814716713",
          "contactType": "customer service",
          "availableLanguage": ["Bengali", "English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://nexuslift.info/#website",
        "url": "https://nexuslift.info",
        "name": "Nexus Lift",
        "publisher": {
          "@id": "https://nexuslift.info/#organization"
        },
        "inLanguage": "bn-BD"
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://nexuslift.info/#service",
        "name": "Nexus Lift Business Solutions",
        "url": "https://nexuslift.info",
        "priceRange": "৳999 - ৳4999",
        "areaServed": "Bangladesh",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Business Infrastructure Systems",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Business Profile & Identity"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "F-Commerce & E-Commerce Operating System (OS)"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI Business Diagnostics & Automated Management SOPs"
              }
            }
          ]
        }
      }
    ]
  };

  return (
    <html lang="bn" className={`${inter.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-[#101828] bg-white min-h-screen flex flex-col">
        <GoogleTagManager gtmId="GTM-XXXXXXX" />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        <MetaPixel />
        {children}
        <FloatingWhatsApp />
        <SocialProofToast />
        <MobileStickyBar />
      </body>
    </html>
  );
}
