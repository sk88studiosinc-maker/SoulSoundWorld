
import { CreditCard, Mail, Mic2, Music, Radio, Send, Sparkles, Upload } from "lucide-react";

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

export default function SignalStudio() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
            SoulSound Signal Studio
          </p>

          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Turn unfinished ideas into finished records.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/75 md:text-xl">
            Send us a voice memo, melody, rough vocal, lyrics, rhythm idea, or even just a hum.
            We help translate your signal into professionally produced music, visuals, and rollout-ready content.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#start"
              className="rounded-full bg-cyan-300 px-6 py-3 font-bold text-black transition hover:bg-white"
            >
              Start Your Song
            </a>
            <a
              href="#services"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">Service Tiers</h2>
          <p className="mt-3 max-w-2xl text-white/65">
            Built for artists, writers, performers, and creators who have the idea but need the finished sound.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <item.icon className="mb-5 h-8 w-8 text-cyan-300" />
                <p className="text-sm uppercase tracking-[0.25em] text-purple-300">{item.label}</p>
                <h3 className="mt-2 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-white/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Mic2 className="mb-5 h-9 w-9 text-cyan-300" />
            <h2 className="text-3xl font-bold">What You Can Send</h2>
            <ul className="mt-6 space-y-3 text-white/70">
              <li>Voice memos</li>
              <li>Hums or melodies</li>
              <li>Rough vocals</li>
              <li>Lyrics or hooks</li>
              <li>Beat references</li>
              <li>Emotional direction</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <Upload className="mb-5 h-9 w-9 text-purple-300" />
            <h2 className="text-3xl font-bold">What We Deliver</h2>
            <ul className="mt-6 space-y-3 text-white/70">
              <li>Industry-style production direction</li>
              <li>Vocal enhancement guidance</li>
              <li>Mixing and mastering prep</li>
              <li>Promo-ready short edits</li>
              <li>Performance-ready versions</li>
              <li>Visual rollout direction</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="start" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-cyan-300/20 bg-white/[0.04] p-8 text-center">
          <CreditCard className="mx-auto mb-5 h-10 w-10 text-cyan-300" />
          <h2 className="text-3xl font-black md:text-5xl">Start Your Signal</h2>
          <p className="mx-auto mt-5 max-w-2xl text-white/70">
            The full checkout and upload portal is being activated. For now, send your idea directly and we will route you to the right package.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:soulsoundworld.live@gmail.com?subject=Signal Studio Submission"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-black transition hover:bg-white"
            >
              <Send className="h-4 w-4" />
              Submit by Email
            </a>

            <a
              href="mailto:soulsoundworld.live@gmail.com?subject=Signal Studio Payment Options"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Ask About Packages
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
