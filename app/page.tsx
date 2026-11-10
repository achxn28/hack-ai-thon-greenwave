"use client";

import { FormEvent, useState } from "react";

const sections = ["Section 112", "Section 125", "Section 101"];
const stands = [
  { name: "The Green Grill", section: "Section 112", wait: 4, walk: 2, items: "Burgers · Fries · Drinks", state: "Shortest wait" },
  { name: "Goal Line Bites", section: "Section 125", wait: 9, walk: 4, items: "Hot dogs · Nachos · Drinks", state: "Moving quickly" },
  { name: "First Down Market", section: "Section 101", wait: 16, walk: 6, items: "Pizza · Snacks · Drinks", state: "Building up" },
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
  const [section, setSection] = useState(sections[0]);
  const [notice, setNotice] = useState("");
  const nearbyStands = stands
    .map((stand) => ({ ...stand, walk: Math.max(1, stand.walk + (sections.indexOf(section) - sections.indexOf(stand.section)) * 2) }))
    .sort((a, b) => a.walk - b.walk);
  const recommendation = [...nearbyStands].sort((a, b) => a.wait - b.wait)[0];

  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div aria-hidden="true" className="absolute -inset-8 rounded-full bg-wave-400/20 blur-3xl" />
      <div className="relative rounded-[2rem] border border-white/15 bg-white p-4 text-ink shadow-2xl sm:p-6">
        <div className="flex items-center justify-between gap-3 px-1 pb-4">
          <div><p className="text-[0.68rem] font-extrabold tracking-[0.18em] text-wave-700">GREENWAVE · METLIFE STADIUM</p><h2 className="mt-1 text-lg font-bold sm:text-xl">Find your next stop</h2></div>
          <span className="inline-flex items-center gap-2 rounded-full bg-wave-50 px-3 py-1.5 text-xs font-bold text-wave-800"><span className="h-2 w-2 rounded-full bg-wave-500" />Interactive demo</span>
        </div>

        <div className="rounded-2xl bg-wave-950 p-4 text-white sm:p-5">
          <div className="flex items-start justify-between gap-3"><div><p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-wave-300">Your seat location</p><p className="mt-1 font-bold">Choose a section</p></div><span aria-hidden="true" className="text-xl text-wave-300">⌖</span></div>
          <div className="mt-3 grid grid-cols-3 gap-2" role="group" aria-label="Choose your stadium section">
            {sections.map((item) => <button key={item} type="button" aria-pressed={section === item} onClick={() => { setSection(item); setNotice(""); }} className={`min-h-10 rounded-lg px-2 text-xs font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${section === item ? "bg-wave-400 text-wave-950" : "border border-white/20 bg-white/5 text-white hover:bg-white/10"}`}>{item.replace("Section ", "Sec. ")}</button>)}
          </div>
          <div aria-hidden="true" className="relative mt-4 flex h-28 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-wave-900 to-slate-950">
            <div className="absolute h-20 w-48 rounded-[50%] border border-wave-300/30"><div className="absolute inset-3 rounded-[50%] border border-wave-300/25" /><div className="absolute inset-y-0 left-1/2 border-l border-wave-300/25" /></div>
            <span className="absolute left-[12%] top-3 rounded-md bg-white px-2 py-1 text-[0.6rem] font-bold text-ink">112 · 4 min</span><span className="absolute right-[9%] top-3 rounded-md bg-white px-2 py-1 text-[0.6rem] font-bold text-ink">125 · 9 min</span><span className="absolute bottom-3 left-[25%] rounded-md bg-white px-2 py-1 text-[0.6rem] font-bold text-ink">101 · 16 min</span><span className="relative flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-wave-500 text-sm font-black">{section.slice(-3)}</span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-wave-50 p-3.5 sm:p-4">
          <div className="flex min-w-0 items-center gap-3"><span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm">🍔</span><span className="min-w-0"><span className="block text-[0.65rem] font-extrabold uppercase tracking-wider text-wave-700">Fastest nearby</span><span className="mt-0.5 block truncate text-sm font-bold">{recommendation.name}</span><span className="text-xs text-slate-500">{recommendation.walk} walk · {recommendation.items}</span></span></div>
          <span className="shrink-0 text-right"><span className="block text-xl font-extrabold text-wave-700">{recommendation.wait}<span className="text-xs"> min</span></span><span className="text-[0.65rem] text-slate-500">sample wait</span></span>
        </div>
        <button type="button" onClick={() => setNotice(`Demo only: ordering from ${recommendation.name} is not connected yet.`)} className="mt-3 min-h-11 w-full rounded-xl bg-wave-500 px-4 font-extrabold text-white transition hover:bg-wave-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wave-700">Start a sample order <span aria-hidden="true">→</span></button>
        <p aria-live="polite" className="mt-2 min-h-5 text-center text-xs text-slate-600">{notice || "Sample experience · No live stadium or ordering data connected"}</p>
      </div>
    </div>
  );
}

