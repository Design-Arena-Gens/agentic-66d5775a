const services = [
  {
    title: "AI Automations & Agents",
    description:
      "Design, build, and operate automations that connect your tools, data, and teams with human-in-the-loop safeguards.",
    details: ["Workflow orchestration", "RPA replacements", "Agent handoffs"],
  },
  {
    title: "Machine Learning Intelligence",
    description:
      "Predictive and generative models that unlock new revenue, retention, and personalization opportunities.",
    details: ["Forecasting + scoring", "Custom fine-tuned models", "Realtime analytics"],
  },
  {
    title: "Websites & Digital Products",
    description:
      "Conversion-obsessed websites, dashboards, and internal portals engineered for speed, clarity, and measurable KPIs.",
    details: ["Design systems", "Web apps & dashboards", "CMS migrations"],
  },
  {
    title: "AI Callers & Messaging",
    description:
      "Voice and chat experiences that sound human, stay compliant, and plug into your CRM and support stack.",
    details: ["Outbound/Inbound calling", "SMS + omni-channel", "CRM + ticket sync"],
  },
  {
    title: "Control Centers & Insights",
    description:
      "Unified views of performance, attribution, and operations so leaders can steer the entire AI ecosystem.",
    details: ["Executive dashboards", "Custom reporting", "Alerting & governance"],
  },
  {
    title: "Social & Market Activation",
    description:
      "Audience intelligence, automated content, and adaptive growth playbooks that keep momentum compounding.",
    details: ["Content engines", "Reputation monitoring", "Paid + organic strategy"],
  },
];

const pillars = [
  {
    title: "Full-lifecycle delivery",
    body: "Strategy, engineering, design, compliance, and adoption support in one accountable team—from discovery to ongoing optimization.",
  },
  {
    title: "Custom-fit architecture",
    body: "We map your requirements against the right blend of open-source, commercial, and proprietary models—no recycled bundles or forced platforms.",
  },
  {
    title: "Measured outcomes",
    body: "Every initiative ships with business KPIs, executive dashboards, and measurable impact to keep stakeholders aligned.",
  },
];

const process = [
  {
    step: "01",
    title: "Discover & Frame",
    summary:
      "Deep-dive into your operation, define the right use-cases, and architect the roadmap with success metrics.",
    deliverables: ["Stakeholder interviews", "Opportunity matrix", "Technical blueprint"],
  },
  {
    step: "02",
    title: "Design & Prototype",
    summary:
      "Translate strategy into frictionless customer and operator journeys, then prove value with rapid pilots.",
    deliverables: ["UX flows + copy", "Pilot automations", "Data validation"],
  },
  {
    step: "03",
    title: "Build & Integrate",
    summary:
      "Ship production-ready models, automations, and interfaces that plug directly into your stack.",
    deliverables: ["Secured infrastructure", "Model + agent deployment", "QA + compliance"],
  },
  {
    step: "04",
    title: "Launch & Scale",
    summary:
      "Train teams, monitor performance, and iterate with proactive optimization sprints tied to ROI.",
    deliverables: ["Team enablement", "Performance dashboards", "Continuous improvement cycles"],
  },
];

const sectors = [
  "Professional services",
  "Retail & eCommerce",
  "Healthcare & wellness",
  "Finance & insurance",
  "Hospitality & travel",
  "Manufacturing & logistics",
  "Education & EdTech",
  "Startups & venture-backed",
];

const stats = [
  { value: "85%", label: "Manual workload eliminated on average" },
  { value: "4-6 weeks", label: "From kickoff to first production release" },
  { value: "9.7/10", label: "Client satisfaction score across engagements" },
];

const faqs = [
  {
    question: "How custom are Nexia solutions?",
    answer:
      "Every engagement is built around your stack, data, and workflows. We combine off-the-shelf models, fine-tunes, and bespoke engineering so you own an advantage—not a template.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes. We regularly connect to CRMs, ERPs, marketing suites, bespoke databases, and on-prem systems. We also design APIs or middleware when required.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "We stay embedded with proactive monitoring, optimization sprints, and training. Most partners retain us to keep outcomes compounding as new opportunities emerge.",
  },
  {
    question: "What does engagement look like for smaller teams?",
    answer:
      "We offer focused accelerators that deliver a pilot, website, or automation within a month—including discovery, build, and handover playbooks.",
  },
];

