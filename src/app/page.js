export default function Home() {
  const portals = [
    {
      title: "Player Portal",
      icon: "⚽",
      text: "Verified player profiles with photo, bio, position, nationality, preferred foot, media links, stats fields, and a unique QR profile.",
    },
    {
      title: "Coach Portal",
      icon: "📋",
      text: "Professional coach profiles with current club, availability, licences, past clubs, philosophy, CV, and DES digital ID.",
    },
    {
      title: "Scout Portal",
      icon: "🔎",
      text: "A structured area for DES scouts to train, complete tests, submit player reports, and build verified scout status.",
    },
    {
      title: "Team & Staff Portal",
      icon: "🪪",
      text: "Digital ID profiles for founders, staff, volunteers, and event workers with QR lanyard verification.",
    },
  ];

  const eventFeatures = [
    "Trial registration",
    "Player attendance lists",
    "Staff and scout opt-in",
    "QR check-in",
    "Verified access control",
    "Post-event review",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(180,20,20,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_30%),linear-gradient(180deg,#050505,#000)]" />

      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5">
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

          <div className="hidden md:flex md:justify-center">
            <nav className="flex items-center gap-8 text-base font-semibold text-white">
              <a href="#portals" className="transition hover:text-yellow-400">
                Portals
              </a>
              <a href="/clubs" className="transition hover:text-yellow-400">
                Clubs
              </a>
              <a href="/partners" className="transition hover:text-yellow-400">
                Partners
              </a>
              <a href="/academy" className="transition hover:text-yellow-400">
                Academy
              </a>
              <a href="/events" className="transition hover:text-yellow-400">
                Events
              </a>
              <a href="#contact" className="transition hover:text-yellow-400">
                Contact
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3 justify-self-end">
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

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:py-28">
        <div>
          <div className="mb-8 flex justify-start">
            <img
              src="/des-logo.png"
              alt="Draft Elite Sport logo"
              className="h-44 w-auto object-contain md:h-56 lg:h-64"
            />
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            ✅ Verified football identity and scouting network
          </div>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Welcome to{" "}
            <span className="text-yellow-400">Draft Elite Sport.</span>
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES is a modern football platform built to connect players, coaches,
            scouts, clubs, staff, partners and events through verified digital
            profiles, professional identity, QR access and structured football
            opportunities.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
            Our mission is to make football opportunities more organised, more
            transparent and more professional — from player applications and
            scouting reports to club requests, partner visibility, showcase
            events and verified DES ID profiles.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/register"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Start Registration →
            </a>

            <a
              href="/login"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Login to DES
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-black text-yellow-400">7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Areas
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-black text-yellow-400">QR</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Verified ID
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="text-2xl font-black text-yellow-400">24/7</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">
                Digital Access
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]/90 shadow-2xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                    DES Connect
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Football platform overview
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

            <div className="p-6">
              <div className="rounded-3xl border border-white/10 bg-black/50 p-6">
                <div className="grid gap-4">
                  <WelcomeFeature
                    icon="⚽"
                    title="For Players"
                    text="Create structured football profiles with position, nationality, preferred foot, club status, video links and DES review."
                  />

                  <WelcomeFeature
                    icon="🏟️"
                    title="For Clubs"
                    text="Submit recruitment needs, request shortlists and review verified DES player and coach profiles."
                  />

                  <WelcomeFeature
                    icon="🔎"
                    title="For Scouts"
                    text="Apply to join the DES scouting network, complete training and submit future player reports."
                  />

                  <WelcomeFeature
                    icon="▦"
                    title="DES ID"
                    text="Every approved person can later receive a unique QR profile for events, lanyards, PVC cards and club verification."
                  />
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="font-black text-yellow-400">
                    Built for serious football activity
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    DES is being designed as a private football ecosystem where
                    identity, opportunity, events, scouting and partnerships can
                    work together in one platform.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-3 text-sm text-white/60">
                🔒 Profiles are private until approved by DES admin.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portals" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Platform Portals
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built for the full DES network.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            Every portal is designed to protect the DES brand, verify people,
            organise opportunities, and make every trial or meeting look
            professional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portals.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                {card.icon}
              </div>

              <h3 className="text-xl font-black">{card.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES ID
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                One QR code. One verified identity.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES ID gives every approved player, coach, scout, staff member,
                and volunteer a unique digital profile that can be scanned from
                a PVC card, lanyard, business card, or event document.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <MiniFeature
                icon="▦"
                title="QR Profiles"
                text="Scan and open verified DES profile pages."
              />
              <MiniFeature
                icon="🛡️"
                title="Access Control"
                text="Confirm who belongs at trials and events."
              />
              <MiniFeature
                icon="🌍"
                title="Club Ready"
                text="Share professional profiles with clubs instantly."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              For Clubs
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Verified football profiles for recruitment needs.
            </h2>

            <p className="mt-5 text-white/65 leading-7">
              Clubs can use DES to request players, review structured profiles,
              attend events, and access verified football information.
            </p>

            <a
              href="/clubs"
              className="mt-7 inline-flex rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Open Clubs Page →
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              For Partners
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Commercial visibility through football opportunity.
            </h2>

            <p className="mt-5 text-white/65 leading-7">
              Partners can support DES events, players, media content, and
              football development projects while gaining meaningful visibility.
            </p>

            <a
              href="/partners"
              className="mt-7 inline-flex rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Open Partners Page →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              DES Academy
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Training before representation.
            </h2>

            <p className="mt-5 max-w-xl text-white/65 leading-7">
              DES Academy prepares scouts, staff, and volunteers before they can
              represent the organisation. Applicants learn DES standards, pass a
              test, and wait for admin approval before their QR ID becomes
              active.
            </p>

            <a
              href="/academy"
              className="mt-7 inline-flex rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Open DES Academy →
            </a>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-500/15 text-3xl">
                🎓
              </div>

              <div>
                <h3 className="text-2xl font-black">Approval Flow</h3>
                <p className="text-sm text-white/50">
                  Simple first version, powerful later.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                "Apply to join DES",
                "Complete internal training",
                "Pass the DES test",
                "Admin review and approval",
                "QR ID activated",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/35 p-4"
                >
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-yellow-500 text-sm font-black text-black">
                    {index + 1}
                  </div>

                  <p className="font-semibold text-white/85">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="events-preview" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Events
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Trials, showcases, and check-ins.
              </h2>
            </div>

            <div className="hidden text-6xl md:block">📅</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventFeatures.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <span className="text-yellow-400">✅</span>
                <p className="font-semibold text-white/80">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="/events"
            className="mt-8 inline-flex rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
          >
            Open DES Events →
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Start the network
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Build DES like a serious football organisation from day one.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Launch the public website first, then connect registration,
                profiles, QR IDs, training tests, admin approval, and event
                access.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Next build phase</h3>

              <p className="mt-3 text-white/60">
                Connect Supabase authentication, create role-based registration,
                and generate the first DES ID profile pages.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="/login"
                  className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white hover:bg-white/10"
                >
                  Login to DES →
                </a>

                <a
                  href="/register"
                  className="block w-full rounded-full bg-yellow-500 px-6 py-4 text-center text-base font-black text-black hover:bg-yellow-400"
                >
                  Start Registration →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Connect, DES ID, DES
        Academy, DES Events, Clubs and Partners.
      </footer>
    </main>
  );
}

function WelcomeFeature({ icon, title, text }) {
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

function MiniFeature({ icon, title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5">
      <div className="text-3xl text-yellow-400">{icon}</div>
      <h3 className="mt-4 text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}