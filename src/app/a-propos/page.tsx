import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, SectionHeading } from "@/components/shared";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Tout commence par un problème à résoudre. Découvrez l'histoire d'Ivoire Online, née de la volonté de permettre à chacun d'acheter, d'importer et de vendre en confiance.",
};

const manifesto = [
  {
    kicker: "Le point de départ",
    paragraphs: [
      "Un produit repéré à l'étranger, introuvable ici. Un fournisseur contacté sans savoir s'il est fiable. Un paiement envoyé en croisant les doigts. Un jeune plein d'idées qui n'ose pas se lancer, faute de méthode ou de point de départ.",
      "Ces situations, beaucoup les vivent. Moi, j'ai décidé d'en faire le point de départ de quelque chose.",
    ],
  },
  {
    kicker: "La réponse",
    paragraphs: [
      "De là est née Ivoire Online.",
      "Non pas pour vendre des services, mais pour résoudre un problème : permettre à chacun, particulier, jeune ou entrepreneur, d'acheter, d'importer et de vendre en toute confiance. Nous commandons pour vous depuis la Chine, la Turquie, Dubaï et la France. Nous vous formons à l'importation, à la publicité Facebook et à la vente en ligne. Nous vous accompagnons sur votre projet. Et nous vous aidons à trouver les produits qui se vendent vraiment.",
    ],
  },
];

const values = [
  {
    title: "Ma conviction",
    text: "Une vision n'a de valeur que lorsqu'elle entre en action.",
  },
  {
    title: "Mon ambition",
    text: "Faire d'Ivoire Online la référence de ceux qui veulent entreprendre en Afrique. Pas seulement une entreprise qui réussit, mais un tremplin qui fait passer des centaines de jeunes de l'idée à l'action, puis de l'action aux résultats.",
  },
];

const timeline = [
  {
    label: "Chiffres clés",
    items: [
      { value: "3 500+", label: "clients accompagnés" },
      { value: "500+", label: "élèves formés" },
      { value: "5+", label: "ans d'expérience" },
      { value: "15+", label: "pays touchés" },
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title={
          <>
            Tout commence par un problème à&nbsp;résoudre<span className="text-clay">.</span>
          </>
        }
        intro="Celui de milliers de personnes qui veulent acheter, importer et vendre, sans savoir par où commencer. Ivoire Online est ma réponse."
      />

      {/* Manifesto */}
      <section className="section-pad border-b border-ink/10">
        <div className="container-page grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <div className="media-frame aspect-4/5 md:sticky md:top-32">
              <Image
                src="/images/official/fondateur-debout.jpg"
                alt="Fondateur d'Ivoire Online debout dans son bureau."
                width={720}
                height={900}
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            {manifesto.map((block) => (
              <article key={block.kicker} className="reveal mb-12">
                <p className="eyebrow">{block.kicker}</p>
                <div className="mt-4 space-y-5">
                  {block.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className={
                        i === 0 && block.kicker === "La réponse"
                          ? "font-display text-[24px] leading-snug text-forest"
                          : "text-[17px] leading-relaxed text-ink/75"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            ))}

            <div className="reveal grid items-start gap-5 sm:grid-cols-2">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-[20px] border border-ink/10 bg-white p-6"
                >
                  <p className="eyebrow !text-clay">{v.title}</p>
                  <p className="mt-3 font-display text-[19px] leading-snug text-ink">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad bg-ivory-dim/60">
        <div className="container-page">
          <SectionHeading
            eyebrow="En chiffres"
            title="Ivoire Online en action."
            cta={{ label: "Nous contacter", href: "/contact" }}
          />
          <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {timeline[0].items.map((s, i) => (
              <div key={s.label} className="reveal" style={{ ["--d" as string]: `${i * 0.07}s` }}>
                <dd className="font-display text-[clamp(38px,5vw,58px)] leading-none text-forest">
                  {s.value}
                </dd>
                <dt className="mt-2 text-[14.5px] text-ink/60">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Community band */}
      <section className="dark-section grain section-pad">
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
            <p className="eyebrow">Et si votre histoire commençait ici ?</p>
            <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] leading-tight text-ivory">
              Rejoignez la communauté.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ivory/70">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/formations" className="btn btn-gold">
                Découvrir l'Academy <span aria-hidden>↗</span>
              </Link>
              <a
                href={site.socials[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Suivre sur TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
