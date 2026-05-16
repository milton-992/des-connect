import { adminLogin } from "./actions";

export default async function AdminLoginPage({ searchParams }) {
  const params = await searchParams;
  const error = params?.error;

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

      <section className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          <div className="mb-8 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-950/30 px-4 py-2 text-sm text-red-100">
              🛡️ DES Admin Access
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Admin <span className="text-yellow-400">login.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-md text-base leading-7 text-white/60">
              This area is restricted to DES leadership and authorised admin
              users only.
            </p>
          </div>

          <form
            action={adminLogin}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl md:p-8"
          >
            <div className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-400">
                Secure Access
              </p>

              <h2 className="mt-3 text-3xl font-black">Enter admin password</h2>

              <p className="mt-3 text-sm leading-6 text-white/55">
                Once logged in, you can access the DES control room, review
                applications, assign DES IDs and control profile visibility.
              </p>
            </div>

            {error === "invalid" && (
              <div className="mb-5 rounded-[1.25rem] border border-red-500/30 bg-red-950/30 p-4">
                <p className="font-black text-red-100">Invalid password</p>
                <p className="mt-1 text-sm text-red-100/75">
                  Please check the admin password and try again.
                </p>
              </div>
            )}

            {error === "missing" && (
              <div className="mb-5 rounded-[1.25rem] border border-red-500/30 bg-red-950/30 p-4">
                <p className="font-black text-red-100">Password required</p>
                <p className="mt-1 text-sm text-red-100/75">
                  Please enter the DES admin password.
                </p>
              </div>
            )}

            <label className="mb-2 block text-sm font-bold text-white/80">
              Admin Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Enter DES admin password"
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-4 text-white placeholder:text-white/30 outline-none focus:border-yellow-400"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-yellow-500 px-8 py-4 text-center font-black text-black hover:bg-yellow-400"
            >
              Enter Admin Control Room →
            </button>

            <div className="mt-6 rounded-[1.5rem] border border-yellow-400/20 bg-yellow-400/10 p-5">
              <p className="font-black text-yellow-400">Security Notice</p>
              <p className="mt-2 text-sm leading-6 text-white/70">
                This is the first admin protection layer. Later, this can be
                upgraded to full Supabase Auth with user accounts and role-based
                access.
              </p>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/45">
        © {new Date().getFullYear()} Draft Elite Sport. Admin Login.
      </footer>
    </main>
  );
}