export default function ClubsPage() {
  const clubBenefits = [
    {
      title: "Verified DES Profiles",
      icon: "🪪",
      text: "Clubs can review structured player and coach profiles with role, status, video links, football information, and DES approval status.",
    },
    {
      title: "Faster Recruitment Shortlist",
      icon: "⚡",
      text: "DES can help clubs filter players by position, age, market, availability, and football profile before trials or meetings.",
    },
    {
      title: "Trial & Showcase Support",
      icon: "🏟️",
      text: "DES events can support clubs by presenting selected players in organised trial or showcase environments.",
    },
    {
      title: "QR Identity Access",
      icon: "▦",
      text: "Scannable QR profiles make it easier for clubs to access player, coach, scout, and DES staff information quickly.",
    },
  ];

  const clubNeeds = [
    "Right winger, U23, available for trial",
    "Striker, free agent, strong physical profile",
    "Goalkeeper, academy background, ready for senior football",
    "Coach looking for UAE / Portugal project",
    "Players for showcase or private assessment",
    "Scouting support in Portugal, Angola, UAE, or UK",
  ];

  const process = [
    "Club submits recruitment need",
    "DES reviews the role, level, and market",
    "DES shortlists suitable profiles",
    "Club receives verified DES profiles",
    "Trial, meeting, or showcase is arranged",
    "DES supports communication and next steps",
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

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🏟️ For Clubs & Football Partners
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Find verified talent through{" "}
            <span className="text-yellow-400">DES Connect.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES helps clubs, coaches, sports directors, and football partners
            access structured player and coach profiles, scouting support, trial
            opportunities, and verified digital identity.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#club-request"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Submit Club Request →
            </a>

            <a
              href="/events"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              View DES Events
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-[#111]/95 p-6 shadow-2xl md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Example Club Need
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Right winger, U23, available for trial.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              A club can submit a specific recruitment need. DES can then
              shortlist verified profiles, check player availability, prepare
              football information, and support the next step.
            </p>

            <div className="mt-6 grid gap-3">
              <InfoLine label="Position" value="Right Winger" />
              <InfoLine label="Age Group" value="U23" />
              <InfoLine label="Market" value="Portugal / UAE / UK" />
              <InfoLine label="Status" value="Trial-ready shortlist" />
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">DES Advantage</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Instead of sending random names, DES aims to provide structured,
                verified, and professional football profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Club Benefits
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built to support football decisions.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            DES is designed to make player and coach discovery more organised,
            more professional, and easier to verify.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {clubBenefits.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Recruitment Process
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                From club need to verified shortlist.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES can help clubs clarify what they need, review available
                talent, and organise the next step with a professional process.
              </p>
            </div>

            <div className="space-y-3">
              {process.map((step, index) => (
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
              Example Requests
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              What clubs can ask DES for.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            Clubs can submit specific football needs. DES can then match those
            needs against its network and profile database.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {clubNeeds.map((need) => (
            <div
              key={need}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="font-semibold text-white/85">✅ {need}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="club-request" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Club Request Form
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Tell DES what your club needs.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                This form is visual for now. Later, once Supabase is connected,
                club requests can be saved in the DES database and reviewed by
                the admin team.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                <p className="font-black text-yellow-400">
                  Future feature
                </p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Clubs will later be able to submit position needs, budget
                  range, player age, market preference, and trial deadlines.
                </p>
              </div>
            </div>

            <form className="grid gap-5">
              <InputField label="Club Name" placeholder="Example: Palm City FC" />
              <InputField label="Contact Person" placeholder="Name and role" />
              <InputField label="Email Address" type="email" placeholder="club@email.com" />
              <InputField label="Country / Market" placeholder="Example: UAE / Portugal / UK" />
              <InputField label="Position Needed" placeholder="Example: Right winger" />
              <InputField label="Age Range" placeholder="Example: U23 / Senior / U19" />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Request Details
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell DES what type of player, coach, or support your club is looking for."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                />
              </div>

              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Club Request →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Work with DES
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                A private football network for serious opportunities.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                DES aims to support clubs with structured profiles, realistic
                recruitment conversations, and professional football operations.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Next step</h3>

              <p className="mt-3 text-white/60">
                Submit a club request or explore DES events and verified
                identity pages.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="#club-request"
                  className="block w-full rounded-full bg-yellow-500 px-6 py-4 text-center text-base font-black text-black hover:bg-yellow-400"
                >
                  Submit Club Request →
                </a>

                <a
                  href="/events"
                  className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white hover:bg-white/10"
                >
                  View DES Events →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. Clubs & Partners.
      </footer>
    </main>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 p-3">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="text-sm font-bold text-white/85">{value}</p>
    </div>
  );
}

function InputField({ label, placeholder = "", type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
      />
    </div>
  );
}