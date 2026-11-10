"use client";

import { FormEvent, useState } from "react";

const stands = [
  { name: "Section 112 · The Green Grill", wait: 4, status: "Fastest nearby", items: "Burgers · Fries · Drinks" },
  { name: "Section 125 · Goal Line Bites", wait: 9, status: "Moving quickly", items: "Hot dogs · Nachos · Drinks" },
  { name: "Section 101 · First Down Market", wait: 16, status: "Getting busy", items: "Pizza · Snacks · Drinks" }
];

function WaveMark({ small = false }: { small?: boolean }) {
  return <span aria-hidden="true" className={`inline-flex items-center justify-center rounded-full bg-wave-500 text-white ${small ? "h-8 w-8" : "h-10 w-10"}`}><svg viewBox="0 0 24 24" fill="none" className={small ? "h-5 w-5" : "h-6 w-6"}><path d="M3 9c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2S19.8 9 22 9M3 14c2.4 0 2.4-2 4.8-2s2.4 2 4.8 2 2.4-2 4.8-2 2.4 2 4.4 2M5 18c1.4 0 1.8-1 3.2-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg></span>;
}

function WaitTimeDemo() {
  const [selected, setSelected] = useState(0);
  return (
    <section aria-labelledby="demo-title" className="relative mx-auto max-w-6xl px-5 pb-24 pt-10 sm:px-8 lg:pb-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-wave-700">A better game-day rhythm</p>
          <h2 id="demo-title" className="max-w-lg text-3xl font-bold tracking-tight text-ink sm:text-4xl">Your next bite is closer than you think.</h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-600">GreenWave turns stadium congestion into a clear, simple choice. Check nearby stands, compare estimated waits, and get back to what matters.</p>
          <ul className="mt-8 space-y-4 text-slate-700">
            {["Live concession wait-time estimates", "Predictions that help you beat the rush", "Recommendations based on where you are"].map((item) => <li key={item} className="flex items-start gap-3"><span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wave-100 text-wave-700">✓</span><span>{item}</span></li>)}
          </ul>
        </div>
        <div className="rounded-[2rem] border border-wave-100 bg-white p-5 shadow-card sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div><p className="text-sm font-semibold text-slate-500">METLIFE STADIUM</p><h3 className="mt-1 text-xl font-bold">Nearby concessions</h3></div>
            <span className="inline-flex items-center gap-2 rounded-full bg-wave-50 px-3 py-1.5 text-xs font-semibold text-wave-800"><span className="h-2 w-2 animate-pulse rounded-full bg-wave-500" />Live demo</span>
          </div>
          <div className="mt-6 space-y-3" role="radiogroup" aria-label="Choose a concession stand">
            {stands.map((stand, index) => <button key={stand.name} type="button" role="radio" aria-checked={selected === index} onClick={() => setSelected(index)} className={`flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wave-600 ${selected === index ? "border-wave-500 bg-wave-50" : "border-slate-200 hover:border-wave-300"}`}>
              <span className="min-w-0"><span className="block truncate font-semibold text-ink">{stand.name}</span><span className="mt-1 block text-sm text-slate-500">{stand.items}</span><span className={`mt-2 inline-flex items-center gap-1.5 text-xs font-semibold ${index === 0 ? "text-wave-700" : "text-slate-500"}`}><span className={`h-1.5 w-1.5 rounded-full ${index === 0 ? "bg-wave-500" : "bg-amber-400"}`} />{stand.status}</span></span>
              <span className="shrink-0 text-right"><span className="block text-2xl font-bold text-wave-700">{stand.wait}<span className="text-base font-semibold"> min</span></span><span className="text-xs text-slate-500">estimated wait</span></span>
            </button>)}
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">Sample experience · Wait times shown for demonstration</p>
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
  return <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-3 sm:flex-row">
    <label className="sr-only" htmlFor="email">Your email address</label>
    <input id="email" type="email" required autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="you@example.com" className="min-h-12 flex-1 rounded-xl border border-white/25 bg-white px-4 text-ink placeholder:text-slate-400 focus:border-wave-300 focus:outline-none focus:ring-2 focus:ring-wave-300" />
    <button className="min-h-12 rounded-xl bg-wave-400 px-6 font-bold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" type="submit">Keep me in the loop <span aria-hidden="true">→</span></button>
    <p aria-live="polite" className="sr-only">{submitted ? "Thanks for your interest! This demo form does not store your information." : ""}</p>
  </form>;
}

export default function Home() {
  return <main>
    <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
      <a href="#home" className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wave-600" aria-label="GreenWave home"><WaveMark /><span className="text-xl font-extrabold tracking-tight">green<span className="text-wave-600">wave</span></span></a>
      <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-semibold text-slate-600 sm:flex"><a className="hover:text-wave-700" href="#how-it-works">How it works</a><a className="hover:text-wave-700" href="#mission">Our mission</a><a className="rounded-full bg-ink px-5 py-2.5 text-white transition hover:bg-wave-900" href="#updates">Get updates</a></nav>
      <a className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white sm:hidden" href="#updates">Get updates</a>
    </header>

    <section id="home" className="relative isolate overflow-hidden bg-wave-950 text-white">
      <div aria-hidden="true" className="absolute -right-36 -top-44 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10 sm:right-0"><div className="absolute inset-12 rounded-full border border-white/10"><div className="absolute inset-12 rounded-full border border-white/10" /></div></div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-xs font-semibold tracking-wide text-wave-100"><span aria-hidden="true">🏈</span> GAME DAY, ON YOUR TERMS</div>
          <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">More game.<br /><span className="text-wave-300">Less waiting.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/80 sm:text-xl">Find the fastest concession line, get your favorites, and never miss a moment of the action.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#how-it-works" className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-wave-400 px-6 font-bold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Find your fast lane <span aria-hidden="true">→</span></a><span className="text-sm text-emerald-100/70">The smarter way to snack at the stadium</span></div>
          <div className="mt-12 flex items-center gap-3 border-t border-white/15 pt-6"><div className="flex -space-x-2" aria-hidden="true"><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-wave-950 bg-wave-300 text-xs">J</span><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-wave-950 bg-white text-xs">M</span><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-wave-950 bg-amber-200 text-xs">A</span></div><p className="text-sm text-emerald-50/80">Built for fans, with <strong className="font-semibold text-white">New York Jets · Microsoft · All Star Code</strong></p></div>
        </div>
        <div className="relative mx-auto w-full max-w-lg">
          <div aria-hidden="true" className="absolute inset-8 rounded-full bg-wave-400/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.08] p-5 shadow-2xl backdrop-blur sm:p-7">
            <div className="flex items-center justify-between"><div><p className="text-xs font-semibold tracking-widest text-wave-200">GREENWAVE GAME DAY</p><p className="mt-1 font-bold">Find your next stop</p></div><div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10" aria-hidden="true">⌖</div></div>
            <div className="relative mt-6 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-800 via-wave-900 to-slate-900 sm:h-56">
              <div aria-hidden="true" className="absolute h-40 w-40 rounded-full border border-wave-300/30 sm:h-48 sm:w-48"><div className="absolute inset-5 rounded-full border border-wave-300/30" /><div className="absolute left-1/2 top-0 h-full border-l border-wave-300/25" /></div>
              <div className="absolute left-[22%] top-[25%] rounded-full bg-white px-3 py-2 text-xs font-bold text-ink shadow-lg">112 · 4 min</div><div className="absolute bottom-[20%] right-[14%] rounded-full bg-wave-400 px-3 py-2 text-xs font-bold text-wave-950 shadow-lg">You are here</div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white/70 bg-wave-400 shadow-xl"><WaveMark small /></div>
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-white p-4 text-ink"><span><span className="block text-xs font-semibold uppercase tracking-wide text-slate-500">Best match nearby</span><span className="mt-1 block font-bold">The Green Grill · Section 112</span></span><span className="rounded-full bg-wave-100 px-3 py-1.5 text-sm font-bold text-wave-800">4 min</span></div>
          </div>
          <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 text-ink shadow-card sm:flex"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-wave-100 text-wave-700" aria-hidden="true">↗</span><span><span className="block text-sm font-bold">Beat the rush</span><span className="block text-xs text-slate-500">Know before you go</span></span></div>
        </div>
      </div>
    </section>

    <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.16em] text-wave-700">Your game-day sidekick</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Less line. More live.</h2><p className="mt-4 text-lg leading-8 text-slate-600">A smarter stadium experience, from the first whistle to the final play.</p></div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {[{ n: "01", title: "See the full picture", text: "Get a snapshot of nearby concession lines and estimated wait times before you head out.", icon: "◉" }, { n: "02", title: "Go at the right moment", text: "Predictive insights help you spot a quieter stand and time your trip around the game.", icon: "⌁" }, { n: "03", title: "Get back to the action", text: "Choose your best option, spend less time in line, and more time cheering on your team.", icon: "↗" }].map((step) => <article key={step.n} className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-card"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wave-50 text-2xl font-bold text-wave-700" aria-hidden="true">{step.icon}</span><span className="text-sm font-bold tracking-widest text-slate-300">{step.n}</span></div><h3 className="mt-6 text-xl font-bold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></article>)}
      </div>
    </section>

    <WaitTimeDemo />

    <section id="mission" className="bg-wave-50"><div className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8 sm:py-24"><WaveMark /><p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-wave-700">Why we’re here</p><h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Keep fans connected to every moment of the game.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">We’re reimagining the concession experience with intelligent insights and a fan-first mindset—so the best part of game day stays on the field.</p></div></section>

    <section id="updates" className="bg-ink text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_0.9fr] md:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.16em] text-wave-300">Be first in line (for updates)</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Game day is getting an upgrade.</h2><p className="mt-4 max-w-xl leading-7 text-slate-300">Sign up to hear what’s next for GreenWave. No spam—just a heads-up when it’s game time.</p></div><div><InterestForm /><p className="mt-3 text-xs text-slate-400">This prototype form is for demonstration and does not save or send your information.</p></div></div></section>

    <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between"><a href="#home" className="flex w-fit items-center gap-2 font-bold text-ink"><WaveMark small />greenwave</a><p>More game. Less waiting. Made for the fans.</p><p>Game Day Hack-AI-thon · New York Jets + Microsoft + All Star Code</p></footer>
  </main>;
}
