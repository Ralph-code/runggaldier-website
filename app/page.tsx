export default function Home() {
  return (
    <main className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center p-8">
      <p className="text-sm uppercase tracking-widest opacity-50 mb-4">Available for projects — 2026</p>
      <h1 className="text-6xl md:text-8xl font-light tracking-tight leading-none mb-8">
        Building digital <br /> 
        <span className="italic">experiences</span> that matter.
      </h1>
      <div className="h-px w-full bg-black/10 my-12" />
      <div className="flex justify-between items-end">
        <p className="max-w-xs text-lg opacity-80">
          Ralph Runggaldier. <br />
          Developer & Designer focused on clean, functional code.
        </p>
        <a href="mailto:hello@example.com" className="text-xl underline underline-offset-8">Get in touch</a>
      </div>
    </main>
  );
}