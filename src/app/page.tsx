import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/shared";
import { HeroMotion } from "@/components/hero-motion";
import {
  coaching,
  formatPrice,
  formations,
  historicalStats,
  partners,
  products,
  services,
  site,
  stats,
  testimonialSingle,
  testimonials,
  universes,
} from "@/data/site";

const tickerWords = ["Marketing", "Stratégie", "Excellence", "Importation", "E-commerce"];

function Hero() {
  return (
    <section
      data-hero
      className="relative min-h-[92svh] overflow-hidden bg-forest-deep pt-[var(--header-height)] text-ivory"
    >
      <HeroMotion />

      <div data-parallax="-70" className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero/port-plate.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
      </div>
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,61,13,0.55)_0%,rgba(4,61,13,0.28)_45%,rgba(4,61,13,0.92)_100%)]"
        aria-hidden
      />

      <div
        data-parallax="-170"
        className="pointer-events-none absolute inset-0 will-change-transform"
      >
        <div className="absolute left-0 right-0 top-1/2 mx-auto w-[88%] max-w-none -translate-y-1/2 sm:left-auto sm:right-[1%] sm:top-[13%] sm:mx-0 sm:w-[68%] sm:max-w-[940px] sm:translate-y-0 md:top-[11%]">
          <div className="hero-halo absolute -inset-14 sm:-inset-20" aria-hidden />
          <div className="hero-plane-anim relative">
            <div className="hero-plane-float">
              <Image
                src="/images/hero/cargo-aircraft.webp"
                alt=""
                width={760}
                height={420}
                priority
                className="w-full opacity-[0.82] drop-shadow-2xl sm:opacity-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-page relative z-[2] flex min-h-[calc(92svh-var(--header-height))] flex-col justify-between pb-14 pt-6 sm:pt-14">
        <div className="mx-auto max-w-[860px] text-center sm:mx-0 sm:text-left">
          <h1 className="hero-sweep font-display text-[clamp(56px,11vw,132px)] font-normal leading-[0.94] tracking-[-0.03em]">
            <span className="hero-line-mask">
              <span>Ivoire</span>
            </span>
            <span className="hero-line-mask">
              <span>
                Online<span className="text-gold">.</span>
              </span>
            </span>
          </h1>

          <ul className="mt-8 space-y-1.5 text-[clamp(17px,2.2vw,23px)] text-ivory/75 [text-shadow:0_1px_10px_rgba(4,61,13,0.9)] sm:[text-shadow:none]">
            <li className="hero-fade font-display italic" style={{ animationDelay: "0.62s" }}>
              Vos achats à l'international, en toute simplicité.
            </li>
            <li
              className="hero-fade hidden font-display italic sm:block"
              style={{ animationDelay: "0.74s" }}
            >
              Votre académie de formation e-commerce.
            </li>
            <li
              className="hero-fade hidden font-display italic md:block"
              style={{ animationDelay: "0.86s" }}
            >
              Des idées de business conçues pour vous.
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
            <Link
              href="/formations"
              className="btn btn-gold hero-fade"
              style={{ animationDelay: "0.96s" }}
            >
              Découvrir les formations <span aria-hidden>↗</span>
            </Link>
            <Link
              href="/services"
              className="btn btn-ghost hero-fade"
              style={{ animationDelay: "1.06s" }}
            >
              Nos services
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-center gap-8 sm:justify-between">
          <div className="hero-fade flex items-center justify-center gap-5" style={{ animationDelay: "1.16s" }}>
            <Image
              src="/images/official/fondateur-bureau.jpg"
              alt="Aymeric Soro, fondateur d'Ivoire Online"
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover ring-2 ring-gold/60"
            />
            <div>
              <p className="font-display text-[30px] leading-none text-gold">
                <span data-count="3500" suppressHydrationWarning>
                  3 500
                </span>
                +
              </p>
              <p className="mt-1 text-[14px] text-ivory/65">clients accompagnés</p>
            </div>
          </div>

          <div
            aria-label={tickerWords.join(" · ")}
            className="hero-ticker hero-fade max-w-full overflow-hidden whitespace-nowrap"
            style={{ animationDelay: "1.26s" }}
          >
            <div className="ticker-track">
              <span className="pr-10 text-[12px] font-semibold uppercase tracking-[0.22em] text-ivory/40">
                {tickerWords.join(" · ")}
              </span>
              <span
                aria-hidden
                className="pr-10 text-[12px] font-semibold uppercase tracking-[0.22em] text-ivory/40"
              >
                {tickerWords.join(" · ")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="section-pad border-b border-ink/10">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="reveal md:col-span-5">
          <p className="eyebrow">Bienvenue</p>
          <h2 className="mt-4 text-[clamp(30px,3.6vw,44px)] leading-[1.1]">
            Votre partenaire pour entreprendre, importer et développer votre activité.
          </h2>
          <div className="mt-8 media-frame aspect-4/5">
            <Image
              src="/images/official/fondateur-bureau.jpg"
              alt="Aymeric Soro, fondateur d'Ivoire Online"
              width={720}
              height={900}
            />
          </div>
        </div>
        <div className="reveal md:col-span-6 md:col-start-7 md:pt-14">
          <p className="text-[18px] leading-relaxed text-ink/75">
            Chez Ivoire Online, nous accompagnons les particuliers, les entrepreneurs et les
            entreprises dans la réalisation de leurs projets commerciaux.
          </p>
          <p className="mt-5 text-[18px] leading-relaxed text-ink/75">
            De l'achat et de l'importation de produits aux formations en e-commerce, en passant par
            le marketing digital et l'accompagnement business, nous proposons des solutions
            concrètes pour transformer vos idées en opportunités.
          </p>
          <ul className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {["Achat et importation.", "Formations et coaching.", "Accompagnement business."].map(
              (line, i) => (
                <li key={line} className="flex items-baseline gap-5 py-4">
                  <span className="eyebrow text-ink/35">0{i + 1}</span>
                  <span className="font-display text-[clamp(21px,2.6vw,28px)]">{line}</span>
                </li>
              ),
            )}
          </ul>
          <div className="mt-9">
            <Link href="/services" className="btn btn-outline">
              Découvrir nos services <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section-pad" id="services">
      <div className="container-page">
        <SectionHeading
          eyebrow="01 — Services"
          title="Trois métiers, une même exigence."
          intro="Acheter à l'international, apprendre à vendre, trouver le bon produit : chaque service répond à un problème concret du terrain."
          cta={{ label: "Voir le détail", href: "/services" }}
        />

        <div className="mt-16 space-y-6">
          {services.map((service, i) => (
            <article
              key={service.index}
              className="reveal card-x group grid items-stretch overflow-hidden md:grid-cols-12"
            >
              <div className={`relative md:col-span-4 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="media-frame absolute inset-0 !rounded-none md:!rounded-none">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={640}
                    height={480}
                    className="h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center gap-5 p-7 md:col-span-8 md:p-12">
                <div className="flex items-center gap-4">
                  <span className="eyebrow !text-clay">{service.index}</span>
                  <span className="h-px flex-1 bg-ink/10" aria-hidden />
                  <span className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                    {service.kicker}
                  </span>
                </div>
                <h3 className="text-[clamp(26px,3vw,36px)] leading-tight">{service.title}</h3>
                <p className="text-[16.5px] leading-relaxed text-ink/70">{service.lead}</p>
                <p className="text-[16px] leading-relaxed text-ink/60">{service.body}</p>
                <div className="mt-2 flex flex-wrap gap-3">
                  <Link
                    href={service.cta.href}
                    {...(service.cta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="btn btn-primary !min-h-[48px] !text-[14.5px]"
                  >
                    {service.cta.label} <span aria-hidden>{service.cta.external ? "↗" : "→"}</span>
                  </Link>
                  <Link href={service.href} className="btn btn-outline !min-h-[48px] !text-[14.5px]">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Universes() {
  return (
    <section className="dark-section grain section-pad overflow-hidden">
      <div className="container-page">
        <SectionHeading
          dark
          eyebrow="L'univers Ivoire Online"
          title={
            <>
              Votre prochaine étape <em className="font-normal text-gold">commence ici.</em>
            </>
          }
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {universes.map((u, i) => (
            <article
              key={u.title}
              className="reveal card-x card-x-dark group flex flex-col overflow-hidden"
              style={{ ["--d" as string]: `${i * 0.09}s` }}
            >
              <div className="media-frame aspect-16/10 !rounded-none">
                <Image src={u.image} alt="" width={640} height={400} />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <p className="eyebrow !text-gold">{u.word}</p>
                <h3 className="text-[26px] text-ivory">{u.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-ivory/65">{u.text}</p>
                <Link
                  href={u.cta.href}
                  className="arrow-link mt-auto pt-4 !text-gold hover:!text-gold-bright"
                >
                  {u.cta.label} <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-ink/10 bg-ivory-dim/60">
      <div className="container-page grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4 md:py-16">
        {stats.map((s, i) => (
          <div key={s.label} className="reveal" style={{ ["--d" as string]: `${i * 0.07}s` }}>
            <p className="font-display text-[clamp(38px,5vw,58px)] leading-none text-forest">
              {s.value}
            </p>
            <p className="mt-2 text-[14.5px] text-ink/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AcademyRail() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="02 — Academy"
          title="Formations pratiques, résultats mesurables."
          intro="Des programmes concrets, pensés pour le terrain : importation, marketing digital, boutiques en ligne et publicité."
          cta={{ label: "Toute l'Academy", href: "/formations" }}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {formations.slice(0, 3).map((f, i) => (
            <Link
              key={f.slug}
              href={`/formations/${f.slug}`}
              className="reveal card-x group flex flex-col overflow-hidden"
              style={{ ["--d" as string]: `${i * 0.09}s` }}
            >
              <div className="media-frame aspect-16/10 !rounded-none">
                <Image src={f.image} alt={f.title} width={640} height={400} />
                <span className="absolute left-4 top-4 rounded-full bg-forest px-3.5 py-1.5 text-[12px] font-semibold text-ivory">
                  Inscriptions ouvertes
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <span className="eyebrow !text-clay">{f.index} — Formation</span>
                <h3 className="text-[23px] leading-snug">{f.title}</h3>
                <p className="line-clamp-3 text-[14.5px] leading-relaxed text-ink/60">
                  {f.summary}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="font-display text-[22px] text-forest">
                    {formatPrice(f.price, f.currency)}
                  </span>
                  <span className="arrow-link !text-clay group-hover:!text-forest">
                    Découvrir <span aria-hidden>↗</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="reveal mt-10 flex justify-center">
          <Link href="/formations" className="btn btn-outline">
            Voir les 5 formations <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Coaching() {
  return (
    <section className="dark-section grain section-pad">
      <div className="container-page">
        <SectionHeading
          dark
          eyebrow="Apprendre et entreprendre"
          title="Coaching personnalisé en présentiel."
          intro="Choisissez l'accompagnement adapté à votre projet."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {coaching.map((c, i) => (
            <article
              key={c.name}
              className={`reveal card-x card-x-dark flex flex-col p-7 ${
                c.featured
                  ? "!border-gold/70 bg-gold/10"
                  : ""
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
                <p className="mt-4 text-[13.5px] italic leading-relaxed text-ivory/50">{c.note}</p>
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
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="section-pad border-b border-ink/10">
      <div className="container-page grid items-center gap-12 md:grid-cols-12">
        <div className="reveal md:col-span-7">
          <div className="media-frame aspect-16/10">
            <Image
              src="/images/official/communaute.jpg"
              alt="Photo de groupe de la communauté Ivoire Online devant un espace de coworking."
              width={1200}
              height={750}
            />
          </div>
        </div>
        <div className="reveal md:col-span-5">
          <p className="eyebrow">Communauté</p>
          <h2 className="mt-4 text-[clamp(30px,3.6vw,44px)] leading-[1.1]">
            La communauté Ivoire Online
          </h2>
          <p className="mt-5 text-[16.5px] leading-relaxed text-ink/70">
            Des centaines de membres qui apprennent, testent et vendent ensemble. Idées de business,
            conseils d'importation et nouvelles du terrain, au quotidien.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={site.socials[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Rejoindre sur TikTok <span aria-hidden>↗</span>
            </a>
            <Link href="/contact" className="btn btn-outline">
              Parlons de votre projet
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function BoutiquePreview() {
  const product = products[0];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          eyebrow="03 — Boutique"
          title="Des produits prêts à revendre."
          intro="Des idées de business concrètes, avec le stock, le calcul de marge et la méthode pour démarrer."
          cta={{ label: "Toute la boutique", href: "/boutique" }}
        />
        <div className="reveal card-x mt-14 grid overflow-hidden md:grid-cols-12">
          <div className="media-frame aspect-4/3 md:col-span-6 md:aspect-auto md:!rounded-none">
            <Image src={product.image} alt={product.name} width={800} height={640} />
          </div>
          <div className="flex flex-col justify-center gap-5 p-7 md:col-span-6 md:p-12">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-forest/10 px-3 py-1 text-[12px] font-semibold text-forest">
                {product.status}
              </span>
              <span className="text-[13px] uppercase tracking-[0.14em] text-ink/45">
                Lot de 10 unités
              </span>
            </div>
            <h3 className="text-[clamp(26px,3vw,36px)] leading-tight">{product.name}</h3>
            <p className="text-[16.5px] leading-relaxed text-ink/70">{product.summary}</p>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[40px] leading-none text-forest">
                {formatPrice(product.price, product.currency)}
              </span>
              {product.oldPrice && (
                <span className="text-[17px] text-ink/40 line-through">
                  {formatPrice(product.oldPrice, product.currency)}
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={`/boutique/produit/${product.slug}`}
                className="btn btn-primary !min-h-[48px]"
              >
                Voir le produit <span aria-hidden>↗</span>
              </Link>
              <Link href="/boutique" className="btn btn-outline !min-h-[48px]">
                Explorer la boutique
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderStory() {
  return (
    <section className="dark-section grain section-pad overflow-hidden">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="reveal md:col-span-5">
          <div className="media-frame aspect-4/5">
            <Image
              src="/images/official/fondateur-debout.jpg"
              alt="Fondateur d'Ivoire Online debout dans son bureau."
              width={720}
              height={900}
            />
          </div>
        </div>
        <div className="reveal md:col-span-6 md:col-start-7">
          <p className="eyebrow">04 — Notre histoire</p>
          <h2 className="mt-4 text-[clamp(30px,4vw,50px)] leading-[1.06]">
            Tout commence par un problème à résoudre.
          </h2>
          <div className="mt-7 space-y-5 text-[16.5px] leading-relaxed text-ivory/70">
            <p className="font-display text-[19px] italic text-gold">
              Celui de milliers de personnes qui veulent acheter, importer et vendre, sans savoir
              par où commencer. Ivoire Online est ma réponse.
            </p>
            <p>
              Un produit repéré à l'étranger, introuvable ici. Un fournisseur contacté sans savoir
              s'il est fiable. Un paiement envoyé en croisant les doigts. Un jeune plein d'idées qui
              n'ose pas se lancer, faute de méthode ou de point de départ.
            </p>
            <p>De là est née Ivoire Online.</p>
            <p>
              Non pas pour vendre des services, mais pour résoudre un problème : permettre à chacun,
              particulier, jeune ou entrepreneur, d'acheter, d'importer et de vendre en toute
              confiance.
            </p>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            <div className="card-x card-x-dark !transform-none p-5">
              <p className="eyebrow !text-gold">Ma conviction</p>
              <p className="mt-3 font-display text-[18.5px] leading-snug text-ivory">
                Une vision n'a de valeur que lorsqu'elle entre en action.
              </p>
            </div>
            <div className="card-x card-x-dark !transform-none p-5">
              <p className="eyebrow !text-gold">Mon ambition</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ivory/70">
                Faire d'Ivoire Online la référence de ceux qui veulent entreprendre en Afrique.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <Link href="/a-propos" className="btn btn-gold">
              Lire notre histoire <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="section-pad border-b border-ink/10">
      <div className="container-page">
        <SectionHeading
          eyebrow="05 — Témoignages"
          title="Un retour du terrain."
          intro="Des captures de résultats transmises par nos clients, brutes et non retouchées."
          cta={{ label: "Voir les témoignages", href: "/temoignages" }}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[...testimonials.slice(0, 2), testimonialSingle].map((t, i) => (
            <figure
              key={t.image}
              className="reveal card-x group overflow-hidden"
              style={{ ["--d" as string]: `${i * 0.09}s` }}
            >
              <div className="media-frame aspect-9/16 !rounded-none">
                <Image src={t.image} alt={t.alt} width={540} height={960} />
              </div>
              <figcaption className="px-5 py-4 text-[13.5px] text-ink/55">
                Capture WhatsApp fournie par Ivoire Online
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const rows = [
    {
      title: "Achat et importation",
      text: "Être accompagné dans la recherche de produits et les commandes internationales.",
    },
    {
      title: "Formations et coaching en e-commerce",
      text: "Développer ses compétences et passer à la pratique.",
    },
    {
      title: "Service d'investissement",
      text: "Échanger avec notre équipe sur cette activité historique et les possibilités d'accompagnement.",
    },
  ];
  return (
    <section className="section-pad">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="reveal md:col-span-5">
          <p className="eyebrow">Pourquoi nous choisir</p>
          <h2 className="mt-4 text-[clamp(30px,3.8vw,46px)] leading-[1.08]">
            Trois façons de faire avancer votre projet.
          </h2>
          <div className="mt-7">
            <Link href="/services" className="btn btn-primary">
              Découvrir nos services <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>
        <div className="reveal md:col-span-6 md:col-start-7">
          <ol className="divide-y divide-ink/10 border-y border-ink/10">
            {rows.map((r, i) => (
              <li key={r.title} className="flex gap-6 py-6">
                <span className="font-display text-[26px] leading-none text-clay">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-sans text-[17.5px] font-bold text-ink">{r.title}</h3>
                  <p className="mt-1.5 text-[16px] leading-relaxed text-ink/65">{r.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function PartnersAndHistory() {
  return (
    <section className="border-y border-ink/10 bg-ivory-dim/50 section-pad">
      <div className="container-page grid gap-14 md:grid-cols-12">
        <div className="reveal md:col-span-6">
          <p className="eyebrow">Notre écosystème</p>
          <h2 className="mt-4 text-[clamp(27px,3.2vw,38px)] leading-tight">
            Applications et partenaires
          </h2>
          <p className="mt-4 max-w-md text-[15.5px] leading-relaxed text-ink/60">
            Les applications et acteurs présentés par Ivoire Online. Cette présentation ne constitue
            pas une annonce d'affiliation commerciale.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3" aria-label="Applications et partenaires">
            {partners.map((p) => (
              <li
                key={p.name}
                className="flex h-24 items-center justify-center rounded-[16px] border border-ink/10 bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-forest/25 hover:shadow-[0_16px_32px_-18px_rgb(19_28_23/0.25)]"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-10 max-w-[130px] object-contain"
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="reveal md:col-span-5 md:col-start-8">
          <p className="eyebrow">Notre parcours</p>
          <h2 className="mt-4 text-[clamp(27px,3.2vw,38px)] leading-tight">
            Ivoire Online en chiffres
          </h2>
          <dl className="mt-7 divide-y divide-ink/10 border-y border-ink/10">
            {historicalStats.map((s) => (
              <div key={s.label} className="flex items-baseline justify-between py-4">
                <dt className="text-[15.5px] text-ink/65">{s.label}</dt>
                <dd className="font-display text-[28px] leading-none text-forest">{s.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[13.5px] italic text-ink/45">
            Repères historiques de notre parcours. Satisfaction annoncée sur l'ancien site.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="dark-section grain relative overflow-hidden">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden />
      <div className="container-page relative grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="reveal md:col-span-7">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-4 text-[clamp(36px,5.5vw,66px)] leading-[1.04]">
            Votre prochaine étape{" "}
            <em className="font-normal text-gold">commence ici.</em>
          </h2>
        </div>
        <div className="reveal flex flex-col justify-end gap-4 md:col-span-4 md:col-start-9">
          <p className="text-[16.5px] leading-relaxed text-ivory/70">
            Un projet, une question, une envie de démarrer ? Écrivez-nous ou passez par WhatsApp,
            nous répondons rapidement.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-gold">
              Prendre contact <span aria-hidden>↗</span>
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Services />
      <Universes />
      <Stats />
      <AcademyRail />
      <Coaching />
      <Community />
      <BoutiquePreview />
      <FounderStory />
      <Results />
      <WhyUs />
      <PartnersAndHistory />
      <FinalCTA />
    </>
  );
}
