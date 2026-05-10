export default function PartnersPage() {
  const partnerTypes = [
    {
      title: "Event Sponsors",
      icon: "🏟️",
      text: "Support DES trials, showcases, scouting days, and football events while gaining visibility across players, clubs, media, and digital content.",
    },
    {
      title: "Football Brands",
      icon: "👕",
      text: "Partner with DES through kits, boots, training equipment, recovery products, or event-day football activations.",
    },
    {
      title: "Media Partners",
      icon: "🎥",
      text: "Collaborate with DES on player content, showcase coverage, interviews, social media, highlight reels, and event storytelling.",
    },
    {
      title: "Service Partners",
      icon: "🤝",
      text: "Support players, coaches, and DES events through transport, accommodation, fitness, nutrition, physiotherapy, or local services.",
    },
  ];

  const benefits = [
    "Visibility across DES events and football content",
    "Brand presence on digital pages and event material",
    "Connection with players, coaches, scouts, and clubs",
    "Opportunity to support real football pathways",
    "Social media and showcase content opportunities",
    "Association with a modern football scouting platform",
  ];

  const packagesList = [
    {
      name: "Support Partner",
      tag: "Entry Level",
      text: "For local businesses or brands that want to support DES activity with product, service, or small sponsorship support.",
      includes: [
        "Partner mention on DES website",
        "Social media acknowledgement",
        "Event-day visibility where suitable",
        "Basic partner profile",
      ],
    },
    {
      name: "Event Partner",
      tag: "Showcase Focus",
      text: "For brands that want visibility around a specific DES trial, showcase, scouting day, or football event.",
      includes: [
        "Event branding opportunity",
        "Logo placement on event material",
        "Mention in event content",
        "Potential on-site activation",
      ],
    },
    {
      name: "Strategic Partner",
      tag: "Long-Term",
      text: "For organisations that want to build a deeper relationship with DES across multiple events, markets, and football opportunities.",
      includes: [
        "Long-term collaboration",
        "Priority partner positioning",
        "Joint campaigns or initiatives",
        "Commercial growth opportunities",
      ],
    },
  ];

  const process = [
    "Partner submits interest",
    "DES reviews the brand fit",
    "Collaboration type is discussed",
    "Visibility and benefits are agreed",
    "Event or campaign plan is prepared",
    "Partnership is activated",
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
              href="/login"
              className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
            >
              Login
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

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🤝 DES Partners
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Partner with a modern{" "}
            <span className="text-yellow-400">football platform.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES partners can support football opportunities while gaining
            visibility across events, digital profiles, media content, scouting
            activity, and player development projects.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#partner-request"
              className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Become a Partner →
            </a>

            <a
              href="/events"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
            >
              View DES Events
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-[#111]/95 p-6 shadow-2xl md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Partnership Vision
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Football visibility with real purpose.
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/65">
              DES is building a network where partners can support events,
              players, and football opportunity pathways while being associated
              with a professional scouting and digital identity system.
            </p>

            <div className="mt-6 grid gap-3">
              <InfoLine label="Audience" value="Players / Clubs / Coaches" />
              <InfoLine label="Channels" value="Events / Web / Social Media" />
              <InfoLine label="Markets" value="Portugal / UAE / UK / Angola" />
              <InfoLine label="Focus" value="Opportunity & Visibility" />
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">DES Advantage</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Partners are not just logos. They become part of a football
                ecosystem built around verified profiles, events, and real
                development opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Partner Types
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built for commercial football collaboration.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            DES can work with brands, services, media, event sponsors, and
            strategic partners that want to support football opportunities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {partnerTypes.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-white/[0.07]"
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-yellow-500/20 to-red-700/20 text-3xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-black">{item.title}</h3>

              <p className="mt-3 text-sm leading-6 text-white/60">
                {item.text}
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
                Partner Benefits
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Visibility across football activity.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES partnerships can give brands a clear connection to players,
                coaches, scouts, families, clubs, events, and football content.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-black/35 p-4"
                >
                  <p className="font-semibold text-white/85">✅ {benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
              Partnership Packages
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Start small or build long-term.
            </h2>
          </div>

          <p className="max-w-xl text-white/60">
            These are placeholder package concepts for now. Later, DES can
            attach real pricing, benefits, and event-specific sponsor options.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {packagesList.map((pack) => (
            <div
              key={pack.name}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-400/40"
            >
              <span className="rounded-full border border-yellow-400/25 bg-yellow-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-yellow-400">
                {pack.tag}
              </span>

              <h3 className="mt-6 text-3xl font-black">{pack.name}</h3>

              <p className="mt-4 text-sm leading-7 text-white/65">
                {pack.text}
              </p>

              <div className="mt-6 grid gap-3">
                {pack.includes.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/35 p-3 text-sm font-semibold text-white/75"
                  >
                    ✅ {item}
                  </div>
                ))}
              </div>

              <a
                href="#partner-request"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-yellow-500 px-6 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Discuss Package →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Partnership Process
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                From interest to activation.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                DES should only work with partners that fit the brand and add
                value to the football ecosystem. The process starts with a
                simple conversation.
              </p>
            </div>

            <div className="space-y-3">
              {process.map((step, index) => (
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

      <section id="partner-request" className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Partner Request Form
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Tell DES how you want to collaborate.
              </h2>

              <p className="mt-5 text-white/65 leading-7">
                This form is visual for now. Later, once Supabase is connected,
                partner requests can be saved in the DES database and reviewed
                by the admin team.
              </p>

              <div className="mt-7 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
                <p className="font-black text-yellow-400">Future feature</p>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Partners will later be able to request sponsor packages, event
                  visibility, media collaborations, and long-term commercial
                  partnerships.
                </p>
              </div>
            </div>

            <form className="grid gap-5">
              <InputField label="Company / Brand Name" placeholder="Example: Elite Sportswear" />
              <InputField label="Contact Person" placeholder="Name and role" />
              <InputField label="Email Address" type="email" placeholder="partner@email.com" />
              <InputField label="Country / Market" placeholder="Example: Portugal / UAE / UK" />
              <InputField label="Partnership Type" placeholder="Example: Sponsor / Media / Service / Strategic" />
              <InputField label="Website or Social Media" placeholder="https://..." />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Partnership Details
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell DES what type of partnership, sponsorship, event support, or collaboration you are interested in."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                />
              </div>

              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Partner Request →
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2rem] border border-red-500/20 bg-gradient-to-r from-red-950/50 via-black to-yellow-950/30 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Build with DES
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-6xl">
                Support football opportunities. Gain meaningful visibility.
              </h2>

              <p className="mt-5 max-w-2xl text-white/65 leading-7">
                DES partnerships should feel professional, useful, and aligned
                with the mission of creating better football pathways.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/40 p-6">
              <h3 className="text-2xl font-black">Next step</h3>

              <p className="mt-3 text-white/60">
                Submit a partner request or explore DES events to understand the
                type of activity partners can support.
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="#partner-request"
                  className="block w-full rounded-full bg-yellow-500 px-6 py-4 text-center text-base font-black text-black hover:bg-yellow-400"
                >
                  Become a Partner →
                </a>

                <a
                  href="/events"
                  className="block w-full rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center text-base font-bold text-white hover:bg-white/10"
                >
                  View DES Events →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. Partners.
      </footer>
    </main>
  );
}

function InfoLine({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 p-3">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="text-sm font-bold text-white/85">{value}</p>
    </div>
  );
}

function InputField({ label, placeholder = "", type = "text" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
      />
    </div>
  );
}