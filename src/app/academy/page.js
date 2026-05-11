export default function AcademyPage() {
  const academyCards = [
    {
      title: "Study Materials",
      icon: "📚",
      text: "Access DES learning modules covering scouting methodology, player evaluation, report writing, ethics, and event-day standards.",
      link: "/academy/materials",
      button: "Open Materials →",
    },
    {
      title: "Certificates",
      icon: "🏆",
      text: "Preview how DES Academy certificates will work after course completion, admin approval, QR verification, and PDF download.",
      link: "/academy/certificates",
      button: "View Certificates →",
    },
    {
      title: "Scout Training",
      icon: "🔎",
      text: "Future training path for DES scouts to learn how to evaluate players properly and submit structured football reports.",
      link: "/academy/materials/scouting-methodology",
      button: "Start Module →",
    },
    {
      title: "Staff Standards",
      icon: "🪪",
      text: "Future standards for DES staff, volunteers, and event workers before receiving active DES ID access.",
      link: "#academy-flow",
      button: "View Flow →",
    },
  ];

  const academyFlow = [
    "Apply to join DES",
    "Read DES study materials",
    "Complete Academy learning",
    "Take DES assessment",
    "Admin reviews result",
    "Certificate is issued",
    "QR ID / profile access can be activated",
  ];

  const standards = [
    "No false promises to players, families, clubs, or partners",
    "Reports must be honest, realistic, and evidence-based",
    "DES representatives must protect the brand at all times",
    "Confidential information must not be shared without permission",
    "Approved users may receive certificates and verified DES ID access",
    "DES leadership can suspend access if standards are broken",
  ];

  const futureFeatures = [
    {
      title: "Real course progress",
      text: "Users will see which Academy modules they completed.",
    },
    {
      title: "Online tests",
      text: "Scout and staff applicants can complete internal DES tests.",
    },
    {
      title: "Admin approval",
      text: "Founder / Super Admin can approve or reject Academy completion.",
    },
    {
      title: "Certificate download",
      text: "Passed users can view and download certificates from their profile.",
    },
    {
      title: "QR verification",
      text: "Certificates can be verified through the official DES website.",
    },
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
              href="/academy/materials"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Materials
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

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            🎓 DES Academy
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Train before you{" "}
            <span className="text-yellow-400">represent DES.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES Academy is the learning and standards area for scouts, staff,
            volunteers, and future DES representatives. It helps protect the
            organisation by teaching the DES methodology before anyone receives
            active profile access or certification.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
            The Academy will later connect study materials, online tests, admin
            approval, certificates, QR verification, and user profiles into one
            professional learning system.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/academy/materials"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Open Study Materials →
            </a>

            <a
              href="/academy/certificates"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              View Certificates
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]/95 shadow-2xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                    Academy Control
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Learning + Approval + Certificate
                  </h2>
                </div>

                <div className="grid h-16 w-16 place-items-center rounded-2xl border border-yellow-400/30 bg-black p-2">
                  <img
                    src="/des-logo.png"
                    alt="Draft Elite Sport logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8">
              <div className="rounded-3xl border border-white/10 bg-black/50 p-6">
                <div className="grid gap-4">
                  <PreviewRow
                    title="Study"
                    text="Users read DES learning material and understand standards."
                    icon="📚"
                  />
                  <PreviewRow
                    title="Assessment"
                    text="Users complete DES tests before approval."
                    icon="📝"
                  />
                  <PreviewRow
                    title="Admin Review"
                    text="DES leadership reviews results and controls access."
                    icon="🛡️"
                  />
                  <PreviewRow
                    title="Certificate"
                    text="Passed users can receive verified DES certificates."
                    icon="🏆"
                  />
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="font-black text-yellow-400">
                    Professional Academy Layer
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    This section makes DES more than a registration website. It
                    gives the organisation training, control, certification, and
                    credibility.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="/academy/materials"
                  className="rounded-full bg-yellow-500 px-6 py-4 text-center font-black text-black hover:bg-yellow-400"
                >
                  Study Materials →
                </a>

                <a
                  href="/academy/certificates"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center font-bold text-white hover:bg-white/10"
                >
                  Certificates →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Academy Areas
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built for learning, approval, and verification.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            DES Academy gives scouts and staff a clear pathway before they
            represent the organisation publicly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {academyCards.map((card) => (
            <a
              key={card.title}
              href={card.link}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                {card.icon}
              </div>

              <h3 className="text-xl font-black">{card.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {card.text}
              </p>

              <p className="mt-5 font-black text-yellow-400">{card.button}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="academy-flow" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Academy Flow
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                From application to certificate.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                The future DES Academy flow will help users study, complete
                tests, receive admin review, and unlock certificates or verified
                profile access.
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

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
            DES Standards
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Training protects the brand.
          </h2>

          <p className="mt-5 text-white/65 leading-7">
            DES Academy is not just a course. It is a control system that helps
            prevent poor behaviour, false promises, weak scouting reports, and
            unprofessional representation.
          </p>
        </div>

        <div className="grid gap-3">
          {standards.map((standard) => (
            <div
              key={standard}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="text-sm font-semibold leading-6 text-white/75">
                ✅ {standard}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Future Backend
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Supabase will make Academy real.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Right now this is a professional front-end preview. Later,
                Supabase will store users, module progress, test results,
                certificate status, PDF files, and admin decisions.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/academy/materials"
                  className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
                >
                  Open Materials →
                </a>

                <a
                  href="/academy/certificates"
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
                >
                  Open Certificates
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              {futureFeatures.map((feature) => (
                <FutureFeature
                  key={feature.title}
                  title={feature.title}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Next Academy Build
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Build the course, then certify the people.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                DES Academy now has the structure for study materials,
                certificates, and a future profile-based download system.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Current Academy Status</h3>

              <div className="mt-6 grid gap-3">
                <StatusRow label="Study Materials" value="Created" />
                <StatusRow label="Scouting Methodology" value="Live" />
                <StatusRow label="Certificates Preview" value="Created" />
                <StatusRow label="Download System" value="After Supabase" />
              </div>

              <a
                href="/academy/materials/scouting-methodology"
                className="mt-7 block rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Open First Lesson →
              </a>
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

function PreviewRow({ icon, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start gap-4">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-yellow-500/15 text-2xl">
          {icon}
        </div>
        <div>
          <h3 className="font-black text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
        </div>
      </div>
    </div>
  );
}

function FutureFeature({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="font-black text-white">✅ {title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}

function StatusRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="text-sm font-bold text-yellow-400">{value}</p>
    </div>
  );
}