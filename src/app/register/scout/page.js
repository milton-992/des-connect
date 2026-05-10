export default function ScoutApplicationPage() {
  const footballLevels = [
    "Youth / grassroots football",
    "Academy football",
    "Semi-professional football",
    "Professional football",
    "International youth football",
    "Mixed levels",
  ];

  const scoutExperience = [
    "No formal scouting experience yet",
    "Informal player recommendations",
    "Grassroots scouting",
    "Academy scouting",
    "Club scouting experience",
    "Agency / recruitment experience",
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

          <a
            href="/register"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Back to Register
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🔎 DES Scout Application
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Apply to become a{" "}
            <span className="text-yellow-400">DES scout.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES scouts help identify, evaluate, and recommend players with real
            potential. Every scout must be reviewed, trained, tested, and
            approved before representing DES.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Personal Details
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Basic scout information
              </h2>
              <p className="mt-3 text-white/60">
                DES needs to know who you are, where you operate, and how you
                can support the scouting network.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField label="Full Name" placeholder="Example: Carlos Santos" />
              <InputField label="Nationality" placeholder="Example: Angola" />
              <InputField
                label="Current Country"
                placeholder="Example: Angola / Portugal / UAE"
              />
              <InputField
                label="City / Region"
                placeholder="Example: Luanda / Lisbon / Dubai"
              />
              <InputField
                label="Languages Spoken"
                placeholder="Example: Portuguese, English, Arabic"
              />
              <InputField
                label="Current Football Connection"
                placeholder="Example: Club staff, coach, ex-player, independent scout"
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Scouting Experience
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {scoutExperience.map((experience) => (
                    <option key={experience}>{experience}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Main Football Level Watched
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {footballLevels.map((level) => (
                    <option key={level}>{level}</option>
                  ))}
                </select>
              </div>

              <InputField
                label="Preferred Scouting Country / Market"
                placeholder="Example: Angola, Portugal, UAE"
              />
              <InputField
                label="Preferred Age Group"
                placeholder="Example: U17, U19, U23, senior"
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Football Knowledge
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Your scouting background
              </h2>
              <p className="mt-3 text-white/60">
                Tell DES how you find players, what you look for, and what kind
                of football environment you understand best.
              </p>
            </div>

            <div className="grid gap-5">
              <TextAreaField
                label="Why do you want to become a DES scout?"
                placeholder="Explain why you want to join DES, what you can bring, and what markets or clubs you have access to."
              />

              <TextAreaField
                label="What type of players do you usually identify?"
                placeholder="Example: fast wingers, technical midfielders, strong centre backs, young academy players, free agents..."
              />

              <TextAreaField
                label="Clubs, academies, or competitions you know well"
                placeholder="Example: local academies, regional leagues, youth tournaments, school football, semi-pro leagues..."
              />

              <TextAreaField
                label="Describe how you would evaluate a player"
                placeholder="Explain what you look at technically, tactically, physically, mentally, and professionally."
              />

              <TextAreaField
                label="Previous player recommendations"
                placeholder="If you have recommended players before, tell us what happened. Were they signed, trialed, rejected, or still developing?"
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Standards
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Training, ethics, and approval
              </h2>
              <p className="mt-3 text-white/60">
                DES scouts must protect the organisation, respect players, and
                avoid false promises.
              </p>
            </div>

            <div className="grid gap-5">
              <AgreementBox
                title="DES Academy Requirement"
                text="I understand that I may need to complete DES Academy scout training and pass a test before I can become an approved DES scout."
              />

              <AgreementBox
                title="No False Promises"
                text="I understand that I cannot promise players contracts, trials, visas, payments, or club opportunities without official DES approval."
              />

              <AgreementBox
                title="Professional Conduct"
                text="I agree to behave professionally when speaking with players, families, clubs, coaches, and other scouts."
              />

              <AgreementBox
                title="DES Approval"
                text="I understand that submitting this application does not automatically make me part of DES. Final approval is controlled by DES leadership."
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Important DES Scout Notice
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                DES scouts must complete the correct approval process before
                using the DES name, approaching players as a DES representative,
                or submitting official player recommendations. DES may approve,
                reject, pause, or remove scout access at any time to protect the
                organisation.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Scout Application →
              </button>

              <a
                href="/register"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                Choose Different Pathway
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Scout Application.
      </footer>
    </main>
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

function TextAreaField({ label, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
      </label>
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function AgreementBox({ title, text }) {
  return (
    <label className="flex cursor-pointer gap-4 rounded-2xl border border-white/10 bg-black/35 p-5 hover:border-yellow-400/40">
      <input
        type="checkbox"
        className="mt-1 h-5 w-5 accent-yellow-500"
      />
      <div>
        <p className="font-black text-white">{title}</p>
        <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
      </div>
    </label>
  );
}