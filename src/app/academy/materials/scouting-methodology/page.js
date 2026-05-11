export default function ScoutingMethodologyPage() {
  const principles = [
    {
      title: "Evidence before opinion",
      text: "A DES scout should never write a report based only on feeling. Every opinion must be supported by match actions, repeated behaviours, or clear football evidence.",
    },
    {
      title: "Consistency matters",
      text: "One good action does not make a player elite. DES scouts must look for repeated quality across different moments, opponents, and levels of pressure.",
    },
    {
      title: "Context is everything",
      text: "The level of competition, team style, physical maturity, opposition strength, and player role must always be considered before making a judgement.",
    },
    {
      title: "Potential is not hype",
      text: "Potential means visible qualities that can realistically develop. DES does not exaggerate players just because they are fast, technical, or confident.",
    },
  ];

  const evaluationAreas = [
    {
      title: "Technical",
      items: [
        "First touch and ball control",
        "Passing range and accuracy",
        "Dribbling and 1v1 ability",
        "Finishing or crossing quality",
        "Weak foot usage",
      ],
    },
    {
      title: "Tactical",
      items: [
        "Positioning and decision-making",
        "Understanding of role",
        "Movement without the ball",
        "Defensive awareness",
        "Game intelligence",
      ],
    },
    {
      title: "Physical",
      items: [
        "Speed and acceleration",
        "Agility and balance",
        "Strength and duels",
        "Stamina and repeat actions",
        "Injury resilience where known",
      ],
    },
    {
      title: "Mentality",
      items: [
        "Work rate",
        "Confidence under pressure",
        "Reaction after mistakes",
        "Discipline and attitude",
        "Coachability",
      ],
    },
    {
      title: "Professional",
      items: [
        "Punctuality",
        "Communication",
        "Respect for staff and teammates",
        "Lifestyle and commitment",
        "Long-term seriousness",
      ],
    },
  ];

  const reportRules = [
    "Do not promise trials, contracts, visas, salaries, or transfers.",
    "Do not exaggerate a player’s level to impress clubs or families.",
    "Do not copy online statistics without verifying context.",
    "Do not submit a report without watching enough football evidence.",
    "Do not write emotional reports based on friendship, nationality, or personal preference.",
    "Do not contact clubs pretending a player is approved if DES has not approved the profile.",
  ];

  const scoutingFlow = [
    "Identify player",
    "Watch live or video evidence",
    "Record key match actions",
    "Assess technical, tactical, physical, mental, and professional qualities",
    "Write structured DES report",
    "Submit to DES review",
    "Admin decides whether the player becomes DES tracked / approved",
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
              href="/academy"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Academy
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            📚 DES Study Material · Module 01
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            DES Scouting{" "}
            <span className="text-yellow-400">Methodology.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            This module explains how DES scouts should evaluate football
            players, write reports, avoid bias, protect the brand, and support
            player recommendations with real evidence.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/academy/materials"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Back to Study Materials →
            </a>

            <a
              href="/academy/certificates"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Certificates →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Purpose
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            DES scouts must be honest, structured, and evidence-based.
          </h2>

          <p className="mt-6 max-w-4xl text-white/65 leading-8">
            The purpose of DES scouting is not to hype players. The purpose is
            to identify realistic football potential, understand player
            profiles, protect clubs from poor information, and give players a
            fair professional evaluation. A DES scout must be able to explain
            why a player is interesting, what level they may fit, what risks
            exist, and what evidence supports the recommendation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Core Principles
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              The DES scouting mindset.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            These principles guide every DES scout report and every player
            recommendation.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                Principle
              </div>

              <h3 className="text-xl font-black">{principle.title}</h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Evaluation Framework
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Five areas every DES scout must understand.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES evaluates players across technical, tactical, physical,
                mentality, and professional standards. A player can be strong in
                one area but still not ready if other areas are weak.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {evaluationAreas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="text-xl font-black text-yellow-400">
                    {area.title}
                  </h3>

                  <div className="mt-4 grid gap-3">
                    {area.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-black/35 p-3 text-sm font-semibold text-white/75"
                      >
                        ✅ {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
              Important Rules
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              What DES scouts must never do.
            </h2>

            <p className="mt-5 text-white/65 leading-7">
              These rules protect the player, the club, and the DES reputation.
              Breaking these standards can lead to removal from the DES network.
            </p>
          </div>

          <div className="grid gap-3">
            {reportRules.map((rule) => (
              <div
                key={rule}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-sm font-semibold leading-6 text-white/75">
                  ⚠️ {rule}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Scouting Flow
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                From player discovery to DES review.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                A player should only be recommended after a structured process.
                DES protects its standards by reviewing reports before a player
                becomes tracked, approved, or presented.
              </p>
            </div>

            <div className="space-y-3">
              {scoutingFlow.map((step, index) => (
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
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Final DES Standard
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            A good DES report should be clear enough for a football decision.
          </h2>

          <p className="mt-6 max-w-4xl text-white/65 leading-8">
            The final report should help DES decide if a player deserves more
            attention, should be monitored, should be invited to a trial, or
            should not be progressed. The report must be honest, realistic, and
            useful. A DES scout does not need to prove every player is special.
            A DES scout needs to protect the truth.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <FinalCard title="Clear" text="Easy to understand and structured." />
            <FinalCard title="Honest" text="No hype, no false promises." />
            <FinalCard title="Useful" text="Helps DES make decisions." />
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/academy/materials"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Back to Materials →
            </a>

            <a
              href="/academy"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Back to Academy
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Scouting Methodology.
      </footer>
    </main>
  );
}

function FinalCard({ title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <p className="text-2xl font-black text-yellow-400">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}