export default function StudyMaterialsPage() {
  const modules = [
    {
      title: "DES Scouting Methodology",
      level: "Core",
      link: "/academy/materials/scouting-methodology",
      status: "Open material →",
      text: "The foundation of how DES evaluates players, scouts talent, protects standards, and builds professional reports.",
      topics: [
        "DES scouting principles",
        "What makes a player worth following",
        "Avoiding emotional or biased reports",
        "How to support opinions with evidence",
      ],
    },
    {
      title: "Player Evaluation Criteria",
      level: "Core",
      link: "#",
      status: "Coming soon",
      text: "A structured way to assess technical, tactical, physical, mental, and professional qualities in football players.",
      topics: [
        "Technical ability",
        "Tactical understanding",
        "Physical profile",
        "Mentality and professionalism",
      ],
    },
    {
      title: "Position-Specific Scouting",
      level: "Intermediate",
      link: "#",
      status: "Coming soon",
      text: "Different positions require different evaluation standards. A winger, centre-back, goalkeeper, and striker should not be judged the same way.",
      topics: [
        "Goalkeeper indicators",
        "Defensive roles",
        "Midfield profiles",
        "Attacking profiles",
      ],
    },
    {
      title: "Match Report Writing",
      level: "Core",
      link: "#",
      status: "Coming soon",
      text: "Learn how to write a DES-style scouting report that is clear, honest, useful, and professional.",
      topics: [
        "Report structure",
        "Strengths and weaknesses",
        "Player comparison notes",
        "Final recommendation",
      ],
    },
    {
      title: "Ethics & Conduct",
      level: "Mandatory",
      link: "#",
      status: "Coming soon",
      text: "DES scouts and staff must understand how to behave with players, families, clubs, coaches, and partners.",
      topics: [
        "No false promises",
        "Confidentiality",
        "Respectful communication",
        "Protecting the DES brand",
      ],
    },
    {
      title: "Event-Day Standards",
      level: "Staff",
      link: "#",
      status: "Coming soon",
      text: "Guidance for DES trials, showcases, check-ins, lanyards, QR verification, and staff behaviour.",
      topics: [
        "Registration flow",
        "QR verification",
        "Access control",
        "Professional presentation",
      ],
    },
  ];

  const learningPath = [
    "Read DES core standards",
    "Study player evaluation criteria",
    "Complete position-specific learning",
    "Review match report examples",
    "Pass the DES Academy test",
    "Wait for admin approval",
    "Receive certificate and QR verification",
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
              <p className="text-xl font-black tracking-[0.28em] text-white">
                DES
              </p>
              <p className="text-xs uppercase tracking-[0.32em] text-yellow-400">
                Draft Elite Sport
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/academy"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Academy
            </a>

            <a
              href="/academy/certificates"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Certificates
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            📚 DES Academy Study Materials
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Learn the DES{" "}
            <span className="text-yellow-400">standard.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            DES Study Materials prepare scouts, staff, and volunteers before
            they represent Draft Elite Sport. These materials define how DES
            evaluates players, protects professionalism, and controls access.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/academy"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Back to Academy →
            </a>

            <a
              href="/academy/certificates"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              View Certificates →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Learning Path
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                From study material to certificate.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                The future DES Academy flow will allow people to study, take a
                test, get reviewed by admin, and receive a verified certificate
                in their profile.
              </p>
            </div>

            <div className="space-y-3">
              {learningPath.map((step, index) => (
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
              Study Modules
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              DES learning library.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            These modules are the first structure for the future DES course.
            Later, Supabase will track progress and test completion.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                {module.level}
              </div>

              <h3 className="text-2xl font-black">{module.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {module.text}
              </p>

              <div className="mt-6 grid gap-3">
                {module.topics.map((topic) => (
                  <div
                    key={topic}
                    className="rounded-2xl border border-white/10 bg-black/35 p-3 text-sm font-semibold text-white/75"
                  >
                    ✅ {topic}
                  </div>
                ))}
              </div>

              <a
                href={module.link}
                className={`mt-7 block w-full rounded-full px-6 py-4 text-center font-bold ${
                  module.link === "#"
                    ? "border border-white/10 bg-white/[0.03] text-white/45"
                    : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {module.status}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Future Course System
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Later, this becomes a real learning portal.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Once Supabase is connected, DES can track which modules a user
                has read, which test they passed, when admin approved them, and
                which certificate they earned.
              </p>
            </div>

            <div className="grid gap-4">
              <FeatureRow
                title="Progress tracking"
                text="Users can see what material they have completed."
              />
              <FeatureRow
                title="Final tests"
                text="Scout and staff tests can be connected to the Academy."
              />
              <FeatureRow
                title="Certificate unlock"
                text="Passing users can receive certificates in their profile."
              />
              <FeatureRow
                title="Admin review"
                text="DES leadership can approve or reject Academy completion."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Study Materials.
      </footer>
    </main>
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