"use client";

import { QRCodeSVG } from "qrcode.react";

export default function CertificatesPage() {
  const certificateUrl = "https://www.des-uae.com/academy/certificates";

  const certificateTypes = [
    {
      title: "DES Scouting Methodology Certificate",
      level: "Scout",
      text: "Awarded to scouts who complete the DES scouting methodology material and pass the required assessment.",
    },
    {
      title: "DES Event Staff Certificate",
      level: "Staff",
      text: "Awarded to staff and volunteers who understand DES event-day standards, check-in processes, and conduct rules.",
    },
    {
      title: "DES Player Evaluation Certificate",
      level: "Advanced",
      text: "Awarded to approved scouts who complete deeper player evaluation and report-writing training.",
    },
  ];

  const futureFlow = [
    "User studies DES Academy material",
    "User completes the DES test",
    "Admin reviews the result",
    "Status changes to Passed",
    "Certificate is created",
    "Certificate appears in the user dashboard",
    "User can view or download the certificate",
    "QR code verifies certificate status publicly",
  ];

  const certificateRules = [
    "Certificates are only valid when issued by Draft Elite Sport.",
    "Certificates can be suspended or revoked by DES leadership.",
    "A certificate does not guarantee employment, representation, or club access.",
    "Certificates confirm DES Academy completion only.",
    "Clubs and partners should verify certificates using the official DES domain.",
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
              <p className="text-xl font-black tracking-[0.28em] text-white">
                DES
              </p>
              <p className="text-xs uppercase tracking-[0.32em] text-yellow-400">
                Draft Elite Sport
              </p>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href="/academy/materials"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Materials
            </a>

            <a
              href="/academy"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Academy
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-100">
            🏆 DES Academy Certificates
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Verified learning.{" "}
            <span className="text-yellow-400">Professional proof.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES certificates will confirm when scouts, staff, and volunteers
            complete Academy material, pass the required assessment, and receive
            approval from Draft Elite Sport.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">
            Later, certificates can appear inside user profiles, be downloaded
            as PDF, and include QR verification so clubs, partners, and DES
            leadership can confirm certificate status.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/academy/materials"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Study Materials →
            </a>

            <a
              href="/academy"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              Back to Academy
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]/95 shadow-2xl">
            <div className="border-b border-white/10 bg-gradient-to-r from-yellow-500/10 to-red-600/10 p-6">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                    Certificate Preview
                  </p>
                  <h2 className="mt-2 text-3xl font-black">
                    DES Academy Completion
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
              <div className="rounded-3xl border border-yellow-400/25 bg-black/60 p-6">
                <div className="mb-5 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-green-200">
                  Valid Certificate Preview
                </div>

                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  Draft Elite Sport
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  DES Scouting Methodology Certificate
                </h3>

                <p className="mt-5 text-sm leading-7 text-white/65">
                  This certificate preview shows how a completed DES Academy
                  certificate may appear after a user passes the course and is
                  approved by admin.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <CertificateInfo label="Certificate ID" value="DES-CERT-0001" />
                  <CertificateInfo label="Issued To" value="Sample Scout" />
                  <CertificateInfo label="Course" value="Scouting Methodology" />
                  <CertificateInfo label="Status" value="Valid" />
                  <CertificateInfo label="Issued Date" value="Future system" />
                  <CertificateInfo label="Verification" value="QR Enabled" />
                </div>

                <div className="mt-8 flex flex-col gap-5 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Verification QR
                    </p>

                    <p className="mt-1 break-all font-bold text-white">
                      {certificateUrl}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/50">
                      Later this QR will point to the unique certificate
                      verification page.
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <QRCodeSVG
                      value={certificateUrl}
                      size={120}
                      bgColor="#ffffff"
                      fgColor="#000000"
                      level="H"
                    />
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    className="rounded-full bg-yellow-500 px-6 py-4 text-center font-black text-black hover:bg-yellow-400"
                  >
                    View Certificate
                  </button>

                  <button
                    type="button"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center font-bold text-white hover:bg-white/10"
                  >
                    Download PDF
                  </button>
                </div>
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-red-500/20 bg-red-950/20 p-5">
                <p className="font-black text-red-100">Preview Notice</p>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  This is a visual certificate system preview. Real downloadable
                  certificates require Supabase, user accounts, course results,
                  certificate storage, and verification pages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Certificate Types
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              DES Academy credentials.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            Certificates help DES show who completed Academy learning and who is
            approved to represent specific DES standards.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {certificateTypes.map((cert) => (
            <div
              key={cert.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-yellow-400">
                {cert.level}
              </div>

              <h3 className="text-2xl font-black">{cert.title}</h3>

              <p className="mt-4 text-sm leading-7 text-white/60">
                {cert.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-yellow-400/20 bg-gradient-to-br from-yellow-500/10 via-white/[0.03] to-red-900/20 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Future Certificate Flow
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                From course completion to profile download.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Once Supabase is connected, certificates can be generated after
                course completion and admin approval. Users can then view and
                download them from their dashboard or profile.
              </p>
            </div>

            <div className="space-y-3">
              {futureFlow.map((step, index) => (
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

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-100">
            Certificate Rules
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Certificate control protects DES.
          </h2>

          <p className="mt-5 text-white/65 leading-7">
            Certificates must be controlled by DES. They should confirm Academy
            completion, but they should not be confused with employment,
            representation, FIFA agent status, or guaranteed football
            opportunities.
          </p>
        </div>

        <div className="grid gap-3">
          {certificateRules.map((rule) => (
            <div
              key={rule}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
            >
              <p className="text-sm font-semibold leading-6 text-white/75">
                ✅ {rule}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Profile Integration
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Certificates can live inside the user profile.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Later, a scout or staff member can log into DES and see their
                certificates inside their dashboard. They can view them,
                download them, and share verification links when required.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Example Dashboard Section</h3>

              <div className="mt-6 grid gap-3">
                <ProfileCertRow
                  title="DES Scouting Methodology"
                  status="Valid"
                  action="View / Download"
                />
                <ProfileCertRow
                  title="Event Staff Standards"
                  status="Pending"
                  action="Complete course"
                />
                <ProfileCertRow
                  title="Player Evaluation Training"
                  status="Locked"
                  action="Advanced"
                />
              </div>

              <a
                href="/dashboard"
                className="mt-7 block rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Back to Dashboard →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Certificates.
      </footer>
    </main>
  );
}

function CertificateInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white/85">{value}</p>
    </div>
  );
}

function ProfileCertRow({ title, status, action }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-black text-white">{title}</p>
          <p className="mt-1 text-sm text-yellow-400">{status}</p>
        </div>

        <p className="text-right text-sm font-bold text-white/55">{action}</p>
      </div>
    </div>
  );
}