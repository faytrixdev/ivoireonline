"use client";

import { useState } from "react";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="text-center">
        <p className="eyebrow !text-gold">{mode === "login" ? "Connexion" : "Inscription"}</p>
        <h1 className="mt-3 text-[26px] text-ivory">Fonctionnalité en démonstration.</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-ivory/65">
          Cette reconstruction est une proposition indépendante : l'authentification réelle du site
          Ivoire Online (Supabase) n'est pas connectée ici.
        </p>
        <button type="button" onClick={() => setDone(false)} className="btn btn-gold mt-6">
          Revenir au formulaire
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <p className="eyebrow !text-gold">{mode === "login" ? "Se connecter" : "Créer un compte"}</p>
      <h1 className="mt-3 text-[28px] text-ivory">
        {mode === "login" ? "Heureux de vous revoir." : "Commencez ici."}
      </h1>

      <div className="mt-6 space-y-4">
        {mode === "register" && (
          <div className="field">
            <label htmlFor="auth-name" className="!text-ivory/55">
              Nom complet
            </label>
            <input
              id="auth-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Votre nom"
              className="!border-ivory/20 !bg-white/10 !text-ivory placeholder:!text-ivory/35"
            />
          </div>
        )}
        <div className="field">
          <label htmlFor="auth-email" className="!text-ivory/55">
            E-mail
          </label>
          <input
            id="auth-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.com"
            required
            className="!border-ivory/20 !bg-white/10 !text-ivory placeholder:!text-ivory/35"
          />
        </div>
        <div className="field">
          <label htmlFor="auth-password" className="!text-ivory/55">
            Mot de passe
          </label>
          <input
            id="auth-password"
            name="password"
            type="password"
            autoComplete={mode === "login" ? "current-password" : "new-password"}
            placeholder="••••••••"
            required
            minLength={8}
            className="!border-ivory/20 !bg-white/10 !text-ivory placeholder:!text-ivory/35"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-gold mt-7 w-full">
        {mode === "login" ? "Se connecter" : "Créer mon compte"} <span aria-hidden>↗</span>
      </button>
    </form>
  );
}
