import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Mail,
  Mic2,
  Music,
  Radio,
  Send,
  Sparkles,
  Upload,
  Wand2,
  Waves,
} from "lucide-react";

const packages = [
  {
    title: "Signal Sketch",
    price: "$47",
    tag: "Starter",
    subject: "Signal Sketch Booking",
    description: "For hums, hooks, voice notes, and early ideas that need direction.",
    features: ["Idea cleanup", "Melody direction", "Rough structure", "1 revision"],
  },
  {
    title: "Signal Build",
    price: "$197",
    tag: "Most Popular",
    subject: "Signal Build Booking",
    description: "For creators ready to turn a clear idea into a full record direction.",
    features: ["Instrumental direction", "Arrangement support", "Vocal enhancement guidance", "Mix/master prep", "2 revisions"],
    featured: true,
  },
  {
    title: "Signal Cinematic",
    price: "$497",
    tag: "Premium",
    subject: "Signal Cinematic Booking",
    description: "For full song worlds with rollout, visuals, promo direction, and priority support.",
    features: ["Complete production direction", "Advanced vocal direction", "Promo edits", "Visual rollout direction", "Priority support"],
  },
];

const sendItems = ["Voice memo", "Hum or melody", "Rough vocal", "Lyrics or hook", "Beat reference", "Emotional direction"];
const getItems = ["Production direction", "Instrumental build path", "Vocal enhancement guidance", "Mix/master prep", "Promo edit direction", "Rollout support"];

function mailto(subject) {
  return `mailto:soulsoundworld.live@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    "Name:\nArtist name:\nPackage:\nWhat are you trying to create?\nPaste references:\nAttach or link voice memo/audio:\nDeadline:\nBudget notes:\n"
  )}`;
}

export default function SignalStudio() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#05040a] text-white">
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.28),transparent_34%),radial-gradient(circle_at_85%_35%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(192,38,211,0.16),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <nav className="relative z-10 border-b border-white/10 bg-black/60 px-6 py-5 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="/" className="text-2xl font-black tracking-[-0.05em]">
            SSW<span className="text-cyan-300">.</span>
          </a>
          <a href="/" className="text-sm font-bold text-white/60 transition hover:text-cyan-300">
            Back to SoulSoundWorld
          </a>
        </div>
      </nav>

      <section className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-cyan-200">
              Live Creator Service
            </p>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Voice Memo{" "}
              <span className="bg-gradient-to-r from-purple-300 via-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">
                to Finished Record.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
              Send a hum, rough vocal, lyrics, rhythm idea, or phone recording.
              We translate your raw signal into a polished music direction built for release, promo, or performance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={mailto("Signal Studio Submission")}
                className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-300 px-6 py-4 font-black text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-[1.03]"
              >
                Submit Your Signal <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#packages"
                className="rounded-2xl border border-purple-400/40 bg-black/40 px-6 py-4 font-bold text-white backdrop-blur-xl transition hover:border-cyan-300 hover:bg-white/10"
              >
                View Packages
              </a>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-300/20 via-fuchsia-500/20 to-purple-600/20 blur-3xl" />
            <div className="absolute inset-0 rounded-full border border-cyan-300/20 bg-black/40 shadow-[0_0_80px_rgba(34,211,238,0.18)] backdrop-blur-xl" />
            <div className="absolute inset-10 rounded-full border border-fuchsia-400/20" />
            <div className="absolute inset-20 rounded-full border border-cyan-300/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full border border-white/10 bg-white/[0.04] p-10 shadow-[0_0_70px_rgba(192,38,211,0.22)]">
                <Waves className="h-24 w-24 text-cyan-200" />
              </div>
            </div>
            <div className="absolute left-4 top-12 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
              HUM → HOOK
            </div>
            <div className="absolute bottom-14 right-3 rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-sm text-white/75 backdrop-blur-xl">
              MEMO → MASTER
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-14 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-purple-300">How It Works</p>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {[
              ["Record", "Send your rough audio, lyric, hum, or reference."],
              ["Translate", "We shape the creative direction and sound identity."],
              ["Build", "Your idea becomes a full production pathway."],
              ["Release", "You get assets and direction for promo or performance."],
            ].map(([title, text], index) => (
              <article key={title} className="rounded-3xl border border-white/10 bg-[#111111]/80 p-6 backdrop-blur-xl">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 font-black text-cyan-200">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="packages" className="relative z-10 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-cyan-300">Service Packages</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] md:text-5xl">
            Pick the build level. Send the signal. We move.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {packages.map((item) => (
              <article
                key={item.title}
                className={`rounded-3xl border p-7 backdrop-blur-xl transition hover:scale-[1.02] ${
                  item.featured
                    ? "border-cyan-300 bg-gradient-to-b from-cyan-300/10 to-[#111111] shadow-[0_0_45px_rgba(34,211,238,0.2)]"
                    : "border-purple-500/25 bg-[#111111]/80 hover:border-cyan-300/70"
                }`}
              >
                <p className="text-xs font-black uppercase tracking-[0.25em] text-purple-300">{item.tag}</p>
                <h3 className="mt-3 text-2xl font-black">{item.title}</h3>
                <p className="mt-2 text-5xl font-black text-cyan-200">{item.price}</p>
                <p className="mt-4 min-h-[84px] leading-7 text-white/65">{item.description}</p>
                <div className="mt-6 space-y-3">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={mailto(item.subject)}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 font-black transition ${
                    item.featured
                      ? "bg-cyan-300 text-black hover:bg-white"
                      : "border border-cyan-300/30 text-cyan-200 hover:bg-cyan-300 hover:text-black"
                  }`}
                >
                  Book {item.title}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-[#111111]/75 p-8 backdrop-blur-xl">
            <Mic2 className="mb-5 h-10 w-10 text-cyan-200" />
            <h2 className="text-3xl font-black">What You Can Send</h2>
            <div className="mt-6 grid gap-3 text-white/70">
              {sendItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#111111]/75 p-8 backdrop-blur-xl">
            <Upload className="mb-5 h-10 w-10 text-purple-300" />
            <h2 className="text-3xl font-black">What You Get Back</h2>
            <div className="mt-6 grid gap-3 text-white/70">
              {getItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-purple-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/10 via-purple-500/10 to-black p-8 backdrop-blur-xl md:p-12">
          <Wand2 className="mb-5 h-11 w-11 text-cyan-200" />
          <h2 className="text-3xl font-black tracking-[-0.03em] md:text-5xl">
            Not a fake beat store. A creative translation studio.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">
            You bring the idea. We help protect the feeling, shape the sound, and turn the raw moment into something usable.
            Built for creators who work in the dark and need the signal to survive the process.
          </p>
        </div>
      </section>

      <section id="start" className="relative z-10 px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/25 bg-black/70 p-8 text-center shadow-[0_0_70px_rgba(34,211,238,0.18)] backdrop-blur-xl md:p-12">
          <CreditCard className="mx-auto mb-5 h-11 w-11 text-cyan-200" />
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Submit Your Signal</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">
            Send the idea now. Include the package you want, your rough audio or reference links, and what you want the final record to feel like.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href={mailto("Signal Studio Submission")}
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-500 to-cyan-300 px-6 py-4 font-black text-black shadow-[0_0_35px_rgba(34,211,238,0.35)] transition hover:scale-[1.03]"
            >
              <Send className="h-5 w-5" />
              Email Your Idea
            </a>

            <a
              href={mailto("Signal Studio Package Questions")}
              className="inline-flex items-center gap-2 rounded-2xl border border-fuchsia-400/40 px-6 py-4 font-bold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              <Mail className="h-5 w-5" />
              Ask First
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
