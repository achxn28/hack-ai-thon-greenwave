"use client";

import { FormEvent, useMemo, useState } from "react";

const sections = ["112", "125", "101"];
const stands = [
  { id: "green-grill", name: "The Green Grill", section: "112", wait: 4, walk: 2, category: "Burgers", items: ["Classic cheeseburger", "Crinkle fries", "Bottled water"], status: "Shortest wait" },
  { id: "goal-line", name: "Goal Line Bites", section: "125", wait: 9, walk: 4, category: "Stadium favorites", items: ["Jumbo hot dog", "Loaded nachos", "Soda"], status: "Moving quickly" },
  { id: "first-down", name: "First Down Market", section: "101", wait: 16, walk: 6, category: "Pizza & snacks", items: ["Pepperoni pizza", "Soft pretzel", "Soda"], status: "Building up" },
];

const stadiumImage = "https://commons.wikimedia.org/wiki/Special:FilePath/MetLife_Stadium.jpg";
const jetsMark = "https://commons.wikimedia.org/wiki/Special:FilePath/New_York_Jets_logo.svg";
const stadiumFallback = "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1800&q=85";

function GreenWaveLogo({ className = "" }: { className?: string }) {
  return <img src="/greenwave-logo.svg" alt="GreenWave — Smart concession ordering" className={className} />;
}

function StadiumImage({ className = "" }: { className?: string }) {
  return <img src={stadiumImage} onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = stadiumFallback; }} alt="Football stadium viewed from above" className={className} />;
}

function Hero() {
  return (
    <section className="relative isolate min-h-[650px] overflow-hidden bg-wave-950 text-white lg:min-h-[690px]">
      <StadiumImage className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-wave-950 via-wave-950/90 to-wave-950/45" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-wave-950/80 via-transparent to-wave-950/30" />
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:min-h-[690px] lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-wave-300/40 bg-wave-950/50 px-4 py-2 text-xs font-extrabold uppercase tracking-[.17em] text-wave-100 backdrop-blur"><span className="h-2 w-2 rounded-full bg-wave-300" /> Built for game day</div>
          <h1 className="mt-7 text-5xl font-black leading-[.98] tracking-[-.045em] sm:text-6xl lg:text-7xl">Skip the line.<br /><span className="text-wave-300">Stay in the game.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-emerald-50/90 sm:text-xl">Find a faster concession option, order your game-day favorites, and keep your eyes on every big moment.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#demo" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-wave-400 px-6 font-extrabold text-wave-950 shadow-lg transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Try the interactive demo <span aria-hidden="true">↓</span></a>
            <a href="#pilot" className="inline-flex min-h-12 items-center rounded-xl border border-white/40 bg-white/10 px-5 font-bold text-white backdrop-blur transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Join the pilot list</a>
          </div>
          <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-6">
            <img src={jetsMark} onError={(event) => { event.currentTarget.style.display = "none"; }} alt="New York Jets mark" className="h-12 w-12 rounded-full bg-white object-contain p-1" />
            <p className="max-w-sm text-sm leading-6 text-emerald-50/80">A fan-first concept inspired by New York Jets game days.<br /><span className="text-xs text-white/60">Hack-AI-thon · with Microsoft + All Star Code</span></p>
          </div>
        </div>
        <div className="hidden self-end pb-5 text-right text-xs text-white/70 lg:block"><a href="https://commons.wikimedia.org/wiki/File:MetLife_Stadium.jpg" target="_blank" rel="noreferrer" className="underline decoration-white/50 underline-offset-4">Stadium photo source · Wikimedia Commons</a></div>
      </div>
    </section>
  );
}

