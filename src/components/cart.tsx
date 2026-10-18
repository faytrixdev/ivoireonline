"use client";

import { useState } from "react";
import { CartProvider, useCart } from "./cart-context";
import Link from "next/link";
import { formatPrice } from "@/data/site";

function CartButton() {
  const { count, total, lines, remove, clear } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-[14px] font-medium text-ink/75 transition-colors hover:border-forest hover:text-forest"
        aria-label={`Panier, ${count} article${count > 1 ? "s" : ""}`}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
          <path d="M6 7h12l-1 13H7L6 7Z" />
          <path d="M9 7a3 3 0 0 1 6 0" />
        </svg>
        Panier
        {count > 0 && (
          <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-clay px-1 text-[11.5px] font-bold text-white">
            {count}
          </span>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex justify-end bg-ink/45 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Panier"
        >
          <div
            className="flex h-full w-full max-w-[420px] flex-col bg-ivory shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
              <h2 className="font-display text-[22px]">Panier</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-lg"
                aria-label="Fermer le panier"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {lines.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="font-display text-[20px]">Votre panier est vide.</p>
                  <p className="mt-2 text-[15px] text-ink/60">
                    Découvrez les produits et idées de business de la boutique.
                  </p>
                  <Link
                    href="/boutique"
                    onClick={() => setOpen(false)}
                    className="btn btn-primary mt-6"
                  >
                    Explorer la boutique
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {lines.map((l) => (
                    <li key={l.slug} className="flex gap-4 rounded-[16px] border border-ink/10 bg-white p-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={l.image} alt="" className="h-20 w-20 rounded-[10px] object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[15.5px] font-semibold">{l.name}</p>
                        <p className="mt-0.5 text-[13.5px] text-ink/55">Quantité : {l.qty}</p>
                        <p className="mt-1 font-display text-[17px] text-forest">
                          {formatPrice(l.price * l.qty, "F CFA")}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(l.slug)}
                        className="self-start text-[13px] text-ink/45 underline underline-offset-2 transition-colors hover:text-clay"
                      >
                        Retirer
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-ink/10 px-6 py-5">
                <div className="flex items-baseline justify-between">
                  <span className="text-[15px] text-ink/65">Total</span>
                  <span className="font-display text-[28px] text-forest">
                    {formatPrice(total, "F CFA")}
                  </span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary mt-4 w-full"
                >
                  Finaliser avec l'équipe <span aria-hidden>↗</span>
                </Link>
                <p className="mt-3 text-center text-[13px] leading-relaxed text-ink/50">
                  La finalisation passe par l'équipe Ivoire Online (WhatsApp / commande vérifiée).
                </p>
                <button
                  type="button"
                  onClick={clear}
                  className="mt-3 w-full text-center text-[13.5px] text-ink/45 underline underline-offset-2 hover:text-clay"
                >
                  Vider le panier
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export function CartShell({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}

export { CartButton };
