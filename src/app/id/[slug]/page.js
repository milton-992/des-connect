import { QRCodeSVG } from "qrcode.react";
import { supabaseAdmin } from "../../../lib/supabaseAdmin";

export default async function DynamicProfilePage({ params }) {
  const { slug: profileSlug } = await params;

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ).replace(/\/$/, "");

  const profileUrl = `${siteUrl}/id/${profileSlug}`;

  const { data: player } = await supabaseAdmin
    .from("player_applications")
    .select(
      "full_name, email, nationality, current_country, position, secondary_position, preferred_foot, current_club, previous_clubs, playing_level, application_status, created_at, notes, admin_notes, des_id, profile_slug, profile_visibility, qr_status, approved_at"
    )
    .eq("profile_slug", profileSlug)
    .maybeSingle();

  if (player) {
    const isApproved = player.application_status === "approved";
    const hasDesId = Boolean(player.des_id);
    const isPublic = player.profile_visibility === "public";
    const isQrActive = player.qr_status === "active";

    const profileCanBeViewed = isApproved && hasDesId && isPublic && isQrActive;

    if (!profileCanBeViewed) {
      return <ProfileNotAvailable profileType="player" />;
    }

    return <PlayerProfile player={player} profileUrl={profileUrl} />;
  }

  const { data: scout } = await supabaseAdmin
    .from("scout_applications")
    .select(
      "full_name, email, phone, nationality, current_country, city, scouting_country, scouting_region, football_background, current_football_role, experience_level, languages, availability, has_transport, can_record_matches, understands_des_methodology, motivation, strengths, notes, application_status, admin_notes, created_at, approved_at, des_scout_id, scout_profile_slug, profile_public, qr_active, academy_status, certificate_title, certificate_level, certificate_status, certificate_issue_date, certificate_expiry_date, certificate_url"
    )
    .eq("scout_profile_slug", profileSlug)
    .maybeSingle();

  if (scout) {
    const isApproved = scout.application_status === "approved";
    const hasScoutId = Boolean(scout.des_scout_id);
    const isPublic = scout.profile_public === true;
    const isQrActive = scout.qr_active === true;

    const profileCanBeViewed =
      isApproved && hasScoutId && isPublic && isQrActive;

    if (!profileCanBeViewed) {
      return <ProfileNotAvailable profileType="scout" />;
    }

    return <ScoutProfile scout={scout} profileUrl={profileUrl} />;
  }

  return <ProfileNotAvailable profileType="profile" />;
}

function ProfileNotAvailable({ profileType }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Header buttonText="Back Home" />

      <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 py-20">
        <div className="w-full rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-12">
          <div className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            Profile Not Available
          </div>

          <h1 className="text-5xl font-black leading-[0.95] md:text-7xl">
            DES profile not <span className="text-yellow-400">active.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            This DES {profileType} profile is not currently available. It may
            still be pending review, private, missing a DES ID, or the QR status
            may not be active yet.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
            <p className="font-black text-yellow-400">
              Official DES Verification
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              A DES profile is only visible when Draft Elite Sport has approved
              the application, assigned a DES ID, made the profile public, and
              activated the QR status.
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

function PlayerProfile({ player, profileUrl }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Header buttonText="Visit DES" />

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
            <ProfileCardHeader title="DES Player ID" subtitle="Verified Profile" />

            <div className="p-6 md:p-8">
              <div className="rounded-3xl border border-white/10 bg-black/50 p-6">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                  <InitialsBox name={player.full_name} fallback="DP" />

                  <div>
                    <VerifiedBadge text="Public QR Active" />

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
                  <TextPanel title="Player Summary" text={cleanNotes(player.notes)} />
                )}

                {player.admin_notes && (
                  <TextPanel title="DES Review Note" text={player.admin_notes} muted />
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

              <QrBox
                profileUrl={profileUrl}
                text="Scan this QR code to verify the official DES player profile."
              />

              <VerificationNotice />
            </div>
          </div>
        </div>
      </section>

      <Footer text="DES Player Profile" />
    </main>
  );
}

