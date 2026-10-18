import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center justify-center px-5 pt-[var(--header-height)]">
      <div className="max-w-lg text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-[clamp(40px,6vw,64px)] leading-tight">
          Page introuvable
        </h1>
        <p className="mt-4 text-[16.5px] leading-relaxed text-ink/65">
          Cette page n'existe pas ou n'est plus disponible.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
