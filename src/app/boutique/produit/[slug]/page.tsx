import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPrice, products } from "@/data/site";
import { AddToCart } from "@/components/add-to-cart";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Produit introuvable" };
  return { title: product.name, description: product.summary };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== slug);

  return (
    <>
      <section className="border-b border-ink/10 bg-ivory-dim/40 pt-[calc(var(--header-height)+40px)]">
        <div className="container-page py-6">
          <Link href="/boutique" className="arrow-link">
            ← Boutique
          </Link>
        </div>
      </section>

      <section className="pb-20 pt-10 md:pb-28">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-6 lg:col-span-7">
            <div className="media-frame aspect-4/3">
              <Image
                src={product.image}
                alt={product.name}
                width={1200}
                height={900}
                priority
              />
            </div>
          </div>

          <div className="md:col-span-6 lg:col-span-5 lg:col-start-8">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-forest/10 px-3.5 py-1.5 text-[12.5px] font-semibold text-forest">
                {product.status}
              </span>
              <span className="text-[13.5px] text-ink/55">{product.stock} disponibles</span>
            </div>

            <h1 className="mt-4 text-[clamp(30px,4vw,46px)] leading-[1.08]">{product.name}</h1>

            <div className="mt-5 flex items-baseline gap-4">
              <span className="font-display text-[40px] leading-none text-forest">
                {formatPrice(product.price, product.currency)}
              </span>
              {product.oldPrice && (
                <span className="text-[18px] text-ink/40 line-through">
                  {formatPrice(product.oldPrice, product.currency)}
                </span>
              )}
            </div>

            <p className="mt-2 text-[15.5px] text-ink/55">
              Lot de 10 unités · soit environ{" "}
              {formatPrice(Math.round(product.price / 10), product.currency)} la pièce
            </p>

            <p className="mt-6 text-[16.5px] leading-relaxed text-ink/70">{product.lead}</p>

            <AddToCart
              product={{
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
              }}
            />

            <div className="mt-6 rounded-[18px] border border-ink/10 bg-white p-5">
              <p className="eyebrow !text-clay">Revente indicative</p>
              <p className="mt-2 text-[16px] leading-relaxed text-ink/70">
                Revente entre <strong>5 000 et 10 000 F CFA</strong> l'unité. Vous réinvestissez vos
                bénéfices pour commander un lot plus grand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full description */}
      <section className="section-pad border-t border-ink/10">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <p className="eyebrow">Description complète</p>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-[clamp(24px,3vw,34px)] leading-snug">
              {product.sections[0]?.title || product.lead}
            </h2>
            <div className="mt-7 space-y-8">
              {product.sections.slice(product.sections[0]?.title ? 0 : 1).map((section, i) => (
                <div key={i}>
                  {section.title && (
                    <h3 className="font-sans text-[17.5px] font-bold text-ink">{section.title}</h3>
                  )}
                  {section.text && (
                    <div className="mt-3 space-y-4 text-[16.5px] leading-relaxed text-ink/75">
                      {section.text.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  )}
                  {section.items && (
                    <ul className="mt-3 space-y-3">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3 text-[16.5px] leading-relaxed text-ink/75">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="section-pad border-t border-ink/10 bg-ivory-dim/50">
          <div className="container-page">
            <div className="reveal flex flex-wrap items-end justify-between gap-6">
              <h2 className="text-[clamp(24px,3vw,34px)]">Autres produits</h2>
              <Link href="/boutique" className="btn btn-outline">
                Toute la boutique <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/boutique/produit/${o.slug}`}
                  className="overflow-hidden rounded-[20px] border border-ink/10 bg-white transition-all hover:-translate-y-1.5"
                >
                  <div className="media-frame aspect-16/10 !rounded-none">
                    <Image src={o.image} alt={o.name} width={520} height={325} />
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <h3 className="text-[19px]">{o.name}</h3>
                    <p className="font-display text-[19px] text-forest">
                      {formatPrice(o.price, o.currency)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
