import { QRCodeSVG } from "qrcode.react";
import { supabaseAdmin } from "../../../../lib/supabaseAdmin";

export default async function DESAcademyCertificatePage({ params }) {
  const { slug } = await params;

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.des-uae.com"
  ).replace(/\/$/, "");

  const certificateUrl = `${siteUrl}/academy/certificates/${slug}`;

  const desScoutId = slug.toUpperCase();

  const { data: scout } = await supabaseAdmin
    .from("scout_applications")
    .select(
      "full_name, email, nationality, current_country, city, scouting_country, scouting_region, football_background, current_football_role, experience_level, languages, application_status, approved_at, des_scout_id, scout_profile_slug, profile_public, qr_active, academy_status, certificate_title, certificate_level, certificate_status, certificate_issue_date, certificate_expiry_date, certificate_url"
    )
    .ilike("des_scout_id", desScoutId)
    .maybeSingle();

  const certificateCanBeViewed =
    scout &&
    scout.application_status === "approved" &&
    scout.des_scout_id &&
    scout.certificate_status === "issued";

  if (!certificateCanBeViewed) {
    return <CertificateNotAvailable />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 text-center">
          <div className="mb-6 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-5 py-2 text-sm font-bold text-green-100">
            ✅ Official DES Academy Certificate
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Certificate of{" "}
            <span className="text-yellow-400">Completion.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            This certificate verifies that the scout below is connected to the
            DES Academy methodology and has been issued an official DES Academy
            certificate record.
          </p>
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-2xl" />

          <div className="relative overflow-hidden rounded-[2.5rem] border border-yellow-400/25 bg-[#101010]/95 shadow-2xl">
            <div className="border-b border-yellow-400/20 bg-gradient-to-r from-yellow-500/15 via-black to-red-700/20 p-8 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.35em] text-yellow-400">
                    Draft Elite Sport
                  </p>

                  <h2 className="mt-3 text-4xl font-black md:text-5xl">
                    DES Academy Certificate
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-white/60">
                    Official internal certificate record issued through DES
                    Connect.
                  </p>
                </div>

                <div className="grid h-24 w-24 place-items-center rounded-3xl border border-yellow-400/30 bg-black p-3 shadow-[0_0_35px_rgba(234,179,8,0.18)]">
                  <img
                    src="/des-logo.png"
                    alt="Draft Elite Sport logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_330px]">
              <div>
                <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 md:p-8">
                  <p className="text-sm font-black uppercase tracking-[0.28em] text-white/40">
                    This certificate is awarded to
                  </p>

                  <h3 className="mt-4 text-5xl font-black leading-none text-white md:text-6xl">
                    {scout.full_name}
                  </h3>

                  <p className="mt-5 text-2xl font-black text-yellow-400">
                    {scout.des_scout_id}
                  </p>

                  <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <CertificateInfo
                      label="Certificate Title"
                      value={
                        scout.certificate_title ||
                        "DES Scouting Methodology Certificate"
                      }
                    />

                    <CertificateInfo
                      label="Certificate Level"
                      value={scout.certificate_level || "Foundation"}
                    />

                    <CertificateInfo
                      label="Academy Status"
                      value={formatStatus(scout.academy_status)}
                    />

                    <CertificateInfo
                      label="Certificate Status"
                      value={formatStatus(scout.certificate_status)}
                    />

                    <CertificateInfo
                      label="Issue Date"
                      value={
                        scout.certificate_issue_date
                          ? new Date(
                              scout.certificate_issue_date
                            ).toLocaleDateString()
                          : "Issued"
                      }
                    />

                    <CertificateInfo
                      label="Expiry Date"
                      value={
                        scout.certificate_expiry_date
                          ? new Date(
                              scout.certificate_expiry_date
                            ).toLocaleDateString()
                          : "No expiry set"
                      }
                    />
                  </div>

                  <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                    <p className="font-black text-yellow-400">
                      Certificate Statement
                    </p>

                    <p className="mt-2 text-sm leading-7 text-white/70">
                      Draft Elite Sport confirms that this scout has been issued
                      a DES Academy certificate record inside DES Connect. This
                      certificate supports DES internal methodology,
                      verification, and scouting identity workflows.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <MiniStat
                    label="Scouting Market"
                    value={scout.scouting_country || "Not provided"}
                  />
                  <MiniStat
                    label="Experience"
                    value={scout.experience_level || "Not provided"}
                  />
                  <MiniStat
                    label="Current Role"
                    value={scout.current_football_role || "DES Scout"}
                  />
                </div>
              </div>

              <aside className="space-y-5">
                <div className="rounded-[2rem] border border-green-500/20 bg-green-950/20 p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-green-200">
                    Verification
                  </p>

                  <div className="mt-5 grid gap-3">
                    <CheckRow label="Scout Approved" active />
                    <CheckRow label="DES-SCOUT ID" active />
                    <CheckRow label="Certificate Issued" active />
                    <CheckRow
                      label="Academy Certified"
                      active={scout.academy_status === "certified"}
                    />
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-yellow-400">
                    Certificate QR
                  </p>

                  <p className="mt-3 break-all text-sm font-bold text-white/70">
                    {certificateUrl}
                  </p>

                  <div className="mt-5 rounded-2xl bg-white p-4">
                    <QRCodeSVG
                      value={certificateUrl}
                      size={230}
                      bgColor="#ffffff"
                      fgColor="#000000"
                      level="H"
                    />
                  </div>

                  <p className="mt-4 text-sm leading-6 text-white/55">
                    Scan this QR code to verify this official DES Academy
                    certificate page.
                  </p>
                </div>

                {scout.scout_profile_slug && (
                  <a
                    href={`/id/${scout.scout_profile_slug}`}
                    className="block rounded-full bg-yellow-500 px-6 py-4 text-center text-sm font-black text-black hover:bg-yellow-400"
                  >
                    Open Scout Verification Profile →
                  </a>
                )}
              </aside>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-[2rem] border border-red-500/20 bg-red-950/20 p-6">
          <p className="font-black text-red-100">Official Notice</p>

          <p className="mt-2 text-sm leading-7 text-white/60">
            This certificate is an internal DES Academy verification record. It
            does not replace legal licensing, football association registration,
            FIFA agent licensing, employment screening, or third-party
            regulatory checks where those are required.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function CertificateNotAvailable() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Background />
      <Header />

      <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center px-6 py-20">
        <div className="w-full rounded-[2rem] border border-red-500/20 bg-red-950/20 p-8 md:p-12">
          <div className="mb-6 inline-flex rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            Certificate Not Available
          </div>

          <h1 className="text-5xl font-black leading-[0.95] md:text-7xl">
            DES certificate not{" "}
            <span className="text-yellow-400">active.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            This DES Academy certificate is not currently available. It may not
            exist, the scout may not be approved, or the certificate status may
            not be issued yet.
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
            <p className="font-black text-yellow-400">
              Official DES Certificate Verification
            </p>

            <p className="mt-2 text-sm leading-6 text-white/70">
              A certificate page is only visible when DES has approved the
              scout, assigned a DES-SCOUT ID, and marked the certificate status
              as issued.
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

function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(180,20,20,0.35),transparent_35%),radial-gradient(circle_at_top_right,rgba(234,179,8,0.2),transparent_30%),linear-gradient(180deg,#050505,#000)]" />
  );
}

function Header() {
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
          Visit DES
        </a>
      </div>
    </header>
  );
}

function CertificateInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-2 break-words text-lg font-black text-yellow-400">
        {value || "Not provided"}
      </p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-white">{value}</p>
    </div>
  );
}

function CheckRow({ label, active }) {
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
        {active ? "VALID" : "PENDING"}
      </span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
      © {new Date().getFullYear()} Draft Elite Sport. DES Academy Certificate.
    </footer>
  );
}

function formatStatus(status) {
  if (!status) return "Not set";

  return String(status)
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}