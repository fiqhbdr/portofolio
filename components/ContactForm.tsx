"use client";

import { useState } from "react";
import { WEB3FORMS_KEY } from "@/lib/contact";

const ENDPOINT = "https://api.web3forms.com/submit";

const LABEL = "mb-2 block text-[13px] font-medium text-muted";
const FIELD =
  "w-full rounded-[10px] border border-line bg-surface px-4 py-3 text-[15px] text-ink transition-colors duration-250 placeholder:text-muted/80 focus:border-accent";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");
  const sending = status === "sending";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots tick every box they find. A person never sees this one, so a tick
    // means the submission is not worth forwarding.
    if (data.get("botcheck")) return;

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New message from ${data.get("name")}`,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
        setNotice(
          result.message ??
            "That did not go through. Try again, or use the email link above."
        );
      }
    } catch {
      setStatus("error");
      setNotice(
        "Could not reach the server. Check your connection, or use the email link above."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-line p-6 md:p-8"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={LABEL}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={FIELD}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={LABEL}>
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            className={FIELD}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="contact-message" className={LABEL}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="What are you building?"
            className={`${FIELD} resize-y`}
          />
        </div>
      </div>

      {/*
        Honeypot. Hidden from sight and from screen readers, and skipped by the
        keyboard, so only a script filling in every field will tick it.
      */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="hidden"
      />

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2 rounded-[10px] bg-accent px-5 py-3 text-[14px] font-medium text-bg transition-colors duration-250 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {sending ? "Sending" : "Send message"}
          <span aria-hidden>→</span>
        </button>

        {/* Present before anything writes to it, so screen readers announce the
            change rather than missing a region that appeared with the text. */}
        <p
          role="status"
          aria-live="polite"
          className="text-[13px] text-ink"
        >
          {sending && "Sending your message."}
          {status === "sent" &&
            "Thanks, that arrived. I reply to everything, usually within a day."}
          {status === "error" && notice}
        </p>
      </div>

      {!WEB3FORMS_KEY && (
        <p className="mt-5 text-[13px] text-muted">
          This form needs NEXT_PUBLIC_WEB3FORMS_KEY to be set before it can
          send.
        </p>
      )}
    </form>
  );
}
