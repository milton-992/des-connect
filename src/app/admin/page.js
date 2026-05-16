import { supabaseAdmin } from "../../lib/supabaseAdmin";
import {
  assignPlayerDesId,
  assignScoutDesId,
  updatePlayerApplicationStatus,
  updatePlayerProfileControls,
  updateScoutApplicationStatus,
  updateScoutProfileControls,
} from "./actions";

export default async function AdminPage() {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
    /\/$/,
    ""
  );

  const { data: playerApplications, error: playerError } = await supabaseAdmin
    .from("player_applications")
    .select(
      "id, full_name, email, nationality, current_country, position, secondary_position, preferred_foot, current_club, playing_level, application_status, created_at, notes, admin_notes, des_id, profile_slug, profile_visibility, qr_status, approved_at"
    )
    .order("created_at", { ascending: false });

  const { data: scoutApplications, error: scoutError } = await supabaseAdmin
    .from("scout_applications")
    .select(
      "id, full_name, email, phone, nationality, current_country, city, scouting_country, scouting_region, football_background, current_football_role, experience_level, languages, availability, has_transport, can_record_matches, understands_des_methodology, motivation, strengths, notes, application_status, admin_notes, created_at, approved_at, des_scout_id, scout_profile_slug, profile_public, qr_active, academy_status, certificate_title, certificate_level, certificate_status, certificate_issue_date, certificate_expiry_date, certificate_url"
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

  const assignedDesIds = players.filter((player) => player.des_id);
  const assignedScoutIds = scouts.filter((scout) => scout.des_scout_id);
  const certifiedScouts = scouts.filter(
    (scout) => scout.certificate_status === "issued"
  );

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
      title: "IDs / Certificates",
      value: `${assignedDesIds.length + assignedScoutIds.length}/${certifiedScouts.length}`,
      status: "Controlled",
      icon: "🎓",
      text: "Assigned DES IDs and issued DES Academy scout certificates.",
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
      title: "Assign DES IDs",
      icon: "▦",
      text: "Generate DES player IDs and DES-SCOUT IDs from the admin panel.",
    },
    {
      title: "Profile Visibility",
      icon: "🌍",
      text: "Control whether a player or scout profile is private/public.",
    },
    {
      title: "QR Activation",
      icon: "📱",
      text: "Control whether DES QR profiles are inactive or active.",
    },
    {
      title: "DES Academy Certificates",
      icon: "🎓",
      text: "Connect approved scouts with DES Academy status, certificate level, and certificate URL.",
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
              This admin area reads real player applications and real scout
              applications from Supabase. Players and scouts can now be
              reviewed, approved, assigned DES IDs, and prepared for QR/profile
              verification.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-5 lg:max-w-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              Protected Admin
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Admin is password protected. Later, this can be upgraded to
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
            <EmptyBox
              title="No player applications yet."
              text="Submit a test application from /register/player and it should appear here."
              href="/register/player"
              button="Open Player Form →"
            />
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
                        <Badge text={formatStatus(player.application_status)} />
                        {player.des_id && <Badge text="DES ID Assigned" green />}
                        <Badge
                          text={
                            player.profile_visibility === "public"
                              ? "Public"
                              : "Private"
                          }
                          green={player.profile_visibility === "public"}
                          muted={player.profile_visibility !== "public"}
                        />
                        <Badge
                          text={
                            player.qr_status === "active"
                              ? "QR Active"
                              : "QR Inactive"
                          }
                          green={player.qr_status === "active"}
                          muted={player.qr_status !== "active"}
                        />
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
                        <ApprovedBox date={player.approved_at} />
                      )}

                      {player.notes && (
                        <TextBox
                          title="Player Notes / Bio / Extra Info"
                          text={player.notes}
                        />
                      )}

                      {player.admin_notes && (
                        <TextBox
                          title="Current Admin Notes"
                          text={player.admin_notes}
                          yellow
                        />
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
                          <StatusButton value="approved" text="Approve Player" />
                          <StatusButton value="on_hold" text="Put On Hold" hold />
                          <StatusButton value="rejected" text="Reject Player" reject />
                          <StatusButton value="pending" text="Reset to Pending" reset />
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
                Review, assign DES-SCOUT IDs and connect Academy certificates.
              </h2>
            </div>

            <span className="rounded-full border border-green-500/25 bg-green-950/30 px-4 py-2 text-sm font-bold text-green-100">
              Supabase live scout data
            </span>
          </div>

          {scouts.length === 0 ? (
            <EmptyBox
              title="No scout applications yet."
              text="Submit a test scout application from /register/scout and it should appear here."
              href="/register/scout"
              button="Open Scout Form →"
            />
          ) : (
            <div className="grid gap-5">
              {scouts.map((scout) => {
                const scoutProfilePath = scout.scout_profile_slug
                  ? `/id/${scout.scout_profile_slug}`
                  : "";
                const scoutProfileUrl = scout.scout_profile_slug
                  ? `${siteUrl}${scoutProfilePath}`
                  : "";
                const scoutQrUrl = scoutProfileUrl
                  ? `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
                      scoutProfileUrl
                    )}`
                  : "";

                return (
                  <div
                    key={scout.id}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex flex-wrap gap-2">
                          <Badge text={formatStatus(scout.application_status)} />

                          <Badge text="Scout Applicant" muted />

                          {scout.des_scout_id && (
                            <Badge text="DES-SCOUT ID Assigned" green />
                          )}

                          <Badge
                            text={scout.profile_public ? "Public" : "Private"}
                            green={scout.profile_public}
                            muted={!scout.profile_public}
                          />

                          <Badge
                            text={scout.qr_active ? "QR Active" : "QR Inactive"}
                            green={scout.qr_active}
                            muted={!scout.qr_active}
                          />

                          <Badge
                            text={`Certificate: ${formatCertificateStatus(
                              scout.certificate_status
                            )}`}
                            green={scout.certificate_status === "issued"}
                          />
                        </div>

                        <h3 className="text-2xl font-black">
                          {scout.full_name}
                        </h3>

                        <p className="mt-2 text-sm text-white/55">
                          {scout.email}
                        </p>

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
                            value={
                              scout.understands_des_methodology || "Not provided"
                            }
                          />
                        </div>

                        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                          <ApplicationInfo
                            label="DES-SCOUT ID"
                            value={scout.des_scout_id || "Not assigned"}
                          />
                          <ApplicationInfo
                            label="Scout Slug"
                            value={scout.scout_profile_slug || "Not assigned"}
                          />
                          <ApplicationInfo
                            label="Profile"
                            value={scout.profile_public ? "Public" : "Private"}
                          />
                          <ApplicationInfo
                            label="QR"
                            value={scout.qr_active ? "Active" : "Inactive"}
                          />
                          <ApplicationInfo
                            label="Academy Status"
                            value={formatAcademyStatus(scout.academy_status)}
                          />
                          <ApplicationInfo
                            label="Certificate Title"
                            value={scout.certificate_title || "Not issued"}
                          />
                          <ApplicationInfo
                            label="Certificate Level"
                            value={scout.certificate_level || "Not set"}
                          />
                          <ApplicationInfo
                            label="Certificate Status"
                            value={formatCertificateStatus(
                              scout.certificate_status
                            )}
                          />
                        </div>

                        {scoutProfileUrl && (
                          <div className="mt-5 grid gap-5 rounded-2xl border border-green-500/20 bg-green-950/20 p-5 lg:grid-cols-[1fr_260px] lg:items-center">
                            <div>
                              <p className="text-xs uppercase tracking-[0.18em] text-green-200">
                                Scout QR Verification Link
                              </p>

                              <p className="mt-2 break-all text-sm font-bold text-white/80">
                                {scoutProfileUrl}
                              </p>

                              {!scout.qr_active && (
                                <p className="mt-3 rounded-2xl border border-yellow-400/20 bg-yellow-400/10 p-3 text-sm font-bold text-yellow-200">
                                  QR code is created, but status is currently
                                  inactive. Change QR Status to Active when you
                                  want this scout QR to be usable officially.
                                </p>
                              )}

                              <a
                                href={scoutProfilePath}
                                className="mt-4 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-black text-black hover:bg-yellow-400"
                              >
                                Open Scout Profile →
                              </a>
                            </div>

                            <div className="rounded-[1.5rem] border border-white/10 bg-white p-4">
                              <img
                                src={scoutQrUrl}
                                alt={`${scout.des_scout_id || "Scout"} QR code`}
                                className="mx-auto h-56 w-56 object-contain"
                              />
                            </div>
                          </div>
                        )}

                        {scout.certificate_url && (
                          <div className="mt-5 rounded-2xl border border-green-500/20 bg-green-950/20 p-4">
                            <p className="text-xs uppercase tracking-[0.18em] text-green-200">
                              DES Academy Certificate Link
                            </p>

                            <p className="mt-2 break-all text-sm font-bold text-white/80">
                              {scout.certificate_url}
                            </p>

                            <a
                              href={scout.certificate_url}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-4 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-black text-black hover:bg-yellow-400"
                            >
                              Open Certificate →
                            </a>
                          </div>
                        )}

                        {scout.motivation && (
                          <TextBox
                            title="Motivation"
                            text={scout.motivation}
                            yellow
                          />
                        )}

                        {scout.strengths && (
                          <TextBox
                            title="Player Type / Strengths"
                            text={scout.strengths}
                          />
                        )}

                        {scout.notes && (
                          <TextBox title="Extra Scout Notes" text={scout.notes} />
                        )}

                        {scout.admin_notes && (
                          <TextBox
                            title="Current Admin Notes"
                            text={scout.admin_notes}
                            yellow
                          />
                        )}

                        {scout.approved_at && (
                          <ApprovedBox date={scout.approved_at} />
                        )}
                      </div>

                      <div className="w-full xl:w-[380px]">
                        <form
                          action={updateScoutApplicationStatus}
                          className="rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5"
                        >
                          <input
                            type="hidden"
                            name="applicationId"
                            value={scout.id}
                          />

                          <p className="font-black text-yellow-400">
                            Scout Admin Review
                          </p>

                          <p className="mt-2 text-sm leading-6 text-white/70">
                            Review this scout application, save internal notes,
                            and update the application status.
                          </p>

                          <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                            Scout Admin Notes
                          </label>

                          <textarea
                            name="adminNotes"
                            defaultValue={scout.admin_notes || ""}
                            rows="4"
                            placeholder="Example: Good local knowledge, should complete DES Academy before approval..."
                            className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                          />

                          <div className="mt-4 grid gap-3">
                            <StatusButton value="approved" text="Approve Scout" />
                            <StatusButton value="on_hold" text="Put On Hold" hold />
                            <StatusButton value="rejected" text="Reject Scout" reject />
                            <StatusButton value="pending" text="Reset Pending" reset />
                          </div>
                        </form>

                        <form
                          action={assignScoutDesId}
                          className="mt-4 rounded-[1.5rem] border border-green-500/20 bg-green-950/20 p-5"
                        >
                          <input
                            type="hidden"
                            name="applicationId"
                            value={scout.id}
                          />

                          <input
                            type="hidden"
                            name="adminNotes"
                            value={scout.admin_notes || ""}
                          />

                          <p className="font-black text-green-200">
                            DES-SCOUT ID Assignment
                          </p>

                          <p className="mt-2 text-sm leading-6 text-white/70">
                            Assigns a DES-SCOUT ID and prepares the scout for DES
                            Academy, QR and certificate controls.
                          </p>

                          <button
                            type="submit"
                            className="mt-4 w-full rounded-full bg-green-500 px-5 py-3 text-sm font-black text-black hover:bg-green-400"
                          >
                            {scout.des_scout_id
                              ? "Refresh DES-SCOUT Settings"
                              : "Assign DES-SCOUT ID"}
                          </button>
                        </form>

                        {scout.des_scout_id && (
                          <form
                            action={updateScoutProfileControls}
                            className="mt-4 rounded-[1.5rem] border border-white/10 bg-black/35 p-5"
                          >
                            <input
                              type="hidden"
                              name="applicationId"
                              value={scout.id}
                            />

                            <input
                              type="hidden"
                              name="scoutProfileSlug"
                              value={scout.scout_profile_slug || ""}
                            />

                            <p className="font-black text-white">
                              Academy / Certificate Controls
                            </p>

                            <p className="mt-2 text-sm leading-6 text-white/70">
                              Control scout profile visibility, QR status,
                              Academy progress and certificate connection.
                            </p>

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Scout Profile Visibility
                            </label>

                            <select
                              name="profilePublic"
                              defaultValue={
                                scout.profile_public ? "true" : "false"
                              }
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                            >
                              <option value="false">Private</option>
                              <option value="true">Public</option>
                            </select>

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              QR Status
                            </label>

                            <select
                              name="qrActive"
                              defaultValue={scout.qr_active ? "true" : "false"}
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                            >
                              <option value="false">Inactive</option>
                              <option value="true">Active</option>
                            </select>

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Academy Status
                            </label>

                            <select
                              name="academyStatus"
                              defaultValue={
                                scout.academy_status || "not_started"
                              }
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                            >
                              <option value="not_started">Not Started</option>
                              <option value="in_progress">In Progress</option>
                              <option value="passed">Passed</option>
                              <option value="failed">Failed</option>
                              <option value="certified">Certified</option>
                            </select>

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Certificate Title
                            </label>

                            <input
                              name="certificateTitle"
                              defaultValue={scout.certificate_title || ""}
                              placeholder="DES Scouting Methodology Certificate"
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                            />

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Certificate Level
                            </label>

                            <input
                              name="certificateLevel"
                              defaultValue={scout.certificate_level || ""}
                              placeholder="Level 1 / Foundation / Advanced"
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                            />

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Certificate Status
                            </label>

                            <select
                              name="certificateStatus"
                              defaultValue={
                                scout.certificate_status || "not_issued"
                              }
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                            >
                              <option value="not_issued">Not Issued</option>
                              <option value="issued">Issued</option>
                              <option value="expired">Expired</option>
                              <option value="revoked">Revoked</option>
                            </select>

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Issue Date
                            </label>

                            <input
                              type="date"
                              name="certificateIssueDate"
                              defaultValue={scout.certificate_issue_date || ""}
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                            />

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Expiry Date
                            </label>

                            <input
                              type="date"
                              name="certificateExpiryDate"
                              defaultValue={scout.certificate_expiry_date || ""}
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400"
                            />

                            <label className="mt-4 mb-2 block text-sm font-bold text-white/80">
                              Certificate URL
                            </label>

                            <input
                              name="certificateUrl"
                              defaultValue={scout.certificate_url || ""}
                              placeholder="/academy/certificates/des-scout-0001 or external PDF link"
                              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                            />

                            <button
                              type="submit"
                              className="mt-5 w-full rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
                            >
                              Save Academy / Certificate Controls
                            </button>
                          </form>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
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
            Players have full DES ID and QR workflow; scouts now have DES-SCOUT
            ID assignment, QR generation and Academy certificate controls.
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
                Build public scout verification pages.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Scout QR codes are now generated in admin. The next step is to
                make /id/scout-0001 show a real public scout verification page,
                similar to the player DES profile.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Current Backend Status</h3>

              <div className="mt-6 grid gap-3">
                <StatusRow label="Player Form" value="Saving Data" />
                <StatusRow label="Scout Form" value="Saving Data" />
                <StatusRow label="Admin Login" value="Protected" />
                <StatusRow label="Player Admin" value="Full Workflow" />
                <StatusRow label="Scout Admin" value="DES-SCOUT + QR" />
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

function EmptyBox({ title, text, href, button }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
      <p className="text-xl font-black text-white">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>

      <a
        href={href}
        className="mt-6 inline-flex rounded-full bg-yellow-500 px-6 py-3 font-black text-black hover:bg-yellow-400"
      >
        {button}
      </a>
    </div>
  );
}

function Badge({ text, green = false, muted = false }) {
  return (
    <span
      className={`inline-flex rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.16em] ${
        green
          ? "border-green-500/25 bg-green-950/30 text-green-200"
          : muted
            ? "border-white/10 bg-white/[0.04] text-white/45"
            : "border-yellow-400/25 bg-yellow-400/10 text-yellow-400"
      }`}
    >
      {text}
    </span>
  );
}

function StatusButton({ value, text, hold = false, reject = false, reset = false }) {
  return (
    <button
      type="submit"
      name="newStatus"
      value={value}
      className={`rounded-full px-5 py-3 text-sm font-black ${
        reject
          ? "border border-red-500/30 bg-red-950/30 text-red-100 hover:bg-red-950/50"
          : hold
            ? "border border-yellow-400/25 bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20"
            : reset
              ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
              : "bg-yellow-500 text-black hover:bg-yellow-400"
      }`}
    >
      {text}
    </button>
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

function TextBox({ title, text, yellow = false }) {
  return (
    <div
      className={`mt-5 rounded-2xl border p-4 ${
        yellow
          ? "border-yellow-400/20 bg-yellow-400/10"
          : "border-white/10 bg-black/35"
      }`}
    >
      <p
        className={`text-xs uppercase tracking-[0.18em] ${
          yellow ? "text-yellow-400" : "text-white/35"
        }`}
      >
        {title}
      </p>
      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/70">
        {text}
      </p>
    </div>
  );
}

function ApprovedBox({ date }) {
  return (
    <div className="mt-4 rounded-2xl border border-green-500/20 bg-green-950/20 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-green-200">
        Approved At
      </p>
      <p className="mt-1 text-sm font-bold text-white/80">
        {new Date(date).toLocaleString()}
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

function formatAcademyStatus(status) {
  if (status === "in_progress") return "In Progress";
  if (status === "passed") return "Passed";
  if (status === "failed") return "Failed";
  if (status === "certified") return "Certified";
  return "Not Started";
}

function formatCertificateStatus(status) {
  if (status === "issued") return "Issued";
  if (status === "expired") return "Expired";
  if (status === "revoked") return "Revoked";
  return "Not Issued";
}