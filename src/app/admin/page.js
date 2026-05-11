import { supabaseAdmin } from "../../lib/supabaseAdmin";

export default async function AdminPage() {
  const { data: playerApplications, error } = await supabaseAdmin
    .from("player_applications")
    .select(
      "id, full_name, email, nationality, current_country, position, secondary_position, preferred_foot, current_club, playing_level, application_status, created_at, notes"
    )
    .order("created_at", { ascending: false });

  const players = playerApplications || [];

  const overviewCards = [
    {
      title: "Player Applications",
      value: String(players.length),
      status: "Live From Supabase",
      icon: "⚽",
      text: "Real player applications submitted from the DES website player registration form.",
    },
    {
      title: "Coach Applications",
      value: "Soon",
      status: "Next Table",
      icon: "📋",
      text: "Coach applications will be connected after player applications are working properly.",
    },
    {
      title: "Scout Applications",
      value: "Soon",
      status: "Academy Required",
      icon: "🔎",
      text: "Scout applications will later connect with DES Academy progress and certificates.",
    },
    {
      title: "Staff / Volunteers",
      value: "Soon",
      status: "Access Pending",
      icon: "🪪",
      text: "Staff and volunteer applications will later connect with DES ID and event access.",
    },
  ];

  const adminTools = [
    {
      title: "Review Applications",
      icon: "✅",
      text: "View real player applications submitted through the DES website.",
    },
    {
      title: "Approve Profiles",
      icon: "🛡️",
      text: "Later, admins will approve, reject, hold, or suspend profiles.",
    },
    {
      title: "Activate QR IDs",
      icon: "▦",
      text: "Approved users can later receive a unique verified DES ID page.",
    },
    {
      title: "Manage Academy",
      icon: "🎓",
      text: "Track study material progress, assessments, and certificates.",
    },
    {
      title: "Club Requests",
      icon: "🏟️",
      text: "Later, clubs can submit recruitment needs and request shortlists.",
    },
    {
      title: "Partner Requests",
      icon: "🤝",
      text: "Later, sponsors and partners can submit partnership enquiries.",
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
              🛡️ DES Super Admin · Supabase Connected
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Control the DES{" "}
              <span className="text-yellow-400">network.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This admin page is now connected to Supabase. Player applications
              submitted through the DES website can appear here for review.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-5 lg:max-w-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              Founder Access
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              This page is still public visually. Later, Supabase Auth will
              protect it so only Super Admin accounts can open it.
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-8 rounded-[1.5rem] border border-red-500/30 bg-red-950/30 p-5">
            <p className="font-black text-red-100">Supabase Read Error</p>
            <p className="mt-2 text-sm leading-6 text-red-100/80">
              {error.message}
            </p>
          </div>
        )}

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

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Real Player Applications
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Submitted from the DES player form.
              </h2>
            </div>

            <span className="rounded-full border border-green-500/25 bg-green-950/30 px-4 py-2 text-sm font-bold text-green-100">
              Supabase live data
            </span>
          </div>

          {players.length === 0 ? (
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xl font-black text-white">
                No player applications yet.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Submit a test application from /register/player and it should
                appear here.
              </p>

              <a
                href="/register/player"
                className="mt-6 inline-flex rounded-full bg-yellow-500 px-6 py-3 font-black text-black hover:bg-yellow-400"
              >
                Open Player Form →
              </a>
            </div>
          ) : (
            <div className="grid gap-4">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-3 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                        {player.application_status || "pending"}
                      </div>

                      <h3 className="text-2xl font-black">
                        {player.full_name}
                      </h3>

                      <p className="mt-2 text-sm text-white/55">
                        {player.email}
                      </p>

                      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <ApplicationInfo
                          label="Position"
                          value={player.position || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Secondary"
                          value={player.secondary_position || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Foot"
                          value={player.preferred_foot || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Nationality"
                          value={player.nationality || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Country"
                          value={player.current_country || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Current Club"
                          value={player.current_club || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Level"
                          value={player.playing_level || "Not provided"}
                        />
                        <ApplicationInfo
                          label="Submitted"
                          value={
                            player.created_at
                              ? new Date(player.created_at).toLocaleDateString()
                              : "Not provided"
                          }
                        />
                      </div>

                      {player.notes && (
                        <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                            Notes / Bio / Extra Info
                          </p>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/65">
                            {player.notes}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="grid min-w-[190px] gap-3">
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
                        Approve Soon
                      </button>

                      <button
                        type="button"
                        className="rounded-full border border-red-500/30 bg-red-950/30 px-5 py-3 text-sm font-bold text-red-100 hover:bg-red-950/50"
                      >
                        Reject Soon
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
            The admin area will eventually control applications, QR IDs, events,
            academy progress, clubs, partners, and approvals.
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

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Next Admin Build Step
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Add approve and reject actions.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Now that admin can read real applications, the next step is to
                update application_status from pending to approved, rejected, or
                on hold.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Current Backend Status</h3>

              <div className="mt-6 grid gap-3">
                <StatusRow label="Supabase Project" value="Connected" />
                <StatusRow label="Player Form" value="Saving Data" />
                <StatusRow label="Admin Read" value="Live Data" />
                <StatusRow label="Approve Button" value="Next Step" />
              </div>

              <a
                href="/register/player"
                className="mt-7 block rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Another Test →
              </a>
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

function ApplicationInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-3">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white/85">{value}</p>
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