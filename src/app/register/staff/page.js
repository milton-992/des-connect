export default function StaffApplicationPage() {
  const staffTypes = [
    "Founder / Leadership",
    "Technical Team",
    "Event Staff",
    "Volunteer",
    "Media Team",
    "Operations",
    "Guest Staff",
  ];

  const departments = [
    "Management",
    "Football Operations",
    "Scouting",
    "Events",
    "Media / Content",
    "Player Support",
    "Administration",
    "Other",
  ];

  const availability = [
    "Weekdays",
    "Weekends",
    "Evenings only",
    "Event days only",
    "Flexible",
    "Not sure yet",
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

          <a
            href="/register"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white hover:bg-white/10"
          >
            Back to Register
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🪪 DES Staff / Volunteer Application
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Apply for your{" "}
            <span className="text-yellow-400">DES staff ID.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70">
            DES staff, volunteers, and event workers must be reviewed and
            approved before representing the organisation or receiving event-day
            QR access.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Personal Details
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Basic staff information
              </h2>
              <p className="mt-3 text-white/60">
                This information helps DES understand your role, location,
                availability, and suitability for events or internal support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <InputField label="Full Name" placeholder="Example: Milton Mendonca" />
              <InputField label="Nationality" placeholder="Example: Portugal" />
              <InputField
                label="Current Country"
                placeholder="Example: United Kingdom"
              />
              <InputField
                label="City / Region"
                placeholder="Example: London"
              />
              <InputField
                label="Email Address"
                type="email"
                placeholder="example@email.com"
              />
              <InputField
                label="Phone Number"
                placeholder="Example: +44..."
              />
              <InputField
                label="Languages Spoken"
                placeholder="Example: English, Portuguese, Spanish"
              />
              <InputField
                label="Emergency Contact"
                placeholder="Name and phone number"
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Staff Type
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {staffTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Department
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {departments.map((department) => (
                    <option key={department}>{department}</option>
                  ))}
                </select>
              </div>

              <InputField
                label="Role Applying For"
                placeholder="Example: Event assistant / Media support / Operations"
              />

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Availability
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-yellow-400">
                  {availability.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Role & Experience
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Tell us how you can support DES
              </h2>
              <p className="mt-3 text-white/60">
                DES needs reliable people who understand discipline, privacy,
                and professional event behaviour.
              </p>
            </div>

            <div className="grid gap-5">
              <TextAreaField
                label="Why do you want to work with DES?"
                placeholder="Tell us why you want to support DES and what you can bring to the organisation."
              />

              <TextAreaField
                label="Relevant Experience"
                placeholder="Example: football events, administration, media, operations, coaching, volunteering, customer service..."
              />

              <TextAreaField
                label="What duties would you be comfortable doing?"
                placeholder="Example: check-in desk, lanyard control, player support, media content, registration, equipment setup, guest guidance..."
              />

              <TextAreaField
                label="Any restrictions DES should know?"
                placeholder="Example: limited availability, travel restrictions, health or safety considerations, preferred duties..."
              />
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Event-Day Access
              </p>
              <h2 className="mt-3 text-3xl font-black">
                QR lanyard and staff verification
              </h2>
              <p className="mt-3 text-white/60">
                Approved DES staff may receive a digital DES ID and QR code for
                PVC cards, lanyards, and event access control.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/40 p-6">
              <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-center">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-400">
                    Example DES Staff ID
                  </p>

                  <h3 className="mt-3 text-3xl font-black">
                    Verified DES Team
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    When approved, your DES profile can display your name, role,
                    status, access level, and event approval. This helps DES
                    identify authorised people and avoid outsiders entering
                    restricted trial areas.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <InfoBox label="Status" value="Pending / Approved" />
                    <InfoBox label="Access" value="Event Specific" />
                    <InfoBox label="ID Type" value="Staff / Volunteer" />
                    <InfoBox label="QR" value="Activated after approval" />
                  </div>
                </div>

                <div className="rounded-3xl border border-yellow-400/20 bg-white/[0.04] p-5">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-yellow-500/20 to-red-700/20" />

                    <div>
                      <p className="text-2xl font-black">Your Name</p>
                      <p className="text-yellow-400">DES Staff</p>
                      <p className="mt-1 text-sm text-white/50">
                        Draft Elite Sport
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-4">
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
                </div>
              </div>
            </div>

            <div className="my-10 border-t border-white/10" />

            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                DES Conduct
              </p>
              <h2 className="mt-3 text-3xl font-black">
                Staff rules and confidentiality
              </h2>
              <p className="mt-3 text-white/60">
                DES staff and volunteers must behave professionally at all
                times, especially around players, parents, clubs, and guests.
              </p>
            </div>

            <div className="grid gap-5">
              <AgreementBox
                title="Professional Behaviour"
                text="I agree to behave professionally when representing DES at events, meetings, trials, or online."
              />

              <AgreementBox
                title="Confidentiality"
                text="I understand that player details, club conversations, internal plans, and DES operations must not be shared without permission."
              />

              <AgreementBox
                title="Event Access Control"
                text="I understand that DES may assign different access levels for each event, and I must only enter areas I am approved for."
              />

              <AgreementBox
                title="No Unofficial Promises"
                text="I understand that I cannot promise players trials, contracts, visas, payments, or opportunities without official DES approval."
              />

              <AgreementBox
                title="DES Approval"
                text="I understand that submitting this application does not automatically make me part of DES. Final approval is controlled by DES leadership."
              />
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Important DES Staff Notice
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                DES may approve, reject, pause, or remove staff access at any
                time to protect the organisation, players, clubs, and event-day
                security. QR ID activation only happens after internal approval.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                type="button"
                className="rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Submit Staff Application →
              </button>

              <a
                href="/register"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                Choose Different Pathway
              </a>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Staff Application.
      </footer>
    </main>
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

function TextAreaField({ label, placeholder = "" }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-white/80">
        {label}
      </label>
      <textarea
        rows="5"
        placeholder={placeholder}
        className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
      />
    </div>
  );
}

function AgreementBox({ title, text }) {
  return (
    <label className="flex cursor-pointer gap-4 rounded-2xl border border-white/10 bg-black/35 p-5 hover:border-yellow-400/40">
      <input type="checkbox" className="mt-1 h-5 w-5 accent-yellow-500" />
      <div>
        <p className="font-black text-white">{title}</p>
        <p className="mt-2 text-sm leading-6 text-white/60">{text}</p>
      </div>
    </label>
  );
}

function InfoBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white/85">{value}</p>
    </div>
  );
}