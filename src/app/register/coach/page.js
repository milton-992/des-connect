export default function CoachApplicationPage() {
  const licenceLevels = [
    "No Licence Yet",
    "Grassroots / Foundation",
    "UEFA C",
    "UEFA B",
    "UEFA A",
    "UEFA Pro",
    "Other Licence",
  ];

  const formations = [
    "4-3-3",
    "4-2-3-1",
    "4-4-2",
    "3-5-2",
    "3-4-3",
    "4-1-4-1",
    "Flexible / Depends on squad",
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
            📋 DES Coach Application
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Build your <span className="text-yellow-400">DES coach profile.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Submit your coaching background for DES review. Approved coaches can
            later receive a verified DES profile, QR code, and placement
            opportunities.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Personal Details
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Basic coach information
              </h2>
              <p className="mt-3 text-white/60">
                These details will create the foundation of your DES coach
                profile.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField label="Full Name" placeholder="Example: João Silva" />
              <InputField label="Nationality" placeholder="Example: Portugal" />
              <InputField
                label="Current Country"
                placeholder="Example: United Arab Emirates"
              />
              <InputField
                label="Languages Spoken"
                placeholder="Example: English, Portuguese, Spanish"
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Coaching Licence Level
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {licenceLevels.map((licence) => (
                    <option key={licence}>{licence}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Availability
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  <option>Currently employed</option>
                  <option>Open to offers</option>
                  <option>Looking for a project now</option>
                  <option>Available at end of season</option>
                </select>
              </div>

              <InputField
                label="Current Club"
                placeholder="Example: Palm City FC / None"
              />
              <InputField
                label="Current Role"
                placeholder="Example: Head Coach / Assistant Coach / Academy Coach"
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Preferred Formation
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {formations.map((formation) => (
                    <option key={formation}>{formation}</option>
                  ))}
                </select>
              </div>

              <InputField
                label="Age Groups Trained"
                placeholder="Example: U15, U17, U19, Senior"
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Coaching Career
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Experience, clubs, and philosophy
              </h2>
              <p className="mt-3 text-white/60">
                Help DES understand your coaching background and football
                identity.
              </p>
            </div>

            <div className="grid gap-5">
              <TextAreaField
                label="Short Coach Bio"
                placeholder="Tell us about your coaching journey, experience, football values, and the type of opportunity you are looking for."
              />

              <TextAreaField
                label="Past Clubs Coached"
                placeholder="Example: Club name, country, age group, role, dates..."
              />

              <TextAreaField
                label="Coaching Philosophy"
                placeholder="Example: possession-based football, high pressing, youth development, defensive organisation, transition play..."
              />

              <TextAreaField
                label="Main Achievements"
                placeholder="Example: promotions, trophies, player development, academy success, tournaments, notable projects..."
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Documents & Media
              </p>
              <h2 className="mt-3 text-3xl font-black">
                CV, certificates, and presentation links
              </h2>
              <p className="mt-3 text-white/60">
                For now, add links. Later we will allow direct uploads to the
                DES database.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField
                label="CV Link"
                placeholder="Google Drive / Dropbox / PDF link"
              />
              <InputField
                label="Certificate Link"
                placeholder="Coaching licence certificate link"
              />
              <InputField
                label="Video Presentation Link"
                placeholder="YouTube / Vimeo / Drive link"
              />
              <InputField
                label="LinkedIn or Professional Profile"
                placeholder="https://linkedin.com/..."
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Important DES Review Notice
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Submitting this application does not automatically make you a
                DES coach or representative. Your profile must be reviewed and
                approved by DES before any public profile, QR ID, or placement
                activity is activated.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Coach Application →
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
        © {new Date().getFullYear()} Draft Elite Sport. DES Coach Application.
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