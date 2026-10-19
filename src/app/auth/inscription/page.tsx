import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { AuthShell } from "@/components/auth-shell";

export const metadata: Metadata = {
  title: "Créer un compte",
  robots: { index: false },
};

export default function RegisterPage() {
  return (
    <AuthShell
      title="Commencez ici."
      lede="Un compte, tout votre univers : Academy, boutique, coaching et suivi de commandes."
      switchLine={
        <>
          Déjà membre ?{" "}
          <Link href="/auth/connexion" className="font-semibold text-gold underline underline-offset-4">
            Se connecter
          </Link>
        </>
      }
    >
      <AuthForm mode="register" />
    </AuthShell>
  );
}
