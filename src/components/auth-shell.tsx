import Link from "next/link";

const stats = [
  { value: "3 500+", label: "membres accompagnés" },
  { value: "5", label: "formations certifiantes" },
  { value: "100 %", label: "made in Côte d'Ivoire" },
];

export function AuthShell({
  title,
  lede,
  switchLine,
  children,
}: {
  title: string;
  lede: string;
  switchLine: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="dark-section grain relative flex min-h-[100svh] items-center overflow-hidden bg-forest-deep pt-[var(--header-height)]">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.1]" aria-hidden />
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[540px] w-[540px] rounded-full bg-gold/12 blur-[130px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-[440px] w-[440px] rounded-full bg-forest-soft/25 blur-[120px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] items-center gap-14 px-5 py-14 lg:grid-cols-[1.05fr_auto] lg:gap-20 lg:px-8">
        {/* Brand panel */}
        <div className="hidden lg:block">
          <Link href="/" className="inline-block font-display text-[26px] text-ivory">
            Ivoire Online<span className="text-gold">.</span>
          </Link>
          <p className="eyebrow mt-10">Espace membre</p>
          <h1 className="mt-5 max-w-[15ch] font-display text-[clamp(40px,4.2vw,62px)] leading-[1.04] text-ivory">
            Votre empire digital commence par un compte.
          </h1>
          <p className="mt-6 max-w-[46ch] text-[16.5px] leading-relaxed text-ivory/60">
            Formations, commandes, profil : tout votre univers Ivoire Online dans un seul espace,
            pensé pour avancer vite et bien.
          </p>
          <ul className="mt-12 flex gap-10 border-t border-ivory/12 pt-8">
            {stats.map((s) => (
              <li key={s.label}>
                <p className="font-display text-[30px] leading-none text-gold">{s.value}</p>
                <p className="mt-2 text-[13.5px] text-ivory/55">{s.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Form card */}
        <div className="mx-auto w-full max-w-[460px]">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="font-display text-[24px] text-ivory">
              Ivoire Online<span className="text-gold">.</span>
            </Link>
          </div>

          <div className="hero-fade rounded-[28px] border border-ink/5 bg-ivory p-8 shadow-[0_48px_90px_-44px_rgba(0,0,0,0.65)]">
            <p className="eyebrow">Espace membre</p>
            <h2 className="mt-3 font-display text-[30px] leading-tight text-ink">{title}</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink/55">{lede}</p>
            <div className="mt-7">{children}</div>
          </div>

          <p className="mt-6 text-center text-[14.5px] text-ivory/65">{switchLine}</p>
          <p className="mx-auto mt-3 max-w-[38ch] text-center text-[12.5px] leading-relaxed text-ivory/35">
            Démonstration locale : votre compte reste enregistré dans ce navigateur.
          </p>
        </div>
      </div>
    </section>
  );
}
