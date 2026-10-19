import Link from "next/link";
import { navigation, site } from "@/data/site";
import { BrandLogo } from "@/components/brand-logo";

const socialPaths: Record<string, React.ReactNode> = {
  TikTok: (
    <path d="M14 3v12a4 4 0 1 1-4-4M14 3c0 4 3 6 6 6" />
  ),
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
    </>
  ),
  LinkedIn: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7M7 7h.01M11 17v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  Facebook: (
    <path
      fill="currentColor"
      stroke="none"
      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.095 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.97H15.83c-1.49 0-1.955.931-1.955 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.095 24 18.1 24 12.073Z"
    />
  ),
  YouTube: (
    <>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3Z" fill="currentColor" />
    </>
  ),
};

export function SiteFooter() {
  return (
    <footer className="dark-section grain">
      <div className="h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" aria-hidden />
      <div className="container-page">
        <div className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-5">
            <BrandLogo className="h-10 [filter:brightness(0)_invert(1)]" />
            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-ivory/60">
              {site.description}
            </p>
            <p className="mt-6 font-display text-[19px] italic text-gold">{site.tagline}</p>
          </div>

          <nav aria-label="Navigation de pied de page" className="md:col-span-4 md:col-start-7">
            <h2 className="eyebrow !text-gold">Explorer</h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-[15.5px] text-ivory/75 transition-all duration-300 hover:translate-x-1 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <h2 className="eyebrow !text-gold">Contact</h2>
            <Link href="/contact" className="arrow-link mt-5 !text-ivory hover:!text-gold">
              Nous contacter <span aria-hidden>↗</span>
            </Link>
            <ul className="mt-8 space-y-3">
              {site.socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 text-[15px] text-ivory/75 transition-colors hover:text-gold"
                  >
                    <svg
                      aria-hidden="true"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      {socialPaths[s.name]}
                    </svg>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-ivory/15 py-8 text-[14px] text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Ivoire Online</p>
          <div className="flex items-center gap-6">
            <Link href="/auth/connexion" className="transition-colors hover:text-gold">
              Mon espace
            </Link>
            <a href="#top" className="transition-colors hover:text-gold">
              Retour en haut ↑
            </a>
          </div>
          <p className="flex items-center gap-2">
            Powered by
            <a
              href="https://www.bloop-ci.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <img
                src="/images/partners/bloop.webp"
                alt=""
                width={22}
                height={22}
                className="rounded-full"
              />
              Bloop
            </a>
            <span className="text-ivory/40">· Créé par Kevin Yeo</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
