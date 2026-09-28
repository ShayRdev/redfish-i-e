import {
  Activity,
  BadgeCheck,
  CircuitBoard,
  ClipboardCheck,
  Clock,
  Gauge,
  HardHat,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { QuoteForm } from "./quote-form";

const company = {
  name: "Redfish Instrumentation & Electrical",
  short: "Redfish I&E",
  phone: "(409) 555-0142",
  email: "dispatch@redfishie.example",
  address: "Baytown, Texas",
  hours: "Mon–Fri 7am–5pm · 24-hour callout for existing customers",
};

const services = [
  {
    icon: Gauge,
    name: "Instrument calibration",
    body: "Pressure, temperature, and level transmitters on a route, with as-found and as-left sheets before the crew leaves the unit.",
  },
  {
    icon: Activity,
    name: "Loop checks & commissioning",
    body: "Each point from the field device to the control room, stroked and signed off before product is introduced.",
  },
  {
    icon: CircuitBoard,
    name: "Control panels",
    body: "Shop-built panels and junction boxes, landed to the drawing and powered on the bench before they ship.",
  },
  {
    icon: Wrench,
    name: "Electrical installation",
    body: "Conduit, tray, and terminations for tie-ins, from the rack out to the motor or heater.",
  },
  {
    icon: ClipboardCheck,
    name: "Preventive maintenance",
    body: "A standing calibration and inspection route, so a drifting transmitter is caught on a weekday.",
  },
  {
    icon: HardHat,
    name: "Shutdown & turnaround",
    body: "Instrument techs on the outage from the first shift, with loop checks closed before the unit comes back.",
  },
];

const recentWork = [
  {
    name: "Calibration route",
    body: "A two-week pressure and temperature route through a Baytown tank farm. Sheets turned in the same day the points were finished.",
  },
  {
    name: "Panel",
    body: "A twelve-loop junction panel for a Deer Park tie-in, built in the shop and powered on the bench before it shipped.",
  },
  {
    name: "Shutdown",
    body: "Instrument support on a five-day crude-unit outage. On site for the first shift, loops signed off before restart.",
  },
];

const credentials = [
  { icon: BadgeCheck, label: "Licensed electrical contractor", detail: "TDLR #00000" },
  { icon: ShieldCheck, label: "Fully insured", detail: "$5M general liability" },
  { icon: HardHat, label: "ISNetworld qualified", detail: "Grade A safety record" },
  { icon: Clock, label: "Since 2009", detail: "17 years on the Gulf Coast" },
];

const areas = [
  "Baytown",
  "Houston",
  "Deer Park",
  "La Porte",
  "Pasadena",
  "Beaumont",
  "Port Arthur",
  "Dayton",
  "Liberty",
  "Mont Belvieu",
  "Texas City",
  "Channelview",
];

export default function RedfishPage() {
  return (
    <div className="bg-paper text-navy">
      <SampleHeader />
      <main>
        <Hero />
        <Services />
        <RecentWork />
        <Credentials />
        <Areas />
        <Quote />
      </main>
      <SampleFooter />
    </div>
  );
}

function SampleHeader() {
  return (
    <header className="border-b border-paper-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid size-10 shrink-0 place-items-center rounded bg-navy font-mono text-sm font-bold text-white"
          >
            R
          </span>
          <div>
            <p className="font-semibold leading-tight tracking-tight">
              {company.short}
            </p>
            <p className="text-xs text-navy/60">Instrumentation &amp; Electrical</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="hidden items-center gap-5 text-sm font-medium text-navy/70 md:flex">
            <a className="hover:text-navy" href="#services">
              Services
            </a>
            <a className="hover:text-navy" href="#areas">
              Service area
            </a>
          </nav>
          <a
            href={`tel:${company.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 rounded bg-safety px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-safety/90"
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      <Image
        src="/samples/redfish/redfish-hero-calibrator.png"
        alt="Generated illustration of two technicians with a calibrator and a pressure gauge. One hard hat reads Redfish I&E."
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/78" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-safety">
            Industrial I&amp;E contractor · Gulf Coast
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            Calibration, controls, and electrical work that holds up to a
            turnaround.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            Instrument techs and licensed electricians for plants, terminals,
            and process facilities from Beaumont to Houston. Documented work,
            crews that show up, and a number that a person answers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="rounded bg-safety px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-safety/90"
            >
              Request a quote
            </a>
            <a
              href={`tel:${company.phone.replace(/[^0-9]/g, "")}`}
              className="rounded border border-white/30 px-6 py-3 text-sm font-semibold transition-colors hover:border-white/60"
            >
              Call {company.phone}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">{company.hours}</p>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-white/15">
          {[
            { value: "17 yrs", label: "On the Gulf Coast" },
            { value: "24 hr", label: "Callout for customers" },
            { value: "Grade A", label: "ISNetworld safety" },
            { value: "$5M", label: "General liability" },
          ].map((stat) => (
            <div key={stat.label} className="bg-navy-soft px-5 py-7">
              <dt className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-white/65">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              What we do
            </h2>
            <p className="mt-3 max-w-xl leading-relaxed text-navy/70">
              Calibration routes, shop-built panels, and outage support for
              plants and terminals along the ship channel.
            </p>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/samples/redfish/redfish-wellhead-truck.png"
                alt="Generated illustration of two technicians at a wellhead beside a white service truck."
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-2 text-xs text-navy/50">
              Generated illustration for this demonstration.
            </figcaption>
          </figure>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.name}
              className="rounded-lg border border-paper-line bg-white p-6"
            >
              <service.icon
                className="size-6 text-safety"
                aria-hidden
                strokeWidth={1.75}
              />
              <h3 className="mt-4 font-semibold tracking-tight">
                {service.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RecentWork() {
  return (
    <section
      aria-labelledby="recent-work-heading"
      className="border-t border-paper-line bg-navy py-14 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-safety">
          Sample jobs
        </p>
        <h2
          id="recent-work-heading"
          className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
        >
          Recent work
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/65">
          Fictional jobs written for this demonstration. Not a record of real
          work.
        </p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {recentWork.map((job) => (
            <li
              key={job.name}
              className="rounded-lg border border-white/15 bg-navy-soft px-5 py-5"
            >
              <h3 className="font-semibold tracking-tight">{job.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {job.body}
              </p>
            </li>
          ))}
        </ul>
        <blockquote className="mt-8 max-w-3xl border-l-2 border-safety pl-4">
          <p className="text-base leading-relaxed text-white/90">
            They showed up with the calibration sheets already printed and left
            the unit with every loop signed off.
          </p>
          <footer className="mt-2 text-sm text-white/60">
            Turnaround lead, Gulf Coast terminal
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

function Credentials() {
  return (
    <section className="border-y border-paper-line bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <item.icon
                className="mt-0.5 size-5 shrink-0 text-safety"
                aria-hidden
                strokeWidth={1.75}
              />
              <div>
                <p className="font-semibold leading-snug tracking-tight">
                  {item.label}
                </p>
                <p className="mt-0.5 text-sm text-navy/60">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Areas() {
  return (
    <section id="areas" className="relative isolate overflow-hidden py-16 sm:py-24">
      <Image
        src="/samples/redfish/redfish-refinery-sunset.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-navy/80" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Where we work
          </h2>
          <p className="mt-3 leading-relaxed text-white/80">
            Based in {company.address}, working the ship channel and the refinery
            corridor. If your plant is not on the list, call and ask.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
            <MapPin className="size-4 text-safety" aria-hidden />
            {company.address}
          </p>
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded bg-white px-4 py-4 text-sm font-medium tracking-tight text-navy shadow-sm"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section id="quote" className="border-t border-paper-line bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Request a quote
          </h2>
          <p className="mt-3 leading-relaxed text-navy/70">
            Tell us the scope and the timeline. Someone gets back to you the same
            business day.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-safety" aria-hidden />
              <a
                className="font-semibold hover:underline"
                href={`tel:${company.phone.replace(/[^0-9]/g, "")}`}
              >
                {company.phone}
              </a>
            </li>
            <li className="text-navy/70">{company.hours}</li>
          </ul>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

function SampleFooter() {
  return (
    <footer className="bg-navy py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm sm:px-8">
        <p className="font-semibold">{company.name}</p>
        <p className="text-white/60">
          {company.address} · {company.phone}
        </p>
        <p className="mt-2 border-t border-white/15 pt-4 text-xs leading-relaxed text-white/50">
          This is a demonstration website for a fictional company. It was built
          by Serial Dynamics to show what a finished site looks like. Redfish
          I&amp;E does not exist, and the licence numbers, safety grades, and
          phone number above are placeholders. The photographs are generated
          illustrations for this demonstration, not photographs of Redfish jobs.
        </p>
      </div>
    </footer>
  );
}
