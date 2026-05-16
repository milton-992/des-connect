import { supabaseAdmin } from "../../lib/supabaseAdmin";
import {
  assignPlayerDesId,
  updatePlayerApplicationStatus,
  updatePlayerProfileControls,
  updateScoutApplicationStatus,
} from "./actions";

export default async function AdminPage() {
  const { data: playerApplications, error: playerError } = await supabaseAdmin
    .from("player_applications")
    .select(
      "id, full_name, email, nationality, current_country, position, secondary_position, preferred_foot, current_club, playing_level, application_status, created_at, notes, admin_notes, des_id, profile_slug, profile_visibility, qr_status, approved_at"
    )
    .order("created_at", { ascending: false });

  const { data: scoutApplications, error: scoutError } = await supabaseAdmin
    .from("scout_applications")
    .select(
      "id, full_name, email, phone, nationality, current_country, city, scouting_country, scouting_region, football_background, current_football_role, experience_level, languages, availability, has_transport, can_record_matches, understands_des_methodology, motivation, strengths, notes, application_status, admin_notes, created_at, approved_at"
    )
    .order("created_at", { ascending: false });

  const players = playerApplications || [];
  const scouts = scoutApplications || [];

  const pendingPlayers = players.filter(
    (player) => player.application_status === "pending"
  );

  const pendingScouts = scouts.filter(
    (scout) => scout.application_status === "pending"
  );

  const publicProfiles = players.filter(
    (player) => player.profile_visibility === "public"
  );

  const activeQrProfiles = players.filter(
    (player) => player.qr_status === "active"
  );

  const assignedDesIds = players.filter((player) => player.des_id);

  const overviewCards = [
    {
      title: "Player Applications",
      value: String(players.length),
      status: "Live Data",
      icon: "⚽",
      text: "Real player applications submitted through the DES website.",
    },
    {
      title: "Scout Applications",
      value: String(scouts.length),
      status: "Live Data",
      icon: "🔎",
      text: "Real scout applications submitted through the DES website.",
    },
    {
      title: "Pending Reviews",
      value: String(pendingPlayers.length + pendingScouts.length),
      status: "Action Needed",
      icon: "🟡",
      text: "Players and scouts waiting for DES admin review.",
    },
    {
      title: "Public / QR Active",
      value: `${publicProfiles.length}/${activeQrProfiles.length}`,
      status: "Controlled",
      icon: "🌍",
      text: "Public profiles and active QR profiles controlled by admin.",
    },
  ];

  const adminTools = [
    {
      title: "Player Review",
      icon: "⚽",
      text: "Review player applications, approve players, assign DES IDs, and control QR visibility.",
    },
    {
      title: "Scout Review",
      icon: "🔎",
      text: "Review scout applications, approve scouts, reject scouts, or place them on hold.",
    },
    {
      title: "Assign DES ID",
      icon: "▦",
      text: "Generate a DES player ID and private profile slug.",
    },
    {
      title: "Profile Visibility",
      icon: "🌍",
      text: "Control whether a player profile is private or public.",
    },
    {
      title: "QR Activation",
      icon: "📱",
      text: "Control whether the QR profile is inactive or active.",
    },
    {
      title: "Future Security",
      icon: "🛡️",
      text: "Later, admin access can be upgraded to Supabase Auth and role-based permissions.",
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
              href="/register"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Register
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
              🛡️ DES Super Admin · Players + Scouts Live
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Control DES{" "}
              <span className="text-yellow-400">applications.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This admin area now reads real player applications and real scout
              applications from Supabase. Player profiles can be approved,
              assigned DES IDs, made public, and activated for QR verification.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-5 lg:max-w-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              Protected Admin
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Admin is now password protected. Later, this can be upgraded to
              Supabase Auth with role-based access for DES leadership.
            </p>
          </div>
        </div>

        {(playerError || scoutError) && (
          <div className="mb-8 rounded-[1.5rem] border border-red-500/30 bg-red-950/30 p-5">
            <p className="font-black text-red-100">Supabase Read Error</p>
            {playerError && (
              <p className="mt-2 text-sm leading-6 text-red-100/80">
                Player error: {playerError.message}
              </p>
            )}
            {scoutError && (
              <p className="mt-2 text-sm leading-6 text-red-100/80">
                Scout error: {scoutError.message}
              </p>
            )}
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
                Player Applications
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Review, assign, open and control player profiles.
              </h2>
            </div>

            <span className="rounded-full border border-green-500/25 bg-green-950/30 px-4 py-2 text-sm font-bold text-green-100">
              Supabase live player data
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
                      <div className="mb-3 flex flex-wrap gap-2">
                        <span className="inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                          {formatStatus(player.application_status)}
                        </span>

                        {player.des_id && (
                          <span className="inline-flex rounded-full border border-green-500/25 bg-green-950/30 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-green-200">
                            DES ID Assigned
                          </span>
                        )}

                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${
                            player.profile_visibility === "public"
                              ? "border-green-500/25 bg-green-950/30 text-green-200"
                              : "border-white/10 bg-white/[0.04] text-white/45"
                          }`}
                        >
                          {player.profile_visibility === "public"
                            ? "Public"
                            : "Private"}
                        </span>

                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${
                            player.qr_status === "active"
                              ? "border-green-500/25 bg-green-950/30 text-green-200"
                              : "border-white/10 bg-white/[0.04] text-white/45"
                          }`}
                        >
                          QR{" "}
                          {player.qr_status === "active"
                            ? "Active"
                            : "Inactive"}
                        </span>
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

                      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                        <ApplicationInfo
                          label="DES ID"
                          value={player.des_id || "Not assigned"}
                        />
                        <ApplicationInfo
                          label="Profile Slug"
                          value={player.profile_slug || "Not assigned"}
                        />
                        <ApplicationInfo
                          label="Visibility"
                          value={player.profile_visibility || "private"}
                        />
                        <ApplicationInfo
                          label="QR Status"
                          value={player.qr_status || "inactive"}
                        />
                      </div>

                      {player.des_id && player.profile_slug && (
                        <div className="mt-5 rounded-2xl border border-green-500/20 bg-green-950/20 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-green-200">
                            DES Profile Link
                          </p>

                          <p className="mt-2 break-all text-sm font-bold text-white/80">
                            /id/{player.profile_slug}
                          </p>

                          <a
                            href={`/id/${player.profile_slug}`}
                            className="mt-4 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-black text-black hover:bg-yellow-400"
                          >
                            View DES Profile →
                          </a>
                        </div>
                      )}

                      {player.approved_at && (
                        <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-950/20 p-4">
                          <p className="text-xs uppercase tracking-[0.18em] text-green-200">
                            Approved At
                          </p>
                          <p className="mt-1 text-sm font-bold text-white/80">
                            {new Date(player.approved_at).toLocaleString()}
                          </p>
                        </div>
                      )}

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

                    <div className="w-full xl:w-[340px]">
                      <form
                        action={updatePlayerApplicationStatus}
                        className="rounded-[1.5rem] border border-white/10 bg-black/35 p-5"
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

                      <form
                        action={assignPlayerDesId}
                        className="mt-4 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5"
                      >
                        <input
                          type="hidden"
                          name="applicationId"
                          value={player.id}
                        />

                        <input
                          type="hidden"
                          name="adminNotes"
                          value={player.admin_notes || ""}
                        />

                        <p className="font-black text-yellow-400">
                          DES ID Assignment
                        </p>

                        <p className="mt-2 text-sm leading-6 text-white/70">
                          Assigns a DES Player ID, profile slug, private
                          visibility, and inactive QR status.
                        </p>

                        <button
                          type="submit"
                          className="mt-4 w-full rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
                        >
                          {player.des_id
                            ? "Refresh DES ID Settings"
                            : "Assign DES ID"}
                        </button>
                      </form>

                      {player.des_id && player.profile_slug && (
                        <form
                          action={updatePlayerProfileControls}
                          className="mt-4 rounded-[1.5rem] border border-green-500/20 bg-green-950/20 p-5"
                        >
                          <input
                            type="hidden"
                            name="applicationId"
                            value={player.id}
                          />

                          <input
                            type="hidden"
                            name="profileSlug"
                            value={player.profile_slug}
                          />

                          <p className="font-black text-green-200">
                            Profile Controls
                          </p>

                          <p className="mt-2 text-sm leading-6 text-white/70">
                            Control whether this profile can be shared publicly
                            and whether the QR is active.
                          </p>

                          <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                            Visibility
                          </label>

                          <select
                            name="profileVisibility"
                            defaultValue={player.profile_visibility || "private"}
                            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                          >
                            <option value="private">Private</option>
                            <option value="public">Public</option>
                          </select>

                          <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                            QR Status
                          </label>

                          <select
                            name="qrStatus"
                            defaultValue={player.qr_status || "inactive"}
                            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                          >
                            <option value="inactive">Inactive</option>
                            <option value="active">Active</option>
                          </select>

                          <button
                            type="submit"
                            className="mt-4 w-full rounded-full bg-green-500 px-5 py-3 text-sm font-black text-black hover:bg-green-400"
                          >
                            Save Profile Controls
                          </button>
                        </form>
                      )}

                      {player.des_id && player.profile_slug && (
                        <a
                          href={`/id/${player.profile_slug}`}
                          className="mt-4 block rounded-full border border-green-500/30 bg-green-950/30 px-5 py-3 text-center text-sm font-black text-green-100 hover:bg-green-950/50"
                        >
                          View DES Profile →
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Scout Applications
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Real DES scout applications.
              </h2>
            </div>

            <span className="rounded-full border border-green-500/25 bg-green-950/30 px-4 py-2 text-sm font-bold text-green-100">
              Supabase live scout data
            </span>
          </div>

          {scouts.length === 0 ? (
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xl font-black text-white">
                No scout applications yet.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Submit a test scout application from /register/scout and it
                should appear here.
              </p>

              <a
                href="/register/scout"
                className="mt-6 inline-flex rounded-full bg-yellow-500 px-6 py-3 font-black text-black hover:bg-yellow-400"
              >
                Open Scout Form →
              </a>
            </div>
          ) : (
            <div className="grid gap-5">
              {scouts.map((scout) => (
                <div
                  key={scout.id}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-yellow-400">
                      {formatStatus(scout.application_status)}
                    </span>

                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-white/45">
                      Scout Applicant
                    </span>
                  </div>

                  <h3 className="text-2xl font-black">{scout.full_name}</h3>

                  <p className="mt-2 text-sm text-white/55">{scout.email}</p>

                  <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                    <ApplicationInfo
                      label="Nationality"
                      value={scout.nationality || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Country"
                      value={scout.current_country || "Not provided"}
                    />
                    <ApplicationInfo
                      label="City"
                      value={scout.city || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Phone"
                      value={scout.phone || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Scouting Market"
                      value={scout.scouting_country || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Scouting Region"
                      value={scout.scouting_region || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Experience"
                      value={scout.experience_level || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Football Background"
                      value={scout.football_background || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Current Role"
                      value={scout.current_football_role || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Languages"
                      value={scout.languages || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Availability"
                      value={scout.availability || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Submitted"
                      value={
                        scout.created_at
                          ? new Date(scout.created_at).toLocaleDateString()
                          : "Not provided"
                      }
                    />
                  </div>

                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    <ApplicationInfo
                      label="Transport"
                      value={scout.has_transport || "Not provided"}
                    />
                    <ApplicationInfo
                      label="Can Record Matches"
                      value={scout.can_record_matches || "Not provided"}
                    />
                    <ApplicationInfo
                      label="DES Methodology"
                      value={scout.understands_des_methodology || "Not provided"}
                    />
                  </div>

                  {scout.motivation && (
                    <div className="mt-5 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-yellow-400">
                        Motivation
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/75">
                        {scout.motivation}
                      </p>
                    </div>
                  )}

                  {scout.strengths && (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Player Type / Strengths
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/65">
                        {scout.strengths}
                      </p>
                    </div>
                  )}

                  {scout.notes && (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-black/35 p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                        Extra Scout Notes
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/65">
                        {scout.notes}
                      </p>
                    </div>
                  )}

                  <div className="mt-5 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                    <p className="font-black text-yellow-400">
                      Scout Admin Review
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Review this scout application, save internal notes, and
                      update the application status.
                    </p>

                    {scout.admin_notes && (
                      <div className="mt-4 rounded-2xl border border-white/10 bg-black/35 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                          Current Admin Notes
                        </p>
                        <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/70">
                          {scout.admin_notes}
                        </p>
                      </div>
                    )}

                    {scout.approved_at && (
                      <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-950/20 p-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-green-200">
                          Approved At
                        </p>
                        <p className="mt-1 text-sm font-bold text-white/80">
                          {new Date(scout.approved_at).toLocaleString()}
                        </p>
                      </div>
                    )}

                    <form action={updateScoutApplicationStatus} className="mt-5">
                      <input
                        type="hidden"
                        name="applicationId"
                        value={scout.id}
                      />

                      <label className="mb-2 block text-sm font-bold text-white/80">
                        Scout Admin Notes
                      </label>

                      <textarea
                        name="adminNotes"
                        defaultValue={scout.admin_notes || ""}
                        rows="4"
                        placeholder="Example: Good local knowledge, should complete DES Academy before approval..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                      />

                      <div className="mt-4 grid gap-3 md:grid-cols-4">
                        <button
                          type="submit"
                          name="newStatus"
                          value="approved"
                          className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
                        >
                          Approve Scout
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
                          Reject Scout
                        </button>

                        <button
                          type="submit"
                          name="newStatus"
                          value="pending"
                          className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                        >
                          Reset Pending
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
              The DES control room is expanding.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            The admin area now reads player applications and scout applications.
            Players have full DES ID and QR workflow; scouts are now visible and
            have approval controls.
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
                Add DES Scout ID assignment.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Scout approval controls are now ready. The next step is to add
                DES-SCOUT ID assignment and connect scout approval with DES
                Academy and certificates.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Current Backend Status</h3>

              <div className="mt-6 grid gap-3">
                <StatusRow label="Player Form" value="Saving Data" />
                <StatusRow label="Scout Form" value="Saving Data" />
                <StatusRow label="Admin Login" value="Protected" />
                <StatusRow label="Player Admin" value="Full Workflow" />
                <StatusRow label="Scout Admin" value="Approval Controls" />
              </div>

              <a
                href="/register/scout"
                className="mt-7 block rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Another Scout Test →
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
      <p className="mt-1 break-words text-sm font-bold text-white/85">
        {value}
      </p>
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