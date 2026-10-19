import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/auth-form";
import { AuthShell } from "@/components/auth-shell";

export const metadata: Metadata = {
  title: "Se connecter",
  robots: { index: false },
};

export default function LoginPage() {
  return (
    <AuthShell
      title="Heureux de vous revoir."
      lede="Retrouvez vos formations, vos commandes et votre profil en un instant."
      switchLine={
        <>
          Pas encore de compte ?{" "}
          <Link href="/auth/inscription" className="font-semibold text-gold underline underline-offset-4">
            Créer un compte
          </Link>
        </>
      }
    >
      <AuthForm mode="login" />
    </AuthShell>
  );
}