export default function Home() {
  return (
    <div className="relative bg-slate-950 text-slate-100">
      <header className="relative z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-xl text-white shadow-lg shadow-indigo-500/30">
              N
            </span>
            <span className="font-semibold text-white">Nexia</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#solutions">
              Solutions
            </a>
            <a className="transition hover:text-white" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-white" href="#industries">
              Industries
            </a>
            <a className="transition hover:text-white" href="#faq">
              FAQs
            </a>
          </nav>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
          >
            Start a project
            <span className="translate-x-0 transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </header>

      <main className="relative isolate overflow-hidden">
        <div className="grid-glow pointer-events-none absolute inset-0 opacity-70 blur-3xl" />

        <section
          id="hero"
          className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.1fr,0.9fr] lg:px-8 lg:pt-24"
        >
          <div className="relative z-10 space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Done-for-you AI agency
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
                Custom AI ecosystems that scale your entire business—without slowing you down.
              </h1>
              <p className="max-w-xl text-lg text-slate-300">
                Nexia plans, builds, and runs AI automations, machine learning, web experiences, and
                growth intelligence designed around your teams. From voice agents to enterprise
                dashboards, we deliver production-ready systems that make progress inevitable.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:scale-[1.02]"
              >
                Book a strategy session
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-white hover:text-white"
              >
                Explore capabilities
              </a>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 text-sm text-slate-200 shadow-lg shadow-indigo-500/10"
                >
                  <div className="mb-2 text-2xl font-semibold text-white">{stat.value}</div>
                  <p className="text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10">
            <div className="glass relative overflow-hidden rounded-3xl border border-white/10 p-8 shadow-2xl shadow-indigo-500/20">
              <div className="absolute inset-0 opacity-50">
                <div className="grid h-full w-full grid-cols-6 gap-px">
                  {Array.from({ length: 36 }).map((_, index) => (
                    <span key={index} className="block h-16 bg-white/5" />
                  ))}
                </div>
              </div>
              <div className="relative space-y-8">
                <div>
                  <h2 className="text-lg font-semibold text-white">Flight Deck Overview</h2>
                  <p className="mt-2 text-sm text-slate-300">
                    Centralize KPIs across automations, pipelines, campaigns, and operators.
                  </p>
                </div>
                <dl className="grid gap-5 text-sm text-slate-200">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-cyan-200">
                      Live Automations
                    </dt>
                    <dd className="mt-3 flex items-baseline gap-2 text-2xl font-semibold text-white">
                      28
                      <span className="text-xs font-medium text-emerald-300">+3 new this week</span>
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-indigo-200">
                      Customer Sentiment
                    </dt>
                    <dd className="mt-3 flex items-baseline gap-2 text-2xl font-semibold text-white">
                      9.4
                      <span className="text-xs font-medium text-indigo-200">+0.6 WoW</span>
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <dt className="text-xs font-semibold uppercase tracking-wide text-slate-200">
                      Time Saved
                    </dt>
                    <dd className="mt-3 flex items-baseline gap-2 text-2xl font-semibold text-white">
                      1,280h
                      <span className="text-xs font-medium text-cyan-200">quarter to date</span>
                    </dd>
                  </div>
                </dl>
                <div className="rounded-2xl border border-emerald-300/40 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                  <p className="font-semibold">Automation Alert</p>
                  <p className="mt-2 text-xs text-emerald-100/80">
                    New lead-to-CRM sync agent deployed. Monitoring for data drift and scheduling QA
                    review in 24h.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="solutions" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Capabilities
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                Modular services, engineered to plug into any business stage or stack.
              </h2>
            </div>
            <p className="max-w-lg text-sm text-slate-300">
              Combine only what you need or let us run the entire program. Each workstream is led by
              senior strategists, engineers, and creatives who live inside your KPIs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="glass relative flex flex-col gap-6 overflow-hidden rounded-3xl p-8 shadow-xl shadow-indigo-500/10 transition hover:-translate-y-1 hover:shadow-indigo-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10" />
                <div className="relative space-y-3">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-slate-300">{service.description}</p>
                </div>
                <ul className="relative flex flex-wrap gap-2 text-xs text-slate-200">
                  {service.details.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section
          id="approach"
          className="relative border-y border-white/10 bg-slate-900/50 py-24"
        >
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                  How we work
                </p>
                <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
                  Velocity meets governance. Every build is orchestrated for clarity, trust, and ROI.
                </h2>
              </div>
              <div className="max-w-lg space-y-4 text-sm text-slate-300">
                {pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <h3 className="text-base font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-1">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-4">
              {process.map((phase) => (
                <div key={phase.step} className="glass flex flex-col gap-4 rounded-3xl p-6">
                  <span className="text-sm font-semibold text-cyan-200">{phase.step}</span>
                  <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                  <p className="text-sm text-slate-300">{phase.summary}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 text-xs text-slate-200">
                    {phase.deliverables.map((deliverable) => (
                      <li
                        key={deliverable}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-medium"
                      >
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industries" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Industries
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                On-demand expertise across every growth stage.
              </h2>
              <p className="text-sm text-slate-300">
                We pair domain knowledge with accelerators tuned for your sector. That means faster
                discovery, smarter compliance, and outcomes that actually stick.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm text-slate-200 sm:max-w-sm">
                {sectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass h-full rounded-3xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold text-white">Sample engagement mix</h3>
                  <p className="mt-2 text-sm text-slate-300">
                    A retail & ecommerce partner scaling omnichannel support and growth.
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 rounded-full bg-indigo-500/30 text-center text-xs font-semibold leading-6 text-indigo-100">
                      1
                    </span>
                    AI concierge linking web, SMS, and phone support with live agent handoffs.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 rounded-full bg-cyan-500/30 text-center text-xs font-semibold leading-6 text-cyan-100">
                      2
                    </span>
                    Predictive inventory forecasting to stabilize operations and marketing calendars.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-6 w-6 rounded-full bg-emerald-500/30 text-center text-xs font-semibold leading-6 text-emerald-100">
                      3
                    </span>
                    Executive dashboard detailing performance, sentiment, and campaign ROI in real
                    time.
                  </li>
                </ul>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-semibold text-slate-100">Impact</p>
                  <p className="mt-2">
                    68% faster response time, +42% repeat purchase rate, and 700+ hours returned to
                    the CX team in the first quarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative border-y border-white/10 bg-slate-900/40 py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200">
                  Proof points
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  Outcomes that earn executive confidence.
                </h2>
              </div>
              <p className="max-w-lg text-sm text-slate-300">
                Our clients stay because every release lands with measurable value and a clear path
                to scale. Here&apos;s what we track together.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Automation coverage",
                  metric: "78%",
                  description:
                    "Average percentage of target process automated while preserving human oversight.",
                },
                {
                  title: "Conversion lift",
                  metric: "31%",
                  description:
                    "Median increase in qualified pipeline after launching AI-informed experiences.",
                },
                {
                  title: "Data confidence",
                  metric: "99.2%",
                  description:
                    "Data sync accuracy across CRM, analytics, and 3rd-party platforms after go-live.",
                },
              ].map((item) => (
                <div key={item.title} className="glass rounded-3xl p-6">
                  <p className="text-sm font-medium text-cyan-200">{item.title}</p>
                  <p className="mt-4 text-4xl font-semibold text-white">{item.metric}</p>
                  <p className="mt-4 text-sm text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr,1.2fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">FAQs</p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Everything you need to know about partnering with Nexia.
              </h2>
              <p className="text-sm text-slate-300">
                Still weighing options? We built Nexia to merge the rigor of a consultancy with the
                velocity of an embedded product squad.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 text-sm transition duration-200 open:bg-white/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-white">
                    {faq.question}
                    <span className="text-xl transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="relative mx-auto max-w-5xl px-6 pb-32 text-center lg:px-0"
        >
          <div className="glass relative overflow-hidden rounded-[2.5rem] border border-white/10 px-6 py-16 shadow-2xl shadow-indigo-500/20 sm:px-12 md:px-20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-transparent to-cyan-500/20" />
            <div className="relative mx-auto max-w-2xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                Let&apos;s build
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Tell us where you&apos;re headed and we&apos;ll engineer the AI to get you there.
              </h2>
              <p className="text-sm text-slate-200">
                Share your priority initiatives and current stack. We&apos;ll return a tailored
                blueprint and timeline within 48 hours.
              </p>
              <form
                className="grid gap-4 text-left sm:grid-cols-2"
                action="https://formspree.io/f/moqgleqv"
                method="POST"
              >
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-1"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-1"
                  type="email"
                  name="email"
                  placeholder="Work email"
                  required
                />
                <input
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-2"
                  type="text"
                  name="company"
                  placeholder="Company"
                />
                <textarea
                  className="h-32 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 sm:col-span-2"
                  name="brief"
                  placeholder="How can we help? Share goals, timelines, or current tools."
                  required
                />
                <button
                  type="submit"
                  className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/40 transition hover:scale-[1.02]"
                >
                  Request blueprint
                </button>
              </form>
              <p className="text-xs text-slate-400">
                Prefer email? Reach us at{" "}
                <a className="text-cyan-200 underline" href="mailto:hello@nexia.ai">
                  hello@nexia.ai
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 text-sm font-semibold text-white">
              N
            </span>
            <span className="font-semibold text-slate-100">Nexia</span>
          </div>
          <p className="max-w-2xl">
            Strategic AI, automation, and digital product partners for leaders who expect clarity,
            speed, and measurable results.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <a className="transition hover:text-white" href="#solutions">
              Solutions
            </a>
            <a className="transition hover:text-white" href="#approach">
              Approach
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Nexia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
