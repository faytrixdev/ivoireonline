import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared";
import { formatPrice, formations } from "@/data/site";

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Cinq formations pratiques Ivoire Online : e-commerce complet, marketing digital, boutique en ligne, publicité Facebook et importation.",
};

export default function FormationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ivoire Online Academy"
        title={
          <>
            Des formations pour passer de l'idée à&nbsp;l'action<span className="text-clay">.</span>
          </>
        }
        intro="Des programmes pratiques, animés par Aymeric Soro, pour importer, vendre et communiquer en ligne."
        meta={
          <p className="mt-6 text-[15px] text-ink/60">
            {formations.length} formations · inscriptions ouvertes
          </p>
        }
      />

      <section className="section-pad">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2">
            {formations.map((f, i) => (
              <article
                key={f.slug}
                className="reveal card-x group grid overflow-hidden sm:grid-cols-5"
                style={{ ["--d" as string]: `${(i % 2) * 0.09}s` }}
              >
                <div className="media-frame aspect-16/10 !rounded-none sm:col-span-2 sm:aspect-auto sm:!rounded-none">
                  <Image src={f.image} alt={f.title} width={520} height={640} className="h-full" />
                </div>
                <div className="flex flex-col gap-3 p-6 sm:col-span-3 sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow !text-clay">
                      {f.index} — Formation
                    </span>
                    <span className="rounded-full bg-forest/10 px-3 py-1 text-[11.5px] font-semibold text-forest">
                      Inscriptions ouvertes
                    </span>
                  </div>
                  <h2 className="text-[25px] leading-snug">{f.title}</h2>
                  <p className="line-clamp-4 text-[14.5px] leading-relaxed text-ink/65">
                    {f.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-4">
                    <div>
                      <p className="font-display text-[24px] leading-none text-forest">
                        {formatPrice(f.price, f.currency)}
                      </p>
                      <p className="mt-1 text-[13px] text-ink/55">
                        {f.modules} module{f.modules > 1 ? "s" : ""} · {f.lessons} leçon
                        {f.lessons > 1 ? "s" : ""}
                      </p>
                    </div>
                    <Link
                      href={`/formations/${f.slug}`}
                      className="arrow-link"
                    >
                      Découvrir <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="reveal mt-12 rounded-[24px] bg-forest px-7 py-9 text-ivory md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="eyebrow !text-gold">Sur mesure</p>
              <h2 className="mt-3 text-[clamp(24px,3vw,34px)] leading-tight">
                Plus envie d'un accompagnement en présentiel ?
              </h2>
              <p className="mt-2 max-w-xl text-[15.5px] leading-relaxed text-ivory/70">
                Le coaching Ivoire Online se déroule à Abidjan, de la séance découverte au
                Premium avec accompagnement terrain.
              </p>
            </div>
            <div className="mt-6 flex shrink-0 gap-3 md:mt-0">
              <Link href="/services#coaching" className="btn btn-gold">
                Voir le coaching <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
