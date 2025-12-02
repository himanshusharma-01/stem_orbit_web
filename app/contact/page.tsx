import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />

      <main className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-4 py-16 lg:px-8">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-white/0 px-6 py-4 shadow-[0_25px_80px_rgba(6,6,18,0.65)] backdrop-blur-2xl backdrop-saturate-200">
          <Link href="/" className="text-base font-semibold tracking-wide text-white">
            Stemorbit
          </Link>
          <Link href="/" className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white">
            Back to home
          </Link>
        </nav>

        <section className="grid gap-10 rounded-[32px] border border-white/5 bg-black/30 p-8 shadow-[0_45px_120px_rgba(0,0,0,0.6)] backdrop-blur lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Contact us</p>
            <h1 className="text-4xl font-semibold leading-tight text-white">Let&apos;s plan your next launch.</h1>
            <p className="text-base text-white/70">
              Tell us about your product, timeline, and the outcomes you&apos;re chasing. We respond within one business day with
              a tailored plan or a quick call invite.
            </p>

            <form className="space-y-6">
              {[
                { label: "Full name", name: "name", type: "text", placeholder: "Alex Rivera" },
                { label: "Email", name: "email", type: "email", placeholder: "alex@brand.com" },
                { label: "Company", name: "company", type: "text", placeholder: "Orbit Labs" },
              ].map((field) => (
                <div key={field.name} className="space-y-2">
                  <label htmlFor={field.name} className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-white/40"
                  />
                </div>
              ))}

              <div className="space-y-2">
                <label htmlFor="project" className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                  Project details
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={4}
                  placeholder="We&apos;re replatforming our marketing site and need a partner for design + build..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/40 focus:border-white/40"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-white/90 px-6 py-3 text-base font-semibold text-black transition hover:bg-white"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="space-y-6 rounded-[28px] border border-white/5 bg-gradient-to-b from-purple-600/20 to-transparent p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Direct line</p>
              <p className="mt-2 text-2xl font-semibold text-white">hello@stemorbit.studio</p>
              <p className="text-sm text-white/60">Average reply time · 4 hrs</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">HQ</p>
              <p className="text-sm text-white/70">
                45 Curtain Road
                <br />
                London EC2A 3PT
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Engagement types</p>
              <ul className="space-y-3 text-sm text-white/70">
                <li>• Product marketing sites</li>
                <li>• Headless commerce builds</li>
                <li>• Growth + experimentation retainers</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">Upcoming availability</p>
              <p className="mt-3 text-4xl font-semibold text-white">Jan 20</p>
              <p className="text-sm text-white/60">Kickoff slots remaining: 2</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

