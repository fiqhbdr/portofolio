"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { WEB3FORMS_KEY } from "@/lib/contact";

// Measuring in a layout effect keeps the widget from being mounted at one size
// and swapped to the other a frame later, which is what used to make the box
// flash between the two shapes on a warm cache. The server has no layout to
// read, so it falls back to the no-op effect and renders the widget on the
// client only.
const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const ENDPOINT = "https://api.web3forms.com/submit";

/*
  Web3Forms runs the hCaptcha check for you on the free plan, so this is their
  shared site key rather than one registered to this site. What stops spam is
  that they verify the token server side: a submission aimed straight at their
  API without a valid token is rejected there, whether or not this page ran.
*/
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

const LABEL = "mb-2 block text-[13px] font-medium text-muted";
const FIELD =
  "w-full rounded-[10px] border border-line bg-surface px-4 py-3 text-[15px] text-ink transition-colors duration-250 placeholder:text-muted/80 focus:border-accent";

// hCaptcha ships two checkbox shapes and neither is free-form: the default is a
// 302x76 strip, compact is a 158x138 block. The strip is the nicer shape for a
// wide form, but it does not fit the 224px of room the form has inside at
// 320px, so the form measures itself and falls back to the block when it must.
// Both heights are reserved up front so the form does not jump when the script
// lands.
const CAPTCHA_STRIP_WIDTH = 302;
const CAPTCHA_STRIP_HEIGHT = 76;
const CAPTCHA_BLOCK_HEIGHT = 138;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");
  const [token, setToken] = useState("");
  const [captchaFailed, setCaptchaFailed] = useState(false);
  // null until the box has been measured. Nothing is mounted before that, so
  // the widget never appears at a size it is about to leave.
  const [strip, setStrip] = useState<boolean | null>(null);
  // The widget injects hCaptcha's 105KB script on mount, and mounting it with
  // the page is what put a third-party cookie, a 149ms blocking task, and a
  // deprecated-API warning on every visit. It stays unmounted until the form is
  // close to the viewport or someone reaches for a field.
  const [armed, setArmed] = useState(false);
  const captcha = useRef<HCaptcha>(null);
  const captchaBox = useRef<HTMLDivElement>(null);
  const sending = status === "sending";
  const ready = Boolean(token) && Boolean(WEB3FORMS_KEY);
  const size = strip ? "normal" : "compact";

  // Measured rather than inferred from a breakpoint, because how much room the
  // form has inside depends on its own padding and on the column it lands in.
  useIsomorphicLayoutEffect(() => {
    const box = captchaBox.current;
    if (!box) return;

    const measure = () => setStrip(box.clientWidth >= CAPTCHA_STRIP_WIDTH);

    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(box);

    // A screen of slack, so the script has landed by the time the widget is
    // actually looked at.
    const approach = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setArmed(true);
        approach.disconnect();
      },
      { rootMargin: "600px 0px 600px 0px" },
    );
    approach.observe(box);

    return () => {
      resize.disconnect();
      approach.disconnect();
    };
  }, []);

  // Crossing the threshold swaps in a fresh, unsolved widget, so a token solved
  // before the resize no longer matches what is on screen.
  useEffect(() => {
    setToken("");
  }, [size]);

  // A solved token is single use, so once the server has read one the widget is
  // holding a spent value. Clearing it asks for a fresh solve rather than
  // failing the next attempt the same way.
  function clearCaptcha() {
    captcha.current?.resetCaptcha();
    setToken("");
  }

  function onVerify(value: string) {
    setToken(value);
    // A fresh solve means the previous complaint no longer applies.
    setStatus((current) => (current === "error" ? "idle" : current));
    setNotice("");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Bots tick every box they find. A person never sees this one, so a tick
    // means the submission is not worth forwarding.
    if (data.get("botcheck")) return;

    // The button is disabled without a token, but Enter inside a field can
    // still reach this handler, and an empty token would only waste a round
    // trip to be rejected.
    if (!token) {
      setStatus("error");
      setNotice("Complete the check above to send.");
      return;
    }

    setStatus("sending");
    setNotice("");

    // Sent as multipart, the same shape as a plain HTML form post, because that
    // is the path Web3Forms documents for the captcha field.
    data.set("access_key", WEB3FORMS_KEY);
    data.set("subject", `New message from ${data.get("name")}`);
    data.set("h-captcha-response", token);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();

      // However it answered, the server has read the token by now.
      clearCaptcha();

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
      onFocusCapture={() => setArmed(true)}
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

      {/*
        The key remounts the widget when the shape changes. The library does
        handle a size change itself, but it does so through a
        shouldComponentUpdate that reads backwards; a remount is the one path
        whose behaviour is plain React. The script is cached per window, so
        nothing is fetched twice.
      */}
      <div
        ref={captchaBox}
        className="mt-6"
        style={{
          minHeight: strip
            ? CAPTCHA_STRIP_HEIGHT
            : CAPTCHA_BLOCK_HEIGHT,
        }}
      >
        {armed && strip !== null && (
          <HCaptcha
            key={size}
            ref={captcha}
            sitekey={HCAPTCHA_SITEKEY}
            reCaptchaCompat={false}
            theme="dark"
            size={size}
            onVerify={onVerify}
            onExpire={() => setToken("")}
            onError={() => {
              setToken("");
              setCaptchaFailed(true);
            }}
          />
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <button
          type="submit"
          disabled={sending || !ready}
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
          {!sending && status === "sent" &&
            "Thanks, that arrived. I reply to everything, usually within a day."}
          {!sending && status === "error" && notice}
          {!sending && status === "idle" && !token &&
            (captchaFailed
              ? "The check could not load. Use the email link above instead."
              : "Complete the check above to send.")}
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
