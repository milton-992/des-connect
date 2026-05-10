export default function AcademyPage() {
  const scoutModules = [
    {
      number: "01",
      title: "DES Scouting Standards",
      text: "Understand what DES expects from scouts, how we protect the brand, and what type of players we look for.",
    },
    {
      number: "02",
      title: "Player Evaluation",
      text: "Learn how to assess technical, tactical, physical, mental, and professional qualities in a player.",
    },
    {
      number: "03",
      title: "Match Reporting",
      text: "Learn how to structure a DES scouting report, avoid exaggeration, and support opinions with evidence.",
    },
    {
      number: "04",
      title: "Ethics & Professional Conduct",
      text: "Understand what scouts can and cannot say to players, families, clubs, and other football contacts.",
    },
    {
      number: "05",
      title: "Final Scout Test",
      text: "Complete a short test before DES reviews your application and decides your scouting status.",
    },
  ];

  const staffModules = [
    {
      number: "01",
      title: "DES Code of Conduct",
      text: "Understand how DES staff and volunteers must behave at events, trials, meetings, and online.",
    },
    {
      number: "02",
      title: "Event-Day Behaviour",
      text: "Learn how to support registrations, lanyards, player movement, club guests, and access control.",
    },
    {
      number: "03",
      title: "Confidentiality",
      text: "Understand why player details, club conversations, and internal plans must stay private.",
    },
    {
      number: "04",
      title: "Safety & Access Levels",
      text: "Learn how DES uses QR IDs, lanyards, and role-based access to protect event organisation.",
    },
    {
      number: "05",
      title: "Final Staff Test",
      text: "Complete a short staff test before your DES staff ID and event permissions are activated.",
    },
  ];

  const academyFlow = [
    "Apply through DES registration",
    "Complete the correct training path",
    "Pass the final test",
    "DES admin reviews your result",
    "QR ID and profile status activated",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(180,20,20,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_30%),linear-gradient(180deg,#050505,#000)]" />

      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-4">
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-yellow-400/40 bg-black p-2 shadow-[0_0_30px_rgba(234,179,8,0.18)]">
              <img
                src="/des-logo.png"
                alt="Draft Elite Sport logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-xl font-black tracking-[0.28em]">DES</p>
              <p className="text-xs uppercase tracking-[0.32em] text-yellow-400">
                Draft Elite Sport
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Login
            </a>

            <a
              href="/register"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🎓 DES Academy
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Training before{" "}
            <span className="text-yellow-400">representation.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            DES Academy prepares scouts, staff, and volunteers before they
            represent Draft Elite Sport. Applicants learn DES standards,
            complete training, pass a test, and wait for admin approval before
            their DES ID becomes active.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/register/scout"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Apply as Scout →
            </a>

            <a
              href="/register/staff"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Apply as Staff →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Academy Flow
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Apply. Learn. Test. Review. Activate.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES Academy is not just a course. It is a control system that
                protects the organisation and makes sure scouts and staff
                understand how to behave before they represent DES.
              </p>
            </div>

            <div className="space-y-3">
              {academyFlow.map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/35 p-4"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-yellow-500 text-sm font-black text-black">
                    {index + 1}
                  </div>

                  <p className="font-semibold text-white/85">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Scout Course
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              DES Scout Academy.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            For people applying to become DES scouts. This path teaches scouting
            discipline, player evaluation, reporting standards, and ethics.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {scoutModules.map((module) => (
            <ModuleCard key={module.number} module={module} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Staff Course
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              DES Staff & Volunteer Training.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            For DES team members, volunteers, and event-day workers. This path
            protects event professionalism, access control, and confidentiality.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {staffModules.map((module) => (
            <ModuleCard key={module.number} module={module} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Future Academy System
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Later, this becomes a real training dashboard.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                For now, this is the visual academy page. Later with Supabase,
                DES can track who started training, who completed modules, who
                passed the test, and whose QR ID can be activated.
              </p>
            </div>

            <div className="grid gap-4">
              <FeatureRow title="Course progress" text="Track completed lessons." />
              <FeatureRow title="Final tests" text="Store scores and pass/fail status." />
              <FeatureRow title="Admin approval" text="Leadership reviews applicants." />
              <FeatureRow title="Profile badges" text="Show academy status on DES profiles." />
              <FeatureRow title="QR activation" text="Activate ID only after approval." />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Ready to apply?
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Join DES the professional way.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Scouts and staff should not represent DES without training,
                testing, and approval. This protects the brand, the players, the
                clubs, and the event environment.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Choose your pathway</h3>

              <p className="mt-3 text-white/60">
                Apply first, then DES will decide if academy training or review
                is required before approval.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="/register/scout"
                  className="block w-full rounded-full bg-yellow-500 px-6 py-4 text-center text-base font-black text-black hover:bg-yellow-400"
                >
                  Apply as Scout →
                </a>

                <a
                  href="/register/staff"
                  className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white hover:bg-white/10"
                >
                  Apply as Staff / Volunteer →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Academy.
      </footer>
    </main>
  );
}

function ModuleCard({ module }) {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]">
      <div className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-black text-yellow-400">
        Module {module.number}
      </div>

      <h3 className="text-xl font-black">{module.title}</h3>

      <p className="mt-3 text-sm leading-6 text-white/60">{module.text}</p>
    </div>
  );
}

function FeatureRow({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="font-black text-white">✅ {title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}