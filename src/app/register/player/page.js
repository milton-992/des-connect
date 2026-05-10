export default function PlayerApplicationPage() {
  const positions = [
    "Goalkeeper",
    "Right Back",
    "Centre Back",
    "Left Back",
    "Defensive Midfielder",
    "Central Midfielder",
    "Attacking Midfielder",
    "Right Winger",
    "Left Winger",
    "Striker",
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
            ⚽ DES Player Application
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Build your <span className="text-yellow-400">DES player profile.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Submit your football information for DES review. Approved players
            will later receive a verified DES profile and unique QR code.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Personal Details
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Basic player information
              </h2>
              <p className="mt-3 text-white/60">
                These details will form the first part of your DES football
                profile.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField label="Full Name" placeholder="Example: Milton Mendonca" />
              <InputField label="Date of Birth" type="date" />
              <InputField label="Nationality" placeholder="Example: Portugal" />
              <InputField label="Current Country" placeholder="Example: United Kingdom" />
              <InputField label="Height" placeholder="Example: 1.82m" />
              <InputField label="Weight" placeholder="Example: 76kg" />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Preferred Foot
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  <option>Right</option>
                  <option>Left</option>
                  <option>Both</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Main Position
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {positions.map((position) => (
                    <option key={position}>{position}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Secondary Position
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  <option>None</option>
                  {positions.map((position) => (
                    <option key={position}>{position}</option>
                  ))}
                </select>
              </div>

              <InputField label="Current Club" placeholder="Example: Palm City FC" />
              <InputField label="Previous Clubs" placeholder="Example: Club A, Club B, Club C" />
              <InputField label="Contract Status" placeholder="Example: Free agent / Under contract" />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Football Media
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Video links and profile references
              </h2>
              <p className="mt-3 text-white/60">
                Add links that help DES evaluate your current football level.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="YouTube Highlights Link"
                placeholder="https://youtube.com/..."
              />
              <InputField
                label="Full Match Video Link"
                placeholder="https://youtube.com/..."
              />
              <InputField
                label="Transfermarkt Link"
                placeholder="https://transfermarkt.com/..."
              />
              <InputField
                label="ZeroZero Link"
                placeholder="https://zerozero.pt/..."
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Player Bio
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Tell DES about your game
              </h2>
              <p className="mt-3 text-white/60">
                Keep it honest, professional, and football-focused.
              </p>
            </div>

            <div className="grid gap-5">
              <TextAreaField
                label="Short Player Bio"
                placeholder="Tell us about your football journey, your position, your playing style, and what type of opportunity you are looking for."
              />

              <TextAreaField
                label="Main Strengths"
                placeholder="Example: 1v1 attacking, pace, crossing, finishing, defensive discipline, leadership, work rate..."
              />

              <TextAreaField
                label="Achievements"
                placeholder="Example: trophies, trials, academy background, top scorer, captain, representative teams..."
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Important DES Review Notice
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Submitting this application does not automatically make you a
                DES player. Your profile must be reviewed and approved by DES
                before any public profile, QR ID, or representation activity is
                activated.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Player Application →
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
        © {new Date().getFullYear()} Draft Elite Sport. DES Player Application.
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