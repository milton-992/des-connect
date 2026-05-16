import { supabaseAdmin } from "../../lib/supabaseAdmin";
import { updatePlayerApplicationStatus } from "./actions";

export default async function AdminPage() {
  const { data: playerApplications, error } = await supabaseAdmin
    .from("player_applications")
    .select(
      "id, full_name, email, nationality, current_country, position, secondary_position, preferred_foot, current_club, playing_level, application_status, created_at, notes, admin_notes"
    )
    .order("created_at", { ascending: false });

  const players = playerApplications || [];

  const pendingPlayers = players.filter(
    (player) => player.application_status === "pending"
  );

  const approvedPlayers = players.filter(
    (player) => player.application_status === "approved"
  );

  const rejectedPlayers = players.filter(
    (player) => player.application_status === "rejected"
  );

  const onHoldPlayers = players.filter(
    (player) => player.application_status === "on_hold"
  );

  const overviewCards = [
    {
      title: "All Player Applications",
      value: String(players.length),
      status: "Live Data",
      icon: "⚽",
      text: "All real player applications submitted through the DES website.",
    },
    {
      title: "Pending Review",
      value: String(pendingPlayers.length),
      status: "Action Needed",
      icon: "🟡",
      text: "Players waiting for DES admin review.",
    },
    {
      title: "Approved",
      value: String(approvedPlayers.length),
      status: "DES Ready",
      icon: "✅",
      text: "Players approved by DES admin.",
    },
    {
      title: "Rejected / On Hold",
      value: String(rejectedPlayers.length + onHoldPlayers.length),
      status: "Controlled",
      icon: "🛡️",
      text: "Applications rejected or placed on hold.",
    },
  ];

  const adminTools = [
    {
      title: "Approve Profiles",
      icon: "✅",
      text: "Mark player applications as approved after DES review.",
    },
    {
      title: "Reject Applications",
      icon: "⛔",
      text: "Reject applications that do not meet DES standards.",
    },
    {
      title: "Place On Hold",
      icon: "🟡",
      text: "Pause applications that need more information or video review.",
    },
    {
      title: "Admin Notes",
      icon: "📝",
      text: "Save internal review notes for each player application.",
    },
    {
      title: "Future DES ID",
      icon: "▦",
      text: "Approved users can later receive a unique verified DES ID page.",
    },
    {
      title: "Future Academy Link",
      icon: "🎓",
      text: "Scout and staff applications will later connect with DES Academy progress.",
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
              href="/register/player"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Player Form
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
              🛡️ DES Super Admin · Status Actions Live
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Review and control{" "}
              <span className="text-yellow-400">applications.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This admin page now reads real player applications from Supabase
              and can update their status to approved, rejected, on hold, or
              pending.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-5 lg:max-w-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              Important Security Note
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              This page is still public visually. Later, Supabase Auth will
              protect it so only Super Admin accounts can access these actions.
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
                Review, update, and save admin notes.
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
            <div className="grid gap-5">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    <div className="flex-1">
                      <div className="mb-3 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                        {formatStatus(player.application_status)}
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
                            Player Notes / Bio / Extra Info
                          </p>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/65">
                            {player.notes}
                          </p>
                        </div>
                      )}

                      {player.admin_notes && (
                        <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-yellow-400">
                            Current Admin Notes
                          </p>
                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/75">
                            {player.admin_notes}
                          </p>
                        </div>
                      )}
                    </div>

                    <form
                      action={updatePlayerApplicationStatus}
                      className="w-full rounded-[1.5rem] border border-white/10 bg-black/35 p-5 xl:w-[320px]"
                    >
                      <input
                        type="hidden"
                        name="applicationId"
                        value={player.id}
                      />

                      <label className="mb-2 block text-sm font-bold text-white/80">
                        Admin Notes
                      </label>

                      <textarea
                        name="adminNotes"
                        defaultValue={player.admin_notes || ""}
                        rows="5"
                        placeholder="Example: Good winger, review full match video again..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                      />

                      <div className="mt-4 grid gap-3">
                        <button
                          type="submit"
                          name="newStatus"
                          value="approved"
                          className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
                        >
                          Approve Player
                        </button>

                        <button
                          type="submit"
                          name="newStatus"
                          value="on_hold"
                          className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-5 py-3 text-sm font-bold text-yellow-300 hover:bg-yellow-400/20"
                        >
                          Put On Hold
                        </button>

                        <button
                          type="submit"
                          name="newStatus"
                          value="rejected"
                          className="rounded-full border border-red-500/30 bg-red-950/30 px-5 py-3 text-sm font-bold text-red-100 hover:bg-red-950/50"
                        >
                          Reject Player
                        </button>

                        <button
                          type="submit"
                          name="newStatus"
                          value="pending"
                          className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                        >
                          Reset to Pending
                        </button>
                      </div>
                    </form>
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
              The DES control room is becoming real.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            The admin area now reads and updates real applications. The next
            step will be protected admin login and dynamic DES ID generation.
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
                Turn approved players into DES profiles.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Now that status updates work, the next big step is to prepare
                approved players for DES ID assignment and public profile
                generation.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Current Backend Status</h3>

              <div className="mt-6 grid gap-3">
                <StatusRow label="Supabase Project" value="Connected" />
                <StatusRow label="Player Form" value="Saving Data" />
                <StatusRow label="Admin Read" value="Live Data" />
                <StatusRow label="Status Buttons" value="Live Actions" />
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
        © {new Date().getFullYear()} Draft Elite Sport. Admin Control Room.
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

function formatStatus(status) {
  if (status === "approved") return "Approved";
  if (status === "rejected") return "Rejected";
  if (status === "on_hold") return "On Hold";
  return "Pending";
}