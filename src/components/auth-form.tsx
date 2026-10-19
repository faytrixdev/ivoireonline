"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-context";

function PasswordField({
  id,
  name,
  label,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  autoComplete: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <div className="relative">
        <input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder="••••••••"
          required
          minLength={12}
          className="pr-14 focus:border-gold focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-gold)_14%,transparent)]"
        />
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Masquer le mot de passe" : "Afficher le mot de passe"}
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-forest"
        >
          {show ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M3 3l18 18M10.6 10.7a2 2 0 0 0 2.7 2.8M9.4 5.4A9.5 9.5 0 0 1 12 5c5 0 9 4.5 9 7a12 12 0 0 1-2.6 3.6M6.2 6.7C3.9 8.3 3 10.6 3 12c0 2.5 4 7 9 7a9.6 9.6 0 0 0 4.2-1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <path d="M3 12s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7Z" />
              <circle cx="12" cy="12" r="2.6" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const { login, signup } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "");
    const password = String(form.get("password") || "");
    try {
      if (mode === "register") {
        const confirm = String(form.get("confirm") || "");
        if (password !== confirm) throw new Error("Les deux mots de passe ne correspondent pas.");
        await signup(email, password, "");
      } else {
        await login(email, password);
      }
      router.push("/compte");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="hero-fade field" style={{ animationDelay: "0.08s" }}>
        <label htmlFor="auth-email">E-mail</label>
        <input
          id="auth-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="vous@exemple.com"
          required
          className="focus:border-gold focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--color-gold)_14%,transparent)]"
        />
      </div>

      <div className="hero-fade" style={{ animationDelay: "0.16s" }}>
        <PasswordField
          id="auth-password"
          name="password"
          label="Mot de passe"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
        />
        {mode === "register" && (
          <p className="mt-2 text-[12.5px] text-ink/45">12 caractères minimum.</p>
        )}
      </div>

      {mode === "register" && (
        <div className="hero-fade" style={{ animationDelay: "0.24s" }}>
          <PasswordField
            id="auth-confirm"
            name="confirm"
            label="Confirmer le mot de passe"
            autoComplete="new-password"
          />
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="hero-fade rounded-[14px] border border-clay/30 bg-clay/10 px-4 py-3.5 text-[14px] leading-snug text-clay"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={busy}
        className="btn btn-gold w-full disabled:opacity-60"
        style={{ animationDelay: "0.3s" }}
      >
        {busy ? "Un instant…" : mode === "login" ? "Entrer dans mon espace" : "Créer mon compte"}{" "}
        <span aria-hidden>↗</span>
      </button>
    </form>
  );
}