function ConcessionDemo() {
  const [section, setSection] = useState("112");
  const [activeStandId, setActiveStandId] = useState("green-grill");
  const [cart, setCart] = useState<string[]>([]);
  const [notice, setNotice] = useState("");

  const nearbyStands = useMemo(() => stands.map((stand) => ({
    ...stand,
    walk: Math.max(1, stand.walk + Math.abs(sections.indexOf(section) - sections.indexOf(stand.section)) * 2),
  })).sort((a, b) => a.walk - b.walk), [section]);
  const activeStand = nearbyStands.find((stand) => stand.id === activeStandId) ?? nearbyStands[0];

  function changeSection(value: string) {
    setSection(value);
    setNotice("");
  }

  function addToSampleOrder() {
    setCart((items) => [...items, activeStand.items[0]]);
    setNotice(`${activeStand.items[0]} added to your sample order from ${activeStand.name}.`);
  }

  return (
    <section id="demo" aria-labelledby="demo-title" className="bg-wave-50">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-12 max-w-3xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-wave-700">Your seat, your next move</p><h2 id="demo-title" className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">Make your snack run a winning play.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Choose a section, compare nearby stands, and build a sample order. This interactive prototype uses made-up wait times—not live stadium data.</p></div>
        <div className="grid items-start gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-3xl bg-wave-950 p-5 text-white shadow-card sm:p-7">
            <div className="flex items-start justify-between gap-4"><div><p className="text-[.68rem] font-extrabold uppercase tracking-[.18em] text-wave-300">MetLife Stadium · Demo</p><h3 className="mt-2 text-xl font-extrabold">Where are you sitting?</h3></div><span aria-hidden="true" className="text-2xl text-wave-300">⌖</span></div>
            <div className="mt-5 grid grid-cols-3 gap-2" role="group" aria-label="Choose your stadium section">{sections.map((item) => <button key={item} type="button" aria-pressed={section === item} onClick={() => changeSection(item)} className={`min-h-11 rounded-xl border px-3 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${section === item ? "border-wave-300 bg-wave-400 text-wave-950" : "border-white/20 bg-white/5 text-white hover:bg-white/15"}`}>Section {item}</button>)}</div>
            <div aria-label={`Illustrative stadium map, selected section ${section}`} className="relative mt-5 flex h-48 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-wave-900 to-slate-950">
              <div aria-hidden="true" className="absolute h-32 w-64 rounded-[50%] border border-wave-300/50 sm:h-36 sm:w-72"><div className="absolute inset-4 rounded-[50%] border border-wave-300/30" /><div className="absolute inset-y-0 left-1/2 border-l border-wave-300/30" /><div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-wave-300/30" /></div>
              <span className="absolute left-[8%] top-4 rounded-lg bg-white px-2.5 py-1.5 text-[.65rem] font-extrabold text-ink">112 · 4 min</span><span className="absolute right-[8%] top-4 rounded-lg bg-white px-2.5 py-1.5 text-[.65rem] font-extrabold text-ink">125 · 9 min</span><span className="absolute bottom-4 left-[14%] rounded-lg bg-white px-2.5 py-1.5 text-[.65rem] font-extrabold text-ink">101 · 16 min</span>
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-wave-500 text-xs font-black text-white shadow-lg" aria-hidden="true">{section}</span>
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-white/10 px-4 py-3"><span className="text-sm text-emerald-50/70">Sample order</span><span aria-live="polite" className="text-sm font-bold">{cart.length} {cart.length === 1 ? "item" : "items"}</span></div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-[.68rem] font-extrabold uppercase tracking-[.18em] text-wave-700">Recommendations near Section {section}</p><h3 className="mt-1 text-xl font-extrabold">Pick your concession</h3></div><span className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-900">Illustrative data</span></div>
            <div className="mt-5 space-y-3" role="radiogroup" aria-label="Select a concession stand">{nearbyStands.map((stand) => <button key={stand.id} type="button" role="radio" aria-checked={activeStand.id === stand.id} onClick={() => { setActiveStandId(stand.id); setNotice(""); }} className={`flex w-full items-center justify-between gap-3 rounded-2xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wave-700 ${activeStand.id === stand.id ? "border-wave-500 bg-wave-50" : "border-slate-200 hover:border-wave-300"}`}>
              <span className="min-w-0"><span className="block font-extrabold text-ink">{stand.name}</span><span className="mt-1 block text-sm text-slate-600">Section {stand.section} · {stand.walk} min walk</span><span className="mt-1 block truncate text-xs text-slate-500">{stand.items.join(" · ")}</span></span>
              <span className="shrink-0 text-right"><span className="block text-2xl font-black text-wave-700">{stand.wait}<span className="text-xs"> min</span></span><span className="text-[.65rem] font-semibold text-slate-500">sample wait</span></span>
            </button>)}</div>
            <div className="mt-4 rounded-xl bg-slate-50 p-4"><p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Featured at {activeStand.name}</p><p className="mt-1 font-bold text-ink">{activeStand.items[0]}</p><p className="mt-1 text-sm text-slate-600">Pickup estimate: about {activeStand.wait} minutes after ordering</p></div>
            <button type="button" onClick={addToSampleOrder} className="mt-4 min-h-12 w-full rounded-xl bg-wave-500 px-5 font-extrabold text-white transition hover:bg-wave-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wave-700">Add to sample order <span aria-hidden="true">→</span></button>
            <p aria-live="polite" className="mt-3 min-h-5 text-center text-sm font-semibold text-wave-800">{notice || "Prototype interaction only—no food is ordered and nothing is sent."}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:gap-20">
        <div className="relative min-h-[340px] overflow-hidden rounded-[2rem] bg-wave-950 sm:min-h-[440px]">
          <StadiumImage className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-wave-950/90 via-wave-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8"><p className="text-xs font-extrabold uppercase tracking-[.18em] text-wave-300">The game should stay in view</p><p className="mt-2 max-w-md text-2xl font-black">No fan should have to choose between a bite and the big play.</p><a className="mt-4 inline-block text-xs underline decoration-white/60 underline-offset-4" href="https://commons.wikimedia.org/wiki/File:MetLife_Stadium.jpg" target="_blank" rel="noreferrer">Photo source · Wikimedia Commons</a></div>
        </div>
        <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-wave-700">Why GreenWave</p><h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-ink sm:text-5xl">Born from the moments fans miss.</h2>
          <div className="mt-6 space-y-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8"><p>Every season, fans step out of their seats and miss touchdowns, key interceptions, and halftime performances while waiting in unpredictable concession lines. We saw a game-day experience that had not kept pace with the technology fans already use.</p><p>GreenWave brings together mobile ordering, crowd monitoring, predictive analytics, and smart recommendations in one fan-first concept. The idea: help fans find a faster pickup location—or, in a future version, have refreshments delivered to their seats.</p><p>The name connects the green energy of Jets game day with a smoother flow through the stadium. Our mission is simple: keep fans connected to every moment by helping them spend less time waiting.</p></div>
          <div className="mt-6 rounded-r-xl border-l-4 border-wave-500 bg-wave-50 p-4 text-sm leading-6 text-slate-700"><strong className="text-ink">A hackathon concept:</strong> GreenWave is not an official New York Jets or MetLife Stadium service. The demo uses illustrative information and is not connected to venue cameras, live ordering, payment, or delivery.</div>
        </div>
      </div>
    </section>
  );
}

