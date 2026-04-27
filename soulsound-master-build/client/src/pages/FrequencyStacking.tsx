import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Zap, Eye, Shield, Scroll, Users, Dice6 } from "lucide-react";

export default function FrequencyStacking() {
  const coreAttributes = [
    {
      name: "Coherence",
      symbol: "COH",
      icon: Heart,
      description: "Emotional and identity stability. Your sense of self.",
      color: "text-pink-400",
    },
    {
      name: "Resonance",
      symbol: "RES",
      icon: Zap,
      description: "Power to affect the world. Your capacity to create change.",
      color: "text-purple-400",
    },
    {
      name: "Presence",
      symbol: "PRE",
      icon: Eye,
      description: "Awareness of what matters. Your attention and clarity.",
      color: "text-cyan-400",
    },
    {
      name: "Integrity",
      symbol: "INT",
      icon: Shield,
      description: "Resistance to corruption. Your ability to stay true.",
      color: "text-yellow-400",
    },
  ];

  const turnPhases = [
    {
      phase: "1. World Phase",
      description: "The Guide introduces a System Pressure",
      examples: ["Time acceleration", "Scarcity event", "Emotional extraction", "Algorithmic drift"],
    },
    {
      phase: "2. System Phase",
      description: "The System reacts and introduces new costs",
      examples: ["Amplifies pressure", "Offers temptations", "Accelerates time", "Triggers cost events"],
    },
    {
      phase: "3. Player Phase",
      description: "Each player chooses one action",
      examples: ["Act (use Resonance)", "Rest (recover)", "Connect (bond)", "Resist (negate)"],
    },
    {
      phase: "4. Integration Phase",
      description: "Players describe what changed and what it cost",
      examples: ["Narrate outcomes", "Accept costs", "Update character state"],
    },
  ];

  const costTypes = [
    { type: "Effect", description: "A condition persists" },
    { type: "Memory", description: "Lose or distort a backstory detail" },
    { type: "Time", description: "Skip next turn" },
    { type: "Connection", description: "Lose access to another player temporarily" },
    { type: "Artifact", description: "Sacrifice or corrupt an artifact" },
    { type: "Identity", description: "Lose 1 COH permanently unless healed" },
  ];

  const playerActions = [
    {
      action: "Act",
      description: "Use Resonance to change the world",
      mechanics: "Roll: RES + PRE vs System Difficulty",
      outcome: "Success → Change happens | Failure → Change happens with cost",
    },
    {
      action: "Rest",
      description: "Recover from pressure",
      mechanics: "Restore 1–3 COH or INT (choose one)",
      outcome: "Regain stability and presence",
    },
    {
      action: "Connect",
      description: "Restore another player",
      mechanics: "Restore 1 PRE or COH to another player",
      outcome: "Builds narrative bonds and mutual support",
    },
    {
      action: "Resist",
      description: "Negate a System effect",
      mechanics: "Roll INT + COH to resist",
      outcome: "Block the pressure, but at a cost",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <section className="relative w-full overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Dice6 className="w-8 h-8 text-accent" />
              <span className="text-sm font-semibold text-accent">TABLETOP RPG SYSTEM</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Frequency Stacking</h1>
            <p className="text-xl text-muted-foreground mb-6">
              A cooperative mythic coherence game. This is not a game about winning. It is a game about staying.
            </p>
            <div className="p-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm">
              <p className="text-foreground italic">
                "You do not turn on a machine. You turn on yourself. You wrap sound around your nervous system. You
                ride resonance through collapsing corridors of reality. You glow. You move faster than time. And slowly,
                if no one is watching, you forget who you were before you glowed."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attributes">Attributes</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="actions">Actions</TabsTrigger>
            <TabsTrigger value="costs">Costs</TabsTrigger>
            <TabsTrigger value="artifacts">Artifacts</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-border bg-card/50">
                <CardHeader>
                  <CardTitle>Game Basics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Players</h4>
                    <p className="text-sm text-muted-foreground">2–5 players + optional Guide</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Mode</h4>
                    <p className="text-sm text-muted-foreground">Cooperative, with optional asymmetric pressure role</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Session Length</h4>
                    <p className="text-sm text-muted-foreground">60–180 minutes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Goal</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain coherence long enough to transform the world without losing yourself.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card/50">
                <CardHeader>
                  <CardTitle>Core Philosophy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">There is no victory.</h4>
                    <p className="text-muted-foreground">There are outcomes.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">There are no villains.</h4>
                    <p className="text-muted-foreground">Only costs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Your job is not to avoid cost.</h4>
                    <p className="text-muted-foreground">Your job is to choose which cost you are willing to carry.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">That is what makes you a player.</h4>
                    <p className="text-muted-foreground">Staying is the real rebellion.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Attributes */}
          <TabsContent value="attributes" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreAttributes.map((attr, idx) => {
                const Icon = attr.icon;
                return (
                  <Card key={idx} className="border-border bg-card/50">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${attr.color}`} />
                        {attr.name}
                      </CardTitle>
                      <CardDescription>{attr.symbol}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{attr.description}</p>
                      <div className="mt-4 p-3 rounded-lg bg-background/50 border border-border">
                        <p className="text-xs text-muted-foreground">
                          <span className="font-semibold text-foreground">Range:</span> 0–10 (starts at 5)
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          <span className="font-semibold text-foreground">At 0:</span> Fracture State
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Rules */}
          <TabsContent value="rules" className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Turn Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {turnPhases.map((phase, idx) => (
                  <Card key={idx} className="border-border bg-card/50">
                    <CardHeader>
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <CardDescription>{phase.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.examples.map((example, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Collapse & Fracture</h3>
              <Card className="border-border bg-card/50">
                <CardContent className="pt-6 space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">When any attribute reaches 0:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Player enters Fracture State</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Cannot take Resonance actions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>Speak only in distorted narrative</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span>May only recover through Rest or Connection</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">If two or more players fracture:</h4>
                    <p className="text-sm text-muted-foreground">The world destabilizes and the session enters Endgame.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Actions */}
          <TabsContent value="actions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {playerActions.map((action, idx) => (
                <Card key={idx} className="border-border bg-card/50">
                  <CardHeader>
                    <CardTitle>{action.action}</CardTitle>
                    <CardDescription>{action.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-accent mb-1">MECHANICS</p>
                      <p className="text-sm text-muted-foreground">{action.mechanics}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent mb-1">OUTCOME</p>
                      <p className="text-sm text-muted-foreground">{action.outcome}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Costs */}
          <TabsContent value="costs" className="space-y-6">
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>The Cost System</CardTitle>
                <CardDescription>Every powerful action introduces a cost. Costs must be accepted—not avoided.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {costTypes.map((cost, idx) => (
                    <div key={idx} className="p-4 rounded-lg border border-border bg-background/50">
                      <h4 className="font-semibold text-foreground mb-1">{cost.type}</h4>
                      <p className="text-sm text-muted-foreground">{cost.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Artifacts */}
          <TabsContent value="artifacts" className="space-y-6">
            <Card className="border-border bg-card/50">
              <CardHeader>
                <CardTitle>Artifacts</CardTitle>
                <CardDescription>Artifacts stabilize meaning and anchor reality.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Examples of Artifacts</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Songs", "Letters", "Objects", "Memories", "Tokens", "Symbols"].map((artifact, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-background/50 border border-border text-center">
                        <p className="text-sm text-foreground">{artifact}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What Artifacts Can Do</h4>
                  <ul className="space-y-2">
                    {["Prevent fractures", "Absorb costs", "Anchor reality", "Restore connection"].map((ability, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{ability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">What Can Happen to Artifacts</h4>
                  <ul className="space-y-2">
                    {["Lost", "Corrupted", "Transformed", "Shared"].map((state, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{state}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-card/30 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Frequency Stacking is designed for groups ready to explore what happens when you choose presence over escape.
            Gather your players, set the stage, and begin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
              Download Player Sheet
            </Button>
            <Button size="lg" variant="outline">
              Read Full Rules
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