function WaitTimeDemo() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-700">Make your next move</p>
          <h2 id="demo-title" className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-5xl">A better concession run starts from your seat.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">Choose a section to see how nearby stand recommendations could work. In a live GreenWave experience, real-time crowd signals and predictive insights would help fans decide when and where to go.</p>
          <div className="mt-8 space-y-4">{["Compare nearby stands and sample wait times", "See walking distance from your section", "Imagine a faster pickup without missing the play"].map((item) => <p key={item} className="flex items-start gap-3 text-sm font-semibold text-slate-700 sm:text-base"><span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-wave-100 text-xs font-black text-wave-800">✓</span>{item}</p>)}</div>
        </div>
        <StadiumPreview />
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
    <button className="min-h-12 rounded-xl bg-wave-400 px-6 font-extrabold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" type="submit">Register interest <span aria-hidden="true">→</span></button>
    <p aria-live="polite" className="sr-only">{submitted ? "Thanks for your interest. This prototype does not transmit or store your email." : ""}</p>
  </form>;
}

export default function Home() {
  return (
    <main id="home">
      <a href="#main-content" className="sr-only z-50 rounded-md bg-white p-3 text-wave-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <div className="bg-wave-950 px-4 py-2 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white sm:text-xs">Game Day Hack-AI-thon <span className="mx-2 text-wave-300">/</span> Powered by New York Jets · Microsoft · All Star Code</div>
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wave-600" aria-label="GreenWave home"><WaveMark /><span className="text-xl font-black tracking-tight text-ink">green<span className="text-wave-700">wave</span></span></a>
        <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-bold text-slate-600 md:flex"><a className="transition hover:text-wave-700" href="#how-it-works">How it works</a><a className="transition hover:text-wave-700" href="#demo">Try the demo</a><a className="transition hover:text-wave-700" href="#story">Our story</a><a className="rounded-lg bg-wave-950 px-5 py-2.5 text-white transition hover:bg-wave-800" href="#demo">Explore GreenWave <span aria-hidden="true">→</span></a></nav>
        <a className="rounded-lg bg-wave-950 px-4 py-2.5 text-sm font-bold text-white md:hidden" href="#demo">Try the demo</a>
      </div></header>

      <section className="relative isolate overflow-hidden bg-wave-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div aria-hidden="true" className="absolute -right-36 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10 sm:right-0"><div className="absolute inset-12 rounded-full border border-white/10"><div className="absolute inset-12 rounded-full border border-white/10" /></div></div>
        <div id="main-content" className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-28">
          <div className="max-w-2xl"><div className="inline-flex items-center gap-2 rounded-full border border-wave-300/30 bg-white/5 px-3.5 py-2 text-[0.68rem] font-extrabold tracking-[0.16em] text-wave-100"><span aria-hidden="true" className="text-wave-300">●</span> A FRESH TAKE ON GAME DAY</div>
            <h1 className="mt-7 text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Skip the line.<br /><span className="text-wave-300">Stay in the game.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/85 sm:text-xl">Find a faster concession option, get your game-day favorites, and keep your eyes on every big moment.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><a href="#demo" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-wave-400 px-6 font-extrabold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Try the interactive demo <span aria-hidden="true">↓</span></a><span className="text-sm font-medium text-emerald-100/70">Pick a section. Find a faster play.</span></div>
            <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/15 pt-6"><span className="text-xs font-bold uppercase tracking-[0.15em] text-wave-200">A fan-first concept</span><span className="hidden h-4 border-l border-white/25 sm:block" /><span className="text-sm font-semibold text-white">New York Jets</span><span className="text-sm font-semibold text-white/75">Microsoft</span><span className="text-sm font-semibold text-white/75">All Star Code</span></div>
          </div><StadiumPreview />
        </div>
      </section>

      <section aria-label="GreenWave benefits" className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">{[{ icon: "◷", title: "Know the wait", text: "Compare stands nearby" }, { icon: "⌁", title: "Beat the rush", text: "Plan around crowd surges" }, { icon: "★", title: "Stay in the game", text: "More time for every play" }].map((item) => <div key={item.title} className="flex items-center gap-4 py-5 md:px-6 md:first:pl-0"><span className="text-xl text-wave-700" aria-hidden="true">{item.icon}</span><span><strong className="block text-sm font-extrabold">{item.title}</strong><span className="text-sm text-slate-500">{item.text}</span></span></div>)}</div></section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-700">Your game-day sidekick</p><h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">Three steps. Back to the action.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A smarter concession run fits right into your game-day routine.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">{[{ n: "01", title: "Check the field", text: "See estimated waits at nearby concession stands before you leave your seat.", icon: "⌖" }, { n: "02", title: "Pick your play", text: "Compare options and choose a faster line that works for your section.", icon: "↗" }, { n: "03", title: "Get back in time", text: "Grab your game-day favorites and make it back for the next big moment.", icon: "★" }].map((step) => <article key={step.n} className="group rounded-3xl border border-slate-200 bg-white p-7 transition duration-200 hover:-translate-y-1 hover:border-wave-300 hover:shadow-card"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wave-50 text-2xl font-black text-wave-700 transition group-hover:bg-wave-500 group-hover:text-white" aria-hidden="true">{step.icon}</span><span className="text-sm font-black tracking-[0.2em] text-slate-300">{step.n}</span></div><h3 className="mt-7 text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></article>)}</div>
      </section>

      <div className="bg-wave-50"><WaitTimeDemo /></div>

      <section id="story" className="bg-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><div><div className="flex items-center gap-4"><WaveMark /><span className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-700">Why GreenWave</span></div><h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-ink sm:text-4xl">Born from the moments fans miss.</h2></div><div className="space-y-5 text-lg leading-8 text-slate-600"><p>GreenWave started with a familiar game-day frustration: fans leaving their seats and missing touchdowns, key interceptions, and halftime moments while waiting in unpredictable concession lines.</p><p>We’re sports technology enthusiasts and football fans who believe the stadium food experience can keep pace with the mobile game-day experience. Our concept brings together mobile ordering, crowd monitoring, predictive insights, and stand recommendations to help fans make a better next move.</p><p>The name reflects the green that belongs to our game-day inspiration and the smoother flow we hope to create throughout the stadium. Our mission is simple: help fans spend less time waiting and more time together for every play.</p><p className="border-l-4 border-wave-400 pl-5 font-bold text-ink">GreenWave is a hackathon concept—not an official New York Jets or MetLife Stadium service. The demo currently uses illustrative data and is not connected to venue cameras, ordering, or delivery systems.</p></div></div></div></section>

      <section id="updates" className="bg-wave-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_0.9fr] md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[0.2em] text-wave-300">Help shape the fan experience</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Want to see GreenWave at a game?</h2><p className="mt-4 max-w-xl leading-7 text-emerald-50/75">Register your interest in a future pilot or share feedback with the team. This prototype form is a visual demo and does not send or store information yet.</p></div><div><InterestForm /><p className="mt-3 text-xs leading-5 text-emerald-100/60">Prototype only: your email stays in this browser session and is not transmitted or saved. A real pilot signup needs a connected form service.</p></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between"><a href="#home" className="flex w-fit items-center gap-2 font-extrabold text-ink"><WaveMark small />greenwave</a><p>Skip the line. Stay in the game.</p><p>Game Day Hack-AI-thon · New York Jets + Microsoft + All Star Code</p></footer>
    </main>
  );
}
