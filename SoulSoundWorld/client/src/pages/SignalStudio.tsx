import { ArrowRight, CheckCircle2, CreditCard, Mail, Mic2, Music, Radio, Send, Sparkles, Upload, Wand2, Waves } from "lucide-react";

const steps = [
  {
    title: "Record",
    text: "Send a voice memo, hum, rough hook, lyrics, rhythm idea, or clear emotional direction.",
  },
  {
    title: "Translate",
    text: "We shape the signal into a production plan with sound, pacing, structure, and atmosphere.",
  },
  {
    title: "Build",
    text: "Your idea becomes a fuller record direction with instrumental, vocal, mix, and master prep.",
  },
  {
    title: "Release",
    text: "We prepare the sound and rollout assets for promo, performance, or streaming direction.",
  },
];

const services = [
  {
    icon: Sparkles,
    label: "Starter",
    title: "Signal Sketch",
    description: "Idea cleanup, melody direction, rough vocal shaping, and a clear production path.",
  },
  {
    icon: Music,
    label: "Core",
    title: "Signal Build",
    description: "Full instrumental direction, arrangement, vocal enhancement, and mastering prep.",
  },
  {
    icon: Radio,
    label: "Premium",
    title: "Signal Cinematic",
    description: "Full record direction plus promo edits, rollout copy, visuals, and release support.",
  },
];

const deliverables = [
  "Voice memo translation",
  "Instrumental direction",
  "Vocal enhancement guidance",
  "Mix and master prep",
  "Promo-ready short edits",
  "Performance-ready versions",
];

export default function SignalStudio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0A0A0A] text-[#F1F1F1]">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,245,255,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(192,38,211,0.18),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <section className="relative px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
              SoulSound Signal Studio
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] md:text-7xl">
              Voice Memo{" "}
              <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                to Finished Record.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Your voice is the signal. We are the studio. Send a melody, rough vocal,
              lyric, rhythm idea, or even just a hum — and we help translate it into
              a premium record direction with human feeling and industry-ready polish.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#start"
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-500 px-6 py-4 font-black text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-[1.03]"
              >
                Start Transmitting
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="rounded-2xl border border-fuchsia-400/40 bg-black/40 px-6 py-4 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300 hover:bg-white/10"
              >
                View Signal Modules
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-300/20 via-fuchsia-500/20 to-purple-600/20 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-cyan-300/20 bg-black/40 shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur-xl" />
            <div className="absolute inset-10 rounded-full border border-fuchsia-400/20
