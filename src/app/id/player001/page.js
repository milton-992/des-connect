"use client";

import { QRCodeSVG } from "qrcode.react";

export default function PlayerIDPage() {
  const profileUrl = "https://www.des-uae.com/id/player001";

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
            ✅ Verified DES Player Profile
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Player <span className="text-yellow-400">DES ID</span> profile.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            This sample DES player profile shows how clubs, scouts, coaches,
            and event staff can verify a player through a QR code and review
            structured football information.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <StatusBox label="Profile Status" value="Verified Sample" icon="✅" />
            <StatusBox label="Position" value="Right Winger" icon="⚽" />
            <StatusBox label="Age Group" value="U23" icon="📊" />
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
                    DES Player ID
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    Verified Player Profile
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
                  <div className="grid h-32 w-32 shrink-0 place-items-center rounded-3xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-5xl font-black">
                    P1
                  </div>

                  <div>
                    <div className="mb-3 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-green-200">
                      Active / Verified Sample
                    </div>

                    <h3 className="text-4xl font-black">Player One</h3>

                    <p className="mt-2 text-xl font-bold text-yellow-400">
                      Right Winger
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      DES Player Profile · Sample
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <ProfileInfo label="DES ID" value="DES-PLAYER-0001" />
                  <ProfileInfo label="Nationality" value="Portugal" />
                  <ProfileInfo label="Age" value="21" />
                  <ProfileInfo label="Height" value="1.78m" />
                  <ProfileInfo label="Preferred Foot" value="Right" />
                  <ProfileInfo label="Secondary Position" value="Left Winger" />
                  <ProfileInfo label="Current Club" value="Free Agent / Sample" />
                  <ProfileInfo label="Availability" value="Open to Trial" />
                </div>

                <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                  <p className="font-black text-yellow-400">
                    Player Summary
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Explosive wide player with pace, direct 1v1 attacking,
                    crossing ability, and strong work rate. This is a sample DES
                    player profile created to demonstrate how verified player
                    ID pages will look.
                  </p>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <MiniStat label="Main Strength" value="1v1 Attacking" />
                  <MiniStat label="Style" value="Direct Winger" />
                  <MiniStat label="Status" value="Trial Ready" />
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/register/player"
                    className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
                  >
                    Player Application →
                  </a>

                  <a
                    href="/clubs"
                    className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
                  >
                    Club Recruitment
                  </a>
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
                      Scan this QR code to verify the sample DES player profile.
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
                  This is a sample DES player ID page. Real player profiles
                  should only be trusted when opened from the official DES
                  website domain and marked as approved by DES leadership.
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
                Built for clubs, trials, scouting, and fast verification.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Player DES ID pages can help clubs and scouts quickly review a
                player’s verified football information, availability, videos,
                and event approval status.
              </p>
            </div>

            <div className="grid gap-4">
              <FeatureRow
                title="Club-ready profile"
                text="Structured information for coaches, clubs, and sports directors."
              />
              <FeatureRow
                title="QR verification"
                text="Scan from a lanyard, PVC card, event list, or player document."
              />
              <FeatureRow
                title="Trial support"
                text="Useful for check-ins, event access, and showcase participation."
              />
              <FeatureRow
                title="Future database ready"
                text="Later, Supabase will generate these profiles automatically from player data."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. Sample Player DES ID.
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

function MiniStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-yellow-400">{value}</p>
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