function ScoutProfile({ scout, profileUrl }) {
  const academyStatus = formatStatus(scout.academy_status);
  const certificateStatus = formatStatus(scout.certificate_status);
  const isCertificateIssued = scout.certificate_status === "issued";
  const isAcademyCertified = scout.academy_status === "certified";

  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Header buttonText="Visit DES" />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm font-bold text-green-100">
              ✅ Official DES Verified Scout
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              {scout.full_name}
            </h1>

            <p className="mt-5 text-3xl font-black text-yellow-400">
              {scout.des_scout_id}
            </p>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This scout has been reviewed through the DES admin system and is
              connected to Draft Elite Sport’s internal verification workflow,
              methodology pathway, and Academy certificate controls.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/25 bg-gradient-to-br from-yellow-400/15 to-red-900/20 p-6">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
              Verification Status
            </p>

            <div className="mt-5 grid gap-3">
              <OfficialCheck label="Admin Approved" active />
              <OfficialCheck label="DES-SCOUT ID Assigned" active />
              <OfficialCheck label="Public Profile Active" active />
              <OfficialCheck label="QR Verification Active" active />
              <OfficialCheck
                label="DES Academy Certified"
                active={isAcademyCertified}
              />
              <OfficialCheck
                label="Certificate Issued"
                active={isCertificateIssued}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]/95 shadow-2xl">
              <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                      DES Scout Credential
                    </p>
                    <h2 className="mt-2 text-3xl font-black">
                      Official Verification Card
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
                <div className="rounded-3xl border border-yellow-400/20 bg-black/50 p-6">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <InitialsBox name={scout.full_name} fallback="DS" />

                    <div>
                      <VerifiedBadge text="DES Verified Scout" />

                      <h3 className="text-4xl font-black">{scout.full_name}</h3>

                      <p className="mt-2 text-xl font-bold text-yellow-400">
                        {scout.current_football_role || "DES Scout"}
                      </p>

                      <p className="mt-2 text-sm font-bold text-white/55">
                        {scout.des_scout_id}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4">
                    <CredentialStrip
                      label="Credential Type"
                      value="Official DES Scout Verification"
                    />
                    <CredentialStrip
                      label="Academy Status"
                      value={academyStatus}
                    />
                    <CredentialStrip
                      label="Certificate Status"
                      value={certificateStatus}
                    />
                    <CredentialStrip
                      label="Verification Domain"
                      value="DES internal record + public QR profile"
                    />
                  </div>
                </div>

                <QrBox
                  profileUrl={profileUrl}
                  text="Scan this QR code to verify the official DES scout profile."
                />

                <VerificationNotice />
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                DES Academy
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Methodology & certificate connection.
              </h2>

              <div className="mt-6 grid gap-3">
                <ProfileInfo
                  label="Academy Status"
                  value={academyStatus}
                />
                <ProfileInfo
                  label="Certificate Title"
                  value={scout.certificate_title || "Not issued"}
                />
                <ProfileInfo
                  label="Certificate Level"
                  value={scout.certificate_level || "Not set"}
                />
                <ProfileInfo
                  label="Certificate Status"
                  value={certificateStatus}
                />
                <ProfileInfo
                  label="Issue Date"
                  value={
                    scout.certificate_issue_date
                      ? new Date(scout.certificate_issue_date).toLocaleDateString()
                      : "Not issued"
                  }
                />
                <ProfileInfo
                  label="Expiry Date"
                  value={
                    scout.certificate_expiry_date
                      ? new Date(scout.certificate_expiry_date).toLocaleDateString()
                      : "Not set"
                  }
                />
              </div>

              {scout.certificate_url && (
                <a
                  href={scout.certificate_url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-yellow-500 px-6 py-3 text-sm font-black text-black hover:bg-yellow-400"
                >
                  Open DES Academy Certificate →
                </a>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Scout Profile
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Scouting identity and market coverage.
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <ProfileInfo label="Nationality" value={scout.nationality} />
                <ProfileInfo
                  label="Current Country"
                  value={scout.current_country}
                />
                <ProfileInfo label="City" value={scout.city} />
                <ProfileInfo
                  label="Scouting Country"
                  value={scout.scouting_country}
                />
                <ProfileInfo
                  label="Scouting Region"
                  value={scout.scouting_region}
                />
                <ProfileInfo
                  label="Experience Level"
                  value={scout.experience_level}
                />
                <ProfileInfo
                  label="Football Background"
                  value={scout.football_background}
                />
                <ProfileInfo
                  label="Current Role"
                  value={scout.current_football_role}
                />
                <ProfileInfo label="Languages" value={scout.languages} />
                <ProfileInfo label="Availability" value={scout.availability} />
                <ProfileInfo
                  label="Transport"
                  value={scout.has_transport}
                />
                <ProfileInfo
                  label="Can Record Matches"
                  value={scout.can_record_matches}
                />
                <ProfileInfo
                  label="DES Methodology"
                  value={scout.understands_des_methodology}
                />
                <ProfileInfo
                  label="Approved"
                  value={
                    scout.approved_at
                      ? new Date(scout.approved_at).toLocaleDateString()
                      : "Approved"
                  }
                />
              </div>
            </div>

            {scout.motivation && (
              <TextPanel title="Scout Motivation" text={scout.motivation} />
            )}

            {scout.strengths && (
              <TextPanel title="Scouting Strengths" text={scout.strengths} muted />
            )}

            {scout.admin_notes && (
              <TextPanel title="DES Review Note" text={scout.admin_notes} muted />
            )}

            <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                Official DES Verification
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Trusted only through DES records.
              </h2>

              <p className="mt-4 text-sm leading-7 text-white/65">
                This page verifies that the scout profile is active inside the
                DES Connect system. It does not replace legal licensing,
                federation registration, or third-party regulatory checks where
                those are required.
              </p>

              <div className="mt-6 grid gap-4">
                <FeatureRow
                  title="DES-SCOUT ID assigned"
                  text="This scout has a unique identifier inside the DES Connect database."
                />
                <FeatureRow
                  title="QR verification active"
                  text="The QR profile has been activated by DES admin."
                />
                <FeatureRow
                  title="Academy-ready"
                  text="The profile is connected to DES Academy progress and certificate fields."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer text="DES Scout Profile" />
    </main>
  );
}

function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(180,20,20,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_30%),linear-gradient(180deg,#050505,#000)]" />
  );
}

