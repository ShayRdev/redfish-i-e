"use client";

import { useState } from "react";
import { CheckCircle2, Info } from "lucide-react";

const fieldClass =
  "mt-1.5 w-full rounded border border-paper-line bg-paper px-3 py-2.5 text-sm text-navy placeholder:text-navy/40 focus:border-safety focus:bg-white focus:outline-none";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-lg border border-paper-line bg-paper p-8">
        <CheckCircle2 className="size-8 text-safety" aria-hidden strokeWidth={1.75} />
        <h3 className="mt-4 text-lg font-semibold tracking-tight">
          That would have sent.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">
          On a real site this reaches the office by email and text within a
          minute, and the sender gets a confirmation. Nothing was submitted here
          — this is a sample build with no mail service attached.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-5 rounded border border-navy/20 px-4 py-2 text-sm font-semibold transition-colors hover:border-navy/50"
        >
          Reset the form
        </button>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border border-paper-line bg-paper p-6 sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium" htmlFor="quote-name">
            Name
          </label>
          <input
            id="quote-name"
            name="name"
            required
            autoComplete="name"
            className={fieldClass}
            placeholder="Jordan Alvarez"
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="quote-company">
            Company
          </label>
          <input
            id="quote-company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Channelview Terminal"
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="quote-phone">
            Phone
          </label>
          <input
            id="quote-phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={fieldClass}
            placeholder="(409) 555-0100"
          />
        </div>
        <div>
          <label className="text-sm font-medium" htmlFor="quote-email">
            Email
          </label>
          <input
            id="quote-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium" htmlFor="quote-scope">
          What do you need?
        </label>
        <select id="quote-scope" name="scope" className={fieldClass} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>Instrument calibration</option>
          <option>Loop checks &amp; commissioning</option>
          <option>Control panel work</option>
          <option>Electrical installation</option>
          <option>Preventive maintenance</option>
          <option>Shutdown or turnaround support</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium" htmlFor="quote-detail">
          Scope and timeline
        </label>
        <textarea
          id="quote-detail"
          name="detail"
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="Forty transmitters due for calibration before a November outage."
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded bg-safety px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-safety/90 sm:w-auto"
      >
        Send request
      </button>
      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-navy/55">
        <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
        Sample form. Nothing is transmitted or stored.
      </p>
    </form>
  );
}
