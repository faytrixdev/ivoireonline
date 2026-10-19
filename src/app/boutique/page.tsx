import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared";
import { formatPrice, products } from "@/data/site";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Boutique Ivoire Online : produits et idées de business prêts à revendre, avec calcul de marge et méthode de démarrage.",
};

export default function BoutiquePage() {
  return (
    <>
      <PageHero
        eyebrow="Boutique"
        title={
          <>
            Des idées de business prêtes à vendre<span className="text-clay">.</span>
          </>
        }
        intro="Chaque produit est présenté comme une idée concrète : prix d'achat, marge possible et étapes pour démarrer."
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <article
                key={p.slug}
                className="reveal card-x group flex flex-col overflow-hidden"
                style={{ ["--d" as string]: `${(i % 3) * 0.08}s` }}
              >
                <div className="media-frame aspect-4/3 !rounded-none">
                  <Image src={p.image} alt={p.name} width={640} height={480} />
                  <span className="absolute left-4 top-4 rounded-full bg-forest px-3.5 py-1.5 text-[12px] font-semibold text-ivory">
                    {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h2 className="text-[23px] leading-snug">{p.name}</h2>
                  <p className="line-clamp-3 text-[14.5px] leading-relaxed text-ink/65">
                    {p.summary}
                  </p>
                  <div className="mt-auto flex items-end justify-between pt-4">
                    <div>
                      <p className="font-display text-[26px] leading-none text-forest">
                        {formatPrice(p.price, p.currency)}
                      </p>
                      {p.oldPrice && (
                        <p className="mt-1 text-[14px] text-ink/40 line-through">
                          {formatPrice(p.oldPrice, p.currency)}
                        </p>
                      )}
                    </div>
                    <Link href={`/boutique/produit/${p.slug}`} className="arrow-link !text-clay group-hover:!text-forest">
                      Voir le produit <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}

            {/* Empty-state card encouraging contact for more ideas */}
            <article
              className="reveal flex flex-col justify-between rounded-[24px] border border-dashed border-ink/20 bg-ivory-dim/50 p-7"
              style={{ ["--d" as string]: "0.16s" }}
            >
              <div>
                <p className="eyebrow">Plus de produits</p>
                <h2 className="mt-4 font-display text-[26px] leading-snug">
                  D'autres idées de business arrivent.
                </h2>
                <p className="mt-3 text-[15.5px] leading-relaxed text-ink/65">
                  Nous ajoutons régulièrement des produits gagnants, sélectionnés pour leur marge
                  et leur potentiel de vente. Dites-nous votre budget, nous vous orientons.
                </p>
              </div>
              <div className="mt-7">
                <Link href="/contact" className="btn btn-outline w-full">
                  Demander une idée de business <span aria-hidden>↗</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
