"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  if (sent) {
    return (
      <div className="rounded-[22px] border border-forest/25 bg-forest/5 p-10 text-center">
        <p className="eyebrow">Message enregistré</p>
        <h2 className="mt-4 text-[28px] leading-snug">Merci pour votre message.</h2>
        <p className="mx-auto mt-3 max-w-md text-[16px] leading-relaxed text-ink/65">
          Cette démonstration n'envoie pas encore de données vers un serveur. Pour une réponse
          immédiate, écrivez-nous directement sur WhatsApp.
        </p>
        <a
          href="https://wa.me/2250706891128"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-7"
        >
          Ouvrir WhatsApp <span aria-hidden>↗</span>
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const email = String(data.get("email") || "").trim();
        const message = String(data.get("message") || "").trim();
        if (!email.includes("@") || message.length < 10) {
          setError("Merci de renseigner un e-mail valide et un message d'au moins 10 caractères.");
          return;
        }
        setError("");
        setSent(true);
        form.reset();
      }}
      className="rounded-[22px] border border-ink/10 bg-white p-7 md:p-9"
      noValidate
    >
      <p className="eyebrow">Formulaire</p>
      <h2 className="mt-3 text-[28px] leading-snug">Écrivez-nous.</h2>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="contact-name">Nom complet</label>
          <input id="contact-name" name="name" type="text" placeholder="Votre nom" autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="contact-email">E-mail</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="vous@exemple.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="mt-5 field">
        <label htmlFor="contact-subject">Sujet</label>
        <select id="contact-subject" name="subject" defaultValue="service">
          <option value="service">Service d'achats / importation</option>
          <option value="formation">Formation ou coaching</option>
          <option value="boutique">Produit de la boutique</option>
          <option value="autre">Autre demande</option>
        </select>
      </div>

      <div className="mt-5 field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Décrivez votre projet ou votre question…"
          required
        />
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-lg bg-clay/10 px-4 py-3 text-[14.5px] text-clay">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn-primary mt-7 w-full sm:w-auto">
        Envoyer le message <span aria-hidden>↗</span>
      </button>

      <p className="mt-4 text-[13.5px] leading-relaxed text-ink/50">
        Démonstration : ce formulaire est validé côté navigateur, sans envoi réel. Vous pouvez aussi
        nous écrire directement sur WhatsApp.
      </p>
    </form>
  );
}
