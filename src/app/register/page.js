export default function RegisterPage() {
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

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            ✅ DES Connect registration
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Choose your <span className="text-yellow-400">DES pathway.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Select the correct registration type. Every profile will go through
            DES review before approval, QR activation, or event access.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <RegistrationCard
            icon="⚽"
            title="Register as Player"
            subtitle="For football players connected with DES"
            description="Create a DES player profile with photo, bio, position, nationality, preferred foot, current club, video links, stats fields, and a future QR profile."
            tags={["Player bio", "Football CV", "Highlight videos", "DES QR profile"]}
            buttonText="Start Player Application →"
            link="/register/player"
          />

          <RegistrationCard
            icon="📋"
            title="Register as Coach"
            subtitle="For coaches looking to connect with DES"
            description="Create a professional coach profile with coaching licence, current club, availability, past clubs, philosophy, CV, and digital DES ID."
            tags={["Coach CV", "Past clubs", "Availability", "DES QR profile"]}
            buttonText="Start Coach Application →"
            link="/register/coach"
          />

          <RegistrationCard
            icon="🔎"
            title="Register as Scout"
            subtitle="For people applying to become DES scouts"
            description="Apply to join the DES scouting network, complete DES Academy training, pass the scouting test, and wait for admin approval."
            tags={["Scout region", "Experience", "DES Academy", "Approval required"]}
            buttonText="Start Scout Application →"
            link="/register/scout"
          />

          <RegistrationCard
            icon="🪪"
            title="Register as Staff / Volunteer"
            subtitle="For DES team, event staff, and volunteers"
            description="Apply for a DES staff profile with role, department, event access level, internal training, and QR lanyard verification."
            tags={["Staff role", "Event access", "Conduct test", "QR staff ID"]}
            buttonText="Start Staff Application →"
            link="/register/staff"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                How DES approval works
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Apply first. Train if required. Get approved. Activate your DES
                ID.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                Registration does not automatically make someone part of DES.
                Players, coaches, scouts, and staff must be reviewed internally.
                Scouts and staff may also need to complete DES Academy training
                and a short test before their QR ID becomes active.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <div className="space-y-3">
                <ApprovalStep number="1" text="Submit application" />
                <ApprovalStep number="2" text="DES admin review" />
                <ApprovalStep number="3" text="Complete course/test if needed" />
                <ApprovalStep number="4" text="Profile approved" />
                <ApprovalStep number="5" text="QR ID activated" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Connect
        Registration.
      </footer>
    </main>
  );
}

function RegistrationCard({
  icon,
  title,
  subtitle,
  description,
  tags,
  buttonText,
  link,
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]">
      <div className="flex items-start justify-between gap-5">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-4xl">
          {icon}
        </div>

        <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
          Pending approval
        </span>
      </div>

      <h2 className="mt-6 text-3xl font-black">{title}</h2>

      <p className="mt-2 text-sm font-semibold text-yellow-400">{subtitle}</p>

      <p className="mt-5 text-sm leading-7 text-white/65">{description}</p>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {tags.map((tag) => (
          <InfoTag key={tag} text={tag} />
        ))}
      </div>

      <a
        href={link}
        className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-4 text-center font-black text-black hover:bg-yellow-400"
      >
        {buttonText}
      </a>
    </div>
  );
}

function InfoTag({ text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-3 text-sm font-semibold text-white/75">
      ✅ {text}
    </div>
  );
}

function ApprovalStep({ number, text }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-yellow-500 text-sm font-black text-black">
        {number}
      </div>
      <p className="font-semibold text-white/85">{text}</p>
    </div>
  );
}