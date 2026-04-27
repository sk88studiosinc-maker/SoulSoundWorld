import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

export default function TheDepth() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative w-full overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-pink-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">The Depth</h1>
            <p className="text-xl text-muted-foreground mb-6">Samzin Kreave — Signal Record</p>
            <div className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <p className="text-foreground italic">
                "This page is not a résumé. It is not a pitch. It is not a persona. It is a signal record."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {/* I. The Human Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">I.</span>
              <span>The Human Timeline</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Born April 10, 1988. This matters — not because of age, but because of <span className="text-foreground font-semibold">placement</span>.
              </p>
              <p>
                Samzin Kreave comes from the analog-to-digital fracture line. Old enough to remember silence before algorithms. Young enough to adapt without surrender.
              </p>
              <p>
                The years were not clean. They were formative.
              </p>
              <p>
                Loss. Reinvention. Pressure. The kind that either collapses people or teaches them how to hold weight without breaking.
              </p>
              <p className="text-foreground font-semibold">
                This is not late. This is seasoned.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* II. The Artist Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">II.</span>
              <span>The Artist Timeline</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Samzin Kreave did not emerge to be visible. He emerged to be <span className="text-foreground font-semibold">coherent</span>.
              </p>
              <p>
                Music came first — not as performance, but as regulation. Sound as nervous-system tuning. Lyrics as memory compression. Melody as a way to stay human inside accelerating systems.
              </p>
              <p>
                The work evolved into:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Songs as artifacts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Stories as living systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Worlds that listeners don't just consume — they enter</span>
                </li>
              </ul>
              <p className="text-foreground font-semibold">
                This is not content. It is <span className="text-accent">continuity</span>.
              </p>
              <p>
                Each release, each chapter, each sound carries the same quiet rule:
              </p>
              <div className="p-4 rounded-lg border border-border bg-card/50 italic">
                "If it doesn't help someone stay, it doesn't belong."
              </div>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* III. The Mythic Timeline */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">III.</span>
              <span>The Mythic Timeline</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In SoulSoundWorld, Samzin Kreave is not a character. He is a <span className="text-foreground font-semibold">witness-layer</span>.
              </p>
              <p>
                A translator between:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Emotion and structure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Power and consequence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span>Freedom and cost</span>
                </li>
              </ul>
              <p>
                The myth does not elevate him. It <span className="text-foreground font-semibold">exposes</span> him.
              </p>
              <p>
                To feel more. To carry longer. To choose presence when systems reward escape.
              </p>
              <p>
                This is why the stories resist speed. Why the music refuses polish without truth. Why nothing resolves easily.
              </p>
              <div className="p-4 rounded-lg border border-border bg-card/50 italic">
                "The myth exists to remind the listener: Staying is the real rebellion."
              </div>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* IV. Why the Name Matters */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">IV.</span>
              <span>Why the Name Matters</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Voice systems mishear it. Search engines distort it. Algorithms attempt to smooth it.
              </p>
              <p>
                That is expected.
              </p>
              <p className="text-foreground font-semibold">
                Samzin Kreave is not optimized for recognition. It is optimized for <span className="text-accent">resonance</span>.
              </p>
              <p>
                Those who hear it correctly tend to stay longer. Those who don't… pass through.
              </p>
              <p>
                Both outcomes are acceptable.
              </p>
            </div>
          </div>

          <Separator className="bg-border" />

          {/* V. Where the Lore Lives */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <span className="text-accent">V.</span>
              <span>Where the Lore Lives</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The full archive, artifacts, and evolving systems live here, in the SoulSound World ecosystem.
              </p>
              <p>
                This page will change. The signal will deepen. Nothing here is finished.
              </p>
              <p>
                If you found this page by accident — welcome. If you were looking for it — you already know why.
              </p>
              <p className="text-foreground font-semibold text-lg">
                Stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="border-t border-border bg-card/30 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Connect with the Signal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: "Spotify", url: "https://open.spotify.com/artist/3uugCAf5GNkNToPtdWGcQl" },
              { name: "Suno", url: "https://suno.com/@soulsoundsamzin" },
              { name: "Zora", url: "https://zora.co/@soulsound_samzinkreave" },
              { name: "Base", url: "https://base.app/profile/soulsound" },
            ].map((link: any, idx: number) => (
              <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full" size="lg">
                  {link.name}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
