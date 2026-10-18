import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { formatPrice, formations } from "@/data/site";

export function generateStaticParams() {
  return formations.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);
  if (!formation) return { title: "Formation introuvable" };
  return { title: formation.title, description: formation.summary };
}

export default async function FormationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const formation = formations.find((f) => f.slug === slug);
  if (!formation) notFound();

  const others = formations.filter((f) => f.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="dark-section grain relative overflow-hidden pt-[calc(var(--header-height)+56px)] pb-16 md:pb-24">
        <Image
          src={formation.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.14] blur-[2px]"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,41,26,0.85)_0%,rgba(5,41,26,0.95)_100%)]"
          aria-hidden
        />
        <div className="container-page relative">
          <Link href="/formations" className="arrow-link !text-gold hover:!text-gold-bright">
            ← Toute l'Academy
          </Link>
          <div className="mt-8 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">
                {formation.index} — Formation · Aymeric Soro
              </p>
              <h1 className="mt-4 text-balance text-[clamp(36px,5.5vw,64px)] leading-[1.04] text-ivory">
                {formation.title}
              </h1>
              <p className="mt-5 max-w-2xl font-display text-[18.5px] italic leading-relaxed text-gold">
                {formation.summary}
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="rounded-[22px] border border-ivory/15 bg-white/[0.06] p-7 backdrop-blur-sm">
                <p className="text-[13px] uppercase tracking-[0.16em] text-ivory/50">Prix</p>
                <p className="mt-2 font-display text-[42px] leading-none text-gold">
                  {formatPrice(formation.price, formation.currency)}
                </p>
                <dl className="mt-6 space-y-3 border-t border-ivory/15 pt-5 text-[15px]">
                  <div className="flex justify-between">
                    <dt className="text-ivory/60">Formateur</dt>
                    <dd className="text-ivory">Aymeric Soro</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ivory/60">Modules</dt>
                    <dd className="text-ivory">{formation.modules}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-ivory/60">Leçons</dt>
                    <dd className="text-ivory">{formation.lessons}</dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="btn btn-gold mt-6 w-full"
                >
                  Acheter / obtenir cette offre <span aria-hidden>↗</span>
                </Link>
                <p className="mt-3 text-center text-[13px] leading-relaxed text-ivory/50">
                  L'accès est ouvert après un paiement vérifié ou une autorisation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description + programme */}
      <section className="section-pad">
        <div className="container-page grid gap-14 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow">À propos de cette formation</p>
            <div className="mt-5 space-y-5">
              {formation.description.map((p, i) => (
                <p key={i} className="text-[17px] leading-relaxed text-ink/75">
                  {p}
                </p>
              ))}
            </div>

            {formation.chapters && (
              <div className="mt-10">
                <p className="eyebrow">Contenu de la vidéo</p>
                <ol className="mt-5 divide-y divide-ink/10 border-y border-ink/10">
                  {formation.chapters.map((c) => (
                    <li key={c.time} className="flex gap-6 py-3.5">
                      <span className="font-mono text-[14px] text-clay">{c.time}</span>
                      <span className="text-[15.5px] text-ink/75">{c.title}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[22px] border border-ink/10 bg-white">
              <div className="media-frame aspect-16/9 !rounded-none">
                <Image src={formation.image} alt={formation.title} width={640} height={360} />
              </div>
              <div className="p-7">
                <p className="eyebrow">Le programme</p>
                <ol className="mt-5 space-y-5">
                  {formation.program.map((p, i) => (
                    <li key={p.chapter}>
                      <p className="flex items-baseline gap-3 font-semibold text-ink">
                        <span className="font-display text-[17px] text-clay">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {p.chapter}
                      </p>
                      <ul className="mt-2 ml-8 space-y-1.5">
                        {p.lessons.map((lesson) => (
                          <li
                            key={lesson}
                            className="flex items-center gap-2.5 text-[15px] text-ink/65"
                          >
                            <span
                              className="h-1 w-1 rounded-full bg-ink/30"
                              aria-hidden
                            />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other formations */}
      <section className="section-pad border-t border-ink/10 bg-ivory-dim/50">
        <div className="container-page">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Continuer</p>
              <h2 className="mt-3 text-[clamp(26px,3.2vw,38px)]">Autres formations</h2>
            </div>
            <Link href="/formations" className="btn btn-outline">
              Voir tout l'catalogue <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((o, i) => (
              <Link
                key={o.slug}
                href={`/formations/${o.slug}`}
                className="reveal group overflow-hidden rounded-[20px] border border-ink/10 bg-white transition-all hover:-translate-y-1.5"
                style={{ ["--d" as string]: `${i * 0.08}s` }}
              >
                <div className="media-frame aspect-16/10 !rounded-none">
                  <Image src={o.image} alt={o.title} width={520} height={325} />
                </div>
                <div className="flex flex-col gap-2 p-5">
                  <h3 className="text-[19px] leading-snug">{o.title}</h3>
                  <p className="font-display text-[19px] text-forest">
                    {formatPrice(o.price, o.currency)}
                  </p>
                  <span className="arrow-link !text-clay group-hover:!text-forest">
                    Découvrir <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