function Header({ buttonText }) {
  return (
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
          {buttonText}
        </a>
      </div>
    </header>
  );
}

function ProfileCardHeader({ title, subtitle }) {
  return (
    <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            {title}
          </p>
          <h2 className="mt-2 text-3xl font-black">{subtitle}</h2>
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
  );
}

function InitialsBox({ name, fallback }) {
  return (
    <div className="grid h-32 w-32 shrink-0 place-items-center rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-5xl font-black text-yellow-400">
      {getInitials(name, fallback)}
    </div>
  );
}

function VerifiedBadge({ text }) {
  return (
    <div className="mb-3 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-green-200">
      {text}
    </div>
  );
}

function OfficialCheck({ label, active }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-2xl border p-4 ${
        active
          ? "border-green-500/25 bg-green-950/30"
          : "border-white/10 bg-black/30"
      }`}
    >
      <p className="text-sm font-bold text-white/80">{label}</p>
      <span
        className={`rounded-full px-3 py-1 text-xs font-black ${
          active ? "bg-green-500 text-black" : "bg-white/10 text-white/45"
        }`}
      >
        {active ? "ACTIVE" : "PENDING"}
      </span>
    </div>
  );
}

function CredentialStrip({ label, value }) {
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

function QrBox({ profileUrl, text }) {
  return (
    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            QR destination
          </p>

          <p className="mt-1 break-all font-bold text-white">{profileUrl}</p>

          <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
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
  );
}

function VerificationNotice() {
  return (
    <div className="mt-6 rounded-[1.5rem] border border-red-500/20 bg-red-950/20 p-5">
      <p className="font-black text-red-100">Verification Notice</p>

      <p className="mt-2 text-sm leading-6 text-white/60">
        This profile should only be trusted when opened from the official DES
        domain and matched with DES internal records.
      </p>
    </div>
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

function TextPanel({ title, text, muted = false }) {
  return (
    <div
      className={`rounded-[1.5rem] border p-5 ${
        muted
          ? "border-white/10 bg-white/[0.04]"
          : "border-yellow-400/20 bg-yellow-400/10"
      }`}
    >
      <p className={muted ? "font-black text-white" : "font-black text-yellow-400"}>
        {title}
      </p>

      <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/70">
        {text}
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

function Footer({ text }) {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
      © {new Date().getFullYear()} Draft Elite Sport. {text}.
    </footer>
  );
}

function getInitials(name, fallback = "DP") {
  if (!name) return fallback;

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

  if (status === true) return "Active";
  if (status === false) return "Inactive";

  return String(status)
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}