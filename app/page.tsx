const services = [
  {
    title: "Custom Website Engineering",
    copy: "From strategy to launch, we design and ship pixel-perfect experiences tailored to your brand voice.",
  },
  {
    title: "Lightning Fast Performance",
    copy: "Built with bleeding-edge frameworks, CDNs, and caching layers so your users never wait.",
  },
  {
    title: "Conversion Labs",
    copy: "We test, learn, and iterate relentlessly until your website becomes your top-performing salesperson.",
  },
];

const process = [
  "Vision Mapping & UX storytelling",
  "High-fidelity prototyping with live previews",
  "Full-stack development with automated QA",
  "Growth analytics and on-going optimization",
];

const caseStudies = [
  { label: "SaaS Platform", metric: "212% lift", detail: "in product signups after launch" },
  { label: "Luxury Retail", metric: "4.9s faster", detail: "time-to-interaction on mobile" },
  { label: "Health Tech", metric: "37% lower", detail: "bounce rate within 3 weeks" },
];

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_50%)]" />
      </div>

      <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col gap-16 px-4 py-12 lg:px-8 lg:py-20">
        <nav className="flex items-center justify-between rounded-3xl border border-white/10 bg-black/40 px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.6)] backdrop-blur">
          <div className="flex items-center gap-3">
            <span className="h-9 w-9 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-[0_0_25px_rgba(94,234,212,0.7)]" />
            <p className="text-base font-semibold tracking-wide text-white">Stemorbit</p>
          </div>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {["Work", "Services", "Process", "Insights"].map((item) => (
              <button key={item} className="transition hover:text-white">
                {item}
              </button>
            ))}
          </div>
          <button className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/80 shadow-[0_0_25px_rgba(148,163,184,0.45)] transition hover:border-white hover:text-white">
            Book a call
          </button>
        </nav>

        <header className="grid gap-10 pt-4 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Stemorbit
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
              We develop the web&apos;s boldest experiences.
              <span className="bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                {" "}
                The best websites begin here.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-zinc-300 lg:mx-0">
              We are a dark-mode obsessed team of designers, engineers, and growth strategists.
              Every pixel, line of code, and micro-interaction is crafted to convert and feel effortless.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <button className="group relative overflow-hidden rounded-full bg-white/10 px-8 py-3 text-base font-medium text-white transition hover:bg-white/20">
                <span className="relative z-10">Start a project</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 opacity-0 transition group-hover:opacity-100" />
              </button>
              <button className="rounded-full border border-white/20 px-8 py-3 text-base font-medium text-white/80 transition hover:border-white/40 hover:text-white">
                See how we build
              </button>
            </div>
          </div>

          <div
            className="relative mx-auto flex h-96 w-full max-w-md items-center justify-center"
            style={{ perspective: "1400px" }}
          >
            <div className="absolute inset-0 rounded-[40px] border border-white/5 bg-gradient-to-b from-white/10 to-white/0 blur-3xl" />
            <div
              className="relative h-72 w-72"
              style={{ transformStyle: "preserve-3d", animation: "heroCube 24s ease-in-out infinite" }}
            >
              {[0, 1, 2].map((idx) => (
                <div
                  key={idx}
                  className="absolute inset-0 rounded-[30px] border border-white/10 bg-gradient-to-br from-purple-500/45 via-cyan-400/30 to-sky-500/40 shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
                  style={{
                    transform: `rotateX(${18 + idx * 5}deg) rotateY(${idx * 14}deg) translateZ(${idx * 46}px)`,
                    animation: `heroFloat${idx} 9s ease-in-out infinite`,
                  }}
                >
                  <div className="flex h-full flex-col justify-between p-6 text-white">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                        Live build {idx + 1}
                      </div>
                      <span className="rounded-full bg-black/30 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                        Realtime
                      </span>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                        T+{(idx + 1) * 3} mins
                      </p>
                      <p className="mt-2 text-3xl font-semibold">
                        Conversion {idx === 0 ? "Launchpad" : idx === 1 ? "Velocity" : "Canvas"}
                      </p>
                    </div>
                    <p className="text-sm text-white/70">
                      Adaptive layout, fluid motion, and hyper-optimized interactions tested across viewports.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-8 shadow-[0_40px_80px_rgba(0,0,0,0.4)] backdrop-blur">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white/80">Why we&apos;re trusted</h2>
              <span className="text-sm uppercase tracking-[0.2em] text-purple-300">Active builds</span>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {caseStudies.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-white/30"
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-white/50">{item.label}</p>
                  <p className="mt-3 text-3xl font-semibold text-white">{item.metric}</p>
                  <p className="text-sm text-white/60">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-purple-600/30 to-transparent p-6 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Average timeline</p>
            <p className="mt-3 text-5xl font-semibold text-white">6 weeks</p>
            <p className="mt-2 text-sm text-white/70">from kickoff to launch-ready, including QA and growth setup</p>
            <div className="mt-8 flex items-center gap-3 text-green-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-300" />
              We&apos;re currently booking January builds.
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/5 bg-white/5 p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white/80">Our craft pillars</h3>
            <div className="mt-6 space-y-6">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                  <p className="mt-2 text-sm text-white/70">{service.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-gradient-to-b from-cyan-500/20 to-transparent p-8 backdrop-blur">
            <h3 className="text-lg font-semibold text-white/80">How we build the best</h3>
            <ul className="mt-6 space-y-4 text-sm text-white/70">
              {process.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-3xl border border-white/5 bg-white/5 p-8 text-center shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Let&apos;s build</p>
          <h3 className="mt-4 text-3xl font-semibold text-white">
            Ready for the website your brand deserves?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            We partner with ambitious founders, creative teams, and marketing leaders to ship world-class digital experiences.
            The internet remembers iconic builds — let&apos;s craft yours.
          </p>
          <div className="mt-8 flex flex-col gap-4 justify-center sm:flex-row">
            <button className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition hover:bg-white/90">
              Claim a strategy call
            </button>
            <button className="rounded-full border border-white/30 px-8 py-3 text-base font-semibold text-white/80 transition hover:border-white hover:text-white">
              Download capabilities
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
