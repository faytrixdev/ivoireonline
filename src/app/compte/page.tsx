"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-context";
import { formatPrice, formations } from "@/data/site";

type Tab = "library" | "orders" | "profile";

const tabs: { id: Tab; label: string }[] = [
  { id: "library", label: "Ma bibliothèque" },
  { id: "orders", label: "Mes commandes" },
  { id: "profile", label: "Mon profil" },
];

function initialsOf(email: string, name: string) {
  const source = (name || email).trim();
  const parts = source.split(/[\s@._-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "I") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export default function ComptePage() {
  const router = useRouter();
  const { ready, user, logout, updateProfile, changePassword, orders, library } = useAuth();
  const [tab, setTab] = useState<Tab>("library");
  const [saved, setSaved] = useState(false);
  const [pwdOpen, setPwdOpen] = useState(false);
  const [pwdError, setPwdError] = useState<string | null>(null);
  const [pwdDone, setPwdDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (ready && !user && !leaving) router.replace("/auth/connexion");
  }, [ready, user, router, leaving]);

  if (!ready || !user) {
    return (
      <section className="flex min-h-[70svh] items-center justify-center pt-[var(--header-height)]">
        <p className="text-[15px] text-ink/50">Chargement de votre espace…</p>
      </section>
    );
  }

  const myFormations = formations.filter((f) => library.includes(f.slug));

  return (
    <section className="pt-[calc(var(--header-height)+32px)] pb-24">
      <div className="container-page">
        {/* Welcome banner */}
        <div className="dark-section grain hero-fade relative overflow-hidden rounded-[28px] bg-gradient-to-br from-forest-deep via-forest-deep to-[#065211] px-7 py-9 sm:px-10 sm:py-11">
          <div
            className="pointer-events-none absolute -right-16 -top-20 h-[340px] w-[340px] rounded-full bg-gold/14 blur-[100px]"
            aria-hidden
          />
          <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full border border-gold/50 bg-gold/10 font-display text-[26px] text-gold">
                {initialsOf(user.email, user.name)}
              </div>
              <div>
                <p className="eyebrow">Espace membre</p>
                <h1 className="mt-2 font-display text-[clamp(28px,4vw,40px)] leading-tight text-ivory">
                  {user.name ? `Bonjour, ${user.name.split(" ")[0]}` : "Bienvenue."}
                </h1>
                <p className="mt-1.5 text-[14px] text-ivory/55">{user.email}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setLeaving(true);
                logout();
                router.push("/");
              }}
              className="btn btn-ghost !min-h-[46px] !px-6"
            >
              Se déconnecter
            </button>
          </div>

          <dl className="relative z-10 mt-9 grid grid-cols-3 gap-4 border-t border-ivory/12 pt-7 sm:max-w-lg">
            <div>
              <dd className="font-display text-[30px] leading-none text-gold sm:text-[34px]">
                {myFormations.length}
              </dd>
              <dt className="mt-2 text-[12.5px] leading-snug text-ivory/55">
                formations dans ma bibliothèque
              </dt>
            </div>
            <div>
              <dd className="font-display text-[30px] leading-none text-gold sm:text-[34px]">
                {orders.length}
              </dd>
              <dt className="mt-2 text-[12.5px] leading-snug text-ivory/55">commandes passées</dt>
            </div>
            <div>
              <dd className="font-display text-[30px] leading-none text-gold sm:text-[34px]">0</dd>
              <dt className="mt-2 text-[12.5px] leading-snug text-ivory/55">certificats obtenus</dt>
            </div>
          </dl>
        </div>

        {/* Tabs */}
        <div
          className="hero-fade mt-8 inline-flex flex-wrap gap-1 rounded-full border border-ink/10 bg-white p-1.5 shadow-[0_14px_34px_-24px_rgb(19_28_23/0.35)]"
          style={{ animationDelay: "0.1s" }}
          role="tablist"
          aria-label="Espace compte"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={`rounded-full px-5 py-2.5 text-[14.5px] font-semibold transition-all ${
                tab === t.id
                  ? "bg-forest text-ivory shadow-[0_10px_22px_-14px_rgb(0_122_12/0.7)]"
                  : "text-ink/60 hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10">
          {tab === "library" && (
            <div className="hero-fade">
              <p className="eyebrow">Academy</p>
              <h2 className="mt-3 text-[clamp(30px,4vw,42px)]">Ma bibliothèque</h2>
              <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-ink/60">
                Bienvenue dans votre espace d'apprentissage. Retrouvez votre prochaine leçon et
                avancez à votre rythme.
              </p>

              {myFormations.length === 0 ? (
                <div className="card-x mt-9 flex flex-wrap items-center justify-between gap-6 p-8">
                  <div>
                    <p className="font-display text-[22px]">Votre bibliothèque est encore vide.</p>
                    <p className="mt-2 text-[15px] text-ink/55">
                      Ajoutez une formation pour la retrouver ici, prête à reprendre.
                    </p>
                  </div>
                  <Link href="/formations" className="btn btn-primary">
                    Découvrir l'Academy <span aria-hidden>↗</span>
                  </Link>
                </div>
              ) : (
                <div className="mt-9 grid gap-5 md:grid-cols-2">
                  {myFormations.map((f) => (
                    <Link key={f.slug} href={`/formations/${f.slug}`} className="card-x group flex gap-5 p-5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.image} alt="" className="h-28 w-32 shrink-0 rounded-[14px] object-cover" />
                      <div className="flex min-w-0 flex-1 flex-col justify-center">
                        <span className="eyebrow !text-clay">{f.index} — Formation</span>
                        <p className="mt-1.5 truncate font-display text-[19px]">{f.title}</p>
                        <p className="mt-1 text-[13.5px] text-forest arrow-link !text-forest">
                          Ouvrir <span aria-hidden>↗</span>
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "orders" && (
            <div className="hero-fade">
              <p className="eyebrow">Boutique</p>
              <h2 className="mt-3 text-[clamp(30px,4vw,42px)]">Mes commandes</h2>

              {orders.length === 0 ? (
                <div className="card-x mt-9 flex flex-wrap items-center justify-between gap-6 p-8">
                  <div>
                    <p className="font-display text-[22px]">Aucune commande pour le moment.</p>
                    <p className="mt-2 text-[15px] text-ink/55">
                      Vos commandes passées depuis la boutique apparaîtront ici.
                    </p>
                  </div>
                  <Link href="/boutique" className="btn btn-primary">
                    Découvrir la boutique <span aria-hidden>↗</span>
                  </Link>
                </div>
              ) : (
                <ul className="mt-8 space-y-4">
                  {[...orders].reverse().map((o) => (
                    <li
                      key={o.id}
                      className="card-x !transform-none overflow-hidden p-6 pl-7"
                      style={{ borderLeft: "4px solid var(--color-gold)" }}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-[13px] uppercase tracking-[0.14em] text-ink/45">
                            Commande {o.id}
                          </p>
                          <p className="mt-1 text-[14.5px] text-ink/60">
                            {new Date(o.date).toLocaleDateString("fr-FR", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-[12.5px] font-semibold text-clay">
                          {o.status}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-1.5 border-t border-ink/10 pt-4 text-[15px]">
                        {o.items.map((it) => (
                          <li key={it.name} className="flex justify-between text-ink/70">
                            <span>
                              {it.name} <span className="text-ink/45">× {it.qty}</span>
                            </span>
                            <span>{formatPrice(it.price * it.qty, "F CFA")}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-3 flex items-baseline justify-between border-t border-ink/10 pt-3">
                        <span className="text-[15px] text-ink/60">Total</span>
                        <span className="font-display text-[22px] text-forest">
                          {formatPrice(o.total, "F CFA")}
                        </span>
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {tab === "profile" && (
            <div className="hero-fade max-w-2xl">
              <p className="eyebrow">Identité</p>
              <h2 className="mt-3 text-[clamp(30px,4vw,42px)]">Mon profil</h2>
              <p className="mt-3 text-[15.5px] text-ink/60">{user.email}</p>

              <form
                className="card-x mt-8 p-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = new FormData(e.currentTarget);
                  updateProfile(String(form.get("name") || ""), String(form.get("phone") || ""));
                  setSaved(true);
                  setTimeout(() => setSaved(false), 2500);
                }}
              >
                <div className="space-y-4">
                  <div className="field">
                    <label htmlFor="pf-name">Nom complet</label>
                    <input id="pf-name" name="name" type="text" defaultValue={user.name} autoComplete="name" />
                  </div>
                  <div className="field">
                    <label htmlFor="pf-phone">Téléphone</label>
                    <input
                      id="pf-phone"
                      name="phone"
                      type="tel"
                      defaultValue={user.phone}
                      autoComplete="tel"
                      placeholder="+225 …"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-6 w-full">
                  {saved ? "Profil enregistré ✓" : "Enregistrer mon profil"}
                </button>
              </form>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => {
                    setPwdOpen((v) => !v);
                    setPwdError(null);
                    setPwdDone(false);
                  }}
                  className="btn btn-outline !min-h-[46px] !text-[14.5px]"
                  aria-expanded={pwdOpen}
                >
                  {pwdOpen ? "Fermer la sécurité" : "Sécurité : changer mon mot de passe"}
                </button>

                {pwdOpen && (
                  <form
                    className="card-x mt-4 p-7"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setPwdError(null);
                      setPwdDone(false);
                      const form = new FormData(e.currentTarget);
                      try {
                        await changePassword(
                          String(form.get("current") || ""),
                          String(form.get("next") || ""),
                        );
                        setPwdDone(true);
                        (e.target as HTMLFormElement).reset();
                      } catch (err) {
                        setPwdError(err instanceof Error ? err.message : "Erreur.");
                      }
                    }}
                  >
                    <div className="space-y-4">
                      <div className="field">
                        <label htmlFor="pwd-current">Mot de passe actuel</label>
                        <input id="pwd-current" name="current" type="password" required autoComplete="current-password" />
                      </div>
                      <div className="field">
                        <label htmlFor="pwd-next">Nouveau mot de passe</label>
                        <input id="pwd-next" name="next" type="password" required minLength={12} autoComplete="new-password" />
                        <p className="text-[12.5px] text-ink/45">12 caractères minimum.</p>
                      </div>
                    </div>
                    {pwdError && (
                      <p role="alert" className="mt-4 rounded-[12px] border border-clay/30 bg-clay/10 px-4 py-3 text-[14px] text-clay">
                        {pwdError}
                      </p>
                    )}
                    {pwdDone && (
                      <p role="status" className="mt-4 rounded-[12px] border border-forest/30 bg-forest/10 px-4 py-3 text-[14px] text-forest">
                        Mot de passe modifié.
                      </p>
                    )}
                    <button type="submit" className="btn btn-primary mt-6 w-full">
                      Mettre à jour le mot de passe
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
