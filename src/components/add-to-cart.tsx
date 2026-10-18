"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart-context";

export function AddToCart({
  product,
}: {
  product: { slug: string; name: string; price: number; image: string };
}) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="mt-8">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center rounded-full border border-ink/15 bg-white">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-12 w-12 items-center justify-center text-lg text-ink/70 transition-colors hover:text-forest"
            aria-label="Diminuer la quantité"
          >
            −
          </button>
          <span className="min-w-10 text-center text-[16px] font-semibold tabular-nums" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className="flex h-12 w-12 items-center justify-center text-lg text-ink/70 transition-colors hover:text-forest"
            aria-label="Augmenter la quantité"
          >
            +
          </button>
        </div>

        <button
          type="button"
          onClick={() => {
            add(product, qty);
            setAdded(true);
            setTimeout(() => setAdded(false), 2600);
          }}
          className="btn btn-primary flex-1 sm:flex-none"
        >
          {added ? "Ajouté au panier ✓" : "Ajouter au panier"}
        </button>

        <Link href="/contact" className="btn btn-outline !min-h-[52px]">
          Commander via l'équipe <span aria-hidden>↗</span>
        </Link>
      </div>

      {added && (
        <p role="status" className="mt-3 text-[14.5px] text-forest">
          Article ajouté. Ouvrez le panier depuis le menu en haut à droite, ou finalisez avec
          l'équipe.
        </p>
      )}
    </div>
  );
}
