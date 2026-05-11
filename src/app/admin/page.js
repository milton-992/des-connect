export default function AdminPage() {
  const overviewCards = [
    {
      title: "Player Applications",
      value: "12",
      status: "Pending Review",
      icon: "⚽",
      text: "Review new player submissions, football profiles, video links, and DES eligibility.",
    },
    {
      title: "Coach Applications",
      value: "4",
      status: "Pending Review",
      icon: "📋",
      text: "Approve, reject, or request more information from coaches joining the DES network.",
    },
    {
      title: "Scout Applications",
      value: "9",
      status: "Academy Required",
      icon: "🔎",
      text: "Check scout applicants, academy progress, ethics agreement, and market coverage.",
    },
    {
      title: "Staff / Volunteers",
      value: "6",
      status: "Access Pending",
      icon: "🪪",
      text: "Review event staff, volunteers, internal roles, QR access, and lanyard permissions.",
    },
  ];

  const pendingItems = [
    {
      name: "Player Applicant",
      type: "Right Winger",
      detail: "U23 · Portugal / UAE market · Highlights submitted",
      status: "Pending",
      icon: "⚽",
    },
    {
      name: "Coach Applicant",
      type: "UEFA B Coach",
      detail: "Open to offers · Youth and senior experience",
      status: "Review",
      icon: "📋",
    },
    {
      name: "Scout Applicant",
      type: "Angola Market",
      detail: "Grassroots and academy connections · Academy test required",
      status: "Training",
      icon: "🔎",
    },
    {
      name: "Staff Applicant",
      type: "Event Volunteer",
      detail: "Registration desk and access control support",
      status: "Pending",
      icon: "🪪",
    },
  ];

  const adminTools = [
    {
      title: "Approve Profiles",
      icon: "✅",
      text: "Approve or reject players, coaches, scouts, and staff before their profiles become active.",
    },
    {
      title: "Activate QR IDs",
      icon: "▦",
      text: "Turn DES ID pages on or off depending on approval status and access level.",
    },
    {
      title: "Manage Events",
      icon: "📅",
      text: "Create trials, showcases, scouting days, staff lists, and event access permissions.",
    },
    {
      title: "Review Academy",
      icon: "🎓",
      text: "Track scout and staff training progress, final tests, and completion status.",
    },
    {
      title: "Club Requests",
      icon: "🏟️",
      text: "Review club recruitment needs and prepare shortlists of suitable DES profiles.",
    },
    {
      title: "Partner Requests",
      icon: "🤝",
      text: "Review sponsor, media, service, and commercial partnership enquiries.",
    },
  ];

  const quickActions = [
    "Approve player profile",
    "Reject application",
    "Request more information",
    "Assign DES ID",
    "Activate QR code",
    "Suspend profile",
    "Create event",
    "Export attendee list",
  ];

  const activityLog = [
    "DES ID preview created for Milton M.",
    "Domain connected successfully: www.des-uae.com",
    "QR code package installed and live ID page updated.",
    "Register pathways created for Player, Coach, Scout, and Staff.",
    "Clubs and Partners pages added to public website.",
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
              href="/dashboard"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Dashboard
            </a>

            <a
              href="/id/milton"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              My DES ID
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
              🛡️ DES Super Admin Preview
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Control the DES{" "}
              <span className="text-yellow-400">network.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This page previews the future admin command centre for approving
              profiles, activating QR IDs, managing events, reviewing academy
              progress, and controlling DES access.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-5 lg:max-w-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              Founder Access
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Milton M. · Founder & CEO · Super Admin preview. Later this page
              will be protected by Supabase login permissions.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {overviewCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                  {card.icon}
                </div>

                <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-bold text-yellow-400">
                  {card.status}
                </span>
              </div>

              <h2 className="text-xl font-black">{card.title}</h2>

              <p className="mt-2 text-4xl font-black text-yellow-400">
                {card.value}
              </p>

              <p className="mt-4 text-sm leading-6 text-white/60">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Pending Queue
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Applications waiting for action.
              </h2>
            </div>

            <span className="rounded-full border border-red-500/25 bg-red-950/30 px-4 py-2 text-sm font-bold text-red-100">
              Preview data
            </span>
          </div>

          <div className="space-y-4">
            {pendingItems.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-xl font-black">{item.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-yellow-400">
                        {item.type}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/60">
                        {item.detail}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
                    >
                      Review
                    </button>

                    <button
                      type="button"
                      className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                    >
                      Hold
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Quick Actions
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Admin actions.
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/60">
            These actions will become real once the backend is connected.
          </p>

          <div className="mt-8 grid gap-3">
            {quickActions.map((action) => (
              <button
                key={action}
                type="button"
                className="rounded-2xl border border-white/10 bg-black/35 p-4 text-left font-semibold text-white/85 hover:border-yellow-400/40"
              >
                ✅ {action}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Admin Tools
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              The future DES control room.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            The admin area will connect the whole DES platform: applications,
            QR IDs, events, academy progress, clubs, partners, and approvals.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {adminTools.map((tool) => (
            <div
              key={tool.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                {tool.icon}
              </div>

              <h3 className="text-xl font-black">{tool.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {tool.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Founder Profile Permissions
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Publicly Staff. Privately Super Admin.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Your visible DES ID profile should show Founder & CEO under the
                Staff / Leadership category. Behind the scenes, your account
                should have Super Admin permissions to control the system.
              </p>

              <a
                href="/id/milton"
                className="mt-7 inline-flex rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                View Founder DES ID →
              </a>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <div className="grid gap-3">
                <PermissionRow label="Profile Type" value="Staff / Founder" />
                <PermissionRow label="Staff Type" value="Founder / Leadership" />
                <PermissionRow label="Visible Role" value="Founder & CEO" />
                <PermissionRow label="System Role" value="Super Admin" />
                <PermissionRow label="QR Status" value="Active" />
                <PermissionRow label="Event Access" value="Full Access" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Activity Log
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Recent DES platform activity.
          </h2>

          <div className="mt-8 space-y-3">
            {activityLog.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/35 p-4"
              >
                <p className="text-sm leading-6 text-white/70">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Backend Roadmap
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            What Supabase will unlock.
          </h2>

          <div className="mt-8 grid gap-4">
            <RoadmapRow
              title="Real login"
              text="Users log in with email and password, then see their own dashboard."
            />
            <RoadmapRow
              title="Application storage"
              text="Forms save to the DES database instead of only being visual."
            />
            <RoadmapRow
              title="Admin review"
              text="Super Admin can approve, reject, suspend, or request more information."
            />
            <RoadmapRow
              title="QR generation"
              text="Each approved user receives a unique DES ID and live QR profile."
            />
            <RoadmapRow
              title="Mobile app ready"
              text="The future iOS app can use the same users and database."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Next Serious Build Step
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Connect the real backend.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                The admin page gives us the control-room design. The next major
                technical phase is Supabase: real login, saved applications,
                database tables, and admin approval.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Before Supabase</h3>

              <p className="mt-3 text-white/60">
                We can still create sample ID pages for players, coaches,
                scouts, and staff before connecting the database.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="/dashboard"
                  className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white hover:bg-white/10"
                >
                  Back to Dashboard →
                </a>

                <a
                  href="/id/milton"
                  className="block w-full rounded-full bg-yellow-500 px-6 py-4 text-center text-base font-black text-black hover:bg-yellow-400"
                >
                  View DES ID →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. Admin Preview.
      </footer>
    </main>
  );
}

function PermissionRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="text-sm font-bold text-white/85">{value}</p>
    </div>
  );
}

function RoadmapRow({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="font-black text-white">✅ {title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}