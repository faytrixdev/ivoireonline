import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  cta,
  align = "split",
  dark = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  cta?: { label: string; href: string };
  align?: "split" | "center";
  dark?: boolean;
}) {
  if (align === "center") {
    return (
      <div className="reveal mx-auto max-w-3xl text-center">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-4 text-balance text-[clamp(32px,4.5vw,52px)] leading-[1.08]">{title}</h2>
        {intro && (
          <p className={`mt-5 text-[17px] leading-relaxed ${dark ? "text-ivory/70" : "text-ink/65"}`}>
            {intro}
          </p>
        )}
        {cta && (
          <div className="mt-8">
            <Link href={cta.href} className={dark ? "btn btn-gold" : "btn btn-primary"}>
              {cta.label} <span aria-hidden>↗</span>
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="reveal grid items-end gap-8 md:grid-cols-12">
      <div className="md:col-span-7">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h2 className="mt-4 text-balance text-[clamp(32px,4.5vw,52px)] leading-[1.08]">{title}</h2>
      </div>
      {(intro || cta) && (
        <div className="md:col-span-5">
          {intro && (
            <p className={`text-[16.5px] leading-relaxed ${dark ? "text-ivory/70" : "text-ink/65"}`}>
              {intro}
            </p>
          )}
          {cta && (
            <div className="mt-6">
              <Link href={cta.href} className={dark ? "btn btn-gold" : "btn btn-primary"}>
                {cta.label} <span aria-hidden>↗</span>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  meta?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-ivory pt-[calc(var(--header-height)+72px)] pb-16 md:pb-24">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div
        className="hero-halo pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] opacity-60"
        aria-hidden
      />
      <div className="container-page relative">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            {eyebrow && (
              <p className="eyebrow hero-fade" style={{ animationDelay: "0.05s" }}>
                {eyebrow}
              </p>
            )}
            <h1
              className="hero-fade mt-4 text-balance text-[clamp(40px,6.5vw,76px)] leading-[1.02]"
              style={{ animationDelay: "0.15s" }}
            >
              {title}
            </h1>
          </div>
          <div
            className="hero-fade self-end md:col-span-4"
            style={{ animationDelay: "0.3s" }}
          >
            {intro && (
              <p className="text-[17px] leading-relaxed text-ink/65">{intro}</p>
            )}
            {meta}
          </div>
        </div>
      </div>
    </section>
  );
}
