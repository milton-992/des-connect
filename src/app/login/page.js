export default function LoginPage() {
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
            Register
          </a>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-90px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
            🔐 DES Connect Login
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            One DES account.{" "}
            <span className="text-yellow-400">Every portal connected.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
            Players, coaches, scouts, staff, volunteers, and future clubs will
            use one verified DES login to access profiles, QR IDs, events,
            training, and internal dashboards.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <FeatureBox
              icon="⚽"
              title="Players"
              text="Access profile, videos, status, and QR ID."
            />
            <FeatureBox
              icon="📋"
              title="Coaches"
              text="Manage coaching profile and availability."
            />
            <FeatureBox
              icon="🔎"
              title="Scouts"
              text="Access DES Academy and future reports."
            />
            <FeatureBox
              icon="🪪"
              title="Staff"
              text="Access event ID and approved roles."
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-yellow-400/20 via-red-600/10 to-transparent blur-xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-10">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-3xl border border-yellow-400/30 bg-black p-3 shadow-[0_0_35px_rgba(234,179,8,0.2)]">
                <img
                  src="/des-logo.png"
                  alt="Draft Elite Sport logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Secure Access
              </p>

              <h2 className="mt-3 text-4xl font-black">Login to DES</h2>

              <p className="mt-3 text-sm leading-6 text-white/60">
                This login page is visual for now. Later we will connect it to
                Supabase so the same account works on the website and future DES
                iOS app.
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-white/80">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
                />
              </div>

              <div className="flex flex-col justify-between gap-3 text-sm sm:flex-row sm:items-center">
                <label className="flex cursor-pointer items-center gap-3 text-white/65">
                  <input type="checkbox" className="h-4 w-4 accent-yellow-500" />
                  Remember me
                </label>

                <a
                  href="#"
                  className="font-semibold text-yellow-400 hover:text-yellow-300"
                >
                  Forgot password?
                </a>
              </div>

              <a
                href="/dashboard"
                className="block w-full rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
              >
                Login to Dashboard →
              </a>
            </form>

            <div className="my-8 border-t border-white/10" />

            <div className="rounded-[1.5rem] border border-red-500/20 bg-red-950/20 p-5">
              <p className="font-black text-red-100">No account yet?</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Choose the correct DES pathway and submit your application for
                review.
              </p>

              <a
                href="/register"
                className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-center font-bold text-white hover:bg-white/10"
              >
                Go to Registration →
              </a>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">
                Future DES account rule
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Register once on the DES website, then use the same login later
                on the DES mobile app when it is built.
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
              <p className="font-black text-white">Temporary MVP behaviour</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                For now, the login button opens the visual dashboard directly.
                Real login protection will be added when we connect Supabase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. DES Connect Login.
      </footer>
    </main>
  );
}

function FeatureBox({ icon, title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/55">{text}</p>
    </div>
  );
}