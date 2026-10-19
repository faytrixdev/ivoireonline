import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CartShell } from "@/components/cart";
import { AuthProvider } from "@/components/auth-context";
import { RevealSetup } from "@/components/reveal";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name} · ${site.tagline}`,
    description:
      "Formations e-commerce, achats à l'international et accompagnement business : découvrez l'univers Ivoire Online.",
    url: site.url,
    siteName: site.name,
    locale: "fr_CI",
    type: "website",
    images: [{ url: "/images/social/ivoire-online-business.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.tagline}`,
    description:
      "Formations e-commerce, achats à l'international et accompagnement business : découvrez l'univers Ivoire Online.",
    images: ["/images/social/ivoire-online-business.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    sameAs: site.socials.map((s) => s.href),
  };

  return (
    <html
      lang="fr"
      id="top"
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function fmt(n){return Math.round(n).toLocaleString("fr-FR").replace(/[\\u202f\\u00a0]/g," ")}function start(c){var t=parseInt(c.getAttribute("data-count")||"0",10);c.textContent="0";var begin=performance.now()+650;function tick(now){var p=Math.min(1,Math.max(0,(now-begin)/1400));var e=1-Math.pow(1-p,4);c.textContent=fmt(t*e);if(p<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)}var tries=0;(function find(){var c=document.querySelector("[data-count]");if(c){start(c);return}if(++tries<360)requestAnimationFrame(find)})()})();`,
          }}
        />
        <CartShell>
        <AuthProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-ivory"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <RevealSetup />
        </AuthProvider>
        </CartShell>
      </body>
    </html>
  );
}
