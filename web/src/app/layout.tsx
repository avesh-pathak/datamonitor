import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "devicon/devicon.min.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  generator: "Next.js",
  keywords: [...site.keywords],
  authors: [{ name: site.author.name, url: site.author.portfolio }],
  creator: site.author.name,
  publisher: site.author.name,
  category: "technology",
  classification: "Network monitoring software",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    "msapplication-TileColor": "#2888ed",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="min-h-screen bg-background">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange storageKey="dm-theme">
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2.5 focus:text-[13px] focus:font-medium focus:text-ink focus:shadow-lg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