function PilotForm() {
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6">
      <label htmlFor="pilot-email" className="block text-sm font-bold">Email address</label>
      <input id="pilot-email" type="email" required autoComplete="email" value={email} onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }} placeholder="you@example.com" className="mt-2 min-h-12 w-full rounded-xl border border-white/30 bg-white px-4 text-ink placeholder:text-slate-500 focus:border-wave-300 focus:outline-none focus:ring-2 focus:ring-wave-300" />
      <label htmlFor="pilot-feedback" className="mt-4 block text-sm font-bold">What would make your game day better? <span className="font-normal text-emerald-100/70">(optional)</span></label>
      <textarea id="pilot-feedback" rows={3} value={feedback} onChange={(event) => setFeedback(event.target.value)} placeholder="Faster pickup, seat delivery, menu info..." className="mt-2 w-full resize-y rounded-xl border border-white/30 bg-white px-4 py-3 text-ink placeholder:text-slate-500 focus:border-wave-300 focus:outline-none focus:ring-2 focus:ring-wave-300" />
      <button type="submit" className="mt-4 min-h-12 w-full rounded-xl bg-wave-400 px-5 font-extrabold text-wave-950 transition hover:bg-wave-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Register pilot interest <span aria-hidden="true">→</span></button>
      <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm font-semibold text-wave-100">{submitted ? "Thanks for helping shape GreenWave. This prototype does not transmit or store your response." : "Prototype form only: your information stays in this page and is not submitted."}</p>
    </form>
  );
}

