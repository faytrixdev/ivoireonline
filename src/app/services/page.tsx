import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/shared";
import { services, site, coaching, formatPrice } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Service d'achats et d'importation, formations et coaching, idées de business et produits gagnants : les trois services d'Ivoire Online.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Trois façons de faire avancer votre projet<span className="text-clay">.</span>
          </>
        }
        intro="De la commande internationale à la mise en vente, chaque service répond à un problème concret du terrain."
        meta={
          <div className="mt-6">
            <Link href="/contact" className="btn btn-primary !min-h-[48px]">
              Parlons de votre projet <span aria-hidden>↗</span>
            </Link>
          </div>
        }
      />

      <div className="border-b border-ink/10">
        <div className="container-page flex flex-wrap gap-2 py-5">
          {services.map((s) => (
            <a
              key={s.index}
              href={`#${["achats", "formations", "business"][Number(s.index) - 1]}`}
              className="rounded-full border border-ink/15 px-4 py-2 text-[14px] font-medium text-ink/70 transition-colors hover:border-forest hover:text-forest"
            >
              {s.index} · {s.title}
            </a>
          ))}
        </div>
      </div>

      {/* Service detail blocks */}
      {services.map((service, i) => {
        const ids = ["achats", "formations", "business"];
        return (
          <section
            key={service.index}
            id={ids[i]}
            className={`section-pad scroll-mt-24 ${i > 0 ? "border-t border-ink/10" : ""} ${
              i % 2 === 1 ? "bg-ivory-dim/50" : ""
            }`}
          >
            <div className="container-page grid gap-12 md:grid-cols-12">
              <div className={`reveal md:col-span-5 ${i % 2 === 1 ? "md:order-2 md:col-start-8" : ""}`}>
                <div className="media-frame aspect-4/3">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={720}
                    height={540}
                  />
                </div>
                <div className="card-x mt-6 !transform-none p-6">
                  <p className="eyebrow !text-clay">Ce que vous obtenez</p>
                  <ul className="mt-4 space-y-3">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex gap-3 text-[15.5px] leading-relaxed text-ink/75">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest"
                          aria-hidden
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`reveal md:col-span-6 ${i % 2 === 1 ? "md:col-start-1" : "md:col-start-7"}`}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-[44px] leading-none text-clay">
                    {service.index}
                  </span>
                  <span className="h-px flex-1 bg-ink/15" aria-hidden />
                  <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                    {service.kicker}
                  </span>
                </div>
                <h2 className="mt-5 text-[clamp(28px,3.6vw,44px)] leading-[1.08]">
                  {service.title}
                </h2>
                <p className="mt-5 font-display text-[19px] leading-snug text-forest">
                  {service.lead}
                </p>
                <p className="mt-4 text-[16.5px] leading-relaxed text-ink/70">{service.body}</p>
                <p className="mt-4 text-[16.5px] leading-relaxed text-ink/70">{service.extended}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={service.cta.href}
                    {...(service.cta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="btn btn-primary"
                  >
                    {service.cta.label} <span aria-hidden>{service.cta.external ? "↗" : "→"}</span>
                  </Link>
                  <Link href="/contact" className="btn btn-outline">
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Coaching */}
      <section className="dark-section grain section-pad" id="coaching">
        <div className="container-page">
          <SectionHeading
            dark
            eyebrow="Sur mesure"
            title="Coaching personnalisé en présentiel."
            intro="Besoin d'aller plus loin ? Nous vous accompagnons individuellement sur votre propre projet, étape par étape, avec des conseils adaptés à votre budget, vos produits et vos objectifs."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coaching.map((c, i) => (
              <article
                key={c.name}
                className={`reveal card-x card-x-dark flex flex-col p-7 ${
                  c.featured ? "!border-gold/70 bg-gold/10" : ""
                }`}
                style={{ ["--d" as string]: `${i * 0.09}s` }}
              >
                <div className="flex items-baseline justify-between">
                  <span className="eyebrow !text-gold">{c.index}</span>
                  {c.featured && (
                    <span className="rounded-full bg-gold px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider text-forest-deep">
                      Recommandé
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-[25px] text-ivory">{c.name}</h3>
                <p className="mt-1 font-display text-[38px] leading-none text-gold">
                  {c.price} <span className="text-[17px] text-ivory/60">FCFA</span>
                </p>
                <p className="mt-4 text-[15.5px] leading-relaxed text-ivory/70">{c.description}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.features.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] text-ivory/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                {c.note && (
                  <p className="mt-4 text-[13.5px] italic leading-relaxed text-ivory/50">
                    {c.note}
                  </p>
                )}
                <div className="mt-auto pt-7">
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn w-full ${c.featured ? "btn-gold" : "btn-ghost"}`}
                  >
                    Demander des informations <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="reveal mt-10 text-center text-[15px] text-ivory/60">
            Toutes les formations Ivoire Online sont également disponibles en ligne dans{" "}
            <Link href="/formations" className="text-gold underline underline-offset-4">
              l'Academy
            </Link>{" "}
            — à partir de {formatPrice(25000, "F CFA")}.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Une question ?"
            title="Parlons de votre projet."
            intro="Décrivez votre situation en quelques lignes, nous vous orientons vers la solution la plus adaptée."
            cta={{ label: "Nous contacter", href: "/contact" }}
          />
        </div>
      </section>
    </>
  );
}
