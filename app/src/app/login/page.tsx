export default function LoginPage() {
  return (
    <div className="bg-white">
      <section className="mx-auto flex min-h-[calc(100vh-4.5rem)] max-w-md flex-col gap-8 px-4 py-24 sm:px-6 lg:px-8">
        <header className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
            Login
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            Welcome back to Juliet
          </h1>
          <p className="text-base text-slate-600">
            Authentication experience coming soon. We&apos;ll notify early access customers when accounts are ready.
          </p>
        </header>
        <p className="text-center text-sm text-slate-500">
          Placeholder screen — replace with production login form and SSO options when the authentication service is integrated.
        </p>
      </section>
    </div>
  )
}