export default function Home() {
  return (
    <main id="home">
      <a href="#main-content" className="sr-only z-50 rounded-md bg-white p-3 text-wave-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <div className="bg-wave-950 px-4 py-2 text-center text-[.65rem] font-bold uppercase tracking-[.13em] text-white sm:text-xs">Game Day Hack-AI-thon <span className="mx-2 text-wave-300">·</span> New York Jets + Microsoft + All Star Code</div>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"><a href="#home" aria-label="GreenWave home"><GreenWaveLogo className="h-12 w-auto sm:h-14" /></a><nav aria-label="Main navigation" className="hidden items-center gap-7 text-sm font-bold text-slate-700 md:flex"><a className="hover:text-wave-700" href="#how-it-works">How it works</a><a className="hover:text-wave-700" href="#demo">Try the demo</a><a className="hover:text-wave-700" href="#story">Our story</a><a className="rounded-lg bg-wave-950 px-5 py-2.5 text-white transition hover:bg-wave-800" href="#pilot">Join the pilot list</a></nav><a className="rounded-lg bg-wave-950 px-4 py-2.5 text-sm font-bold text-white md:hidden" href="#demo">Try the demo</a></div></header>
      <div id="main-content"><Hero /></div>
      <section aria-label="GreenWave benefits" className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">{[{ icon: "◷", title: "Know the wait", text: "Compare nearby stands" }, { icon: "⌁", title: "Beat the rush", text: "Choose your best time" }, { icon: "★", title: "Stay in the game", text: "More time for every play" }].map((item) => <div key={item.title} className="flex items-center gap-4 py-5 md:px-6 md:first:pl-0"><span aria-hidden="true" className="text-2xl text-wave-700">{item.icon}</span><span><strong className="block text-sm font-extrabold text-ink">{item.title}</strong><span className="text-sm text-slate-600">{item.text}</span></span></div>)}</div></section>
      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"><div className="mx-auto max-w-2xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-wave-700">A better game-day rhythm</p><h2 className="mt-4 text-3xl font-black tracking-tight text-ink sm:text-5xl">Three steps. Back to the action.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A smarter concession run fits right into your game-day routine.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[{ n: "01", title: "Check the field", text: "See estimated waits at nearby concession stands before leaving your seat.", icon: "⌖" }, { n: "02", title: "Pick your play", text: "Compare food, distance, and pickup time to choose a convenient option.", icon: "↗" }, { n: "03", title: "Get back in time", text: "Grab your game-day favorites and make it back for the next big moment.", icon: "★" }].map((step) => <article key={step.n} className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-wave-300 hover:shadow-card"><div className="flex items-center justify-between"><span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-2xl bg-wave-50 text-2xl font-black text-wave-700 group-hover:bg-wave-500 group-hover:text-white">{step.icon}</span><span className="text-sm font-black tracking-[.2em] text-slate-300">{step.n}</span></div><h3 className="mt-7 text-xl font-extrabold text-ink">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.text}</p></article>)}</div></section>
      <ConcessionDemo />
      <Story />
      <section id="pilot" className="bg-wave-950 text-white"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_.9fr] md:items-center"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-wave-300">Help shape the fan experience</p><h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Want to see GreenWave at a game?</h2><p className="mt-4 max-w-xl leading-7 text-emerald-50/80">Register interest in a future pilot and tell us what would make a game-day concession run better. We’ll use this prototype to show what a connected signup could look like.</p></div><PilotForm /></div></section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-600 sm:px-8 md:flex-row md:items-center md:justify-between"><a href="#home" aria-label="GreenWave home"><GreenWaveLogo className="h-10 w-auto" /></a><p>Skip the line. Stay in the game.</p><p>Hack-AI-thon concept · Not an official Jets service</p></footer>
    </main>
  );
}
