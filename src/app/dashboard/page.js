export default function DashboardPage() {
  const profileCards = [
    {
      title: "Profile Status",
      value: "Pending Review",
      icon: "🧾",
      text: "Your DES profile is waiting for admin approval before public visibility or QR activation.",
    },
    {
      title: "DES ID",
      value: "Active Preview",
      icon: "▦",
      text: "Your founder DES ID preview is available. Later this will be generated automatically after approval.",
    },
    {
      title: "Academy Progress",
      value: "Not Started",
      icon: "🎓",
      text: "Scouts and staff may need to complete DES Academy training before approval.",
    },
    {
      title: "Event Access",
      value: "Full Access Preview",
      icon: "📅",
      text: "Approved users can later opt in to trials, showcases, scouting days, and DES events.",
    },
  ];

  const notifications = [
    "Complete your profile information before DES review.",
    "Upload documents, CV links, video links, or references where required.",
    "DES Academy training may be required for scout and staff accounts.",
    "Your QR ID only becomes active after admin approval.",
  ];

  const adminActions = [
    "Review new player applications",
    "Approve or reject coach profiles",
    "Check scout academy test results",
    "Activate or suspend QR IDs",
    "Create DES events",
    "Assign staff and access levels",
  ];

  const quickLinks = [
    {
      title: "My DES ID",
      text: "Open your verified founder identity profile.",
      link: "/id/milton",
      icon: "🪪",
    },
    {
      title: "Registration",
      text: "Choose or review your DES pathway.",
      link: "/register",
      icon: "📝",
    },
    {
      title: "DES Academy",
      text: "Training for scouts, staff, and volunteers.",
      link: "/academy",
      icon: "🎓",
    },
    {
      title: "DES Events",
      text: "Trials, showcases, and future check-ins.",
      link: "/events",
      icon: "📅",
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
              href="/id/milton"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              My DES ID
            </a>

            <a
              href="/"
              className="rounded-full bg-yellow-500 px-5 py-3 text-sm font-black text-black hover:bg-yellow-400"
            >
              Home
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
              🧭 DES Connect Dashboard
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Your DES command{" "}
              <span className="text-yellow-400">centre.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              This dashboard will become the central area for profiles,
              approvals, QR identity, academy progress, events, and admin
              controls.
            </p>
          </div>

          <div className="rounded-[2rem] border border-yellow-400/20 bg-yellow-400/10 p-5 lg:max-w-sm">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">
              MVP Notice
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              This is visual for now. Later, after Supabase is connected, this
              page will show real account data.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {profileCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                  {card.icon}
                </div>

                <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-bold text-white/50">
                  Live later
                </span>
              </div>

              <h2 className="text-xl font-black">{card.title}</h2>

              <p className="mt-2 text-lg font-black text-yellow-400">
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
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES ID Preview
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Digital identity card.
              </h2>
            </div>

            <div className="hidden text-5xl md:block">▦</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/50 p-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <div className="grid h-24 w-24 place-items-center rounded-2xl border border-yellow-400/30 bg-black p-3">
                <img
                  src="/des-logo.png"
                  alt="Draft Elite Sport logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-yellow-400">
                  Example profile
                </p>
                <h3 className="mt-2 text-3xl font-black">Milton M.</h3>
                <p className="text-yellow-400">Founder & CEO</p>
                <p className="mt-1 text-sm text-white/50">
                  Draft Elite Sport
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <ProfileInfo label="Status" value="Verified DES Team" />
              <ProfileInfo label="Access" value="Super Admin" />
              <ProfileInfo label="ID" value="DES-STAFF-0001" />
              <ProfileInfo label="QR" value="Active Preview" />
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Scan to verify
                </p>
                <p className="mt-1 font-bold">Official DES identity</p>
              </div>

              <div className="grid h-20 w-20 place-items-center rounded-xl bg-white text-4xl text-black">
                ▦
              </div>
            </div>

            <a
              href="/id/milton"
              className="mt-6 block w-full rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              View My DES ID →
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
            Notifications
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            What happens next.
          </h2>

          <div className="mt-8 space-y-3">
            {notifications.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-black/35 p-4"
              >
                <p className="text-sm leading-6 text-white/70">✅ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Quick Links
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Move around DES Connect.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            These links help users move to registration, academy, events, or the
            main website. Later, they will be personalised by account type.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((link) => (
            <a
              key={link.title}
              href={link.link}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                {link.icon}
              </div>

              <h3 className="text-xl font-black">{link.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {link.text}
              </p>

              <p className="mt-5 font-black text-yellow-400">Open →</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Admin Preview
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Founder and admin controls.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                For your Founder & CEO account, the dashboard will later include
                private Super Admin permissions. This means your visible profile
                is Staff / Founder, but your hidden system role is Super Admin.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                <p className="font-black text-yellow-400">
                  Recommended founder setup
                </p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Profile Type: Staff · Staff Type: Founder / Leadership · Role:
                  Founder & CEO · Admin Level: Super Admin · QR Status: Active
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {adminActions.map((action) => (
                <div
                  key={action}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4"
                >
                  <p className="font-semibold text-white/85">✅ {action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Future Backend
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Supabase will make this dashboard real.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                Once we connect Supabase, this dashboard can show real user
                profiles, application status, QR codes, academy progress,
                events, file uploads, and admin approval tools.
              </p>
            </div>

            <div className="grid gap-4">
              <FutureRow
                title="Shared website and app login"
                text="One DES account can work on the web and future iOS app."
              />
              <FutureRow
                title="Real application storage"
                text="Player, coach, scout, and staff forms save to database."
              />
              <FutureRow
                title="Admin approval system"
                text="DES leadership can approve, reject, or suspend users."
              />
              <FutureRow
                title="QR profile generation"
                text="Each approved user receives a unique verified profile."
              />
              <FutureRow
                title="Event and academy tracking"
                text="Track training progress and event attendance."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Dashboard.
      </footer>
    </main>
  );
}

function ProfileInfo({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white/85">{value}</p>
    </div>
  );
}

function FutureRow({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <p className="font-black text-white">✅ {title}</p>
      <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
    </div>
  );
}