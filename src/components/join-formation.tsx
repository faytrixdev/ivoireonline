"use client";

import Link from "next/link";
import { useAuth } from "@/components/auth-context";

export function JoinFormation({ slug }: { slug: string }) {
  const { ready, user, library, addFormation } = useAuth();
  const joined = library.includes(slug);

  if (!ready) return null;

  if (!user) {
    return (
      <Link href="/auth/connexion" className="btn btn-ghost mt-3 w-full">
        Créer un compte pour rejoindre <span aria-hidden>↗</span>
      </Link>
    );
  }

  if (joined) {
    return (
      <Link href="/compte" className="btn btn-ghost mt-3 w-full">
        Accéder à ma bibliothèque <span aria-hidden>↗</span>
      </Link>
    );
  }

  return (
    <button type="button" onClick={() => addFormation(slug)} className="btn btn-ghost mt-3 w-full">
      Rejoindre cette formation (démo) <span aria-hidden>+</span>
    </button>
  );
}
