import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";

export const metadata: Metadata = {
  title: "Se connecter",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-forest-deep px-5 pt-[var(--header-height)]">
      <div className="hairline-grid pointer-events-none absolute inset-0 opacity-[0.12]" aria-hidden />
      <div className="relative w-full max-w-[440px] py-14">
        <Link href="/" className="font-display text-[28px] text-ivory">
          Ivoire Online<span className="text-gold">.</span>
        </Link>
        <p className="mt-2 text-[15px] text-ivory/60">Bienvenue dans votre espace.</p>

        <div className="mt-8 rounded-[24px] border border-ivory/12 bg-white/[0.05] p-7 backdrop-blur-md">
          <AuthForm mode="login" />
        </div>

        <p className="mt-6 text-center text-[14.5px] text-ivory/60">
          Pas encore de compte ?{" "}
          <Link href="/auth/inscription" className="text-gold underline underline-offset-4">
            Créer un compte
          </Link>
        </p>
        <p className="mt-4 text-center text-[13px] leading-relaxed text-ivory/40">
          Démonstration : l'authentification n'est pas encore reliée au serveur.
        </p>
      </div>
    </section>
  );
}
