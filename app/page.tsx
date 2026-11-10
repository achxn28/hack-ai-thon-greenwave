"use client";

import { FormEvent, useState } from "react";

const stands = [
  { name: "The Green Grill", section: "Section 112", wait: 4, walk: "2 min walk", items: "Burgers · Fries · Drinks", state: "Shortest wait" },
  { name: "Goal Line Bites", section: "Section 125", wait: 9, walk: "4 min walk", items: "Hot dogs · Nachos · Drinks", state: "Moving quickly" },
  { name: "First Down Market", section: "Section 101", wait: 16, walk: "6 min walk", items: "Pizza · Snacks · Drinks", state: "Building up" },
];

function WaveMark({ small = false }: { small?: boolean }) {
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 items-center justify-center rounded-full bg-wave-500 text-white ${small ? "h-8 w-8" : "h-10 w-10"}`}>
      <svg viewBox="0 0 24 24" fill="none" className={small ? "h-5 w-5" : "h-6 w-6"}>
        <path d="M3 9c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2S19.8 9 22 9M3 14c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.4 2M5 18c1.4 0 1.8-1 3.2-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function StadiumPreview() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-wave-400/20 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/15 bg-white p-4 text-ink shadow-2xl sm:p-6">
        <div className="flex items-center justify-between gap-3 px-1 pb-4">
          <div>
            <p className="text-[0.68rem] font-extrabold tracking-[0.18em] text-wave-700">GREENWAVE · METLIFE STADIUM</p>
            <h2 className="mt-1 text-lg font-bold sm:text-xl">Find your next stop</h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-wave-50 px-3 py-1.5 text-xs font-bold text-wave-800"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wave-400 opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-wave-500" /></span>Sample data</span>
        </div>

        <div className="relative isolate flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-wave-950 sm:h-60">
          <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,212,138,0.22),_transparent_68%)]" />
          <div aria-hidden="true" className="absolute h-44 w-64 rounded-[50%] border border-wave-300/40 sm:h-52 sm:w-80">
            <div className="absolute inset-4 rounded-[50%] border border-wave-300/30" />
            <div className="absolute inset-y-0 left-1/2 border-l border-wave-300/30" />
            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wave-300/30" />
          </div>
          <span className="absolute left-[13%] top-[25%] rounded-lg border border-white/20 bg-white px-2.5 py-1.5 text-[0.68rem] font-bold text-wave-950 shadow-lg sm:left-[18%]">112 · 4 min</span>
          <span className="absolute right-[10%] top-[27%] rounded-lg border border-white/20 bg-white px-2.5 py-1.5 text-[0.68rem] font-bold text-wave-950 shadow-lg sm:right-[17%]">125 · 9 min</span>
          <span className="absolute bottom-[17%] left-[12%] rounded-lg border border-white/20 bg-white px-2.5 py-1.5 text-[0.68rem] font-bold text-wave-950 shadow-lg">101 · 16 min</span>
          <span className="absolute bottom-[16%] right-[11%] flex items-center gap-2 rounded-full bg-wave-400 px-3 py-2 text-xs font-extrabold text-wave-950 shadow-lg"><span aria-hidden="true">⌖</span> YOUR SECTION</span>
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-wave-500 shadow-lg"><WaveMark small /></div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-wave-50 p-3.5 sm:p-4">
          <div className="flex items-center gap-3"><span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-lg shadow-sm">🍔</span><span><span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-wave-700">Best match near you</span><span className="mt-0.5 block text-sm font-bold">{stands[selected].name}</span></span></div>
          <span className="text-right"><span className="block text-xl font-extrabold text-wave-700">{stands[selected].wait}<span className="text-xs"> min</span></span><span className="text-[0.65rem] text-slate-500">estimated wait</span></span>
        </div>
        <p className="mt-3 text-center text-[0.68rem] text-slate-500">Illustrative experience · No live stadium data connected</p>
      </div>
      <div className="absolute -bottom-5 -left-2 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-card sm:flex"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-wave-100 text-lg text-wave-800" aria-hidden="true">↗</span><span><span className="block text-sm font-extrabold">Beat the rush</span><span className="block text-xs text-slate-500">Back before the next play</span></span></div>
    </div>
  );
}

function WaitTimeDemo() {
  const [selected, setSelected] = useState(0);
  return (
    <section aria-labelledby="demo-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-700">The right call, right now</p>
          <h2 id="demo-title" className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">Make your snack run a winning play.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">See sample wait estimates and choose a nearby stand without guessing. GreenWave is designed to turn stadium congestion into a simple game-day decision.</p>
          <div className="mt-8 space-y-4">
            {["Compare concession waits at a glance", "Plan around crowd surges with predictive insights", "Spend less time in line and more time in the stands"].map((item) => <p key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700 sm:text-base"><span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wave-100 text-xs font-black text-wave-800">✓</span>{item}</p>)}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-card sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[0.68rem] font-extrabold uppercase tracking-[0.18em] text-slate-500">At MetLife Stadium</p><h3 className="mt-1 text-xl font-extrabold">Nearby concessions</h3></div><span className="rounded-full bg-wave-50 px-3 py-1.5 text-xs font-bold text-wave-800">DEMO · SAMPLE ESTIMATES</span></div>
          <div className="mt-6 space-y-3" role="radiogroup" aria-label="Choose a concession stand">
            {stands.map((stand, index) => <button key={stand.name} type="button" role="radio" aria-checked={selected === index} onClick={() => setSelected(index)} className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wave-600 ${selected === index ? "border-wave-500 bg-wave-50" : "border-slate-200 hover:border-wave-300 hover:bg-slate-50"}`}>
              <span className="min-w-0"><span className="block truncate font-bold text-ink">{stand.name}</span><span className="mt-1 block text-sm text-slate-500">{stand.section} · {stand.walk}</span><span className={`mt-2 inline-flex items-center gap-1.5 text-xs font-bold ${index === 0 ? "text-wave-700" : "text-slate-500"}`}><span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-wave-500" : "bg-amber-400"}`} />{stand.state}</span></span>
              <span className="shrink-0 text-right"><span className="block text-2xl font-extrabold text-wave-700">{stand.wait}<span className="text-sm font-bold"> min</span></span><span className="text-[0.68rem] text-slate-500">estimated wait</span></span>
            </button>)}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Wait times are illustrative only—not connected to live camera feeds or venue systems.</p>
        </div>
      </div>
    </section>
  );
}

function InterestForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }
  return <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
    <label className="sr-only" htmlFor="email">Your email address</label>
    <input id="email" type="email" required autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="you@example.com" className="min-h-12 flex-1 rounded-xl border border-white/30 bg-white px-4 text-ink placeholder:text-slate-500 focus:border-wave-300 focus:outline-none focus:ring-2 focus:ring-wave-300" />
    <button className="min-h-12 rounded-xl bg-wave-400 px-6 font-extrabold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" type="submit">Get updates <span aria-hidden="true">→</span></button>
    <p aria-live="polite" className="sr-only">{submitted ? "Thanks for your interest! This demo form does not store your information." : ""}</p>
  </form>;
}

export default function Home() {
  return (
    <main id="home">
      <a href="#main-content" className="sr-only z-50 rounded-md bg-white p-3 text-wave-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <div className="bg-wave-950 px-4 py-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">Game Day Hack-AI-thon <span className="mx-2 text-wave-300">/</span> Powered by New York Jets · Microsoft · All Star Code</div>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wave-600" aria-label="GreenWave home"><WaveMark /><span className="text-xl font-black tracking-tight text-ink">green<span className="text-wave-700">wave</span></span></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex"><a className="transition hover:text-wave-700" href="#how-it-works">How it works</a><a className="transition hover:text-wave-700" href="#demo-title">See the demo</a><a className="transition hover:text-wave-700" href="#mission">Our mission</a><a className="rounded-lg bg-wave-950 px-5 py-2.5 text-white transition hover:bg-wave-800" href="#updates">Get updates <span aria-hidden="true">→</span></a></nav>
          <a className="rounded-lg bg-wave-950 px-4 py-2.5 text-sm font-bold text-white md:hidden" href="#updates">Get updates</a>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-wave-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div aria-hidden="true" className="absolute -right-36 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10 sm:right-0"><div className="absolute inset-12 rounded-full border border-white/10"><div className="absolute inset-12 rounded-full border border-white/10" /></div></div>
        <div id="main-content" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-wave-300/30 bg-white/5 px-3.5 py-2 text-[0.68rem] font-extrabold tracking-[0.16em] text-wave-100"><span aria-hidden="true" className="text-wave-300">●</span> A FRESH TAKE ON GAME DAY</div>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Stay for the<br /><span className="text-wave-300">big moments.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85 sm:text-xl">Skip the concession guesswork. GreenWave helps Jets fans find a faster line, so there’s more game and less waiting.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#how-it-works" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-wave-400 px-6 font-extrabold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">See how it works <span aria-hidden="true">↓</span></a><span className="text-sm font-medium text-emerald-100/70">Made for the roar of the crowd.</span></div>
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-6"><span className="text-xs font-bold uppercase tracking-[0.15em] text-wave-200">A fan-first concept</span><span className="hidden h-4 border-l border-white/25 sm:block" /><span className="text-sm font-semibold text-white">New York Jets</span><span className="text-sm font-semibold text-white/75">Microsoft</span><span className="text-sm font-semibold text-white/75">All Star Code</span></div>
          </div>
          <StadiumPreview />
        </div>
      </section>

      <section aria-label="GreenWave benefits" className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0"><div className="flex items-center gap-4 py-5 md:px-6 md:first:pl-0"><span className="text-xl text-wave-700" aria-hidden="true">◷</span><span><strong className="block text-sm font-extrabold">Know the wait</strong><span className="text-sm text-slate-500">Compare stands nearby</span></span></div><div className="flex items-center gap-4 py-5 md:px-6"><span className="text-xl text-wave-700" aria-hidden="true">⌁</span><span><strong className="block text-sm font-extrabold">Beat the rush</strong><span className="text-sm text-slate-500">Plan around crowd surges</span></span></div><div className="flex items-center gap-4 py-5 md:px-6"><span className="text-xl text-wave-700" aria-hidden="true">★</span><span><strong className="block text-sm font-extrabold">Stay in the game</strong><span className="text-sm text-slate-500">More time for every play</span></span></div></div></section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-700">Your game-day sidekick</p><h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">Three steps. Back to the action.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A smarter concession run fits right into your game-day routine.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[
          { n: "01", title: "Check the field", text: "See estimated waits at nearby concession stands before you leave your seat.", icon: "⌖" },
          { n: "02", title: "Pick your play", text: "Compare options and choose a faster line that works for your section.", icon: "↗" },
          { n: "03", title: "Get back in time", text: "Grab your game-day favorites and make it back for the next big moment.", icon: "★" },
        ].map((step) => <article key={step.n} className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-wave-300 hover:shadow-card"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wave-50 text-2xl font-black text-wave-700 transition group-hover:bg-wave-500 group-hover:text-white" aria-hidden="true">{step.icon}</span><span className="text-sm font-black tracking-[0.2em] text-slate-300">{step.n}</span></div><h3 className="mt-7 text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></article>)}
        </div>
      </section>

      <div className="bg-wave-50"><WaitTimeDemo /></div>

      <section id="mission" className="bg-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[0.7fr_1.3fr] md:items-center"><div className="flex items-center gap-4"><WaveMark /><span className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-700">Our mission</span></div><div><h2 className="max-w-4xl text-3xl font-black leading-tight tracking-tight text-ink sm:text-5xl">Keep fans connected to every moment of the game.</h2><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">We’re reimagining the concession experience with intelligent ordering, predictive insights, and a fan-first mindset—so game day feels like game day.</p></div></div></section>

      <section id="updates" className="bg-wave-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_0.9fr] md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-300">Join the next wave</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Game day is getting an upgrade.</h2><p className="mt-4 max-w-xl leading-7 text-emerald-50/75">Want to hear what’s next for GreenWave? Leave your email for updates about the concept and future fan experiences.</p></div><div><InterestForm /><p className="mt-3 text-xs leading-5 text-emerald-100/60">Prototype only: this form does not send or store your email. GreenWave is a concept and is not connected to live stadium systems.</p></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between"><a href="#home" className="flex w-fit items-center gap-2 font-extrabold text-ink"><WaveMark small />greenwave</a><p>More game. Less waiting. Made for the fans.</p><p>Game Day Hack-AI-thon · New York Jets + Microsoft + All Star Code</p></footer>
    </main>
  );
}
