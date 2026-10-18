import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet : contactez Ivoire Online par le formulaire, WhatsApp, TikTok ou les réseaux sociaux.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Parlons de votre projet<span className="text-clay">.</span>
          </>
        }
        intro="Une question sur l'importation, une formation, un produit ou un accompagnement ? Écrivez-nous, nous répondons rapidement."
      />

      <section className="section-pad">
        <div className="container-page grid gap-14 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <ContactForm />
          </div>

          <aside className="reveal md:col-span-4 md:col-start-9">
            <div className="rounded-[22px] border border-ink/10 bg-white p-7">
              <p className="eyebrow">Réponse directe</p>
              <h2 className="mt-3 text-[24px] leading-snug">Le plus rapide : WhatsApp.</h2>
              <p className="mt-3 text-[15.5px] leading-relaxed text-ink/65">
                Décrivez votre besoin, joignez une photo ou un lien si nécessaire. Nous répondons
                aux messages du lundi au samedi.
              </p>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-6 w-full"
              >
                Échanger sur WhatsApp <span aria-hidden>↗</span>
              </a>
              <p className="mt-4 text-center text-[14px] text-ink/55">{site.phone}</p>
            </div>

            <div className="mt-6 rounded-[22px] border border-ink/10 bg-ivory-dim/60 p-7">
              <p className="eyebrow">Réseaux</p>
              <ul className="mt-4 space-y-3">
                {site.socials.map((s) => (
                  <li key={s.name}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="arrow-link !text-ink/70 hover:!text-forest"
                    >
                      {s.name} <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-[22px] border border-ink/10 bg-white p-7">
              <p className="eyebrow">Autres sujets</p>
              <ul className="mt-4 space-y-3 text-[15.5px]">
                <li>
                  <Link href="/formations" className="arrow-link !text-ink/75">
                    S'inscrire à une formation <span aria-hidden>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/boutique" className="arrow-link !text-ink/75">
                    Commander un produit <span aria-hidden>→</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="arrow-link !text-ink/75">
                    Confier un achat à l'international <span aria-hidden>→</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
