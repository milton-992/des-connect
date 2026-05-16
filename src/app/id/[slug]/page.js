import { QRCodeSVG } from "qrcode.react";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export default async function DynamicPlayerProfilePage({ params }) {
  const { slug: profileSlug } = await params;

  const { data: player, error } = await supabaseAdmin
    .from("player_applications")
    .select(
      "full_name, email, nationality, current_country, position, secondary_position, preferred_foot, current_club, previous_clubs, playing_level, application_status, created_at, notes, admin_notes, des_id, profile_slug, profile_visibility, qr_status, approved_at"
    )
    .eq("profile_slug", profileSlug)
    .single();

  const profileUrl = `https://www.des-uae.com/id/${profileSlug}`;

  const isApproved = player?.application_status === "approved";
  const hasDesId = Boolean(player?.des_id);
  const isPublic = player?.profile_visibility === "public";
  const isQrActive = player?.qr_status === "active";

  const profileCanBeViewed = isApproved && hasDesId && isPublic && isQrActive;

  if (error || !player || !profileCanBeViewed) {
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
              Back Home
            </a>
          </div>
        </header>

        <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 py-20">
          <div className="w-full rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-12">
            <div className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
              Profile Not Available
            </div>

            <h1 className="text-5xl font-black leading-[0.95] md:text-7xl">
              DES profile not{" "}
              <span className="text-yellow-400">active.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              This DES profile is not currently available. The player may still
              be pending review, private, missing a DES ID, or the QR profile may
              not be active yet.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Official DES Verification
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                A DES profile is only visible when Draft Elite Sport has
                approved the player, assigned a DES ID, made the profile public,
                and activated the QR status.
              </p>
            </div>

            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-yellow-500 px-8 py-4 font-black text-black hover:bg-yellow-400"
            >
              Return to DES →
            </a>
          </div>
        </section>
      </main>
    );
  }

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

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            ✅ Verified DES Player Profile
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            {player.full_name}
          </h1>

          <p className="mt-5 text-3xl font-black text-yellow-400">
            {player.position || "DES Player"}
          </p>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            This is an approved DES player profile generated from the DES
            application system and activated through the DES admin review
            process.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <StatusBox label="DES ID" value={player.des_id} icon="▦" />
            <StatusBox
              label="Profile Status"
              value={formatStatus(player.application_status)}
              icon="✅"
            />
            <StatusBox
              label="QR Status"
              value={formatStatus(player.qr_status)}
              icon="📱"
            />
            <StatusBox
              label="Visibility"
              value={formatStatus(player.profile_visibility)}
              icon="🌍"
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]/95 shadow-2xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                    DES Player ID
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Verified Profile
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
                  <div className="grid h-32 w-32 shrink-0 place-items-center rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-5xl font-black text-yellow-400">
                    {getInitials(player.full_name)}
                  </div>

                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-green-200">
                      Public QR Active
                    </div>

                    <h3 className="text-4xl font-black">{player.full_name}</h3>

                    <p className="mt-2 text-xl font-bold text-yellow-400">
                      {player.position || "Position not provided"}
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      {player.des_id}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <ProfileInfo label="Nationality" value={player.nationality} />
                  <ProfileInfo
                    label="Current Country"
                    value={player.current_country}
                  />
                  <ProfileInfo
                    label="Preferred Foot"
                    value={player.preferred_foot}
                  />
                  <ProfileInfo
                    label="Secondary Position"
                    value={player.secondary_position}
                  />
                  <ProfileInfo label="Current Club" value={player.current_club} />
                  <ProfileInfo label="Playing Level" value={player.playing_level} />
                  <ProfileInfo
                    label="Previous Clubs"
                    value={player.previous_clubs}
                  />
                  <ProfileInfo
                    label="Approved"
                    value={
                      player.approved_at
                        ? new Date(player.approved_at).toLocaleDateString()
                        : "Approved"
                    }
                  />
                </div>

                {player.notes && (
                  <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                    <p className="font-black text-yellow-400">
                      Player Summary
                    </p>

                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/70">
                      {cleanNotes(player.notes)}
                    </p>
                  </div>
                )}

                {player.admin_notes && (
                  <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <p className="font-black text-white">
                      DES Review Note
                    </p>

                    <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/60">
                      {player.admin_notes}
                    </p>
                  </div>
                )}

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <MiniStat
                    label="Main Role"
                    value={player.position || "Not provided"}
                  />
                  <MiniStat
                    label="Foot"
                    value={player.preferred_foot || "Not provided"}
                  />
                  <MiniStat label="DES Status" value="Verified" />
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      QR destination
                    </p>

                    <p className="mt-1 break-all font-bold text-white">
                      {profileUrl}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Scan this QR code to verify the official DES player
                      profile.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <QRCodeSVG
                      value={profileUrl}
                      size={120}
                      bgColor="#ffffff"
                      fgColor="#000000"
                      level="H"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-red-500/20 bg-red-950/20 p-5">
                <p className="font-black text-red-100">Verification Notice</p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  This profile should only be trusted when opened from the
                  official DES domain and matched with DES internal records.
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
                DES Player Identity
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Public and QR active.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                This page is generated from a real Supabase player application
                that has been approved, assigned a DES Player ID, made public,
                and activated for QR verification.
              </p>
            </div>

            <div className="grid gap-4">
              <FeatureRow
                title="Admin approved"
                text="The player has been reviewed through DES admin workflow."
              />
              <FeatureRow
                title="DES ID assigned"
                text="A unique player ID has been generated for this profile."
              />
              <FeatureRow
                title="Public profile"
                text="DES has approved this profile to be visible publicly."
              />
              <FeatureRow
                title="QR active"
                text="The profile is active for DES QR verification."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Player Profile.
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
      <p className="mt-2 text-xl font-black text-yellow-400">
        {value || "Not set"}
      </p>
    </div>
  );
}

function ProfileInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-1 break-words text-sm font-bold text-white/85">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-yellow-400">
        {value || "Not provided"}
      </p>
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

function getInitials(name) {
  if (!name) return "DP";

  const parts = name.trim().split(" ").filter(Boolean);

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

function cleanNotes(notes) {
  if (!notes) return "";

  return notes
    .replace(/Contract Status:/g, "Contract Status:")
    .replace(/Weight:/g, "Weight:")
    .replace(/Full Match Video:/g, "Full Match Video:")
    .replace(/ZeroZero Link:/g, "ZeroZero Link:")
    .replace(/Player Bio:/g, "Player Bio:")
    .replace(/Main Strengths:/g, "Main Strengths:")
    .replace(/Achievements:/g, "Achievements:");
}

function formatStatus(status) {
  if (!status) return "Not set";

  return status
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}