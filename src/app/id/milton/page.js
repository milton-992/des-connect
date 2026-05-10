export default function MiltonIDPage() {
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
            href="/"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Visit DES
          </a>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            ✅ Verified DES Identity
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Official <span className="text-yellow-400">DES ID</span> profile.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            This page confirms that the person shown is connected with Draft
            Elite Sport. DES ID pages help verify staff, scouts, players,
            coaches, volunteers, and event access.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <StatusBox label="Identity Status" value="Verified" icon="✅" />
            <StatusBox label="Access Level" value="Super Admin" icon="🛡️" />
            <StatusBox label="Profile Type" value="Founder / Staff" icon="🪪" />
            <StatusBox label="QR Status" value="Active" icon="▦" />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]/95 shadow-2xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                    DES ID
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Verified Staff Profile
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
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div className="grid h-32 w-32 shrink-0 place-items-center rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-5xl">
                    MM
                  </div>

                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-green-200">
                      Active / Verified
                    </div>

                    <h3 className="text-4xl font-black">Milton M.</h3>

                    <p className="mt-2 text-xl font-bold text-yellow-400">
                      Founder & CEO
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      Draft Elite Sport
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <ProfileInfo label="DES ID" value="DES-STAFF-0001" />
                  <ProfileInfo label="Profile Type" value="Founder / Staff" />
                  <ProfileInfo label="Department" value="Management" />
                  <ProfileInfo label="Access" value="Super Admin" />
                  <ProfileInfo label="Status" value="Verified DES Team" />
                  <ProfileInfo label="Event Access" value="Full Access" />
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="font-black text-yellow-400">
                    Verification Message
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    This profile is an official Draft Elite Sport digital ID.
                    If scanned during an event, meeting, trial, or showcase,
                    this page confirms the person’s DES identity and access
                    level.
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/"
                    className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
                  >
                    Visit DES Website →
                  </a>

                  <a
                    href="/events"
                    className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
                  >
                    View DES Events
                  </a>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      QR destination
                    </p>
                    <p className="mt-1 font-bold text-white">
                      /id/milton
                    </p>
                  </div>

                  <div className="grid h-20 w-20 place-items-center rounded-xl bg-white text-4xl text-black">
                    ▦
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-red-500/20 bg-red-950/20 p-5">
                <p className="font-black text-red-100">Security Notice</p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  DES ID pages should only be trusted when opened from the
                  official DES website domain. Any person claiming to represent
                  DES without an active verified profile should be checked with
                  DES leadership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Identity System
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Built for lanyards, PVC cards, trials, and club meetings.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Every approved DES player, coach, scout, staff member, and
                volunteer can later receive a unique DES ID page. QR codes can
                point directly to these verified profiles.
              </p>
            </div>

            <div className="grid gap-4">
              <FeatureRow
                title="Event verification"
                text="Confirm who belongs at a trial, showcase, or meeting."
              />
              <FeatureRow
                title="Professional image"
                text="Every DES representative can carry a scannable ID."
              />
              <FeatureRow
                title="Controlled access"
                text="DES can activate, suspend, or limit profiles later."
              />
              <FeatureRow
                title="Future app ready"
                text="The same identity can appear inside the future DES mobile app."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. Verified DES ID.
      </footer>
    </main>
  );
}

function StatusBox({ label, value, icon }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <div className="text-3xl">{icon}</div>
      <p className="mt-4 text-xs uppercase tracking-[0.2em] text-white/40">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-yellow-400">{value}</p>
    </div>
  );
}

function ProfileInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white/85">{value}</p>
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