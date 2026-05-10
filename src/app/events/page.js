export default function EventsPage() {
  const eventTypes = [
    {
      title: "Player Trials",
      icon: "⚽",
      text: "Structured trial days where approved players can be evaluated by DES, scouts, coaches, and invited club contacts.",
    },
    {
      title: "Showcase Events",
      icon: "🏟️",
      text: "Professional football showcase events designed to expose players to clubs, media, scouts, and international opportunities.",
    },
    {
      title: "Scouting Days",
      icon: "🔎",
      text: "Focused scouting sessions where DES scouts and technical staff evaluate selected players against DES standards.",
    },
    {
      title: "Club Meetings",
      icon: "🤝",
      text: "Private meetings with clubs, sports directors, coaches, and partners to discuss player needs and recruitment opportunities.",
    },
  ];

  const eventFlow = [
    "DES creates the event",
    "Players, coaches, scouts, and staff opt in",
    "DES admin reviews participants",
    "Approved people receive event status",
    "QR ID is scanned on event day",
    "Attendance and roles are confirmed",
  ];

  const accessRoles = [
    {
      role: "Players",
      access: "Trial / showcase participation",
      icon: "⚽",
    },
    {
      role: "Coaches",
      access: "Evaluation, observation, or project networking",
      icon: "📋",
    },
    {
      role: "Scouts",
      access: "Player observation and reporting",
      icon: "🔎",
    },
    {
      role: "Staff",
      access: "Event operations, media, registration, and access control",
      icon: "🪪",
    },
    {
      role: "Clubs",
      access: "Invited club viewing and recruitment meetings",
      icon: "🏟️",
    },
  ];

  const sampleEvents = [
    {
      status: "Future Event",
      title: "DES Portugal Showcase Trials",
      date: "Coming Soon",
      location: "Portugal",
      type: "Showcase / Trial",
      text: "A professional showcase concept for players looking for visibility, evaluation, and international football opportunities.",
    },
    {
      status: "Planning Stage",
      title: "DES UAE Scouting Day",
      date: "Coming Soon",
      location: "United Arab Emirates",
      type: "Scouting Day",
      text: "A scouting-focused event for selected players, with DES staff and scouts controlling access through QR ID verification.",
    },
    {
      status: "Internal",
      title: "DES Staff Training Event",
      date: "Coming Soon",
      location: "Online / Physical",
      type: "Training",
      text: "Internal staff and volunteer preparation for trial-day conduct, access control, registration, and confidentiality.",
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
            📅 DES Events
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Trials, showcases,{" "}
            <span className="text-yellow-400">and verified access.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            DES Events will manage football trials, showcases, scouting days,
            staff access, player attendance, and QR check-ins through the DES
            Connect system.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/register/player"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Apply as Player →
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
                Event System
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Opt in. Get approved. Scan in.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES Events will help the organisation control who attends,
                who is approved, what role each person has, and whether their
                QR ID is active for that specific event.
              </p>
            </div>

            <div className="space-y-3">
              {eventFlow.map((step, index) => (
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
              Event Types
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built for real football activity.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            DES should look professional on event day. Every person should have
            a role, an approval status, and a digital ID that can be verified.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {eventTypes.map((item) => (
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
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Access Roles
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Everyone has a purpose.
              </h2>
            </div>

            <p className="max-w-xl text-white/60">
              Event access should never be random. DES can assign different
              permissions depending on the person’s role and approval status.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {accessRoles.map((role) => (
              <div
                key={role.role}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="text-3xl">{role.icon}</div>

                <h3 className="mt-4 text-xl font-black">{role.role}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {role.access}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Upcoming Concepts
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Future DES event board.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            For now, these are sample events. Later, DES admins will be able to
            create real events, open registration, approve people, and track
            check-ins.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {sampleEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                  {event.status}
                </span>

                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-bold text-white/60">
                  {event.type}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black">{event.title}</h3>

              <div className="mt-5 grid gap-3 text-sm">
                <InfoLine label="Date" value={event.date} />
                <InfoLine label="Location" value={event.location} />
              </div>

              <p className="mt-5 text-sm leading-7 text-white/60">
                {event.text}
              </p>

              <button
                type="button"
                className="mt-7 w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                Event details coming soon
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Future Admin Controls
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Later, events become fully controlled by DES admin.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Once we connect Supabase, DES leadership can create events,
                approve or reject applicants, assign staff roles, activate QR
                access, and export attendance lists.
              </p>
            </div>

            <div className="grid gap-4">
              <FeatureRow
                title="Create events"
                text="Add date, location, event type, capacity, and description."
              />
              <FeatureRow
                title="Approve participants"
                text="Control who can attend and what access level they receive."
              />
              <FeatureRow
                title="QR check-in"
                text="Scan DES IDs on the day to verify people quickly."
              />
              <FeatureRow
                title="Attendance dashboard"
                text="Track who attended, declined, or missed the event."
              />
              <FeatureRow
                title="Role assignment"
                text="Assign staff to registration, media, player support, or access control."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Want to participate?
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Apply first, then DES approves access.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Event access should only be available to approved DES profiles.
                Players, scouts, staff, and coaches must submit the correct
                application before joining future DES events.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Choose your pathway</h3>

              <p className="mt-3 text-white/60">
                Create the right DES profile first. Event access can be added
                after approval.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="/register/player"
                  className="block w-full rounded-full bg-yellow-500 px-6 py-4 text-center text-base font-black text-black hover:bg-yellow-400"
                >
                  Apply as Player →
                </a>

                <a
                  href="/register"
                  className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white hover:bg-white/10"
                >
                  View All Registration Options →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Events.
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

function FeatureRow({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="font-black text-white">✅ {title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}