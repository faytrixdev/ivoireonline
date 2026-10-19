"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/site";
import { CartButton } from "@/components/cart";
import { BrandLogo } from "@/components/brand-logo";
import { useAuth } from "@/components/auth-context";

export function SiteHeader() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink/10 bg-ivory/95 shadow-[0_8px_30px_-18px_rgb(19_28_23/0.35)] backdrop-blur-lg"
            : "border-b border-ink/5 bg-ivory/88 backdrop-blur-xl"
        }`}
      >
      <div
        className={`container-page flex items-center justify-between gap-6 transition-all duration-300 ${
          scrolled ? "h-[64px]" : "h-[var(--header-height)]"
        }`}
      >
        <BrandLogo priority className="h-[34px]" />

        <nav aria-label="Navigation principale" className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors ${
                  active
                    ? "bg-forest text-ivory"
                    : "text-ink/70 hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-2.5 lg:flex">
          {user ? (
            <Link
              href="/compte"
              className="whitespace-nowrap px-2 text-[14px] font-medium text-ink/70 transition-colors hover:text-forest xl:block"
            >
              Mon compte
            </Link>
          ) : (
            <Link
              href="/auth/connexion"
              className="hidden whitespace-nowrap px-2 text-[14px] font-medium text-ink/70 transition-colors hover:text-forest xl:block"
            >
              Se connecter
            </Link>
          )}
          <CartButton />
          <Link
            href="/contact"
            className="btn btn-primary !min-h-[44px] !px-5 !text-[13.5px]"
          >
            Parlons-en <span aria-hidden>↗</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-full bg-ink transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-full bg-ink transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>
      </header>

      {/* Mobile overlay — outside <header>: backdrop-filter on the header
          would otherwise make it the containing block for this fixed panel. */}
      <div
        id="mobile-navigation"
        hidden={!open}
        className="menu-in fixed inset-x-0 bottom-0 top-[var(--header-height)] z-40 overflow-y-auto overscroll-contain bg-ivory lg:hidden"
      >
        <nav aria-label="Navigation mobile" className="container-page py-8">
          <ul>
            {navigation.map((item, i) => (
              <li
                key={item.href}
                style={{ animationDelay: `${0.06 + i * 0.05}s` }}
                className="border-b border-ink/10"
              >
                <Link
                  href={item.href}
                  className="flex items-baseline justify-between py-5"
                >
                  <span className="font-display text-[30px] text-ink">{item.label}</span>
                  <span className="eyebrow text-ink/40">{item.index}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            {user ? (
              <>
                <Link href="/compte" className="btn btn-primary w-full">
                  Mon compte
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="btn btn-outline w-full"
                >
                  Se déconnecter
                </button>
              </>
            ) : (
              <>
                <Link href="/auth/connexion" className="btn btn-outline w-full">
                  Se connecter
                </Link>
                <Link href="/auth/inscription" className="btn btn-primary w-full">
                  Créer un compte
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
