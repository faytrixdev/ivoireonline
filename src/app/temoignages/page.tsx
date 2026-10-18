import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/shared";
import { testimonialSingle, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Témoignages",
  description:
    "Des résultats clients d'Ivoire Online, illustrés par des captures WhatsApp fournies par nos clients.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Témoignages"
        title={
          <>
            Un retour du terrain<span className="text-clay">.</span>
          </>
        }
        intro="Des captures transmises par nos clients, présentées telles quelles. Sans mise en scène."
      />

      <section className="section-pad border-b border-ink/10">
        <div className="container-page">
          <div className="reveal flex items-center gap-4">
            <span className="eyebrow !text-clay">01 — Résultats clients</span>
            <span className="h-px flex-1 bg-ink/10" aria-hidden />
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={t.image}
                className="reveal overflow-hidden rounded-[20px] border border-ink/10 bg-white transition-transform duration-500 hover:-translate-y-1.5"
                style={{ ["--d" as string]: `${i * 0.08}s` }}
              >
                <div className="media-frame aspect-9/16 !rounded-none">
                  <Image src={t.image} alt={t.alt} width={540} height={960} />
                </div>
                <figcaption className="px-5 py-4 text-[13.5px] leading-relaxed text-ink/60">
                  {t.alt}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="reveal mt-6 text-[13.5px] italic text-ink/50">
            Capture WhatsApp fournie par Ivoire Online
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid items-center gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <div className="flex items-center gap-4">
              <span className="eyebrow !text-clay">02 — Un retour du terrain</span>
              <span className="h-px flex-1 bg-ink/10" aria-hidden />
            </div>
            <h2 className="mt-5 text-[clamp(28px,3.6vw,42px)] leading-tight">
              Des échanges qui parlent d'eux-mêmes.
            </h2>
            <p className="mt-5 text-[16.5px] leading-relaxed text-ink/70">
              Les captures ci-contre montrent l'évolution des ventes et les messages transmis par un
              client accompagné par Ivoire Online.
            </p>
            <p className="mt-4 text-[13.5px] italic text-ink/50">
              Capture WhatsApp fournie par Ivoire Online
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn btn-primary">
                Démarrer mon projet <span aria-hidden>↗</span>
              </Link>
            </div>
          </div>
          <div className="reveal md:col-span-6 md:col-start-7">
            <figure className="overflow-hidden rounded-[22px] border border-ink/10 bg-white">
              <div className="media-frame aspect-16/11 !rounded-none">
                <Image
                  src={testimonialSingle.image}
                  alt={testimonialSingle.alt}
                  width={900}
                  height={620}
                />
              </div>
              <figcaption className="px-6 py-4 text-[13.5px] text-ink/55">
                {testimonialSingle.alt}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
